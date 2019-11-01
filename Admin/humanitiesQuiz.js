var divs = ["DivAns1", "DivAns2", "DivAns3", "DivAns4","DivAns5","DivAns6"];
var i, j;
// i is to count divs, i is to count clicks
var clicks = 0;
var removeClicks = 0;
var countAns = 0;

function save_n(){
    

  var q_topic = document.getElementById('q_topic').value;

  var ans1 =  document.getElementById('ans1').value;
  var BPS_score1 = document.getElementById('BPS_score1').value;
  var BBS_score1 = document.getElementById('BBS_score1').value;
  var BBT_score1 = document.getElementById('BBT_score1').value;
  var BPsy_score1 = document.getElementById('BPsy_score1').value;
  var BNurse_score1 = document.getElementById('BNurse_score1').value;
  var LLB_score1 = document.getElementById('LLB_score1').value;
  
  var ans2 =  document.getElementById('ans2').value;
  var BPS_score2 = document.getElementById('BPS_score2').value;
  var BBS_score2 = document.getElementById('BBS_score2').value;
  var BBT_score2 = document.getElementById('BBT_score2').value;
  var BPsy_score2 = document.getElementById('BPsy_score2').value;
  var BNurse_score2 = document.getElementById('BNurse_score2').value;
  var LLB_score2 = document.getElementById('LLB_score2').value;
 
  var ans3 =  document.getElementById('ans3').value;
  var BPS_score3 = document.getElementById('BPS_score3').value;
  var BBS_score3 = document.getElementById('BBS_score3').value;
  var BBT_score3 = document.getElementById('BBT_score3').value;
  var BPsy_score3 = document.getElementById('BPsy_score3').value;
  var BNurse_score3 = document.getElementById('BNurse_score3').value;
  var LLB_score3 = document.getElementById('LLB_score3').value;
 
  var ans4 =  document.getElementById('ans4').value;
  var BPS_score4 = document.getElementById('BPS_score4').value;
  var BBS_score4 = document.getElementById('BBS_score4').value;
  var BBT_score4 = document.getElementById('BBT_score4').value;
  var BPsy_score4 = document.getElementById('BPsy_score4').value;
  var BNurse_score4 = document.getElementById('BNurse_score4').value;
  var LLB_score4 = document.getElementById('LLB_score4').value;
 
  var ans5 =  document.getElementById('ans5').value;
  var BPS_score5 = document.getElementById('BPS_score5').value;
  var BBS_score5 = document.getElementById('BBS_score5').value;
  var BBT_score5 = document.getElementById('BBT_score5').value;
  var BPsy_score5 = document.getElementById('BPsy_score5').value;
  var BNurse_score5 = document.getElementById('BNurse_score5').value;
  var LLB_score5 = document.getElementById('LLB_score5').value;
 
  var ans6 =  document.getElementById('ans6').value;
  var BPS_score6 = document.getElementById('BPS_score6').value;
  var BBS_score6 = document.getElementById('BBS_score6').value;
  var BBT_score6 = document.getElementById('BBT_score6').value;
  var BPsy_score6 = document.getElementById('BPsy_score6').value;
  var BNurse_score6 = document.getElementById('BNurse_score6').value;
  var LLB_score6 = document.getElementById('LLB_score6').value;
 
  var count = countAnswers();
  var hum_id = firebase.database().ref().child('QuizPartTwo_Humanities').push().key;

  var data = {
    totAnswers: count,
    ans6: {"answer":ans6, "BEd_Hons_in_Physical_Sciences":BPS_score6,"BEd_Hons_in_Biological_Sciences":BBS_score6,"BSc_Hons_in_Bio_Technology":BBT_score6,"BSc_Hons_Psychology_UK":BPsy_score6,"BSc_Hons_Nursing_UK":BNurse_score6,"LLB_Hons_Law_UK":LLB_score6},
    ans5: {"answer":ans5, "BEd_Hons_in_Physical_Sciences":BPS_score5,"BEd_Hons_in_Biological_Sciences":BBS_score5,"BSc_Hons_in_Bio_Technology":BBT_score5,"BSc_Hons_Psychology_UK":BPsy_score5,"BSc_Hons_Nursing_UK":BNurse_score5,"LLB_Hons_Law_UK":LLB_score5},
    ans4: {"answer":ans4, "BEd_Hons_in_Physical_Sciences":BPS_score4,"BEd_Hons_in_Biological_Sciences":BBS_score4,"BSc_Hons_in_Bio_Technology":BBT_score4,"BSc_Hons_Psychology_UK":BPsy_score4,"BSc_Hons_Nursing_UK":BNurse_score4,"LLB_Hons_Law_UK":LLB_score4},
    ans3: {"answer":ans3, "BEd_Hons_in_Physical_Sciences":BPS_score3,"BEd_Hons_in_Biological_Sciences":BBS_score3,"BSc_Hons_in_Bio_Technology":BBT_score3,"BSc_Hons_Psychology_UK":BPsy_score3,"BSc_Hons_Nursing_UK":BNurse_score3,"LLB_Hons_Law_UK":LLB_score3},
    ans2: {"answer":ans2, "BEd_Hons_in_Physical_Sciences":BPS_score2,"BEd_Hons_in_Biological_Sciences":BBS_score2,"BSc_Hons_in_Bio_Technology":BBT_score2,"BSc_Hons_Psychology_UK":BPsy_score2,"BSc_Hons_Nursing_UK":BNurse_score2,"LLB_Hons_Law_UK":LLB_score2},
    ans1: {"answer":ans1, "BEd_Hons_in_Physical_Sciences":BPS_score1,"BEd_Hons_in_Biological_Sciences":BBS_score1,"BSc_Hons_in_Bio_Technology":BBT_score1,"BSc_Hons_Psychology_UK":BPsy_score1,"BSc_Hons_Nursing_UK":BNurse_score1,"LLB_Hons_Law_UK":LLB_score1},
    question:q_topic,
    hum_id: hum_id
    }
    var updates = {};
    updates['/QuizPartTwo_Humanities/' + hum_id] = data;
    firebase.database().ref().update(updates);


  alert('The question is created successfully!');
  reload_page();

}
function reload_page(){
    window.location.reload();   
}

