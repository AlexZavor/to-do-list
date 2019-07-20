import React, {Component} from 'react';

export default class StoreItems extends Component{
    constructor(){
        super();

        this.state = {
            storeItems: [
                {name: 'plant',
                price: 200,
                descripton: 'a simple plant for your room',
                icon_url: null,
                key: '1'},
                
                {name: 'sword',
                price: 150,
                descripton: 'a strong sword to weild',
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
                    <div>
                        <div className="store-item-title-wrapper">
                            <h3>{item.name}</h3>
                        </div>
                        <h5>{item.descripton}</h5>
                        <h6>{item.price}</h6>
                    </div>
                );
            })
        );
    }

    render(){
        return(
            <div>
                {this.mapStoreItems()}
            </div>
        );
    }
}