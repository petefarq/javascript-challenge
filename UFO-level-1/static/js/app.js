// from data.js
var sightings = data;

// Select the button
var button = d3.select("#button");

button.on("click", function() {
     
    // Select the input element and get the raw HTML node
    var RawInputDate = d3.select("#datetime");

    // Get the value property of the input element
    var inputDate = RawInputDate.property("value");

    // Clear the displayed table body, if any
    var tbody = d3.select("tbody");

    tbody.html("");

    // Check to see if input is valid date format

    console.log(moment(inputDate, 'M-D-YYYY').isValid())

    // If input is not valid date format print message
    if (moment(inputDate, 'M/D/YYYY',true).isValid() == false) {
      var row = tbody.append("tr");
      var cell = row.append("td");
      var value = "Invalid: use format mm-dd-yyyy";
      cell.text(value);
    }

    //If input is a valid date format then check and filter vs. sightings data
    else {
          // Convert input to date value using Moment.js
          var dateValue = moment(inputDate, 'MM-DD-YYYY');

          console.log(dateValue.format())

          // Compares the input date value to the "datetime" of each sighting (converted to moment object)
          
          var filteredData = sightings.filter(sightings => dateValue.isSame(moment(sightings.datetime, 'M-D-YYYY'),'day') === true);

          // If there are no matches, print a message
          if (filteredData.length === 0) {
            var row = tbody.append("tr");
            var cell = row.append("td");
            var value = "No matching dates"
            cell.text(value)
          } 
          // If there are matches print them into the table
          else {
            filteredData.forEach(function(sightingRecord) {
                var row = tbody.append("tr");
                Object.entries(sightingRecord).forEach(function([key, value]) {
                  var cell = row.append("td");
                  cell.text(value);
                });
            });
          };
    };
});