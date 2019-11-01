
var firebaseConfig = {
    apiKey: "AIzaSyDPkSmKr-2T6C0_1SFwjWeRFlCzzL5VXc0",
    authDomain: "s2guide.firebaseapp.com",
    databaseURL: "https://s2guide.firebaseio.com",
    projectId: "s2guide",
    storageBucket: "s2guide.appspot.com",
    messagingSenderId: "457852779269",
    appId: "1:457852779269:web:7e27f12f4d807544"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var rIndex;

function init()
{
    var rootRef = firebase.database().ref('Degree_list/');
    rootRef.on('value', loadDataFromDB, errorLoading);

    var rootRef_Foundation = firebase.database().ref('Foundation/');
    rootRef_Foundation.on('value', loadDataFromDB_F, errorLoading);
}

function goBack(){
    document.getElementById("table_group").style.display = "block";
    document.getElementById("table_group_F").style.display = "block";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("div_degree_single_Bus").style.display = "none";
    document.getElementById("div_degree_single_Eng").style.display = "none";
    document.getElementById("div_degree_single_hos").style.display = "none";
    document.getElementById("div_degree_single_f").style.display = "none";
}

//Degrees
function loadDataFromDB(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        var k = keys[i];

        var title = childData[k].degree_title;
        var type = childData[k].type;
        var faculty = childData[k].faculty;

        if((faculty == 'Computing') && (type == 'Local')){
            tbl1 = document.getElementById('table_Computing_Local');
            var row = tbl1.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data(this);'><i class='fas fa-graduation-cap'></i></button></tr>"

        }
        if((faculty == 'Computing') && (type == 'Foreign')){
            tbl2 = document.getElementById('table_Computing_Foreign');
            var row = tbl2.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data(this);'><i class='fas fa-graduation-cap'></i></button></tr>"
        }
        if((faculty == 'Business') && (type == 'Local')){
            tbl3 = document.getElementById('table_Business_Local');
            var row = tbl3.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data_Bus(this);'><i class='fas fa-graduation-cap'></i></button></tr>"
        }
        if((faculty == 'Business') && (type == 'Foreign')){
            tbl4 = document.getElementById('table_Business_Foreign');
            var row = tbl4.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data_Bus(this);'><i class='fas fa-graduation-cap'></i></button></tr>"
        }
        if((faculty == 'Engineering') && (type == 'Local')){
            tbl5 = document.getElementById('table_Engineering_Local');
            var row = tbl5.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data_Eng(this);'><i class='fas fa-graduation-cap'></i></button></tr>"
        }
        if((faculty == 'Engineering') && (type == 'Foreign')){
            tbl6 = document.getElementById('table_Engineering_Foreign');
            var row = tbl6.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data_Eng(this);'><i class='fas fa-graduation-cap'></i></button></tr>"
        }
        if((faculty == 'Humanities and Sciences') && (type == 'Local')){
            tbl7 = document.getElementById('table_HnS_Local');
            var row = tbl7.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data_Eng(this);'><i class='fas fa-graduation-cap'></i></button></tr>"
        }
        if((faculty == 'Humanities and Sciences') && (type == 'Foreign')){
            tbl8 = document.getElementById('table_HnS_Foreign');
            var row = tbl8.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data(this);'><i class='fas fa-graduation-cap'></i></button></tr>"
        }
        if((faculty == 'Architecture') && (type == 'Foreign')){
            tbl9 = document.getElementById('table_arc_Foreign');
            var row = tbl9.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data_Bus(this);'><i class='fas fa-graduation-cap'></i></button></tr>"
        }
        if((faculty == 'Hospitality and Cookery') && (type == 'Foreign')){
            tbl10 = document.getElementById('table_HC_Foreign');
            var row = tbl10.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data_hos(this);'><i class='fas fa-graduation-cap'></i></button></tr>"
        }

    }
}

function view_data(obj) {
    document.getElementById('selectedId').value = obj.id;
    tempLocal_id = obj.id;

    document.getElementById("table_group").style.display = "none";
    document.getElementById("div_degree_single").style.display = "block";
    document.getElementById("table_group_F").style.display = "none";

    var ref = firebase.database().ref('Degree_list/'+tempLocal_id);
    ref.once('value', gotData);

    function gotData(snapshot) {
        typess = snapshot.val().type;
        degree_code = snapshot.val().degree_code;
        degree_title = snapshot.val().degree_title;
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
    }
    document.getElementById('fid').innerHTML = tempLocal_id;
    document.getElementById('type_label').innerHTML = typess;
    document.getElementById('code_label').innerHTML = degree_code;
    document.getElementById('title_label').innerHTML = degree_title;
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
}

