// from data.js
var sightings = data;

// Select the button
var button = d3.select("#button");

button.on("click", function() {
    
    // Clear the displayed table body, if any
    var tbody = d3.select("tbody");
    tbody.html("");

    // Select the input elements and get the value
    var inputDate = (d3.select("#datetime")).property("value");    
    var inputCity = (d3.select("#city")).property("value"); 
    var inputState = (d3.select("#state")).property("value");
    var inputCountry = (d3.select("#country")).property("value");
    var inputShape = (d3.select("#shape")).property("value");

    // Filter by each search field
    
    // Filter by City (filter 1)
    if (inputCity != "") {
      inputCity = inputCity.toLowerCase();
      var filtered1 = sightings.filter(sightings => inputCity == sightings.city);
    }

    else {var filtered1 = sightings
    };
    
    //Filter by State (filter 2)
    if (inputState != "") {
      inputState = inputState.toLowerCase();
      var filtered2 = filtered1.filter(filtered1 => inputState == filtered1.state);
    }

    else {var filtered2 = filtered1
    };

    //Filter by Country (filter 3)
    if (inputCountry != "no filter") {
      var filtered3 = filtered2.filter(filtered2 => inputCountry == filtered2.country);
    }

    else {var filtered3 = filtered2
    };

    //Filter by Shape (filter 4)
    if (inputShape != "no filter") {
      var filtered4 = filtered3.filter(filtered3 => inputShape == filtered3.shape);
    }

    else {var filtered4 = filtered3
    };

    //Filter by Date (filter Final)
    
    if (inputDate !="no filter") {
      var filteredFinal = filtered4.filter(filtered4 => inputDate == filtered4.datetime);
    }

    else {var filteredFinal = filtered4
    };
    
    // Print results

    // If there are no matches, print a message
    if (filteredFinal.length == 0) {
      var row = tbody.append("tr");
      var cell = row.append("td");
      var value = "No matching sightings"
      cell.text(value)
    }
    
    // If there are matches print them into the table
    else {
      filteredFinal.forEach(function(sightingRecord) {
          var row = tbody.append("tr");
          Object.entries(sightingRecord).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
          });
      });
    };
});