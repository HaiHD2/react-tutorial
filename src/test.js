// truyền data từ cha xuống con

// index.html chứa index.js -> render content App component đến div#root
function app() {

    let app_variable = "parent to child"; // state
    child(app_variable); // props
}

function child(parentToChild) {

    console.log("parent to child = ",parentToChild);
}

app();