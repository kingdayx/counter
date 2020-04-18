import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import store from './store';


class App extends React.Component{
    render(){
        return(
            
                <Counter store={store} />
            
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)

export default App;