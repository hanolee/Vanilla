//jQuery("h1")
$("h1").css("color", "blue");

// $(document).ready(function(){
//     $("h1").css("color","red");
// })

console.log($("h1").css("font-size")); //32px

//Class
$("h1").addClass("big-title");
console.log($("h1").css("color")); //32px
$("h1").removeClass("big-title");

//innerHtml
$("button").html("<en>Click Now<en>");
$("h1").text("textInsert");

//attribute
$("a").attr("href", "https://naver.com");
console.log($("img").attr("src")); //drum.png
//EventListener
$("h1").click(function(){
    $("h1").css("color", "white");
})

$("button").click(function(){
    $("h1").css("color","green")
})

$("input").keypress(function(event){
    console.log(event.key)
})

$(document).keypress(function(event){
    $("h1").text(event.key)
})
$("h1").on("mouseover", function(){
    $("button").css("background-color", "black");
    $("button").css("color", "white");
})

$("h1").append("<button>Append</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").before("<button>before</button>");
$("h1").after("<button>After</button>");


$("button").click(function(){
    //$("h1").hide()
    //$("h1").toggle()
    //$("h1").fadeOut()
    //$("h1").fadeToggle()
    //$("h1").slideToggle();
    // $("h1").animate({opacity:0.5})
    // $("h1").animate({margin:"20%"})
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})