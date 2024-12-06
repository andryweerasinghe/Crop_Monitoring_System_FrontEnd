$(document).ready(function () {
    var recordIndexCrops;
    loadCropTable();

    function clearFields() {
        $('#txtCropCode').val("");
        $('#txtCommonName').val("");
        $('#txtScientificName').val("");
        $('#txtCategory').val("");
        $('#txtCropImage').val("");
        $('#txtSeason').val("");
        $('#txtSearchField').val("");
        $('#txtCropFieldName').val("");
    }

    function loadCropTable() {
        $("#crops-table-tb").empty();

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/crops',
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                console.log(res);
                if (Array.isArray(res)) {
                    res.forEach(function(crop) {
                        var cropRecord = `
                        <tr>
                            <td class="c-cropCode">${crop.cropCode}</td>
                            <td class="c-commonName">${crop.commonName}</td>
                            <td class="c-scientificName">${crop.scientificName}</td>
                            <td class="c-category">${crop.category}</td>
                            <td class="c-season">${crop.season}</td>
                            <td class="c-fieldCode">${crop.fieldCode}</td>
                            <td class="c-img"><img src="data:image/png;base64,${crop.img}" width="150px"></td>
                        </tr>`;
                        $('#crops-table-tb').append(cropRecord);
                    });
                    let count = 0;
                    for (let i = 0; i < res.length; i++) {
                        if (res[i] != null) {
                            count++;
                        }
                    }
                } else {
                    console.log('No crop data found or incorrect response format.');
                }
            },
            error: function(res) {
                console.error('Error loading crop data:', res);
            }
        });
    }

    $('#btnSearchField').on('click', function() {
        const searchQuery = $('#txtSearchField').val();
        searchFieldsByID(searchQuery);
    });

    function searchFieldsByID(query) {
        const fieldCode = query.toLowerCase();

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/fields?fieldCode=' + fieldCode,
            type: 'GET',
            dataType: 'json',
            success: (response) => {
                console.log('Full response:', response);
                var field = '';
                for (let i = 0; i < response.length; i++) {
                    if (fieldCode === response[i].fieldCode) {
                        field = response[i];
                        break;
                    }
                }

                if (field) {
                    console.log('Field retrieved successfully:', field);

                    $('#txtSearchField').val(field.fieldCode);
                    $('#txtCropFieldName').val(field.field_name);
                } else {
                    console.error('Field not found');
                }
            },
            error: function(error) {
                console.error('Error searching field:', error);
            }
        });
    }

    $('#crops-table-tb').on('click','tr',function () {
        recordIndexCrops = $(this).index();

        var cropCode = $(this).find(".c-crop_code").text();
        var commonName = $(this).find(".c-common_name").text();
        var scientificName = $(this).find(".c-scientific_name").text();
        var category = $(this).find(".c-category").text();
        var season = $(this).find(".c-season").text();
        var fieldCode = $(this).find(".c-field_code").text();
        searchFieldsByID(fieldCode);

        $('#txtCropCode').val(cropCode);
        $('#txtCommonName').val(commonName);
        $('#txtScientificName').val(scientificName);
        $('#txtCategory').val(category);
        $('#txtSeason').val(season);
        $('#txtSearchField').val(fieldCode);
    });

    $('#save-crops').on('click', () => {
        var cropCode = $('#txtCropCode').val();
        var commonName = $('#txtCommonName').val();
        var scientificName = $('#txtScientificName').val();
        var category = $('#txtCategory').val();
        var img = $('#txtCropImage').prop('files')[0];
        var season = $('#txtSeason').val();
        var fieldCode = $('#txtSearchField').val();

        var cropData = new FormData();
        cropData.append('cropCode', cropCode);
        cropData.append('commonName', commonName);
        cropData.append('scientificName', scientificName);
        cropData.append('category', category);
        cropData.append('image', img);
        cropData.append('season', season);
        cropData.append('fieldCode', fieldCode);

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/crops',
            type: 'POST',
            data: cropData,
            mimeType: 'multipart/form-data',
            contentType: false,
            processData: false,
            success: (res) => {
                console.log(res);
                console.log("crop saved");
                loadCropTable();
                clearFields();
            },
            error: (res) => {
                console.error(res);
            }
        });
    });

    $('#update-crops').on('click', () => {
        var cropCode = $('#txtCropCode').val();
        var commonName = $('#txtCommonName').val();
        var scientificName = $('#txtScientificName').val();
        var category = $('#txtCategory').val();
        var img = $('#txtCropImage').prop('files')[0];
        var season = $('#txtSeason').val();
        var fieldCode = $('#txtSearchField').val();

        var cropData = new FormData();
        cropData.append('cropCode', cropCode);
        cropData.append('commonName', commonName);
        cropData.append('scientificName', scientificName);
        cropData.append('category', category);
        cropData.append('img', img);
        cropData.append('season', season);
        cropData.append('fieldCode', fieldCode);

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/crops/' + cropCode,
            type: 'PUT',
            data: cropData,
            mimeType: 'multipart/form-data',
            contentType: false,
            processData: false,
            success: (res) => {
                loadCropTable();
                console.log(res);
                console.log("crop updated");
                clearFields();
            },
            error: (res) => {
                console.error(res);
            }
        });
    });

    $('#delete-crops').on('click',() => {
        var cropCode = $('#txtCropCode').val();
        var commonName = $('#txtCommonName').val();
        var scientificName = $('#txtScientificName').val();
        var category = $('#txtCategory').val();
        var img = $('#txtCropImage').prop('files')[0];
        var season = $('#txtSeason').val();
        var fieldCode = $('#txtSearchField').val();

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/crops/' + cropCode,
            type: 'DELETE',
            success: (res) => {
                console.log(JSON.stringify(res));
                loadCropTable();
                console.log("Crop Deleted");
                clearFields();
            },
            error: (res) => {
                console.error(res);
                console.log("Crop Not Deleted");
            }
        });
    });

    $('#search-crop').on('click', function() {
        const searchQuery = $('#txtSearch-crops').val();
        searchCropsByID(searchQuery);
    });

    function searchCropsByID(query) {
        const cropCode = query.toLowerCase();

        $.ajax({
            url: 'http://localhost:8081/cropMonitoringSystem/api/v1/crops?cropCode=' + cropCode,
            type: 'GET',
            dataType: 'json',
            success: (response) => {
                console.log('Full response:', response);
                // for (let i = 0; i < response.length; i++) {
                //     if (cropCode === response[i].cropCode) {
                //         var crop = response[i];
                //         break;
                //     }
                // }

                const crop = response.find(item => item.cropCode.toLowerCase() === cropCode);

                if (crop) {
                    $('#txtCropCode').val(crop.cropCode);
                    $('#txtCommonName').val(crop.commonName);
                    $('#txtScientificName').val(crop.scientificName);
                    $('#txtCategory').val(crop.category);
                    $('#txtSeason').val(crop.season);
                    $('#txtSearchField').val(crop.fieldCode);
                    searchFieldsByID(crop.fieldCode);
                    $('#txtSearch-crops').val("");
                } else {
                    console.error('Crop not found');
                }
            },
            error: function(error) {
                console.error('Error searching crop:', error);
                loadCropTable();
            }
        });
    }

    $('#clear-crops').on('click', () => {
        clearFields();
    });
});