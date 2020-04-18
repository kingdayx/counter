import React from 'react';
import {connect} from 'react-redux';
import './App.css';

 const Counter = props =>{
    return (
        <div >
            <h1 className="count">I am a Counter!</h1>
            <p className="count1">Count:{props.count} </p>
           <div  className="count1">
            <button onClick={props.onIncrementClick} >Increment</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state)=>{
    
    return {
        count:state.count
    }
}

const mapDispatchToProps = (dispatch)=>{
    
    return {
        onIncrementClick: ()=>{
            const action = {type: 'INCREMENT'};
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);