function view_data_Bus(obj) {
    document.getElementById('selectedId').value = obj.id;
    tempLocal_id = obj.id;

    document.getElementById("table_group").style.display = "none";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("div_degree_single_Bus").style.display = "block";
    document.getElementById("table_group_F").style.display = "none";

    var ref = firebase.database().ref('Degree_list/'+tempLocal_id);
    ref.once('value', gotData);

    function gotData(snapshot) {
        typess = snapshot.val().type;
        degree_code = snapshot.val().degree_code;
        degree_title = snapshot.val().degree_title;
        duration = snapshot.val().duration;
        uni = snapshot.val().university;
        co = snapshot.val().country;
        intake = snapshot.val().intake;
        locations = snapshot.val().locations;
        approvals = snapshot.val().approvals;
        descriptions = snapshot.val().description;
        str = snapshot.val().advanced_level.stream;
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
    }
    document.getElementById('bfid').innerHTML = tempLocal_id;
    document.getElementById('btype_label').innerHTML = typess;
    document.getElementById('bcode_label').innerHTML = degree_code;
    document.getElementById('btitle_label').innerHTML = degree_title;
    document.getElementById('bduration_label').innerHTML = duration;
    document.getElementById('buni_label').innerHTML = uni;
    document.getElementById('bcountry_label').innerHTML = co;
    document.getElementById('bintake_label').innerHTML = intake;
    document.getElementById('blocation_label').innerHTML = locations;
    document.getElementById('bapp_label').innerHTML = approvals;
    document.getElementById('bdesc_label').innerHTML = descriptions;
    document.getElementById('bmin_label').innerHTML = minp;
    document.getElementById('beng_label').innerHTML = eng;
    document.getElementById('bmath_label').innerHTML = mathe;
    document.getElementById('bst_label').innerHTML = str;
    document.getElementById('bs4_label').innerHTML = lo1;
    document.getElementById('bs5_label').innerHTML = lo2;
    document.getElementById('bs6_label').innerHTML = lo3;
    document.getElementById('bs7_label').innerHTML = ln1;
    document.getElementById('bs8_label').innerHTML = ln2;
    document.getElementById('bs9_label').innerHTML = ln3;
    document.getElementById('bc1').innerHTML = cr1;
    document.getElementById('bc2').innerHTML = cr2;
    document.getElementById('bc3').innerHTML = cr3;
    document.getElementById('bc4').innerHTML = cr4;
    document.getElementById('bc5').innerHTML = cr5;
    document.getElementById('bc6').innerHTML = cr6;
    document.getElementById('bc7').innerHTML = cr7;
    document.getElementById('bc8').innerHTML = cr8;
    document.getElementById('bc9').innerHTML = cr9;
    document.getElementById('bc10').innerHTML = cr10;
}

function view_data_Eng(obj) {
    document.getElementById('selectedId').value = obj.id;
    tempLocal_id = obj.id;

    document.getElementById("table_group").style.display = "none";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("div_degree_single_Eng").style.display = "block";
    document.getElementById("table_group_F").style.display = "none";

    var ref = firebase.database().ref('Degree_list/'+tempLocal_id);
    ref.once('value', gotData);

    function gotData(snapshot) {
        typess = snapshot.val().type;
        degree_code = snapshot.val().degree_code;
        degree_title = snapshot.val().degree_title;
        duration = snapshot.val().duration;
        uni = snapshot.val().university;
        co = snapshot.val().country;
        intake = snapshot.val().intake;
        locations = snapshot.val().locations;
        approvals = snapshot.val().approvals;
        descriptions = snapshot.val().description;
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
    }
    document.getElementById('efid').innerHTML = tempLocal_id;
    document.getElementById('etype_label').innerHTML = typess;
    document.getElementById('ecode_label').innerHTML = degree_code;
    document.getElementById('etitle_label').innerHTML = degree_title;
    document.getElementById('eduration_label').innerHTML = duration;
    document.getElementById('euni_label').innerHTML = uni;
    document.getElementById('ecountry_label').innerHTML = co;
    document.getElementById('eintake_label').innerHTML = intake;
    document.getElementById('elocation_label').innerHTML = locations;
    document.getElementById('eapp_label').innerHTML = approvals;
    document.getElementById('edesc_label').innerHTML = descriptions;
    document.getElementById('emin_label').innerHTML = minp;
    document.getElementById('eeng_label').innerHTML = eng;
    document.getElementById('emath_label').innerHTML = mathe;
    document.getElementById('ecoms_label').innerHTML = com_str;
    document.getElementById('esub1_label').innerHTML = csub1;
    document.getElementById('esub2_label').innerHTML = csub2;
    document.getElementById('esub3_label').innerHTML = csub3;
    document.getElementById('es4_label').innerHTML = lo1;
    document.getElementById('es5_label').innerHTML = lo2;
    document.getElementById('es6_label').innerHTML = lo3;
    document.getElementById('es7_label').innerHTML = ln1;
    document.getElementById('es8_label').innerHTML = ln2;
    document.getElementById('es9_label').innerHTML = ln3;
    document.getElementById('ec1').innerHTML = cr1;
    document.getElementById('ec2').innerHTML = cr2;
    document.getElementById('ec3').innerHTML = cr3;
    document.getElementById('ec4').innerHTML = cr4;
    document.getElementById('ec5').innerHTML = cr5;
    document.getElementById('ec6').innerHTML = cr6;
    document.getElementById('ec7').innerHTML = cr7;
    document.getElementById('ec8').innerHTML = cr8;
    document.getElementById('ec9').innerHTML = cr9;
    document.getElementById('ec10').innerHTML = cr10;
}

