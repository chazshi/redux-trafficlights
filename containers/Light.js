import {connect} from 'react-redux';
import LightContainer from '../components/LightComponent';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const Light = connect(
    mapStateToProps,
    mapDispatchToProps
)(LightContainer);

export default Light;