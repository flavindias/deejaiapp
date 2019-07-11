import React from 'react';
import HeaderApp from '../../components/HeaderApp';
import api from '../../services/api';
import './style.css';
import RoomItem from '../../components/RoomItem';
import AuthService from '../../services/auth';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.AuthService = new AuthService();
    this.state = {
      rooms: [],
      latitude: -8,
      longitude: -36,
      loading: true
    }
  }

  async componentDidMount () {
    await this.makeRemoteRequest();

  }
  makeRemoteRequest = async () => {
    this.getTopMusic();
    this.getRooms();
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this.setState({
          latitude,
          longitude,
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
    // if (await this.AuthService.isLoggedIn()) {

    // }
    // else {
    //   alert("nao pega")
    //   this.props.history.push("/login");

    // }
  }
  getTopMusic = async () => {
    try {
      const response = await api.get('/users/topMusic');
      console.log(response)
      // if (response.status === 500) {
      //   this.props.history.push("/logout");
      // }
    }
    catch (e) {
      console.warn(e);

    }
  }
  getRooms = async () => {
    try {
      const resp = await api.get('/rooms')
      if (resp) {
        this.setState({
          rooms: resp.data
        })
      }
      else {
        this.props.history.push("/logout");
      }

    }
    catch (e) {
      console.warn(e);
    }
  }


  createRoom = async () => {
    try {
      const { latitude, longitude } = this.state;
      let token = `Bearer ${window.sessionStorage.getItem("@DeejAI:token")}`;
      let header = {
        'Authorization': token
      }
      let response = api.post('/rooms', {
        latitude,
        longitude,
        description: 'A awesome deejai room.'
      }, {
          headers: header
        });
      if (response) {
        alert("Room has been created.");
        this.getRooms();
      }
    }
    catch (e) {
      console.warn(e);
    }
  }



  render () {
    return (
      <div>
        <HeaderApp />
        <div className={"container"}>
          <div className="row">
            <div className="col-md-8">
              <h1 className="float-left">Rooms</h1>
            </div>
            <div className="col-md-4">
              <div className="btn-group float-right mt-2" role="group">
                <button
                  onClick={this.createRoom}
                  style={{ color: 'white' }}
                  aria-hidden="true"
                  className={"btn btn-success float-right"}>

                  <i
                    className="fa fa-plus"
                    aria-hidden="true">
                  </i>
                  Create Room
                  </button>

              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-12">{this.state.rooms.map(room => <RoomItem room={room} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
