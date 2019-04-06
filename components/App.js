import Light from '../containers/Light';
import Timer from '../containers/Timer';
import React from 'react';

const App = () => {
    return (
        <div>
            <div style={{marginTop: '20px', marginBottom: '20px', fontSize: '20pt'}}>交通灯redux示例</div>
            <Light/>
            <Timer/>
        </div>
    );
}

export default App;