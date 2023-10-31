import React from 'react'

export default function Alert(props) {
    const capitalize = (msg)=>{
        msg = msg.toLowerCase();
        return msg.charAt(0).toUpperCase() + msg.slice(1);
    }
    return (
        <div style={{ height: '50px',position:'sticky',top:'60px',width:'100%' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade d-flex align-items-center show`} style={{ height: '50px' }} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>:  {props.alert.message}
            </div>}
        </div>
    )
}
