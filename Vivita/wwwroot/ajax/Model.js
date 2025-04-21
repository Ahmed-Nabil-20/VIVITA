function UploadModel_1() {

    var formData = new FormData();
    formData.append('file', $('#image_model_1')[0].files[0]); // myFile is the input type="file" control

    let ajaxDiv = $(this).parent().parent().parent().find("div.ajaxbg");
    ajaxDiv.removeClass("d-none");

    $.ajax({
        url: '/Model/Upload_File',
        type: 'POST',
        data: formData,
        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            ajaxDiv.find("img").addClass("d-none");
            setTimeout(() => {
                ajaxDiv.animate({ opacity: 0 }, function () {
                    $(this).addClass("d-none").fadeTo(.1, 1);
                    $(this).find("img").removeClass("d-none");
                });
            });
            if (data.success) {
                Swal.fire({
                    title: data.message,
                    text: "Delete The User",
                    icon: 'success',
                    showCancelButton: true
                });
            }
            else {
                location.reload();
            }
        }
    })
}

function DeletePneumonia(url) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Delete This Row",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'POST',
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            })
        }
    });
}

function DeleteTuberculosis(url) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Delete This Row",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'POST',
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            })
        }
    });
}

function DeleteLungCancer(url) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Delete This Row",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'POST',
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            })
        }
    });
}

function DeletePatient(url) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Delete This Patient",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'POST',
                success: function (data) {
                    if (data.success) {
                        location.reload();
                        toastr.success(data.message);
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            })
        }
    });
}