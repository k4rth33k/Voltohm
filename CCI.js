(function() {
    "use strict";
  
    function clearContents(tag) {
      while (tag.firstChild) {
        tag.removeChild(tag.firstChild);
      }
    }
  
  
    function addValueToRow(rowTag, value) {
      var newValue = document.createElement("td");
      newValue.appendChild(document.createTextNode(value));
      rowTag.appendChild(newValue);
    }
  
  
    function formatMoney(value) {
      return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


  
    function main() {
      var inputBoxes = document.getElementsByTagName("input");
      var table = document.getElementById("results");
      var principalInput = document.getElementById("principal");
      var numberOfMonthsInput = document.getElementById("month-count");
      var annualInterestRateInput = document.getElementById("rate");
      var updateTable = function(event) {
        var rowcount = Number(numberOfMonthsInput.value);
        var principal = Number(principalInput.value);
        var annualInterestRate = Number(annualInterestRateInput.value) / 100.0;
        // var interestFactor = 1 + annualInterestRate / 12.0;//years
        var interestFactor = 1 + annualInterestRate;

        var balance = 0;
        var totalDeposit = 0;
        var monthCount = 0;
        var yearInterest = 0;
        var perviousYearInterest = 0;
        clearContents(table);
        for (var row = 1; row <= rowcount; row += 1) {
          var newRow = document.createElement("tr");
          monthCount = row; 
          totalDeposit = principal * row;
          balance = principal * (
            (Math.pow(interestFactor, monthCount + 1) - 1) /
            (interestFactor - 1) - 1);
          perviousYearInterest = yearInterest;
          yearInterest = balance - totalDeposit;
          addValueToRow(newRow, "" + row);
          addValueToRow(newRow, formatMoney(principal));
          addValueToRow(newRow, formatMoney(yearInterest - perviousYearInterest));
          addValueToRow(newRow, formatMoney(totalDeposit));
          addValueToRow(newRow, formatMoney(balance - totalDeposit));
          addValueToRow(newRow, formatMoney(balance));
          table.appendChild(newRow);
        }
      };
  
      for (var i = 0; i < inputBoxes.length; i += 1) {
        inputBoxes[i].oninput = updateTable;
      }
    }
  
    window.addEventListener("load", main, false);
  
  })();