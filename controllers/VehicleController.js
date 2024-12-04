$(document).ready(function () {

    var recordIndex = undefined;

    loadTableVehicle()

    let vehicleCodeError = true;
    let licenseNumberError = true;
    let vehicleCategoryError = true;
    let vehicleFuelTypeError = true;
    let vehicleStatusError = true;
    let vehicleStaffError = true;
    let vehicleRemarksError = true;

    function loadTableVehicle() {
        $('#vehicle-table').empty();
        console.log("Loading table...");

        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/vehicle",
            method: "GET",
            success: function (results) {
                $('#vehicle-table').empty();
                results.forEach(function (post) {
                    var record = `<tr>
                                    <td>${post.vehicleCode}</td>     
                                    <td>${post.licensePlate}</td>
                                    <td>${post.category}</td>     
                                    <td>${post.fuelType}</td>
                                    <td>${post.status}</td>     
                                    <td>${post.staffId}</td>
                                    <td>${post.remarks}</td>
                                </tr>`;

                    $('#vehicle-table').append(record);
                });
                $('#vehicleCount').text(results.length);
            },
            error: function (error) {
                console.log(error);
                alert("An error occurred while fetching the posts.");
            }
        });
    }

    function validateVehicleCode(){
        var isValidVehicleCode = new RegExp("^V\\d{3}$");
        if ($('#vehicleCode').val() === "") {
            $("#vehicleCode").css({"border-color": "red"});
            $("#vehicleIdCheck").empty();
            $("#vehicleIdCheck").append("vehicle Code missing");
            vehicleCodeError = false;
            return false;
        } else if (!isValidVehicleCode.test($('#vehicleCode').val())) {
            $("#vehicleCode").css({"border-color": "red"});
            $("#vehicleIdCheck").empty();
            $("#vehicleIdCheck").append("Invalid vehicle Code");
            vehicleCodeError = false;
            return false;
        } else {
            $("#vehicleCode").css({"border-color": "green"});
            $("#vehicleIdCheck").empty();
            vehicleCodeError = true;
        }
    }

    function validateLicenseNumber(){
        // var isValidVehicleLicenseNumber = new RegExp("^([A-Z]{1,2})\s([A-Z]{1,3})\s([0-9]{4}(?<!0{4}))");
        if ($('#vehicleLicenseNumber').val() === "") {
            $("#vehicleLicenseNumber").css({"border-color": "red"});
            $("#vehicleLicenseNumberCheck").empty();
            $("#vehicleLicenseNumberCheck").append("vehicle Common Name missing");
            licenseNumberError = false;
            return false;
            // } else if (!isValidVehicleLicenseNumber.test($('#vehicleLicenseNumber').val())) {
            //     $("#vehicleLicenseNumber").css({"border-color": "red"});
            //     $("#vehicleLicenseNumberCheck").empty();
            //     $("#vehicleLicenseNumberCheck").append("Invalid vehicle Common Name");
            //     licenseNumberError = false;
            //     return false;
        } else {
            $("#vehicleLicenseNumber").css({"border-color": "green"});
            $("#vehicleLicenseNumberCheck").empty();
            licenseNumberError = true;
        }
    }

    function validateVehicleCategory(){
        var isValidVehicleCategory = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#vehicleCategory').val() === "") {
            $("#vehicleCategory").css({"border-color": "red"});
            $("#vehicleCategoryCheck").empty();
            $("#vehicleCategoryCheck").append("vehicle Common Name missing");
            vehicleCategoryError = false;
            return false;
        } else if (!isValidVehicleCategory.test($('#vehicleCategory').val())) {
            $("#vehicleCategory").css({"border-color": "red"});
            $("#vehicleCategoryCheck").empty();
            $("#vehicleCategoryCheck").append("Invalid vehicle Common Name");
            vehicleCategoryError = false;
            return false;
        } else {
            $("#vehicleCategory").css({"border-color": "green"});
            $("#vehicleCategoryCheck").empty();
            vehicleCategoryError = true;
        }
    }

    function validateVehicleFuelType(){
        //  var isValidVehicleFuelType = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#vehicleFuelType option:selected').text() === "") {
            $("#vehicleFuelType").css({"border-color": "red"});
            $("#vehicleFuelTypeCheck").empty();
            $("#vehicleFuelTypeCheck").append("vehicle Common Name missing");
            vehicleFuelTypeError = false;
            return false;
            // } else if (!isValidVehicleFuelType.test($('#vehicleFuelType').val())) {
            //     $("#vehicleFuelType").css({"border-color": "red"});
            //     $("#vehicleFuelTypeCheck").empty();
            //     $("#vehicleFuelTypeCheck").append("Invalid vehicle Common Name");
            //     vehicleFuelTypeError = false;
            //     return false;
        } else {
            $("#vehicleFuelType").css({"border-color": "green"});
            $("#vehicleFuelTypeCheck").empty();
            vehicleFuelTypeError = true;
        }
    }

    function validateVehicleStatus(){
        //var isValidVehicleStatus = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#vehicleStatus option:selected').text() === "") {
            $("#vehicleStatus").css({"border-color": "red"});
            $("#vehicleStatusCheck").empty();
            $("#vehicleStatusCheck").append("vehicle Common Name missing");
            vehicleStatusError = false;
            return false;
            // } else if (!isValidVehicleStatus.test($('#vehicleStatus').val())) {
            //     $("#vehicleStatus").css({"border-color": "red"});
            //     $("#vehicleStatusCheck").empty();
            //     $("#vehicleStatusCheck").append("Invalid vehicle Common Name");
            //     vehicleStatusError = false;
            //     return false;
        } else {
            $("#vehicleStatus").css({"border-color": "green"});
            $("#vehicleStatusCheck").empty();
            vehicleStatusError = true;
        }
    }

    function validateVehicleStaff(){
        // var isValidVehicleStaff = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#vehicleStaffSelectID option:selected').text() === "") {
            $("#vehicleStaffSelectID").css({"border-color": "red"});
            $("#vehicleStaffCodeCheck").empty();
            $("#vehicleStaffCodeCheck").append("vehicle Common Name missing");
            vehicleStaffError = false;
            return false;
            // } else if (!isValidVehicleStaff.test($('#vehicleStaffSelectID').val())) {
            //     $("#vehicleStaffSelectID").css({"border-color": "red"});
            //     $("#vehicleStaffCodeCheck").empty();
            //     $("#vehicleStaffCodeCheck").append("Invalid vehicle Common Name");
            //     vehicleStaffError = false;
            //     return false;
        } else {
            $("#vehicleStaffSelectID").css({"border-color": "green"});
            $("#vehicleStaffCodeCheck").empty();
            vehicleStaffError = true;
        }
    }

    function validateVehicleRemarks(){
        //   var isValidVehicleRemarks = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($('#vehicleRemarks').val() === "") {
            $("#vehicleRemarks").css({"border-color": "red"});
            $("#vehicleRemarksCheck").empty();
            $("#vehicleRemarksCheck").append("vehicle Common Name missing");
            vehicleRemarksError = false;
            return false;
            // } else if (!isValidVehicleRemarks.test($('#vehicleRemarks').val())) {
            //     $("#vehicleRemarks").css({"border-color": "red"});
            //     $("#vehicleRemarksCheck").empty();
            //     $("#vehicleRemarksCheck").append("Invalid vehicle Common Name");
            //     vehicleRemarksError = false;
            //     return false;
        } else {
            $("#vehicleRemarks").css({"border-color": "green"});
            $("#vehicleRemarksCheck").empty();
            vehicleRemarksError = true;
        }
    }

    function updateVehicleStaffIDs() {
        $("#vehicleStaffSelectID").empty();

        const defaultOption = document.createElement("option");
        defaultOption.text = "Select field ID";
        defaultOption.value = ""; // Set an empty value for the default option
        $('#vehicleStaffSelectID').append(defaultOption);

        // Fetch customer data from the server
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/staff",
            type: "GET",
            headers: { "Content-Type": "application/json" },
            success: (res) => {
                // Assuming `res` is an array of customer objects
                res.forEach(staff => {
                    const option = document.createElement("option");
                    option.value = staff.staffId; // Set value to customer ID
                    option.text = staff.staffId; // Display customer ID in dropdown
                    $('#vehicleStaffSelectID').append(option);
                });
            },
            error: (res) => {
                console.error('Error fetching staff data:', res);
            }
        });
    }

    $('#vehicleStaffSelectID').on('focus', () => {
        updateVehicleStaffIDs();
    });


    $("#vehicle-table").on('click', 'tr', function () {
        recordIndex = $(this).index();
        console.log(recordIndex);

        // Assuming your table cells (td) are in the same order as: ID, Name, Address, Phone
        let vehicleCode = $(this).find("td:eq(0)").text();
        let vehicleLicense = $(this).find("td:eq(1)").text();
        let vehicleCategory = $(this).find("td:eq(2)").text();
        let vehicleFuelType = $(this).find("td:eq(3)").text();
        let vehicleStatus = $(this).find("td:eq(4)").text();
        let vehicleStaff = $(this).find("td:eq(5)").text();
        let vehicleRemarks = $(this).find("td:eq(6)").text();

        // Setting the values in the form fields
        $("#vehicleCode").val(vehicleCode);
        $("#vehicleLicenseNumber").val(vehicleLicense);
        $("#vehicleCategory").val(vehicleCategory);
        $("#vehicleFuelType option:selected").text(vehicleFuelType)
        $("#vehicleStatus option:selected").text(vehicleStatus)
        $("#vehicleStaffSelectID option:selected").text(vehicleStaff)
        $("#vehicleRemarks").val(vehicleRemarks);

        // Debugging logs
        console.log("Vehicle Code:", vehicleCode);
        console.log("Vehicle License Number:", vehicleLicense);
        console.log("Vehicle Category:", vehicleCategory);
        console.log("Vehicle Fuel Type:", vehicleFuelType);
        console.log("Vehicle Status:", vehicleStatus);
        console.log("Vehicle Staff:", vehicleStaff);
        console.log("Vehicle Remarks:", vehicleRemarks);
    });

    $('#search-vehicle-btn').on('click', () => {
        let vehicleId = $('#vehicleCode').val();
        console.log("Searching for vehicle with ID:", vehicleId);
        updateFieldIDs();
        $.ajax({
            url: "http://localhost:4010/green-shadow/api/v1/vehicle/"+vehicleId,
            type: "GET",
            headers: {"Content-Type": "application/json"},
            success: (res) => {
                console.log(JSON.stringify(res));
                $('#vehicleLicenseNumber').val(res.licensePlate);
                $('#vehicleCategory').val(res.category);
                $('#vehicleFuelType').val(res.fuelType);
                $('#vehicleStatus').val(res.status);
                $('#vehicleStaffSelectID').val(res.staffId);
                $('#vehicleRemarks').val(res.remarks);
            },
            error: (res) => {
                console.error(res);
            }
        });
    });

    // Add a button to trigger the collection of data
    $("#add-vehicle-btn").click(function () {
        console.log("clicked");
        validateVehicleCode()
        validateLicenseNumber()
        validateVehicleCategory()
        validateVehicleFuelType()
        validateVehicleStatus()
        validateVehicleStaff()
        validateVehicleRemarks()
        if (vehicleCodeError === true && licenseNumberError === true && vehicleCategoryError === true && vehicleFuelTypeError === true && vehicleStatusError === true && vehicleStaffError === true && vehicleRemarksError === true) {
            var vehicleCode = $("#vehicleCode").val();
            var vehicleLicenseNumber = $("#vehicleLicenseNumber").val();
            var vehicleCategory = $("#vehicleCategory").val();
            var vehicleFuelType = $("#vehicleFuelType option:selected").text();
            var vehicleStatus = $("#vehicleStatus option:selected").text();
            var vehicleStaff = $("#vehicleStaffSelectID option:selected").text();
            var vehicleRemarks = $("#vehicleRemarks").val();

            $.ajax({
                url: "http://localhost:4010/green-shadow/api/v1/vehicle/"+vehicleCode,
                type: "GET",
                headers: {"Content-Type": "application/json"},
                success: (res) => {
                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        var form = new FormData();
                        form.append("vehicleCode", vehicleCode);
                        form.append("licensePlate", vehicleLicenseNumber);
                        form.append("category", vehicleCategory);
                        form.append("fuelType", vehicleFuelType);
                        form.append("status", vehicleStatus);
                        form.append("staff", vehicleStaff);
                        form.append("remarks", vehicleRemarks);

                        var settings = {
                            "url": "http://localhost:4010/green-shadow/api/v1/vehicle",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "contentType": false,
                            "data": form
                        };

                        $.ajax(settings).done(function (response) {
                            loadTableVehicle();
                            alert("Successfully added the vehicle!");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to add the vehicle!");
                            console.error("Error:", error);
                        });
                    } else{
                        console.log("vehicle already exists");
                    }
                },
                error: (res) => {
                    console.error(res);
                }
            });



            // Debug logs
            console.log("Vehicle Code:", vehicleCode);
            console.log("Vehicle License Number:", vehicleLicenseNumber);
            console.log("Vehicle Category:", vehicleCategory);
            console.log("Vehicle Fuel Type:", vehicleFuelType);
            console.log("Vehicle Status:", vehicleStatus);
            console.log("Vehicle Staff:", vehicleStaff);
            console.log("Vehicle Remarks:", vehicleRemarks);

        }
    });

    $("#delete-vehicle-btn").click(function () {
        var vehicleCode = $("#vehicleCode").val();

        if (!vehicleCode) {
            alert("Please enter a field code to delete.");
            return;
        }

        var settings = {
            "url": "http://localhost:4010/green-shadow/api/v1/vehicle/"+vehicleCode,
            "method": "DELETE",
            "timeout": 0,
        };

        $.ajax(settings)
            .done(function (response) {
                alert("vehicle deleted successfully!");
                console.log("Response Data:", response);
                // Optionally refresh the table or UI
                loadTableVehicle(); // Call your function to reload the table
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.error("Error:", textStatus, errorThrown);
                alert("Failed to delete the vehicle. Please try again.");
            });

    });

    $("#update-vehicle-btn").click(function () {
        validateVehicleCode()
        validateLicenseNumber()
        validateVehicleCategory()
        validateVehicleFuelType()
        validateVehicleStatus()
        validateVehicleStaff()
        validateVehicleRemarks()
        if (vehicleCodeError === true && licenseNumberError === true && vehicleCategoryError === true && vehicleFuelTypeError === true && vehicleStatusError === true && vehicleStaffError === true && vehicleRemarksError === true) {
            var vehicleCode = $("#vehicleCode").val();
            var vehicleLicenseNumber = $("#vehicleLicenseNumber").val();
            var vehicleCategory = $("#vehicleCategory").val();
            var vehicleFuelType = $("#vehicleFuelType option:selected").text();
            var vehicleStatus = $("#vehicleStatus option:selected").text();
            var vehicleStaff = $("#vehicleStaffSelectID option:selected").text();
            var vehicleRemarks = $("#vehicleRemarks").val();


            $.ajax({
                url: "http://localhost:4010/green-shadow/api/v1/vehicle/"+vehicleCode,
                type: "GET",
                headers: {"Content-Type": "application/json"},
                success: (res) => {

                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        alert("Vehicle does not exist");
                    } else {
                        var form = new FormData();
                        form.append("vehicleCode", vehicleCode);
                        form.append("licensePlate", vehicleLicenseNumber);
                        form.append("category", vehicleCategory);
                        form.append("fuelType", vehicleFuelType);
                        form.append("status", vehicleStatus);
                        form.append("staff", vehicleStaff);
                        form.append("remarks", vehicleRemarks);

                        var settings = {
                            "url": "http://localhost:4010/green-shadow/api/v1/vehicle",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "contentType": false,
                            "data": form
                        };

                        $.ajax(settings).done(function (response) {
                            loadTableVehicle();
                            alert("Successfully updated the vehicle!");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to update the vehicle!");
                            console.error("Error:", error);
                        });
                    }
                },
                error: (res) => {
                    console.error(res);
                }
            });
        }

    });


    $('#clear-vehicle-btn').on('click', () => {
        clearFields();
    });

    function clearFields() {
        $('#vehicleCode').val("");
        $('#vehicleLicenseNumber').val("");
        $('#vehicleCategory').val("");
        $('#vehicleFuelType option:selected').text("");
        $('#vehicleStatus option:selected').text("");
        $('#vehicleStaffSelectID option:selected').text("");
        $('#vehicleRemarks').val("");
    }

});
