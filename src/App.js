import "./App.css";
import { useState } from "react";


function App() {

    const [tags, setTags] = useState(['tag1', 'tag2','tag3']);

    return (
        <div className="App">
            <ul>
                {
                    tags.map(
                        (tag) => {
                            return (
                                <li>{tag}</li>
                            )
                        }
                    )
                }
            </ul>
            <h1>Hello World</h1>
        </div>
    );
}

export default App;
