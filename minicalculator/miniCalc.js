$('#sumButton').click(
    function(){
        
        /*
         * HINT: parseInt() -  https://www.w3schools.com/jsref/jsref_parseint.asp 
         * 
         **/
        var a = parseInt($('#sumA').val());
        
        var b = parseInt($('#sumB').val());
        var sum = a + b;
        $('#sumTotal').text(sum);
}
);
$('#minusButton').click(
    function(){
        
        /*
         * HINT: parseInt() -  https://www.w3schools.com/jsref/jsref_parseint.asp 
         * 
         **/
        var a = parseInt($('#minusA').val());
        
        var b = parseInt($('#minusB').val());
        var sum = a - b;
        $('#minusTotal').text(sum);
}
);
$('#multiplyButton').click(
    function(){
        
        /*
         * HINT: parseInt() -  https://www.w3schools.com/jsref/jsref_parseint.asp 
         * 
         **/
        var a = parseInt($('#multiplyA').val());
        
        var b = parseInt($('#multiplyB').val());
        var sum = a * b;
        $('#multiplyTotal').text(sum);
}
);
$('#divideButton').click(
    function(){
        
        /*
         * HINT: parseInt() -  https://www.w3schools.com/jsref/jsref_parseint.asp 
         * 
         **/
        var a = parseInt($('#divideA').val());
        
        var b = parseInt($('#divideB').val());
        var sum = a / b;
        $('#divideTotal').text(sum);
}
);


