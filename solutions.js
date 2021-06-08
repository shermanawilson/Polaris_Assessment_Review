function doingJavaScriptRightNow(){
    return true;
}

function onMarsRightNow(){
    return false;
}

function sayHello(name) {
    if(!name || !isNaN(name)){
        return "Hello, world!";
    }

    return "Hello, " + name + "!";
}