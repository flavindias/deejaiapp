import React from 'react';
import Header from '../../components/Header';
import SpotifyButton from '../../components/SpotifyButton';
import './style.css';


export default class Home extends React.Component {

  render () {
    return (
      <div className={"home"}>
        <Header home={true} />
        <main role="main" className="cover">
          <div className="container h-100 home">
            <div className="row h-100 justify-content-center align-items-center text-center">
              <div className="col-12">
                <div className="form-group">
                  <h1 className="cover-heading">A smart way to interact with your music.</h1>
                </div>
                <div className="form-group">
                  <p className="lead">Connect your Spotify account and discover a new musical experience. </p>
                  <p className="lead"><SpotifyButton title={"Join to Beta"} /></p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
