import React from 'react';
import { render } from 'react-dom';


const Welcome = () => (
    <div>
        <h1>Hello, This is React!! </h1>
    </div>
)

render(<Welcome/>, document.getElementById('app'));