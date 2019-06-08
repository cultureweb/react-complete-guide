import React from 'react';
import './UserOutput.css'
const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>userName:{props.userName}</p>
            <p>I hope i'll be overwritten!</p>
        </div>
    );
};

export default UserOutput;
