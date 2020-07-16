$(document).ready(function () {
    $('#job-table').dataTable();
});

function GetJobs() {
    $.ajax({
        url: $('#url-get-jobs').val(),
        cache: false,
        type: 'GET',
        success: function (data) {
            $('#div-job-table').html(data);
            $('#job-table').dataTable();
        }
    });
};
    
$(document).on('click', '#btn-add-job', function (e) {
    e.preventDefault();
    $.ajax({
        url: $('#url-modal-add').val(),
        cache: false,
        type: 'GET',
        success: function (data) {
            $('#modal-job').html('');
            $('#modal-job').html(data);
            $('#modal-add-job').modal('show');
            $('#ExpiresAt').datepicker({
                autoclose: true,
                orientation: 'top',
                startDate: new Date()
            });
        },
        error: function () {
        }
    });
});

$(document).on('submit', '#frm-add-job', function (e) {
    e.preventDefault();
    var Form = $(this).serialize();
    $.ajax({
        url: $('#url-save-add').val(),
        cache: false,
        type: 'POST',
        data: Form,
        success: function (data) {
            $('#modal-add-job').modal('hide');
            GetJobs();
        },
        error: function () {

        }
    });
});