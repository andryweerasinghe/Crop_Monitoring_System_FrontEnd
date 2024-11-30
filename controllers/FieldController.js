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
    function validateImage02(){
        const image2 = $("#inputGroupFile02").prop('files')[0];
        if (!image2) {
            $("#inputGroupFile02").css({"border-color": "red"});
            $("#fieldImage02Check").empty();
            $("#fieldImage02Check").append("Field Image missing");
            image2Error = false;
            return false;
        } else {
            $("#inputGroupFile02").css({"border-color": "green"});
            $("#fieldImage02Check").empty();
            image2Error = true;
        }
    }
    $("#field-table").on('click', 'tr', function () {
        recordIndex = $(this).index();
        console.log(recordIndex);

        // Assuming your table cells (td) are in the same order as: ID, Name, Address, Phone
        let fieldId = $(this).find("td:eq(0)").text();  // first cell for field ID
        let fieldName = $(this).find("td:eq(1)").text();  // second cell for field Name
        let fieldLocation = $(this).find("td:eq(2)").text();  // third cell for field Address
        let fieldExtent = $(this).find("td:eq(3)").text();  // fourth cell for field Phone

        // Setting the values in the form fields
        $("#fieldCode").val(fieldId);
        $("#fieldName").val(fieldName);
        $("#fieldLocation").val(fieldLocation);
        $("#fieldExtent").val(fieldExtent);

        // Debugging logs
        console.log(fieldId);
        console.log(fieldName);
        console.log(fieldLocation);
        console.log(fieldExtent);
    });
    $('#search-field-btn').on('click', () => {
        let fieldId = $('#fieldCode').val();
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/fields/"+fieldId,
            type: "GET",
            headers: {"Content-Type": "application/json"},
            success: (res) => {
                console.log(JSON.stringify(res));
                $('#fieldName').val(res.fieldName);
                $('#fieldLocation').val(res.location);
                $('#fieldSize').val(res.extent);
            },
            error: (res) => {
                console.error(res);
            }
        });
    });
    // Add a button to trigger the collection of data
    $("#add-field-btn").click(function () {
        validateCode()
        validateName()
        validateLocation()
        validateSize()
        validateImage01()
        validateImage02()
        if (codeError === true && nameError === true && locationError === true && sizeError === true && image1Error === true && image2Error === true) {

            var fieldCode = $("#fieldCode").val();
            var fieldName = $("#fieldName").val();
            var fieldLocation = $("#fieldLocation").val();
            var fieldSize = $("#fieldSize").val();

            const image1 = $("#inputGroupFile01").prop('files')[0];
            const image2 = $("#inputGroupFile02").prop('files')[0];

            $.ajax({
                url: "http://localhost:4010/green-shadow/api/v1/fields/"+fieldCode,
                type: "GET",
                headers: {"Content-Type": "application/json"},
                success: (res) => {

                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        var form = new FormData();
                        form.append("fieldCode", fieldCode);
                        form.append("fieldName", fieldName);
                        form.append("location", fieldLocation);
                        form.append("extent", fieldSize);

                        if (image1) {
                            form.append("fieldImage1", image1, image1.name);
                        }
                        if (image2) {
                            form.append("fieldImage2", image2, image2.name);
                        }

                        var settings = {
                            "url": "http://localhost:4010/green-shadow/api/v1/fields",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "contentType": false,
                            "data": form
                        };
                        $.ajax(settings).done(function (response) {
                            loadTableField();
                            alert("Successfully added the field!");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to add the field!");
                            console.error("Error:", error);
                        });
                    } else {
                        alert("Field code already exists");
                    }
                },
                error: (res) => {
                    console.error(res);
                }
            });

            // Debug logs
            console.log("Field Code:", fieldCode);
            console.log("Field Name:", fieldName);
            console.log("Location:", fieldLocation);
            console.log("Extent Size:", fieldSize);
            console.log("Image 1:", image1 ? image1.name : "No file selected");
            console.log("Image 2:", image2 ? image2.name : "No file selected");
        }
    });
    $("#delete-field-btn").click(function () {
        var fieldCode = $("#fieldCode").val();

        if (!fieldCode) {
            alert("Please enter a field code to delete.");
            return;
        }

        var settings = {
            "url": "http://localhost:4010/green-shadow/api/v1/fields/F002",
            "method": "DELETE",
            "timeout": 0,
        };

        $.ajax(settings)
            .done(function (response) {
                alert("Field deleted successfully!");
                console.log("Response Data:", response);
                // Optionally refresh the table or UI
                loadTableField(); // Call your function to reload the table
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.error("Error:", textStatus, errorThrown);
                alert("Failed to delete the field. Please try again.");
            });

    });
});