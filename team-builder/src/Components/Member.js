import React from 'react';


const Member = (props) => {
    const userArray = props.user;
    console.log(userArray)
    return (
        <div>
            {userArray.map((member, index) => (
                <div key={index}>
                    <h2>Name: {member.name}</h2>
                    <p>Position: {member.position}</p>
                    <p>Hobby: {member.hobby}</p>
                    <p>Passion: {member.passion}</p>
                </div>
            ))}
        </div>
    );
}


export default Member;