import {connect} from 'react-redux';
import TimerContainer from '../components/TimerComponent';
import {lightRed, lightYellow, lightGreen} from '../actions/light';

let nextState;
let rgbTime = [4, 4, 4];

const mapStateToProps = (state) => {
    // console.log(state);
    
    nextState = state;
    
    // console.log(timer);

    return {
        time: state.time
    }
}

const mapDispatchToProps = (dispatch) => {
    
    let next = dispatch;
    dispatch = function dispatchAndLog(action) {
        console.log('dispatching', action);
        next(action);
        console.log('next state', nextState);
    }

    const test = () => {
        // console.log(nextState.time);
        nextState.time--;
        // console.log(nextState);
        
        switch(nextState.color) {
            case 'red':
                if(nextState.time<0) {
                    dispatch(lightYellow(rgbTime[1]));
                } else {
                    dispatch(lightRed(nextState.time));
                }
                break;
            
            case 'yellow':
                if(nextState.time<0) {
                    dispatch(lightGreen(rgbTime[2]));
                } else {
                    dispatch(lightYellow(nextState.time));

                }
                break;
            
            case 'green':
                if(nextState.time<0) {
                    dispatch(lightRed(rgbTime[0]));
                } else {
                    dispatch(lightGreen(nextState.time));

                }
                break;
            
            default:
                dispatch(lightRed(rgbTime[0]));
                break;
            
        }
        console.log(nextState.time);

        if(nextState.time < 0) {
            console.log(nextState);
            switch(nextState.color) {
                case 'red':
                    return 
                        nextState.color = 'yellow';
                    
                case 'yellow':
                    return 
                        nextState.color = 'green';
                    
                case 'green':
                    return 
                        nextState.color = 'red';
                    
                default:
                    return 
                        nextState.color = 'red';
                    
            }
        }

    }

    setInterval(test, 1000);

    return {
        
    }
}

const Timer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimerContainer);

export default Timer;