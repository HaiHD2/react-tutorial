import { useEffect, useState } from "react";
import "./App.css";

let i = 0;
function App() {

    i++;

    console.log('%c start! ', 'background: #222; color: red');
    console.log("render start version 00" + i);

    const id = 1;
    const [post, setPost] = useState({});
    console.log(`id version 00${i}`, id);

    console.log(post);

    useEffect(() => {
        console.log("useEffect running version 00" + 1);
        fetch("https://jsonplaceholder.typicode.com/todos/" + id)
            .then((response) => response.json())
            .then((json) => {
                setPost(json);
            });
    }, [id]);

    return (
        <div className="App">
            <div>
                <h1>{post.id}</h1>
                <h1>{post.title}</h1>
            </div>
            {console.log("render end version 00" + i)}
            {console.log('%c end! ', 'background: #222; color: red')}
        </div>
    );
}

export default App;