// This is the global object that the page gets a lot of information from.
content = {

    "au-boilerplate": {
        link: "https://github.com/lawpatch/au-boilerplate/blob/d5f1348ff82b3e90b96d78a5ba1225367318c42e/sensible-boilerplate.md",
        country: "Australia",
        title: "End of agreement boilerplate",
        copyText: "The parties agree to the provisions in the [sensible boilerplate](here)",
        parameterExplanation: "This patch doesn't assume the existence of any information in the provision doing the importation.  Just copy and paste!"
    },

    "au-interpretation": {
        link: "https://github.com/lawpatch/au-interpretation/blob/84139bfbd5c3580bb215acf2435f6c2a4a608aae/au-interpretation.md",
        country: "Australia",
        title: "Interpretation provisions for an agreement",
        copyText: "The parties agree to the provisions in the [interpretation provisions](here)",
        parameterExplanation: "This patch doesn't assume the existence of any information in the provision doing the importation.  Just copy and paste!"
    }
}

bootBoxFactory = function(mc) {
    var title = mc.country + ' - ' + mc.title
    var template = "{{parameterExplanation}}<br><br><div><textarea id='copy-text' rows=3 style='width:96%;padding:10px;font-size:10px;'>{{copyText}}.</textarea></div>"
    message = template.replace(/{{country}}/, mc.country).replace(/{{copyText}}/, mc.copyText).replace(/{{parameterExplanation}}/, mc.parameterExplanation)
    return {
        title: title,
        message: message
    }
}

// On load, run Mixpanel and replace all the blank table cells with content from the global object called "content".
$(document).ready(function() {
    mixpanel.track('page load')
    _.each(content, function(value, key, list) {
        var selector = '#' + key
        $(selector).replaceWith("<td><a href='" + content[key].link + "' class='read' target='_blank' name=" + key + ">Read</a> / <a href='#' name=" + key + " class='get'>Get</a>")
    })
});

// Produce the modal from the global object called "content"
$(document).on("click", ".get", function(e) {
    e.preventDefault()
    var moduleName = e.target.name
    var options = bootBoxFactory(content[moduleName])
    bootbox.dialog(options)

});
