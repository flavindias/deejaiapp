import React from 'react';
import Header from '../../components/Header'
import SpotifyButton from "../../components/SpotifyButton";
export default class About extends React.Component {
  render () {
    return (
      <div>
        <Header about={true} />
        <main role={"main"} className={"cover"}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Our project</h1>
                <p style={{ 'background-color': 'white', 'padding': '20px', 'border-radius': '10px', 'color': 'rgb(52,58,64)' }}>"DeejAi" is an application developed by a <a
                  href="/team">student group</a> of <a href="https://cin.ufpe.br" target={"_blank"}>Cin-UFPE</a> when they attended the discipline of <a href="https://cin.ufpe.br/~musica" target={"_blank"}>Computational Musicology</a> ministered by <a href="">Geber Ramalho</a> and <a href="">Giordano Ribeiro</a>. This application has as objective to resolve a common problem of many users, recommend music for a users group.<br />
                  To use our app you just need to connect your Spotify account and create or join in a room, keep calm this room could be private for your friends if you prefer, so the algorithm based on members profile will recommend a playlist.<br />
                  Hey, after we generate a playlist we’ll ask if you like our platform and our recommended songs. <br />
                  And don’t forget if you like please share us.</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    )
  }
}
