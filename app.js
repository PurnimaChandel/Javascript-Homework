// from data.js
var tableData = data;
//console.log(data)

// YOUR CODE HERE!
function makeHtmlTable(dataobject)
{
    var objData = dataobject;

    //get required items
    var objBody = d3.select("tbody");
    var objTable = d3.select("table");
    
    //add a row to the table
    var objRow = objBody.append("tr");

    // Log the key and value

    Object.entries(dataobject).forEach(([key, value]) => 
    {
        //console.log(`Key: ${key} and Value ${value}`);

        var objCell = objBody.append("td");
        objCell.text(value);
      });
    }
 //create the new table 
    tableData.forEach(makeHtmlTable);


// Select the filter button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //console.log(inputValue);
  //console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue)

  console.log(filteredData);
});