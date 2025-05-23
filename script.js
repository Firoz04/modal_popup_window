
document.addEventListener("DOMContentLoaded", function(){

    let openModelBTN = document.getElementById('openModelBTN');
    let closeModelBTN = document.getElementById('closeModelBTN');
    let model = document.getElementById("myModel");
    
    //Open the model
    openModelBTN.addEventListener("click",function(){
        model.style.display = "block";
    });
     //Close the model
    closeModelBTN.addEventListener("click",function(){
        model.style.display = "none";
    });
    //close the model if user click outside the model
    window.addEventListener("click", function(event){
        if(event.target === model){
            model.style.display = "none";
        }
    });

});

