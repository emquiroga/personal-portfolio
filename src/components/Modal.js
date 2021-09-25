import React from "react";
import Portal from "./Portal";

export default function Modal ({ toggle, active, repo, live}){
return (
    <Portal>
        {active && (
            <div className="modal-bg">
                <div className="modal-wrapper">
                    <button
                    type="button"
                    onClick={toggle}>
                        <i className="far fa-times-circle"></i>
                    </button>
                    <div>
                        <a href={live} target="_blank">Launch website</a>
                    </div>
                    <div>
                        <a href={repo} target="_blank">See code</a>
                    </div>
                </div>
            </div>        
        )}
    </Portal>
)
}