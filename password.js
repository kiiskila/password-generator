
function checkForUnique(str){
    var hashtable = {};
    for(var i=0,len=str.length;i<len;i++){
        if (hashtable[str[i]] != null){
            hashtable[str[i]] = 1;
            return false;
        }else{
            hashtable[str[i]] = 0;
        }
    }
    return true;
}

function copy(){
    var copyText = document.getElementById("output");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");
}


function generatePassword() {

    var output = "";
    var charset = "";

    var passLength = document.getElementById('number').value;
    var lowCase = document.getElementById('lowCase').checked;
    var upCase = document.getElementById('upCase').checked;
    var symbCase = document.getElementById('symbCase').checked;
    var numCase = document.getElementById('numCase').checked;

    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var symbols = '!@#$%^&*()';
    var numbers = '0123456789';

    if(lowCase == true){
        charset += lower;
    }

    if(upCase == true){
        charset += upper;
    }

    if(symbCase == true){
        charset += symbols;
    }

    if(numCase == true){
        charset += numbers;
    }

    for(var i = 0; i < passLength; i++){
        var newNum = charset.charAt(Math.random() * charset.length)
        output += newNum;
    }


    document.getElementById('output').value = output;
}