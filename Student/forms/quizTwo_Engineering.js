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
  var tot_CE = 0;
  var tot_EEE = 0;
  var tot_MatEng = 0;
  var tot_Mech = 0;
  var tot_Mechatronics = 0;
  var tot_CE_Curtin = 0;
  var tot_EEE_Curtin = 0;
  var tot_Mech_Curtin = 0;
  var tot_QS_UK = 0;

  var databaseRef = firebase
    .database()
    .ref("QuizPartTwo_Engineering/")
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
        CE_score: [
          childData.ans1.BSc_Engineering_Hons_Degree_in_Civil_Engineering,
          childData.ans2.BSc_Engineering_Hons_Degree_in_Civil_Engineering,
          childData.ans3.BSc_Engineering_Hons_Degree_in_Civil_Engineering,
          childData.ans4.BSc_Engineering_Hons_Degree_in_Civil_Engineering,
          childData.ans5.BSc_Engineering_Hons_Degree_in_Civil_Engineering,
          childData.ans6.BSc_Engineering_Hons_Degree_in_Civil_Engineering,
        ],
        EEE_score: [
          childData.ans1.BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering,
          childData.ans2.BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering,
          childData.ans3.BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering,
          childData.ans4.BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering,
          childData.ans5.BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering,
          childData.ans6.BSc_Engineering_Hons_Degree_in_Electrical_and_Electronic_Engineering,
        ],
        MatEng_score: [
          childData.ans1.BSc_Engineering_Hons_Degree_in_Materials_Engineering,
          childData.ans2.BSc_Engineering_Hons_Degree_in_Materials_Engineering,
          childData.ans3.BSc_Engineering_Hons_Degree_in_Materials_Engineering,
          childData.ans4.BSc_Engineering_Hons_Degree_in_Materials_Engineering,
          childData.ans5.BSc_Engineering_Hons_Degree_in_Materials_Engineering,
          childData.ans6.BSc_Engineering_Hons_Degree_in_Materials_Engineering,
        ],
      
        Mech_score: [
          childData.ans1.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering,
          childData.ans2.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering,
          childData.ans3.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering,
          childData.ans4.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering,
          childData.ans5.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering,
          childData.ans6.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering,
        ],
        Mechatronics_score: [
          childData.ans1.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics,
          childData.ans2.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics,
          childData.ans3.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics,
          childData.ans4.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics,
          childData.ans5.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics,
          childData.ans6.BSc_Engineering_Hons_Degree_in_Mechanical_Engineering_Mechatronics,
        ],
        CE_Curtin_score: [
          childData.ans1.Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin,
          childData.ans2.Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin,
          childData.ans3.Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin,
          childData.ans4.Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin,
          childData.ans5.Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin,
          childData.ans6.Bachelor_of_Engineering_Hons_Civil_and_Construction_Engineering_Curtin,
        ],

        EEE_Curtin_score: [
          childData.ans1.Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin,
          childData.ans2.Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin,
          childData.ans3.Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin,
          childData.ans4.Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin,
          childData.ans5.Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin,
          childData.ans6.Bachelor_of_Engineering_Hons_Electrical_and_Electronic_Engineering_Curtin,
        ],
        Mech_Curtin_score: [
          childData.ans1.Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin,
          childData.ans2.Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin,
          childData.ans3.Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin,
          childData.ans4.Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin,
          childData.ans5.Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin,
          childData.ans6.Bachelor_of_Engineering_Hons_Mechanical_Engineering_Curtin,
        ],
        QS_UK_score: [
          childData.ans1.BSc_Hons_Degree_in_Quantity_Surveying_UK,
          childData.ans2.BSc_Hons_Degree_in_Quantity_Surveying_UK,
          childData.ans3.BSc_Hons_Degree_in_Quantity_Surveying_UK,
          childData.ans4.BSc_Hons_Degree_in_Quantity_Surveying_UK,
          childData.ans5.BSc_Hons_Degree_in_Quantity_Surveying_UK,
          childData.ans6.BSc_Hons_Degree_in_Quantity_Surveying_UK,
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
            if(allQuestions[i].CE_score[0] == ""){
              allQuestions[i].CE_score[0] = 0;
             } 

            if(allQuestions[i].EEE_score[0] == ""){
              allQuestions[i].EEE_score[0] = 0;
             } 

             if(allQuestions[i].MatEng_score[0] == ""){
              allQuestions[i].MatEng_score[0] = 0;
             } 

             if(allQuestions[i].Mech_score[0] == ""){
              allQuestions[i].Mech_score[0] = 0;
             } 
             if(allQuestions[i].Mechatronics_score[0] == ""){
              allQuestions[i].Mechatronics_score[0] = 0;
             } 
             if(allQuestions[i].CE_Curtin_score[0] == ""){
              allQuestions[i].CE_Curtin_score[0] = 0;
             } 
            
             if(allQuestions[i].EEE_Curtin_score[0] == ""){
              allQuestions[i].EEE_Curtin_score[0] = 0;
             }

             if(allQuestions[i].Mech_Curtin_score[0] == ""){
              allQuestions[i].Mech_Curtin_score[0] = 0;
             }

             if(allQuestions[i].QS_UK_score[0] == ""){
              allQuestions[i].QS_UK_score[0] = 0;
             }

             tot_CE = tot_CE + parseInt(allQuestions[i].CE_score[0]);
             tot_EEE = tot_EEE + parseInt(allQuestions[i].EEE_score[0]);
             tot_MatEng = tot_MatEng + parseInt(allQuestions[i].MatEng_score[0]);
             tot_Mech = tot_Mech + parseInt(allQuestions[i].Mech_score[0]);
             tot_Mechatronics = tot_Mechatronics + parseInt(allQuestions[i].Mechatronics_score[0]);
             tot_CE_Curtin = tot_CE_Curtin + parseInt(allQuestions[i].CE_Curtin_score[0]);
             tot_EEE_Curtin = tot_EEE_Curtin + parseInt(allQuestions[i].EEE_Curtin_score[0]);
             tot_Mech_Curtin = tot_Mech_Curtin + parseInt(allQuestions[i].Mech_Curtin_score[0]) ;
             tot_QS_UK = tot_QS_UK + parseInt(allQuestions[i].QS_UK_score[0]);

          }
          if (selectOptions[i] === 1 ) 
          {
            if(allQuestions[i].CE_score[1] == ""){
              allQuestions[i].CE_score[1] = 0;
             } 

            if(allQuestions[i].EEE_score[1] == ""){
              allQuestions[i].EEE_score[1] = 0;
             } 

             if(allQuestions[i].MatEng_score[1] == ""){
              allQuestions[i].MatEng_score[1] = 0;
             } 

             if(allQuestions[i].Mech_score[1] == ""){
              allQuestions[i].Mech_score[1] = 0;
             } 
             if(allQuestions[i].Mechatronics_score[1] == ""){
              allQuestions[i].Mechatronics_score[1] = 0;
             } 
             if(allQuestions[i].CE_Curtin_score[1] == ""){
              allQuestions[i].CE_Curtin_score[1] = 0;
             } 
            
             if(allQuestions[i].EEE_Curtin_score[1] == ""){
              allQuestions[i].EEE_Curtin_score[1] = 0;
             }

             if(allQuestions[i].Mech_Curtin_score[1] == ""){
              allQuestions[i].Mech_Curtin_score[1] = 0;
             }

             if(allQuestions[i].QS_UK_score[1] == ""){
              allQuestions[i].QS_UK_score[1] = 0;
             }
       

             tot_CE = tot_CE + parseInt(allQuestions[i].CE_score[1]);
             tot_EEE = tot_EEE + parseInt(allQuestions[i].EEE_score[1]);
             tot_MatEng = tot_MatEng + parseInt(allQuestions[i].MatEng_score[1]);
             tot_Mech = tot_Mech + parseInt(allQuestions[i].Mech_score[1]);
             tot_Mechatronics = tot_Mechatronics + parseInt(allQuestions[i].Mechatronics_score[1]);
             tot_CE_Curtin = tot_CE_Curtin + parseInt(allQuestions[i].CE_Curtin_score[1]);
             tot_EEE_Curtin = tot_EEE_Curtin + parseInt(allQuestions[i].EEE_Curtin_score[1]);
             tot_Mech_Curtin = tot_Mech_Curtin + parseInt(allQuestions[i].Mech_Curtin_score[1]) ;
             tot_QS_UK = tot_QS_UK + parseInt(allQuestions[i].QS_UK_score[1]);
          }
          if (selectOptions[i] === 2 ) 
          {
            if(allQuestions[i].CE_score[2] == ""){
              allQuestions[i].CE_score[2] = 0;
             } 

            if(allQuestions[i].EEE_score[2] == ""){
              allQuestions[i].EEE_score[2] = 0;
             } 

             if(allQuestions[i].MatEng_score[2] == ""){
              allQuestions[i].MatEng_score[2] = 0;
             } 

             if(allQuestions[i].Mech_score[2] == ""){
              allQuestions[i].Mech_score[2] = 0;
             } 
             if(allQuestions[i].Mechatronics_score[2] == ""){
              allQuestions[i].Mechatronics_score[2] = 0;
             } 
             if(allQuestions[i].CE_Curtin_score[2] == ""){
              allQuestions[i].CE_Curtin_score[2] = 0;
             } 
            
             if(allQuestions[i].EEE_Curtin_score[2] == ""){
              allQuestions[i].EEE_Curtin_score[2] = 0;
             }

             if(allQuestions[i].Mech_Curtin_score[2] == ""){
              allQuestions[i].Mech_Curtin_score[2] = 0;
             }

             if(allQuestions[i].QS_UK_score[2] == ""){
              allQuestions[i].QS_UK_score[2] = 0;
             }
            
            
             tot_CE = tot_CE + parseInt(allQuestions[i].CE_score[2]);
             tot_EEE = tot_EEE + parseInt(allQuestions[i].EEE_score[2]);
             tot_MatEng = tot_MatEng + parseInt(allQuestions[i].MatEng_score[2]);
             tot_Mech = tot_Mech + parseInt(allQuestions[i].Mech_score[2]);
             tot_Mechatronics = tot_Mechatronics + parseInt(allQuestions[i].Mechatronics_score[2]);
             tot_CE_Curtin = tot_CE_Curtin + parseInt(allQuestions[i].CE_Curtin_score[2]);
             tot_EEE_Curtin = tot_EEE_Curtin + parseInt(allQuestions[i].EEE_Curtin_score[2]);
             tot_Mech_Curtin = tot_Mech_Curtin + parseInt(allQuestions[i].Mech_Curtin_score[2]) ;
             tot_QS_UK = tot_QS_UK + parseInt(allQuestions[i].QS_UK_score[2]);
          
          }
          if (selectOptions[i] === 3 ) 
          {
            if(allQuestions[i].CE_score[3] == ""){
              allQuestions[i].CE_score[3] = 0;
             } 

            if(allQuestions[i].EEE_score[3] == ""){
              allQuestions[i].EEE_score[3] = 0;
             } 

             if(allQuestions[i].MatEng_score[3] == ""){
              allQuestions[i].MatEng_score[3] = 0;
             } 

             if(allQuestions[i].Mech_score[3] == ""){
              allQuestions[i].Mech_score[3] = 0;
             } 
             if(allQuestions[i].Mechatronics_score[3] == ""){
              allQuestions[i].Mechatronics_score[3] = 0;
             } 
             if(allQuestions[i].CE_Curtin_score[3] == ""){
              allQuestions[i].CE_Curtin_score[3] = 0;
             } 
            
             if(allQuestions[i].EEE_Curtin_score[3] == ""){
              allQuestions[i].EEE_Curtin_score[3] = 0;
             }

             if(allQuestions[i].Mech_Curtin_score[3] == ""){
              allQuestions[i].Mech_Curtin_score[3] = 0;
             }

             if(allQuestions[i].QS_UK_score[3] == ""){
              allQuestions[i].QS_UK_score[3] = 0;
             }
                 
             
             tot_CE = tot_CE + parseInt(allQuestions[i].CE_score[3]);
             tot_EEE = tot_EEE + parseInt(allQuestions[i].EEE_score[3]);
             tot_MatEng = tot_MatEng + parseInt(allQuestions[i].MatEng_score[3]);
             tot_Mech = tot_Mech + parseInt(allQuestions[i].Mech_score[3]);
             tot_Mechatronics = tot_Mechatronics + parseInt(allQuestions[i].Mechatronics_score[3]);
             tot_CE_Curtin = tot_CE_Curtin + parseInt(allQuestions[i].CE_Curtin_score[3]);
             tot_EEE_Curtin = tot_EEE_Curtin + parseInt(allQuestions[i].EEE_Curtin_score[3]);
             tot_Mech_Curtin = tot_Mech_Curtin + parseInt(allQuestions[i].Mech_Curtin_score[3]) ;
             tot_QS_UK = tot_QS_UK + parseInt(allQuestions[i].QS_UK_score[3]);
          
          }
          if (selectOptions[i] === 4 ) 
          {
            if(allQuestions[i].CE_score[4] == ""){
              allQuestions[i].CE_score[4] = 0;
             } 

            if(allQuestions[i].EEE_score[4] == ""){
              allQuestions[i].EEE_score[4] = 0;
             } 

             if(allQuestions[i].MatEng_score[4] == ""){
              allQuestions[i].MatEng_score[4] = 0;
             } 

             if(allQuestions[i].Mech_score[4] == ""){
              allQuestions[i].Mech_score[4] = 0;
             } 
             if(allQuestions[i].Mechatronics_score[4] == ""){
              allQuestions[i].Mechatronics_score[4] = 0;
             } 
             if(allQuestions[i].CE_Curtin_score[4] == ""){
              allQuestions[i].CE_Curtin_score[4] = 0;
             } 
            
             if(allQuestions[i].EEE_Curtin_score[4] == ""){
              allQuestions[i].EEE_Curtin_score[4] = 0;
             }

             if(allQuestions[i].Mech_Curtin_score[4] == ""){
              allQuestions[i].Mech_Curtin_score[4] = 0;
             }

             if(allQuestions[i].QS_UK_score[4] == ""){
              allQuestions[i].QS_UK_score[4] = 0;
             }
        
            
             tot_CE = tot_CE + parseInt(allQuestions[i].CE_score[4]);
             tot_EEE = tot_EEE + parseInt(allQuestions[i].EEE_score[4]);
             tot_MatEng = tot_MatEng + parseInt(allQuestions[i].MatEng_score[4]);
             tot_Mech = tot_Mech + parseInt(allQuestions[i].Mech_score[4]);
             tot_Mechatronics = tot_Mechatronics + parseInt(allQuestions[i].Mechatronics_score[4]);
             tot_CE_Curtin = tot_CE_Curtin + parseInt(allQuestions[i].CE_Curtin_score[4]);
             tot_EEE_Curtin = tot_EEE_Curtin + parseInt(allQuestions[i].EEE_Curtin_score[4]);
             tot_Mech_Curtin = tot_Mech_Curtin + parseInt(allQuestions[i].Mech_Curtin_score[4]) ;
             tot_QS_UK = tot_QS_UK + parseInt(allQuestions[i].QS_UK_score[4]);
          
            
          }
          if (selectOptions[i] === 5 ) 
          {
            if(allQuestions[i].CE_score[5] == ""){
              allQuestions[i].CE_score[5] = 0;
             } 

            if(allQuestions[i].EEE_score[5] == ""){
              allQuestions[i].EEE_score[5] = 0;
             } 

             if(allQuestions[i].MatEng_score[5] == ""){
              allQuestions[i].MatEng_score[5] = 0;
             } 

             if(allQuestions[i].Mech_score[5] == ""){
              allQuestions[i].Mech_score[5] = 0;
             } 
             if(allQuestions[i].Mechatronics_score[5] == ""){
              allQuestions[i].Mechatronics_score[5] = 0;
             } 
             if(allQuestions[i].CE_Curtin_score[5] == ""){
              allQuestions[i].CE_Curtin_score[5] = 0;
             } 
            
             if(allQuestions[i].EEE_Curtin_score[5] == ""){
              allQuestions[i].EEE_Curtin_score[5] = 0;
             }

             if(allQuestions[i].Mech_Curtin_score[5] == ""){
              allQuestions[i].Mech_Curtin_score[5] = 0;
             }

             if(allQuestions[i].QS_UK_score[5] == ""){
              allQuestions[i].QS_UK_score[5] = 0;
             }
                        
             
             tot_CE = tot_CE + parseInt(allQuestions[i].CE_score[5]);
             tot_EEE = tot_EEE + parseInt(allQuestions[i].EEE_score[5]);
             tot_MatEng = tot_MatEng + parseInt(allQuestions[i].MatEng_score[5]);
             tot_Mech = tot_Mech + parseInt(allQuestions[i].Mech_score[5]);
             tot_Mechatronics = tot_Mechatronics + parseInt(allQuestions[i].Mechatronics_score[5]);
             tot_CE_Curtin = tot_CE_Curtin + parseInt(allQuestions[i].CE_Curtin_score[5]);
             tot_EEE_Curtin = tot_EEE_Curtin + parseInt(allQuestions[i].EEE_Curtin_score[5]);
             tot_Mech_Curtin = tot_Mech_Curtin + parseInt(allQuestions[i].Mech_Curtin_score[5]) ;
             tot_QS_UK = tot_QS_UK + parseInt(allQuestions[i].QS_UK_score[5]);
          
        }
      }
      var array = [tot_CE, tot_EEE, tot_MatEng, tot_Mech, tot_Mechatronics, tot_CE_Curtin, tot_EEE_Curtin, tot_Mech_Curtin, tot_QS_UK];
      var best = Math.max.apply(null, array); 

      var degree_name = [];
      
       
      if(best == tot_CE){
        degree_name.push("BSc Engineering(Hons) Degree in Civil Engineering");
      }
      if(best == tot_EEE){
        degree_name.push("BSc Engineering(Hons) Degree in Electrical and Electronic Engineering");
      }
      if(best == tot_MatEng){
        degree_name.push("BSc Engineering(Hons) Degree in Materials Engineering");
      }
      if(best == tot_Mech){
        degree_name.push("BSc Engineering(Hons) Degree in Mechanical Engineering");
      }
      if(best == tot_Mechatronics){
        degree_name.push("BSc Engineering(Hons) Degree in Mechanical Engineering(Mechatronics)");
      }
      if(best == tot_CE_Curtin){
        degree_name.push("Bachelor of Engineering(Hons) Civil and Construction Engineering(Curtin)");
      }
      if(best == tot_EEE_Curtin){
        degree_name.push("Bachelor of Engineering(Hons) Electrical and Electronic Engineering(Curtin)");
      }
      if(best == tot_Mech_Curtin){
        degree_name.push("Bachelor of Engineering(Hons) Mechanical Engineering(Curtin)");
      }
      if(best == tot_QS_UK){
        degree_name.push("BSc(Hons) Degree in Quantity Surveying(UK)");
      }
     
      
      score.append("Your most suitable degree is: " +  degree_name   + " with " + (best)   + "Points </br>");
      score.append("You scored for BSc Engineering(Hons) Degree in Civil Engineering: " +  (tot_CE)   + "Points </br>");
      score.append("You scored for BSc Engineering(Hons) Degree in Electrical and Electronic Engineering: " +  (tot_EEE)   + "Points </br>");
      score.append("You scored for BSc Engineering(Hons) Degree in Materials Engineering: " +  (tot_MatEng)   + "Points </br>");
      score.append("You scored for BSc Engineering(Hons) Degree in Mechanical Engineering: " +  (tot_Mech)   + "Points </br>");
      score.append("You scored for BSc Engineering(Hons) Degree in Mechanical Engineering(Mechatronics): " +  (tot_Mechatronics)   + "Points </br> ");
      score.append("You scored for Bachelor of Engineering(Hons) Civil and Construction Engineering(Curtin): " +  (tot_CE_Curtin)   + "Points </br> ");
      score.append("You scored for Bachelor of Engineering(Hons) Electrical and Electronic Engineering(Curtin): " +  (tot_EEE_Curtin)   + "Points </br> ");
      score.append("You scored for Bachelor of Engineering(Hons) Mechanical Engineering(Curtin): " +  (tot_Mech_Curtin)   + "Points </br> ");
      score.append("You scored for BSc(Hons) Degree in Quantity Surveying(UK): " +  (tot_QS_UK)   + "Points </br> ");

      return score;
    }
  });
})();
