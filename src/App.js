import "./App.css";
import Child from "./components/Child"
import { useState } from "react";

function App() {

    const [parentToChild, setParentToChild] = useState('parent to child');


    return (
        <div className="App">
            <h1>Hello World</h1>
            <Child parentToChild={parentToChild} name="duc" isCompleted={false} />
        </div>
    );
}

export default App;
