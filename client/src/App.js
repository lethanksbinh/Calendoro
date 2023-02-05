import React, {  useState } from 'react';
import { Navbar } from './components/Navbar';
import { Pomodoro } from './components/Pomodoro';
import { Fullcalendar } from './components/Fullcalendar';
import { Task } from './components/Task';

export function App() {
    const [state, setState] = useState('');
    const calendarRef = React.createRef();

    function passState(state) {
        setState(state);
    }

    return (
        <div className="container-fluid text-white">
            <div className="d-flex justify-content-center">
                <Navbar calendarRef={calendarRef}/>
            </div>
            <div className='fullcalendar'>
                <Fullcalendar calendarRef={calendarRef}/>
            </div>
            <div className="d-flex justify-content-center">
                <Pomodoro focusDur={25*60*1000} shortBreakDur={5*1000} longBreakDur={15*60*1000} maxFocusCount={4} passState={passState}/>
            </div>
            <div className="d-flex justify-content-center">
                <Task isDisabled={state === "Focus"}/>
            </div>
            <div className="d-flex justify-content-center pb-5">
                <form action="../../post" method="post" className="form">
                    <button type="submit">Connected?</button>
                </form>
            </div>
        </div>
    )
}