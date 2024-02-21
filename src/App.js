import "./App.css";
import { useState } from "react";


function App() {

    const [counter, setCounter] = useState(1);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={handleIncrement}>
                Increment
            </button>
        </div>
    );
}

export default App;


// Lần render đầu tiên
    // Điều kiện để trở thành closure
    // 1. Phải là hàm được bao đóng trong function
    // 2. Phải sử dụng biến của function bên ngoài

// Lần thứ n render
    // Điều kiện để trở thành closure
    // 1. Phải là hàm được bao đóng trong function
    // 2. Phải sử dụng biến của function bên ngoài