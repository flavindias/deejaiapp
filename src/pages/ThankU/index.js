import React from 'react';
import Header from '../../components/Header';
import SpotifyButton from '../../components/SpotifyButton';
import './style.css';



export default class ThankU extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className={"home"}>
                <Header home={true}/>
                <main role="main" className="cover">
                    <div className="container h-100 home">
                        <div className="row h-100 justify-content-center align-items-center text-center">
                            <form className="col-12">
                                <div className="form-group">
                                    <h1 className="cover-heading">Thank you for supporting us</h1>
                                </div>
                                <div className="form-group">
                                    <p className="lead">We'll send an email to you when we unlock the dashboard. </p>
                                    <p className="lead"><SpotifyButton title={"Join to Beta"}/></p>
                                </div>
                            </form>
                        </div>
                    </div>


                </main>
                {/*<Footer></Footer>*/}






            </div>
        )
    }
}
