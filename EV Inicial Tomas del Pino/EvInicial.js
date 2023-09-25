$(document).ready(() => {
    $(document).on('click','#slug',generateURL);
});

function generateURL(){
    var titleArray = $("#title").val().toLowerCase();
    
    for(var i of titleArray){
        var url += i + '-';
    }

    return url;
    
}