import React from 'react';
import '../../App.css';

const AppContainer = ({ children, height = 310 }) => {
    return (
        <div className="app-screen" style={styles.container}>
            <div className="curve-container" style={{ height }}></div>
            <div className="app-content">
                {children}
            </div>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: '#fff'
    }
}
export default AppContainer;