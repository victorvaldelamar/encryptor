/*Ecrypor JS file*/

const btn_encrypt = document.getElementById('btn_encrypt');
var enc_txt;

/* logic to encryot accoding to:
The letter "e" is converted to "enter"
The letter "i" is converted to "imes"
The letter "a" is converted to "ai"
The letter "o" is converted to "ober"
The letter "u" is converted to "ufat"

Requirements:

It should work only with lowercase letters
Letters with accents or special characters must not be used
It must be possible to convert a word to the encrypted version as well as return an encrypted word to its original version.
For example:
"gato" => "gaitober"
gaitober" => "gato*/
function encryptor() {
    var txt = (document.getElementById('textarea').value).split(''); //Getting the input and splitting it into an array
    enc_txt = txt.slice(); //copying the array, the right way!
    
    if(checkInput()){
        for(var i=0; i<txt.length; i++){
            switch(txt[i]){
                case 'a': enc_txt[i] = 'ai'; break;
                case 'e': enc_txt[i] = 'enter'; break;
                case 'i': enc_txt[i] = 'imes'; break;
                case 'o': enc_txt[i] = 'ober'; break;
                case 'u': enc_txt[i] = 'ufat'; break;
                }  
        }
        console.log(enc_txt);
        document.getElementById('message').innerHTML=enc_txt.join('');
        document.getElementById('message').style.color ="#495057";
        document.getElementById('message').style.fontSize ="4vh";
        document.getElementById('message').style.padding = "2em";
        //create a button  
        const btn_copy = document.createElement("BUTTON"); //creates the button
        btn_copy.appendChild(document.createTextNode("Copy")); //appends the text to it
        document.getElementById('message').appendChild(btn_copy);//appendes the button to the message div
        btn_copy.className ="button button-gray"; //adds the class to the button
        btn_copy.style.width ="8em";//sets the width
        //make the button sits at the bottom of the message div
        document.getElementById('message').style.display ="flex";
        document.getElementById('message').style.justifyContent ="space-between";
        btn_copy.addEventListener('click',copyToClipboard);


    }else{
        alert('Please enter only lowercase letters, no special characters or numbers');
              
    }
        
    
    
}

function decryptor() {
    var txt2 = (document.getElementById('textarea').value).split('');
    var dec_txt = txt2.slice(); //copying the array, the right way!
    console.log(dec_txt);
    if(checkInput()){
        for(var i=0; i<txt2.length; i++){
            switch(enc_txt[i]){
                case 'ai': dec_txt[i] = 'a'; break;
                case 'enter': dec_txt[i] = 'e'; break;
                case 'imes': dec_txt[i] = 'i'; break;
                case 'ober': dec_txt[i] = 'o'; break;
                case 'ufat': dec_txt[i] = 'u'; break;
                }  
        }
        
        document.getElementById('message').innerHTML= dec_txt.join('');
        document.getElementById('message').style.color ="#495057";
        document.getElementById('message').style.fontSize ="4vh";
        document.getElementById('message').style.padding = "2em";
        //create a button  
        const btn_copy = document.createElement("BUTTON"); //creates the button
        btn_copy.appendChild(document.createTextNode("Copy")); //appends the text to it
        document.getElementById('message').appendChild(btn_copy);//appendes the button to the message div
        btn_copy.className ="button button-gray"; //adds the class to the button
        btn_copy.style.width ="8em";//sets the width
        //make the button sits at the bottom of the message div
        document.getElementById('message').style.display ="flex";
        document.getElementById('message').style.justifyContent ="space-between";
        btn_copy.addEventListener('click',copyToClipboard);


    }else{
        alert('Please enter only lowercase letters, no special characters or numbers');
              
    }

}
    
//listeners
btn_encrypt.addEventListener('click',encryptor);
btn_decrypt.addEventListener('click',decryptor);


//a function to check if the input is ONLY lowercase letters, not special chars or anything else
function checkInput(){
    var txt = (document.getElementById('textarea').value).split(''); //Getting the input and splitting it into an array
    var flag = true;
    for(var i=0; i<txt.length; i++){
        if(txt[i]<'a' || txt[i]>'z'){
            flag = false;
            break;
        }
    }
    return flag;
}

//a function to copy the encrypted text to the clipboard
function copyToClipboard(){
    alert('Copied to clipboard');
    var copyText = document.getElementById("message");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    navigator.clipboard.writeText(copyText.value);

}


 
