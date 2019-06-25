import SpotifyLogin from "react-spotify-login";
import React from "react";
import api from "../../services/api";



export default class Header extends React.Component {

    constructor(props){
        super(props)
    }

    onSuccess = response => {

        window.sessionStorage.setItem("@DeejAI:token", response.access_token);
        this.getTopMusic()


    };

    getTopMusic = async () => {
        try {
            console.log(window.sessionStorage.getItem("@DeejAI:token"));
            const response = await api.get('/users/topMusic')
            if (response){
                // console.log(response.data)
            }
        }
        catch (e){
            console.log(e)
        }
    }

    onFailure = response => console.error(response);

    render() {
        return (
            <SpotifyLogin clientId={"8e50fa5257fe4537b86253accb36a7fc"}
                          redirectUri={"http://localhost:8080/callback"}
                          onSuccess={this.onSuccess}
                          onFailure={this.onFailure}
                          scope={["user-read-recently-played", "user-top-read", "user-library-modify", "user-library-read", "user-read-email", "user-read-birthdate", "user-read-private", "user-read-playback-state", "user-modify-playback-state", "user-read-currently-playing", "user-follow-read", "user-follow-modify", "playlist-read-private", "playlist-modify-public", "playlist-modify-private", "playlist-read-collaborative", "app-remote-control", "streaming"]}
                          buttonText={this.props.title ? this.props.title : "Join Now"}
                          className="btn btn-lg btn-success"/>
        )
    }
}
