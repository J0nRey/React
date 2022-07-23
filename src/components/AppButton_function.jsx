import React from 'react'

function AppButton (props) {

    const className = props.className ? props.className : '';

    if ( props.type === 'anchor' ) {
        return  (
                <a className={`btn btn-link ${className}`} >
                    { props.text}
                </a>
                )
        }

        return (
                <button 
                    className={`btn ${className}`}
                    type='button'
                >
                    {props.text}
                 </button>
        )

}


export default AppButton