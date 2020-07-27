function li(){
    var ul = document.getElementById("li")

    var input = document.getElementById("input")
   

  
      if (input.value == ""){
       alert("Please Enter input" )
       
   }
   else{
   var txt = document.createTextNode(input.value )
     var list = document.createElement('li')
     var d = document.createElement("div")
     d.appendChild(list)
    list.appendChild(txt)
    list.setAttribute("class" , "list")
    d.setAttribute("class" , "divdiv")
    

        var editbtn = document.createElement("button")
    var edittxt = document.createTextNode(" edit ")
    editbtn.appendChild(edittxt)
    list.appendChild (editbtn)
    editbtn.setAttribute ("onclick" , "editli(this)")
    editbtn.setAttribute("class" , "edit")

    var btn = document.createElement("button")
    var btntxt = document.createTextNode("Delete")
    btn.appendChild(btntxt)
    list.appendChild (btn)
    btn.setAttribute("class" , "del1")
    btn.setAttribute ("onclick" , "deleteli(this)")



    ul.appendChild (list)
    input.value = ""
}
}

function del0(){
  var ul = document.getElementById("li")
  ul.innerHTML = ""
}

function deleteli(e){
    e.parentNode.remove()
}

function editli(e){
    var a = prompt("enter edited value")
    e.parentNode.firstChild.nodeValue = a

}