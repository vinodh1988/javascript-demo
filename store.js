store=[]

function add(){
    let sno=document.forms[0].sno.value;
    let name=document.forms[0].name.value;
    let city=document.forms[0].city.value;
    let person={sno:sno,name:name,city:city}
    store.push(person);
    console.log(store)
}
