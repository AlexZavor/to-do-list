import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class StoreItem extends Component {
    constructor(props){
        super(props);

        this.state={
            purchaseAlert: ''
        }

        this.handlePurchase = this.handlePurchase.bind(this);
    }

    handlePurchase(){
        console.log('puchaseing', this.props.item);
        
        if (this.props.item.price <= this.props.gold){
            this.props.item.owned = true
            this.props.handleGoldChange(this.props.item.price)
        }else{
            this.setState({
                purchaseAlert: 'insufficent funds'
            })
        }
    }

    render(){
        const{
            name,
            price,
            description,
            icon_url,
            key,
        } = this.props.item
        return(
            <div 
                className="store-item-wrapper"
                key={key}
            >
                <div className="store-item-title-wrapper">
                    <h3>{name}</h3>
                </div>
                <h5>{description}</h5>
                <FontAwesomeIcon
                    icon="shopping-cart"
                    onClick={this.handlePurchase}
                    target="purchase"
                />
                <h5 className="alert">{this.state.purchaseAlert}</h5>
                <h6>{price}</h6>
            </div>
        );
    }
}