const englishNumberList = ['0','1','2','3','4','5','6','7','8','9'];
const banglaNumberList = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
const numberList = ['0','1','2','3','4','5','6','7','8',9, '০','১','২','৩','৪','৫','৬','৭','৮','৯'];

function numberBN(node) {
    node.oninput = function(){
        var numberBN = validate(node.value);
        // var numberBN = addIfBanglaNumber(node.value);
        // console.log(node.value);
        node.value = numberBN;
    }
}

function validate(value) {
    const arr = toArray(value);
    let data = arr.reduce(reducer, '');
    return data;
}

const reducer = (acc, curr) => {
    if(acc == 'undefined') acc = '';
    if(isBangla(curr)) {
        acc += curr;
    } else {
        acc += convert(curr, 'toBangla');
    }
    return acc;
}


const isBangla = (value) => {
    return banglaNumberList.includes(value);
}

const isEnglish = (value) => {
    return englishNumberList.includes(value);
}

const convert = (value, toLanguage) => {
    if(toLanguage === 'toBangla') {
        let index = englishNumberList.indexOf(value);
        let banglaNumber = banglaNumberList[index];
        return banglaNumber;
    }
}

function toArray(data) {
    let arr=[];
    console.log(data.length);
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        arr[index] = element;
    }
    console.log(arr);
    return arr;
}

// const toArray = (data) => {
//     console.log(data);
    
//     let value = data.filter(element => {
//         (numberList.includes(element))? element: '';
//     })
//     return value;
// }

function addIfBanglaNumber(data){
    var number = '';
    for(var i=0; i< data.length; i++){
        var value = data[i];
        if(value == '০') number += value;
        else if(value == '১') number += value;
        else if(value == '২') number += value; 
        else if(value == '৩') number += value; 
        else if(value == '৪') number += value; 
        else if(value == '৫') number += value; 
        else if(value == '৬') number += value; 
        else if(value == '৭') number += value; 
        else if(value == '৮') number += value; 
        else if(value == '৯') number += value; 
        else {
            null;
        }
    }
    return number;
}