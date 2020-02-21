const get = (str,exc) => {
    let result = str;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < exc.length; j++) {
            if(str[i] !== exc[j]) {
                result = result.replace(exc[j],"")
            }   
        }
    }
    return result;
}
console.log(get("Hello JS",["H","e","l","o"," "]));
