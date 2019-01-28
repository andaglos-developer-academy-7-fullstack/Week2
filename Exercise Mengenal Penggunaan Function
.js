// tugas 1
function shoutOut() {
    var temp = 'Hallo function'
    return temp
}

console.log(shoutOut())// Hallo function


// tugas 2
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply;

function calculateMultiply(num1, num2) {
    return num1 * num2;
}

console.log(hasilPerkalian(5, 6))//30


// tugas 3

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
var fullSentence = processSentence(name, age, address, hobby);

function processSentence() {
    var result = 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby
    return result;


}
console.log(fullSentence); //"Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
