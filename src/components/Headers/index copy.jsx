import React from 'react'

import AppButton from '../AppButton'

import HeaderLogo from './HeaderLogo'
import Styles from './index.module.css'
import HeaderInput from './HeaderInput'
import HeaderLogin from './HeaderLogin'
import HeaderCreateAccount from './HeaderCreateAccount'

class Header extends React.Component{
    render(){
        return(
            <nav className={`shadow-sm ${Styles.Header}`}>
                <div className="container d-flex aling-item-center justify-content-between">
                    <div className='d-flex aling-item-center justify-content-between'>
                        <HeaderLogo />
                        <HeaderInput />
                    </div>
                    <div className={`d-flex aling-item-center ${Styles.login}`}>
                        
                        <AppButton 
                                text="log in"
                                type="anchor"
                            />
                        <AppButton 
                                text="Create accouns"
                             />

                        <HeaderLogin to="example"/>
                        <HeaderCreateAccount />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header