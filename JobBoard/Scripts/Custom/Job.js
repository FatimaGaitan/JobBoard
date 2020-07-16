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
        url: $('#url-modal-addedit').val(),
        cache: false,
        type: 'GET',
        success: function (data) {
            $('#modal-job').html('');
            $('#modal-job').html(data);
            $('#modal-addedit-job').modal('show');
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
            if (data.e == 1) {
                $('#modal-addedit-job').modal('hide');
                GetJobs();
            }
        },
        error: function () {

        }
    });
});

$(document).on('click', '#btn-edit-job', function (e) {
    e.preventDefault();
    var Job_ID = $(this).data('id');
    $.ajax({
        url: $('#url-modal-addedit').val(),
        cache: false,
        type: 'GET',
        data: { Job_ID: Job_ID },
        success: function (data) {
            $('#modal-job').html('');
            $('#modal-job').html(data);
            $('#modal-addedit-job').modal('show');
            var date = $('#ExpiresAtValue').val();
            $('#ExpiresAt').datepicker({
                autoclose: true,
                orientation: 'top',
                startDate: new Date()
            });
            $('#ExpiresAt').datepicker('setDate', new Date(date));
        },
        error: function () {
        }
    });
});

$(document).on('submit', '#frm-edit-job', function (e) {
    e.preventDefault();
    var Form = $(this).serialize();
    $.ajax({
        url: $('#url-save-edit').val(),
        cache: false,
        type: 'POST',
        data: Form,
        success: function (data) {
            if (data.e == 1) {
                $('#modal-addedit-job').modal('hide');
                GetJobs();
            }
        },
        error: function () {

        }
    });
});

$(document).on('click', '#btn-delete-job', function (e) {
    e.preventDefault();
    var Job_ID = $(this).data('id');
    $.ajax({
        url: $('#url-delete-job').val(),
        cache: false,
        type: 'POST',
        data: {
            Job_ID: Job_ID
        },
        success: function (data) {
            if (data.e == 1) {
                GetJobs();
            }
        },
        error: function () {

        }
    });
});