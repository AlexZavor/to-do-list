import React, {Component} from 'react';
import StoreItem from './store-item';

export default class StoreItems extends Component {
    //TODO - 
    // export gold prop to shop
    // add pictures

    constructor(){
        super();

        this.state = {
            storeItems: [
                {name: 'plant',
                price: 200,
                description: 'a simple plant for your room',
                icon_url: null,
                key: '1',
                owned: false},
                
                {name: 'sword',
                price: 150,
                description: 'a strong sword to weild',
                icon_url: null,
                key: '2',
                owned: false}
            ]
        }

        this.mapStoreItems = this.mapStoreItems.bind(this);
    }

    mapStoreItems(){
        return(
            this.state.storeItems.map(item => {
                return(
                    <StoreItem 
                        item = {item}
                        key = {item.key}
                        gold = {this.props.gold}
                        handleGoldChange = {this.props.handleGoldChange}
                    />
                )
            })
        );
    }

    render(){
        return(
            <div className="store-items-wrapper">
                {this.mapStoreItems()}
            </div>
        );
    }
}