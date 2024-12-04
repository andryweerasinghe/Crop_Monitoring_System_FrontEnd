$(document).ready(function () {

    var recordIndex = undefined;

    loadTableCrop()

    let codeCropError = true;
    let commonNameError = true;
    let scientificNameError = true;
    let imageError = true;
    let categoryError = true;
    let seasonError = true;
    let codeFieldError = true;

    // function loadTableCrop() {
    //     $('#crop-table').empty();
    //     console.log("Loading table...");
    //
    //     $.ajax({
    //         url: "http://localhost:8081/cropMonitoringSystem/api/v1/crops/",
    //         method: "GET",
    //         success: function (results) {
    //             $('#crop-table').empty();
    //             results.forEach(function (post) {
    //                 var record = `<tr>
    //                                 <td>${post.code}</td>
    //                                 <td>${post.commonName}</td>
    //                                 <td>${post.scientificName}</td>
    //                                 <td>
    //                                     <img src="data:image/png;base64,${post.image}" width="100px">
    //                                 </td>
    //                                 <td>${post.category}</td>
    //                                 <td>${post.season}</td>
    //                                 <td>${post.fieldCode}</td>
    //                             </tr>`;
    //
    //                 $('#crop-table').append(record);
    //             });
    //             $('#cropCount').text(results.length);
    //         },
    //         error: function (error) {
    //             console.log(error);
    //             alert("An error occurred while fetching the posts.");
    //         }
    //     });
    // }

    function validateCropCode(){
        var isValidCropCode = new RegExp("^C\\d{3}$");
        if ($('#cropCode').val() === "") {
            $("#cropCode").css({"border-color": "red"});
            $("#cropIdCheck").empty();
            $("#cropIdCheck").append("crop Code missing");
            codeCropError = false;
            return false;
        } else if (!isValidCropCode.test($('#cropCode').val())) {
            $("#cropCode").css({"border-color": "red"});
            $("#cropIdCheck").empty();
            $("#cropIdCheck").append("Invalid crop Code");
            codeCropError = false;
            return false;
        } else {
            $("#cropCode").css({"border-color": "green"});
            $("#cropIdCheck").empty();
            codeCropError = true;
        }
    }

    function validateCommonName(){
        var isValidCropCommonName = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#cropCommonName').val() === "") {
            $("#cropCommonName").css({"border-color": "red"});
            $("#cropCommonNameCheck").empty();
            $("#cropCommonNameCheck").append("Crop Common Name missing");
            commonNameError = false;
            return false;
        } else if (!isValidCropCommonName.test($('#cropCommonName').val())) {
            $("#cropCommonName").css({"border-color": "red"});
            $("#cropCommonNameCheck").empty();
            $("#cropCommonNameCheck").append("Invalid Crop Common Name");
            commonNameError = false;
            return false;
        } else {
            $("#cropCommonName").css({"border-color": "green"});
            $("#cropCommonNameCheck").empty();
            commonNameError = true;
        }
    }

    function validateScientificName(){
        var isValidCropScientificName = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#cropScientificName').val() === "") {
            $("#cropScientificName").css({"border-color": "red"});
            $("#cropScientificNameCheck").empty();
            $("#cropScientificNameCheck").append("Crop Scientific Name missing");
            scientificNameError = false;
            return false;
        } else if (!isValidCropScientificName.test($('#cropScientificName').val())) {
            $("#cropScientificName").css({"border-color": "red"});
            $("#cropScientificNameCheck").empty();
            $("#cropScientificNameCheck").append("Invalid Crop Scientific Name");
            scientificNameError = false;
            return false;
        } else {
            $("#cropScientificName").css({"border-color": "green"});
            $("#cropScientificNameCheck").empty();
            scientificNameError = true;
        }
    }

    function validateImage(){
        const image1 = $("#cropImage").prop('files')[0];
        if (!image1) {
            $("#cropImage").css({"border-color": "red"});
            $("#cropImageCheck").empty();
            $("#cropImageCheck").append("Crop Image missing");
            imageError = false;
            return false;
        } else {
            $("#cropImage").css({"border-color": "green"});
            $("#cropImageCheck").empty();
            imageError = true;
        }
    }

    function validateCategory(){
        var isValidCropCategory = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#cropCategory').val() === "") {
            $("#cropCategory").css({"border-color": "red"});
            $("#cropCategoryCheck").empty();
            $("#cropCategoryCheck").append("Crop Scientific Name missing");
            categoryError = false;
            return false;
        } else if (!isValidCropCategory.test($('#cropCategory').val())) {
            $("#cropCategory").css({"border-color": "red"});
            $("#cropCategoryCheck").empty();
            $("#cropCategoryCheck").append("Invalid Crop Scientific Name");
            categoryError = false;
            return false;
        } else {
            $("#cropCategory").css({"border-color": "green"});
            $("#cropCategoryCheck").empty();
            categoryError = true;
        }
    }

    function validateSeason(){
        var isValidCropSeason = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#cropSeason').val() === "") {
            $("#cropSeason").css({"border-color": "red"});
            $("#cropSeasonCheck").empty();
            $("#cropSeasonCheck").append("Crop Season Name missing");
            seasonError = false;
            return false;
        } else if (!isValidCropSeason.test($('#cropSeason').val())) {
            $("#cropSeason").css({"border-color": "red"});
            $("#cropSeasonCheck").empty();
            $("#cropSeasonCheck").append("Invalid Crop Season Name");
            seasonError = false;
            return false;
        } else {
            $("#cropSeason").css({"border-color": "green"});
            $("#cropSeasonCheck").empty();
            seasonError = true;
        }
    }

    function validateFieldCode(){
        if ($('#fieldSelectID option:selected').text() === "") {
            $("#fieldSelectID").css({"border-color": "red"});
            $("#fieldCodeCheck").append("Field Code missing");
            console.log("Field Code missing");
            codeFieldError = false;
            return false;
        } else {
            console.log("Field Code present");
            $("#fieldSelectID").css({"border-color": "green"});
            $("#fieldCodeCheck").empty();
            codeFieldError = true;
        }
    }

    function updateFieldIDs() {
        $('#fieldSelectID').empty();

        const defaultOption = document.createElement("option");
        defaultOption.text = "Select field ID";
        defaultOption.value = ""; // Set an empty value for the default option
        $('#fieldSelectID').append(defaultOption);

        // Fetch customer data from the server
        $.ajax({
            url: "http://localhost:8081/cropMonitoringSystem/api/v1/fields/",
            type: "GET",
            headers: {"Content-Type": "application/json"},
            success: (res) => {
                // Assuming `res` is an array of customer objects
                res.forEach(field => {
                    const option = document.createElement("option");
                    option.value = field.fieldCode; // Set value to customer ID
                    option.text = field.fieldCode; // Display customer ID in dropdown
                    $('#fieldSelectID').append(option);
                });
            },
            error: (res) => {
                console.error('Error fetching field data:', res);
            }
        });
    }

    $('#fieldSelectID').on('focus', () => {
        updateFieldIDs();
    });


    $("#crop-table").on('click', 'tr', function () {
        recordIndex = $(this).index();
        console.log(recordIndex);

        // Assuming your table cells (td) are in the same order as: ID, Name, Address, Phone
        let cropCode = $(this).find("td:eq(0)").text();
        let cropCommonName = $(this).find("td:eq(1)").text();
        let cropScientificName = $(this).find("td:eq(2)").text();
        let cropCategory = $(this).find("td:eq(4)").text();
        let cropSeason = $(this).find("td:eq(5)").text();
        let fieldCode = $(this).find("td:eq(6)").text();

        // Setting the values in the form fields
        $("#cropCode").val(cropCode);
        $("#cropCommonName").val(cropCommonName);
        $("#cropScientificName").val(cropScientificName);
        $("#cropCategory").val(cropCategory);
        $("#cropSeason").val(cropSeason);
        $("#fieldSelectID option:selected").text(fieldCode)

        // Debugging logs
        console.log("Crop Code:", cropCode);
        console.log("Crop Common Name:", cropCommonName);
        console.log("Crop Scientific Name:", cropScientificName);
        console.log("Crop Category:", cropCategory);
        console.log("Crop Season:", cropSeason);
        console.log("Field Code:", fieldCode);

    });

    // $('#search-crop-btn').on('click', () => {
    //     let cropId = $('#cropCode').val();
    //     console.log("Searching for crop with ID:", cropId);
    //     updateFieldIDs();
    //     $.ajax({
    //         url: "http://localhost:8081/cropMonitoringSystem/api/v1/crops/"+cropId,
    //         type: "GET",
    //         headers: {"Content-Type": "application/json"},
    //         success: (res) => {
    //             console.log(JSON.stringify(res));
    //             $('#cropCode').val(res.code);
    //             $('#cropCommonName').val(res.commonName);
    //             $('#cropScientificName').val(res.scientificName);
    //             $('#cropCategory').val(res.category);
    //             $('#cropSeason').val(res.season);
    //         },
    //         error: (res) => {
    //             console.error(res);
    //         }
    //     });
    // });

    // Add a button to trigger the collection of data
    $("#add-crop-btn").click(function () {
        console.log("clicked");
        validateCropCode()
        validateCommonName()
        validateScientificName()
        validateImage()
        validateCategory()
        validateSeason()
        validateFieldCode()
        if (codeCropError === true && commonNameError === true && scientificNameError === true && imageError === true && categoryError === true && seasonError === true && codeFieldError === true) {
            var cropCode = $("#cropCode").val();
            var cropCommonName = $("#cropCommonName").val();
            var cropScientificName = $("#cropScientificName").val();
            var cropImage = $("#cropImage").prop('files')[0];
            var cropCategory = $("#cropCategory").val();
            var cropSeason = $("#cropSeason").val();
            var fieldCode = $("#fieldSelectID option:selected").text();

            $.ajax({
                url: "http://localhost:8081/cropMonitoringSystem/api/v1/crops/"+cropCode,
                type: "GET",
                headers: {"Content-Type": "application/json"},
                success: (res) => {
                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        var form = new FormData();
                        // form.append("cropCode", cropCode);
                        form.append("cropName", cropCommonName);
                        form.append("cropScientificName", cropScientificName);
                        form.append("cropCategory", cropCategory);
                        form.append("cropSeason", cropSeason);
                        form.append("fieldCode", fieldCode);

                        if (cropImage) {
                            form.append("cropImage", cropImage, cropImage.name);
                        }

                        var settings = {
                            "url": "http://localhost:8081/cropMonitoringSystem/api/v1/crops/",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "contentType": false,
                            "data": form
                        };

                        $.ajax(settings).done(function (response) {
                            loadTableCrop();
                            alert("Successfully added the crop!");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to add the crop!");
                            console.error("Error:", error);
                        });
                    } else{
                        console.log("Crop already exists");
                    }
                },
                error: (res) => {
                    console.error(res);
                }
            });



            // Debug logs
            console.log("Crop Code:", cropCode);
            console.log("Crop Common Name:", cropCommonName);
            console.log("Crop Scientific Name:", cropScientificName);
            console.log("Crop Category:", cropCategory);
            console.log("Crop Season:", cropSeason);
        }
    });

