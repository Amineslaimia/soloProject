function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function dragfrapp(ev) {
    if(ev.target.id==='cream'&& $('#div1').text().indexOf('Chocolate')!==-1){
      alert('you need to have cream with chocolate')
       
    }
    else if(ev.target.id==='cream'&& $('#div1').text().indexOf('Caramel')!==-1){
      alert('you need to have cream with caramel')
       
    }else{
      
      ev.dataTransfer.setData("text", ev.target.id);
      if($(ev.target.id==='cream'&& $('#addons').text().indexOf('Cream')===-1)){
       
        $('.detailsimg').attr('src','frappuccino with cream.jpg')
        
      }else if (ev.target.id==='cream'&& $('#div1').text().indexOf('Cream')!==-1){
        $('.detailsimg').attr('src','frappuccino.jpg')
       
      
    }else if (ev.target.id==='caramel'&& $('#div1').text().indexOf('Cream')===-1){
      $('.detailsimg').attr('src','frappuccino with cream.jpg')
     
    
  }else if (ev.target.id==='chacolate'&& $('#div1').text().indexOf('Cream')===-1){
      $('.detailsimg').attr('src','frappuccino with cream.jpg')
     
    
  }else{$('.detailsimg').attr('src','frappuccino.jpg')}
    
  }
}
  function dragblack(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    if(ev.target.id==='milk'){
      $('.detailsimg').attr('src','coffee black.jpg')
    }
  }
  
  function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    
    ev.target.appendChild(document.getElementById(data));
  }
  function dropblack(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    if(data==='milk'){
      $('.detailsimg').attr('src','coffee with milk.jpg')
    }
  }
  function dropfrapp(ev) {
    var data = ev.dataTransfer.getData("text");
    var contents =$('#div1').text();
    if(data==='chocolate'&& contents.indexOf('Cream')===-1){
      alert('you need to have cream with chocolate')
       
    }
    else if(data==='caramel'&& contents.indexOf('Cream')===-1){
      alert('you need to have cream with caramel')
       
    }else if (data==='caramel'&& contents.indexOf('Chocolate')!==-1){
      alert('You cant have caramel and chocolate')
    }
    else if((data==='chocolate'&& contents.indexOf('Caramel')!==-1)){
      alert('You cant have caramel and chocolate')
      
    }else{
      
      ev.target.appendChild(document.getElementById(data));
      if($('#div1').text().indexOf('Caramel')!==-1){
        $('.detailsimg').attr('src','frappuccino with cream and caramel.jpg')
        
      }else if($('#div1').text().indexOf('Chocolate')!==-1){
        $('.detailsimg').attr('src','frappuccino with cream and cho.jpg')
       
      }else if($('#div1').text().indexOf('Cream')!==-1){
        
        $('.detailsimg').attr('src','frappuccino with cream.jpg')
        
      }
    }
    
  }
  
  function black(){
      $("#content").html('');
      var $coffedetails=$('<div id="coffedetails"> </div>')
      var $dropelement=$('<div id="div1" ondrop="dropblack(event)" ondragover="allowDrop(event)" ondragstart="dragblack(event)"></div>')
      var $coffeimage=$('<img class="detailsimg" src="coffee black.jpg" alt="">')
      var $buttonorder=$('<button class="buttonord" onclick="on()" >Order</button>')
        $coffedetails.append($coffeimage,$dropelement,$buttonorder)
        var $addons=$('<div id="addons" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)" > </div>')
        var $milk=$('<div id="milk"  draggable="true" ondragstart="drag(event)" width="336" height="69">Milk</div>')
        var $sugar=$('<div id="drag2"  draggable="true" ondragstart="drag(event)" width="336" height="69">Sugar</div>')
        $addons.append($milk,$sugar);
        $("#content").append($coffedetails,$addons)
  }
  function frapp(){
    $("#content").html('');
    var $coffedetails=$('<div id="coffedetails"> </div>')
    var $dropelement=$('<div id="div1" ondrop="dropfrapp(event)" ondragover="allowDrop(event)" ondragstart="dragfrapp(event)"></div>')
    var $frappimage=$('<img class="detailsimg" src="frappuccino.jpg" alt="">')
    var $buttonorder=$('<button class="buttonord" onclick="onorderfrapp()" >Order</button>')
    $coffedetails.append($dropelement,$frappimage,$buttonorder)
      var $addons=$('<div id="addons" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)" > </div>')
      var $cream=$('<div id="cream"  draggable="true" ondragstart="drag(event)" width="336" height="69">Cream</div>')
      var $caramel=$('<div id="caramel"  draggable="true" ondragstart="drag(event)" width="336" height="69">Caramel</div>')
      var $Chocolate=$('<div id="chocolate"  draggable="true" ondragstart="drag(event)" width="336" height="69">Chocolate</div>')
      var $sugar=$('<div id="sugar"  draggable="true" ondragstart="drag(event)" width="336" height="69">Sugar</div>')
      $addons.append($cream,$caramel,$Chocolate,$sugar);
      $("#content").append($coffedetails,$addons)
}
function cold(){
    $("#content").html('');
    var $coffedetails=$('<div id="coffedetails"> </div>')
    var $dropelement=$('<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)"></div>')
      $coffedetails.append($dropelement)
      var $addons=$('<div id="addons" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)" > </div>')
      var $cream=$('<div id="drag1"  draggable="true" ondragstart="drag(event)" width="336" height="69">Cream</div>')
      var $foam=$('<div id="drag2"  draggable="true" ondragstart="drag(event)" width="336" height="69">Foam</div>')
      var $milk=$('<div id="drag3"  draggable="true" ondragstart="drag(event)" width="336" height="69">Milk</div>')
      var $sugar=$('<div id="drag4"  draggable="true" ondragstart="drag(event)" width="336" height="69">Sugar</div>')
      $addons.append($cream,$sugar,$foam,$milk);
      $("#content").append($coffedetails,$addons)
}
function onorderfrapp() {
  document.getElementById("overlay").style.display = "block";
  var ord0=Order('Frappuccino')
  ord0.makeorder($('#div1').text(),$('.detailsimg').attr('src'))
  temporders.push(ord0)
  var $div1 = $('#orderslist');
  $div1.html('');
 for (var i = temporders.length-1; i >= 0; i--) {
    var order = temporders[i];
    var $img= $('<img  id="ordimg"  src="'+order.img+'">')
    var $order = $('<div class ="order"></div>');
    var $name= $('<span id="ordername"> ' + order.name+'</span>');
    var $ingre= $('<span id="ordingr"> add ons : '+ order.ingredients+'</span>');
    $order.append($img[0],$name[0],$ingre[0]);
    console.log($order)
    $div1.append($order);
    
}
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function confirm(){
  document.getElementById("overlay").style.display = "none";
  temporders=[]
  alert('Your order is confirmed')
}
function cancel(){
  document.getElementById("overlay").style.display = "none";
  temporders=[]
  
}

function Order(name){
var drink={}
drink.makeorder=makeorder;
drink.name=name;
return drink;
}
var makeorder=function (ingredients,img){
  this.ingredients=ingredients;
  this.img=img;

}
var temporders=[];
