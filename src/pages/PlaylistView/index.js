import React from 'react';
import api from '../../services/api';

import Header from '../../components/HeaderApp';
// import ReactTable from 'react-table';
import "react-table/react-table.css";
import "./style.css";


export default class PlaylistView extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      playlist: {
        owner: {},
        members: [],
        playlists: []
      },
      zoom: 15
    }
  }
  async componentDidMount () {
    this.getData()
  }

  getData = async () => {
    let response = await api.get(`/playlist/${this.props.match.params.id}`);
    if (response) {
      this.setState({
        playlist: response.data
      });
      // alert(JSON.stringify(response));
    }
    else {

    }
  }


  render () {
    const { room } = this.state;
    const defaultImg = `${process.env.PUBLIC_URL}/img/default-profile.png`;
    return (
      <div>
        <Header />
        <main role="main" className="container">
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
                            src={room.owner.photo ? room.owner.photo : defaultImg}
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
                              src={member.photo ? member.photo : defaultImg}
                              className="rounded-circle avatar-xs profile-member-photo" alt="member" />
                          </a>)


                        )}
                      </div>


                    </div>
                  </div>
                  <div className="footer text-left">
                    <div className="row">
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
