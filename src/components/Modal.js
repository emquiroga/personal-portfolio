import React, { Component } from "react";
import Portal from "./Portal";

export default class Modal extends Component {
    render() {
        const { children, toggle, active, getLinks} = this.props;
        function noScroll () {
            if (active === true) {
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
                                <a href={getLinks[0]} target="_blank">Launch website</a>
                            </div>
                            <div>
                                <a href={getLinks[1]} target="_blank">See code</a>
                            </div>
                        </div>
                        </div>        
                )}
                {
                    !active && (
                        null
                    )
                }
            </Portal>
        )
    }
}