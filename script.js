function compute() {
    var principal = document.getElementById("principal").value;
    if (isNaN(principal) || principal <= 0) {
      alert("Please enter a positive number");
      return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%.\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\><br\>";
  }
  
  function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
  }
  