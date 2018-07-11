$(document).ready(function(){//function to affect the whole page
  $("form#normalint").submit(function(event){
    event.preventDefault();//prevents the page from auto refreshing
    var num=parseInt($("input#number").val());//converts user input to intergers
    var result=romanumber(num);//what converts input to roman numerals
    $("#result").text(result);//displays on the html page
   console.log(num);//displays on console

  });
});
var romanumber=function convertToRoman(num){//links UI to business logic
  var roman="";//because we dont know what the user will input

var lookUpObj={//a container for data storage
  1000:"M",
  900:"CM",
  500:"D",
  400:"CD",
  100:"C",
  90:"XC",
  50:"L",
  10:"X",
  9:"IX",
  5:"V",
  4:"IV",
  1:"I",
};
var arraylen= Object.keys(lookUpObj).length;//Object.keys calls elements in the array.lengthcalls the whole array
while (num>0){//creates a loop that keeps executing as long as the condition is true
  for(i=arraylen-1; i>=0; i--){//sets the variable where the loop starts,loop should be greater than or equal to zero,upper limit minus one
    if(num>=Object.keys(lookUpObj)[i]){
      roman=roman + lookUpObj[Object.keys(lookUpObj)[i]];
      num=num - Object.keys(lookUpObj)[i];
      break;
    }
  }
}
return roman;//returns roman numerals for the number entered
};
