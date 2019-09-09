import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.form`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
`
const Title = styled.h2`
    font-size: 3rem;
`


const Form = (props) => {
    console.log(props);
    return (
        <div>
            <Wrapper action="">
                <Title>Team Member Details</Title>
                <label>
                    First Name:
                    <input
                     type="text"
                     name='name'
                     value={props.user.name}
                     onChange={event => props.handleChange(event)}
                     />
                </label>
                <label>
                    Position:
                    <input
                     type="text"
                     name='position'
                     value={props.user.position}
                     onChange={event => props.handleChange(event)}
                     />
                </label>
                <label>
                    Hobby:
                    <input
                     type="text"
                     name='hobby'
                     value={props.user.hobby}
                     onChange={event => props.handleChange(event)}
                     />
                </label>
                <label>
                    Passion:
                    <input
                     type="text"
                     name='passion'
                     value={props.user.passion}
                     onChange={event => props.handleChange(event)}
                     />
                </label>
                <button>Submit!</button>
            </Wrapper>
        </div>
    )
}


export default Form;