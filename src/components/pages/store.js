import React, { Component } from 'react';
import StoreItems from '../store/store-items'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Store extends Component {
    render() {
        return (
            <div className="store-wrapper">
                <div className="headding-wrapper">
                    <FontAwesomeIcon 
                        icon="store-alt"
                        className="store-icon" 
                    />
                    <h1>Welcome to the store!</h1>
                </div>

                <StoreItems 
                    gold = {this.props.gold}
                    handleGoldChange = {this.props.handleGoldChange}
                />
            </div>
        );
    }
}