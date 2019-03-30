import React from "react";
import { Button } from "reactstrap";

const Buttons = (props) => {
    return (
        <>
            <div>
               
                <Button variant="secondary" size="lg" block>
                    Dare
                </Button>
                <p>
                    {props.myDare}
                </p>
            </div>
        </>
    )
}

export default Buttons;