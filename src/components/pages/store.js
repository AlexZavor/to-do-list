import React, { Component } from 'react';
import StoreItem from '../store/store-item'

export default class Store extends Component {
    render() {
        return (
            <div>
                <h1>Store Component</h1>

                <StoreItem />
            </div>
        );
    }
}