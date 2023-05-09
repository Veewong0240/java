function howdy(firstName){
    alert("Howdy " + firstName);
}

function displayMinute(){
    var date = new Date();
    var currentMinute = date.getMinutes();
    
    alert("Current minute:" + currentMinute)
}

function hideElement(){
    var element = document.getElementById('body')

    element.style.display = 'none';
}