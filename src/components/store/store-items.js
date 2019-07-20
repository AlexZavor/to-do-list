import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class StoreItems extends Component {
    //TODO - 
    // get click handler to work
    // get focus click styles to work
    // place cart in correct position
    // export gold prop to shop
    // add pictures

    constructor(){
        super();

        this.state = {
            purchaseAlert: '',
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
        this.handlePurchase = this.handlePurchase.bind(this);
    }

    handlePurchase(event){
        console.log('puchaceing', event.target);
        // if (item.price <= this.props.gold){
        //     this.setState({
        //         [item.owned]: true
        //     })
        // }else{
        //     this.setState({
        //         purchaseAlert: 'insufficent funds'
        //     })
        // }
    }

    mapStoreItems(){
        return(
            this.state.storeItems.map(item =>{
                return(
                    <div 
                    className="store-item-wrapper" 
                    key={item.key}
                    >

                        <div className="store-item-title-wrapper">
                            <h3>{item.name}</h3>
                        </div>
                        <h5>{item.description}</h5>
                        <FontAwesomeIcon
                            icon="shopping-cart"
                            onClick={this.handlePurchase} 
                        />
                        <h5 className="alert">{this.state.purchaseAlert}</h5>
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