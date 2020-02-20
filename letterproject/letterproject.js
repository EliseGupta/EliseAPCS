var alphabet = "abcdefghijklmnopqrstuvwxyz";
var name = "";
$('#fontbutton').click(
    function(){
        var textbox = $('#textbox').val();
        console.log(textbox);

        for(var i=0; i<textbox.length;i++){
            var letterIndex = alphabet.indexOf(textbox.charAt(i));
            console.log(letterIndex);
            var fileName = "letters/L_" + letterIndex + ".png";
            console.log(fileName);
            $("body").append("<img class='letter' src=" + fileName + ">"); 
        }
     }
);
