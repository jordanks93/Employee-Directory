import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';

function Header() {
    return (
        <Jumbotron className='bg-primary'>
            <h1 className='font-weight-bold'>Employee Directory</h1>
            <p>Sort the data by clicking the buttons above each column or entering letters into the search box</p>
        </Jumbotron>
    )
}

export default Header;