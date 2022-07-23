import React from "react"

import Styles from './AppThemeToggle.module.css'

class AppThemeToggle extends React.Component {
    constructor(props) {
        super(props)

        this.state = { theme: 'ligth' } // theme: 'Cambio'  

    }

    render() { // Cuando se crea
        return ( 
            
            <div className={Styles.AppThemeToggle}>
                {/* comentarios */}
                { this.state.theme }
            </div>

        )
    }

    componentWillMount(){ // Antes de que se monte
        const now = new Date()
        console.log('Antes de que esté en el DOM', now.getTime())
    }

    componentDidMount(){ // Despues de que se monte
        const now = new Date()
        console.log('Ya estoy en el DOM', now.getTime())
    }

    componentWillUpdate(){ // Cuando sea un cambio
                            // theme: 'Cambio', se ejecuta componentWillUpdate
        const now = new Date()
        console.log('Antes de que me actualize', now.getTime())
    }

    componentDidUpdate(){
        const now = new Date()
        console.log('Cuando ya me actualize', now.getTime())
    }

    componentUnmount(){
        console.log('Antes de que me Desmonte del DOM')
        }

}

export default AppThemeToggle