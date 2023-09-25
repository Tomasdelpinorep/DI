$(document).ready(() => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    $(document).on("click","#btnCypher",function(){
    
        if($("#message").val == ''){
            $("#message").addClass('is-invalid');
        }else{
            var cipheredMessage = cypherMessage($("#message"));
            $("#decipheredMessage").text("")
        }
    })
});