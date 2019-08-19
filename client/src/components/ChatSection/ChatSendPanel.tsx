import React, { useState } from 'react';
import { sendChatMessage } from '../../handlers/chat/sender';
import { connect } from 'react-redux';
import computerIcon from '../icons/computer.svg';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { Button, Icon, TextArea, GridColumn, GridRow, Grid, Input, Container } from 'semantic-ui-react';
import { useStoreState, useStoreActions } from '../../store/globalStore';


const ChatSendPanel = () => {
    const [totalRows, liveCodingOpen] = useStoreState((state) => [state.totalRows, state.liveCodingOpen]);
    const toggleLiveCodeEditor = useStoreActions(actions => actions.toggleLiveCodeEditor)

    const [message, setMessage] = useState('');

    return (
        <div style={{position:'relative'}}>
            <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <Container>
                    <div style={{ display: 'flex' }} className='mh-1'>
                        <div style={{ flexGrow: 100 }}>
                            <Input
                                fluid
                                onChange={(e, d) => {
                                    console.log(d);
                                    if (typeof d.value === 'string')
                                        setMessage(d.value);
                                }}
                                value={message}
                            ></Input>
                        </div>
                        <Button circular icon compact size='huge' color='olive' onClick={e => {
                            sendChatMessage(message);
                            setMessage('');
                        }} > 🚀 </Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}


export default (ChatSendPanel); 