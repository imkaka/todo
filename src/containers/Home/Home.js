import React from "react";
import AppContainer from '../../components/AppContainer';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BoyImage from '../../assets/boy-1.png';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const Home = props => {
    const taskCount = 4;

    const changeRoute = param => {
        props.history.push('TaskDetail' + param);
    }

    return (
        <AppContainer>
            <MenuIcon />
            <div className="profile-container">
                <div>
                    <h2>Hello Elder</h2>
                    <p>Today you have {taskCount} tasks</p>
                </div>
                <img src={BoyImage} alt="boyImage" className="header-img" />
            </div>
            <Card onClick={() => changeRoute('Today')}>
                <CardContent className="card-content">
                    <div className="flex">
                        <WbSunnyIcon className="card-icon" />
                        <div>
                            <h3>Today</h3>
                            <p className="gray">{taskCount} tasks</p>
                        </div>
                    </div>
                    <MoreVertIcon className="gray" />
                </CardContent>
            </Card>
            <br />
            <Card onClick={() => changeRoute('Planned')}>
                <CardContent className="card-content">
                    <div className="flex">
                        <CalendarTodayIcon className="card-icon" />
                        <div>
                            <h3>Planned</h3>
                            <p className="gray">2 tasks</p>
                        </div>
                    </div>
                    <MoreVertIcon className="gray" />
                </CardContent>
            </Card>
            <br />
            <Card onClick={() => changeRoute('Personal')}>
                <CardContent className="card-content">
                    <div className="flex">
                        <AccountCircleIcon className="card-icon" />
                        <div>
                            <h3>Personal</h3>
                            <p className="gray">6 tasks</p>
                        </div>
                    </div>
                    <MoreVertIcon className="gray" />
                </CardContent>
            </Card>
            <br />
            <Card onClick={() => changeRoute('Work')}>
                <CardContent className="card-content">
                    <div className="flex">
                        <BusinessCenterIcon className="card-icon" />
                        <div>
                            <h3>Work</h3>
                            <p className="gray">5 tasks</p>
                        </div>
                    </div>
                    <MoreVertIcon className="gray" />
                </CardContent>
            </Card>
            <br />
            <Card onClick={() => changeRoute('Shopping')}>
                <CardContent className="card-content">
                    <div className="flex">
                        <LocalMallIcon className="card-icon" />
                        <div>
                            <h3>Shopping</h3>
                            <p className="gray">8 tasks</p>
                        </div>
                    </div>
                    <MoreVertIcon className="gray" />
                </CardContent>
            </Card>
        </AppContainer>
    )
}

export default Home;
