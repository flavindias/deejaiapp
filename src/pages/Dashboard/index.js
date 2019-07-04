import React from 'react';
import HeaderApp from '../../components/HeaderApp';
import api from '../../services/api';
import './style.css';
import RoomItem from '../../components/RoomItem';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: [],
      latitude: -8,
      longitude: -36,
      loading: true
    }
  }

  componentDidMount () {
    this.getTopMusic()
    this.getRooms()
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


  }
  getTopMusic = async () => {
    try {
      await api.get('/users/topMusic');
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

    }
    catch (e) {
      console.warn(e);
      // alert(JSON.stringify(e));
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
            <div class="col-md-8">
              <h1 className="float-left" style={{ color: '#fff' }}>Rooms</h1>
            </div>
            <div class="col-md-4">
              <div class="btn-group float-right mt-2" role="group">
                <a
                  onClick={this.createRoom}
                  style={{ color: 'white' }}
                  aria-hidden="true"
                  className={"btn btn-success float-right"}>
                  <i
                    class="fa fa-plus"
                    aria-hidden="true">
                  </i>
                  Create Room
                  </a>
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
      </div>
    )
  }
}
