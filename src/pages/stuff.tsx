import React from "react";
import { Link } from "react-router-dom"

function Stuff() {
  return (
    <div className="page my-5 mx-10">
      <h1 className="font-weight-light">My Stuff</h1>
      <Link to="/tracker">Combat Tracker</Link>
    </div>
  );
}

export default Stuff;
