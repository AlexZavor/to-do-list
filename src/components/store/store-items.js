import React, {Component} from 'react';

export default class StoreItems extends Component{
    constructor(){
        super();

        this.state = {
            storeItems: [
                {name: 'plant',
                price: 200,
                description: 'a simple plant for your room',
                icon_url: null,
                key: '1'},
                
                {name: 'sword',
                price: 150,
                description: 'a strong sword to weild',
                icon_url: null,
                key: '2'}
            ]
        }

        this.mapStoreItems = this.mapStoreItems.bind(this);
    }

    mapStoreItems(){
        return(
            this.state.storeItems.map(item =>{
                return(
                    <div className="store-item-wrapper" key={item.key}>
                        <div className="store-item-title-wrapper">
                            <h3>{item.name}</h3>
                        </div>
                        <h5>{item.description}</h5>
                        <h6>{item.price}</h6>
                    </div>
                );
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