//     $("#delete-crop-btn").click(function () {
//         var cropCode = $("#cropCode").val();
//
//         if (!cropCode) {
//             alert("Please enter a field code to delete.");
//             return;
//         }
//
//         var settings = {
//             "url": "http://localhost:8081/cropMonitoringSystem/api/v1/crops/"+cropCode,
//             "method": "DELETE",
//             "timeout": 0,
//         };
//
//         $.ajax(settings)
//             .done(function (response) {
//                 alert("Crop deleted successfully!");
//                 console.log("Response Data:", response);
//                 // Optionally refresh the table or UI
//                 loadTableCrop(); // Call your function to reload the table
//             })
//             .fail(function (jqXHR, textStatus, errorThrown) {
//                 console.error("Error:", textStatus, errorThrown);
//                 alert("Failed to delete the crop. Please try again.");
//             });
//
//     });
//
//     $("#update-crop-btn").click(function () {
//         validateCropCode()
//         validateCommonName()
//         validateScientificName()
//         validateImage()
//         validateCategory()
//         validateSeason()
//         validateFieldCode()
//         if (codeCropError === true && commonNameError === true && scientificNameError === true && imageError === true && categoryError === true && seasonError === true && codeFieldError === true) {
//             var cropCode = $("#cropCode").val();
//             var cropCommonName = $("#cropCommonName").val();
//             var cropScientificName = $("#cropScientificName").val();
//             var cropImage = $("#cropImage").prop('files')[0];
//             var cropCategory = $("#cropCategory").val();
//             var cropSeason = $("#cropSeason").val();
//             var fieldCode = $("#fieldSelectID option:selected").text();
//
//
//             $.ajax({
//                 url: "http://localhost:8081/cropMonitoringSystem/api/v1/crops/"+cropCode,
//                 type: "GET",
//                 headers: {"Content-Type": "application/json"},
//                 success: (res) => {
//
//                     if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
//                         alert("Crop does not exist");
//                     } else {
//                         var form = new FormData();
//                         form.append("cropCode", cropCode);
//                         form.append("cropName", cropCommonName);
//                         form.append("cropScientificName", cropScientificName);
//                         form.append("cropCategory", cropCategory);
//                         form.append("cropSeason", cropSeason);
//                         form.append("fieldCode", fieldCode);
//
//                         if (cropImage) {
//                             form.append("cropImage", cropImage, cropImage.name);
//                         }
//
//                         var settings = {
//                             "url": "http://localhost:8081/cropMonitoringSystem/api/v1/crops/",
//                             "method": "POST",
//                             "timeout": 0,
//                             "processData": false,
//                             "mimeType": "multipart/form-data",
//                             "contentType": false,
//                             "data": form
//                         };
//
//                         $.ajax(settings).done(function (response) {
//                             loadTableCrop();
//                             alert("Successfully added the crop!");
//                             console.log("Response:", response);
//                         }).fail(function (error) {
//                             alert("Failed to add the crop!");
//                             console.error("Error:", error);
//                         });
//                     }
//                 },
//                 error: (res) => {
//                     console.error(res);
//                 }
//             });
//         }
//
//     });
//
//
//     $('#clear-crop-btn').on('click', () => {
//         clearFields();
//     });
//
//     function clearFields() {
//         $('#cropCode').val("");
//         $('#cropCommonName').val("");
//         $('#cropScientificName').val("");
//         $('#cropCategory').val("");
//         $('#cropSeason').val("");
//         $('#fieldSelectID').val("");
//     }
//
});
