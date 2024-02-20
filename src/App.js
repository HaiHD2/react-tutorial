import "./App.css";
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// let stateValue; // Vị trí khai báo: global

// function useState(intialState) {
//     if (stateValue === undefined) {
//         stateValue = intialState;
//     }
//     function setValue(value) {
//         stateValue = value;

//         // Sau khi state thay đổi render lại
//         ReactDOM.createRoot(document.getElementById("root")).render(
//             <React.StrictMode>
//                 <App />
//             </React.StrictMode>
//         );
//     }

//     return [stateValue, setValue];
// }

// Khi ấn vào increment
// stateValue = 2
// 


function App() {
    const [counter, setCounter] = useState(1);

    const handleIncrement = function () {
        setCounter(counter + 1);
    };

    const handleDecrement = function () {
        setCounter(counter - 1);
    };

    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default App;

// Tạo state để quản lí counter
// Khi state thay đổi, thì giao diện thay đổi
