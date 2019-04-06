import React from 'react';
import '../style/Timer.scss';


const TimerComponent = ({time}) => {
    // console.log(state);    //{color: "red", time: 7}
    // console.log(time);
    return (
        <div className="timer">
            <p>{time}</p>
        </div>
    );

}

export default TimerComponent;