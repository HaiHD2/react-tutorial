import React, { useState, useEffect } from 'react'

function Counter() {

    const [counter, setCounter] = useState(1);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        console.log("use effect running");
        document.title = `you click ${counter}`;
    })

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            {console.log("component render end")}
        </div>
    )
}

export default Counter

// 1.useEffect() chạy vào thời điểm nào của một version component được tạo ra
// Chạy sau khi mỗi lần component render

// 2.Tạo sao useEffect lại cần chạy sau mỗi lần component render
    //2.1 Mục đích đảm bảo DOM đã được mounted
    //2.2 Bản thân useEffect chạy bất đồng bộ

// 3.useEffect cũng thuộc về 1 version render nên nó cũng nhớ state, props... theo version của nó

// 4.Lầfn đầu render->mounted...re-render --- updated
// Nếu truyền chỉ 1 tham số callback thì component render -> useEffect sẽ được chạy sau đấy