import React from 'react';
import './PersonList.css';
import Person from './Person';
import personsData from "./data"

const PersonList = () => {
    return (
        <div className="container container-sm">
            <Person data={personsData}  />
      </div>
    );
};

export default PersonList;