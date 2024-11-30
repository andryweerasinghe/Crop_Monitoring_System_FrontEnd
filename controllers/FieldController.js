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
    function validateName(){
        var isValidFieldName = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#fieldName').val() === "") {
            $("#fieldName").css({"border-color": "red"});
            $("#fieldNameCheck").empty();
            $("#fieldNameCheck").append("Field Name missing");
            nameError = false;
            return false;
        } else if (!isValidFieldName.test($('#fieldName').val())) {
            $("#fieldName").css({"border-color": "red"});
            $("#fieldNameCheck").empty();
            $("#fieldNameCheck").append("Invalid Field Name");
            nameError = false;
            return false;
        } else {
            $("#fieldName").css({"border-color": "green"});
            $("#fieldNameCheck").empty();
            nameError = true;
        }
    }
    function validateLocation(){
        var isValidFieldLocation = new RegExp("^[A-Za-z0-9 ,.-]{5,100}$");
        if ($('#fieldLocation').val() === "") {
            $("#fieldLocation").css({"border-color": "red"});
            $("#fieldLocationCheck").empty();
            $("#fieldLocationCheck").append("Field Location missing");
            locationError = false;
            return false;
        } else if (!isValidFieldLocation.test($('#fieldLocation').val())) {
            $("#fieldLocation").css({"border-color": "red"});
            $("#fieldLocationCheck").empty();
            $("#fieldLocationCheck").append("Invalid Field Location");
            locationError = false;
            return false;
        } else {
            $("#fieldLocation").css({"border-color": "green"});
            $("#fieldLocationCheck").empty();
            locationError = true;
        }
    }
    function validateSize(){
        var isValidFieldSize = new RegExp("^[0-9]{1,5}(\\.[0-9]{1,2})?$");
        if ($('#fieldSize').val() === "") {
            $("#fieldSize").css({"border-color": "red"});
            $("#fieldSizeCheck").empty();
            $("#fieldSizeCheck").append("Field Size missing");
            sizeError = false;
            return false;
        } else if (!isValidFieldSize.test($('#fieldSize').val())) {
            $("#fieldSize").css({"border-color": "red"});
            $("#fieldSizeCheck").empty();
            $("#fieldSizeCheck").append("Invalid Field Size");
            sizeError = false;
            return false;
        } else {
            $("#fieldSize").css({"border-color": "green"});
            $("#fieldSizeCheck").empty();
            sizeError = true;
        }
    }
});