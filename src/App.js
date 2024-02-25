import { useEffect, useState } from "react";
import "./App.css";

function App() {

    const [post, setPost] = useState({});

    useEffect(() => {
        console.log("useEffect running")
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => {
                setPost(json);
            });
    }, []);

    return (
        <div className="App">
            <div>
                <h1>{post.id}</h1>
                <h1>{post.title}</h1>
            </div>
        </div>
    );
}

export default App;

//1. Tại sao lại bị hiện tượng call api liên tục

//Lần đầu render App version 001
// useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//             .then((response) => response.json())
//             .then((json) => {
//                 setPost(json); // {} -> {data với id = 1} -> component re-render
//             });
//     });

//Lần thứ 2 re-render App version 002
// useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//             .then((response) => response.json())
//             .then((json) => {
//                 setPost(json); // {} -> {data với id = 1} -> {data với id = 1} -> state thay đổi -> App re-render
//             });
//     });

// 