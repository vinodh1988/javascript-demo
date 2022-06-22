//store=[]

code="";
function add(){
    let sno=document.forms[0].sno.value;
    let name=document.forms[0].name.value;
    let city=document.forms[0].city.value;
    let person={sno:sno,name:name,city:city}
    code+="<tr>";
    code+="<td>"+sno+"</td>";
    code+="<td>"+name+"</td>";
    code+="<td>"+city+"</td>";
    code+="</tr>";

    console.log(code);
    document.getElementById("tdata").innerHTML = code;
}
