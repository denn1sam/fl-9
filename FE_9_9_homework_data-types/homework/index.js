function findType(type) {
    return typeof type;
}

function forEach(arr, fnCnslLog) {
    for(let i = 0; i < arr.length; i++) {
        fnCnslLog(arr[i]);
    }
}

function map(arr, fnCnslLog) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fnCnslLog(arr[i]));
    }
    return newArr;
}

function filter(arr, fnCnslLog) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fnCnslLog(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return console.log(newArr);
}

function getAdultAppleLovers(data) {
    let newArr = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].age > 18 && data[i].favoriteFruit === `apple`) {
            newArr.push(data[i].name);
        }
    }
    return console.log(newArr);
}

function keys(obj) {
    let newArr = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newArr.push(key);
        }
    }
    return console.log(newArr);
}

function values(obj) {
    let newArr = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newArr.push(obj[key]);
        }
    }
    return console.log(newArr);
}

function showFormattedDate(date) {
    let monthNames = [`Jan`, `Feb`, `Mar`,
                      `Apr`, `May`, `Jun`, 
                      `Jul`, `Aug`, `Sep`, 
                      `Oct`, `Nov`, `Dec` ];
    return console.log(`It is ${date.getDate()} of ${monthNames[date.getMonth()]}, ${date.getFullYear()}`);
}