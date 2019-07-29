import React, {Component} from 'react';
import StoreItem from './store-item';
import axios from 'axios';
import sword from '../../../static/assets/temp_images/sword.png';
import plant from '../../../static/assets/temp_images/plant.png';


export default class StoreItems extends Component {
    //TODO - 
    // export gold prop to shop
    // add pictures

    constructor(){
        super();

        this.state = {
            storeItems: []
        }

        this.mapStoreItems = this.mapStoreItems.bind(this);
        this.getStoreItems = this.getStoreItems.bind(this);
    }

    getStoreItems(){
        console.log('getting store items')
        axios
          .get('http://localhost:2403/things')
          .then(responce => {
              console.log(responce);
              this.setState({
                  storeItems: responce.data
              })
          })
          .catch(error => {
            console.log(error);
          });
    }

    mapStoreItems(){
        return(
            this.state.storeItems.map(item => {
                return(
                    <StoreItem 
                        item = {item}
                        key = {item.id}
                        gold = {this.props.gold}
                        handleGoldChange = {this.props.handleGoldChange}
                    />
                )
            })
        );
    }

    componentWillMount(){
        this.getStoreItems();
    }

    render(){
        return(
            <div className="store-items-wrapper">
                {this.mapStoreItems()}
            </div>
        );
    }
}