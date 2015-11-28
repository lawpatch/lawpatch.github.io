content = {
    thing: "that is it"
}

$(document).on("click", ".get-link", function(e) {
    e.preventDefault()
    var options = {
        title: "End of agreement boilerplate",
        message: "<b>End of agreement boilerplate</b><div><textarea id='copy-text' rows=2' + ' style='width:96%;padding:10px;font-size:10px;'>The parties agree to the terms and conditions in the version of the text at ' + 'link'+ ' only (not to any amendments).</textarea></div>",
    }

setTimeout(function(){

        $("#copy-text").focus().select()
}, 100)


    bootbox.dialog(options, function() {
        console.log("Alert Callback");

    });
});

