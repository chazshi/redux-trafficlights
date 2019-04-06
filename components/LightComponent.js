import lightBg from "../img/light-bg.png";
import lightRGB from "../img/light-rgb.png";
import React from 'react';
import '../style/Light.scss';

const LightComponent = (state) => {
    // console.log(state);    //{color: "red", time: 7}
    return (
        <div className="light-wrapper">
            <img className="light" src={lightBg}/>
            <img className={"light " + "light-" + state.color} src={lightRGB}/>
        </div>
    );
}

export default LightComponent;