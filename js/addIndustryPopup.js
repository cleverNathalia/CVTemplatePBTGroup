var industryOptions = [
    "Auditing",
    "Automotive",
    "CRM",
    "Call Centers",
    "Defence",
    "Education",
    "Exports",
    "Financial Services",
    "Health Care",
    "Human Resources",
    "Information Technology",
    "Logistics",
    "Long Term Insurance",
    "Manufacturing",
    "Marketing",
    "Mining",
    "Mobile Telco",
    "Networking",
    "Oil Exploration",
    "Petro Chemical",
    "Re-Insurance",
    "Retail",
    "Retail Banking",
    "Short Term Insurance",
    "Telco",
    "Tourism",
    "Transport",
    "Travel"
];

var industryTypeArr = [];
var industrySkillArr = [];
var industryYearArr = [];

$(document).ready(function () {
    $("#addIndustrySkill").hide();
    $("#addIndustrySkill").append(
        '<form id="industryForm">' +
        '<div class="row modal-content-Skill">' +
        '<div class= "col-lg-3 col-md-12 col-sm-12">' +
        'Choose an Industry : ' + '<select class="paddingInput" id="industryType" required>' +
        '</select>' +
        '</div >' +
        '<div class="col-lg-3 col-md-12 col-sm-12">' +
        'Skill :' + '<input required id="industrySkill" class=" paddingInput " type="number" placeholder="0" min="1" max="5">' +
        '</div>' +
        ' <div class="col-lg-3 col-md-12 col-sm-12 ">' +
        'Years Experience :' + '<input required id="industryYears" class=" paddingInput " type="number" placeholder="0" min="0" max="50">' +
        '</div>' +
        '<div class="col-lg-3 col-md-12 col-sm-12 alignRight">' +
        '<input type="submit" onclick="addToIndustrySkill()" class="btnAddSkill cursors btn btn-primary" value="Add Skill">' +
        '<i onclick="closeIndustrySkill()" class="fas fa-times cursors">' + '</i>' +
        '</div>' +
        '</div>' +
        '</form>'
    );
});
function addIndustrySkill() {
    $("#industryType").html("");

    var hiddenOption = document.createElement("option");
    hiddenOption.textContent = "";
    hiddenOption.setAttribute('hidden', true);
    $("#industryType").append(hiddenOption);

    for (let i = 0; i < industryOptions.length; i++) {
        const industry = industryOptions[i];
        if (industryTypeArr.indexOf(industry) == -1) {
            var optionTag = document.createElement("option");
            optionTag.textContent = industry;
            optionTag.value = industry;
            $("#industryType").append(optionTag);
        }
    }
    $("#addIndustrySkill").show();
}
function closeIndustrySkill() {
    $("#industryType").val("");
    $("#industrySkill").val("");
    $("#industryYears").val("");
    $("#addIndustrySkill").hide();
}

function addToIndustrySkill() {

    var industryType = $("#industryType").val();
    var industrySkill = $("#industrySkill").val();
    var industryYears = $("#industryYears").val();

    var industrySelect = document.getElementById("industryType");
    industrySelect.required;

    if (industryType != "" && industrySkill != "" && (industrySkill >= 1 && industrySkill <= 5) && industryYears != "" && (industryYears >= 0 && industryYears <= 50)) {

        for (let i = 0; i < industryOptions.length; i++) {

            if (industryType == industryOptions[i]) {

                industryTypeArr.push(industryType);
                industrySkillArr[industryType] = industrySkill;
                industryYearArr[industryType] = industryYears;

                refreshIndustryTable();
            }
        }
        $("#addIndustrySkill").hide();
        $("#industrySkill").val("");
        $("#industryYears").val("");
    }
}

function removeIndustryitem() {
    var itemRemoveId = event.target.id;
    var industry = itemRemoveId.substring(itemRemoveId.indexOf("@") + 1);
    industryTypeArr.splice(industryTypeArr.indexOf(industry), 1);
    refreshIndustryTable();
}

function refreshIndustryTable() {
    $("#insertIndustry").html("");
    industryTypeArr.sort();
    for (let i = 0; i < industryTypeArr.length; i++) {
        const industryType = industryTypeArr[i];
        $("#insertIndustry").append(
            '<div id="insertIndustryID' + industryType + '"' + 'class="row">' +
            '<div class="col-lg-4 col-md-4 col-sm-12 alignLeft skillTabPaddingLeft">' +
            '<div class="skillUL">' +
            '<li>' + industryType + '</li>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-4 col-md-4 col-sm-12 alignCenter">' +
            '<div class="skillUL">' +
            '<li>' + industrySkillArr[industryType] + '</li>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-4 col-md-4 col-sm-12 alignCenter skillTabPaddingRight">' +
            '<div class="skillUL">' +
            '<li>' + industryYearArr[industryType] +
            '<i id="insertIndustryID@' + industryType + '"' + 'onclick="removeIndustryitem()" class="fas fa-minus paddingSkillMinus" title="Remove Item"></i>' +
            '</li>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    }
}

