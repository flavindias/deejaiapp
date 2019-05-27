import React from 'react';

export default class Dashboard extends React.Component{

    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center my-3">Bootstrap 4 Card Carousel</h1>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner row w-100 mx-auto">
                        <div className="carousel-item col-md-4 active">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Card 1</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is
                                        a little bit longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Card 2</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is
                                        a little bit longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Card 3</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is
                                        a little bit longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Card 4</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is
                                        a little bit longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Card 5</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is
                                        a little bit longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Card 6</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is
                                        a little bit longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Card 7</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is
                                        a little bit longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
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
        )
    }
}