var divs = ["DivAns1", "DivAns2", "DivAns3", "DivAns4","DivAns5","DivAns6"];
var i, j;
// i is to count divs, i is to count clicks
var clicks = 0;
var removeClicks = 0;
var countAns = 0;

function save_n(){
    

  var q_topic = document.getElementById('q_topic').value;

  var ans1 =  document.getElementById('ans1').value;
  var IT_score1 = document.getElementById('IT_score1').value;
  var ISE_score1 = document.getElementById('ISE_score1').value;
  var SE_score1 = document.getElementById('SE_score1').value;
  var CSN_score1 = document.getElementById('CSN_score1').value;
  var DS_score1 = document.getElementById('DS_score1').value;
  var CS_score1 = document.getElementById('CS_score1').value;
  var IM_score1 = document.getElementById('IM_score1').value;
  var SEcur_score1 = document.getElementById('SEcur_score1').value;
  var CSNcur_score1 = document.getElementById('CSNcur_score1').value;
  var ITcur_score1 = document.getElementById('ITcur_score1').value;
  var CSSEbed_score1 = document.getElementById('CSSEbed_score1').value;
  var CNbed_score1 = document.getElementById('CNbed_score1').value;

  var ans2 =  document.getElementById('ans2').value;
  var IT_score2 = document.getElementById('IT_score2').value;
  var ISE_score2 = document.getElementById('ISE_score2').value;
  var SE_score2 = document.getElementById('SE_score2').value;
  var CSN_score2 = document.getElementById('CSN_score2').value;
  var DS_score2 = document.getElementById('DS_score2').value;
  var CS_score2 = document.getElementById('CS_score2').value;
  var IM_score2 = document.getElementById('IM_score2').value;
  var SEcur_score2 = document.getElementById('SEcur_score2').value;
  var CSNcur_score2 = document.getElementById('CSNcur_score2').value;
  var ITcur_score2 = document.getElementById('ITcur_score2').value;
  var CSSEbed_score2 = document.getElementById('CSSEbed_score2').value;
  var CNbed_score2 = document.getElementById('CNbed_score2').value;

  var ans3 =  document.getElementById('ans3').value;
  var IT_score3 = document.getElementById('IT_score3').value;
  var ISE_score3 = document.getElementById('ISE_score3').value;
  var SE_score3 = document.getElementById('SE_score3').value;
  var CSN_score3 = document.getElementById('CSN_score3').value;
  var DS_score3 = document.getElementById('DS_score3').value;
  var CS_score3 = document.getElementById('CS_score3').value;
  var IM_score3 = document.getElementById('IM_score3').value;
  var SEcur_score3 = document.getElementById('SEcur_score3').value;
  var CSNcur_score3 = document.getElementById('CSNcur_score3').value;
  var ITcur_score3 = document.getElementById('ITcur_score3').value;
  var CSSEbed_score3 = document.getElementById('CSSEbed_score3').value;
  var CNbed_score3 = document.getElementById('CNbed_score3').value;

  var ans4 =  document.getElementById('ans4').value;
  var IT_score4 = document.getElementById('IT_score4').value;
  var ISE_score4 = document.getElementById('ISE_score4').value;
  var SE_score4 = document.getElementById('SE_score4').value;
  var CSN_score4 = document.getElementById('CSN_score4').value;
  var DS_score4 = document.getElementById('DS_score4').value;
  var CS_score4 = document.getElementById('CS_score4').value;
  var IM_score4 = document.getElementById('IM_score4').value;
  var SEcur_score4 = document.getElementById('SEcur_score4').value;
  var CSNcur_score4 = document.getElementById('CSNcur_score4').value;
  var ITcur_score4 = document.getElementById('ITcur_score4').value;
  var CSSEbed_score4 = document.getElementById('CSSEbed_score4').value;
  var CNbed_score4 = document.getElementById('CNbed_score4').value;

  var ans5 =  document.getElementById('ans5').value;
  var IT_score5 = document.getElementById('IT_score5').value;
  var ISE_score5 = document.getElementById('ISE_score5').value;
  var SE_score5 = document.getElementById('SE_score5').value;
  var CSN_score5 = document.getElementById('CSN_score5').value;
  var DS_score5 = document.getElementById('DS_score5').value;
  var CS_score5 = document.getElementById('CS_score5').value;
  var IM_score5 = document.getElementById('IM_score5').value;
  var SEcur_score5 = document.getElementById('SEcur_score5').value;
  var CSNcur_score5 = document.getElementById('CSNcur_score5').value;
  var ITcur_score5 = document.getElementById('ITcur_score5').value;
  var CSSEbed_score5 = document.getElementById('CSSEbed_score5').value;
  var CNbed_score5 = document.getElementById('CNbed_score5').value;

  var ans6 =  document.getElementById('ans6').value;
  var IT_score6 = document.getElementById('IT_score6').value;
  var ISE_score6 = document.getElementById('ISE_score6').value;
  var SE_score6 = document.getElementById('SE_score6').value;
  var CSN_score6 = document.getElementById('CSN_score6').value;
  var DS_score6 = document.getElementById('DS_score6').value;
  var CS_score6 = document.getElementById('CS_score6').value;
  var IM_score6 = document.getElementById('IM_score6').value;
  var SEcur_score6 = document.getElementById('SEcur_score6').value;
  var CSNcur_score6 = document.getElementById('CSNcur_score6').value;
  var ITcur_score6 = document.getElementById('ITcur_score6').value;
  var CSSEbed_score6 = document.getElementById('CSSEbed_score6').value;
  var CNbed_score6 = document.getElementById('CNbed_score6').value;

  var count = countAnswers();
  var comp_id = firebase.database().ref().child('QuizPartTwo_Computing').push().key;

  var data = {
    totAnswers: count,
    ans6: {"answer":ans6, "Information_Technology":IT_score6,"Informations_Systems_Engineering":ISE_score6,"Software_Engineering":SE_score6,"Computer_Systems_Networking":CSN_score6,"Data_Science":DS_score6,"Cyber_Security":CS_score6, "Interactive_Media":IM_score6, "Software_Engineering_Curtin":SEcur_score6, "Computer_Systems_and_Networking_Curtin":CSNcur_score6, "Information_Technology_Curtin":ITcur_score6, "Computer_Science_and_Software_Engineering_Bedfordshire":CSSEbed_score6, "Computer_Networking_Bedfordshire":CNbed_score6  },
    ans5: {"answer":ans5, "Information_Technology":IT_score5,"Informations_Systems_Engineering":ISE_score5,"Software_Engineering":SE_score5,"Computer_Systems_Networking":CSN_score5,"Data_Science":DS_score5,"Cyber_Security":CS_score5, "Interactive_Media":IM_score5, "Software_Engineering_Curtin":SEcur_score5, "Computer_Systems_and_Networking_Curtin":CSNcur_score5, "Information_Technology_Curtin":ITcur_score5, "Computer_Science_and_Software_Engineering_Bedfordshire":CSSEbed_score5, "Computer_Networking_Bedfordshire":CNbed_score5  },
    ans4: {"answer":ans4, "Information_Technology":IT_score4,"Informations_Systems_Engineering":ISE_score4,"Software_Engineering":SE_score4,"Computer_Systems_Networking":CSN_score4,"Data_Science":DS_score4,"Cyber_Security":CS_score4, "Interactive_Media":IM_score4, "Software_Engineering_Curtin":SEcur_score4, "Computer_Systems_and_Networking_Curtin":CSNcur_score4, "Information_Technology_Curtin":ITcur_score4, "Computer_Science_and_Software_Engineering_Bedfordshire":CSSEbed_score4, "Computer_Networking_Bedfordshire":CNbed_score4  },
    ans3: {"answer":ans3, "Information_Technology":IT_score3,"Informations_Systems_Engineering":ISE_score3,"Software_Engineering":SE_score3,"Computer_Systems_Networking":CSN_score3,"Data_Science":DS_score3,"Cyber_Security":CS_score3, "Interactive_Media":IM_score3, "Software_Engineering_Curtin":SEcur_score3, "Computer_Systems_and_Networking_Curtin":CSNcur_score3, "Information_Technology_Curtin":ITcur_score3, "Computer_Science_and_Software_Engineering_Bedfordshire":CSSEbed_score3, "Computer_Networking_Bedfordshire":CNbed_score3  },
    ans2: {"answer":ans2, "Information_Technology":IT_score2,"Informations_Systems_Engineering":ISE_score2,"Software_Engineering":SE_score2,"Computer_Systems_Networking":CSN_score2,"Data_Science":DS_score2,"Cyber_Security":CS_score2, "Interactive_Media":IM_score2, "Software_Engineering_Curtin":SEcur_score2, "Computer_Systems_and_Networking_Curtin":CSNcur_score2, "Information_Technology_Curtin":ITcur_score2, "Computer_Science_and_Software_Engineering_Bedfordshire":CSSEbed_score2, "Computer_Networking_Bedfordshire":CNbed_score2  },
    ans1: {"answer":ans1, "Information_Technology":IT_score1,"Informations_Systems_Engineering":ISE_score1,"Software_Engineering":SE_score1,"Computer_Systems_Networking":CSN_score1,"Data_Science":DS_score1,"Cyber_Security":CS_score1, "Interactive_Media":IM_score1, "Software_Engineering_Curtin":SEcur_score1, "Computer_Systems_and_Networking_Curtin":CSNcur_score1, "Information_Technology_Curtin":ITcur_score1, "Computer_Science_and_Software_Engineering_Bedfordshire":CSSEbed_score1, "Computer_Networking_Bedfordshire":CNbed_score1 },
    question:q_topic,
    comp_id: comp_id
    }
    var updates = {};
    updates['/QuizPartTwo_Computing/' + comp_id] = data;
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
      case "IT1":
          if(checkBox.checked == true){
      
              document.getElementById("IT_score1").disabled = false;
          }else{
              document.getElementById("IT_score1").disabled = true;
      
          }
          break;
      case "ISE1":
          if(checkBox.checked == true){
      
              document.getElementById("ISE_score1").disabled = false;
          }else{
              document.getElementById("ISE_score1").disabled = true;
      
          }
          break;   
      case "SE1":
          if(checkBox.checked == true){
              document.getElementById("SE_score1").disabled = false;
          }else{
              document.getElementById("SE_score1").disabled = true;
          }
          break;  
      case "CSN1":
          if(checkBox.checked == true){
              document.getElementById("CSN_score1").disabled = false;
          }else{
              document.getElementById("CSN_score1").disabled = true;
          }
          break;
      case "DS1":
          if(checkBox.checked == true){
              document.getElementById("DS_score1").disabled = false;
          }else{
              document.getElementById("DS_score1").disabled = true;
          }
          break;
      case "CS1":
          if(checkBox.checked == true){
              document.getElementById("CS_score1").disabled = false;
          }else{
              document.getElementById("CS_score1").disabled = true;
          }
          break;
      case "IM1":
          if(checkBox.checked == true){
              document.getElementById("IM_score1").disabled = false;
          }else{
              document.getElementById("IM_score1").disabled = true;
          }
          break;
      case "SEcur1":
          if(checkBox.checked == true){
              document.getElementById("SEcur_score1").disabled = false;
          }else{
              document.getElementById("SEcur_score1").disabled = true;
          }
          break;
      case "CSNcur1":
          if(checkBox.checked == true){
              document.getElementById("CSNcur_score1").disabled = false;
          }else{
              document.getElementById("CSNcur_score1").disabled = true;
          }
          break;  
      case "ITcur1":
          if(checkBox.checked == true){
              document.getElementById("ITcur_score1").disabled = false;
          }else{
              document.getElementById("ITcur_score1").disabled = true;
          }
          break; 
      case "CSSEbed1":
          if(checkBox.checked == true){
              document.getElementById("CSSEbed_score1").disabled = false;
          }else{
              document.getElementById("CSSEbed_score1").disabled = true;
          }
          break; 
      case "CNbed1":
          if(checkBox.checked == true){
              document.getElementById("CNbed_score1").disabled = false;
          }else{
              document.getElementById("CNbed_score1").disabled = true;
          }
          break;    
  }

}
function enable2(id) {
  var checkBox = document.getElementById(id);
  switch (id) {
      case "IT2":
          if(checkBox.checked == true){
      
              document.getElementById("IT_score2").disabled = false;
          }else{
              document.getElementById("IT_score2").disabled = true;
      
          }
          break;
      case "ISE2":
          if(checkBox.checked == true){
      
              document.getElementById("ISE_score2").disabled = false;
          }else{
              document.getElementById("ISE_score2").disabled = true;
      
          }
          break;   
      case "SE2":
          if(checkBox.checked == true){
              document.getElementById("SE_score2").disabled = false;
          }else{
              document.getElementById("SE_score2").disabled = true;
          }
          break;  
      case "CSN2":
          if(checkBox.checked == true){
              document.getElementById("CSN_score2").disabled = false;
          }else{
              document.getElementById("CSN_score2").disabled = true;
          }
          break;
      case "DS2":
          if(checkBox.checked == true){
              document.getElementById("DS_score2").disabled = false;
          }else{
              document.getElementById("DS_score2").disabled = true;
          }
          break;
      case "CS2":
          if(checkBox.checked == true){
              document.getElementById("CS_score2").disabled = false;
          }else{
              document.getElementById("CS_score2").disabled = true;
          }
          break; 
           case "IM2":
          if(checkBox.checked == true){
              document.getElementById("IM_score2").disabled = false;
          }else{
              document.getElementById("IM_score2").disabled = true;
          }
          break;
      case "SEcur2":
          if(checkBox.checked == true){
              document.getElementById("SEcur_score2").disabled = false;
          }else{
              document.getElementById("SEcur_score2").disabled = true;
          }
          break;
      case "CSNcur2":
          if(checkBox.checked == true){
              document.getElementById("CSNcur_score2").disabled = false;
          }else{
              document.getElementById("CSNcur_score2").disabled = true;
          }
          break;  
      case "ITcur2":
          if(checkBox.checked == true){
              document.getElementById("ITcur_score2").disabled = false;
          }else{
              document.getElementById("ITcur_score2").disabled = true;
          }
          break; 
      case "CSSEbed2":
          if(checkBox.checked == true){
              document.getElementById("CSSEbed_score2").disabled = false;
          }else{
              document.getElementById("CSSEbed_score2").disabled = true;
          }
          break; 
      case "CNbed2":
          if(checkBox.checked == true){
              document.getElementById("CNbed_score2").disabled = false;
          }else{
              document.getElementById("CNbed_score2").disabled = true;
          }
          break;     
  }

}
function enable3(id) {
  var checkBox = document.getElementById(id);
  switch (id) {
      case "IT3":
          if(checkBox.checked == true){
      
              document.getElementById("IT_score3").disabled = false;
          }else{
              document.getElementById("IT_score3").disabled = true;
      
          }
          break;
      case "ISE3":
          if(checkBox.checked == true){
      
              document.getElementById("ISE_score3").disabled = false;
          }else{
              document.getElementById("ISE_score3").disabled = true;
      
          }
          break;   
      case "SE3":
          if(checkBox.checked == true){
              document.getElementById("SE_score3").disabled = false;
          }else{
              document.getElementById("SE_score3").disabled = true;
          }
          break;  
      case "CSN3":
          if(checkBox.checked == true){
              document.getElementById("CSN_score3").disabled = false;
          }else{
              document.getElementById("CSN_score3").disabled = true;
          }
          break;
      case "DS3":
          if(checkBox.checked == true){
              document.getElementById("DS_score3").disabled = false;
          }else{
              document.getElementById("DS_score3").disabled = true;
          }
          break;
      case "CS3":
          if(checkBox.checked == true){
              document.getElementById("CS_score3").disabled = false;
          }else{
              document.getElementById("CS_score3").disabled = true;
          }
          break;    
       case "IM3":
          if(checkBox.checked == true){
              document.getElementById("IM_score3").disabled = false;
          }else{
              document.getElementById("IM_score3").disabled = true;
          }
          break;
      case "SEcur3":
          if(checkBox.checked == true){
              document.getElementById("SEcur_score3").disabled = false;
          }else{
              document.getElementById("SEcur_score3").disabled = true;
          }
          break;
      case "CSNcur3":
          if(checkBox.checked == true){
              document.getElementById("CSNcur_score3").disabled = false;
          }else{
              document.getElementById("CSNcur_score3").disabled = true;
          }
          break;  
      case "ITcur3":
          if(checkBox.checked == true){
              document.getElementById("ITcur_score3").disabled = false;
          }else{
              document.getElementById("ITcur_score3").disabled = true;
          }
          break; 
      case "CSSEbed3":
          if(checkBox.checked == true){
              document.getElementById("CSSEbed_score3").disabled = false;
          }else{
              document.getElementById("CSSEbed_score3").disabled = true;
          }
          break; 
      case "CNbed3":
          if(checkBox.checked == true){
              document.getElementById("CNbed_score3").disabled = false;
          }else{
              document.getElementById("CNbed_score3").disabled = true;
          }
          break;  
  }

}
function enable4(id) {
  var checkBox = document.getElementById(id);
  switch (id) {
      case "IT4":
          if(checkBox.checked == true){
      
              document.getElementById("IT_score4").disabled = false;
          }else{
              document.getElementById("IT_score4").disabled = true;
      
          }
          break;
      case "ISE4":
          if(checkBox.checked == true){
      
              document.getElementById("ISE_score4").disabled = false;
          }else{
              document.getElementById("ISE_score4").disabled = true;
      
          }
          break;   
      case "SE4":
          if(checkBox.checked == true){
              document.getElementById("SE_score4").disabled = false;
          }else{
              document.getElementById("SE_score4").disabled = true;
          }
          break;  
      case "CSN4":
          if(checkBox.checked == true){
              document.getElementById("CSN_score4").disabled = false;
          }else{
              document.getElementById("CSN_score4").disabled = true;
          }
          break;
      case "DS4":
          if(checkBox.checked == true){
              document.getElementById("DS_score4").disabled = false;
          }else{
              document.getElementById("DS_score4").disabled = true;
          }
          break;
      case "CS4":
          if(checkBox.checked == true){
              document.getElementById("CS_score4").disabled = false;
          }else{
              document.getElementById("CS_score4").disabled = true;
          }
          break;    
       case "IM4":
          if(checkBox.checked == true){
              document.getElementById("IM_score4").disabled = false;
          }else{
              document.getElementById("IM_score4").disabled = true;
          }
          break;
      case "SEcur4":
          if(checkBox.checked == true){
              document.getElementById("SEcur_score4").disabled = false;
          }else{
              document.getElementById("SEcur_score4").disabled = true;
          }
          break;
      case "CSNcur4":
          if(checkBox.checked == true){
              document.getElementById("CSNcur_score4").disabled = false;
          }else{
              document.getElementById("CSNcur_score4").disabled = true;
          }
          break;  
      case "ITcur4":
          if(checkBox.checked == true){
              document.getElementById("ITcur_score4").disabled = false;
          }else{
              document.getElementById("ITcur_score4").disabled = true;
          }
          break; 
      case "CSSEbed4":
          if(checkBox.checked == true){
              document.getElementById("CSSEbed_score4").disabled = false;
          }else{
              document.getElementById("CSSEbed_score4").disabled = true;
          }
          break; 
      case "CNbed4":
          if(checkBox.checked == true){
              document.getElementById("CNbed_score4").disabled = false;
          }else{
              document.getElementById("CNbed_score4").disabled = true;
          }
          break;  
  }

}
function enable5(id) {
  var checkBox = document.getElementById(id);
  switch (id) {
      case "IT5":
          if(checkBox.checked == true){
      
              document.getElementById("IT_score5").disabled = false;
          }else{
              document.getElementById("IT_score5").disabled = true;
      
          }
          break;
      case "ISE5":
          if(checkBox.checked == true){
      
              document.getElementById("ISE_score5").disabled = false;
          }else{
              document.getElementById("ISE_score5").disabled = true;
      
          }
          break;   
      case "SE5":
          if(checkBox.checked == true){
              document.getElementById("SE_score5").disabled = false;
          }else{
              document.getElementById("SE_score5").disabled = true;
          }
          break;  
      case "CSN5":
          if(checkBox.checked == true){
              document.getElementById("CSN_score5").disabled = false;
          }else{
              document.getElementById("CSN_score5").disabled = true;
          }
          break;
      case "DS5":
          if(checkBox.checked == true){
              document.getElementById("DS_score5").disabled = false;
          }else{
              document.getElementById("DS_score5").disabled = true;
          }
          break;
      case "CS5":
          if(checkBox.checked == true){
              document.getElementById("CS_score5").disabled = false;
          }else{
              document.getElementById("CS_score5").disabled = true;
          }
          break;  
       case "IM5":
          if(checkBox.checked == true){
              document.getElementById("IM_score5").disabled = false;
          }else{
              document.getElementById("IM_score5").disabled = true;
          }
          break;
      case "SEcur5":
          if(checkBox.checked == true){
              document.getElementById("SEcur_score5").disabled = false;
          }else{
              document.getElementById("SEcur_score5").disabled = true;
          }
          break;
      case "CSNcur5":
          if(checkBox.checked == true){
              document.getElementById("CSNcur_score5").disabled = false;
          }else{
              document.getElementById("CSNcur_score5").disabled = true;
          }
          break;  
      case "ITcur5":
          if(checkBox.checked == true){
              document.getElementById("ITcur_score5").disabled = false;
          }else{
              document.getElementById("ITcur_score5").disabled = true;
          }
          break; 
      case "CSSEbed5":
          if(checkBox.checked == true){
              document.getElementById("CSSEbed_score5").disabled = false;
          }else{
              document.getElementById("CSSEbed_score5").disabled = true;
          }
          break; 
      case "CNbed5":
          if(checkBox.checked == true){
              document.getElementById("CNbed_score5").disabled = false;
          }else{
              document.getElementById("CNbed_score5").disabled = true;
          }
          break;    
  }

}
function enable6(id) {
  var checkBox = document.getElementById(id);
  switch (id) {
      case "IT6":
          if(checkBox.checked == true){
      
              document.getElementById("IT_score6").disabled = false;
          }else{
              document.getElementById("IT_score6").disabled = true;
      
          }
          break;
      case "ISE6":
          if(checkBox.checked == true){
      
              document.getElementById("ISE_score6").disabled = false;
          }else{
              document.getElementById("ISE_score6").disabled = true;
      
          }
          break;   
      case "SE6":
          if(checkBox.checked == true){
              document.getElementById("SE_score6").disabled = false;
          }else{
              document.getElementById("SE_score6").disabled = true;
          }
          break;  
      case "CSN6":
          if(checkBox.checked == true){
              document.getElementById("CSN_score6").disabled = false;
          }else{
              document.getElementById("CSN_score6").disabled = true;
          }
          break;
      case "DS6":
          if(checkBox.checked == true){
              document.getElementById("DS_score6").disabled = false;
          }else{
              document.getElementById("DS_score6").disabled = true;
          }
          break;
      case "CS6":
          if(checkBox.checked == true){
              document.getElementById("CS_score6").disabled = false;
          }else{
              document.getElementById("CS_score6").disabled = true;
          }
          break;  
       case "IM6":
          if(checkBox.checked == true){
              document.getElementById("IM_score6").disabled = false;
          }else{
              document.getElementById("IM_score6").disabled = true;
          }
          break;
      case "SEcur6":
          if(checkBox.checked == true){
              document.getElementById("SEcur_score6").disabled = false;
          }else{
              document.getElementById("SEcur_score6").disabled = true;
          }
          break;
      case "CSNcur6":
          if(checkBox.checked == true){
              document.getElementById("CSNcur_score6").disabled = false;
          }else{
              document.getElementById("CSNcur_score6").disabled = true;
          }
          break;  
      case "ITcur6":
          if(checkBox.checked == true){
              document.getElementById("ITcur_score6").disabled = false;
          }else{
              document.getElementById("ITcur_score6").disabled = true;
          }
          break; 
      case "CSSEbed6":
          if(checkBox.checked == true){
              document.getElementById("CSSEbed_score6").disabled = false;
          }else{
              document.getElementById("CSSEbed_score6").disabled = true;
          }
          break; 
      case "CNbed6":
          if(checkBox.checked == true){
              document.getElementById("CNbed_score6").disabled = false;
          }else{
              document.getElementById("CNbed_score6").disabled = true;
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