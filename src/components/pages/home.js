import React, { Component } from "react";

import ListComponent from "../list/list-component"

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
      return(
        <div>
            <ListComponent />
        </div>
      )
  }
}