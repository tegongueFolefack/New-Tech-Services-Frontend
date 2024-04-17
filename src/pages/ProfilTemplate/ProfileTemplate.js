import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileTemplate.css';
import AccountGeneral from "./AccountGeneral";
import AccountInfo from "./ChangePassword";
import ChangePassword from "./ChangePassword";
import Notifications from "./Notification";
import SocialConnections from "./SocialConnection";
import SocialLinks from "./SocialLink";

function ProfileTemplate() {
  return (
    <div className='body'>
      <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">
          Account settings
        </h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <Link className="list-group-item list-group-item-action active" data-toggle="list" to="/AccountGeneral">General</Link>
                <Link className="list-group-item list-group-item-action" data-toggle="list" to="/ChangePassword">Change password</Link>
                <Link className="list-group-item list-group-item-action" data-toggle="list" to="/AccountInfo">Info</Link>
                <Link className="list-group-item list-group-item-action" data-toggle="list" to="/SocialLinks">Social links</Link>
                <Link className="list-group-item list-group-item-action" data-toggle="list" to="/SocialConnections">Connections</Link>
                <Link className="list-group-item list-group-item-action" data-toggle="list" to="/Notifications">Notifications</Link>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                <AccountGeneral/>
                <ChangePassword/>
                <AccountInfo/>
                <SocialLinks/>
                <SocialConnections/>
                <Notifications/>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-3">
          <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
          <button type="button" className="btn btn-default">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileTemplate;
