$(document).ready(function () {
    var recordIndexFields;
    loadFieldTable();

    function clearFields() {
        $('#txtFieldID').val("");
        $('#txtFieldName').val("");
        $('#txtFieldLocation').val("");
        $('#txtFieldSize').val("");
        $('#txtFieldImage1').val("");
        $('#txtFieldImage2').val("");
        $('#txtSearch-fields').val("");
    }

    function loadFieldTable() {
        $("#fields-table-tb").empty();

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/fields',
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                console.log(res);
                if (Array.isArray(res)) {
                    res.forEach(function(field) {
                        var fieldRecord = `
                        <tr>
                            <td class="f-id">${field.fieldCode}</td>
                            <td class="f-name">${field.fieldName}</td>
                            <td class="f-location">${field.fieldLocation}</td>
                            <td class="f-size">${field.size}</td>
                            <td class="f-image-1"><image src="data:image/png;base64,${field.img_01}" width="150px"></td>
                            <td class="f-image-2"><image src="data:image/png;base64,${field.img_02}" width="150px"></td>
                        </tr>`;
                        $('#fields-table-tb').append(fieldRecord);
                    });
                    let count = 0;
                    for (let i = 0; i < res.length; i++) {
                        if (res[i] != null) {
                            count++;
                        }
                    }
                } else {
                    console.log('No field data found or incorrect response format.');
                }
            },
            error: function(res) {
                console.error('Error loading field data:', res);
            }
        });
    }

    $('#fields-table-tb').on('click','tr',function () {
        recordIndexFields = $(this).index();

        var field_code = $(this).find(".f-id").text();
        var field_name = $(this).find(".f-name").text();
        var field_location = $(this).find(".f-location").text();
        var extent_size = $(this).find(".f-size").text();

        $('#txtFieldID').val(field_code);
        $('#txtFieldName').val(field_name);
        $('#txtFieldLocation').val(field_location);
        $('#txtFieldSize').val(extent_size);
    });

    $('#save-fields').on('click', () => {
        var fieldCode = $('#txtFieldID').val();
        var fieldName = $('#txtFieldName').val();
        var fieldLocation = $('#txtFieldLocation').val();
        var size = $('#txtFieldSize').val();
        var image1 = $('#txtFieldImage1').prop('files')[0];
        var image2 = $('#txtFieldImage2').prop('files')[0];

        var fieldData = new FormData();
        fieldData.append('fieldCode', fieldCode);
        fieldData.append('fieldName', fieldName);
        fieldData.append('size', size);
        fieldData.append('fieldLocation', fieldLocation);
        fieldData.append('image1', image1);
        fieldData.append('image2', image2);

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/fields',
            type: 'POST',
            data: fieldData,
            mimeType: 'multipart/form-data',
            contentType: false,
            processData: false,
            success: (res) => {
                loadFieldTable();
                console.log(res);
                console.log("field saved");
                clearFields();
            },
            error: (res) => {
                console.error(res);
            }
        });
    });

    $('#delete-fields').on('click',() => {
        var field_code = $('#txtFieldID').val();
        var fieldName = $('#txtFieldName').val();
        var fieldLocation = $('#txtFieldLocation').val();
        var fieldSize = $('#txtFieldSize').val();
        var image_01 = $('#txtFieldImage1').prop('files')[0];
        var image_02 = $('#txtFieldImage2').prop('files')[0];

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/fields/' + field_code,
            type: 'DELETE',
            success: (res) => {
                console.log(JSON.stringify(res));
                loadFieldTable();
                console.log("Field Deleted");
                clearFields();
            },
            error: (res) => {
                console.error(res);
                console.log("Field Not Deleted");
            }
        });
    });

    $('#update-fields').on('click', () => {
        var field_code = $('#txtFieldID').val();
        var fieldName = $('#txtFieldName').val();
        var fieldLocation = $('#txtFieldLocation').val();
        var fieldSize = $('#txtFieldSize').val();
        var image_01 = $('#txtFieldImage1').prop('files')[0];
        var image_02 = $('#txtFieldImage2').prop('files')[0];

        var fieldData = new FormData();
        fieldData.append('fieldCode', field_code);
        fieldData.append('fieldName', fieldName);
        fieldData.append('fieldLocation', fieldLocation);
        fieldData.append('size', fieldSize);
        fieldData.append('image1', image_01);
        fieldData.append('image2', image_02);

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/fields/' + field_code,
            type: 'PATCH',
            data: fieldData,
            mimeType: 'multipart/form-data',
            contentType: false,
            processData: false,
            success: (res) => {
                loadFieldTable();
                console.log(res);
                console.log("field updated");
                clearFields();
            },
            error: (res) => {
                console.error(res);
            }
        });
    });

    $('#search-field').on('click', function() {
        const searchQuery = $('#txtSearch-fields').val();
        searchFieldsByID(searchQuery);
    });

    function searchFieldsByID(query) {
        const field_code = query.toLowerCase();

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/fields?fieldCode=' + field_code,
            type: 'GET',
            dataType: 'json',
            success: (response) => {
                console.log('Full response:', response);
                for (let i = 0; i < response.length; i++) {
                    if (field_code === response[i].fieldCode) {
                        var field = response[i];
                        break;
                    }
                }

                if (field) {
                    console.log('Field retrieved successfully:', field);

                    $('#txtFieldID').val(field.fieldCode);
                    $('#txtFieldName').val(field.fieldName);
                    $('#txtFieldLocation').val(field.fieldLocation);
                    $('#txtFieldSize').val(field.size);
                    $('#txtSearch-fields').val("");
                } else {
                    console.error('Field not found');
                }
            },
            error: function(error) {
                console.error('Error searching field:', error);
                loadFieldTable();
            }
        });
    }

    $('#clear-fields').on('click', () => {
        clearFields();
    });
});