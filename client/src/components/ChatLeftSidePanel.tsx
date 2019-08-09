import React from 'react';
import { senderToLiveCodeMap, Colors, GlobalStoreType } from '../types/mytypes';
import { Button, Icon, Divider } from 'semantic-ui-react';
import { Dispatch } from 'redux';
import { globalStore, useStoreState, useStoreActions } from '../store/globalStore';


// This is the left panel that runs from top to bottom of the page.
const ChatLeftPanel = () => {
    const [totalRows , liveCodePeersMap , activeLiveCodePeerId] = useStoreState(state =>  [state.totalRows,state.liveCodePeersMap , state.activeLiveCodePeerId ] ) ;
    const setActiveLiveCodePeer = useStoreActions(actions=>actions.setActiveLiveCodePeer) 

    console.log('rendering ChatLeftPanel') ; 

    const peersComponent = Object.keys(liveCodePeersMap).map(peerid => {
        let activated = peerid === activeLiveCodePeerId;
        return (
            <div key={peerid} style={{ backgroundColor: activated ? '#16AB39' : 'rgb(131,131,131)' }} >
                <Button key={peerid} toggle active={activated} fluid color='grey' compact onClick={e => activated?setActiveLiveCodePeer(null):setActiveLiveCodePeer(peerid)} >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size='large' name='user' />
                        <p style={{ fontSize: '1.5em', paddingLeft: '5px' }} >
                            {liveCodePeersMap[peerid].sendername}
                        </p>
                    </div>
                    <p style={{color: Colors.DARK_GREEN_FOR_CODE_LANGUAGE}}>
                        {liveCodePeersMap[peerid].language}
                    </p>
                </Button>
            </div>
        );
    })

    return (
        <div style={{
            backgroundColor: '#c4c4c4',
            zIndex: 10,
            gridColumn: '1 / 3',
            boxShadow: '0.1px -15px 15px black',
            gridRow: `1 / ${totalRows + 1}`
        }} >
            {peersComponent}
        </div>
    );
}

export default ChatLeftPanel