$(".square").slideDown();
$(".square.red-square").slideDown();

$("body").append (`
<div class="square  green-square"> </div>
<div class="square  red-square"> </div> 
`
);

$(".square").append (`
<button> Click me </button>
`)

$("button").on("click",
    (element) => {
        $(element.target)
        .closest(".square.green-square")
        $("ul").append ("<li> songsNames </li>")
    }
)


const songsNames = [
    
    "los chicos no lloran ",
    "Bambu",
    "Morena Mía",
    "Manos vacías",
    "Aire sol",
    "Te amaré",
    "Y como un lobo",
    "Tu mi salvación"
]
 

/*
$(".square").css({
    "top": "50px",
    "left":"250px"   //  es un objeto 
});

*/