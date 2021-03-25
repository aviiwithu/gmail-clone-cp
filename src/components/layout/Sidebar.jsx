import React from 'react';
import styled from 'styled-components';
import Compose from '../buttons/Compose';
import {sidebarButtonIcons} from '../data/SidebarButtonIcons';
import {bottomIcons} from '../data/BottomIconsData';

import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Sidebar() {
    return (
        <Wrapper>
            <TopSectionWrapper>
                <ComposeWrapper>
                    <Compose />
                </ComposeWrapper>
                <SideButtonsWrapper>
                { sidebarButtonIcons.map(item=>(
                        <SidebarButtonItems>{item.icon} {item.text} </SidebarButtonItems>
                ))}
                    </SideButtonsWrapper>
            </TopSectionWrapper>
            <BottomSectionWrapper>
                <SideBarSectionWrapper>
                    <Title>Meet</Title>
                    <p><VideocamIcon/>New Meeting</p>
                    <p><KeyboardIcon/>Join Meeting</p>
                    {/* google meet */}
                </SideBarSectionWrapper>
                <SideBarSectionWrapper>
                    <Title>Hangouts</Title>
                    <p><AccountCircleIcon/>Avinash</p>
                    {/* hang out stuff */}
                </SideBarSectionWrapper>
                <BottomIconWrapper>
                    {bottomIcons.map((icon)=>(icon) )}
                </BottomIconWrapper>
            </BottomSectionWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
border-right:1px solid lightgray;
display:flex;
flex-direction:column;
justify-content:space-between;
height: calc(100vh - 70px);
`
const TopSectionWrapper = styled.div`

`
const BottomSectionWrapper = styled.div`
margin-bottom:30px;
`
const ComposeWrapper = styled.div`
display:grid;
place-items:start;
padding:10px 20px;
`
const SideButtonsWrapper = styled.div`

`
const SidebarButtonItems = styled.div`
display:grid;
grid-template-columns:14% auto;
color:grey;
padding:5px 25px;
border-radius:0 100px 100px 0;
cursor:pointer;
margin-right:8px;
:hover{
    background-color:#f5f7f7;
}
`
const SideBarSectionWrapper = styled.div`
border-top:1px solid lightgray;
p{
    color:gray;
    display:grid;
    grid-template-columns:14% auto;
    height:30px;
    align-items:center;
    padding-left:25px;
}
`
const Title = styled.h4`
padding-left:25px;
margin-bottom:3px;
margin-top:8px;
`

const BottomIconWrapper = styled.div`
color:gray;
border-top:1px solid lightgray;
display:flex;
justify-content:center;
margin-top:50px;
.MuiSvgIcon-root{
    padding:5px;
}
`