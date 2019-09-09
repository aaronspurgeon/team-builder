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


const Form = () => {
    return (
        <div>
            <Wrapper action="">
                <Title>Team Member Details</Title>
                <label>
                    First Name:
                    <input
                     type="text"
                     name='first'
                     />
                </label>
                <label>
                    Position:
                    <input
                     type="text"
                     name='first'
                     />
                </label>
                <label>
                    Hobby:
                    <input
                     type="text"
                     name='first'
                     />
                </label>
                <label>
                    Passion:
                    <input
                     type="text"
                     name='first'
                     />
                </label>
                <button>Submit!</button>
            </Wrapper>
        </div>
    )
}


export default Form;