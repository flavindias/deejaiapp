import React from 'react';
import HeaderApp from '../../components/HeaderApp'
import auth from '../../services/auth';
import api from '../../services/api';


export default class Dashboard extends React.Component{

    componentDidMount() {
        this.getTopMusic()
    }
    getTopMusic = async () => {
        try {
            const response = api.get('/')
        }
        catch (e){

        }
    }


    render() {
        return (
            <div>
                <HeaderApp/>
                <div className="container-fluid">
                    <h1 className="text-center my-3">My rooms</h1>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner row w-100 mx-auto">
                            <div className="carousel-item col-md-4 active">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Room #1</h4>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item col-md-4 active">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">+</h4>
                                        <p className="card-text">Create a new room</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center mt-4">
                                    <a className="btn btn-outline-secondary mx-1 prev" href="javascript:void(0)"
                                       title="Previous">
                                        <i className="fa fa-lg fa-chevron-left"></i>
                                    </a>
                                    <a className="btn btn-outline-secondary mx-1 next" href="javascript:void(0)"
                                       title="Next">
                                        <i className="fa fa-lg fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}