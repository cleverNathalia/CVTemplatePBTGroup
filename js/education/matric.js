
$("#educationMatric").append(
    '<div class="col-lg-4 col-md-4 col-sm-12 alignLeft">' +
    '<div class="sectionHeader">' +
    '<b>' +
    'MATRIC' +
    '</b>' +
    '<br>' +
    '<form id="matricCheckForm">' +
    '<input id="matricValue" class="alignLeft paddingInput inputWidth" type="text" placeholder="Where?" required>' +
    '</form>' +
    '<div id="matricValueDone"></div>' +
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
    '<form id="matricYearCheckForm">' +
    '<input id="matricYearValue" class="alignRight paddingInput" type="number" placeholder="Year?" min="1960" max="2019" required>' +
    '</form>' +
    '<div id="matricYearValueDone"></div>' +
    '</div>' +
    '</div>'
);