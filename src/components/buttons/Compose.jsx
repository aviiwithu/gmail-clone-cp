import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';

function Compose() {
    return (
        <Wrapper>
            <AddIcon fontSize="large" />
            <p>Compose</p> 
        </Wrapper>
    )
}

export default Compose

const Wrapper = styled.div`
display:grid;
grid-template-columns:35% auto;
// background-color:orange;
align-items:center;
padding:6px 32px 6px 8px;
border-radius:50px;
box-shadow:1px 2px 5px 0 grey;
cursor:pointer;
color:#3c4043;
font-weight:500;
font-size:0.875rem;
transition:box-shadow 0.5s cubic-bezier(0.87, 0.82, 0.51, 0.51);
:hover{
    box-shadow:-2px 2px 5px 3px grey;
}
`