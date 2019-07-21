import React, { Component } from 'react';
import StoreItems from '../store/store-items'

export default class Store extends Component {
    render() {
        return (
            <div className="store-wrapper">
                <h1>Welcome to the store!</h1>

                <StoreItems />
            </div>
        );
    }
}