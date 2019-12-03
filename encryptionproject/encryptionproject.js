function encrypterdecrypter(message,key,needEncrypter){
    var alphabet = "abcdefgnhijklmnopqrstuvwxyz";
    var encrypted = "";
   // var decrypted = "";
    for(var i=0; i<message.length;i++){
        var j = i % key.length; 
        var keyLetter = key.charAt(j);
        var numSpot = alphabet.indexOf(keyLetter);
        var startLetter = message.charAt(i);
        var letterIndex = alphabet.indexOf(startLetter);
        if(needEncrypter){
            var newIndex = (letterIndex + numSpot) % alphabet.length;       
        }
       else{
           var newIndex =((alphabet.length - numSpot) + letterIndex) % alphabet.length;
       }
       encrypted += alphabet.charAt(newIndex);
    }
    return encrypted;
    //console.log("decrypted:" , decrypted);
}

//encrypterdecrypter("yogurt","cat",true); //f(x)
//encrypterdecrypter("aozwrm","cat",false);//g(x)

console.log(encrypterdecrypter(encrypterdecrypter("zebra","cat",true), "cat", false));

  //g(f(x))


/*function decrypter(message,key){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var decrypted = "";    
    for(var i=0; i<message.length; i++){      
        var j = i % key.length; 
        var keyLetter = key.charAt(j);
        var numSpot = alphabet.indexOf(keyLetter);
        var startLetter = message.charAt(i);
        var letterIndex = alphabet.indexOf(startLetter);
        var newIndex = ((alphabet.length - numSpot) + letterIndex) % alphabet.length;
        decrypted +=  alphabet.charAt(newIndex);
}    
    console.log("decrypted:" , decrypted);

encrypter("yogurt","cat",true);
decrypter("aozwrm","cat");*/
