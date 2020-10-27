import React from 'react';
import '../../App.css';

const AppContainer = ({ children, gradient = 'linear-gradient(180deg, #36D1DC -9.85%, #5B86E5 69.33%)' }) => {
    return (
        <div className="app-screen" style={styles.container(gradient)}>
            <div className="curve-container"></div>
            <div className="app-content">
                {children}
            </div>
        </div>
    )
}

const styles = {
    container: gradient => {
        return {
            backgroundColor: '#fff'       
        }
    }
}
export default AppContainer;