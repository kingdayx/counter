import React from 'react';
import {connect} from 'react-redux';
import './App.css';

 const Counter = props =>{
    return (
        <div >
            <h1 className="count">I am a Counter!</h1>
            <p className="count1">Count:{props.count} </p>
           <div  className="count1">
            <button>Increment</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state)=>{
    
    return {
        count:state.count
    }
}

export default connect(mapStateToProps)(Counter);