var divs = ["DivAns1", "DivAns2", "DivAns3", "DivAns4","DivAns5","DivAns6"];
var i, j;
// i is to count divs, i is to count clicks
var clicks = 0;
var removeClicks = 0;
var countAns = 0;

function save_n(){
    

  var q_topic = document.getElementById('q_topic').value;

  var ans1 =  document.getElementById('ans1').value;
  var CE_score1 = document.getElementById('CE_score1').value;
  var EEE_score1 = document.getElementById('EEE_score1').value;
  var MatEng_score1 = document.getElementById('MatEng_score1').value;
  var Mech_score1 = document.getElementById('Mech_score1').value;
  var Mechatronics_score1 = document.getElementById('Mechatronics_score1').value;
  var CE_Curtin_score1 = document.getElementById('CE_Curtin_score1').value;
  var EEE_Curtin_score1 = document.getElementById('EEE_Curtin_score1').value;
  var Mech_Curtin_score1 = document.getElementById('Mech_Curtin_score1').value;
  var QS_UK_score1 = document.getElementById('QS_UK_score1').value;
 
  var ans2 =  document.getElementById('ans2').value;
  var CE_score2 = document.getElementById('CE_score2').value;
  var EEE_score2 = document.getElementById('EEE_score2').value;
  var MatEng_score2 = document.getElementById('MatEng_score2').value;
  var Mech_score2 = document.getElementById('Mech_score2').value;
  var Mechatronics_score2 = document.getElementById('Mechatronics_score2').value;
  var CE_Curtin_score2 = document.getElementById('CE_Curtin_score2').value;
  var EEE_Curtin_score2 = document.getElementById('EEE_Curtin_score2').value;
  var Mech_Curtin_score2 = document.getElementById('Mech_Curtin_score2').value;
  var QS_UK_score2 = document.getElementById('QS_UK_score2').value;
 
  var ans3 =  document.getElementById('ans3').value;
  var CE_score3 = document.getElementById('CE_score3').value;
  var EEE_score3 = document.getElementById('EEE_score3').value;
  var MatEng_score3 = document.getElementById('MatEng_score3').value;
  var Mech_score3 = document.getElementById('Mech_score3').value;
  var Mechatronics_score3 = document.getElementById('Mechatronics_score3').value;
  var CE_Curtin_score3 = document.getElementById('CE_Curtin_score3').value;
  var EEE_Curtin_score3 = document.getElementById('EEE_Curtin_score3').value;
  var Mech_Curtin_score3 = document.getElementById('Mech_Curtin_score3').value;
  var QS_UK_score3 = document.getElementById('QS_UK_score3').value;
 
  var ans4 =  document.getElementById('ans4').value;
  var CE_score4 = document.getElementById('CE_score4').value;
  var EEE_score4 = document.getElementById('EEE_score4').value;
  var MatEng_score4 = document.getElementById('MatEng_score4').value;
  var Mech_score4 = document.getElementById('Mech_score4').value;
  var Mechatronics_score4 = document.getElementById('Mechatronics_score4').value;
  var CE_Curtin_score4 = document.getElementById('CE_Curtin_score4').value;
  var EEE_Curtin_score4 = document.getElementById('EEE_Curtin_score4').value;
  var Mech_Curtin_score4 = document.getElementById('Mech_Curtin_score4').value;
  var QS_UK_score4 = document.getElementById('QS_UK_score4').value;

  var ans5 =  document.getElementById('ans5').value;
  var CE_score5 = document.getElementById('CE_score5').value;
  var EEE_score5 = document.getElementById('EEE_score5').value;
  var MatEng_score5 = document.getElementById('MatEng_score5').value;
  var Mech_score5 = document.getElementById('Mech_score5').value;
  var Mechatronics_score5 = document.getElementById('Mechatronics_score5').value;
  var CE_Curtin_score5 = document.getElementById('CE_Curtin_score5').value;
  var EEE_Curtin_score5 = document.getElementById('EEE_Curtin_score5').value;
  var Mech_Curtin_score5 = document.getElementById('Mech_Curtin_score5').value;
  var QS_UK_score5 = document.getElementById('QS_UK_score5').value;

  var ans6 =  document.getElementById('ans6').value;
  var CE_score6 = document.getElementById('CE_score6').value;
  var EEE_score6 = document.getElementById('EEE_score6').value;
  var MatEng_score6 = document.getElementById('MatEng_score6').value;
  var Mech_score6 = document.getElementById('Mech_score6').value;
  var Mechatronics_score6 = document.getElementById('Mechatronics_score6').value;
  var CE_Curtin_score6 = document.getElementById('CE_Curtin_score6').value;
  var EEE_Curtin_score6 = document.getElementById('EEE_Curtin_score6').value;
  var Mech_Curtin_score6 = document.getElementById('Mech_Curtin_score6').value;
  var QS_UK_score6 = document.getElementById('QS_UK_score6').value;

  var count = countAnswers();
  var eng_id = firebase.database().ref().child('QuizPartTwo_Engineering').push().key;

  var data = {
    totAnswers: count,
    ans6: {"answer":ans6, "BSc_Engineering_Hons_Degree_in_Civil_Engineering":CE_score6,"BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering":EEE_score6,"BSc_Engineering_Hons_Degree_in_Materials_Engineering":MatEng_score6,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering":Mech_score6,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics":Mechatronics_score6,"Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin":CE_Curtin_score6, "Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin":EEE_Curtin_score6, "Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin":Mech_Curtin_score6,"BSc_Hons_Degree_in_Quantity_Surveying_UK":QS_UK_score6},
    ans5: {"answer":ans5, "BSc_Engineering_Hons_Degree_in_Civil_Engineering":CE_score5,"BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering":EEE_score5,"BSc_Engineering_Hons_Degree_in_Materials_Engineering":MatEng_score5,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering":Mech_score5,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics":Mechatronics_score5,"Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin":CE_Curtin_score5, "Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin":EEE_Curtin_score5, "Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin":Mech_Curtin_score5,"BSc_Hons_Degree_in_Quantity_Surveying_UK":QS_UK_score5},
    ans4: {"answer":ans4, "BSc_Engineering_Hons_Degree_in_Civil_Engineering":CE_score4,"BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering":EEE_score4,"BSc_Engineering_Hons_Degree_in_Materials_Engineering":MatEng_score4,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering":Mech_score4,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics":Mechatronics_score4,"Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin":CE_Curtin_score4, "Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin":EEE_Curtin_score4, "Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin":Mech_Curtin_score4,"BSc_Hons_Degree_in_Quantity_Surveying_UK":QS_UK_score4},
    ans3: {"answer":ans3, "BSc_Engineering_Hons_Degree_in_Civil_Engineering":CE_score3,"BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering":EEE_score3,"BSc_Engineering_Hons_Degree_in_Materials_Engineering":MatEng_score3,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering":Mech_score3,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics":Mechatronics_score3,"Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin":CE_Curtin_score3, "Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin":EEE_Curtin_score3, "Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin":Mech_Curtin_score3,"BSc_Hons_Degree_in_Quantity_Surveying_UK":QS_UK_score3},
    ans2: {"answer":ans2, "BSc_Engineering_Hons_Degree_in_Civil_Engineering":CE_score2,"BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering":EEE_score2,"BSc_Engineering_Hons_Degree_in_Materials_Engineering":MatEng_score2,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering":Mech_score2,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics":Mechatronics_score2,"Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin":CE_Curtin_score2, "Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin":EEE_Curtin_score2, "Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin":Mech_Curtin_score2,"BSc_Hons_Degree_in_Quantity_Surveying_UK":QS_UK_score2},
    ans1: {"answer":ans1, "BSc_Engineering_Hons_Degree_in_Civil_Engineering":CE_score1,"BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering":EEE_score1,"BSc_Engineering_Hons_Degree_in_Materials_Engineering":MatEng_score1,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering":Mech_score1,"BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics":Mechatronics_score1,"Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin":CE_Curtin_score1, "Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin":EEE_Curtin_score1, "Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin":Mech_Curtin_score1,"BSc_Hons_Degree_in_Quantity_Surveying_UK":QS_UK_score1},
    question:q_topic,
    eng_id: eng_id
    }
    var updates = {};
    updates['/QuizPartTwo_Engineering/' + eng_id] = data;
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
      case "CE1":
          if(checkBox.checked == true){
      
              document.getElementById("CE_score1").disabled = false;
          }else{
              document.getElementById("CE_score1").disabled = true;
      
          }
          break;
      case "EEE1":
          if(checkBox.checked == true){
      
              document.getElementById("EEE_score1").disabled = false;
          }else{
              document.getElementById("EEE_score1").disabled = true;
      
          }
          break;   
      case "MatEng1":
          if(checkBox.checked == true){
              document.getElementById("MatEng_score1").disabled = false;
          }else{
              document.getElementById("MatEng_score1").disabled = true;
          }
          break;  
      case "Mech1":
          if(checkBox.checked == true){
              document.getElementById("Mech_score1").disabled = false;
          }else{
              document.getElementById("Mech_score1").disabled = true;
          }
          break;
      case "Mechatronics1":
          if(checkBox.checked == true){
              document.getElementById("Mechatronics_score1").disabled = false;
          }else{
              document.getElementById("Mechatronics_score1").disabled = true;
          }
          break;
      case "CE_Curtin1":
          if(checkBox.checked == true){
              document.getElementById("CE_Curtin_score1").disabled = false;
          }else{
              document.getElementById("CE_Curtin_score1").disabled = true;
          }
          break;
      case "EEE_Curtin1":
          if(checkBox.checked == true){
              document.getElementById("EEE_Curtin_score1").disabled = false;
          }else{
              document.getElementById("EEE_Curtin_score1").disabled = true;
          }
          break;
      case "Mech_Curtin1":
          if(checkBox.checked == true){
              document.getElementById("Mech_Curtin_score1").disabled = false;
          }else{
              document.getElementById("Mech_Curtin_score1").disabled = true;
          }
          break;
      case "QS_UK1":
          if(checkBox.checked == true){
              document.getElementById("QS_UK_score1").disabled = false;
          }else{
              document.getElementById("QS_UK_score1").disabled = true;
          }
          break;  
  }

}

