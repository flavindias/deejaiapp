import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderApp';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "./style.css";

const defaultBanner = "../../../public/img/boreal.jpeg";

export default class RoomView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {
        owner: {},
        members: [],
        playlists: []
      },
      zoom: 15
    }
  }
  async componentDidMount () {
    let response = await api.get(`/rooms/${this.props.match.params.id}`);
    if (response) {
      this.setState({
        room: response.data
      });
      // alert(JSON.stringify(response));
    }
  }

  render () {
    const { room } = this.state;
    // const position = this.room.location ? this.room.location.coordinates : [ -8, -36 ];
    // const position = this.state.data.address ? (this.state.data.address.coordinates ? this.state.data.address.coordinates.coordinates : [this.info.lat, this.info.lng]) : [this.info.lat, this.info.lng];
    // const position = [ -8, -36 ];
    return (
      <div>
        <Header />
        <main role="main" className="cover">
          <div className="container h-100 home">
            <div className="row h-100 justify-content-center align-items-center text-center">
              <div className="col-12">


                <div className="row">
                  <div className="col-lg-12">
                    <div className="tile">
                      <div className="wrapper">
                        <div className="card hovercard">
                          <div className="cardheader" style={{
                            backgroundImage: `url(${room.banner})`,
                            backgroundSize: 'cover',
                            height: '125px',
                          }}>

                          </div>
                          <div className="info">
                            <div className="title">
                              <p>#{room.id}</p>
                            </div>
                            <div className="desc"><p>{room.description}</p></div>
                            <div className="desc"><p>Members</p></div>
                            <div>
                              {/* Owner */}
                              <a
                                href="/"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title={room.owner ? room.owner.display_name : ''}
                                className="d-inline-block mr-1">
                                <img
                                  src={room.owner.photo ? room.owner.photo : this.defaultImg}
                                  className="rounded-circle avatar-xs profile-member-photo"
                                  alt="owner" />
                              </a>
                              {/* Members */}
                              {room.members.map(member => (
                                <a
                                  href="/"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title={member.display_name}
                                  className="d-inline-block mr-1">
                                  <img
                                    src={member.photo ? member.photo : this.defaultImg}
                                    className="rounded-circle avatar-xs profile-member-photo" alt="member" />
                                </a>)


                              )}
                            </div>


                          </div>
                        </div>
                        <div className="footer text-center">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div >
    )
  }
}
