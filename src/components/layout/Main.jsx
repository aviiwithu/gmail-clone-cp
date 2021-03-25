import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import EmailView from './EmailView'
import SideIcons from './SideIcons'

function Main() {
    return (
        <Wrapper>
            <Sidebar/>
            <EmailView/>
            <SideIcons/>
            
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
display:grid;
grid-template-columns:270px auto 50px;
`