function countAnswers(){
  var ans1 =  document.getElementById('ans1').value;
  if (ans1 != "") {
      countAns+=1;
  }   
  var ans2 =  document.getElementById('ans2').value;
  if (ans2 != "") {
      countAns+=1;
  } 
  var ans3 =  document.getElementById('ans3').value;
  if (ans3 != "") {
      countAns+=1;
  } 
  var ans4 =  document.getElementById('ans4').value;
  if (ans4 != "") {
      countAns+=1;
  } 
  var ans5 =  document.getElementById('ans5').value;
  if (ans5 != "") {
      countAns+=1;
  } 
  var ans6 =  document.getElementById('ans6').value;
  if (ans6 != "") {
      countAns+=1;
  } 
  return countAns;
}
function enable1(id) {
  var checkBox = document.getElementById(id);
  switch (id) {
      case "BPS1":
          if(checkBox.checked == true){
      
              document.getElementById("BPS_score1").disabled = false;
          }else{
              document.getElementById("BPS_score1").disabled = true;
      
          }
          break;
      case "BBS1":
          if(checkBox.checked == true){
      
              document.getElementById("BBS_score1").disabled = false;
          }else{
              document.getElementById("BBS_score1").disabled = true;
      
          }
          break;   
      case "BBT1":
          if(checkBox.checked == true){
              document.getElementById("BBT_score1").disabled = false;
          }else{
              document.getElementById("BBT_score1").disabled = true;
          }
          break;  
      case "BPsy1":
          if(checkBox.checked == true){
              document.getElementById("BPsy_score1").disabled = false;
          }else{
              document.getElementById("BPsy_score1").disabled = true;
          }
          break;
      case "BNurse1":
          if(checkBox.checked == true){
              document.getElementById("BNurse_score1").disabled = false;
          }else{
              document.getElementById("BNurse_score1").disabled = true;
          }
          break;
      case "LLB1":
          if(checkBox.checked == true){
              document.getElementById("LLB_score1").disabled = false;
          }else{
              document.getElementById("LLB_score1").disabled = true;
          }
          break;
  }

}

