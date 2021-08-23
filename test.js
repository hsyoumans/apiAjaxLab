
var subcat = document.getElementById('subCategory').element.value;
let url = ("https://www.reddit.com/r/" + subcat + "/.json");
//let btn = document.getElementById('getCat').addEventListener('click', goGetIt());

fetch(url, {'Access-Control-Allow-Origin': '*', })
.then(response => response.json())
.then(info => {console.log(info);})

//async function goGetIt() {
//    const response = await fetch(url, {'Access-Control-Allow-Origin': '*', });
//    const info = await response.json();
//    console.log(info);
//}

