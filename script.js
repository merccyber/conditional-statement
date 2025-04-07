
function processAddress() {
    if (address.value == '') {
        alert('input cannot be empty')
    } else {
        var letter = (address.value).toLowerCase()
        newAddress.innerHTML = letter
    }
}
function processTitles() {
    var userInput = list.value.toLowerCase()
    var bookList = ["Adetayo","Esther", "Mercy"]
    if (userInput ==''){
        alert("input book title")
    }
    else if (bookList.includes(userInput)){
        alert("Book Title already exit")
    }
    else{
        alert("Weldone")
        newTitles.innerHTML = "Your book title weldone is " + userInput
    }
}
function adjustSpace() {
    if (Text.value == "") {
        alert("input cannot be empty");
    }
    else{
        var word = text.value.trim();
        newText.innerHTML = word;
    }
}
function checkcart() {
    var even = number.value
    if (even%2 == 0) {
        yourdiscount.innerHTML = " you get the discount 20%"
    }
    else {
        yourdiscount.innerHTML = 'no discount buy more bro'
    }
}
function checkTem() {
    var customerTem = temperature.value;
    if (customerTem <= 19) {
        temAns.innerText = "cold";
    } else if (customerTem >= 20 && customerTem <= 28) {
        temAns.innerText = "warm";
    } else {
        temAns.innerText = "Hot";
    }

}