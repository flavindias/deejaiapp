import React from 'react';
import Header from '../../components/Header';
import SpotifyButton from '../../components/SpotifyButton';



export default class Login extends React.Component {
    componentDidMount() {

    }

    loadData = (url) => {

    }
    render() {
        return (
            <div>
                <Header/>
                <main role="main" className="inner cover" style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <div>
                        <div className="row">
                            <h1>{"Please sign in. "}</h1>
                            <SpotifyButton title={"Let's Go!"}/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}