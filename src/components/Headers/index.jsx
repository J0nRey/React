import React from 'react'

import Style from '../Headers/index.module.css'

import Styles from '../AppButton.module.css'

import AppButton from '../AppButton'

import AppThemeToggle from '../AppThemeToggle'

import HeaderLogo from './HeaderLogo'

import HeaderInput from './HeaderInput'



class Header extends React.Component{
    render(){
        return(
            <nav className={`header d-flex justify-content-between shadow-sm" ${Style.Header}`}>
                <div className="logo-search d-flex justify-content-center align-items-center">
                   
                        <HeaderLogo />
                        <HeaderInput />
                    </div>
                    <div className={`auth d-flex justify-content-center align-item-center ${Styles.AppButton}`}>
                        
                        <AppButton
                                type="anchor"
                                text="log in"
                            />
                        <AppButton 
                                text="Create accouns"
                             />
                        <AppThemeToggle />
                </div>
            </nav>

        )
    }
}


export default Header
