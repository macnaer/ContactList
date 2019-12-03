import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from "react";
import './index.css';

const App = () =>{
    return(
        <Fragment>
            <header>
                <h1 className="title">Hello React World</h1>
                <p>Lorem ipsum dolor sin amet</p>
            </header>
            <main>Test</main>
        </Fragment>
      
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
