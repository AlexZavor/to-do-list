import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ListComponent extends Component {
  constructor() {
    super();

    this.state={
        newItem: '',
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
    this.crossOut = this.crossOut.bind(this);

  }


//   HELP
  crossOut(listItems) {
    console.log("done")
    this.setState({
        //   ...this.state.listItems, status: "complete"

        // listItems: update(this.state.listItems, {1: {status: {$set: "complete"}}})

        [listItems.status]: "complete"
        
    })
  }

  mapItems() {
    return (
      this.state.listItems.map(item => {
          return(
              <li key={item.key} onClick={this.crossOut}>{item.name}</li>
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
            <div id="myDIV" className="header">
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
            </div>

                <ul id="myUL">
                    
                    {this.mapItems()}
                </ul>
        </div>
    );
  }
}
