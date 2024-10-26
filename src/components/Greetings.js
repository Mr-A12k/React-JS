import React from "react";

const Greet = props=> {
    return (
        <div>
            <h1>Hello it's Kabix. Lets ready for the Hack ! with {props.name} </h1>
            {props.children}
        </div>
    )
}

export default Greet;