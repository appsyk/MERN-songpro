$(document).ready(function(){

    $('#mic-clicked').click(function(){
    
        $('#search-id').focus();

        setTimeout(function(){
            $('#search-id').blur();
        },20000)
    });
})