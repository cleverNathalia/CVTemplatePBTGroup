$(document).ready(function () {
        $( "#matricYearValue" ).datepicker({
            changeYear: true,
            showButtonPanel: true,
            dateFormat: 'yy',
            onClose: function(dateText, inst) { 
                var year = $("#matricYearValue .ui-datepicker-year :selected").val();
                $(this).datepicker('setDate', new Date(year, 1));
            }
        });
});
$("#educationMatric").append(
    '<div class="col-lg-4 col-md-4 col-sm-12 alignLeft">' +
    '<div class="sectionHeader">' +
    '<b>' +
    'MATRIC' +
    '</b>' +
    '<br>' +
    '<input id="matricValue" class="alignLeft paddingInput inputWidth" type="text" placeholder="Where?">' +
    '<div id="matricValueDone"></div>'+
    ' </div>' +
    ' </div>' +
    '<div class="col-lg-4 col-md-4 col-sm-12 alignCenter">' +
    '<div class="sectionHeader">' +
    ' </div>' +
    '</div>' +
    '<div class="col-lg-4 col-md-4 col-sm-12 alignRight">' +
    '<div class="sectionHeader">' +
    ' <b>' +
    'YEAR' +
    '</b>' +
    ' <br>' +    
    '<input id="matricYearValue" class="alignRight paddingInput" type="text" placeholder="What year?">'+
    '<div id="matricYearValueDone"></div>'+
    '</div>' +
    '</div>'
);