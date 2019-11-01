
//daki

function Olevel(){
    var checkBox = document.getElementById("edu_rq");

    var OL= document.getElementById("OL");


    if (checkBox.checked == true){
        OL.style.display = "block";

    } else {
        OL.style.display = "none";

    }


}
function Alevel() {
    var checkBox = document.getElementById("myCheck");
    var AL=document.getElementById("AL");

    if (checkBox.checked == true){
        AL.style.display = "block";

    } else {
        AL.style.display = "none";

    }

}
document.getElementById("Add").onclick=function() {
    var form = document.getElementById("myForm");
    var input = document.createElement("input");
    input.type = "text";
    var br = document.createElement("br");
    form.appendChild(input);
    form.appendChild(br);
    form.appendChild(br);
}

//Author-Hasini Anthony
//19829265
function addmore1(){
    document.getElementById("career_paths2").style.display = "block";
    document.getElementById("more2").style.display = "block";
    document.getElementById("more1").style.display = "none";
}
function addmore2(){
    document.getElementById("career_paths3").style.display = "block";
    document.getElementById("more3").style.display = "block";
    document.getElementById("more2").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore3(){
    document.getElementById("career_paths4").style.display = "block";
    document.getElementById("more4").style.display = "block";
    document.getElementById("more3").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore4(){
    document.getElementById("career_paths5").style.display = "block";
    document.getElementById("more5").style.display = "block";
    document.getElementById("more4").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore5(){
    document.getElementById("career_paths6").style.display = "block";
    document.getElementById("more6").style.display = "block";
    document.getElementById("more5").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore6(){
    document.getElementById("career_paths7").style.display = "block";
    document.getElementById("more7").style.display = "block";
    document.getElementById("more6").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore7(){
    document.getElementById("career_paths8").style.display = "block";
    document.getElementById("more8").style.display = "block";
    document.getElementById("more7").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore8(){
    document.getElementById("career_paths9").style.display = "block";
    document.getElementById("more9").style.display = "block";
    document.getElementById("more8").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore9(){
    document.getElementById("career_paths10").style.display = "block";
    document.getElementById("more10").style.display = "block";
    document.getElementById("more9").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore10(){
    document.getElementById("career_paths11").style.display = "block";
    document.getElementById("more11").style.display = "block";
    document.getElementById("more10").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore11(){
    document.getElementById("career_paths12").style.display = "block";
    document.getElementById("more12").style.display = "block";
    document.getElementById("more11").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore12(){
    document.getElementById("career_paths13").style.display = "block";
    document.getElementById("more13").style.display = "block";
    document.getElementById("more12").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore13(){
    document.getElementById("career_paths14").style.display = "block";
    document.getElementById("more14").style.display = "block";
    document.getElementById("more13").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore14(){
    document.getElementById("career_paths15").style.display = "block";
    document.getElementById("more15").style.display = "block";
    document.getElementById("more14").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore15(){
    document.getElementById("career_paths16").style.display = "block";
    document.getElementById("more16").style.display = "block";
    document.getElementById("more15").style.display = "none";
    document.getElementById("more1").style.display = "none";
}
function addmore16(){
    document.getElementById("career_paths17").style.display = "block";
    document.getElementById("more16").style.display = "none";
    document.getElementById("more1").style.display = "none";
}


function localcheck() {
    var ex1 = document.getElementById("ex1");
    var t1 = document.getElementById("t1");
    if(ex1.checked == true){
        t1.style.display = "block";
    }else{
        t1.style.display = "none";
    }
}

function londoncheck() {
    var ex2 = document.getElementById("ex2");
    var t2 = document.getElementById("t2");
    if(ex2.checked == true){
        t2.style.display = "block";
    }else{
        t2.style.display = "none";
    }
}

var ids=["Degree","Foundation"];
var Dropdown=document.getElementById("typeDF");
Dropdown.onchange=function () {
    for (var x = 0; x < ids.length; x++) {
        document.getElementById(ids[x]).style.display = "none";
    }
    document.getElementById(this.value).style.display = "block";
}

var option = ["Specific"];
var dropdown = document.getElementById("stream");
dropdown.onchange=function () {
    for (var x = 0; x < option.length; x++) {
        document.getElementById(option[x]).style.display = "none";
    }
    document.getElementById(this.value).style.display = "block";
}

var rIndex, tableForeign, tableFoundation;
var tableLocal = document.getElementById('table_local');

function init()
{
    document.getElementById("local_form").style.display = "none";
    document.getElementById("career_form").style.display = "none";
    document.getElementById("entry_ol").style.display = "none";

    var databaseRef_foreign = firebase.database().ref('Degree_list/');
    databaseRef_foreign.on('value', loadDataFromDB, errorLoading);

    var databaseRef_f = firebase.database().ref('Foundation/');
    databaseRef_f.on('value', loadDataFromDB_f, errorLoading);
}

function ol() {
    document.getElementById("local_form").style.display = "none";
    document.getElementById("career_form").style.display = "none";
    document.getElementById("entry_ol").style.display = "block";
}

function goBack() {
    document.getElementById("local_form").style.display = "block";
    document.getElementById("career_form").style.display = "none";
    document.getElementById("entry_ol").style.display = "none";
}

function goBackFront() {
    document.getElementById("local_table").style.display = "block";
    document.getElementById("local_form").style.display = "none";
    document.getElementById("career_form").style.display = "none";
    document.getElementById("entry_ol").style.display = "none";

    reload_page();
}

function loadDataFromDB(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        //var k = document.getElementById('degree_id');
        var k = keys[i];

        var code = childData[k].degree_code;
        var typeD = childData[k].type;
        var title = childData[k].degree_title;
        var faculty = childData[k].faculty;
        var university = childData[k].university;

        tableForeign = document.getElementById('table_foreign');
        var row = tableForeign.insertRow(rIndex);

        var cellCode = row.insertCell(0);
        var cellType = row.insertCell(1);
        var cellTitle = row.insertCell(2);
        var cellFaculty = row.insertCell(3);
        var cellUni = row.insertCell(4);
        var cellDelete = row.insertCell(5);

        cellCode.appendChild(document.createTextNode(code));
        cellType.appendChild(document.createTextNode(typeD));
        cellTitle.appendChild(document.createTextNode(title));
        cellFaculty.appendChild(document.createTextNode(faculty));
        cellUni.appendChild(document.createTextNode(university));

        cellDelete.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data(this);'><i class='fas fa-eye'></i></button><button type='button' id="+k+" class='btn btn-outline-primary' onClick='delete_degree(this);'><i class='far fa-trash-alt'></i></button></tr>"
    }
}

function loadDataFromDB_f(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        var k = keys[i];

        var code = childData[k].degree_code;
        var title = childData[k].degree_title;
        var faculty = childData[k].faculty;
        var university = childData[k].university;

        tableF = document.getElementById('table_f');
        var row = tableF.insertRow(rIndex);

        var cellCode = row.insertCell(0);
        var cellTitle = row.insertCell(1);
        var cellFaculty = row.insertCell(2);
        var cellUni = row.insertCell(3);
        var cellDelete = row.insertCell(4);

        cellCode.appendChild(document.createTextNode(code));
        cellTitle.appendChild(document.createTextNode(title));
        cellFaculty.appendChild(document.createTextNode(faculty));
        cellUni.appendChild(document.createTextNode(university));

        cellDelete.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data_f(this);'><i class='fas fa-eye'></i></button><button type='button' id="+k+" class='btn btn-outline-primary' onClick='delete_course(this);'><i class='far fa-trash-alt'></i></button></tr>"
    }
}

function searchCode1() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    table = document.getElementById("table_foreign");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function view_data(obj) {
    document.getElementById('selectedId').value = obj.id;
    tempLocal_id = obj.id;

    document.getElementById("local_table").style.display = "none";
    document.getElementById("div_degree_single").style.display = "block";

    var ref = firebase.database().ref('Degree_list/'+tempLocal_id);
    ref.once('value', gotData);

    function gotData(snapshot) {
        typess = snapshot.val().type;
        degree_code = snapshot.val().degree_code;
        degree_title = snapshot.val().degree_title;
        degree_title_ab = snapshot.val().degree_title_abbreviation;
        faculty = snapshot.val().faculty;
        duration = snapshot.val().duration;
        uni = snapshot.val().university;
        co = snapshot.val().country;
        intake = snapshot.val().intake;
        locations = snapshot.val().locations;
        approvals = snapshot.val().approvals;
        descriptions = snapshot.val().description;
        str = snapshot.val().advanced_level.stream;
        com_str = snapshot.val().advanced_level.compulsary_stream;
        csub1 = snapshot.val().advanced_level.compulsary_subjects.compulsary_subject1;
        csub2 = snapshot.val().advanced_level.compulsary_subjects.compulsary_subject2;
        csub3 = snapshot.val().advanced_level.compulsary_subjects.compulsary_subject3;
        lo1 = snapshot.val().advanced_level.minimum_results.specific_local.subject1;
        lo2 = snapshot.val().advanced_level.minimum_results.specific_local.subject2;
        lo3 = snapshot.val().advanced_level.minimum_results.specific_local.subject3;
        ln1 = snapshot.val().advanced_level.minimum_results.specific_london.subject1;
        ln2 = snapshot.val().advanced_level.minimum_results.specific_london.subject2;
        ln3 = snapshot.val().advanced_level.minimum_results.specific_london.subject3;

        ref.child("ordinary_level").once('value', olSnapshot => {
            minp = olSnapshot.val().Minimum_passes_ol;
            eng = olSnapshot.val().English;
            mathe = olSnapshot.val().Mathematics;
        });


        ref.child("career_paths").once('value', careerSnapshot => {
            cr1 = careerSnapshot.val().Career1;
            cr2 = careerSnapshot.val().Career2;
            cr3 = careerSnapshot.val().Career3;
            cr4 = careerSnapshot.val().Career4;
            cr5 = careerSnapshot.val().Career5;
            cr6 = careerSnapshot.val().Career6;
            cr7 = careerSnapshot.val().Career7;
            cr8 = careerSnapshot.val().Career8;
            cr9 = careerSnapshot.val().Career9;
            cr10 = careerSnapshot.val().Career10;
        });
        degree_code2 = snapshot.val().degree_code;
    }
    document.getElementById('fid').innerHTML = tempLocal_id;
    document.getElementById('type_label').innerHTML = typess;
    document.getElementById('code_label').innerHTML = degree_code;
    document.getElementById('title_label').innerHTML = degree_title;
    document.getElementById('ab_label').innerHTML = degree_title_ab;
    document.getElementById('faculty_label').innerHTML = faculty;
    document.getElementById('duration_label').innerHTML = duration;
    document.getElementById('uni_label').innerHTML = uni;
    document.getElementById('country_label').innerHTML = co;
    document.getElementById('intake_label').innerHTML = intake;
    document.getElementById('location_label').innerHTML = locations;
    document.getElementById('app_label').innerHTML = approvals;
    document.getElementById('desc_label').innerHTML = descriptions;
    document.getElementById('min_label').innerHTML = minp;
    document.getElementById('eng_label').innerHTML = eng;
    document.getElementById('math_label').innerHTML = mathe;
    document.getElementById('st_label').innerHTML = str;
    document.getElementById('coms_label').innerHTML = com_str;
    document.getElementById('sub1_label').innerHTML = csub1;
    document.getElementById('sub2_label').innerHTML = csub2;
    document.getElementById('sub3_label').innerHTML = csub3;
    document.getElementById('s4_label').innerHTML = lo1;
    document.getElementById('s5_label').innerHTML = lo2;
    document.getElementById('s6_label').innerHTML = lo3;
    document.getElementById('s7_label').innerHTML = ln1;
    document.getElementById('s8_label').innerHTML = ln2;
    document.getElementById('s9_label').innerHTML = ln3;
    document.getElementById('c1').innerHTML = cr1;
    document.getElementById('c2').innerHTML = cr2;
    document.getElementById('c3').innerHTML = cr3;
    document.getElementById('c4').innerHTML = cr4;
    document.getElementById('c5').innerHTML = cr5;
    document.getElementById('c6').innerHTML = cr6;
    document.getElementById('c7').innerHTML = cr7;
    document.getElementById('c8').innerHTML = cr8;
    document.getElementById('c9').innerHTML = cr9;
    document.getElementById('c10').innerHTML = cr10;
    document.getElementById('code_label2').innerHTML = degree_code2;
}

function view_data_f(obj) {
    document.getElementById('selectedId').value = obj.id;
    tempLocal_id = obj.id;

    document.getElementById("local_table").style.display = "none";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("div_degree").style.display = "block";

    var ref = firebase.database().ref('Foundation/'+tempLocal_id);
    ref.once('value', gotData);

    function gotData(snapshot) {
        degree_code = snapshot.val().degree_code;
        degree_title = snapshot.val().degree_title;
        degree_title_ab = snapshot.val().degree_title_abbreviation;
        faculty = snapshot.val().faculty;
        duration = snapshot.val().duration;
        uni = snapshot.val().university;
        co = snapshot.val().country;
        intake = snapshot.val().intake;
        locations = snapshot.val().locations;
        descriptions = snapshot.val().description;

        ref.child("ordinary_level").once('value', olSnapshot => {
            minp = olSnapshot.val().Minimum_passes_ol;
            eng = olSnapshot.val().English;
            mathe = olSnapshot.val().Mathematics;
        });

    }
    document.getElementById('ffid').innerHTML = tempLocal_id;
    document.getElementById('fcode_label').innerHTML = degree_code;
    document.getElementById('ftitle_label').innerHTML = degree_title;
    document.getElementById('fab_label').innerHTML = degree_title_ab;
    document.getElementById('ffaculty_label').innerHTML = faculty;
    document.getElementById('fduration_label').innerHTML = duration;
    document.getElementById('funi_label').innerHTML = uni;
    document.getElementById('fcountry_label').innerHTML = co;
    document.getElementById('fintake_label').innerHTML = intake;
    document.getElementById('flocation_label').innerHTML = locations;
    document.getElementById('fdesc_label').innerHTML = descriptions;
    document.getElementById('fmin_label').innerHTML = minp;
    document.getElementById('feng_label').innerHTML = eng;
    document.getElementById('fmath_label').innerHTML = mathe;
}

function yess() {
    document.getElementById("local_table").style.display = "none";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("all_data").style.display = "block";
    document.getElementById("local_form").style.display = "none";
    document.getElementById("career_form").style.display = "none";

    var databaseRef_foreign = firebase.database().ref('Degree_list/');
    databaseRef_foreign.on('value', loadAll, errorLoading);
}

function yess_f() {
    document.getElementById("local_table").style.display = "none";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("all_data").style.display = "none";
    document.getElementById("local_form").style.display = "none";
    document.getElementById("career_form").style.display = "none";
    document.getElementById("all_data_f").style.display = "block";
    document.getElementById("div_degree").style.display = "none";

    var databaseRef = firebase.database().ref('Foundation/');
    databaseRef.on('value', loadAll_f, errorLoading);
}

function noo(){
    reload_page();
    document.getElementById("local_table").style.display = "block";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("all_data").style.display = "none";
    document.getElementById("local_form").style.display = "none";
    document.getElementById("career_form").style.display = "none";

}

function searchCode() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("all");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function loadAll(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        var k = keys[i];

        var typeD = childData[k].type;
        var code = childData[k].degree_code;
        var title = childData[k].degree_title;
        var ab = childData[k].degree_title_abbreviation;
        var faculty = childData[k].faculty;
        var dur = childData[k].duration;
        var university = childData[k].university;
        var country = childData[k].country;
        var intake = childData[k].intake;
        var locations = childData[k].locations;
        var approvals = childData[k].approvals;
        var descriptions = childData[k].description;
        var minimum = childData[k].ordinary_level.Minimum_passes_ol;
        var eng = childData[k].ordinary_level.English;
        var math = childData[k].ordinary_level.Mathematics;
        var st = childData[k].advanced_level.stream;

        all_display = document.getElementById('all');
        var row = all_display.insertRow(rIndex);

        var cellType = row.insertCell(0);
        var cellCode = row.insertCell(1);
        var cellTitle = row.insertCell(2);
        var cellab = row.insertCell(3);
        var cellFaculty = row.insertCell(4);
        var celldur = row.insertCell(5);
        var cellUni = row.insertCell(6);
        var cellCountry = row.insertCell(7);
        var cellIntake = row.insertCell(8);
        var cellLocation = row.insertCell(9);
        var cellAp = row.insertCell(10);
        var cellDesc = row.insertCell(11);
        var cellminp = row.insertCell(12);
        var cellengl = row.insertCell(13);
        var cellmathe = row.insertCell(14);
        var stcell = row.insertCell(15);
        var cellEdit = row.insertCell(16);

        cellType.appendChild(document.createTextNode(typeD));
        cellCode.appendChild(document.createTextNode(code));
        cellTitle.appendChild(document.createTextNode(title));
        cellab.appendChild(document.createTextNode(ab));
        cellFaculty.appendChild(document.createTextNode(faculty));
        celldur.appendChild(document.createTextNode(dur));
        cellUni.appendChild(document.createTextNode(university));
        cellCountry.appendChild(document.createTextNode(country));
        cellIntake.appendChild(document.createTextNode(intake));
        cellLocation.appendChild(document.createTextNode(locations));
        cellAp.appendChild(document.createTextNode(approvals));
        cellDesc.appendChild(document.createTextNode(descriptions));
        cellminp.appendChild(document.createTextNode(minimum));
        cellengl.appendChild(document.createTextNode(eng));
        cellmathe.appendChild(document.createTextNode(math));
        stcell.appendChild(document.createTextNode(st));

        cellEdit.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='load_form_update(this);'><i class='fas fa-edit'></i></button></tr>"
    }
}

function loadAll_f(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        var k = keys[i];

        var code = childData[k].degree_code;
        var title = childData[k].degree_title;
        var ab = childData[k].degree_title_abbreviation;
        var faculty = childData[k].faculty;
        var dur = childData[k].duration;
        var university = childData[k].university;
        var country = childData[k].country;
        var intake = childData[k].intake;
        var locations = childData[k].locations;
        var descriptions = childData[k].description;
        var minimum = childData[k].ordinary_level.Minimum_passes_ol;
        var eng = childData[k].ordinary_level.English;
        var math = childData[k].ordinary_level.Mathematics;

        all_display_f = document.getElementById('all_f');
        var row = all_display_f.insertRow(rIndex);

        var cellCode = row.insertCell(0);
        var cellTitle = row.insertCell(1);
        var cellab = row.insertCell(2);
        var cellFaculty = row.insertCell(3);
        var celldur = row.insertCell(4);
        var cellUni = row.insertCell(5);
        var cellCountry = row.insertCell(6);
        var cellIntake = row.insertCell(7);
        var cellLocation = row.insertCell(8);
        var cellDesc = row.insertCell(9);
        var cellminp = row.insertCell(10);
        var cellengl = row.insertCell(11);
        var cellmathe = row.insertCell(12);
        var cellEdit = row.insertCell(13);

        cellCode.appendChild(document.createTextNode(code));
        cellTitle.appendChild(document.createTextNode(title));
        cellab.appendChild(document.createTextNode(ab));
        cellFaculty.appendChild(document.createTextNode(faculty));
        celldur.appendChild(document.createTextNode(dur));
        cellUni.appendChild(document.createTextNode(university));
        cellCountry.appendChild(document.createTextNode(country));
        cellIntake.appendChild(document.createTextNode(intake));
        cellLocation.appendChild(document.createTextNode(locations));
        cellDesc.appendChild(document.createTextNode(descriptions));
        cellminp.appendChild(document.createTextNode(minimum));
        cellengl.appendChild(document.createTextNode(eng));
        cellmathe.appendChild(document.createTextNode(math));

        cellEdit.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='load_form_update_f(this);'><i class='fas fa-edit'></i></button></tr>"
    }
}

function load_form_update(obj){

    document.getElementById("local_table").style.display = "none";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("all_data").style.display = "none";

    //selected row to input
    allD = document.getElementById('all');
    document.getElementById("local_form").style.display = "block";
    document.getElementById("career_form").style.display = "none";

    for(var i = 1; i < allD.rows.length; i++)
    {
        allD.rows[i].onclick = function()
        {
            // get the selected row index
            //rIndex = this.rowIndex;
            document.getElementById("typeD").value = this.cells[0].innerHTML;
            document.getElementById("foreign_degree_code").value = this.cells[1].innerHTML;
            document.getElementById("foreign_degree_title").value = this.cells[2].innerHTML;
            document.getElementById("degree_ftitle_ab").value = this.cells[3].innerHTML;
            document.getElementById("fac").value = this.cells[4].innerHTML;
            document.getElementById("dur").value = this.cells[5].innerHTML;
            document.getElementById("uni").value = this.cells[6].innerHTML;
            document.getElementById("country").value = this.cells[7].innerHTML;
            var x = this.cells[8].innerHTML;
            var x1 = x.toString();
            if(x1 == "February "){
                document.getElementsByName("inta")[0].checked = true;
                document.getElementsByName("inta")[1].checked = false;
                document.getElementsByName("inta")[2].checked = false;
            }
            else if(x1 == "June "){
                document.getElementsByName("inta")[0].checked = false;
                document.getElementsByName("inta")[1].checked = true;
                document.getElementsByName("inta")[2].checked = false;
            }
            else if(x1 == "September "){
                document.getElementsByName("inta")[0].checked = false;
                document.getElementsByName("inta")[1].checked = false;
                document.getElementsByName("inta")[2].checked = true;
            }
            else if(x1 == "February September "){
                document.getElementsByName("inta")[0].checked = true;
                document.getElementsByName("inta")[1].checked = false;
                document.getElementsByName("inta")[2].checked = true;
            }
            else{
                document.getElementsByName("inta")[0].checked = true;
                document.getElementsByName("inta")[1].checked = true;
                document.getElementsByName("inta")[2].checked = true;
            }
            var y = this.cells[9].innerHTML;
            var y1 = y.toString();
            if(y1 == "Malabe "){
                document.getElementsByName("locations")[0].checked = true;
                document.getElementsByName("locations")[1].checked = false;
                document.getElementsByName("locations")[2].checked = false;
                document.getElementsByName("locations")[3].checked = false;
                document.getElementsByName("locations")[4].checked = false;
                document.getElementsByName("locations")[5].checked = false;
            }
            else if(y1 == "Colpetty "){
                document.getElementsByName("locations")[0].checked = false;
                document.getElementsByName("locations")[1].checked = true;
                document.getElementsByName("locations")[2].checked = false;
                document.getElementsByName("locations")[3].checked = false;
                document.getElementsByName("locations")[4].checked = false;
                document.getElementsByName("locations")[5].checked = false;
            }
            else if(y1 == "Malabe Colpetty "){
                document.getElementsByName("locations")[0].checked = true;
                document.getElementsByName("locations")[1].checked = true;
                document.getElementsByName("locations")[2].checked = false;
                document.getElementsByName("locations")[3].checked = false;
                document.getElementsByName("locations")[4].checked = false;
                document.getElementsByName("locations")[5].checked = false;
            }
            else if(y1 == "Malabe Matara Kandy Jaffna Kurunegala "){
                document.getElementsByName("locations")[0].checked = true;
                document.getElementsByName("locations")[1].checked = false;
                document.getElementsByName("locations")[2].checked = true;
                document.getElementsByName("locations")[3].checked = true;
                document.getElementsByName("locations")[4].checked = true;
                document.getElementsByName("locations")[5].checked = true;
            }
            else {
                document.getElementsByName("locations")[0].checked = true;
                document.getElementsByName("locations")[1].checked = true;
                document.getElementsByName("locations")[2].checked = true;
                document.getElementsByName("locations")[3].checked = true;
                document.getElementsByName("locations")[4].checked = true;
                document.getElementsByName("locations")[5].checked = true;
            }
            var z = this.cells[10].innerHTML;
            var z1 = z.toString();
            if(z1 == "Approved-by-UGC "){
                document.getElementsByName("arms")[0].checked = true;
                document.getElementsByName("arms")[1].checked = false;
                document.getElementsByName("arms")[2].checked = false;
                document.getElementsByName("arms")[3].checked = false;
                document.getElementsByName("arms")[4].checked = false;
                document.getElementsByName("arms")[5].checked = false;
            }
            else if(z1 == "Approved-by-UGC Accreted-by-IET-UK Member-of-IAU Member-of-Association-of-Commonwealth-Universities "){
                document.getElementsByName("arms")[0].checked = true;
                document.getElementsByName("arms")[1].checked = false;
                document.getElementsByName("arms")[2].checked = true;
                document.getElementsByName("arms")[3].checked = true;
                document.getElementsByName("arms")[4].checked = false;
                document.getElementsByName("arms")[5].checked = true;
            }
            else if(z1 == "Approved-by-UGC Member-of-IAU Member-of-AACSB Member-of-Association-of-Commonwealth-Universities "){
                document.getElementsByName("arms")[0].checked = true;
                document.getElementsByName("arms")[1].checked = false;
                document.getElementsByName("arms")[2].checked = false;
                document.getElementsByName("arms")[3].checked = true;
                document.getElementsByName("arms")[4].checked = true;
                document.getElementsByName("arms")[5].checked = true;
            }
            else if(z1 == "Approved-by-UGC Member-of-IAU Member-of-Association-of-Commonwealth-Universities "){
                document.getElementsByName("arms")[0].checked = true;
                document.getElementsByName("arms")[1].checked = false;
                document.getElementsByName("arms")[2].checked = false;
                document.getElementsByName("arms")[3].checked = true;
                document.getElementsByName("arms")[4].checked = false;
                document.getElementsByName("arms")[5].checked = true;
            }
            else if(z1 == "Recognized-by-UGC Member-of-IAU Member-of-Association-of-Commonwealth-Universities "){
                document.getElementsByName("arms")[0].checked = false;
                document.getElementsByName("arms")[1].checked = true;
                document.getElementsByName("arms")[2].checked = false;
                document.getElementsByName("arms")[3].checked = true;
                document.getElementsByName("arms")[4].checked = false;
                document.getElementsByName("arms")[5].checked = true;
            }
            else{
                document.getElementsByName("arms")[0].checked = false;
                document.getElementsByName("arms")[1].checked = false;
                document.getElementsByName("arms")[2].checked = false;
                document.getElementsByName("arms")[3].checked = false;
                document.getElementsByName("arms")[4].checked = false;
                document.getElementsByName("arms")[5].checked = false;
            }
            document.getElementById("fdesc").value = this.cells[11].innerHTML;
            document.getElementById("minimum").value = this.cells[12].innerHTML;
            document.getElementById("english").value = this.cells[13].innerHTML;
            document.getElementById("mathematics").value = this.cells[14].innerHTML;
            document.getElementById("stream").value = this.cells[15].innerHTML;
        };
    }
}

function load_form_update_f(obj){
    document.getElementById("local_table").style.display = "none";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("all_data").style.display = "none";
    document.getElementById("all_data_f").style.display = "none";

    //selected row to input
    allC = document.getElementById('all_f');
    document.getElementById("local_form").style.display = "block";
    document.getElementById("career_form").style.display = "none";

    for(var i = 1; i < allC.rows.length; i++)
    {
        allC.rows[i].onclick = function()
        {
            document.getElementById("course_code").value = this.cells[0].innerHTML;
            document.getElementById("course_title").value = this.cells[1].innerHTML;
            document.getElementById("course_title_ab").value = this.cells[2].innerHTML;
            document.getElementById("faculty_f").value = this.cells[3].innerHTML;
            document.getElementById("duration_f").value = this.cells[4].innerHTML;
            document.getElementById("university_f").value = this.cells[5].innerHTML;
            document.getElementById("country_f").value = this.cells[6].innerHTML;
            var x = this.cells[7].innerHTML;
            var x1 = x.toString();
            if(x1 == "January "){
                document.getElementsByName("entry1")[0].checked = true;
                document.getElementsByName("entry1")[1].checked = false;
            }
            else if(x1 == "June "){
                document.getElementsByName("entry1")[0].checked = false;
                document.getElementsByName("entry1")[1].checked = true;
            }
            else if(x1 == "January June "){
                document.getElementsByName("entry1")[0].checked = true;
                document.getElementsByName("entry1")[1].checked = true;
            }
            else{
                document.getElementsByName("entry1")[0].checked = true;
                document.getElementsByName("entry1")[1].checked = true;
            }
            var y = this.cells[8].innerHTML;
            var y1 = y.toString();
            if(y1 == "Malabe "){
                document.getElementsByName("locations1")[0].checked = true;
                document.getElementsByName("locations")[1].checked = false;
            }
            else if(y1 == "Colpetty "){
                document.getElementsByName("locations1")[0].checked = false;
                document.getElementsByName("locations1")[1].checked = true;
            }
            else if(y1 == "Malabe Colpetty "){
                document.getElementsByName("locations1")[0].checked = true;
                document.getElementsByName("locations1")[1].checked = true;
            } 
            else {
                document.getElementsByName("locations1")[0].checked = true;
                document.getElementsByName("locations1")[1].checked = true;
            }
            document.getElementById("description_found").value = this.cells[9].innerHTML;
            document.getElementById("minimum1").value = this.cells[10].innerHTML;
            document.getElementById("english1").value = this.cells[11].innerHTML;
            document.getElementById("mathematics1").value = this.cells[12].innerHTML;
        };
    }
}

function errorLoading(err)
{
    console.log("error!");
    console.log(err);
}

function load_form_add()
{
    document.getElementById("local_table").style.display = "none";
    document.getElementById("career_form").style.display = "none";
    document.getElementById("local_form").style.display = "block";
}

function save_Degree()
{
    var foreign_degree_code = document.getElementById('foreign_degree_code').value;
    var type = document.getElementById('typeD').value;
    var foreign_degree_title = document.getElementById('foreign_degree_title').value;
    var degree_ftitle_ab = document.getElementById('degree_ftitle_ab').value;
    var fac = document.getElementById('fac').value;
    var uni = document.getElementById('uni').value;
    var country = document.getElementById('country').value;
    var dur = document.getElementById('dur').value;
    var desc = document.getElementById('fdesc').value;

    var valEntry = "";
    for (var i=0;i<entry.length;i++)
    {
        if (entry[i].checked)
        {
            valEntry = valEntry + entry[i].value + " ";
        }
    }

    var valLocation = "";
    for (var j=0;j<cen.length;j++)
    {
        if (cen[j].checked)
        {
            valLocation = valLocation + cen[j].value + " ";
        }
    }

    var approvals = "";
    for(var i=0; i<arm.length; i++)
    {
        if(arm[i].checked)
        {
            approvals = approvals + arm[i].value + " ";
        }
    }

    //ordinary level
    var Minimum_passes_ol = document.getElementById('minimum').value;
    var English = document.getElementById('english').value;
    var Mathematics = document.getElementById('mathematics').value;
    //advanced level
    var Stream = document.getElementById('stream').value;

    //minimum results-local
    var results4 = document.getElementById('r4').value;
    var results5 = document.getElementById('r5').value;
    var results6 = document.getElementById('r6').value;
    //minimum results-london
    var results7 = document.getElementById('r7').value;
    var results8 = document.getElementById('r8').value;
    var results9 = document.getElementById('r9').value;
    //compulsory streams
    var compulsary_stream = "";
    for(var i=0; i<st.length; i++)
    {
        if(st[i].checked)
        {
            compulsary_stream = compulsary_stream + st[i].value + " ";
        }
    }
    //compulsory subjects
    var s1 = document.getElementById('com1').value;
    var s2 = document.getElementById('com2').value;
    var s3 = document.getElementById('com3').value;
    var cs = document.getElementById('c').value;
    if(cs == 'compulsory'){
        Subject1 = s1 +" "+ s2 +" "+ s3;
        Subject2 = "";
        Subject3 = "";
    }
    else{
        Subject1 = s1;
        Subject2 = s2;
        Subject3 = s3;
    }

    //career
    var Career1 = document.getElementById('career_paths1').value;
    var Career2 = document.getElementById('career_paths2').value;
    var Career3 = document.getElementById('career_paths3').value;
    var Career4 = document.getElementById('career_paths4').value;
    var Career5 = document.getElementById('career_paths5').value;
    var Career6 = document.getElementById('career_paths6').value;
    var Career7 = document.getElementById('career_paths7').value;
    var Career8 = document.getElementById('career_paths8').value;
    var Career9 = document.getElementById('career_paths9').value;
    var Career10 = document.getElementById('career_paths10').value;
    var Career11 = document.getElementById('career_paths11').value;
    var Career12 = document.getElementById('career_paths12').value;
    var Career13 = document.getElementById('career_paths13').value;
    var Career14 = document.getElementById('career_paths14').value;
    var Career15 = document.getElementById('career_paths15').value;
    var Career16 = document.getElementById('career_paths16').value;
    var Career17 = document.getElementById('career_paths17').value;

    var Iid = firebase.database().ref().child('Local').push().key;

    var data = {
        degree_id: Iid,
        type: type,
        degree_code: foreign_degree_code,
        degree_title: foreign_degree_title,
        degree_title_abbreviation: degree_ftitle_ab,
        faculty: fac,
        duration: dur,
        university: uni,
        country: country,
        intake: valEntry,
        locations: valLocation,
        approvals: approvals,
        description: desc,
        "ordinary_level" : {
            Minimum_passes_ol: Minimum_passes_ol,
            English: English,
            Mathematics: Mathematics
        },
        "advanced_level" : {
            stream: Stream,
            "minimum_results" : {
                "specific_local" : {
                    subject1: results4,
                    subject2: results5,
                    subject3: results6
                },
                "specific_london" : {
                    subject1: results7,
                    subject2: results8,
                    subject3: results9
                }
            },
            compulsary_stream: compulsary_stream,
            "compulsary_subjects" : {
                compulsary_subject1 : Subject1,
                compulsary_subject2 : Subject2,
                compulsary_subject3 : Subject3
            }
        },
        "career_paths" : {
            Career1: Career1,
            Career2: Career2,
            Career3: Career3,
            Career4: Career4,
            Career5: Career5,
            Career6: Career6,
            Career7: Career7,
            Career8: Career8,
            Career9: Career9,
            Career10: Career10,
            Career11: Career11,
            Career12: Career12,
            Career13: Career13,
            Career14: Career14,
            Career15: Career15,
            Career16: Career16,
            Career17: Career17
        }
    }

    var result = confirm("Do you really want to add a degree?");
    if (result) {
        var updates = {};
        updates['/Degree_list/' + Iid] = data;
        firebase.database().ref().update(updates);
        alert('A degree is added successfully!');
    }
    else{
        alert('Cancelled!');
    }
    reload_page();
}

function save_Degree_f()
{
    var course_code = document.getElementById('course_code').value;
    var course_title = document.getElementById('course_title').value;
    var course_ab = document.getElementById('course_title_ab').value;
    var fac = document.getElementById('faculty_f').value;
    var uni = document.getElementById('university_f').value;
    var country = document.getElementById('country_f').value;
    var dur = document.getElementById('duration_f').value;
    var desc = document.getElementById('description_found').value;

    var valEntry = "";
    for (var i=0;i<entry.length;i++)
    {
        if (entry[i].checked)
        {
            valEntry = valEntry + entry[i].value + " ";
        }
    }

    var valLocation = "";
    for (var j=0;j<cen.length;j++)
    {
        if (cen[j].checked)
        {
            valLocation = valLocation + cen[j].value + " ";
        }
    }

    //ordinary level
    var Minimum_passes_ol = document.getElementById('minimum1').value;
    var English = document.getElementById('english1').value;
    var Mathematics = document.getElementById('mathematics1').value;

    var Iid = firebase.database().ref().child('Local').push().key;

    var data = {
        degree_id: Iid,
        degree_code: course_code,
        degree_title: course_title,
        degree_title_abbreviation: course_ab,
        faculty: fac,
        duration: dur,
        university: uni,
        country: country,
        intake: valEntry,
        locations: valLocation,
        description: desc,
        "ordinary_level" : {
            Minimum_passes_ol: Minimum_passes_ol,
            English: English,
            Mathematics: Mathematics
        }
    }

    var result = confirm("Do you really want to add a Course?");
    if (result) {
        var updates = {};
        updates['/Foundation/' + Iid] = data;
        firebase.database().ref().update(updates);
        alert('A foundation course is added successfully!');
    }
    else{
        alert('Cancelled!');
    }
    reload_page();
}

function update_Degree()
{
    alert(tempLocal_id);
    var key = tempLocal_id;

    var foreign_degree_code = document.getElementById('foreign_degree_code').value;
    var type = document.getElementById('typeD').value;
    var foreign_degree_title = document.getElementById('foreign_degree_title').value;
    var degree_ftitle_ab = document.getElementById('degree_ftitle_ab').value;
    var fac = document.getElementById('fac').value;
    var uni = document.getElementById('uni').value;
    var country = document.getElementById('country').value;
    var dur = document.getElementById('dur').value;
    var desc = document.getElementById('fdesc').value;
    var valEntry = "";
    for (var i=0;i<entry.length;i++)
    {
        if (entry[i].checked)
        {
            valEntry = valEntry + entry[i].value + " ";
        }
    }
    var valLocation = "";
    for (var j=0;j<cen.length;j++)
    {
        if (cen[j].checked)
        {
            valLocation = valLocation + cen[j].value + " ";
        }
    }
    var approvals = "";
    for(var i=0; i<arm.length; i++)
    {
        if(arm[i].checked)
        {
            approvals = approvals + arm[i].value + " ";
        }
    }
    //ordinary level
    var Minimum_passes_ol = document.getElementById('minimum').value;
    var English = document.getElementById('english').value;
    var Mathematics = document.getElementById('mathematics').value;
    //advanced level
    var Stream = document.getElementById('stream').value;
  
    //minimum results-local
    var results4 = document.getElementById('r4').value;
    var results5 = document.getElementById('r5').value;
    var results6 = document.getElementById('r6').value;
    //minimum results-london
    var results7 = document.getElementById('r7').value;
    var results8 = document.getElementById('r8').value;
    var results9 = document.getElementById('r9').value;
    //compulsory streams
    var compulsary_stream = "";
    for(var i=0; i<st.length; i++)
    {
        if(st[i].checked)
        {
            compulsary_stream = compulsary_stream + st[i].value + " ";
        }
    }
   //compulsory subjects
   var s1 = document.getElementById('com1').value;
   var s2 = document.getElementById('com2').value;
   var s3 = document.getElementById('com3').value;
   var cs = document.getElementById('c').value;
   if(cs == 'compulsory'){
       Subject1 = s1 +" "+ s2 +" "+ s3;
       Subject2 = "";
       Subject3 = "";
   }
   else{
       Subject1 = s1;
       Subject2 = s2;
       Subject3 = s3;
   }

    //career
    var Career1 = document.getElementById('career_paths1').value;
    var Career2 = document.getElementById('career_paths2').value;
    var Career3 = document.getElementById('career_paths3').value;
    var Career4 = document.getElementById('career_paths4').value;
    var Career5 = document.getElementById('career_paths5').value;
    var Career6 = document.getElementById('career_paths6').value;
    var Career7 = document.getElementById('career_paths7').value;
    var Career8 = document.getElementById('career_paths8').value;
    var Career9 = document.getElementById('career_paths9').value;
    var Career10 = document.getElementById('career_paths10').value;
    var Career11 = document.getElementById('career_paths11').value;
    var Career12 = document.getElementById('career_paths12').value;
    
    var data = {
        type: type,
        degree_code: foreign_degree_code,
        degree_title: foreign_degree_title,
        degree_title_abbreviation: degree_ftitle_ab,
        faculty: fac,
        duration: dur,
        university: uni,
        country: country,
        intake: valEntry,
        locations: valLocation,
        approvals: approvals,
        description: desc,
        "ordinary_level" : {
            Minimum_passes_ol: Minimum_passes_ol,
            English: English,
            Mathematics: Mathematics
        },
        "advanced_level" : {
            stream: Stream,
            "minimum_results" : {
                "specific_local" : {
                    subject1: results4,
                    subject2: results5,
                    subject3: results6
                },
                "specific_london" : {
                    subject1: results7,
                    subject2: results8,
                    subject3: results9
                }
            },
            compulsary_stream: compulsary_stream,
            "compulsary_subjects" : {
                compulsary_subject1 : Subject1,
                compulsary_subject2 : Subject2,
                compulsary_subject3 : Subject3
            }
        },
        "career_paths" : {
            Career1: Career1,
            Career2: Career2,
            Career3: Career3,
            Career4: Career4,
            Career5: Career5,
            Career6: Career6,
            Career7: Career7,
            Career8: Career8,
            Career9: Career9,
            Career10: Career10,
            Career11: Career11,
            Career12: Career12
        }
    }

    var result = confirm("Do you really want to edit?");
    if(result) {
        firebase.database().ref().child('Degree_list/' + key).update(data);
        alert("Successfully Updated!!")
        reload_page();
    }
    else{
        alert("Cancelled!!")
    }
}

function update_Degree_f()
{
    alert(tempLocal_id);
    var key = tempLocal_id;

    var course_code = document.getElementById('course_code').value;
    var course_title = document.getElementById('course_title').value;
    var course_ab = document.getElementById('course_title_ab').value;
    var fac = document.getElementById('faculty_f').value;
    var uni = document.getElementById('university_f').value;
    var country = document.getElementById('country_f').value;
    var dur = document.getElementById('duration_f').value;
    var desc = document.getElementById('description_found').value;

    var valEntry = "";
    for (var i=0;i<entry.length;i++)
    {
        if (entry[i].checked)
        {
            valEntry = valEntry + entry[i].value + " ";
        }
    }

    var valLocation = "";
    for (var j=0;j<cen.length;j++)
    {
        if (cen[j].checked)
        {
            valLocation = valLocation + cen[j].value + " ";
        }
    }

    //ordinary level
    var Minimum_passes_ol = document.getElementById('minimum1').value;
    var English = document.getElementById('english1').value;
    var Mathematics = document.getElementById('mathematics1').value;

    var data = {
        degree_code: course_code,
        degree_title: course_title,
        degree_title_abbreviation: course_ab,
        faculty: fac,
        duration: dur,
        university: uni,
        country: country,
        intake: valEntry,
        locations: valLocation,
        description: desc,
        "ordinary_level" : {
            Minimum_passes_ol: Minimum_passes_ol,
            English: English,
            Mathematics: Mathematics
        }     
    }

    var result = confirm("Do you really want to edit?");
    if(result) {
        firebase.database().ref().child('Foundation/' + key).update(data);
        alert("Successfully Updated!!")
        reload_page();
    }
    else{
        alert("Cancelled!!")
    }
}

function delete_degree(obj)
{
    //alert(obj.id);
    var result = confirm("Do you really want to delete?");
    if(result){
        var key = obj.id;
        firebase.database().ref().child('Degree_list/'+key).remove();
        alert("Successfully Removed!!")
        reload_page();
    }
    else{
        alert("Cancelled!!")
    }
}

function delete_course(obj)
{
    //alert(obj.id);
    var result = confirm("Do you really want to delete?");
    if(result){
        var key = obj.id;
        firebase.database().ref().child('Foundation/'+key).remove();
        alert("Successfully Removed!!")
        reload_page();
    }
    else{
        alert("Cancelled!!")
    }
}

function reload_page()
{
    window.location.reload();
}

function entry_career(){
    document.getElementById("career_form").style.display = "block";
    document.getElementById("local_form").style.display = "none";
}

