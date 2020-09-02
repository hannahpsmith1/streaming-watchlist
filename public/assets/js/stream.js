$(function(){
    $(".show-watched").on("submit", function(event) {
        event.preventDefault ();

        var show_id = $(this).children(".show_name").val();
        console.log(show_id);
        $.ajax({
            method: "PUT",
            url: "/stream/" + show_id
        }).then(function(data){
            // location.reload();
        })

    })

    $("#watched").click(function (){
        console.log ('clicked');
    });

    // $(".watched").on("click", function(event){
    //     var id = $(this).data("id");
    //     var newWatched = $(this).data("status");

    //     var watchedStatusState = {
    //         watched: newWatched
    //     };

    //     $.ajax("/api/media/" + id, {
    //         type: "PUT",
    //         data: watchedStatusState
    //     }).then(
    //         function() {
    //             console.log ("Changed watched status to", newWatched);
    //             location.reload();
    //         }
    //     )
        
        // var newWatchedState = {
        //     unwatched: newWatched
        // };

        // $.ajax("/api/media/" +id, {
        //     type: "PUT",
        //     data: newWatchedState
        // }).then (
        //     function() {
        //         console.log("changed watched to", newWatched);
        //         location.reload();
        //     }
        // )
    })
// })