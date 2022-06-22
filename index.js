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

wleft="5px dashed green";
wtop="5px dashed blue";
wright="5px dashed darkred";
wbottom="5px dashed yellow";

function colorchanger(){
 // console.log(top,left,right,bottom);
   let xtop=wleft;
   let xright=wtop;
   let  xbottom=wright;
   let  xleft=wbottom;

    let list =document.getElementById("box");
    list.style.borderLeft=xleft;
    list.style.borderRight=xright;
    list.style.borderTop=xtop;
    list.style.borderBottom=xbottom;
    //console.log(xleft,xright,xbottom,xtop)
  //  console.log(left,right,bottom,top);

    wleft=xleft;
    wright=xright;
    wbottom=xbottom;
    wtop=xtop;

    //console.log(left,right,bottom.top,"-->")
    
}
gindex=1;
function changeImage(){
    document.images[0].src="wpp"+gindex+".jpg";
    gindex++;
    if(gindex==7)
      gindex=1;
}
//colorchanger();
setInterval(colorchanger,140);
setInterval(changeImage,2000);