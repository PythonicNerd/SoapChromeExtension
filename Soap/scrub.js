/*var pLen = document.getElementsByTagName("p").length;

var h1Len = document.getElementsByTagName("h1").length;

var h2Len = document.getElementsByTagName("h2").length;

var h3Len = document.getElementsByTagName("h3").length;

var h4Len = document.getElementsByTagName("h4").length;

var h5Len = document.getElementsByTagName("h5").length;

var spanLen = document.getElementsByTagName("span").length;

var liLen = document.getElementsByTagName("li").length;
var divLen = document.getElementsByTagName("div").length;
var curses = ["****", "****"];


function search(type,len){


for (var i = 0; i < len; i++) {
  
var curEle = document.getElementsByTagName(type)[i].toLowerCase();


if (curses.indexOf(curEle.innerHTML) > -1){

console.log("Bad Word Found");
    
curEle.innerHTML = "****";  
}
for(var z = 0; z < curses.length; z++){
  var curCurse = curses[z];
 
  
  if(curEle.innerHTML.includes(curCurse)){
    console.log("Substring Bad Word Found");
    curEle.innerHTML = curEle.innerHTML.replace(curCurse,"****")
    
    
  }
  
  
}

}

}


search("p",pLen);

search("h1",h1Len);

search("h2",h2Len);

search("h3",h3Len);

search("h4",h4Len);

search("h5",h5Len);

search("span",spanLen);

search("li",liLen);

search("div",divLen);
*/

