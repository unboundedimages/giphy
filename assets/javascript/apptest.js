////create the var and arrarys ables that will be attached to the index.html
///// I need a place for the user to input their query.
///// That query then needs to go into the array and generate a button.
///// .on(click ) that button will generate animate the gif,
///// and when clicked again , the still will load.

//========================================================================================
//first I created some variables I'd like to call upon later


var animalArray = ["cat", "dog", "bird", "frog"];
var userInput = [];
var animal = $(this).attr("data-animal");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    "naruto" + "&api_key=dc6zaTOxFJmzC&limit=10";


function populateButtons() {
    $("#animalButtons").empty();

    for (i = 0; i < animalArray.length; i++) {
        var a = $("<button>");
        a.addClass(animal);
        a.attr("data-type", animalArray[i]);
        a.text(animalArray[i]);
        $("#animalButtons").append(a);

        // $("#button").append(animalInput);

    }
}



$("#clickMe").click(function() {

    // Now for the Ajax
    var newButton = $("<button>").text("userInput");

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        // console.log(queryURL);
        // console.log(response);
        .done(function(response) {
            console.log(queryURL);


            populateButtons();


            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // Creating and storing a div tag
                var animalDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing an image tag
                var animalImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                animalImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and image tag to the animalDiv
                animalDiv.append(p);
                animalDiv.append(animalImage);

                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs-appear-here").prepend(animalDiv);
            }

        });

});
populateButtons();
// var a =
// for (i = 0; i < )


//// call the functions and put them in to action. getelementbyID.innerHtml and all that.
