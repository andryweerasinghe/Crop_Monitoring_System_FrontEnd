$(document).ready(function () {
    var recordIndex = undefined;

    loadTableField()
    let codeError = true;
    let nameError = true;
    let locationError = true;
    let sizeError = true;
    let image1Error = true;
    let image2Error = true;

    function loadTableField() {
        $('#field-table').empty();
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/fields",
            method: "GET",
            success: function (results) {
                $('#Field-table').empty();
                results.forEach(function (post) {
                    var record = `<tr>
                                    <td>${post.fieldCode}</td>     
                                    <td>${post.fieldName}</td>
                                    <td>${post.location}</td>     
                                    <td>${post.extent}</td>
                                    <td>
                                        <img src="data:image/png;base64,${post.fieldImage1}" width="100px">
                                    </td>
                                    <td>
                                        <img src="data:image/png;base64,${post.fieldImage2}" width="100px">
                                    </td>
                                </tr>`;
                    $('#field-table').append(record);
                });
                $('#FieldCount').text(results.length);
            },
            error: function (error) {
                console.log(error);
                alert("An error occurred while fetching the posts.");
            }
        });
    }
    function validateCode(){
        var isValidFieldCode = new RegExp("^F\\d{3}$");
        if ($('#fieldCode').val() === "") {
            $("#fieldCode").css({"border-color": "red"});
            $("#fieldIdCheck").empty();
            $("#fieldIdCheck").append("Field Code missing");
            codeError = false;
            return false;
        } else if (!isValidFieldCode.test($('#fieldCode').val())) {
            $("#fieldCode").css({"border-color": "red"});
            $("#fieldIdCheck").empty();
            $("#fieldIdCheck").append("Invalid Field Code");
            codeError = false;
            return false;
        } else {
            $("#fieldCode").css({"border-color": "green"});
            $("#fieldIdCheck").empty();
            codeError = true;
        }
    }
});