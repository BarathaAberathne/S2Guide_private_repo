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
    var tot_BPS = 0;
    var tot_BBS = 0;
    var tot_BBT = 0;
    var tot_BPsy = 0;
    var tot_BNurse = 0;
    var tot_LLB = 0;

    var databaseRef = firebase
      .database()
      .ref("QuizPartTwo_Humanities/")
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
          BPS_score: [
            childData.ans1.BEd_Hons_in_Physical_Sciences,
            childData.ans2.BEd_Hons_in_Physical_Sciences,
            childData.ans3.BEd_Hons_in_Physical_Sciences,
            childData.ans4.BEd_Hons_in_Physical_Sciences,
            childData.ans5.BEd_Hons_in_Physical_Sciences,
            childData.ans6.BEd_Hons_in_Physical_Sciences,
          ],
          BBS_score: [
            childData.ans1.BEd_Hons_in_Biological_Sciences,
            childData.ans2.BEd_Hons_in_Biological_Sciences,
            childData.ans3.BEd_Hons_in_Biological_Sciences,
            childData.ans4.BEd_Hons_in_Biological_Sciences,
            childData.ans5.BEd_Hons_in_Biological_Sciences,
            childData.ans6.BEd_Hons_in_Biological_Sciences,
          ],
          BBT_score: [
            childData.ans1.BSc_Hons_in_Bio_Technology,
            childData.ans2.BSc_Hons_in_Bio_Technology,
            childData.ans3.BSc_Hons_in_Bio_Technology,
            childData.ans4.BSc_Hons_in_Bio_Technology,
            childData.ans5.BSc_Hons_in_Bio_Technology,
            childData.ans6.BSc_Hons_in_Bio_Technology,
          ],
        
          BPsy_score: [
            childData.ans1.BSc_Hons_Psychology_UK,
            childData.ans2.BSc_Hons_Psychology_UK,
            childData.ans3.BSc_Hons_Psychology_UK,
            childData.ans4.BSc_Hons_Psychology_UK,
            childData.ans5.BSc_Hons_Psychology_UK,
            childData.ans6.BSc_Hons_Psychology_UK,
          ],
          BNurse_score: [
            childData.ans1.BSc_Hons_Nursing_UK,
            childData.ans2.BSc_Hons_Nursing_UK,
            childData.ans3.BSc_Hons_Nursing_UK,
            childData.ans4.BSc_Hons_Nursing_UK,
            childData.ans5.BSc_Hons_Nursing_UK,
            childData.ans6.BSc_Hons_Nursing_UK,
          ],
          LLB_score: [
            childData.ans1.LLB_Hons_Law_UK,
            childData.ans2.LLB_Hons_Law_UK,
            childData.ans3.LLB_Hons_Law_UK,
            childData.ans4.LLB_Hons_Law_UK,
            childData.ans5.LLB_Hons_Law_UK,
            childData.ans6.LLB_Hons_Law_UK,
          ],

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
              if(allQuestions[i].BPS_score[0] == ""){
                allQuestions[i].BPS_score[0] = 0;
               } 
  
              if(allQuestions[i].BBS_score[0] == ""){
                allQuestions[i].BBS_score[0] = 0;
               } 
  
               if(allQuestions[i].BBT_score[0] == ""){
                allQuestions[i].BBT_score[0] = 0;
               } 
  
               if(allQuestions[i].BPsy_score[0] == ""){
                allQuestions[i].BPsy_score[0] = 0;
               } 
               if(allQuestions[i].BNurse_score[0] == ""){
                allQuestions[i].BNurse_score[0] = 0;
               } 
               if(allQuestions[i].LLB_score[0] == ""){
                allQuestions[i].LLB_score[0] = 0;
               } 
              
              
               tot_BPS = tot_BPS + parseInt(allQuestions[i].BPS_score[0]);
               tot_BBS = tot_BBS + parseInt(allQuestions[i].BBS_score[0]);
               tot_BBT = tot_BBT + parseInt(allQuestions[i].BBT_score[0]);
               tot_BPsy = tot_BPsy + parseInt(allQuestions[i].BPsy_score[0]);
               tot_LLB = tot_LLB + parseInt(allQuestions[i].LLB_score[0]);
               tot_BNurse = tot_BNurse + parseInt(allQuestions[i].BNurse_score[0]);
  
            }
            if (selectOptions[i] === 1 ) 
            {
              if(allQuestions[i].BPS_score[1] == ""){
                allQuestions[i].BPS_score[1] = 0;
               } 
  
              if(allQuestions[i].BBS_score[1] == ""){
                allQuestions[i].BBS_score[1] = 0;
               } 
  
               if(allQuestions[i].BBT_score[1] == ""){
                allQuestions[i].BBT_score[1] = 0;
               } 
  
               if(allQuestions[i].BPsy_score[1] == ""){
                allQuestions[i].BPsy_score[1] = 0;
               } 
               if(allQuestions[i].BNurse_score[1] == ""){
                allQuestions[i].BNurse_score[1] = 0;
               } 
               if(allQuestions[i].LLB_score[1] == ""){
                allQuestions[i].LLB_score[1] = 0;
               } 
            
               tot_BPS = tot_BPS + parseInt(allQuestions[i].BPS_score[1]);
               tot_BBS = tot_BBS + parseInt(allQuestions[i].BBS_score[1]);
               tot_BBT = tot_BBT + parseInt(allQuestions[i].BBT_score[1]);
               tot_BPsy = tot_BPsy + parseInt(allQuestions[i].BPsy_score[1]);
               tot_LLB = tot_LLB + parseInt(allQuestions[i].LLB_score[1]);
               tot_BNurse = tot_BNurse + parseInt(allQuestions[i].BNurse_score[1]);
         
            }
            if (selectOptions[i] === 2 ) 
            {
              if(allQuestions[i].BPS_score[2] == ""){
                allQuestions[i].BPS_score[2] = 0;
               } 
  
              if(allQuestions[i].BBS_score[2] == ""){
                allQuestions[i].BBS_score[2] = 0;
               } 
  
               if(allQuestions[i].BBT_score[2] == ""){
                allQuestions[i].BBT_score[2] = 0;
               } 
  
               if(allQuestions[i].BPsy_score[2] == ""){
                allQuestions[i].BPsy_score[2] = 0;
               } 
               if(allQuestions[i].BNurse_score[2] == ""){
                allQuestions[i].BNurse_score[2] = 0;
               } 
               if(allQuestions[i].LLB_score[2] == ""){
                allQuestions[i].LLB_score[2] = 0;
               } 
              
               
              
               tot_BPS = tot_BPS + parseInt(allQuestions[i].BPS_score[2]);
               tot_BBS = tot_BBS + parseInt(allQuestions[i].BBS_score[2]);
               tot_BBT = tot_BBT + parseInt(allQuestions[i].BBT_score[2]);
               tot_BPsy = tot_BPsy + parseInt(allQuestions[i].BPsy_score[2]);
               tot_LLB = tot_LLB + parseInt(allQuestions[i].LLB_score[2]);
               tot_BNurse = tot_BNurse + parseInt(allQuestions[i].BNurse_score[2]);
         
            }
            if (selectOptions[i] === 3 ) 
            {
              if(allQuestions[i].BPS_score[3] == ""){
                allQuestions[i].BPS_score[3] = 0;
               } 
  
              if(allQuestions[i].BBS_score[3] == ""){
                allQuestions[i].BBS_score[3] = 0;
               } 
  
               if(allQuestions[i].BBT_score[3] == ""){
                allQuestions[i].BBT_score[3] = 0;
               } 
  
               if(allQuestions[i].BPsy_score[3] == ""){
                allQuestions[i].BPsy_score[3] = 0;
               } 
               if(allQuestions[i].BNurse_score[3] == ""){
                allQuestions[i].BNurse_score[3] = 0;
               } 
               if(allQuestions[i].LLB_score[3] == ""){
                allQuestions[i].LLB_score[3] = 0;
               } 
              
              
               tot_BPS = tot_BPS + parseInt(allQuestions[i].BPS_score[3]);
               tot_BBS = tot_BBS + parseInt(allQuestions[i].BBS_score[3]);
               tot_BBT = tot_BBT + parseInt(allQuestions[i].BBT_score[3]);
               tot_BPsy = tot_BPsy + parseInt(allQuestions[i].BPsy_score[3]);
               tot_LLB = tot_LLB + parseInt(allQuestions[i].LLB_score[3]);
               tot_BNurse = tot_BNurse + parseInt(allQuestions[i].BNurse_score[3]);
        
            }
            if (selectOptions[i] === 4 ) 
            {
              if(allQuestions[i].BPS_score[4] == ""){
                allQuestions[i].BPS_score[4] = 0;
               } 
  
              if(allQuestions[i].BBS_score[4] == ""){
                allQuestions[i].BBS_score[4] = 0;
               } 
  
               if(allQuestions[i].BBT_score[4] == ""){
                allQuestions[i].BBT_score[4] = 0;
               } 
  
               if(allQuestions[i].BPsy_score[4] == ""){
                allQuestions[i].BPsy_score[4] = 0;
               } 
               if(allQuestions[i].BNurse_score[4] == ""){
                allQuestions[i].BNurse_score[4] = 0;
               } 
               if(allQuestions[i].LLB_score[4] == ""){
                allQuestions[i].LLB_score[4] = 0;
               } 
              
                             
               tot_BPS = tot_BPS + parseInt(allQuestions[i].BPS_score[4]);
               tot_BBS = tot_BBS + parseInt(allQuestions[i].BBS_score[4]);
               tot_BBT = tot_BBT + parseInt(allQuestions[i].BBT_score[4]);
               tot_BPsy = tot_BPsy + parseInt(allQuestions[i].BPsy_score[4]);
               tot_LLB = tot_LLB + parseInt(allQuestions[i].LLB_score[4]);
               tot_BNurse = tot_BNurse + parseInt(allQuestions[i].BNurse_score[4]);
            
            }
            if (selectOptions[i] === 5 ) 
            {
              if(allQuestions[i].BPS_score[5] == ""){
                allQuestions[i].BPS_score[5] = 0;
               } 
  
              if(allQuestions[i].BBS_score[5] == ""){
                allQuestions[i].BBS_score[5] = 0;
               } 
  
               if(allQuestions[i].BBT_score[5] == ""){
                allQuestions[i].BBT_score[5] = 0;
               } 
  
               if(allQuestions[i].BPsy_score[5] == ""){
                allQuestions[i].BPsy_score[5] = 0;
               } 
               if(allQuestions[i].BNurse_score[5] == ""){
                allQuestions[i].BNurse_score[5] = 0;
               } 
               if(allQuestions[i].LLB_score[5] == ""){
                allQuestions[i].LLB_score[5] = 0;
               } 
              
               
              
               tot_BPS = tot_BPS + parseInt(allQuestions[i].BPS_score[5]);
               tot_BBS = tot_BBS + parseInt(allQuestions[i].BBS_score[5]);
               tot_BBT = tot_BBT + parseInt(allQuestions[i].BBT_score[5]);
               tot_BPsy = tot_BPsy + parseInt(allQuestions[i].BPsy_score[5]);
               tot_LLB = tot_LLB + parseInt(allQuestions[i].LLB_score[5]);
               tot_BNurse = tot_BNurse + parseInt(allQuestions[i].BNurse_score[5]);
        
          }
        }
        var array = [tot_BPS, tot_BBS, tot_BBT, tot_BPsy, tot_LLB, tot_BNurse];
        var best = Math.max.apply(null, array); 

        var degree_name = [];
        
         
        if(best == tot_BPS){
          degree_name.push("BEd Hons in Physical Sciences");
        }
        if(best == tot_BBS){
          degree_name.push("BEd Hons in Biological Sciences");
        }
        if(best == tot_BBT){
          degree_name.push("BSc Hons in Bio Technology");
        }
        if(best == tot_LLB){
          degree_name.push("LLB Hons Law UK");
        }
        if(best == tot_BPsy){
          degree_name.push("BSc Hons Psychology UK");
        }
        if(best == tot_BNurse){
          degree_name.push("BSc_Hons_Nursing_UK");
        }
        
        score.append("Your most suitable degree is: " +  degree_name   + " with " + (best)   + "Points </br>");
        score.append("You scored for BEd Hons in Physical Sciences: " +  (tot_BPS)   + "Points </br>");
        score.append("You scored for BEd Hons in Biological Sciences: " +  (tot_BBS)   + "Points </br>");
        score.append("You scored for BSc Hons in Bio Technology: " +  (tot_BBT)   + "Points </br>");
        score.append("You scored for BSc Hons Psychology UK: " +  (tot_BPsy)   + "Points </br>");
        score.append("You scored for LLB Hons Law UK: " +  (tot_LLB)   + "Points </br> ");
        score.append("You scored for BSc_Hons_Nursing_UK: " +  (tot_BNurse)   + "Points </br> ");

  
        return score;
      }
    });
  })();
  