import React, { useState } from 'react';
import styled from 'styled-components'


const Wrapper = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
`
const Title = styled.h2`
    font-size: 3rem;
`


const Form = (props) => {
    const [newMember, setNewMember] = useState({ name: '', position: '', hobby: '', passion: ''});

    const handleChange = event => {
        setNewMember({...newMember, [event.target.name]: event.target.value});
      }
    

    const handleSubmit = event => {
        event.preventDefault();
        props.setUser([newMember, ...props.user]);
      }
    return (
        <div>
            <Wrapper action="" onSubmit={handleSubmit}>
                <Title>Team Member Details</Title>

                    <input
                     type='text'
                     name='name'
                     value={props.user.name}
                     placeholder='Name'
                     onChange={handleChange}
                     />

                    <input
                     type='text'
                     name='position'
                     value={props.user.position}
                     placeholder='Position'
                     onChange={handleChange}
                     />

                    <input
                     type='text'
                     name='hobby'
                     value={props.user.hobby}
                     placeholder='Hobby'
                     onChange={handleChange}
                     />
                
                    <input
                     type='text'
                     name='passion'
                     value={props.user.passion}
                     placeholder='Passion'
                     onChange={handleChange}
                     />
                
                <button>Submit!</button>
            </Wrapper>
        </div>
    )
}


export default Form;