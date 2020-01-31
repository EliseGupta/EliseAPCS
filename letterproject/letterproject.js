var alphabet = "abcdefgnhijklmnopqrstuvwxyz";
var name = "";
$('#fontbutton').click(
    function(){
        var textbox = $('#textbox').val();
     for(var i=0; i<textbox.length;i++){
        console.log(textbox.charAt(i));
     }
    }
);