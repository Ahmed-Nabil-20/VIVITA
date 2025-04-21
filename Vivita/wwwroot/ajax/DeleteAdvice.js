function Delete(url) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Delete This Advice",
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
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            })
        }
    });
}
