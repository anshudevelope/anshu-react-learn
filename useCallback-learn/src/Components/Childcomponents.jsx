import React from "react";

const ChildComponents = React.memo(
    (props) => {

        console.log("Child component re-render again");
        
        return(
            <div>
                <button onClick={props.handleClick }>
                {props.buttonName}
                </button>
            </div>
        )
    }
)

export default ChildComponents;

// using React.memo to solve this problem
// when you wrap the component with React.memo then the component will re-render only when the props of the component get change/updated otheewise not.
// Note: if you are sending the function then React.memo wouldn’t save your component to get re-render. Only with the props of the component. for that useCallback hook used as given in this example