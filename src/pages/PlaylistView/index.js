import React from 'react';
import api from '../../services/api';

import Header from '../../components/HeaderApp';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import "./style.css";
import StarRatings from 'react-star-ratings';

export default class RoomView extends React.Component {

  constructor(props) {

    super(props);
    console.log(this.props.location.state.room)
    this.state = {
      room: this.props.location.state.room,
      availableToVote: [],
      final: [],
      selectedTrack: ''

    }
  }
  async componentDidMount () {
    this.getData();
    this.getAvailableTracks();
    // this.sync();

  }

  sync = async () => {
    let response = await api.get(`/playlists/${this.props.match.params.id}/sync`);
    if (response) {
      this.getAvailableTracks();
    }
  }
  getData = async () => {
    let response = await api.get(`/playlists/${this.props.match.params.id}`);
    if (response) {
      this.setState({
        playlist: response.data
      });
      // alert(JSON.stringify(response));

    }
    else {

    }
  }
  getAvailableTracks = async (id) => {
    let response = await api.get(`/playlists/${this.props.match.params.id}/availableTracks`);
    if (response) {
      this.setState({
        availableToVote: response.data
      })
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
    this.props.history.push(`/app/playlist/${id}`)
  }

  changeRating = async (rating) => {
    console.log(this.state.selectedTrack)
    const body = {
      rating,
      track_id: this.state.selectedTrack
    }
    const response = await api.post(`/playlists/${this.props.match.params.id}/vote`, body);
    console.log(response)
    if (response) {
      this.getData()
    }
  }
  render () {
    const { room, availableToVote } = this.state;
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
                      <div className="col-6 text-center">
                        <ReactTable
                          data={availableToVote}
                          columns={[
                            {
                              Header: "Song",
                              columns: [
                                {
                                  Header: "Name",
                                  id: "name",
                                  accessor: d => d.name
                                },
                                {
                                  Header: "Artist",
                                  id: "artists",
                                  accessor: d => d.artists[ 0 ].name

                                }
                              ]


                            },
                            {
                              Header: "ID",
                              id: "id",
                              accessor: d => d.id,
                              Cell: row => (<button data-toggle="modal" onClick={() => { this.setState({ selectedTrack: row.value }) }} data-target="#modalExemplo" className={"btn btn-sm btn-success"}><i className={"fas fa-poll"}></i></button>)
                            },
                          ]}
                        />




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
        <div className="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Título do modal</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <StarRatings
                  rating={this.state.rating}
                  starRatedColor="blue"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  name='rating'
                />>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="button" className="btn btn-primary">Salvar mudanças</button>
              </div>
            </div>
          </div>
        </div>

      </div >

    )
  }
}