import React from "react";
import { Redirect } from "react-router-dom";
import "./Profile.css";
import { connect } from "unistore/react";
import { actions } from "./Store";

function Profile(props) {
  if (props.isLogin === false) {
    return <Redirect to={{ pathname: "/signin" }} />;
  } else {
    return (
      <div className="profile">
        <h4>Name:</h4>
        <h4>{localStorage.getItem("nama")}</h4>
        <h4>Email:</h4>
        <h4>{localStorage.getItem("email")}</h4>
      </div>
    );
  }
}

// export default Profile;
export default connect(
  "login, nama, email, isLogin",
  actions
)(Profile);
