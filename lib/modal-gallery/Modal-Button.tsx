import  { MouseEventHandler } from "react";
import './modal.css'

export  function ModalButton(props: {
    isRight: boolean,
    isLeft:boolean,
    onClickHandler: MouseEventHandler;
    }) {


    if (props.isRight) {
        
        return (
                <button id={"modal-button-right"} className={"modal-navigation-button"} aria-label="navigation right" onClick={(e) => props.onClickHandler(e)
                }>
                <img id={"modal-button-right"} data-testid={"ButtonRight"} src={"./assets/images/thin-chevron-round-top-icon.svg"} className={"modal-button-right"}  
                />
                </button>
        );
    } else if (props.isLeft) {
        return (
                <button id={"modal-button-left"} data-testid={"ButtonLeft"} className={"modal-navigation-button"} aria-label="navigation left"onClick={(e) => props.onClickHandler(e)
                }>
                <img id={"modal-button-left"}  src={"./assets/images/thin-chevron-round-top-icon.svg"} className={"modal-button-left"} />
                </button>
        );
    }
}
