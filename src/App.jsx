
import './App.css';

import React from "react";
import ProfilePhoto from "./component/profile/ProfilePhoto";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address";

function App() {
  return (
    <React.Fragment>
      <ProfilePhoto/>
      <FullName />
      <Address />
    </React.Fragment>
  );
}

export default App;
