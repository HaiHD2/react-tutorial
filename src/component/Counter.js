// import { useState } from "react";
// function Counter() {
//     const [counter, setCounter] = useState(0);

//     const formatZero = function() {
//         return counter == 0 ? <span>Zero</span> : <span>{counter}</span>;
//     }
//     return (
//         <h2>Counter {formatZero()}</h2>
//     );
// }
// export default Counter;




function Counter() {
    const styles = {
        fontSize: "20px",
        fontWeight: "bold"
    }

    return (
        <button style={styles}>Create</button>
    )
}

export default Counter;