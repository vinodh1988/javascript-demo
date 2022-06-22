console.log("number of h1",document.getElementsByTagName("h1").length);

headers=document.getElementsByTagName("h1")

headers[0].style.fontFamily="Arial";
headers[1].style.color="green";
headers[2].style.backgroundColor="yellow";

function apply(){
   let lc= document.getElementById("listcolor").value;
   let lf= document.getElementById("listfont").value;
   let c= document.getElementById("continent").value;
   document.getElementsByTagName("li")[c].style.color=lc;
   document.getElementsByTagName("li")[c].style.fontFamily=lf;
}