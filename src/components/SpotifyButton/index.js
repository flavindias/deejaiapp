import SpotifyLogin from "react-spotify-login";
import React from "react";
import api from "../../services/api";

export default class SpotifyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location;

  }
  componentDidMount () {
    console.log(this.props.redirectUrl)
  }
  onSuccess = response => {
    window.sessionStorage.setItem("@DeejAI:token", response.access_token);
    const expires = new Date().setMinutes(new Date().getMinutes() + response.expires_in / 60);
    window.sessionStorage.setItem("@DeejAI:token_expires_in", expires);
    this.getTopMusic();
  };

  onFailure = response => alert(response);


  getTopMusic = async () => {
    try {
      // alert(window.sessionStorage.getItem("@DeejAI:token"));
      const response = await api.get('/users/topMusic')
      const redirect = this.props.redirectUrl;
      if (response) {
        //    go to rooms
        console.log(this.props);
        this.props.history.push(`${redirect ? redirect : "/app"}`);
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  render () {

    return (
      <div>
        <SpotifyLogin clientId={"8e50fa5257fe4537b86253accb36a7fc"}
          redirectUri={`https://deejai.me/callback`}
          // redirectUri={"http://localhost:8080/callback"}
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
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
          buttonText={this.props.title ? this.props.title : "Join Now"}
          className="btn btn-lg btn-success" />
      </div>

    )
  }
}
