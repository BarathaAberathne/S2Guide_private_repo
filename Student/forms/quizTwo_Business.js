(function() {
    //var databaseRef = firebase.database().ref('quiz/');
    //var rowIndex = 1;
  
    //databaseRef.once('value', function(snapshot) {
    // snapshot.forEach(function(childSnapshot) {
    // var childKey = childSnapshot.key;
    //var childData = childSnapshot.val();
    //var q = childData.q_topic;
    // });
    // });
    var tot_AF = 0;
    var tot_BA = 0;
    var tot_BM = 0;
    var tot_MM = 0;
    var tot_HCM = 0;
    var tot_LSCM = 0;
    var tot_MIS = 0;
    var tot_B_Admin_UK = 0;
    var tot_BA_Topup = 0;

    var databaseRef = firebase
      .database()
      .ref("QuizPartTwo_Business/")
      .orderByKey();
    var quesCounter = 0;
    //this is out of the firebase iteration loop
    var allQuestions = [];
    databaseRef.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        console.log(childData);
        //we push each question object into the array
        allQuestions.push({
          question: childData.question,
          options: [
            childData.ans1.answer,
            childData.ans2.answer,
            childData.ans3.answer,
            childData.ans4.answer,
            childData.ans5.answer,
            childData.ans6.answer,
  
          ],
          AF_score: [
            childData.ans1.BBA_Hons_Degree_sp_in_Accounting_and_Finance,
            childData.ans2.BBA_Hons_Degree_sp_in_Accounting_and_Finance,
            childData.ans3.BBA_Hons_Degree_sp_in_Accounting_and_Finance,
            childData.ans4.BBA_Hons_Degree_sp_in_Accounting_and_Finance,
            childData.ans5.BBA_Hons_Degree_sp_in_Accounting_and_Finance,
            childData.ans6.BBA_Hons_Degree_sp_in_Accounting_and_Finance,
          ],
          BA_score: [
            childData.ans1.BBA_Hons_Degree_sp_in_Business_Analytics,
            childData.ans2.BBA_Hons_Degree_sp_in_Business_Analytics,
            childData.ans3.BBA_Hons_Degree_sp_in_Business_Analytics,
            childData.ans4.BBA_Hons_Degree_sp_in_Business_Analytics,
            childData.ans5.BBA_Hons_Degree_sp_in_Business_Analytics,
            childData.ans6.BBA_Hons_Degree_sp_in_Business_Analytics,
          ],
          BM_score: [
            childData.ans1.BBA_Hons_Degree_sp_in_Business_Management,
            childData.ans2.BBA_Hons_Degree_sp_in_Business_Management,
            childData.ans3.BBA_Hons_Degree_sp_in_Business_Management,
            childData.ans4.BBA_Hons_Degree_sp_in_Business_Management,
            childData.ans5.BBA_Hons_Degree_sp_in_Business_Management,
            childData.ans6.BBA_Hons_Degree_sp_in_Business_Management,
          ],
        
          MM_score: [
            childData.ans1.BBA_Hons_Degree_sp_in_Marketing_Management,
            childData.ans2.BBA_Hons_Degree_sp_in_Marketing_Management,
            childData.ans3.BBA_Hons_Degree_sp_in_Marketing_Management,
            childData.ans4.BBA_Hons_Degree_sp_in_Marketing_Management,
            childData.ans5.BBA_Hons_Degree_sp_in_Marketing_Management,
            childData.ans6.BBA_Hons_Degree_sp_in_Marketing_Management,
          ],
          HCM_score: [
            childData.ans1.BBA_Hons_Degree_sp_in_Human_Capital_Management,
            childData.ans2.BBA_Hons_Degree_sp_in_Human_Capital_Management,
            childData.ans3.BBA_Hons_Degree_sp_in_Human_Capital_Management,
            childData.ans4.BBA_Hons_Degree_sp_in_Human_Capital_Management,
            childData.ans5.BBA_Hons_Degree_sp_in_Human_Capital_Management,
            childData.ans6.BBA_Hons_Degree_sp_in_Human_Capital_Management,
          ],
          LSCM_score: [
            childData.ans1.BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management,
            childData.ans2.BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management,
            childData.ans3.BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management,
            childData.ans4.BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management,
            childData.ans5.BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management,
            childData.ans6.BBA_Hons_Degree_sp_in_Logistics_and_Supply_Chain_Management,
          ],

          MIS_score: [
            childData.ans1.BBA_Hons_Degree_sp_in_Management_Information_Systems,
            childData.ans2.BBA_Hons_Degree_sp_in_Management_Information_Systems,
            childData.ans3.BBA_Hons_Degree_sp_in_Management_Information_Systems,
            childData.ans4.BBA_Hons_Degree_sp_in_Management_Information_Systems,
            childData.ans5.BBA_Hons_Degree_sp_in_Management_Information_Systems,
            childData.ans6.BBA_Hons_Degree_sp_in_Management_Information_Systems,
          ],
          B_Admin_UK_score: [
            childData.ans1.BBA_Hons_Business_Administration_UK,
            childData.ans2.BBA_Hons_Business_Administration_UK,
            childData.ans3.BBA_Hons_Business_Administration_UK,
            childData.ans4.BBA_Hons_Business_Administration_UK,
            childData.ans5.BBA_Hons_Business_Administration_UK,
            childData.ans6.BBA_Hons_Business_Administration_UK,
          ],
          BA_Topup_score: [
            childData.ans1.BA_Hons_in_Business_Administration_Top_up_UK,
            childData.ans2.BA_Hons_in_Business_Administration_Top_up_UK,
            childData.ans3.BA_Hons_in_Business_Administration_Top_up_UK,
            childData.ans4.BA_Hons_in_Business_Administration_Top_up_UK,
            childData.ans5.BA_Hons_in_Business_Administration_Top_up_UK,
            childData.ans6.BA_Hons_in_Business_Administration_Top_up_UK,
          ]
        });
      });
  
    
      var selectOptions = [];
      var quizSpace = $("#quiz");
  
      nextQuestion();
  
      $("#next").click(function() {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) {
          alert("Please select an option !");
        } else {
          quesCounter++;
          nextQuestion();
        }
      });
  
      $("#prev").click(function() {
        chooseOption();
        quesCounter--;
        nextQuestion();
      });
  
      function createElement(index) {
        var element = $("<div>", { id: "question" });
        var header = $("<h3>Question No. " + (index + 1) + " :</h3>");
        element.append(header);
  
        var question = $("<h2>").append(allQuestions[index].question);
        element.append(question);
  
        var radio = radioButtons(index);
        element.append(radio);
  
        return element;
      }
  
      function radioButtons(index) {
        var radioItems = $("<ul>	");
        var item;
        var input = "";
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          if (allQuestions[index].options[i] != ""){
             item = $("<p>");
          input = '<h3><input type="radio" name="answer" value=' + i + " />";
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
          }
         
        }
        return radioItems;
      }
  
      function chooseOption() {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
      }
  
      function nextQuestion() {
        quizSpace.fadeOut(function() {
          $("#question").remove();
          if (quesCounter < allQuestions.length) {
            var nextQuestion = createElement(quesCounter);
            quizSpace.append(nextQuestion).fadeIn();
            if (!isNaN(selectOptions[quesCounter])) {
              $("input[value=" + selectOptions[quesCounter] + "]").prop(
                "checked",
                true
              );
            }
            if (quesCounter === 1) {
              $("#prev").show();
            } else if (quesCounter === 0) {
              $("#prev").hide();
              $("#next").show();
            }
          } else {
            var scoreRslt = displayResult();
            quizSpace.append(scoreRslt).fadeIn();
            $("#next").hide();
            $("#prev").hide();
          }
        });
      }
      var count = 0;
      for(count = 0; count <6; count++){
      
       
      }
      function displayResult() {
        var score = $("<p>", { id: "question" });
       
   
          var correct = 0;
          for (var i = 0; i < selectOptions.length; i++) 
          {
            if (selectOptions[i] === 0 ) 
            {
              if(allQuestions[i].AF_score[0] == ""){
                allQuestions[i].AF_score[0] = 0;
               } 
  
              if(allQuestions[i].BA_score[0] == ""){
                allQuestions[i].BA_score[0] = 0;
               } 
  
               if(allQuestions[i].BM_score[0] == ""){
                allQuestions[i].BM_score[0] = 0;
               } 
  
               if(allQuestions[i].MM_score[0] == ""){
                allQuestions[i].MM_score[0] = 0;
               } 
               if(allQuestions[i].HCM_score[0] == ""){
                allQuestions[i].HCM_score[0] = 0;
               } 
               if(allQuestions[i].LSCM_score[0] == ""){
                allQuestions[i].LSCM_score[0] = 0;
               } 
              
               if(allQuestions[i].MIS_score[0] == ""){
                allQuestions[i].MIS_score[0] = 0;
               }

               if(allQuestions[i].B_Admin_UK_score[0] == ""){
                allQuestions[i].B_Admin_UK_score[0] = 0;
               }

               if(allQuestions[i].BA_Topup_score[0] == ""){
                allQuestions[i].BA_Topup_score[0] = 0;
               }

               tot_AF = tot_AF + parseInt(allQuestions[i].AF_score[0]);
               tot_BA = tot_BA + parseInt(allQuestions[i].BA_score[0]);
               tot_BM = tot_BM + parseInt(allQuestions[i].BM_score[0]);
               tot_MM = tot_MM + parseInt(allQuestions[i].MM_score[0]);
               tot_HCM = tot_HCM + parseInt(allQuestions[i].HCM_score[0]);
               tot_LSCM = tot_LSCM + parseInt(allQuestions[i].LSCM_score[0]);
               tot_MIS = tot_MIS + parseInt(allQuestions[i].MIS_score[0]);
               tot_B_Admin_UK = tot_B_Admin_UK + parseInt(allQuestions[i].B_Admin_UK_score[0]) ;
               tot_BA_Topup = tot_BA_Topup + parseInt(allQuestions[i].BA_Topup_score[0]);
  
            }
            if (selectOptions[i] === 1 ) 
            {
              if(allQuestions[i].AF_score[1] == ""){
                allQuestions[i].AF_score[1] = 0;
               } 
  
              if(allQuestions[i].BA_score[1] == ""){
                allQuestions[i].BA_score[1] = 0;
               } 
  
               if(allQuestions[i].BM_score[1] == ""){
                allQuestions[i].BM_score[1] = 0;
               } 
  
               if(allQuestions[i].MM_score[1] == ""){
                allQuestions[i].MM_score[1] = 0;
               } 
               if(allQuestions[i].HCM_score[1] == ""){
                allQuestions[i].HCM_score[1] = 0;
               } 
               if(allQuestions[i].LSCM_score[1] == ""){
                allQuestions[i].LSCM_score[1] = 0;
               } 
              
               if(allQuestions[i].MIS_score[1] == ""){
                allQuestions[i].MIS_score[1] = 0;
               }

               if(allQuestions[i].B_Admin_UK_score[1] == ""){
                allQuestions[i].B_Admin_UK_score[1] = 0;
               }

               if(allQuestions[i].BA_Topup_score[1] == ""){
                allQuestions[i].BA_Topup_score[1] = 0;
               }
         

               tot_AF = tot_AF + parseInt(allQuestions[i].AF_score[1]);
               tot_BA = tot_BA + parseInt(allQuestions[i].BA_score[1]);
               tot_BM = tot_BM + parseInt(allQuestions[i].BM_score[1]);
               tot_MM = tot_MM + parseInt(allQuestions[i].MM_score[1]);
               tot_HCM = tot_HCM + parseInt(allQuestions[i].HCM_score[1]);
               tot_LSCM = tot_LSCM + parseInt(allQuestions[i].LSCM_score[1]);
               tot_MIS = tot_MIS + parseInt(allQuestions[i].MIS_score[1]);
               tot_B_Admin_UK = tot_B_Admin_UK + parseInt(allQuestions[i].B_Admin_UK_score[1]) ;
               tot_BA_Topup = tot_BA_Topup + parseInt(allQuestions[i].BA_Topup_score[1]);
            }
            if (selectOptions[i] === 2 ) 
            {
              if(allQuestions[i].AF_score[2] == ""){
                allQuestions[i].AF_score[2] = 0;
               } 
  
              if(allQuestions[i].BA_score[2] == ""){
                allQuestions[i].BA_score[2] = 0;
               } 
  
               if(allQuestions[i].BM_score[2] == ""){
                allQuestions[i].BM_score[2] = 0;
               } 
  
               if(allQuestions[i].MM_score[2] == ""){
                allQuestions[i].MM_score[2] = 0;
               } 
               if(allQuestions[i].HCM_score[2] == ""){
                allQuestions[i].HCM_score[2] = 0;
               } 
               if(allQuestions[i].LSCM_score[2] == ""){
                allQuestions[i].LSCM_score[2] = 0;
               } 
              
               if(allQuestions[i].MIS_score[2] == ""){
                allQuestions[i].MIS_score[2] = 0;
               }

               if(allQuestions[i].B_Admin_UK_score[2] == ""){
                allQuestions[i].B_Admin_UK_score[2] = 0;
               }

               if(allQuestions[i].BA_Topup_score[2] == ""){
                allQuestions[i].BA_Topup_score[2] = 0;
               }
              
              
               tot_AF = tot_AF + parseInt(allQuestions[i].AF_score[2]);
               tot_BA = tot_BA + parseInt(allQuestions[i].BA_score[2]);
               tot_BM = tot_BM + parseInt(allQuestions[i].BM_score[2]);
               tot_MM = tot_MM + parseInt(allQuestions[i].MM_score[2]);
               tot_HCM = tot_HCM + parseInt(allQuestions[i].HCM_score[2]);
               tot_LSCM = tot_LSCM + parseInt(allQuestions[i].LSCM_score[2]);
               tot_MIS = tot_MIS + parseInt(allQuestions[i].MIS_score[2]);
               tot_B_Admin_UK = tot_B_Admin_UK + parseInt(allQuestions[i].B_Admin_UK_score[2]) ;
               tot_BA_Topup = tot_BA_Topup + parseInt(allQuestions[i].BA_Topup_score[2]);
            
            }
            if (selectOptions[i] === 3 ) 
            {
              if(allQuestions[i].AF_score[3] == ""){
                allQuestions[i].AF_score[3] = 0;
               } 
  
              if(allQuestions[i].BA_score[3] == ""){
                allQuestions[i].BA_score[3] = 0;
               } 
  
               if(allQuestions[i].BM_score[3] == ""){
                allQuestions[i].BM_score[3] = 0;
               } 
  
               if(allQuestions[i].MM_score[3] == ""){
                allQuestions[i].MM_score[3] = 0;
               } 
               if(allQuestions[i].HCM_score[3] == ""){
                allQuestions[i].HCM_score[3] = 0;
               } 
               if(allQuestions[i].LSCM_score[3] == ""){
                allQuestions[i].LSCM_score[3] = 0;
               } 
              
               if(allQuestions[i].MIS_score[3] == ""){
                allQuestions[i].MIS_score[3] = 0;
               }

               if(allQuestions[i].B_Admin_UK_score[3] == ""){
                allQuestions[i].B_Admin_UK_score[3] = 0;
               }

               if(allQuestions[i].BA_Topup_score[3] == ""){
                allQuestions[i].BA_Topup_score[3] = 0;
               }
                   
               
               tot_AF = tot_AF + parseInt(allQuestions[i].AF_score[3]);
               tot_BA = tot_BA + parseInt(allQuestions[i].BA_score[3]);
               tot_BM = tot_BM + parseInt(allQuestions[i].BM_score[3]);
               tot_MM = tot_MM + parseInt(allQuestions[i].MM_score[3]);
               tot_HCM = tot_HCM + parseInt(allQuestions[i].HCM_score[3]);
               tot_LSCM = tot_LSCM + parseInt(allQuestions[i].LSCM_score[3]);
               tot_MIS = tot_MIS + parseInt(allQuestions[i].MIS_score[3]);
               tot_B_Admin_UK = tot_B_Admin_UK + parseInt(allQuestions[i].B_Admin_UK_score[3]) ;
               tot_BA_Topup = tot_BA_Topup + parseInt(allQuestions[i].BA_Topup_score[3]);
            
            }
            if (selectOptions[i] === 4 ) 
            {
              if(allQuestions[i].AF_score[4] == ""){
                allQuestions[i].AF_score[4] = 0;
               } 
  
              if(allQuestions[i].BA_score[4] == ""){
                allQuestions[i].BA_score[4] = 0;
               } 
  
               if(allQuestions[i].BM_score[4] == ""){
                allQuestions[i].BM_score[4] = 0;
               } 
  
               if(allQuestions[i].MM_score[4] == ""){
                allQuestions[i].MM_score[4] = 0;
               } 
               if(allQuestions[i].HCM_score[4] == ""){
                allQuestions[i].HCM_score[4] = 0;
               } 
               if(allQuestions[i].LSCM_score[4] == ""){
                allQuestions[i].LSCM_score[4] = 0;
               } 
              
               if(allQuestions[i].MIS_score[4] == ""){
                allQuestions[i].MIS_score[4] = 0;
               }

               if(allQuestions[i].B_Admin_UK_score[4] == ""){
                allQuestions[i].B_Admin_UK_score[4] = 0;
               }

               if(allQuestions[i].BA_Topup_score[4] == ""){
                allQuestions[i].BA_Topup_score[4] = 0;
               }
          
              
               tot_AF = tot_AF + parseInt(allQuestions[i].AF_score[4]);
               tot_BA = tot_BA + parseInt(allQuestions[i].BA_score[4]);
               tot_BM = tot_BM + parseInt(allQuestions[i].BM_score[4]);
               tot_MM = tot_MM + parseInt(allQuestions[i].MM_score[4]);
               tot_HCM = tot_HCM + parseInt(allQuestions[i].HCM_score[4]);
               tot_LSCM = tot_LSCM + parseInt(allQuestions[i].LSCM_score[4]);
               tot_MIS = tot_MIS + parseInt(allQuestions[i].MIS_score[4]);
               tot_B_Admin_UK = tot_B_Admin_UK + parseInt(allQuestions[i].B_Admin_UK_score[4]) ;
               tot_BA_Topup = tot_BA_Topup + parseInt(allQuestions[i].BA_Topup_score[4]);
            
              
            }
            if (selectOptions[i] === 5 ) 
            {
              if(allQuestions[i].AF_score[5] == ""){
                allQuestions[i].AF_score[5] = 0;
               } 
  
              if(allQuestions[i].BA_score[5] == ""){
                allQuestions[i].BA_score[5] = 0;
               } 
  
               if(allQuestions[i].BM_score[5] == ""){
                allQuestions[i].BM_score[5] = 0;
               } 
  
               if(allQuestions[i].MM_score[5] == ""){
                allQuestions[i].MM_score[5] = 0;
               } 
               if(allQuestions[i].HCM_score[5] == ""){
                allQuestions[i].HCM_score[5] = 0;
               } 
               if(allQuestions[i].LSCM_score[5] == ""){
                allQuestions[i].LSCM_score[5] = 0;
               } 
              
               if(allQuestions[i].MIS_score[5] == ""){
                allQuestions[i].MIS_score[5] = 0;
               }

               if(allQuestions[i].B_Admin_UK_score[5] == ""){
                allQuestions[i].B_Admin_UK_score[5] = 0;
               }

               if(allQuestions[i].BA_Topup_score[5] == ""){
                allQuestions[i].BA_Topup_score[5] = 0;
               }
                          
               
               tot_AF = tot_AF + parseInt(allQuestions[i].AF_score[5]);
               tot_BA = tot_BA + parseInt(allQuestions[i].BA_score[5]);
               tot_BM = tot_BM + parseInt(allQuestions[i].BM_score[5]);
               tot_MM = tot_MM + parseInt(allQuestions[i].MM_score[5]);
               tot_HCM = tot_HCM + parseInt(allQuestions[i].HCM_score[5]);
               tot_LSCM = tot_LSCM + parseInt(allQuestions[i].LSCM_score[5]);
               tot_MIS = tot_MIS + parseInt(allQuestions[i].MIS_score[5]);
               tot_B_Admin_UK = tot_B_Admin_UK + parseInt(allQuestions[i].B_Admin_UK_score[5]) ;
               tot_BA_Topup = tot_BA_Topup + parseInt(allQuestions[i].BA_Topup_score[5]);
            
          }
        }
        var array = [tot_AF, tot_BA, tot_BM, tot_MM, tot_HCM, tot_LSCM, tot_MIS, tot_B_Admin_UK, tot_BA_Topup];
        var best = Math.max.apply(null, array); 

        var degree_name = [];
        
         
        if(best == tot_AF){
          degree_name.push("BBA(Hons) Degree sp in Accounting and Finance");
        }
        if(best == tot_BA){
          degree_name.push("BBA(Hons) Degree sp in Business Analytics");
        }
        if(best == tot_BM){
          degree_name.push("BBA(Hons) Degree sp in Business Management");
        }
        if(best == tot_MM){
          degree_name.push("BBA(Hons) Degree sp in Marketing Management");
        }
        if(best == tot_HCM){
          degree_name.push("BBA(Hons) Degree sp in Human Capital Management");
        }
        if(best == tot_LSCM){
          degree_name.push("BBA(Hons) Degree sp in Logistics and Supply Chain Management");
        }
        if(best == tot_MIS){
          degree_name.push("BBA(Hons) Degree sp in Management Information Systems");
        }
        if(best == tot_B_Admin_UK){
          degree_name.push("BBA(Hons) Business Administration(UK)");
        }
        if(best == tot_BA_Topup){
          degree_name.push("BA(Hons) in Business Administration Topup(UK)");
        }
       
        
        score.append("Your most suitable degree is: " +  degree_name   + " with " + (best)   + "Points </br>");
        score.append("You scored for BBA(Hons) Degree sp in Accounting and Finance: " +  (tot_AF)   + "Points </br>");
        score.append("You scored for BBA(Hons) Degree sp in Business Analytics: " +  (tot_BA)   + "Points </br>");
        score.append("You scored for BBA(Hons) Degree sp in Business Management: " +  (tot_BM)   + "Points </br>");
        score.append("You scored for BBA(Hons) Degree sp in Marketing Management: " +  (tot_MM)   + "Points </br>");
        score.append("You scored for BBA(Hons) Degree sp in Human Capital Management: " +  (tot_HCM)   + "Points </br> ");
        score.append("You scored for BBA(Hons) Degree sp in Logistics and Supply Chain Management: " +  (tot_LSCM)   + "Points </br> ");
        score.append("You scored for BBA(Hons) Degree sp in Management Information Systems: " +  (tot_MIS)   + "Points </br> ");
        score.append("You scored for BBA(Hons) Business Administration(UK): " +  (tot_B_Admin_UK)   + "Points </br> ");
        score.append("You scored for BA(Hons) in Business Administration Topup(UK): " +  (tot_BA_Topup)   + "Points </br> ");

        return score;
      }
    });
  })();
  