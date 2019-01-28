function balikString(str) {
    var result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

console.log(balikString('hello world!'))// !dlrow olleh