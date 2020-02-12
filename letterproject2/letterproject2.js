var alphabet = "abcdefghijklmnopqrstuvwxyz"
var name = "";
$('#fontbutton').click(
    function(){
        var textbox = $('#textbox').val();
            console.log(textbox);
        for(var i = 0; i<textbox.length; i++){
            var letterIndex = alphabet.indexOf(textbox.charAt(i));
            var filename = "letters/L_" + letterindex + ".png";
            console.log(fileName);
        } 
    }
);