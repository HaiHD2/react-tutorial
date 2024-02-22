import React from 'react'

function Child(props) {

    const {parentToChild, name} = props;

    console.log("parentToChild",parentToChild);
    return (
        <div>
            Child
        </div>
    )
}

export default Child