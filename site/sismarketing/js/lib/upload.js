// Ajax File upload with jQuery and XHR2
// Sean Clark http://square-bracket.com
// xhr2 file upload
// data is optional
$.fn.upload = function(remote,successFn) {
    return this.each(function() {
        if ($(this)[0].files[0]) {
            var formData = new FormData();
            formData.append($(this).attr("name"), $(this)[0].files[0]);
            // do the ajax request
            $.ajax({
                url: remote,
                type: 'POST',
                data: formData,
                dataType: "json",
                cache: false,
                contentType: false,
                processData: false,
                complete: function(res) {
                    var json;
                    try {
                        json = JSON.parse(res.responseText);
                    } catch (e) {
                        json = res.responseText;
                    }
                    if (successFn)
                        successFn(json);
                }
            });
        }
    });
};