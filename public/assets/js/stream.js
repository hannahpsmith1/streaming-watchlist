$(".btn-primary").click(event => {
    const id = event.target.dataset.id;
    $.ajax("/api/media/" + id, {
        type: "PUT"
    }).then(() => {
        location.reload();
    });
});
