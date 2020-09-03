$(".mark-watched").click(event => {
    const id = event.target.dataset.id;
    $.ajax("/api/media/" + id, {
        type: "PUT"
    }).then(() => {
        location.reload();
    });
});
$(".delete-button").click(event => {
    const id = event.target.dataset.id;
    $.ajax("/api/media/" + id, {
        type: "DELETE"
    }).then(() => {
        location.reload();
    });
});