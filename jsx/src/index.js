// Import the react and react dom libraries

import React from 'react';
import ReactDOM from 'react-dom'
// Create a react Components

const App = () => {
    const buttonText = 'Click Me';
    return (
        <div>
            <label htmlFor="name" className="label">Enter name: </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button>
        </div>
    );
};


// Take the react component and show it on screen
ReactDOM.render(
    <App />,
    document.getElementById("root")
);