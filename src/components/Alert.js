import React from 'react'

export default function Alert(props) {
  return ( 
    props.alert &&
    <>
    <div className={`alert alert-${props.alert.bgcolor} alert-dismissible fade show mt-2`} role="alert">
  <strong>{props.alert.type}</strong> {props.alert.message}
</div>
    </>
  )
}
