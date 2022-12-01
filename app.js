var inp = document.getElementById("inp");

function abc(a){
    console.log(a);
    inp.Value += a;
}
function clearInp(){
    inp.Value = "";
}
 function calculate(){
    var a = eval(inp.Value);
    inp.Value = a;
 }