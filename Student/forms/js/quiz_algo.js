var firebaseConfig = {
    apiKey: "AIzaSyDPkSmKr-2T6C0_1SFwjWeRFlCzzL5VXc0",
    authDomain: "s2guide.firebaseapp.com",
    databaseURL: "https://s2guide.firebaseio.com",
    projectId: "s2guide",
    storageBucket: "s2guide.appspot.com",
    messagingSenderId: "457852779269",
    appId: "1:457852779269:web:7e27f12f4d807544"
};

firebase.initializeApp(firebaseConfig);
console.log('quiz algo' + firebase);
database = firebase.database();

//This array stores all eligible degrees of the student
var eligible_degree_list_ol = [];
var eligible_degree_list_al = [];
//This array stores all degrees that are in firebase Degree_list
var degrees;
//This array stores the reasons of uneligibilty
var error_list = [];

function getEligibiltyOL() {
    var ref = database.ref('Degree_list/');
    ref.on('value', compareOL, errData);
}

function getEligibiltyAL() {
    var ref = database.ref('Degree_list/');
    ref.on('value', compareAL, errData);
}
//Compare after getting o/l results
function compareOL(data) {
    eligible_degree_list_ol.length = 0;
    //Get degree list from firebase
    degrees = data.val();
    var keys = Object.keys(degrees);
    //Get student inputs
    var std_passes = document.getElementById("min_passes").selectedIndex;
    var std_maths_rslt = document.getElementById("maths").selectedIndex;
    var std_english_rslt = document.getElementById("english").selectedIndex;

    console.log(std_passes + ' ' + std_maths_rslt + ' ' + std_english_rslt);
    console.log(keys.length);
    for (var i = 0; i < keys.length; i++) {
        try {
            var k = keys[i];
            var dg_title = degrees[k].degree_title;
            var dg_min_passes = degrees[k].ordinary_level.Minimum_passes_ol;
            //Get results from firebase
            var dg_maths_b = degrees[k].ordinary_level.Mathematics;
            var dg_eng_b = degrees[k].ordinary_level.English;
            //Coverted results to a value
            var dg_maths = resultConvert(dg_maths_b);
            var dg_eng = resultConvert(dg_eng_b);

            //Compare results
            if (std_passes >= dg_min_passes) {
                if (std_maths_rslt >= dg_maths) {
                    if (std_english_rslt >= dg_eng) {
                        eligible_degree_list_ol.push(k);
                    } else {
                        //not have english results

                        error_list.push('English result is not enough');
                    }
                } else {
                    //not have maths results
                    error_list.push('Maths result is not enough');
                }
            } else {
                //not have minimum passes
                error_list.push('Number of minimum passes are not enough');
            }
            console.log(i + ' ID ' + k + ' TITLE ' + dg_title + ' PASSES ' + dg_min_passes + ' MATHS ' + dg_maths + ' ENGLISH ' + dg_eng);

            //Print eligible degrees


        } catch (err) {
            console.log(err);
        }

    }
    if (eligible_degree_list_ol.length == 0) {
        //Redirect to foundation course
        console.log("You are not eligible for any degree,do foundation");
        window.location.href = '../foundation_courses.html';

    } else {
        for (var j = 0; j < eligible_degree_list_ol.length; j++) {
            var degree_key = eligible_degree_list_ol[j];

            console.log("You are eligible for " + degrees[degree_key].degree_title);
        }
        load_form_result();

    }

}
//Compare after getting a/l results
function compareAL(data) {

    //Get user inputs
    eligible_degree_list_al.length = 0;
    var exam_type = document.getElementById("exam_type").value;
    var std_stream = document.getElementById("std_stream").value;
    console.log(exam_type, std_stream);
    var std_subj1 = document.getElementById("subj1").value;
    var std_res1 = document.getElementById("res1").value;
    var std_subj2 = document.getElementById("subj2").value;
    var std_res2 = document.getElementById("res2").value;
    var std_subj3 = document.getElementById("subj3").value;
    var std_res3 = document.getElementById("res3").value;
    console.log(std_subj1 + ":" + std_res1);
    console.log(std_subj2 + ":" + std_res2);
    console.log(std_subj3 + ":" + std_res3);
    console.log(eligible_degree_list_ol.length);

    for (var k = 0; k < eligible_degree_list_ol.length; k++) {
        try {
            var key = eligible_degree_list_ol[k];
            var dg_stream = degrees[key].advanced_level.stream;

            console.log(key);
            if (dg_stream == 'Any') {//any
                //Check for minimun result
                if (exam_type == "Local") {
                    var dg_rs1_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject1);
                    var dg_rs2_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject2);
                    var dg_rs3_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject3);
                    console.log('Local', dg_rs1_l, dg_rs2_l, dg_rs3_l);
                    //check local result set

                    if (std_res1 >= dg_rs1_l || std_res1 >= dg_rs2_l || std_res1 >= dg_rs3_l) {
                        if (std_res2 >= dg_rs1_l || std_res2 >= dg_rs2_l || std_res2 >= dg_rs3_l) {
                            if (std_res3 >= dg_rs1_l || std_res3 >= dg_rs2_l || std_res3 >= dg_rs3_l) {
                                //matched
                                console.log("Eligible for this degree");
                                //move the key to a/l array
                                eligible_degree_list_al.push(key);
                            }
                        }
                    }

                } else if (exam_type == "London") {
                    dg_rs1_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject1);
                    dg_rs2_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject2);
                    dg_rs3_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject3);
                    //check london result set
                    console.log('London', dg_rs1_ln, dg_rs2_ln, dg_rs3_ln);

                    if (std_res1 >= dg_rs1_ln || std_res1 >= dg_rs2_ln || std_res1 >= dg_rs3_ln) {
                        if (std_res2 >= dg_rs1_ln || std_res2 >= dg_rs2_ln || std_res2 >= dg_rs3_ln) {
                            if (std_res3 >= dg_rs1_ln || std_res3 >= dg_rs2_ln || std_res3 >= dg_rs3_ln) {
                                //matched
                                console.log("Eligible for this degree");
                                //move the key to a/l array

                                eligible_degree_list_al.push(key);
                            }
                        }
                    }
                }

            } else {//specific
                var comp_strm = degrees[key].advanced_level.compulsary_stream;
                var count = countComSubs(comp_strm);

                if (matchStream(std_stream, comp_strm) == true) {
                    console.log("comp stream matched");
                    var comp_sub1 = degrees[key].advanced_level.compulsary_subjects.compulsary_subject1;
                    var comp_sub2 = degrees[key].advanced_level.compulsary_subjects.compulsary_subject2;
                    var comp_sub3 = degrees[key].advanced_level.compulsary_subjects.compulsary_subject3;
                    //Match coun variables
                    var mtch_c1 = 0;
                    var mtch_c2 = 0;
                    var mtch_c3 = 0;
                    console.log(comp_sub1);
                    console.log(comp_sub2);
                    console.log(comp_sub3);
                    console.log("Check count func : "+ countComSubs("Hello "));
                    var sub_c1 = countComSubs(JSON.stringify(comp_sub1));
                    var sub_c2 = countComSubs(JSON.stringify(comp_sub2));
                    var sub_c3 = countComSubs(JSON.stringify(comp_sub3));
                    
                    console.log(sub_c1);
                    console.log(sub_c2);
                    console.log(sub_c3);
                    var sub_arr = [std_subj1, std_subj2, std_subj3];
                    console.log(sub_arr);
                    if (sub_c1 == 0) {
                        mtch_c1 = -100;
                    }
                    if (sub_c2 == 0) {
                        mtch_c2 = -100;
                    }
                    if (sub_c3 == 0) {
                        mtch_c3 = -100;
                    }
                    for (var i = 0; i < 3; i++) {
                        if (matchStream(sub_arr[i], comp_sub1) == true) {
                            mtch_c1++;
                        }else if(matchStream(sub_arr[i], comp_sub2) == true){
                            mtch_c2++;
                        }else if(matchStream(sub_arr[i], comp_sub3) == true){
                            mtch_c3++;

                        }
                    }
                    
                    console.log("Matching count is : " + mtch_c1, mtch_c2, mtch_c3);
                    if (mtch_c1 == sub_c1 || mtch_c2 == sub_c2 || mtch_c3 == sub_c3) {
                        //all subjects are matched in subject1list

                        if (exam_type == "Local") {
                            var dg_rs1_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject1);
                            var dg_rs2_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject2);
                            var dg_rs3_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject3);
                            console.log('Local', dg_rs1_l, dg_rs2_l, dg_rs3_l);
                            //check local result set

                            if (std_res1 >= dg_rs1_l || std_res1 >= dg_rs2_l || std_res1 >= dg_rs3_l) {
                                if (std_res2 >= dg_rs1_l || std_res2 >= dg_rs2_l || std_res2 >= dg_rs3_l) {
                                    if (std_res3 >= dg_rs1_l || std_res3 >= dg_rs2_l || std_res3 >= dg_rs3_l) {
                                        //matched
                                        console.log("Eligible for this degree");
                                        //move the key to a/l array
                                        eligible_degree_list_al.push(key);
                                    }
                                }
                            }

                        } else if (exam_type == "London") {
                            dg_rs1_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject1);
                            dg_rs2_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject2);
                            dg_rs3_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject3);
                            //check london result set
                            console.log('London', dg_rs1_ln, dg_rs2_ln, dg_rs3_ln);

                            if (std_res1 >= dg_rs1_ln || std_res1 >= dg_rs2_ln || std_res1 >= dg_rs3_ln) {
                                if (std_res2 >= dg_rs1_ln || std_res2 >= dg_rs2_ln || std_res2 >= dg_rs3_ln) {
                                    if (std_res3 >= dg_rs1_ln || std_res3 >= dg_rs2_ln || std_res3 >= dg_rs3_ln) {
                                        //matched
                                        console.log("Eligible for this degree");
                                        //move the key to a/l array

                                        eligible_degree_list_al.push(key);
                                    }
                                }
                            }
                        }
                    } else {
                        //Subject1 is not matched
                        console.log("Subject1 list mismatch");
                    }


                } else {
                    console.log("comp stream unmatched");
                }

            }
        }catch (error) {
            console.log(error);
        }
    }
    if (eligible_degree_list_al.length == 0) {
        //Redirect to foundation course
        console.log("You are not eligible for any degree,do foundation");
        window.location.href = '../foundation_courses.html';

    } else {
        console.log("A/l array length : " + eligible_degree_list_al.length);
        for (var j = 0; j < eligible_degree_list_al.length; j++) {
            var degree_key = eligible_degree_list_al[j];

            console.log("You are eligible for " + degrees[degree_key].degree_title);
        }
        var json_str = JSON.stringify(eligible_degree_list_al);
        createCookie('eligible_degree_list_al', json_str);
        console.log(json_str);
        window.location.href = 'quizOneStudent.html';

    }
}