function enable2(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "CE2":
            if(checkBox.checked == true){
        
                document.getElementById("CE_score2").disabled = false;
            }else{
                document.getElementById("CE_score2").disabled = true;
        
            }
            break;
        case "EEE2":
            if(checkBox.checked == true){
        
                document.getElementById("EEE_score2").disabled = false;
            }else{
                document.getElementById("EEE_score2").disabled = true;
        
            }
            break;   
        case "MatEng2":
            if(checkBox.checked == true){
                document.getElementById("MatEng_score2").disabled = false;
            }else{
                document.getElementById("MatEng_score2").disabled = true;
            }
            break;  
        case "Mech2":
            if(checkBox.checked == true){
                document.getElementById("Mech_score2").disabled = false;
            }else{
                document.getElementById("Mech_score2").disabled = true;
            }
            break;
        case "Mechatronics2":
            if(checkBox.checked == true){
                document.getElementById("Mechatronics_score2").disabled = false;
            }else{
                document.getElementById("Mechatronics_score2").disabled = true;
            }
            break;
        case "CE_Curtin2":
            if(checkBox.checked == true){
                document.getElementById("CE_Curtin_score2").disabled = false;
            }else{
                document.getElementById("CE_Curtin_score2").disabled = true;
            }
            break;
        case "EEE_Curtin2":
            if(checkBox.checked == true){
                document.getElementById("EEE_Curtin_score2").disabled = false;
            }else{
                document.getElementById("EEE_Curtin_score2").disabled = true;
            }
            break;
        case "Mech_Curtin2":
            if(checkBox.checked == true){
                document.getElementById("Mech_Curtin_score2").disabled = false;
            }else{
                document.getElementById("Mech_Curtin_score2").disabled = true;
            }
            break;
        case "QS_UK2":
            if(checkBox.checked == true){
                document.getElementById("QS_UK_score2").disabled = false;
            }else{
                document.getElementById("QS_UK_score2").disabled = true;
            }
            break;  
    }
  
  }
  
  function enable3(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "CE3":
            if(checkBox.checked == true){
        
                document.getElementById("CE_score3").disabled = false;
            }else{
                document.getElementById("CE_score3").disabled = true;
        
            }
            break;
        case "EEE3":
            if(checkBox.checked == true){
        
                document.getElementById("EEE_score3").disabled = false;
            }else{
                document.getElementById("EEE_score3").disabled = true;
        
            }
            break;   
        case "MatEng3":
            if(checkBox.checked == true){
                document.getElementById("MatEng_score3").disabled = false;
            }else{
                document.getElementById("MatEng_score3").disabled = true;
            }
            break;  
        case "Mech3":
            if(checkBox.checked == true){
                document.getElementById("Mech_score3").disabled = false;
            }else{
                document.getElementById("Mech_score3").disabled = true;
            }
            break;
        case "Mechatronics3":
            if(checkBox.checked == true){
                document.getElementById("Mechatronics_score3").disabled = false;
            }else{
                document.getElementById("Mechatronics_score3").disabled = true;
            }
            break;
        case "CE_Curtin3":
            if(checkBox.checked == true){
                document.getElementById("CE_Curtin_score3").disabled = false;
            }else{
                document.getElementById("CE_Curtin_score3").disabled = true;
            }
            break;
        case "EEE_Curtin3":
            if(checkBox.checked == true){
                document.getElementById("EEE_Curtin_score3").disabled = false;
            }else{
                document.getElementById("EEE_Curtin_score3").disabled = true;
            }
            break;
        case "Mech_Curtin3":
            if(checkBox.checked == true){
                document.getElementById("Mech_Curtin_score3").disabled = false;
            }else{
                document.getElementById("Mech_Curtin_score3").disabled = true;
            }
            break;
        case "QS_UK3":
            if(checkBox.checked == true){
                document.getElementById("QS_UK_score3").disabled = false;
            }else{
                document.getElementById("QS_UK_score3").disabled = true;
            }
            break;  
    }
  
  }
  
  function enable4(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "CE4":
            if(checkBox.checked == true){
        
                document.getElementById("CE_score4").disabled = false;
            }else{
                document.getElementById("CE_score4").disabled = true;
        
            }
            break;
        case "EEE4":
            if(checkBox.checked == true){
        
                document.getElementById("EEE_score4").disabled = false;
            }else{
                document.getElementById("EEE_score4").disabled = true;
        
            }
            break;   
        case "MatEng4":
            if(checkBox.checked == true){
                document.getElementById("MatEng_score4").disabled = false;
            }else{
                document.getElementById("MatEng_score4").disabled = true;
            }
            break;  
        case "Mech4":
            if(checkBox.checked == true){
                document.getElementById("Mech_score4").disabled = false;
            }else{
                document.getElementById("Mech_score4").disabled = true;
            }
            break;
        case "Mechatronics4":
            if(checkBox.checked == true){
                document.getElementById("Mechatronics_score4").disabled = false;
            }else{
                document.getElementById("Mechatronics_score4").disabled = true;
            }
            break;
        case "CE_Curtin4":
            if(checkBox.checked == true){
                document.getElementById("CE_Curtin_score4").disabled = false;
            }else{
                document.getElementById("CE_Curtin_score4").disabled = true;
            }
            break;
        case "EEE_Curtin4":
            if(checkBox.checked == true){
                document.getElementById("EEE_Curtin_score4").disabled = false;
            }else{
                document.getElementById("EEE_Curtin_score4").disabled = true;
            }
            break;
        case "Mech_Curtin4":
            if(checkBox.checked == true){
                document.getElementById("Mech_Curtin_score4").disabled = false;
            }else{
                document.getElementById("Mech_Curtin_score4").disabled = true;
            }
            break;
        case "QS_UK4":
            if(checkBox.checked == true){
                document.getElementById("QS_UK_score4").disabled = false;
            }else{
                document.getElementById("QS_UK_score4").disabled = true;
            }
            break;  
    }
  
  }
  
  function enable5(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "CE5":
            if(checkBox.checked == true){
        
                document.getElementById("CE_score5").disabled = false;
            }else{
                document.getElementById("CE_score5").disabled = true;
        
            }
            break;
        case "EEE5":
            if(checkBox.checked == true){
        
                document.getElementById("EEE_score5").disabled = false;
            }else{
                document.getElementById("EEE_score5").disabled = true;
        
            }
            break;   
        case "MatEng5":
            if(checkBox.checked == true){
                document.getElementById("MatEng_score5").disabled = false;
            }else{
                document.getElementById("MatEng_score5").disabled = true;
            }
            break;  
        case "Mech5":
            if(checkBox.checked == true){
                document.getElementById("Mech_score5").disabled = false;
            }else{
                document.getElementById("Mech_score5").disabled = true;
            }
            break;
        case "Mechatronics5":
            if(checkBox.checked == true){
                document.getElementById("Mechatronics_score5").disabled = false;
            }else{
                document.getElementById("Mechatronics_score5").disabled = true;
            }
            break;
        case "CE_Curtin5":
            if(checkBox.checked == true){
                document.getElementById("CE_Curtin_score5").disabled = false;
            }else{
                document.getElementById("CE_Curtin_score5").disabled = true;
            }
            break;
        case "EEE_Curtin5":
            if(checkBox.checked == true){
                document.getElementById("EEE_Curtin_score5").disabled = false;
            }else{
                document.getElementById("EEE_Curtin_score5").disabled = true;
            }
            break;
        case "Mech_Curtin5":
            if(checkBox.checked == true){
                document.getElementById("Mech_Curtin_score5").disabled = false;
            }else{
                document.getElementById("Mech_Curtin_score5").disabled = true;
            }
            break;
        case "QS_UK5":
            if(checkBox.checked == true){
                document.getElementById("QS_UK_score5").disabled = false;
            }else{
                document.getElementById("QS_UK_score5").disabled = true;
            }
            break;  
    }
  
  }
  
  function enable6(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "CE6":
            if(checkBox.checked == true){
        
                document.getElementById("CE_score6").disabled = false;
            }else{
                document.getElementById("CE_score6").disabled = true;
        
            }
            break;
        case "EEE6":
            if(checkBox.checked == true){
        
                document.getElementById("EEE_score6").disabled = false;
            }else{
                document.getElementById("EEE_score6").disabled = true;
        
            }
            break;   
        case "MatEng6":
            if(checkBox.checked == true){
                document.getElementById("MatEng_score6").disabled = false;
            }else{
                document.getElementById("MatEng_score6").disabled = true;
            }
            break;  
        case "Mech6":
            if(checkBox.checked == true){
                document.getElementById("Mech_score6").disabled = false;
            }else{
                document.getElementById("Mech_score6").disabled = true;
            }
            break;
        case "Mechatronics6":
            if(checkBox.checked == true){
                document.getElementById("Mechatronics_score6").disabled = false;
            }else{
                document.getElementById("Mechatronics_score6").disabled = true;
            }
            break;
        case "CE_Curtin6":
            if(checkBox.checked == true){
                document.getElementById("CE_Curtin_score6").disabled = false;
            }else{
                document.getElementById("CE_Curtin_score6").disabled = true;
            }
            break;
        case "EEE_Curtin6":
            if(checkBox.checked == true){
                document.getElementById("EEE_Curtin_score6").disabled = false;
            }else{
                document.getElementById("EEE_Curtin_score6").disabled = true;
            }
            break;
        case "Mech_Curtin6":
            if(checkBox.checked == true){
                document.getElementById("Mech_Curtin_score6").disabled = false;
            }else{
                document.getElementById("Mech_Curtin_score6").disabled = true;
            }
            break;
        case "QS_UK6":
            if(checkBox.checked == true){
                document.getElementById("QS_UK_score6").disabled = false;
            }else{
                document.getElementById("QS_UK_score6").disabled = true;
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