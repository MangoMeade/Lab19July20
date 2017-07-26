var x = 0;
var total = 0;
var array = Array();
var nameArray = Array();
var radios = document.getElementsByName('form');
var value;

function addTo(){
  if (document.getElementById('Coffee').checked) {
    value = document.getElementById('Coffee').value;
    name = document.getElementById('Coffee').id;
  }
  if (document.getElementById('Orange').checked){
    value = document.getElementById('Orange').value;
    name = document.getElementById('Orange').id;
  }
  if (document.getElementById('Croissant').checked) {
    value = document.getElementById('Croissant').value;
    name = document.getElementById('Croissant').id;
  }
  if (document.getElementById('Water').checked) {
    value = document.getElementById('Water').value;
    name = document.getElementById('Water').id;
  }
  add_element_to_array();
  displaySelectedItems();
  
}
function add_element_to_array()
{
 array[x] = value;
 nameArray[x] = name;
 x++;
 console.log(nameArray + " " + array);
}

function displaySelectedItems()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += nameArray[y] + " " + array[y]  + "<br/>";
     
     total += Number(array[y]);
     
   }
  
   document.getElementById("Result").innerHTML = "Name      Cost</br>" + e;
  document.getElementById("Total").innerHTML = "-------------------------------</br>Total: " + total.toFixed(2);
}