//Convert string result to a number
function resultConvert(result) {
    var result_val;
    if (result == 'A') {
        result_val = 5;
    }
    else if (result == 'B') {
        result_val = 4;
    }
    else if (result == 'C') {
        result_val = 3;
    }
    else if (result == 'S') {
        result_val = 2;
    }
    else if (result == 'F') {
        result_val = 1;
    }
    else {
        result_val = 0;
    }
    return result_val;
}
//Check if student's stream is matched
function matchStream(std_strm, dg_strm) {
    var std_str = std_strm;
    var dg_str = dg_strm;

    var rg = new RegExp(std_str);
    var res = dg_str.match(rg, 'g');
    var rtn;
    if (res == null) {
        rtn = false;
    } else {
        rtn = true;
    }
    return rtn;
}
function checkFunc(){
    console.log(countComSubs("aa "));
}
//Calculate number of compulsory subjects
function countComSubs(str) {
    var count = 1;
    var spc = " ";
    var rg = new RegExp(spc, 'g');
    var res = str.match(rg);
    if (res == null) {
        count = -100;
    } else {
        count = res.length;
    }
    return count;
}
function errData(err) {
    console.log("error!");
    console.log(err);
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function loadSubjects() {
        
    var maths = ["Combined-Maths", "Physics", "Chemistry", "Information-and-Communication-Technology"];
    var commerce = ["Accounting", "Business-Studies", "Economics", "Information-and-Communication-Technology", "Business-Statistics"];
    var bio = ["Agriculture","Biology","Chemistry","Information-and-Communication-Technology","Physics"];
    var technology = ["Accounting","Agriculture","Bio-Technology","Business-Studies","Communication-and-Media-Study","Economics","Engineering-Technology","English-Language","Geography","Home-Economics","Information-and-Communication-Technology","Science-for-Technology"];
    var other = ["Combined-Maths", "Physics", "Chemistry", "Information-and-Communication-Technology","Biology","Accounting","Agriculture","Bio-Technology","Business-Studies","Communication-and-Media-Study","Economics","Engineering-Technology","English-Language","Geography","Home-Economics","Science-for-Technology"]
    var stream = document.getElementById('stream').value;
    var subj1 = document.getElementById('subj1');
    var subj2 = document.getElementById('subj2');
    var subj3 = document.getElementById('subj3');
    subj1.options.length = 0;
    subj2.options.length = 0;
    subj3.options.length = 0;
    console.log(stream);
    if (stream == "Maths") {
        for (var i = 0; i < maths.length; i++) {
            var opt1 = document.createElement('option');
            var opt2 = document.createElement('option');
            var opt3 = document.createElement('option');
            opt1.value = maths[i];
            opt1.innerHTML = maths[i];
            opt2.value = maths[i];
            opt2.innerHTML = maths[i];
            opt3.value = maths[i];
            opt3.innerHTML = maths[i];

            subj1.appendChild(opt1);
            subj2.appendChild(opt2);
            subj3.appendChild(opt3);
        }

    }
    else if (stream == "Commerce") {
        for (var i = 0; i < commerce.length; i++) {

            var opt1 = document.createElement('option');
            var opt2 = document.createElement('option');
            var opt3 = document.createElement('option');
            opt1.value = commerce[i];
            opt1.innerHTML = commerce[i];
            opt2.value = commerce[i];
            opt2.innerHTML = commerce[i];
            opt3.value = commerce[i];
            opt3.innerHTML = commerce[i];

            subj1.appendChild(opt1);
            subj2.appendChild(opt2);
            subj3.appendChild(opt3);
        }
    }
    else if (stream == "BioScience") {
        for (var i = 0; i < bio.length; i++) {

            var opt1 = document.createElement('option');
            var opt2 = document.createElement('option');
            var opt3 = document.createElement('option');
            opt1.value = bio[i];
            opt1.innerHTML = bio[i];
            opt2.value = bio[i];
            opt2.innerHTML = bio[i];
            opt3.value = bio[i];
            opt3.innerHTML = bio[i];

            subj1.appendChild(opt1);
            subj2.appendChild(opt2);
            subj3.appendChild(opt3);
        }
    }
    else if (stream == "Technology") {
        for (var i = 0; i < technology.length; i++) {

            var opt1 = document.createElement('option');
            var opt2 = document.createElement('option');
            var opt3 = document.createElement('option');
            opt1.value = technology[i];
            opt1.innerHTML = technology[i];
            opt2.value = technology[i];
            opt2.innerHTML = technology[i];
            opt3.value = technology[i];
            opt3.innerHTML = technology[i];

            subj1.appendChild(opt1);
            subj2.appendChild(opt2);
            subj3.appendChild(opt3);
        }
    }
    else if (stream == "OtherStream") {
        for (var i = 0; i < other.length; i++) {

            var opt1 = document.createElement('option');
            var opt2 = document.createElement('option');
            var opt3 = document.createElement('option');
            opt1.value = other[i];
            opt1.innerHTML = other[i];
            opt2.value = other[i];
            opt2.innerHTML = other[i];
            opt3.value = other[i];
            opt3.innerHTML = other[i];

            subj1.appendChild(opt1);
            subj2.appendChild(opt2);
            subj3.appendChild(opt3);
        }
    }
}
