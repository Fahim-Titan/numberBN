
function numberBN(node) {
    node.oninput = function(){
        var numberBN = addIfBanglaNumber(node.value);
        // console.log(node.value);
        node.value = numberBN;
    }
}


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