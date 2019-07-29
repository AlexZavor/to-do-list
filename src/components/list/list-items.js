import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ListItems extends Component {
    constructor(props){
        super(props);

        this.state={
            newArray: "",
            deleteItem: "",
            ItemChecked: "",
            FontAwesomeCheck: "unchecked",
        }

        this.handleItemChecked = this.handleItemChecked.bind(this)
        this.handleItemUnchecked = this.handleItemUnchecked.bind(this)
        this.listDelete = this.listDelete.bind(this)
    }

    handleItemChecked() {
        this.setState({
            ItemChecked: "checked",
            FontAwesomeCheck: "checked"
        })
    }

    handleItemUnchecked() {
        this.setState({
            ItemChecked: "",
            FontAwesomeCheck: "unchecked"
        })
    }

    listDelete(event){
        console.log("delete", event.target)
        var deleteItem =  this.props.listItems.indexOf();
        console.log(deleteItem)
        if (deleteItem > -1) {
            this.props.listItems.splice(deleteItem, 1);
          }
    }


    render(){
        const{
            name,
            time,
            status,
            key,
        } = this.props.item

        return(
            
                <li
                    key={key}
                    onClick={this.state.ItemChecked === "checked" ? (
                        this.handleItemUnchecked
                    ):(
                        this.handleItemChecked
                    )
                    }
                    status={this.state.ItemChecked}
 
                    
                    className={this.state.ItemChecked}
                >
                    <FontAwesomeIcon
                        className="fontawesome-check-icon"
                        icon={this.state.FontAwesomeCheck === "checked" ? (
                            "check-circle"
                        ):(
                            "times-circle"
                        )
                    }
                    />
                    {name}

                    {/* <div className="list-delete" onClick={this.listDelete} >
                        delete
                    </div>  */}
                </li>
        );
    }
}