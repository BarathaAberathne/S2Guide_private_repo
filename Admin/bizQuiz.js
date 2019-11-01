var divs = ["DivAns1", "DivAns2", "DivAns3", "DivAns4","DivAns5","DivAns6"];
var i, j;
// i is to count divs, i is to count clicks
var clicks = 0;
var removeClicks = 0;
var countAns = 0;

function save_n(){
    

  var q_topic = document.getElementById('q_topic').value;

  var ans1 =  document.getElementById('ans1').value;
  var AF_score1 = document.getElementById('AF_score1').value;
  var BA_score1 = document.getElementById('BA_score1').value;
  var BM_score1 = document.getElementById('BM_score1').value;
  var MM_score1 = document.getElementById('MM_score1').value;
  var HCM_score1 = document.getElementById('HCM_score1').value;
  var LSCM_score1 = document.getElementById('LSCM_score1').value;
  var MIS_score1 = document.getElementById('MIS_score1').value;
  var B_Admin_UK_score1 = document.getElementById('B_Admin_UK_score1').value;
  var BA_Topup_score1 = document.getElementById('BA_Topup_score1').value;
 
  var ans2 =  document.getElementById('ans2').value;
  var AF_score2 = document.getElementById('AF_score2').value;
  var BA_score2 = document.getElementById('BA_score2').value;
  var BM_score2 = document.getElementById('BM_score2').value;
  var MM_score2 = document.getElementById('MM_score2').value;
  var HCM_score2 = document.getElementById('HCM_score2').value;
  var LSCM_score2 = document.getElementById('LSCM_score2').value;
  var MIS_score2 = document.getElementById('MIS_score2').value;
  var B_Admin_UK_score2 = document.getElementById('B_Admin_UK_score2').value;
  var BA_Topup_score2 = document.getElementById('BA_Topup_score2').value;
 
  var ans3 =  document.getElementById('ans3').value;
  var AF_score3 = document.getElementById('AF_score3').value;
  var BA_score3 = document.getElementById('BA_score3').value;
  var BM_score3 = document.getElementById('BM_score3').value;
  var MM_score3 = document.getElementById('MM_score3').value;
  var HCM_score3 = document.getElementById('HCM_score3').value;
  var LSCM_score3 = document.getElementById('LSCM_score3').value;
  var MIS_score3 = document.getElementById('MIS_score3').value;
  var B_Admin_UK_score3 = document.getElementById('B_Admin_UK_score3').value;
  var BA_Topup_score3 = document.getElementById('BA_Topup_score3').value;
 
  var ans4 =  document.getElementById('ans4').value;
  var AF_score4 = document.getElementById('AF_score4').value;
  var BA_score4 = document.getElementById('BA_score4').value;
  var BM_score4 = document.getElementById('BM_score4').value;
  var MM_score4 = document.getElementById('MM_score4').value;
  var HCM_score4 = document.getElementById('HCM_score4').value;
  var LSCM_score4 = document.getElementById('LSCM_score4').value;
  var MIS_score4 = document.getElementById('MIS_score4').value;
  var B_Admin_UK_score4 = document.getElementById('B_Admin_UK_score4').value;
  var BA_Topup_score4 = document.getElementById('BA_Topup_score4').value;
 
  var ans5 =  document.getElementById('ans5').value;
  var AF_score5 = document.getElementById('AF_score5').value;
  var BA_score5 = document.getElementById('BA_score5').value;
  var BM_score5 = document.getElementById('BM_score5').value;
  var MM_score5 = document.getElementById('MM_score5').value;
  var HCM_score5 = document.getElementById('HCM_score5').value;
  var LSCM_score5 = document.getElementById('LSCM_score5').value;
  var MIS_score5 = document.getElementById('MIS_score5').value;
  var B_Admin_UK_score5 = document.getElementById('B_Admin_UK_score5').value;
  var BA_Topup_score5 = document.getElementById('BA_Topup_score5').value;
 

  var ans6 =  document.getElementById('ans6').value;
  var AF_score6 = document.getElementById('AF_score6').value;
  var BA_score6 = document.getElementById('BA_score6').value;
  var BM_score6 = document.getElementById('BM_score6').value;
  var MM_score6 = document.getElementById('MM_score6').value;
  var HCM_score6 = document.getElementById('HCM_score6').value;
  var LSCM_score6 = document.getElementById('LSCM_score6').value;
  var MIS_score6 = document.getElementById('MIS_score6').value;
  var B_Admin_UK_score6 = document.getElementById('B_Admin_UK_score6').value;
  var BA_Topup_score6 = document.getElementById('BA_Topup_score6').value;
 
  var count = countAnswers();
  var biz_id = firebase.database().ref().child('QuizPartTwo_Business').push().key;

  var data = {
    totAnswers: count,
    ans6: {"answer":ans6, "BBA_Hons_Degree_sp_in_Accounting_and_Finance":AF_score6,"BBA_Hons_Degree_sp_in_Business_Analytics":BA_score6,"BBA_Hons_Degree_sp_in_Business_Management":BM_score6,"BBA_Hons_Degree_sp_in_Marketing_Management":MM_score6,"BBA_Hons_Degree_sp_in_Human_Capital_Management":HCM_score6,"BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management":LSCM_score6, "BBA_Hons_Degree_sp_in_Management_Information_Systems":MIS_score6, "BBA_Hons_Business_Administration_UK":B_Admin_UK_score6,"BA_Hons_in_Business_Administration_Top_up_UK":BA_Topup_score6},
    ans5: {"answer":ans5, "BBA_Hons_Degree_sp_in_Accounting_and_Finance":AF_score5,"BBA_Hons_Degree_sp_in_Business_Analytics":BA_score5,"BBA_Hons_Degree_sp_in_Business_Management":BM_score5,"BBA_Hons_Degree_sp_in_Marketing_Management":MM_score5,"BBA_Hons_Degree_sp_in_Human_Capital_Management":HCM_score5,"BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management":LSCM_score5, "BBA_Hons_Degree_sp_in_Management_Information_Systems":MIS_score5, "BBA_Hons_Business_Administration_UK":B_Admin_UK_score5,"BA_Hons_in_Business_Administration_Top_up_UK":BA_Topup_score5},
    ans4: {"answer":ans4, "BBA_Hons_Degree_sp_in_Accounting_and_Finance":AF_score4,"BBA_Hons_Degree_sp_in_Business_Analytics":BA_score4,"BBA_Hons_Degree_sp_in_Business_Management":BM_score4,"BBA_Hons_Degree_sp_in_Marketing_Management":MM_score4,"BBA_Hons_Degree_sp_in_Human_Capital_Management":HCM_score4,"BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management":LSCM_score4, "BBA_Hons_Degree_sp_in_Management_Information_Systems":MIS_score4, "BBA_Hons_Business_Administration_UK":B_Admin_UK_score4,"BA_Hons_in_Business_Administration_Top_up_UK":BA_Topup_score4},
    ans3: {"answer":ans3, "BBA_Hons_Degree_sp_in_Accounting_and_Finance":AF_score3,"BBA_Hons_Degree_sp_in_Business_Analytics":BA_score3,"BBA_Hons_Degree_sp_in_Business_Management":BM_score3,"BBA_Hons_Degree_sp_in_Marketing_Management":MM_score3,"BBA_Hons_Degree_sp_in_Human_Capital_Management":HCM_score3,"BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management":LSCM_score3, "BBA_Hons_Degree_sp_in_Management_Information_Systems":MIS_score3, "BBA_Hons_Business_Administration_UK":B_Admin_UK_score3,"BA_Hons_in_Business_Administration_Top_up_UK":BA_Topup_score3},
    ans2: {"answer":ans2, "BBA_Hons_Degree_sp_in_Accounting_and_Finance":AF_score2,"BBA_Hons_Degree_sp_in_Business_Analytics":BA_score2,"BBA_Hons_Degree_sp_in_Business_Management":BM_score2,"BBA_Hons_Degree_sp_in_Marketing_Management":MM_score2,"BBA_Hons_Degree_sp_in_Human_Capital_Management":HCM_score2,"BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management":LSCM_score2, "BBA_Hons_Degree_sp_in_Management_Information_Systems":MIS_score2, "BBA_Hons_Business_Administration_UK":B_Admin_UK_score2,"BA_Hons_in_Business_Administration_Top_up_UK":BA_Topup_score2},
    ans1: {"answer":ans1, "BBA_Hons_Degree_sp_in_Accounting_and_Finance":AF_score1,"BBA_Hons_Degree_sp_in_Business_Analytics":BA_score1,"BBA_Hons_Degree_sp_in_Business_Management":BM_score1,"BBA_Hons_Degree_sp_in_Marketing_Management":MM_score1,"BBA_Hons_Degree_sp_in_Human_Capital_Management":HCM_score1,"BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management":LSCM_score1, "BBA_Hons_Degree_sp_in_Management_Information_Systems":MIS_score1, "BBA_Hons_Business_Administration_UK":B_Admin_UK_score1,"BA_Hons_in_Business_Administration_Top_up_UK":BA_Topup_score1},
    question:q_topic,
    biz_id: biz_id
    }
    var updates = {};
    updates['/QuizPartTwo_Business/' + biz_id] = data;
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
      case "AF1":
          if(checkBox.checked == true){
      
              document.getElementById("AF_score1").disabled = false;
          }else{
              document.getElementById("AF_score1").disabled = true;
      
          }
          break;
      case "BA1":
          if(checkBox.checked == true){
      
              document.getElementById("BA_score1").disabled = false;
          }else{
              document.getElementById("BA_score1").disabled = true;
      
          }
          break;   
      case "BM1":
          if(checkBox.checked == true){
              document.getElementById("BM_score1").disabled = false;
          }else{
              document.getElementById("BM_score1").disabled = true;
          }
          break;  
      case "MM1":
          if(checkBox.checked == true){
              document.getElementById("MM_score1").disabled = false;
          }else{
              document.getElementById("MM_score1").disabled = true;
          }
          break;
      case "HCM1":
          if(checkBox.checked == true){
              document.getElementById("HCM_score1").disabled = false;
          }else{
              document.getElementById("HCM_score1").disabled = true;
          }
          break;
      case "LSCM1":
          if(checkBox.checked == true){
              document.getElementById("LSCM_score1").disabled = false;
          }else{
              document.getElementById("LSCM_score1").disabled = true;
          }
          break;
      case "MIS1":
          if(checkBox.checked == true){
              document.getElementById("MIS_score1").disabled = false;
          }else{
              document.getElementById("MIS_score1").disabled = true;
          }
          break;
      case "B_Admin_UK1":
          if(checkBox.checked == true){
              document.getElementById("B_Admin_UK_score1").disabled = false;
          }else{
              document.getElementById("B_Admin_UK_score1").disabled = true;
          }
          break;
      case "BA_Topup1":
          if(checkBox.checked == true){
              document.getElementById("BA_Topup_score1").disabled = false;
          }else{
              document.getElementById("BA_Topup_score1").disabled = true;
          }
          break;  
  }

}

