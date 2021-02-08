window.onscroll = function() {myFunction()};

var header = document.getElementById("heading");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    
  }
}

function star(id)
{
  if(id=="star")
 {
  var x=document.getElementById("Star_Details");
  x.style.display= "block";
  bk_Details.style.display="none";
  Imagev.remove();
  }
  else if(id=="bk")
  {
  var x=document.getElementById("bk_Details");
  Star_Details.style.display="none";
  x.style.display= "block";
 
  }
  else if(id=="at")
  {
  var x=document.getElementById("bk_Details");
  Star_Details.style.display="none";
  x.style.display= "block";
  }
}

function my()
{
  var d = new Date();
        var n = d.getDay();
        if(n==0)
        {
            var x=document.getElementById("Star_Details");
            x.style.display= "block";
        }
}