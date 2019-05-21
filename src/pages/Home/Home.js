import React from 'react';
import Header from '../../components/Header/Header';
import SpotifyButton from '../../components/SpotifyButton/SpotifyButton';
import SpotifyLogin from 'react-spotify-login';
import CSS from './Home.css';



export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <main role="main" className="inner cover" style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <div className="container d-flex h-100">
                        <div className="row text-center h-100">
                            <div className="col-12 my-auto">
                                <h1 className="cover-heading">A smart way to interact with your music.</h1>
                                <p className="lead">Connect your Spotify account and discover a new musical experience. </p>
                                <p className="lead">
                                    <SpotifyButton/>

                                </p>
                            </div>
                        </div>
                    </div>


                </main>






            </div>
        )
    }
}