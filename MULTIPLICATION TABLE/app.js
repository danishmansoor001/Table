



function generator(){ 

var result = document.getElementById ('result');
var table = document.getElementById('table').value;


result.innerHTML='';

for( i=1; i< 11; i++){
   result.innerHTML+=table + "x" + i + "=" + table*i + "<br>";

}
}