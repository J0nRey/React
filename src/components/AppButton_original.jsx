import React from 'react'

class AppButton extends React.Component {
    
    constructor(props){
        super(props)

    //console.log(props)
    this.props = props
}
    render(){

        const className = this.props.className ? this.props.className : '';


        if ( this.props.type === 'anchor' ) {
            return(
                    <a className={`btn btn-link ${className}`} >
                        {this.props.text}
                    </a>
                )
        }

        return(
            <button 
                className={`btn ${className}`}
                type='button'
            >
                {this.props.text}
            </button>
        )
    }
}

export default AppButton