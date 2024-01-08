$(".open").click(function (e) { 
    if ($(this).parent().parent(".question-block").css("height") == "400px"){
        $(this).css("transform", `rotate(${0}deg)`)
        $(this).parent().parent(".question-block").animate({height: "20px"}, 400, "linear", function(){})
    }
    else{
        $(".open").css("transform", `rotate(${0}deg)`)
        $(".question-block").animate({height: "20px"})
        $(this).parent().parent(".question-block").animate({height: "400px"}, 400, "linear", function(){})
        $(this).css("transform", `rotate(${180}deg)`)
    }
});