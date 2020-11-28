import React, {useState, useEffect} from 'react';
import "../components_stylesheets/Timer.css"

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;

        if (isActive) {

            if (minutes === 60) {
                setHours(hours => hours + 1);
                setMinutes(0);
            }

            if (seconds === 60) {
                setMinutes(minutes => minutes + 1);
                setSeconds(0);
            }
            else {
                interval = setInterval(() => {
                    setSeconds(seconds => seconds + 1);
                }, 1000);
            }

        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="app">
            <div className="time">
                {hours < 10 ? "0" + hours : hours}:
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
            </div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}
                        onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;