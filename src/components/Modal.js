import React, { Component } from "react";
import Portal from "./Portal";

export default class Modal extends Component {
    render() {
        const { children, toggle, active, repo, live } = this.props;
        function noScroll () {
            if (active == true) {
                document.getElementById('body').classList.add('no-scroll')
            } else {
            document.getElementById('body').classList.remove('no-scroll')
        }
        }   
        noScroll();
        return(
            <Portal>
                {active && (
                        <div className="modal-bg">
                        <div className="modal-wrapper">
                            <button
                            type="button"
                            onClick={toggle}><i className="far fa-times-circle"></i></button>
                             <div>
                                <a href={repo} target="_blank">Launch website</a>
                            </div>
                            <div>
                                <a href={live} target="_blank">See code</a>
                            </div>
                        </div>
                        </div>        
                )}
            </Portal>
        )
    }
}