import SpotifyLogin from "react-spotify-login";
import React from "react";

const onSuccess = response => {
    console.log(response.access_token)

    window.sessionStorage.setItem("@DeejAI:token", response.access_token);
    console.log(window.sessionStorage.getItem("@DeejAI:token"))
};
const onFailure = response => console.error(response);

export default class Header extends React.Component {

    render() {
        return (
            <SpotifyLogin clientId={"8e50fa5257fe4537b86253accb36a7fc"}
                          redirectUri={"http://localhost:8080/callback"}
                          onSuccess={onSuccess}
                          onFailure={onFailure}
                          scope={["user-read-recently-played", "user-top-read", "user-library-modify", "user-library-read", "user-read-email", "user-read-birthdate", "user-read-private", "user-read-playback-state", "user-modify-playback-state", "user-read-currently-playing", "user-follow-read", "user-follow-modify", "playlist-read-private", "playlist-modify-public", "playlist-modify-private", "playlist-read-collaborative", "app-remote-control", "streaming"]}
                          buttonText={this.props.title ? this.props.title : "Join Now"}
                          className="btn btn-lg btn-success"/>
        )
    }
}
