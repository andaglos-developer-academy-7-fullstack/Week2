// perulangan 1-100
for (var i = 1; i < 100; i++) {
    console.log(i)
}


//genap- ganjil
for (var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('genap')
    } else {
        console.log('ganjil')
    }
}


// pertambahan 2
for (var i = 1; i < 100; i += 2) {
    console.log(i)
}
// pertambahan 5
for (var i = 1; i < 100; i += 5) {
    console.log(i)
}
// pertambahan 9
for (var i = 1; i < 100; i += 9) {
    console.log(i)
}


// kelipatan 3 dengan pertambahan 2
for (var i = 1; i < 100; i += 2) {
    if (i % 3 === 0) {
        console.log(i + ' kelipatan 3')
    } else {
        console.log(i)
    }
}
// kelipatan 6 dengan pertambahan 5
for (var i = 1; i < 100; i += 5) {
    if (i % 6 === 0) {
        console.log(i + ' kelipatan 6')
    } else {
        console.log(i)
    }
}
// kelipatan 10 dengan pertambahan 9
for (var i = 1; i < 100; i += 9) {
    if (i % 10 === 0) {
        console.log(i + ' kelipatan 10')
    } else {
        console.log(i)
    }
}