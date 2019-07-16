import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
const defaultBanner = "../../../public/img/boreal.jpeg";
const defaultImg = `${process.env.PUBLIC_URL}/img/default-profile.png`;

export default class RoomItem extends React.Component {


  render () {
    return (
      <div className="d-block card room-card">
        <img className="card-img-top" src={this.props.room ? this.props.room.banner : defaultBanner} alt="" />
        <div className="card-img-overlay">
          <div className={`badge p-1 ${this.props.room.public ? 'badge-success' : "badge-danger"}`}>{this.props.room.public ? 'Public' : 'Private'}</div>
        </div>
        <div className="position-relative card-body">
          <h4 className="mt-0">
            <Link to={`/app/rooms/${this.props.room.code}`} className="text-title" >{this.props.room.id}</Link>
            {/* <a href="/" className="text-title">{this.props.room.id}</a> */}
          </h4>
          <p className="text-muted font-13 mb-3">{this.props.room.description}
          </p>
          <p className="mb-1">
            <span className="pr-2 text-nowrap mb-2 d-inline-block">
              <i className="mdi mdi-format-list-bulleted-type text-muted mr-1">
              </i>
              <b>{this.props.room.members.length + 1}</b> Members
        </span>
            <span className="text-nowrap mb-2 d-inline-block">
              <i className="mdi mdi-comment-multiple-outline text-muted mr-1">

              </i>
              <b>{this.props.room.playlists.length}</b> Playlists
        </span>
          </p>
          <div>
            {/* Owner */}
            <a
              href="/"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title={this.props.owner ? this.props.owner.display_name : ''}
              className="d-inline-block mr-1">

              <img
                src={this.props.room.owner.photo ? this.props.room.owner.photo : defaultImg}
                className="rounded-circle avatar-xs profile-member-photo"
                alt="owner" />
            </a>
            {/* Members */}
            {this.props.room.members.map(member => (
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
    )
  }
}
