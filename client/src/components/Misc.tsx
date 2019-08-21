import React, { Children, ReactChildren, ReactNode, useState } from 'react';
import { Loader, Modal, Input, Button, Container } from 'semantic-ui-react';
import { globalStore, useStoreState, useStoreActions } from '../store/globalStore';

const BigLoaderCentered = (props: { inverted?: boolean }) => (<div style={{ position: 'relative', height: '100%' }}>
    <div style={{ position: 'absolute', width: '100%', height: '100%', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <Loader size='massive' inverted={props.inverted} active inline='centered'>Loading</Loader>
    </div>
</div>);

const SizedBox = (props: { height?: string, width?: string }) => {
    console.log('height = ', props.height)
    return (
        <div style={{ height: props.height || '10px', width: props.width || '10px' }}></div>
    )
}

export const DivAbsolute = (props: any) => {
    return <div style={{ position: 'absolute', ...props }}>
        {props.children}
    </div>
}
export const DivRelative = (props: { children: ReactNode }) => {
    return <div style={{ position: 'relative', }}>
        {props.children}
    </div>
}

export const Flex = (props: { direction?: 'row' | 'column', children: ReactNode }) => {
    return <div style={{ display: 'flex', flexDirection: props.direction }} >
        {props.children}
    </div>
}

export const FlexItem = (props: { children: ReactNode, grow?: number }) => {
    return <div style={{ flexGrow: props.grow }} >
        {props.children}
    </div>
}

export const ServerIpInputDialog = (props: { children: ReactNode }) => {
    const storeServerAddress=  useStoreState(s=>s.serverAddress)
    const setServerAddress = useStoreActions(a=>a.setServerAddress)
    const [address, setaddress] = useState(storeServerAddress)
    return <Modal
        trigger={
            props.children
        }
        header='Server Setup'
        onActionClick={(e,d)=>{
            setServerAddress(address)
        }}
        content={
            <>
            <div style={{textAlign:'center' , margin:'10px'}}>
                    <p>Set the IP address and Port of the Controlling Server</p>
                    <Input onChange={e=>setaddress(e.target.value)} value={address} label='Server Address'/>
            </div>
            </>
        }
        actions={[{ key: 'save', content: 'Save', positive: true }]}
    />

}


export const ProfileCredentialsInputDialog = (props: { children: ReactNode }) => {
    const [username , useremail] =  useStoreState(s=>[s.myUsername,s.myUserId])
    const [ setStoreUsername , setStoreUserEmail ] = useStoreActions(a=>[a.setUsername,a.setUserId])
    const [name, setname] = useState(username)
    const [email  , setemail] = useState(useremail)
    return <Modal
        trigger={
            props.children
        }
        header='Edit Name and Email'
        onActionClick={(e,d)=>{
            setStoreUserEmail(email)
            setStoreUsername(name)
        }}
        content={
            <>
            <div style={{textAlign:'center' , margin:'10px'}}>
                    <Input onChange={e=>setname(e.target.value)} value={name} label='Name'/>
                    <Input onChange={e=>setemail(e.target.value)} value={email} label='Email'/>
            </div>
            </>
        }
        actions={[{ key: 'save', content: 'Save', positive: true }]}
    />
}

export { BigLoaderCentered, SizedBox }; 