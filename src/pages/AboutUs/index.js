import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import ReactGA from 'react-ga';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-142975359-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render () {
    const urlCin = 'https://cin.ufpe.br';
    return (
      <div>
        <Header about={true} />
        <main role={"main"} className={"cover"}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Our project</h1>
                <p style={{ 'background-color': 'white', 'padding': '20px', 'border-radius': '10px', 'color': 'rgb(52,58,64)' }}>"DeejAi" is an application developed by a
                <Link to={"/team"}>student group</Link> of
                <a href={urlCin} target={"_blank"}>Cin-UFPE</a> when they attended the discipline of
                <a href="https://cin.ufpe.br/~musica" target={"_blank"}>Computational Musicology</a> ministered by
                <a href={urlCin}>Geber Ramalho</a> and <a href={urlCin}>Giordano Ribeiro</a>.
                        This application has as objective to resolve a common problem of many users, recommend music for a
                  users group.<br />
                  To use our app you just need to connect your Spotify account and create or join in a room, keep calm
                  this room could be private for your friends if you prefer,
                  so the algorithm, based on members profile, will recommend a playlist.<br />
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
