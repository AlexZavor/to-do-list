import React from 'react';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';

const NavigationComponent = props => {

    return(
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/store" activeClassName="nav-link-active">
                        Store</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/room" activeClassName="nav-link-active">
                        Your room</NavLink>
                </div>

            </div>
            <div className="right-side">
                <div className="nav-link-wrapper">
                    <NavLink to="/sign-up" activeClassName="nav-link-active">
                        Sign Up</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/login" activeClassName="nav-link-active">
                        Log In</NavLink>
                </div>
            </div>
        </div>
    );
}

export default withRouter(NavigationComponent);