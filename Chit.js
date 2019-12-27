// (function() {
//     "use strict";
  


  
//     // window.addEventListener("load", main, false);
  
//   })();

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
  

      function main(start, end, principal) {
        // var inputBoxes = document.getElementsByTagName("input");
        var table = document.getElementById("results");
        // var principalInput = document.getElementById("principal");
        // var numberOfMonthsInput = document.getElementById("year-count");
        var annualInterestRateInput = document.getElementById("rate");
        // var updateTable = function(event) {
          // var rowcount = Number(numberOfMonthsInput.value);
          var rowcount = (end - start) ;
          // var principal = Number(principalInput.value);
          var annualInterestRate = Number(annualInterestRateInput.value) / 100.0;
          var interestFactor = 1 + annualInterestRate ;
          var balance = 0;
          var totalDeposit = 0;
          var monthCount = 0;
          var yearInterest = 0;
          var perviousYearInterest = 0;
          console.log(start, end,annualInterestRate,balance,monthCount);

          // clearContents(table);
          for (var row = start; row <= start + rowcount; row++) {
            console.log("entered loop");
            var newRow = document.createElement("tr");
            // monthCount = row;
            monthCount++;
            totalDeposit = principal * monthCount;
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
            var newRow = document.createElement("tr");
            addValueToRow(newRow, "" + "-");
            addValueToRow(newRow, "-------");
            addValueToRow(newRow,"-------");
            addValueToRow(newRow, "-------");
            addValueToRow(newRow, "-------");
            addValueToRow(newRow,"-------");
            table.appendChild(newRow);  
            return balance;
    }

function printDiv(id) {
      var prtContent = document.getElementById(id);
      var styleContent = document.getElementById('styleTag');
      var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      var styleTagOpen = '<style>';
      var styleTagClose = '</style>';
      WinPrint.document.write(styleTagOpen);
      WinPrint.document.write(styleContent.innerHTML);
      WinPrint.document.write(styleTagClose);
      WinPrint.document.write(prtContent.innerHTML);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    }
