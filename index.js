
var numberOfDrumButtons = document.querySelectorAll(".num").length;
var screenValue = "";
for(var i =0; i<numberOfDrumButtons; i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function(){
  var buttoninnerHTML = this.innerHTML;
  //alert(buttoninnerHTML);
  calculate(buttoninnerHTML);

});
}

document.addEventListener("keydown", function(event){
  calculate(event.key);
})

function calculate(buttoninnerHTML){
  if(buttoninnerHTML == "X")
  {
    buttoninnerHTML = "*";
    screenValue += buttoninnerHTML;
    document.getElementById("screen").value = screenValue;
  }
  else if (buttoninnerHTML == "C") {
    screenValue = "";
    document.getElementById("screen").value = screenValue;
  }
  else if (buttoninnerHTML == "=") {
    document.getElementById("screen").value = eval(screenValue);
  }
  else{
    screenValue += buttoninnerHTML;
    document.getElementById("screen").value = screenValue;
  }

}
