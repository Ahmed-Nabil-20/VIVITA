function Delete(url) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Delete This Specialization",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete This Specialization!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'POST',
                success: function (data) {
                    if (data.success) {
                        location.reload();
                    }
                    else {
                        location.reload();
                    }
                }
            })
        }
    });
}

