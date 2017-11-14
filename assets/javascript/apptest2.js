$(document).ready(function() {
    console.log("ready!");


    // alert("whatsup");

    var pokemonArray = ["pikachu", "squirtle", "charmander"];


    var limit = "&limit=10";

    var rating = "";


    var giphyURL = "https://api.giphy.com/v1/gifs/search?q="

    var giphyKey = "&api_key=dc6zaTOxFJmzC";

    var query = "";

    var queryURL = giphyURL + query + giphyKey + limit

    var anime = $(this).attr("data-anime");
    // console.log(pokemonArray);


    function createButtons() {
        $("#newButton").empty();
        for (i = 0; i < pokemonArray.length; i++) {
            var butt = $("<button>");

            butt.addClass(anime);
            butt.attr("data-anime", pokemonArray[i]);
            butt.text(pokemonArray[i]);
            $("#newButton").append("<button>");

        }
    }



    // $(<button>).on("click", function(){
    //  $.ajax({
    //             url: queryURL,
    //             method: "GET"
    //         })
    //         .done(function(response) {
    //             console.log(queryURL);
    // }


    // $(<gif>).on("click", function(){

    // if(){

    // }
    // else {

    // }
    // };
    createButtons();
});
