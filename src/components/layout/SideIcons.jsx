import React from 'react';
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';

function SideIcons() {
    return (
        <Wrapper>
            <img src="https://static.wikia.nocookie.net/logopedia/images/6/69/GoogleCalendar_2020.svg/revision/latest?cb=20201007013931" alt="calender"/>
            <img src="https://static.wikia.nocookie.net/logopedia/images/a/af/Google_Keep_2020.svg/revision/latest?cb=20201023131925" alt="keep"/>
            <img src="https://static.wikia.nocookie.net/logopedia/images/f/f1/Google_Tasks.svg/revision/latest?cb=20201207232734" alt="tasks"/>
            <img src="https://static.wikia.nocookie.net/logopedia/images/9/93/Google_Contacts_icon.svg/revision/latest?cb=20201207150856" alt="contacts"/>
            <hr/>
            <AddIcon/>
        </Wrapper>
    )
}

export default SideIcons

const Wrapper = styled.div`
display:grid;
grid-template-rows: repeat(4,50px) 1px 100px;
place-items:center;
border-left:1px solid lightgray;
img{
    width:100%;
    max-height:25px;
}
hr{
    width:80%;
}
`