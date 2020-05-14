var myNodelist=document.getElementsByTagName("LI");
var i;
for(i=0;i<myNodelist.length;i++){
    var span=document.createElement("SPAN");
    var text=document.createTextNode("");
    span.className="close";
    span.appendChild(text);
    myNodelist[i].appendChild(s);
}
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}
var list=document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    }
},false);
function newitem(){
    var li=document.createElement("li");
    var inputvalue=document.getElementById("Task").value;
    var t=document.createTextNode(inputvalue);
    li.appendChild(t);
    if(inputvalue===''){
        alert("input should not be null");
    }
    else{
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("Task").value="";
    var span=document.createElement("S");
    var text=document.createElement("");
    span.className="close";
    span.appendChild(text);
    li.appendChild(s);
    for(i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display="none";
        }
    }
}
function removeAll(){
    var l=document.getElementsByTagName("ul");
    l[0].innerHTML="";
}