function enable2(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "BPS2":
          if(checkBox.checked == true){
      
              document.getElementById("BPS_score2").disabled = false;
          }else{
              document.getElementById("BPS_score2").disabled = true;
      
          }
          break;
      case "BBS2":
          if(checkBox.checked == true){
      
              document.getElementById("BBS_score2").disabled = false;
          }else{
              document.getElementById("BBS_score2").disabled = true;
      
          }
          break;   
      case "BBT2":
          if(checkBox.checked == true){
              document.getElementById("BBT_score2").disabled = false;
          }else{
              document.getElementById("BBT_score2").disabled = true;
          }
          break;  
      case "BPsy2":
          if(checkBox.checked == true){
              document.getElementById("BPsy_score2").disabled = false;
          }else{
              document.getElementById("BPsy_score2").disabled = true;
          }
          break;
      case "BNurse2":
          if(checkBox.checked == true){
              document.getElementById("BNurse_score2").disabled = false;
          }else{
              document.getElementById("BNurse_score2").disabled = true;
          }
          break;
      case "LLB2":
          if(checkBox.checked == true){
              document.getElementById("LLB_score2").disabled = false;
          }else{
              document.getElementById("LLB_score2").disabled = true;
          }
          break;
    }
  
  }
  
  
  function enable3(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "BPS3":
          if(checkBox.checked == true){
      
              document.getElementById("BPS_score3").disabled = false;
          }else{
              document.getElementById("BPS_score3").disabled = true;
      
          }
          break;
      case "BBS3":
          if(checkBox.checked == true){
      
              document.getElementById("BBS_score3").disabled = false;
          }else{
              document.getElementById("BBS_score3").disabled = true;
      
          }
          break;   
      case "BBT3":
          if(checkBox.checked == true){
              document.getElementById("BBT_score3").disabled = false;
          }else{
              document.getElementById("BBT_score3").disabled = true;
          }
          break;  
      case "BPsy3":
          if(checkBox.checked == true){
              document.getElementById("BPsy_score3").disabled = false;
          }else{
              document.getElementById("BPsy_score3").disabled = true;
          }
          break;
      case "BNurse3":
          if(checkBox.checked == true){
              document.getElementById("BNurse_score3").disabled = false;
          }else{
              document.getElementById("BNurse_score3").disabled = true;
          }
          break;
      case "LLB3":
          if(checkBox.checked == true){
              document.getElementById("LLB_score3").disabled = false;
          }else{
              document.getElementById("LLB_score3").disabled = true;
          }
          break;
    }
  
  }  
  
  function enable4(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "BPS4":
          if(checkBox.checked == true){
      
              document.getElementById("BPS_score4").disabled = false;
          }else{
              document.getElementById("BPS_score4").disabled = true;
      
          }
          break;
      case "BBS4":
          if(checkBox.checked == true){
      
              document.getElementById("BBS_score4").disabled = false;
          }else{
              document.getElementById("BBS_score4").disabled = true;
      
          }
          break;   
      case "BBT4":
          if(checkBox.checked == true){
              document.getElementById("BBT_score4").disabled = false;
          }else{
              document.getElementById("BBT_score4").disabled = true;
          }
          break;  
      case "BPsy4":
          if(checkBox.checked == true){
              document.getElementById("BPsy_score4").disabled = false;
          }else{
              document.getElementById("BPsy_score4").disabled = true;
          }
          break;
      case "BNurse4":
          if(checkBox.checked == true){
              document.getElementById("BNurse_score4").disabled = false;
          }else{
              document.getElementById("BNurse_score4").disabled = true;
          }
          break;
      case "LLB4":
          if(checkBox.checked == true){
              document.getElementById("LLB_score4").disabled = false;
          }else{
              document.getElementById("LLB_score4").disabled = true;
          }
          break;
    }
  
  }
  
  
  function enable5(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "BPS5":
          if(checkBox.checked == true){
      
              document.getElementById("BPS_score5").disabled = false;
          }else{
              document.getElementById("BPS_score5").disabled = true;
      
          }
          break;
      case "BBS5":
          if(checkBox.checked == true){
      
              document.getElementById("BBS_score5").disabled = false;
          }else{
              document.getElementById("BBS_score5").disabled = true;
      
          }
          break;   
      case "BBT5":
          if(checkBox.checked == true){
              document.getElementById("BBT_score5").disabled = false;
          }else{
              document.getElementById("BBT_score5").disabled = true;
          }
          break;  
      case "BPsy5":
          if(checkBox.checked == true){
              document.getElementById("BPsy_score5").disabled = false;
          }else{
              document.getElementById("BPsy_score5").disabled = true;
          }
          break;
      case "BNurse5":
          if(checkBox.checked == true){
              document.getElementById("BNurse_score5").disabled = false;
          }else{
              document.getElementById("BNurse_score5").disabled = true;
          }
          break;
      case "LLB5":
          if(checkBox.checked == true){
              document.getElementById("LLB_score5").disabled = false;
          }else{
              document.getElementById("LLB_score5").disabled = true;
          }
          break;
    }
  
  }
  
  function enable6(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "BPS6":
          if(checkBox.checked == true){
      
              document.getElementById("BPS_score6").disabled = false;
          }else{
              document.getElementById("BPS_score6").disabled = true;
      
          }
          break;
      case "BBS6":
          if(checkBox.checked == true){
      
              document.getElementById("BBS_score6").disabled = false;
          }else{
              document.getElementById("BBS_score6").disabled = true;
      
          }
          break;   
      case "BBT6":
          if(checkBox.checked == true){
              document.getElementById("BBT_score6").disabled = false;
          }else{
              document.getElementById("BBT_score6").disabled = true;
          }
          break;  
      case "BPsy6":
          if(checkBox.checked == true){
              document.getElementById("BPsy_score6").disabled = false;
          }else{
              document.getElementById("BPsy_score6").disabled = true;
          }
          break;
      case "BNurse6":
          if(checkBox.checked == true){
              document.getElementById("BNurse_score6").disabled = false;
          }else{
              document.getElementById("BNurse_score6").disabled = true;
          }
          break;
      case "LLB6":
          if(checkBox.checked == true){
              document.getElementById("LLB_score6").disabled = false;
          }else{
              document.getElementById("LLB_score6").disabled = true;
          }
          break;
    }
  
  }  
  
//adding answers on user click
function addAnswer() {

  clicks = clicks + 1;
  j = 0;
  for(i = 0; i < divs.length; i++) {
      
      if(j < clicks) {
          var x = document.getElementById(divs[i]);
          if (x.style.display === "none") {
              x.style.display = "block";
          }
      j++;
      } 
  }
}
//removing answers on user click