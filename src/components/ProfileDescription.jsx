import React from 'react';
import JsonReaderComponent from './Utils/JsonReaderComponent';
import './ProfileDescription.css'

function ProfileDescription() {
  return (
    <div className="introduction">
      <h1>Thomas Piessat - Software Engineer</h1>
      <p>Working for Black Shamrock <i>- a Virtuos Studio</i></p>
      <JsonReaderComponent />
    </div>
  );
}

export default ProfileDescription;