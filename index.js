function addingEventListener() {
    const input = document.querySelector("#button");
    input.addEventListener('click', clickAlert);
    
    function clickAlert () {
        alert("I was clicked!");
    }
}


