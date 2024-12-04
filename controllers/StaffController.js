$(document).ready(function () {

    var recordIndex = undefined;

    loadTableStaff()

    let staffCodeError = true;
    let staffFirstNameError = true;
    let staffLastNameError = true;
    let staffDesignationError = true;
    let staffGenderError = true;
    let staffJoinedDateError = true;
    let staffDOBError = true;
    let staffBuildingNoError = true;
    let staffStreetError = true;
    let staffCityError = true;
    let staffStateError = true;
    let staffPostalError = true;
    let staffMobileError = true;
    let staffEmailError = true;
    let staffRoleError = true;
    let staffFieldError = true;


    function loadTableStaff() {
        $('#staff-table').empty();
        console.log("Loading table...");

        $.ajax({
            url: "http://localhost:8081/cropMonitoringSystem/api/v1/staff",
            method: "GET",
            success: function (results) {
                $('#staff-table').empty();
                results.forEach(function (post) {
                    var record = `<tr>
                                    <td>${post.staffId}</td>     
                                    <td>${post.firstName}</td>
                                    <td>${post.lastName}</td>     
                                    <td>${post.designation}</td>
                                    <td>${post.gender}</td>     
                                    <td>${post.joinedDate}</td>
                                    <td>${post.dob}</td>
                                    <td>${post.addressLine1}</td>
                                    <td>${post.addressLine2}</td>
                                    <td>${post.addressLine3}</td>
                                    <td>${post.addressLine4}</td>
                                    <td>${post.addressLine5}</td>
                                    <td>${post.contactNo}</td>
                                    <td>${post.email}</td>
                                    <td>${post.role}</td>
                                    <td>${post.fieldCode}</td>
                                </tr>`;

                    $('#staff-table').append(record);
                });
                $('#staffCount').text(results.length);
            },
            error: function (error) {
                console.log(error);
                alert("An error occurred while fetching the posts.");
            }
        });
    }

    function validateStaffCode() {
        var isValidStaffCode = new RegExp("^S\\d{3}$");
        if ($("#staffCode").val() === "") {
            $("#staffCode").css({ "border-color": "red" });
            $("#staffIdCheck").empty();
            $("#staffIdCheck").append("staff Code missing");
            staffCodeError = false;
            return false;
        } else if (!isValidStaffCode.test($("#staffCode").val())) {
            $("#staffCode").css({ "border-color": "red" });
            $("#staffIdCheck").empty();
            $("#staffIdCheck").append("Invalid staff Code");
            staffCodeError = false;
            return false;
        } else {
            $("#staffCode").css({ "border-color": "green" });
            $("#staffIdCheck").empty();
            staffCodeError = true;
        }
    }

    function validateStaffFirstName() {
        var isValidStaffFirstName = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffFirstName").val() === "") {
            $("#staffFirstName").css({ "border-color": "red" });
            $("#staffFirstNameCheck").empty();
            $("#staffFirstNameCheck").append("Staff First Name missing");
            staffFirstNameError = false;
            return false;
        } else if (!isValidStaffFirstName.test($("#staffFirstName").val())) {
            $("#staffFirstName").css({ "border-color": "red" });
            $("#staffFirstNameCheck").empty();
            $("#staffFirstNameCheck").append("Invalid Staff First Name");
            staffFirstNameError = false;
            return false;
        } else {
            $("#staffFirstName").css({ "border-color": "green" });
            $("#staffFirstNameCheck").empty();
            staffFirstNameError = true;
        }
    }

    function validateStaffLastName() {
        var isValidStaffLastName = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffLastName").val() === "") {
            $("#staffLastName").css({ "border-color": "red" });
            $("#staffLastNameCheck").empty();
            $("#staffLastNameCheck").append("Staff Last Name missing");
            staffLastNameError = false;
            return false;
        } else if (!isValidStaffLastName.test($("#staffLastName").val())) {
            $("#staffLastName").css({ "border-color": "red" });
            $("#staffLastNameCheck").empty();
            $("#staffLastNameCheck").append("Invalid Staff Last Name");
            staffLastNameError = false;
            return false;
        } else {
            $("#staffLastName").css({ "border-color": "green" });
            $("#staffLastNameCheck").empty();
            staffLastNameError = true;
        }
    }

    function validateStaffDesignation() {
        var isValidStaffDesignation = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffDesignation").val() === "") {
            $("#staffDesignation").css({ "border-color": "red" });
            $("#staffDesignationCheck").empty();
            $("#staffDesignationCheck").append("Staff Designation missing");
            staffDesignationError = false;
            return false;
        } else if (!isValidStaffDesignation.test($("#staffDesignation").val())) {
            $("#staffDesignation").css({ "border-color": "red" });
            $("#staffDesignationCheck").empty();
            $("#staffDesignationCheck").append("Invalid Staff Designation");
            staffDesignationError = false;
            return false;
        } else {
            $("#staffDesignation").css({ "border-color": "green" });
            $("#staffDesignationCheck").empty();
            staffDesignationError = true;
        }
    }

    function validateStaffGender() {
        var isValidStaffGender = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffGender").val() === "") {
            $("#staffGender").css({ "border-color": "red" });
            $("#staffGenderCheck").empty();
            $("#staffGenderCheck").append("Staff gender missing");
            staffGenderError = false;
            return false;
        } else if (!isValidStaffGender.test($("#staffGender").val())) {
            $("#staffGender").css({ "border-color": "red" });
            $("#staffGenderCheck").empty();
            $("#staffGenderCheck").append("Invalid Staff gender");
            staffGenderError = false;
            return false;
        } else {
            $("#staffGender").css({ "border-color": "green" });
            $("#staffGenderCheck").empty();
            staffGenderError = true;
        }
    }

    function validateStaffJoinedDate() {
        var isValidStaffJoinedDate = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffJoinedDate").val() === "") {
            $("#staffJoinedDate").css({ "border-color": "red" });
            $("#staffJoinedDateCheck").empty();
            $("#staffJoinedDateCheck").append("staff joined date missing");
            staffJoinedDateError = false;
            return false;
            // } else if (!isValidStaffJoinedDate.test($("#staffJoinedDate").val())) {
            //     $("#staffJoinedDate").css({ "border-color": "red" });
            //     $("#staffJoinedDateCheck").empty();
            //     $("#staffJoinedDateCheck").append("Invalid Staff joined date");
            //     staffJoinedDateError = false;
            //     return false;
        } else {
            $("#staffJoinedDate").css({ "border-color": "green" });
            $("#staffJoinedDateCheck").empty();
            staffJoinedDateError = true;
        }
    }

    function validateStaffDOB() {
        var isValidStaffDOB = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffDOB").val() === "") {
            $("#staffDOB").css({ "border-color": "red" });
            $("#staffDOBCheck").empty();
            $("#staffDOBCheck").append("staff date of birth missing");
            staffDOBError = false;
            return false;
            // } else if (!isValidStaffDOB.test($("#staffDOB").val())) {
            //     $("#staffDOB").css({ "border-color": "red" });
            //     $("#staffDOBCheck").empty();
            //     $("#staffDOBCheck").append("Invalid Staff Date of birth");
            //     staffDOBError = false;
            //     return false;
        } else {
            $("#staffDOB").css({ "border-color": "green" });
            $("#staffDOBCheck").empty();
            staffDOBError = true;
        }
    }

    function validateStaffBuildingNo() {
        var isValidStaffBuildingNo = new RegExp("^(\d+(\/[A-Za-z])?|[A-Za-z0-9]+)$");
        if ($("#staffBuildingNo").val() === "") {
            $("#staffBuildingNo").css({ "border-color": "red" });
            $("#staffBuildingNoCheck").empty();
            $("#staffBuildingNoCheck").append("Staff Building name or number missing");
            staffBuildingNoError = false;
            return false;
            // } else if (!isValidStaffBuildingNo.test($("#staffBuildingNo").val())) {
            //     $("#staffBuildingNo").css({ "border-color": "red" });
            //     $("#staffBuildingNoCheck").empty();
            //     $("#staffBuildingNoCheck").append("Invalid Staff Buildi ng name or number");
            //     staffBuildingNoError = false;
            //     return false;
        } else {
            $("#staffBuildingNo").css({ "border-color": "green" });
            $("#staffBuildingNoCheck").empty();
            staffBuildingNoError = true;
        }
    }

    function validateStaffStreet() {
        var isValidStaffStreet = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffStreet").val() === "") {
            $("#staffStreet").css({ "border-color": "red" });
            $("#staffStreetCheck").empty();
            $("#staffStreetCheck").append("Staff Street number missing");
            staffStreetError = false;
            return false;
            // } else if (!isValidStaffStreet.test($("#staffStreet").val())) {
            //     $("#staffStreet").css({ "border-color": "red" });
            //     $("#staffStreetCheck").empty();
            //     $("#staffStreetCheck").append("Invalid Staff Street number");
            //     staffStreetError = false;
            //     return false;
        } else {
            $("#staffStreet").css({ "border-color": "green" });
            $("#staffStreetCheck").empty();
            staffStreetError = true;
        }
    }

    function validateStaffCity() {
        var isValidStaffCity = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffCity").val() === "") {
            $("#staffCity").css({ "border-color": "red" });
            $("#staffCityCheck").empty();
            $("#staffCityCheck").append("staff date of birth missing");
            staffCityError = false;
            return false;
        } else if (!isValidStaffCity.test($("#staffCity").val())) {
            $("#staffCity").css({ "border-color": "red" });
            $("#staffCityCheck").empty();
            $("#staffCityCheck").append("Invalid Staff Date of birth");
            staffCityError = false;
            return false;
        } else {
            $("#staffCity").css({ "border-color": "green" });
            $("#staffCityCheck").empty();
            staffCityError = true;
        }
    }

    function validateStaffState() {
        var isValidStaffState = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffState").val() === "") {
            $("#staffState").css({ "border-color": "red" });
            $("#staffStateCheck").empty();
            $("#staffStateCheck").append("Staff State missing");
            staffStateError = false;
            return false;
        } else if (!isValidStaffState.test($("#staffState").val())) {
            $("#staffState").css({ "border-color": "red" });
            $("#staffStateCheck").empty();
            $("#staffStateCheck").append("Invalid Staff State");
            staffStateError = false;
            return false;
        } else {
            $("#staffState").css({ "border-color": "green" });
            $("#staffStateCheck").empty();
            staffStateError = true;
        }
    }

    function validateStaffPostal() {
        var isValidStaffPostal = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffPostal").val() === "") {
            $("#staffPostal").css({ "border-color": "red" });
            $("#staffPostalCheck").empty();
            $("#staffPostalCheck").append("staff Postal missing");
            staffPostalError = false;
            return false;
        } else if (!isValidStaffPostal.test($("#staffPostal").val())) {
            $("#staffPostal").css({ "border-color": "red" });
            $("#staffPostalCheck").empty();
            $("#staffPostalCheck").append("Invalid Staff Postal");
            staffPostalError = false;
            return false;
        } else {
            $("#staffPostal").css({ "border-color": "green" });
            $("#staffPostalCheck").empty();
            staffPostalError = true;
        }
    }

    function validateStaffMobile() {
        // var isValidStaffMobile = new RegExp("^(?:7|0|(?:\+94))[0-9]{9,10}$");
        if ($("#staffMobile").val() === "") {
            $("#staffMobile").css({ "border-color": "red" });
            $("#staffMobileCheck").empty();
            $("#staffMobileCheck").append("Staff Mobile missing");
            staffMobileError = false;
            return false;
            // } else if (!isValidStaffMobile.test($("#staffMobile").val())) {
            //     $("#staffMobile").css({ "border-color": "red" });
            //     $("#staffMobileCheck").empty();
            //     $("#staffMobileCheck").append("Invalid Staff Mobile");
            //     staffMobileError = false;
            //     return false;
        } else {
            $("#staffMobile").css({ "border-color": "green" });
            $("#staffMobileCheck").empty();
            staffMobileError = true;
        }
    }

    function validateStaffEmail() {
        var isValidStaffEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
        if ($("#staffEmail").val() === "") {
            $("#staffEmail").css({ "border-color": "red" });
            $("#staffEmailCheck").empty();
            $("#staffEmailCheck").append("staff Email missing");
            staffEmailError = false;
            return false;
        } else if (!isValidStaffEmail.test($("#staffEmail").val())) {
            $("#staffEmail").css({ "border-color": "red" });
            $("#staffEmailCheck").empty();
            $("#staffEmailCheck").append("Invalid Staff Email");
            staffEmailError = false;
            return false;
        } else {
            $("#staffEmail").css({ "border-color": "green" });
            $("#staffEmailCheck").empty();
            staffEmailError = true;
        }
    }

    function validateStaffRole() {
        var isValidStaffRole = new RegExp("^[A-Za-z0-9 ]{5,50}$");
        if ($("#staffRoleSelect").val() === "") {
            $("#staffRoleSelect").css({ "border-color": "red" });
            $("#staffRoleCheck").empty();
            $("#staffRoleCheck").append("Staff Role missing");
            staffRoleError = false;
            return false;
        } else if (!isValidStaffRole.test($("#staffRoleSelect").val())) {
            $("#staffRoleSelect").css({ "border-color": "red" });
            $("#staffRoleCheck").empty();
            $("#staffRoleCheck").append("Invalid Staff Role");
            staffRoleError = false;
            return false;
        } else {
            $("#staffRole").css({ "border-color": "green" });
            $("#staffRoleCheck").empty();
            staffRoleError = true;
        }
    }

    function validateStaffField() {
        if ($("#staffFieldSelectID option:selected").text() === "") {
            $("#staffFieldSelectID").css({"border-color": "red"});
            $("#staffFieldCodeCheck").empty();
            $("#staffFieldCodeCheck").append("Field Code missing");
            console.log("staffField Code missing");
            staffFieldError = false;
            return false;
        } else {
            console.log("staffField Code present");
            $("#staffFieldSelectID").css({"border-color": "green"});
            $("#staffFieldCodeCheck").empty();
            staffFieldError = true;
        }
    }

    function updateFieldIDs() {
        $("#staffFieldSelectID").empty();

        const defaultOption = document.createElement("option");
        defaultOption.text = "Select field ID";
        defaultOption.value = ""; // Set an empty value for the default option
        $('#staffFieldSelectID').append(defaultOption);

        // Fetch customer data from the server
        $.ajax({
            url: "http://localhost:8081/cropMonitoringSystem/api/v1/fields",
            type: "GET",
            headers: { "Content-Type": "application/json" },
            success: (res) => {
                // Assuming `res` is an array of customer objects
                res.forEach(field => {
                    const option = document.createElement("option");
                    option.value = field.fieldCode; // Set value to customer ID
                    option.text = field.fieldCode; // Display customer ID in dropdown
                    $('#staffFieldSelectID').append(option);
                });
            },
            error: (res) => {
                console.error('Error fetching field data:', res);
            }
        });
    }

    $('#staffFieldSelectID').on('focus', () => {
        updateFieldIDs();
    });


    $("#staff-table").on('click', 'tr', function () {
        recordIndex = $(this).index();
        console.log(recordIndex);

        // Assuming your table cells (td) are in the same order as: ID, Name, Address, Phone
        let staffCode = $(this).find("td:eq(0)").text();
        let staffFirstName = $(this).find("td:eq(1)").text();
        let staffLastName = $(this).find("td:eq(2)").text();
        let staffDesignation = $(this).find("td:eq(3)").text();
        let staffGenderSelect = $(this).find("td:eq(4)").text();
        let staffJoinedDate = $(this).find("td:eq(5)").text();
        let staffDOB = $(this).find("td:eq(6)").text();
        let staffBuildingNo = $(this).find("td:eq(7)").text();
        let staffStreet = $(this).find("td:eq(8)").text();
        let staffCity = $(this).find("td:eq(9)").text();
        let staffState = $(this).find("td:eq(10)").text();
        let staffPostal = $(this).find("td:eq(11)").text();
        let staffMobile = $(this).find("td:eq(12)").text();
        let staffEmail = $(this).find("td:eq(13)").text();
        let staffRoleSelect = $(this).find("td:eq(14)").text();
        let staffFieldSelectID = $(this).find("td:eq(15)").text();

        // Setting the values in the form fields
        $("#staffCode").val(staffCode);
        $("#staffFirstName").val(staffFirstName);
        $("#staffLastName").val(staffLastName);
        $("#staffDesignation").val(staffDesignation);
        $("#staffGenderSelect").val(staffGenderSelect);
        $("#staffJoinedDate").val(staffJoinedDate);
        $("#staffDOB").val(staffDOB);
        $("#staffBuildingNo").val(staffBuildingNo);
        $("#staffStreet").val(staffStreet);
        $("#staffCity").val(staffCity);
        $("#staffState").val(staffState);
        $("#staffPostal").val(staffPostal);
        $("#staffMobile").val(staffMobile);
        $("#staffEmail").val(staffEmail);
        $("#staffRoleSelect").val(staffRoleSelect);
        $("#staffFieldSelectID").val(staffFieldSelectID);


        // Debugging logs
        console.log("Staff Code:", staffCode);
        console.log("Staff First Name:", staffFirstName);
        console.log("Staff Last Name:", staffLastName);
        console.log("Staff Designation:", staffDesignation);
        console.log("Staff Gender Select", staffGenderSelect);
        console.log("Staff Joined Date:", staffJoinedDate);
        console.log("Staff DOB:", staffDOB);
        console.log("Staff Building No:", staffBuildingNo);
        console.log("Staff Street:", staffStreet);
        console.log("Staff City:", staffCity);
        console.log("Staff State:", staffState);
        console.log("Staff Postal:", staffPostal);
        console.log("Staff Mobile:", staffMobile);
        console.log("Staff Email:", staffEmail);
        console.log("Staff Role Select:", staffRoleSelect);
        console.log("Staff Field Select ID:", staffFieldSelectID);
    });

    $('#search-staff-btn').on('click', () => {
        let staffId = $('#staffCode').val();
        console.log("Searching for staff with ID:", staffId);
        $.ajax({
            url: "http://localhost:8081/cropMonitoringSystem/api/v1/staff/" + staffId,
            type: "GET",
            headers: { "Content-Type": "application/json" },
            success: (res) => {
                console.log(JSON.stringify(res));
                $("#staffCode").val(res.staffId);
                $("#staffFirstName").val(res.firstName);
                $("#staffLastName").val(res.lastName);
                $("#staffDesignation").val(res.designation);
                $("#staffGenderSelect").val(res.gender);
                $("#staffJoinedDate").val(res.joinedDate);
                $("#staffDOB").val(res.dob);
                $("#staffBuildingNo").val(res.addressLine1);
                $("#staffStreet").val(res.addressLine2);
                $("#staffCity").val(res.addressLine3);
                $("#staffState").val(res.addressLine4);
                $("#staffPostal").val(res.addressLine5);
                $("#staffMobile").val(res.contactNo);
                $("#staffEmail").val(res.email);
                $("#staffRoleSelect").val(res.role);
                $("#staffFieldSelectID").val(res.fieldCode);

            },
            error: (res) => {
                console.error(res);
            }
        });
    });

    // Add a button to trigger the collection of data
    $("#add-staff-btn").click(function () {
        validateStaffCode()
        validateStaffFirstName()
        validateStaffLastName()
        validateStaffDesignation()
        validateStaffGender()
        validateStaffJoinedDate()
        validateStaffDOB()
        validateStaffBuildingNo()
        validateStaffStreet()
        validateStaffCity()
        validateStaffState()
        validateStaffPostal()
        validateStaffMobile()
        validateStaffEmail()
        validateStaffRole()
        validateStaffField()
        if (staffCodeError === true && staffFirstNameError === true && staffLastNameError === true && staffDesignationError === true && staffGenderError === true && staffJoinedDateError === true && staffDOBError === true && staffBuildingNoError === true && staffStreetError === true && staffCityError === true && staffStateError === true && staffPostalError === true && staffMobileError === true && staffEmailError === true && staffRoleError === true && staffFieldError === true) {
            var staffCode = $("#staffCode").val();
            var staffFirstName = $("#staffFirstName").val();
            var staffLastName = $("#staffLastName").val();
            var staffDesignation = $("#staffDesignation").val();
            var staffGender = $("#staffGenderSelect option:selected").text();
            var staffJoinedDate = $("#staffJoinedDate").val();
            var staffDOB = $("#staffDOB").val();
            var staffBuildingNo = $("#staffBuildingNo").val();
            var staffStreet = $("#staffStreet").val();
            var staffCity = $("#staffCity").val();
            var staffState = $("#staffState").val();
            var staffPostal = $("#staffPostal").val();
            var staffMobile = $("#staffMobile").val();
            var staffEmail = $("#staffEmail").val();
            var staffRole = $("#staffRoleSelect option:selected").text();
            var staffField = $("#staffFieldSelectID option:selected").text();

            $.ajax({
                url: "http://localhost:8081/cropMonitoringSystem/api/v1/staff/" + staffCode,
                type: "GET",
                headers: { "Content-Type": "application/json" },
                success: (res) => {
                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        var form = new FormData();
                        form.append("staffId", staffCode);
                        form.append("firstName", staffFirstName);
                        form.append("lastName", staffLastName);
                        form.append("designation", staffDesignation);
                        form.append("gender", staffGender);
                        form.append("joinedDate", staffJoinedDate);
                        form.append("dob", staffDOB);
                        form.append("addressLine1", staffBuildingNo);
                        form.append("addressLine2", staffStreet);
                        form.append("addressLine3", staffCity);
                        form.append("addressLine4", staffState);
                        form.append("addressLine5", staffPostal);
                        form.append("contactNo", staffMobile);
                        form.append("email", staffEmail);
                        form.append("role", staffRole);
                        form.append("fieldCode", staffField);


                        var settings = {
                            "url": "http://localhost:8081/cropMonitoringSystem/api/v1/staff",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "contentType": false,
                            "data": form
                        };

                        $.ajax(settings).done(function (response) {
                            loadTableCrop();
                            alert("Successfully added the staff!");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to add the staff!");
                            console.error("Error:", error);
                        });
                    } else {
                        console.log("Staff already exists");
                    }
                },
                error: (res) => {
                    console.error(res);
                }
            });

            // Debug logs
            console.log("Staff Code:", staffCode);
            console.log("Staff First Name:", staffFirstName);
            console.log("Staff Last Name:", staffLastName);
            console.log("Staff Designation:", staffDesignation);
            console.log("Staff joined data: ", staffJoinedDate);
            console.log("Staff DOB:", staffDOB);
            console.log("Staff Building No:", staffBuildingNo);
            console.log("Staff Street:", staffStreet);
            console.log("Staff City:", staffCity);
            console.log("Staff State:", staffState);
            console.log("Staff Postal:", staffPostal);
            console.log("Staff Mobile:", staffMobile);
            console.log("Staff Email:", staffEmail);
            console.log("Staff Role:", staffRole);
            console.log("Staff Field:", staffField);

        }
    });

    $("#delete-staff-btn").click(function () {
        var staffCode = $("#staffCode").val();

        if (!staffCode) {
            alert("Please enter a field code to delete.");
            return;
        }

        var settings = {
            "url": "http://localhost:8081/cropMonitoringSystem/api/v1/staff/" + staffCode,
            "method": "DELETE",
            "timeout": 0,
        };

        $.ajax(settings)
            .done(function (response) {
                alert("staff deleted successfully!");
                console.log("Response Data:", response);
                // Optionally refresh the table or UI
                loadTableStaff(); // Call your function to reload the table
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.error("Error:", textStatus, errorThrown);
                alert("Failed to delete the staff. Please try again.");
            });

    });

    $("#update-staff-btn").click(function () {
        validateStaffCode()
        validateStaffFirstName()
        validateStaffLastName()
        validateStaffDesignation()
        validateStaffGender()
        validateStaffJoinedDate()
        validateStaffDOB()
        validateStaffBuildingNo()
        validateStaffStreet()
        validateStaffCity()
        validateStaffState()
        validateStaffPostal()
        validateStaffMobile()
        validateStaffEmail()
        validateStaffRole()
        validateStaffField()
        if (staffCodeError === true && staffFirstNameError === true && staffLastNameError === true && staffDesignationError === true && staffGenderError === true && staffJoinedDateError === true && staffDOBError === true && staffBuildingNoError === true && staffStreetError === true && staffCityError === true && staffStateError === true && staffPostalError === true && staffMobileError === true && staffEmailError === true && staffRoleError === true && staffFieldError === true) {
            var staffCode = $("#staffCode").val();
            var staffFirstName = $("#staffFirstName").val();
            var staffLastName = $("#staffLastName").val();
            var staffDesignation = $("#staffDesignation").val();
            var staffGender = $("#staffGenderSelect option:selected").text();
            var staffJoinedDate = $("#staffJoinedDate").val();
            var staffDOB = $("#staffDOB").val();
            var staffBuildingNo = $("#staffBuildingNo").val();
            var staffStreet = $("#staffStreet").val();
            var staffCity = $("#staffCity").val();
            var staffState = $("#staffState").val();
            var staffPostal = $("#staffPostal").val();
            var staffMobile = $("#staffMobile").val();
            var staffEmail = $("#staffEmail").val();
            var staffRole = $("#staffRoleSelect option:selected").text();
            var staffField = $("#staffFieldSelectID option:selected").text();


            $.ajax({
                url: "http://localhost:8081/cropMonitoringSystem/api/v1/staff/" + staffCode,
                type: "GET",
                headers: { "Content-Type": "application/json" },
                success: (res) => {

                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        alert("Staff does not exist");
                    } else {
                        var form = new FormData();
                        form.append("staffId", staffCode);
                        form.append("firstName", staffFirstName);
                        form.append("lastName", staffLastName);
                        form.append("designation", staffDesignation);
                        form.append("gender", staffGender);
                        form.append("joinedDate", staffJoinedDate);
                        form.append("dob", staffDOB);
                        form.append("addressLine1", staffBuildingNo);
                        form.append("addressLine2", staffStreet);
                        form.append("addressLine3", staffCity);
                        form.append("addressLine4", staffState);
                        form.append("addressLine5", staffPostal);
                        form.append("contactNo", staffMobile);
                        form.append("email", staffEmail);
                        form.append("role", staffRole);
                        form.append("fieldCode", staffField);


                        var settings = {
                            "url": "http://localhost:8081/cropMonitoringSystem/api/v1/staff",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "contentType": false,
                            "data": form
                        };

                        $.ajax(settings).done(function (response) {
                            loadTableStaff();
                            alert("Successfully updated the staff!");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to update the staff!");
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


    $('#clear-staff-btn').on('click', () => {
        clearFields();
    });

    function clearFields() {
        $("#staffCode").val("");
        $("#staffFirstName").val("");
        $("#staffLastName").val("");
        $("#staffDesignation").val("");
        $("#staffGenderSelect").val("");
        $("#staffJoinedDate").val("");
        $("#staffDOB").val("");
        $("#staffBuildingNo").val("");
        $("#staffStreet").val("");
        $("#staffCity").val("");
        $("#staffState").val("");
        $("#staffPostal").val("");
        $("#staffMobile").val("");
        $("#staffEmail").val("");
        $("#staffRoleSelect").val("");
        $("#staffFieldSelectID").val("");
    }

});
