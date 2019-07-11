import React from 'react';
import api from '../../services/api';

import Header from '../../components/HeaderApp';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import "./style.css";


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
    this.getData()
  }

  getData = async () => {
    let response = await api.get(`/rooms/${this.props.match.params.id}`);
    if (response) {
      this.setState({
        room: response.data
      });
      // alert(JSON.stringify(response));
    }
    else {

    }
  }
  async syncPlaylist (id) {
    let response = await api.post(`/playlists/${id}/sync`);
    if (response) {
      alert("Sucessfully sincronized.")
    }
  }

  deejAIPlaylist = async () => {
    const { code } = this.state.room
    const resp = await api.post(`/rooms/${code}/ia`)
    if (resp) {
      this.getData()
    }
    else {
      console.warn("error")
    }

  }
  userPlaylist = async () => {
    const body = {
      room_id: this.state.room.id
    }
    const response = await api.post('/playlists', body);
    if (response) {
      this.getData()
    }

  }
  viewPlaylist = (id) => {
    this.props.history.push(`/app/playlists/${id}`, {

      room: this.state.room

    })
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
                      <div className="col-6">
                        <div className="row">
                          <div className="col-12">
                            <h4>Share</h4>
                            <p><a href={`${process.env.PUBLIC_URL}/join/${room.code}`} className={!room.code !== 'undefined' && 'hidden'} target={"_blank"}>Click here</a></p>
                          </div>
                          <div className="col-12">
                            <h4 className={"title"}>Status:</h4>
                            <span className={`btn btn-sm ${room.public ? "btn-success" : "btn-danger"}`}> {room.public ? "Public" : "Private"}</span>
                          </div>
                          <div className="col-12">
                            <h4>Description: </h4>
                            <p>{room.description}</p>
                          </div>
                          <div className="col-6">
                            <button className={'btn btn-success'} onClick={() => { this.deejAIPlaylist() }}>Create new deejAI playlist</button>

                          </div>
                          <div className="col-6">
                            <button className={'btn'} onClick={() => { this.userPlaylist() }}>Create a new playlist </button>
                          </div>
                        </div>




                      </div>
                      <div className="col-6 text-center">
                        <ReactTable
                          data={room.playlists}
                          columns={[
                            {
                              Header: "Playlists",
                              columns: [

                                {
                                  Header: "ID",
                                  id: "id",
                                  accessor: d => d.id
                                },
                                {
                                  Header: "Creator",
                                  id: "approoach",
                                  accessor: d => d.approach,

                                  Cell: row => (
                                    <div>{row.value === "USER" ? "User" : "deejAI"}</div>
                                  )
                                },

                              ]
                            },
                            {
                              Header: "Playlist",
                              columns: [
                                {
                                  Header: "View",
                                  id: "id",
                                  accessor: d => d.id,
                                  Cell: row => (
                                    <span className={"text-center"}>
                                      <button
                                        className={"btn btn-sm btn-warning"}
                                        onClick={() => { this.viewPlaylist(row.value) }}>
                                        <i className="far fa-eye"></i>
                                      </button>
                                    </span>

                                  )
                                }
                              ]
                            }
                          ]}
                          defaultPageSize={5}
                          className="-striped -highlight"
                        />

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
