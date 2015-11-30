bootBoxFactory = function(mc) {
    var title = mc.country + ' - ' + mc.title
    var template = "{{parameterExplanation}}<br><br><p><b>Example</p></b><div class='clause-card'>{{markRendered}}</div><div><p><b>Raw Text (Markdown)</b></p><textarea id='copy-text' rows=5 style='width:96%;padding:10px;font-size:14px;'>{{copyText}}</textarea></div>"
    message = template.replace(/{{country}}/, mc.country).replace(/{{copyText}}/g, mc.copyText).replace(/{{parameterExplanation}}/, mc.parameterExplanation).replace(/{{markRendered}}/, marked(mc.copyText)).replace(/{{url}}/g, mc.link)
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
    $("a").attr("target", "_blank");
});

// Produce the modal from the global object called "content"
$(document).on("click", ".get", function(e) {
    e.preventDefault()
    var moduleName = e.target.name
    var options = bootBoxFactory(content[moduleName])
    bootbox.dialog(options)
    $("#copy-text").focus().select()
    $("a").attr("target", "_blank");
});
