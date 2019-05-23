import React from "react";
const divStyle = {
    position: 'absolute',
    bottom: '0px'
}
export default class Team extends React.Component {
    render() {
        return(
            <div className="card">
                <img className="card-img-top" src={this.props.photo} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title" style={{color: 'rgb(52,58,64)', 'font-size': 'medium'}}>{this.props.name}</h5>
                    <p className="card-text" style={{color: 'gray',  'font-size': 'small'}}>{this.props.role}</p>
                    <div className="row" style={divStyle}>
                        <div className="col-4 text-center">
                            <a href={"mailto:"+this.props.email} className={"text-center"} style={{color: 'gray'}}><i className="fas fa-at"></i></a>
                        </div>
                        <div className="col-4 text-center">
                            <a href={this.props.github} className={"text-center"} style={{color: 'gray'}}><i className="fab fa-github"></i></a>
                        </div>
                        <div className="col-4 text-center">
                            <a href={this.props.linkedin} className={"text-center"} style={{color: 'gray'}}><i className="fab fa-linkedin-in"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}