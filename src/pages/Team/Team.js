import React from 'react';
import Header from '../../components/Header/Header'

export default class Team extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <main role={"main"}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Members</h1>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}