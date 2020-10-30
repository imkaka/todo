import React, { useState, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import AppContainer from '../../components/AppContainer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './style.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { TaskTypes } from '../../constants/TodoConstants';

const TaskDetail = (props) => {
    const [event, setEvent] = useState({});
    const [state, setState] = useState({
        checkedA: true,
        checkedB: false,
        checkedC: false,
        checkedD: false,
    });

    useEffect(() => {
        const id = props?.match?.params?.id;
        if (id) {
            for (const task of TaskTypes) {
                if(task.name === id) {
                    setEvent(task);
                    break;
                }
            }
        }
    }, [props.match.params.id])

    const handleChange = (event) => setState({ ...state, [event.target.name]: event.target.checked });

    return (
        <AppContainer height={180}>
            <div className="header">
                <KeyboardBackspaceIcon className="header-icon" onClick={() => props.history.push('')} />
                <MoreVertIcon className="header-icon" />
            </div>
            <div className="profile_container">
                <AccountCircleIcon className="profile-icon" />
                <div>
                    <p className="task-text">{event.task} Task</p>
                    <h1 className="title">{event.name}</h1>
                </div>
            </div>
            <br />
            <FormControlLabel disabled control={<Checkbox checked name="checkedD" />} label="Go to market" />
            <FormControlLabel
                control={<GreenCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label="Meet friends"
            />
            <FormControlLabel
                control={<GreenCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                label="Change your picture"
            />
            <FormControlLabel
                control={<GreenCheckbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                label="Go to gym"
            />
            <FormControlLabel
                control={<GreenCheckbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                label="Send project files"
            />
        </AppContainer>
    )
}

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


export default TaskDetail;