function enable2(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "AF2":
            if(checkBox.checked == true){
        
                document.getElementById("AF_score2").disabled = false;
            }else{
                document.getElementById("AF_score2").disabled = true;
        
            }
            break;
        case "BA2":
            if(checkBox.checked == true){
        
                document.getElementById("BA_score2").disabled = false;
            }else{
                document.getElementById("BA_score2").disabled = true;
        
            }
            break;   
        case "BM2":
            if(checkBox.checked == true){
                document.getElementById("BM_score2").disabled = false;
            }else{
                document.getElementById("BM_score2").disabled = true;
            }
            break;  
        case "MM2":
            if(checkBox.checked == true){
                document.getElementById("MM_score2").disabled = false;
            }else{
                document.getElementById("MM_score2").disabled = true;
            }
            break;
        case "HCM2":
            if(checkBox.checked == true){
                document.getElementById("HCM_score2").disabled = false;
            }else{
                document.getElementById("HCM_score2").disabled = true;
            }
            break;
        case "LSCM2":
            if(checkBox.checked == true){
                document.getElementById("LSCM_score2").disabled = false;
            }else{
                document.getElementById("LSCM_score2").disabled = true;
            }
            break;
        case "MIS2":
            if(checkBox.checked == true){
                document.getElementById("MIS_score2").disabled = false;
            }else{
                document.getElementById("MIS_score2").disabled = true;
            }
            break;
        case "B_Admin_UK2":
            if(checkBox.checked == true){
                document.getElementById("B_Admin_UK_score2").disabled = false;
            }else{
                document.getElementById("B_Admin_UK_score2").disabled = true;
            }
            break;
        case "BA_Topup2":
            if(checkBox.checked == true){
                document.getElementById("BA_Topup_score2").disabled = false;
            }else{
                document.getElementById("BA_Topup_score2").disabled = true;
            }
            break;  
    }
  
  }
  
  
  function enable3(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "AF3":
            if(checkBox.checked == true){
        
                document.getElementById("AF_score3").disabled = false;
            }else{
                document.getElementById("AF_score3").disabled = true;
        
            }
            break;
        case "BA3":
            if(checkBox.checked == true){
        
                document.getElementById("BA_score3").disabled = false;
            }else{
                document.getElementById("BA_score3").disabled = true;
        
            }
            break;   
        case "BM3":
            if(checkBox.checked == true){
                document.getElementById("BM_score3").disabled = false;
            }else{
                document.getElementById("BM_score3").disabled = true;
            }
            break;  
        case "MM3":
            if(checkBox.checked == true){
                document.getElementById("MM_score3").disabled = false;
            }else{
                document.getElementById("MM_score3").disabled = true;
            }
            break;
        case "HCM3":
            if(checkBox.checked == true){
                document.getElementById("HCM_score3").disabled = false;
            }else{
                document.getElementById("HCM_score3").disabled = true;
            }
            break;
        case "LSCM3":
            if(checkBox.checked == true){
                document.getElementById("LSCM_score3").disabled = false;
            }else{
                document.getElementById("LSCM_score3").disabled = true;
            }
            break;
        case "MIS3":
            if(checkBox.checked == true){
                document.getElementById("MIS_score3").disabled = false;
            }else{
                document.getElementById("MIS_score3").disabled = true;
            }
            break;
        case "B_Admin_UK3":
            if(checkBox.checked == true){
                document.getElementById("B_Admin_UK_score3").disabled = false;
            }else{
                document.getElementById("B_Admin_UK_score3").disabled = true;
            }
            break;
        case "BA_Topup3":
            if(checkBox.checked == true){
                document.getElementById("BA_Topup_score3").disabled = false;
            }else{
                document.getElementById("BA_Topup_score3").disabled = true;
            }
            break;  
    }
  
  }  
  
  function enable4(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "AF4":
            if(checkBox.checked == true){
        
                document.getElementById("AF_score4").disabled = false;
            }else{
                document.getElementById("AF_score4").disabled = true;
        
            }
            break;
        case "BA4":
            if(checkBox.checked == true){
        
                document.getElementById("BA_score4").disabled = false;
            }else{
                document.getElementById("BA_score4").disabled = true;
        
            }
            break;   
        case "BM4":
            if(checkBox.checked == true){
                document.getElementById("BM_score4").disabled = false;
            }else{
                document.getElementById("BM_score4").disabled = true;
            }
            break;  
        case "MM4":
            if(checkBox.checked == true){
                document.getElementById("MM_score4").disabled = false;
            }else{
                document.getElementById("MM_score4").disabled = true;
            }
            break;
        case "HCM4":
            if(checkBox.checked == true){
                document.getElementById("HCM_score4").disabled = false;
            }else{
                document.getElementById("HCM_score4").disabled = true;
            }
            break;
        case "LSCM4":
            if(checkBox.checked == true){
                document.getElementById("LSCM_score4").disabled = false;
            }else{
                document.getElementById("LSCM_score4").disabled = true;
            }
            break;
        case "MIS4":
            if(checkBox.checked == true){
                document.getElementById("MIS_score4").disabled = false;
            }else{
                document.getElementById("MIS_score4").disabled = true;
            }
            break;
        case "B_Admin_UK4":
            if(checkBox.checked == true){
                document.getElementById("B_Admin_UK_score4").disabled = false;
            }else{
                document.getElementById("B_Admin_UK_score4").disabled = true;
            }
            break;
        case "BA_Topup4":
            if(checkBox.checked == true){
                document.getElementById("BA_Topup_score4").disabled = false;
            }else{
                document.getElementById("BA_Topup_score4").disabled = true;
            }
            break;  
    }
  
  }
  
  
  function enable5(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "AF5":
            if(checkBox.checked == true){
        
                document.getElementById("AF_score5").disabled = false;
            }else{
                document.getElementById("AF_score5").disabled = true;
        
            }
            break;
        case "BA5":
            if(checkBox.checked == true){
        
                document.getElementById("BA_score5").disabled = false;
            }else{
                document.getElementById("BA_score5").disabled = true;
        
            }
            break;   
        case "BM5":
            if(checkBox.checked == true){
                document.getElementById("BM_score5").disabled = false;
            }else{
                document.getElementById("BM_score5").disabled = true;
            }
            break;  
        case "MM5":
            if(checkBox.checked == true){
                document.getElementById("MM_score5").disabled = false;
            }else{
                document.getElementById("MM_score5").disabled = true;
            }
            break;
        case "HCM5":
            if(checkBox.checked == true){
                document.getElementById("HCM_score5").disabled = false;
            }else{
                document.getElementById("HCM_score5").disabled = true;
            }
            break;
        case "LSCM5":
            if(checkBox.checked == true){
                document.getElementById("LSCM_score5").disabled = false;
            }else{
                document.getElementById("LSCM_score5").disabled = true;
            }
            break;
        case "MIS5":
            if(checkBox.checked == true){
                document.getElementById("MIS_score5").disabled = false;
            }else{
                document.getElementById("MIS_score5").disabled = true;
            }
            break;
        case "B_Admin_UK5":
            if(checkBox.checked == true){
                document.getElementById("B_Admin_UK_score5").disabled = false;
            }else{
                document.getElementById("B_Admin_UK_score5").disabled = true;
            }
            break;
        case "BA_Topup5":
            if(checkBox.checked == true){
                document.getElementById("BA_Topup_score5").disabled = false;
            }else{
                document.getElementById("BA_Topup_score5").disabled = true;
            }
            break;  
    }
  
  }
  
  function enable6(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "AF6":
            if(checkBox.checked == true){
        
                document.getElementById("AF_score6").disabled = false;
            }else{
                document.getElementById("AF_score6").disabled = true;
        
            }
            break;
        case "BA6":
            if(checkBox.checked == true){
        
                document.getElementById("BA_score6").disabled = false;
            }else{
                document.getElementById("BA_score6").disabled = true;
        
            }
            break;   
        case "BM6":
            if(checkBox.checked == true){
                document.getElementById("BM_score6").disabled = false;
            }else{
                document.getElementById("BM_score6").disabled = true;
            }
            break;  
        case "MM6":
            if(checkBox.checked == true){
                document.getElementById("MM_score6").disabled = false;
            }else{
                document.getElementById("MM_score6").disabled = true;
            }
            break;
        case "HCM6":
            if(checkBox.checked == true){
                document.getElementById("HCM_score6").disabled = false;
            }else{
                document.getElementById("HCM_score6").disabled = true;
            }
            break;
        case "LSCM6":
            if(checkBox.checked == true){
                document.getElementById("LSCM_score6").disabled = false;
            }else{
                document.getElementById("LSCM_score6").disabled = true;
            }
            break;
        case "MIS6":
            if(checkBox.checked == true){
                document.getElementById("MIS_score6").disabled = false;
            }else{
                document.getElementById("MIS_score6").disabled = true;
            }
            break;
        case "B_Admin_UK6":
            if(checkBox.checked == true){
                document.getElementById("B_Admin_UK_score6").disabled = false;
            }else{
                document.getElementById("B_Admin_UK_score6").disabled = true;
            }
            break;
        case "BA_Topup6":
            if(checkBox.checked == true){
                document.getElementById("BA_Topup_score6").disabled = false;
            }else{
                document.getElementById("BA_Topup_score6").disabled = true;
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