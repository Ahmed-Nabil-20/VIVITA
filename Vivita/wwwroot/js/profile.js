
// Modal

var modal = document.getElementById("myModel");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$("#openModel").on('click', function () {
  $("#myModel").css('display', 'block');
  $("#myModel .modal-content").animate({
    top: 0
  }, 300);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  $("#myModel").css('display', 'none');
  $("#myModel .modal-content").animate({
    top: '-300px'
  }, 300);
}

//////////////////////////////////////////////////////////////

// patientModel

var patientModel = document.getElementById("patientModel");
// Get the <span> element that closes the modal

$("#openPatientModel").on('click', function () {
    $("#patientModel").css('display', 'block');
    $("#patientModel .modal-content").animate({
        top: 0
    }, 300);
});

$(".closePatient").on('click', function () {
    $("#patientModel").css('display', 'none');
    $("#patientModel .modal-content").animate({
        top: '-300px'
    }, 300);
});


//////////////////////////////////////////////////////////////

// Modal Doctor

var modal1 = document.getElementById("myModelDoctor");
var modal2 = document.getElementById("modelAdvice");

$("#openModelDoctor").on('click', function () {
  $("#myModelDoctor").css('display', 'block');
  $("#myModelDoctor .modal-content").animate({
    top: 0
  }, 300);
});

// When the user clicks on <span> (x), close the modal
$(".colse1").on('click', function () {
  $("#myModelDoctor").css('display', 'none');
  $("#myModelDoctor .modal-content").animate({
    top: '-300px'
  }, 300);
});

$("#openModelAdvice").on('click', function () {
  $("#modelAdvice").css('display', 'block');
  $("#modelAdvice .modal-content").animate({
    top: 0
  }, 300);
});

// When the user clicks on <span> (x), close the modal
$(".close3").on('click', function () {
  $("#modelAdvice").css('display', 'none');
  $("#modelAdvice .modal-content").animate({
    top: '-300px'
  }, 300);
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    $("#myModel").css('display', 'none');
    $("#myModel .modal-content").animate({
      top: '-300px'
    }, 300);
  }
  if (event.target == modal1) {
    $("#myModelDoctor").css('display', 'none');
    $("#myModelDoctor .modal-content").animate({
      top: '-300px'
    }, 300);
  }
  if (event.target == modal2) {
    $("#modelAdvice").css('display', 'none');
    $("#modelAdvice .modal-content").animate({
      top: '-300px'
    }, 300);
  }
}

//////////////////////////////////////////////////////////////////////////

// Profile

$(".account .tabs li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
//Historical For Model
$(".account .tabs .Modle").click(function () {
  $(".account .pages .page").removeClass("active");
  $(".account .pages .Modle").addClass("active");
});
//Dashboard
$(".account .tabs .dashboard").click(function () {
  $(".account .pages .page").removeClass("active");
  $(".account .pages .dashboard").addClass("active");
});
//historical For Hardware 
$(".account .tabs .hardware").click(function () {
  $(".account .pages .page").removeClass("active");
  $(".account .pages .hardware").addClass("active");
});
//historical For Lung Transplants
$(".account .tabs .lungtransplant").click(function () {
    $(".account .pages .page").removeClass("active");
    $(".account .pages .lungtransplant").addClass("active");
});


//////////////////////////////////////////////////////////////////////////

// Upload Image
$("#userPhoto").on('change', function () {
  $("#imgForm").submit();
});

// Upload Image
$("#add_image").on('change', function () {
  $("#form_add_image").submit();
});

//////////////////////////////////////////////////////////////////////////

// Veno Box (Photo)

$(document).ready(function () {
  $('.venobox').venobox({
    spinner: 'double-bounce',
    spinColor: '#586bda'
  });
});



$(".closePatientDetails").on('click', function () {
    $("#patientDetailsModal").css('display', 'none');
    $("#patientDetailsModal .modal-content").animate({
        top: '-300px'
    }, 300);
});



$(document).ready(function () {
    $(".view-patient-details").click(function () {
        var patientId = $(this).data("id");

        $.ajax({
            url: "/Profile/GetPatientDetailsById",
            type: "GET",
            data: { id: patientId },
            success: function (response) {
                if (response.success) {
                    $("#patientName").text(response.data.fullName);
                    $("#patientPhone").text(response.data.phone);
                    $("#patientAge").text(response.data.age);
                    $("#patientGender").text(response.data.gender == true ? 'Men' : 'Women');

                    // Clear previous table rows
                    $("#lungCancersTable tbody").empty();

                    // Check if LungCancers exist
                    if (response.lungCancers && response.lungCancers.length > 0) {
                        response.lungCancers.forEach(function (cancer, index) {
                            var statusText = cancer.status ? 'Positive' : 'Negative';
                            var formattedDate = new Date(cancer.creationDateTime).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            });

                            var row = `<tr>
                                <td>${index + 1}</td>
                                <td>${statusText}</td>
                                <td>${formattedDate}</td>
                            </tr>`;
                            $("#lungCancersTable tbody").append(row);
                        });
                    } else {
                        $("#lungCancersTable tbody").append("<tr><td colspan='3' class='text-center'>No records found</td></tr>");
                    }


                    // Clear previous table rows
                    $("#parkinsons tbody").empty();

                    // Check if LungCancers exist
                    if (response.parkinsons && response.parkinsons.length > 0) {
                        response.parkinsons.forEach(function (parkinson, index) {
                            var statusText = parkinson.status ? 'Positive' : 'Negative';
                            var formattedDate = new Date(parkinson.creationDateTime).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            });

                            var row = `<tr>
                                <td>
                                    ${index + 1}
                                </td>
                                <td>${statusText}</td>
                                <td>${formattedDate}</td>
                            </tr>`;
                            $("#parkinsons tbody").append(row);
                        });
                    } else {
                        $("#parkinsons tbody").append("<tr><td colspan='3' class='text-center'>No records found</td></tr>");
                    }


                    $("#patientDetailsModal").css('display', 'block');
                    $("#patientDetailsModal .modal-content").animate({
                        top: 0
                    }, 300);
                } else {
                    alert("Failed to fetch patient details.");
                }
            },
            error: function () {
                alert("An error occurred while fetching patient details.");
            }
        });
    });
});