import React from 'react'

import Styles from './MenuItem.module.css'


class MenuItem extends React.Component {
    
    constructor(props){
        super(props)
        this.props = props
}
    render(){

        return(
                <li className={Styles.MenuItem}>
                    <img src={this.props.icon} alt="" />
                    <p>{this.props.text}</p>
                </li>
            )
    }
}

export default MenuItem
