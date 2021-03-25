import React from 'react';
import styled from 'styled-components';

import {Checkbox,IconButton} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { emailData } from '../temp/EmailData';
import EmailItem from '../emailItem/EmailItem';

function EmailView() {
    return (
        <Wrapper>
            <TopWrapper>
                <Checkbox/>
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>

            </TopWrapper>
            <EmailsContainer>
                {
                    emailData.map(({starred,from,subject,message,received,read})=>(
                        <>
                        <EmailItem
                        starred={starred}
                        from={from}
                        subject={subject}
                        message={message}
                        received={received}
                        read={read}
                        />
                        </>
                    ))
                }
            </EmailsContainer>

        </Wrapper>
    )
}

export default EmailView

const Wrapper = styled.div`

`
const TopWrapper = styled.div`
padding-left:20px;
`
const EmailsContainer = styled.div`

`