$(".p-contact__checkbox-text--privacy").on("click", function(){
    $("#js-about-modal")[0].showModal();
})

$(".js-modal-close").on("click", function(event){
    event.preventDefault();
    $("#js-about-modal")[0].close();
})