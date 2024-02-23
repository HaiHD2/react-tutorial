import "./App.css";
import Child from "./components/Child"
import { useState } from "react";

function App() {

    const [parentToChild, setParentToChild] = useState('parent to child');

    const handleDelete = (id) => {
        console.log('id', id);
    }

    return (
        <div className="App">
            <h1>Hello World</h1>
            <Child 
            parentToChild={parentToChild} 
            name="hai"
            onDelete={handleDelete} />
        </div>
    );
}

export default App;
