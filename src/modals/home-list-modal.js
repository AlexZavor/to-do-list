import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement(".app-wrapper")

export default class HomeListModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // temporaryArray: [],
            modalName: "",
            modalTime: "",
            modalStatus: "",
            modalKey: ""
          };

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                width: "800px"
            },
            overlay: {
                backgroundColor: "rgba(1 ,1 , 1, 0.75)"
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      handleSubmit(temporaryArray) {
          debugger;
          var temporaryArray = [
                    {
                        name: this.state.modalName,
                        time: this.state.modalTime,
                        status: this.state.modalStatus,
                        key: this.state.modalKey
                    }
                ]
         
            this.setState({
                newListItemsArray : temporaryArray.concat(this.props.newListItemsArray)
            })
                
        // this.setState({
        //     temporaryArray: [
        //         {
        //             name: this.state.modalName,
        //             time: this.state.modalTime,
        //             status: this.state.modalStatus,
        //             key: this.state.modalKey
        //         }
        //     ]
        // })

        this.props.state.newListItemsArray = temporaryArray.concat(this.props.newListItemsArray);

      }
    

    render() {
        return(
            <ReactModal 
                    style={this.customStyles}
                    onRequestClose={() => {
                    this.props.handleModalClose();
                }} 
                isOpen={this.props.modalIsOpen}
            >
                <form onSubmit={this.handleSubmit} className="home-list-form-wrapper">
                    <input
                        type="text"
                        name="modalName"
                        placeholder="Name"
                        value={this.state.modalName}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="modalTime"
                        placeholder="Time"
                        value={this.state.modalTime}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="modalStatus"
                        placeholder="Status"
                        value={this.state.modalStatus}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="modalKey"
                        placeholder="Key"
                        value={this.state.modalKey}
                        onChange={this.handleChange}
                    />

                    <button className="btn">Save</button>
                </form>
            </ReactModal>
        )
    }
}