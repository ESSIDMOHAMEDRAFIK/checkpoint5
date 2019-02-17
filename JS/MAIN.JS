
$(document).ready(function test(){
    $('#bold').click(function()  {
        if($('.phrase').css("font-weight")=="400")
    $('.phrase').css("font-weight","700");
    else
    $('.phrase').css("font-weight","400");
    


    });
});

 


$(document).ready(function italic(){
    $('#italic').click(function()  {
        if($('.phrase').css("fontStyle")=="normal")
    $('.phrase').css("fontStyle","italic");
    else
    $('.phrase').css("fontStyle","normal");
    


    });
});


$(document).ready(function(){
    $('#underlined').click(function()  {
        //console.log($('.phrase').css("text-decoration"));
        if($('.phrase').css("text-decoration")=="none solid rgb(0, 0, 0)")
    $('.phrase').css("text-decoration","underline solid rgb(0, 0, 0)");
    else
    $('.phrase').css("text-decoration","none solid rgb(0, 0, 0)");
    


    });
});


$('#fonts').on('change', function () {
    $('.phrase').css('font-size',$('#fonts option:selected').val());

});


$('#police').on('change', function () {
    $('.phrase').css('font-family',$('#police option:selected').val());

});


