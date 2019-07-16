import React from 'react';
import api from '../../services/api';
import Header from '../../components/HeaderApp';
import { Link } from 'react-router-dom';
import SpotifyLogin from 'react-spotify-login';
import ReactGA from 'react-ga';
import "./style.css";


export default class RoomInvite extends React.Component {

  constructor(props) {
    super(props);
    ReactGA.initialize('UA-142975359-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.state = {
      room: [],
      zoom: 15
    }
  }
  async componentDidMount () {
    this.getRoom();
  }

  getRoom = async () => {
    let response = await api.get(`/rooms/${this.props.match.params.code}/invite`);
    if (response) {
      this.setState({
        room: response.data
      });
      // alert(JSON.stringify(response));
    }
  }

  joinRoom = async () => {
    let response = await api.post(`/rooms/${this.props.match.params.code}`)
    if (response) {
      alert("Sucess")
    }
  }

  onSuccess = response => {
    window.sessionStorage.setItem("@DeejAI:token", response.access_token);
    this.getTopMusic();
  };

  onFailure = response => alert(response);


  getTopMusic = async () => {
    try {
      // alert(window.sessionStorage.getItem("@DeejAI:token"));
      const response = await api.get('/users/topMusic')
      if (response) {
        console.log(response.data)
        //    go to rooms
        this.props.history.push(`/app/rooms/${this.props.match.params.code}`);
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  render () {
    const { room } = this.state;
    // const position = this.room.location ? this.room.location.coordinates : [ -8, -36 ];
    // const position = this.state.data.address ? (this.state.data.address.coordinates ? this.state.data.address.coordinates.coordinates : [this.info.lat, this.info.lng]) : [this.info.lat, this.info.lng];
    // const position = [ -8, -36 ];
    const defaultImg = `${process.env.PUBLIC_URL}/img/default-profile.png`;
    return (
      <div>
        <Header />
        <main role="main" className="cover">
          <div className="container h-100 home">
            <div className="row h-100 justify-content-center align-items-center text-center">
              <div className="col-12">


                <div className="row">
                  <div className="col-lg-12">
                    <div className="tile">
                      <div className="wrapper">
                        <div className="header">
                          <Link to="/">
                            <img className={"logo-icon"} src={process.env.PUBLIC_URL + '/logo-color.png'} alt="deejai logo" />

                          </Link>
                        </div>
                        <div className="card hovercard">
                          <div className="cardheader" style={{
                            backgroundImage: `url(${room.banner})`,
                            backgroundSize: 'cover',
                            height: '125px',
                          }}>

                          </div>
                          <div className="avatar">
                            <img alt="Owner avatar" src={this.state.room.owner ? (this.state.room.owner.photo !== '' ? this.state.room.owner.photo : defaultImg) : defaultImg} />
                          </div>
                          <div className="info">
                            <div className="title">
                              <span >{this.state.room.owner ? this.state.room.owner.display_name : ""}</span>
                            </div>
                            <div className="desc"><h1>Hello,</h1></div>
                            <div className="desc"><p>I invited you to my room to enjoy a new musical experience, just click on join</p></div>
                          </div>
                        </div>
                        <div className="footer text-center">
                          <SpotifyLogin clientId={"8e50fa5257fe4537b86253accb36a7fc"}
                            redirectUri={`https://deejai.me/callback`}
                            // redirectUri={"http://localhost:8080/callback"}
                            onSuccess={this.onSuccess}
                            scope={[
                              "user-read-recently-played",
                              "user-top-read",
                              "user-library-modify",
                              "user-library-read",
                              "user-read-email",
                              "user-read-birthdate",
                              "user-read-private",
                              "user-read-playback-state",
                              "user-modify-playback-state",
                              "user-read-currently-playing",
                              "user-follow-read",
                              "user-follow-modify",
                              "playlist-read-private",
                              "playlist-modify-public",
                              "playlist-modify-private",
                              "playlist-read-collaborative",
                              "app-remote-control",
                              "streaming" ]}
                            buttonText={"Join Now"}
                            className="btn btn-lg btn-success" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
