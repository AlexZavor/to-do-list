import React, { Component } from "react";


import ListItems from "../list/list-items";
import HomeListModal from"../../modals/home-list-modal";

export default class ListComponent extends Component {
  constructor() {
    super();

    this.state={
        newListItemsArray: "",
        newItem: "",
        listItems: [
            {name: "meet alex",
            time: null,
            status: "incomplete",
            key: "1"},

            {name: "meet Rhett",
            time: null,
            status: "incomplete",
            key: "2"},

            {name: "meet Gary",
            time: null,
            status: "incomplete",
            key: "3"},

            {name: "meet Raphtailia",
            time: null,
            status: "incomplete",
            key: "4"},
        ]
    }
    

    this.newElement=this.newElement.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.mapItems=this.mapItems.bind(this);
    this.listLegnth=this.listLegnth.bind(this);
    this.handleModalClose=this.handleModalClose.bind(this);
    this.handleNewBlogClick=this.handleNewBlogClick.bind(this);
    this.updateNewListItemsArray=this.updateNewListItemsArray.bind(this);
  }

  updateNewListItemsArray() {
    this.setState({
        newListItemsArray: this.state.listItems
    })
  }

  handleModalClose() {
    this.setState({
      BlogModalIsOpen: false
    })
  }

  handleNewBlogClick() {
    this.setState({
      BlogModalIsOpen: true
    })
    this.updateNewListItemsArray()
  }


  listLegnth() {

  }

  mapItems() {
    return (
      this.state.listItems.map(item => {
          return(
            <ListItems 
                listItems = {this.state.listItems}
                id={item.name}
                item = {item}
                key = {item.key}   
                status = {item.status} 
                time = {item.time}      
                name = {item.name}
            />
          );
      })
    );
}

handleChange(event) {
    this.setState ({
        newItem: event.target.value
    })
}

newElement() {
    var li = document.createElement("li");
    var t = document.createTextNode(this.state.newItem);
    li.appendChild(t);
    if (this.state.newItem === '') {
        console.log("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
        document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  

  render() {
    
    return(
        <div>

        <HomeListModal
            handleSuccessfulNewBlogSubmission={
                this.handleSuccessfulNewBlogSubmission
            }

            newListItemsArray={this.state.newListItemsArray}

            modalIsOpen={this.state.BlogModalIsOpen}
            handleModalClose={this.handleModalClose}/>

            <div className="new-home-list">
                <a onClick={this.handleNewBlogClick}>
                    <h1>add</h1>
                </a>
            </div>

            {/* <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input
                    type="text"
                    id="myInput"
                    placeholder="Title..."
                    value={this.state.newItem}
                    onChange={this.handleChange}
                />
                <span
                    onClick={this.newElement}
                    className="addBtn">Add
                </span>
            </div> */}

            <ul id="myUL">
                {this.mapItems()}
            </ul>
        </div>
    );
  }
}
