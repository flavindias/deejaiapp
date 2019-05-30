import React from 'react';
import Header from '../../components/Header';
import SpotifyButton from '../../components/SpotifyButton';



export default class Login extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <main role="main" className="inner cover" style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <div>
                        <iframe src={"http://localhost:3000/v1/auth/spotify"} height={this.props.height} width={this.props.width}/>
                    </div>


                </main>






            </div>
        )
    }
}