// /document.querySelector("h1").innerHTML = "Good Bye"

var html = document.firstElementChild;
var head = document.firstElementChild.firstElementChild;
var body = document.firstElementChild.lastElementChild;

var heading = body.firstElementChild; //<h1>
heading.innerHTML = "Hano";
console.log(heading);


var liArray = document.getElementsByTagName("li") //HTMLCollection(3) [li, li, li]
document.getElementsByTagName("li")[2].style.color = "purple";

var btn = document.getElementsByClassName("btn"); //HTMLCollection [button.btn]

var title = document.getElementById("title");


document.querySelector("h1"); //<h1 id="title">Hano</h1>

document.querySelector("#title"); //<h1 id="title">Hano</h1>

document.querySelector(".btn");// 버튼 

document.querySelector("li a")// <a href="">Google</a>

document.querySelector("a"); //<a href="">Google</a>

document.querySelector("li.item");

document.querySelector("#list a"); //<a href="">Google</a>

document.querySelectorAll("#list .item");//NodeList(3) [li.item, li.item, li.item]

function changeTitle(){
    document.querySelector("h1").style.color = red;
    document.querySelector("h1").style.fontSize = "10rem";
    document.querySelector("h1").style.padding = "30%";
    //document.querySelector("h1").style.visibility = hidden;
}

document.querySelector(".btn").style.backgroundColor = "yellow";

document.querySelector("button").classList;//DOMTokenList ["btn", value: "btn"]

document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible"); // 스위치처럼 작용함.

document.querySelector("h1").classList.add('huge');//style.css 에 있는 huge 클래스 스타일에 추가됨.

function changeH1Tag(){
    document.getElementsById("title").innerHTML = "Good Bye"; //title id 안에 있는 태그 안에 있는 태그들을 지칭 : strong 태그 등등, 태그를 넣을 수도 있다. innerHTML 이니까.
    document.getElementsById("title").textContent = "Hello"; //안에있는 텍스트를 의미
}
//어떤 특성들을 가지고 있는지 알아보기, 
document.querySelector("a").attributes;//NamedNodeMap {0: href, href: href, length: 1}
document.querySelector("a").getAttribute("href");// https://google.com
function changeLink(){
    document.querySelector("a").setAttribute("href", "www.naver.com");
}


