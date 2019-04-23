import React from "react";
import { Button } from "reactstrap";

const Buttons = (props) => {
    return (
        <>
            <div>
               
                <Button color={props.buttonClass} size="lg" block onClick={props.clickFunct} data-darevalue={props.isADare}>
                    {props.children}
                </Button>
                <p>

                </p>
              
            </div>
        </>
    )
}

export default Buttons;
