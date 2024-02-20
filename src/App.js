import { useState } from "react";
import "./App.css";



function App() {
    const [counter, setCounter] = useState(0);

    const formatClass = function() {
        let classCommon = "badge p-3 ";

        if (counter == 0) {
            classCommon += "badge-warning";
        } else {
            classCommon += "badge-primary";
        }

        return classCommon;
    }
    return (
        <div className="App">
            <h1>Hello World</h1>
            <span class={formatClass()}>Primary</span>
        </div>
    );
}

export default App;