function view_data_hos(obj) {
    document.getElementById('selectedId').value = obj.id;
    tempLocal_id = obj.id;

    document.getElementById("table_group").style.display = "none";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("div_degree_single_hos").style.display = "block";
    document.getElementById("table_group_F").style.display = "none";
    var ref = firebase.database().ref('Degree_list/'+tempLocal_id);
    ref.once('value', gotData);

    function gotData(snapshot) {
        typess = snapshot.val().type;
        degree_code = snapshot.val().degree_code;
        degree_title = snapshot.val().degree_title;
        duration = snapshot.val().duration;
        uni = snapshot.val().university;
        co = snapshot.val().country;
        intake = snapshot.val().intake;
        locations = snapshot.val().locations;
        descriptions = snapshot.val().description;

        ref.child("ordinary_level").once('value', olSnapshot => {
            minp = olSnapshot.val().Minimum_passes_ol;
            eng = olSnapshot.val().English;
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
    }
    document.getElementById('hfid').innerHTML = tempLocal_id;
    document.getElementById('htype_label').innerHTML = typess;
    document.getElementById('hcode_label').innerHTML = degree_code;
    document.getElementById('htitle_label').innerHTML = degree_title;
    document.getElementById('hduration_label').innerHTML = duration;
    document.getElementById('huni_label').innerHTML = uni;
    document.getElementById('hcountry_label').innerHTML = co;
    document.getElementById('hintake_label').innerHTML = intake;
    document.getElementById('hlocation_label').innerHTML = locations;
    document.getElementById('hdesc_label').innerHTML = descriptions;
    document.getElementById('hmin_label').innerHTML = minp;
    document.getElementById('heng_label').innerHTML = eng;
    document.getElementById('hc1').innerHTML = cr1;
    document.getElementById('hc2').innerHTML = cr2;
    document.getElementById('hc3').innerHTML = cr3;
    document.getElementById('hc4').innerHTML = cr4;
    document.getElementById('hc5').innerHTML = cr5;
    document.getElementById('hc6').innerHTML = cr6;
    document.getElementById('hc7').innerHTML = cr7;
    document.getElementById('hc8').innerHTML = cr8;
    document.getElementById('hc9').innerHTML = cr9;
    document.getElementById('hc10').innerHTML = cr10;
}

//Foundation Courses
function loadDataFromDB_F(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        var k = keys[i];

        var title = childData[k].degree_title;
        var faculty = childData[k].faculty;

        if(faculty == 'Computing'){
            tbl1 = document.getElementById('table_Computing');
            var row = tbl1.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data_f(this);'><i class='fas fa-graduation-cap'></i></button></tr>"

        }

        if(faculty == 'Business'){
            tbl3 = document.getElementById('table_Business');
            var row = tbl3.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data_f(this);'><i class='fas fa-graduation-cap'></i></button></tr>"
        }

    }
}

function view_data_f(obj) {
    document.getElementById('fselectedId').value = obj.id;
    tempLocal_id = obj.id;

    document.getElementById("table_group").style.display = "none";
    document.getElementById("div_degree_single").style.display = "none";
    document.getElementById("div_degree_single_f").style.display = "block";
    document.getElementById("table_group_F").style.display = "none";
    var ref = firebase.database().ref('Foundation/'+tempLocal_id);
    ref.once('value', gotData);

    function gotData(snapshot) {
        degree_code = snapshot.val().degree_code;
        degree_title = snapshot.val().degree_title;
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

function errorLoading(err)
{
    console.log("error!");
    console.log(err);
}

function reload_page()
{
    window.location.reload();
}

