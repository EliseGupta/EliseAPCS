var alphabet = "abcdefghijklmnopqrstuvwxyz"
var name = "";
$('#fontbutton').click(
    function(){
        var textbox = $('#textbox').val();
        console.log(textbox);
        //need to do #box.empty
        for(var i=0; i<textbox.length;i++){
            var letterIndex = alphabet.indexOf(textbox.charAt(i));
            console.log(letterIndex);
            var fileName = "letters/L_" + letterIndex + ".png";
            console.log(fileName);
            $('#box').append("<img class='letter' src=" + fileName + ">"); 
        } 
    }
);