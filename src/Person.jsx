import React, { useState } from 'react';
import './PersonList.css';

const Person = ({ data }) => {
    const [people, setPeople] = useState(data);

    const clearList = () => {
        setPeople([]);
        setBirthdayCount(0);
    };

    const [birthdayCount, setBirthdayCount] = useState(5);

    return (
        <div className="list-group mx-auto col-6">
            <h3 className='text-center py-3'> {birthdayCount} birthdays today</h3>
            {people.map(person => (
                <div className="list-group-item d-flex align-items-center justify-content-between" key={person.name}>
                    <div className="d-flex align-items-center">
                        <img src={person.image} className="rounded-circle img-thumbnail" alt={person.name} />
                        <div className="mx-3">
                            <h5 className="mb-0">{person.name}</h5>
                            <p className="card-text mb-0"> {person.age} years</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className='list-group-item d-flex align-items-center justify-content-between'>
                <button className="clear-button col-12" onClick={clearList}> Clear All</button>
            </div>
        </div>
    );
};

export default Person;