

function HelloComponent() {

    // Cách 1
    // const hello = function(name) {
    //     const handle = function() {
    //        console.log("name", name); 
    //     }
    //     return handle;
    // }

    const hello = name => (
        () => {
            console.log("name", name);
        }
    )

    // Cách 2
    const handleHello = function(name) {
        console.log("name", name);
    }

    return (
        <div>
            <button onClick={() => {handleHello('React')}}>React</button>
            <button onClick={function() {
                handleHello('Reduct')
            }}>Reduct</button>
            <button onClick={hello('Context')}>Context</button>
        </div>
    )
}

export default HelloComponent;

// Event onClick: Nhận vào function reference
// 1. Chạy function HelloComponent
    // Tạo closure cho handle button click vào
    // Khi chạy đến {hello('React')} sẽ tạo ra closure {hello} {name: 'React'}
    // Khi chạy đến {hello('Reduct')} sẽ tạo ra closure {hello} {name: 'Reduct'}
    // Khi chạy đến {hello('Context')} sẽ tạo ra closure {hello} {name: 'Context'}

// Kết thúc quá trình chạy lần đầu với HelloComponent