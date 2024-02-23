// truyền data từ con lên cha

// index.html chứa index.js -> render content App component đến div#root
function app() {

    const handleDelete = function(dataFromChild) {
        console.log('data from child:', dataFromChild);
    }

    child(handleDelete);
}

function child(callback) {
    // console.log("callback: ", callback);

    const childData = "child data"; // child
    callback(childData);

}

app();