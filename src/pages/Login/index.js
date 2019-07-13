import React from 'react';
import Header from '../../components/Header';
import SpotifyButton from '../../components/SpotifyButton';
import { Redirect } from 'react-router-dom';



export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: false };
  }

  loadData = (url) => {

  }
  render () {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <div>
        <Header />
        <main role="main" className="cover">
          <div className="container h-100 home">
            <div className="row h-100 justify-content-center align-items-center text-center">
              <div className="col-12">
                <div className="form-group">
                  <h1 className="cover-heading">Please, sign in. </h1>
                </div>
                <div className="form-group">
                  <p className="lead">
                    <SpotifyButton
                      title={"Let's Go"}
                      history={this.props.history}
                      redirectUrl={this.state.state.from.pathname}
                    /></p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
