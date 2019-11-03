(function () {
  //var databaseRef = firebase.database().ref('quiz/');
  //var rowIndex = 1;

  //databaseRef.once('value', function(snapshot) {
  // snapshot.forEach(function(childSnapshot) {
  // var childKey = childSnapshot.key;
  //var childData = childSnapshot.val();
  //var q = childData.q_topic;
  // });
  // });
  onLoad();

  var quiz_type = "Computing";
  var tot_IT = 0;
  var tot_ISE = 0;
  var tot_SE = 0;
  var tot_CSN = 0;
  var tot_DS = 0;
  var tot_CS = 0;
  var tot_IM = 0;
  var tot_ITcur = 0;
  var tot_SEcur = 0;
  var tot_CSNcur = 0;
  var tot_CSSEbed = 0;
  var tot_CNbed = 0;
  var databaseRef = firebase
    .database()
    .ref("QuizPartTwo_Computing/")
    .orderByKey();
  var quesCounter = 0;
  //this is out of the firebase iteration loop
  var allQuestions = [];
  databaseRef.once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
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
        IT_score: [
          childData.ans1.Information_Technology,
          childData.ans2.Information_Technology,
          childData.ans3.Information_Technology,
          childData.ans4.Information_Technology,
          childData.ans5.Information_Technology,
          childData.ans6.Information_Technology,
        ],
        ISE_score: [
          childData.ans1.Informations_Systems_Engineering,
          childData.ans2.Informations_Systems_Engineering,
          childData.ans3.Informations_Systems_Engineering,
          childData.ans4.Informations_Systems_Engineering,
          childData.ans5.Informations_Systems_Engineering,
          childData.ans6.Informations_Systems_Engineering,
        ],
        SE_score: [
          childData.ans1.Software_Engineering,
          childData.ans2.Software_Engineering,
          childData.ans3.Software_Engineering,
          childData.ans4.Software_Engineering,
          childData.ans5.Software_Engineering,
          childData.ans6.Software_Engineering,
        ],

        CSN_score: [
          childData.ans1.Computer_Systems_Networking,
          childData.ans2.Computer_Systems_Networking,
          childData.ans3.Computer_Systems_Networking,
          childData.ans4.Computer_Systems_Networking,
          childData.ans5.Computer_Systems_Networking,
          childData.ans6.Computer_Systems_Networking,
        ],
        DS_score: [
          childData.ans1.Data_Science,
          childData.ans2.Data_Science,
          childData.ans3.Data_Science,
          childData.ans4.Data_Science,
          childData.ans5.Data_Science,
          childData.ans6.Data_Science,
        ],
        CS_score: [
          childData.ans1.Cyber_Security,
          childData.ans2.Cyber_Security,
          childData.ans3.Cyber_Security,
          childData.ans4.Cyber_Security,
          childData.ans5.Cyber_Security,
          childData.ans6.Cyber_Security,
        ],

        IM_score: [
          childData.ans1.Interactive_Media,
          childData.ans2.Interactive_Media,
          childData.ans3.Interactive_Media,
          childData.ans4.Interactive_Media,
          childData.ans5.Interactive_Media,
          childData.ans6.Interactive_Media,
        ],
        SEcur_score: [
          childData.ans1.Software_Engineering_Curtin,
          childData.ans2.Software_Engineering_Curtin,
          childData.ans3.Software_Engineering_Curtin,
          childData.ans4.Software_Engineering_Curtin,
          childData.ans5.Software_Engineering_Curtin,
          childData.ans6.Software_Engineering_Curtin,
        ],
        CSNcur_score: [
          childData.ans1.Computer_Systems_and_Networking_Curtin,
          childData.ans2.Computer_Systems_and_Networking_Curtin,
          childData.ans3.Computer_Systems_and_Networking_Curtin,
          childData.ans4.Computer_Systems_and_Networking_Curtin,
          childData.ans5.Computer_Systems_and_Networking_Curtin,
          childData.ans6.Computer_Systems_and_Networking_Curtin,
        ],
        ITcur_score: [
          childData.ans1.Information_Technology_Curtin,
          childData.ans2.Information_Technology_Curtin,
          childData.ans3.Information_Technology_Curtin,
          childData.ans4.Information_Technology_Curtin,
          childData.ans5.Information_Technology_Curtin,
          childData.ans6.Information_Technology_Curtin,
        ],
        CSSEbed_score: [
          childData.ans1.Computer_Science_and_Software_Engineering_Bedfordshire,
          childData.ans2.Computer_Science_and_Software_Engineering_Bedfordshire,
          childData.ans3.Computer_Science_and_Software_Engineering_Bedfordshire,
          childData.ans4.Computer_Science_and_Software_Engineering_Bedfordshire,
          childData.ans5.Computer_Science_and_Software_Engineering_Bedfordshire,
          childData.ans6.Computer_Science_and_Software_Engineering_Bedfordshire,
        ],
        CNbed_score: [
          childData.ans1.Computer_Systems_and_Networking_Curtin,
          childData.ans2.Computer_Systems_and_Networking_Curtin,
          childData.ans3.Computer_Systems_and_Networking_Curtin,
          childData.ans4.Computer_Systems_and_Networking_Curtin,
          childData.ans5.Computer_Systems_and_Networking_Curtin,
          childData.ans6.Computer_Systems_and_Networking_Curtin,
        ],
      });
    });


    var selectOptions = [];
    var quizSpace = $("#quiz");

    nextQuestion();

    $("#next").click(function () {
      chooseOption();
      if (isNaN(selectOptions[quesCounter])) {
        alert("Please select an option !");
      } else {
        quesCounter++;
        nextQuestion();
      }
    });

    $("#prev").click(function () {
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
        if (allQuestions[index].options[i] != "") {
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
      quizSpace.fadeOut(function () {
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
    for (count = 0; count < 6; count++) {


    }
    function displayResult() {
      var score = $("<p>", { id: "question" });


      var correct = 0;
      for (var i = 0; i < selectOptions.length; i++) {
        if (selectOptions[i] === 0) {
          if (allQuestions[i].IT_score[0] == "") {
            allQuestions[i].IT_score[0] = 0;
          }

          if (allQuestions[i].ISE_score[0] == "") {
            allQuestions[i].ISE_score[0] = 0;
          }

          if (allQuestions[i].SE_score[0] == "") {
            allQuestions[i].SE_score[0] = 0;
          }

          if (allQuestions[i].CSN_score[0] == "") {
            allQuestions[i].CSN_score[0] = 0;
          }
          if (allQuestions[i].DS_score[0] == "") {
            allQuestions[i].DS_score[0] = 0;
          }
          if (allQuestions[i].CS_score[0] == "") {
            allQuestions[i].CS_score[0] = 0;
          }

          if (allQuestions[i].IM_score[0] == "") {
            allQuestions[i].IM_score[0] = 0;
          }

          if (allQuestions[i].SEcur_score[0] == "") {
            allQuestions[i].SEcur_score[0] = 0;
          }

          if (allQuestions[i].CSNcur_score[0] == "") {
            allQuestions[i].CSNcur_score[0] = 0;
          }
          if (allQuestions[i].ITcur_score[0] == "") {
            allQuestions[i].ITcur_score[0] = 0;
          }
          if (allQuestions[i].CSSEbed_score[0] == "") {
            allQuestions[i].CSSEbed_score[0] = 0;
          }
          if (allQuestions[i].CNbed_score[0] == "") {
            allQuestions[i].CNbed_score[0] = 0;
          }

          tot_IT = tot_IT + parseInt(allQuestions[i].IT_score[0]);
          tot_ISE = tot_ISE + parseInt(allQuestions[i].ISE_score[0]);
          tot_SE = tot_SE + parseInt(allQuestions[i].SE_score[0]);
          tot_CSN = tot_CSN + parseInt(allQuestions[i].CSN_score[0]);
          tot_CS = tot_CS + parseInt(allQuestions[i].CS_score[0]);
          tot_IM = tot_IM + parseInt(allQuestions[i].IM_score[0]);
          tot_DS = tot_DS + parseInt(allQuestions[i].DS_score[0]);
          tot_ITcur = tot_ITcur + parseInt(allQuestions[i].ITcur_score[0]);
          tot_SEcur = tot_SEcur + parseInt(allQuestions[i].SEcur_score[0]);
          tot_CSNcur = tot_CSNcur + parseInt(allQuestions[i].CSNcur_score[0]);
          tot_CSSEbed = tot_CSSEbed + parseInt(allQuestions[i].CSSEbed_score[0]);
          tot_CNbed = tot_CNbed + parseInt(allQuestions[i].CNbed_score[0]);

        }
        if (selectOptions[i] === 1) {
          if (allQuestions[i].IT_score[1] == "") {
            allQuestions[i].IT_score[1] = 0;
          }

          if (allQuestions[i].ISE_score[1] == "") {
            allQuestions[i].ISE_score[1] = 0;
          }

          if (allQuestions[i].SE_score[1] == "") {
            allQuestions[i].SE_score[1] = 0;
          }

          if (allQuestions[i].CSN_score[1] == "") {
            allQuestions[i].CSN_score[1] = 0;
          }
          if (allQuestions[i].DS_score[1] == "") {
            allQuestions[i].DS_score[1] = 0;
          }
          if (allQuestions[i].CS_score[1] == "") {
            allQuestions[i].CS_score[1] = 0;
          }

          if (allQuestions[i].IM_score[1] == "") {
            allQuestions[i].IM_score[1] = 0;
          }

          if (allQuestions[i].SEcur_score[1] == "") {
            allQuestions[i].SEcur_score[1] = 0;
          }

          if (allQuestions[i].CSNcur_score[1] == "") {
            allQuestions[i].CSNcur_score[1] = 0;
          }
          if (allQuestions[i].ITcur_score[1] == "") {
            allQuestions[i].ITcur_score[1] = 0;
          }
          if (allQuestions[i].CSSEbed_score[1] == "") {
            allQuestions[i].CSSEbed_score[1] = 0;
          }
          if (allQuestions[i].CNbed_score[1] == "") {
            allQuestions[i].CNbed_score[1] = 0;
          }

          tot_IT = tot_IT + parseInt(allQuestions[i].IT_score[1]);
          tot_ISE = tot_ISE + parseInt(allQuestions[i].ISE_score[1]);
          tot_SE = tot_SE + parseInt(allQuestions[i].SE_score[1]);
          tot_CSN = tot_CSN + parseInt(allQuestions[i].CSN_score[1]);
          tot_CS = tot_CS + parseInt(allQuestions[i].CS_score[1]);
          tot_IM = tot_IM + parseInt(allQuestions[i].IM_score[1]);
          tot_DS = tot_DS + parseInt(allQuestions[i].DS_score[1]);
          tot_ITcur = tot_ITcur + parseInt(allQuestions[i].ITcur_score[1]);
          tot_SEcur = tot_SEcur + parseInt(allQuestions[i].SEcur_score[1]);
          tot_CSNcur = tot_CSNcur + parseInt(allQuestions[i].CSNcur_score[1]);
          tot_CSSEbed = tot_CSSEbed + parseInt(allQuestions[i].CSSEbed_score[1]);
          tot_CNbed = tot_CNbed + parseInt(allQuestions[i].CNbed_score[1]);
        }
        if (selectOptions[i] === 2) {
          if (allQuestions[i].IT_score[2] == "") {
            allQuestions[i].IT_score[2] = 0;
          }

          if (allQuestions[i].ISE_score[2] == "") {
            allQuestions[i].ISE_score[2] = 0;
          }

          if (allQuestions[i].SE_score[2] == "") {
            allQuestions[i].SE_score[2] = 0;
          }

          if (allQuestions[i].CSN_score[2] == "") {
            allQuestions[i].CSN_score[2] = 0;
          }
          if (allQuestions[i].DS_score[2] == "") {
            allQuestions[i].DS_score[2] = 0;
          }
          if (allQuestions[i].CS_score[2] == "") {
            allQuestions[i].CS_score[2] = 0;
          }

          if (allQuestions[i].IM_score[2] == "") {
            allQuestions[i].IM_score[2] = 0;
          }

          if (allQuestions[i].SEcur_score[2] == "") {
            allQuestions[i].SEcur_score[2] = 0;
          }

          if (allQuestions[i].CSNcur_score[2] == "") {
            allQuestions[i].CSNcur_score[2] = 0;
          }
          if (allQuestions[i].ITcur_score[2] == "") {
            allQuestions[i].ITcur_score[2] = 0;
          }
          if (allQuestions[i].CSSEbed_score[2] == "") {
            allQuestions[i].CSSEbed_score[2] = 0;
          }
          if (allQuestions[i].CNbed_score[2] == "") {
            allQuestions[i].CNbed_score[2] = 0;
          }



          tot_IT = tot_IT + parseInt(allQuestions[i].IT_score[2]);
          tot_ISE = tot_ISE + parseInt(allQuestions[i].ISE_score[2]);
          tot_SE = tot_SE + parseInt(allQuestions[i].SE_score[2]);
          tot_CSN = tot_CSN + parseInt(allQuestions[i].CSN_score[2]);
          tot_CS = tot_CS + parseInt(allQuestions[i].CS_score[2]);
          tot_IM = tot_IM + parseInt(allQuestions[i].IM_score[2]);
          tot_DS = tot_DS + parseInt(allQuestions[i].DS_score[2]);
          tot_ITcur = tot_ITcur + parseInt(allQuestions[i].ITcur_score[2]);
          tot_SEcur = tot_SEcur + parseInt(allQuestions[i].SEcur_score[2]);
          tot_CSNcur = tot_CSNcur + parseInt(allQuestions[i].CSNcur_score[2]);
          tot_CSSEbed = tot_CSSEbed + parseInt(allQuestions[i].CSSEbed_score[2]);
          tot_CNbed = tot_CNbed + parseInt(allQuestions[i].CNbed_score[2]);
        }
        if (selectOptions[i] === 3) {
          if (allQuestions[i].IT_score[3] == "") {
            allQuestions[i].IT_score[3] = 0;
          }

          if (allQuestions[i].ISE_score[3] == "") {
            allQuestions[i].ISE_score[3] = 0;
          }

          if (allQuestions[i].SE_score[3] == "") {
            allQuestions[i].SE_score[3] = 0;
          }

          if (allQuestions[i].CSN_score[3] == "") {
            allQuestions[i].CSN_score[3] = 0;
          }
          if (allQuestions[i].DS_score[3] == "") {
            allQuestions[i].DS_score[3] = 0;
          }
          if (allQuestions[i].CS_score[3] == "") {
            allQuestions[i].CS_score[3] = 0;
          }

          if (allQuestions[i].IM_score[3] == "") {
            allQuestions[i].IM_score[3] = 0;
          }

          if (allQuestions[i].SEcur_score[3] == "") {
            allQuestions[i].SEcur_score[3] = 0;
          }

          if (allQuestions[i].CSNcur_score[3] == "") {
            allQuestions[i].CSNcur_score[3] = 0;
          }
          if (allQuestions[i].ITcur_score[3] == "") {
            allQuestions[i].ITcur_score[3] = 0;
          }
          if (allQuestions[i].CSSEbed_score[3] == "") {
            allQuestions[i].CSSEbed_score[3] = 0;
          }
          if (allQuestions[i].CNbed_score[3] == "") {
            allQuestions[i].CNbed_score[3] = 0;
          }



          tot_IT = tot_IT + parseInt(allQuestions[i].IT_score[3]);
          tot_ISE = tot_ISE + parseInt(allQuestions[i].ISE_score[3]);
          tot_SE = tot_SE + parseInt(allQuestions[i].SE_score[3]);
          tot_CSN = tot_CSN + parseInt(allQuestions[i].CSN_score[3]);
          tot_CS = tot_CS + parseInt(allQuestions[i].CS_score[3]);
          tot_IM = tot_IM + parseInt(allQuestions[i].IM_score[3]);
          tot_DS = tot_DS + parseInt(allQuestions[i].DS_score[3]);
          tot_ITcur = tot_ITcur + parseInt(allQuestions[i].ITcur_score[3]);
          tot_SEcur = tot_SEcur + parseInt(allQuestions[i].SEcur_score[3]);
          tot_CSNcur = tot_CSNcur + parseInt(allQuestions[i].CSNcur_score[3]);
          tot_CSSEbed = tot_CSSEbed + parseInt(allQuestions[i].CSSEbed_score[3]);
          tot_CNbed = tot_CNbed + parseInt(allQuestions[i].CNbed_score[3]);
        }
        if (selectOptions[i] === 4) {
          if (allQuestions[i].IT_score[4] == "") {
            allQuestions[i].IT_score[4] = 0;
          }

          if (allQuestions[i].ISE_score[4] == "") {
            allQuestions[i].ISE_score[4] = 0;
          }

          if (allQuestions[i].SE_score[4] == "") {
            allQuestions[i].SE_score[4] = 0;
          }

          if (allQuestions[i].CSN_score[4] == "") {
            allQuestions[i].CSN_score[4] = 0;
          }
          if (allQuestions[i].DS_score[4] == "") {
            allQuestions[i].DS_score[4] = 0;
          }
          if (allQuestions[i].CS_score[4] == "") {
            allQuestions[i].CS_score[4] = 0;
          }

          if (allQuestions[i].IM_score[4] == "") {
            allQuestions[i].IM_score[4] = 0;
          }

          if (allQuestions[i].SEcur_score[4] == "") {
            allQuestions[i].SEcur_score[4] = 0;
          }

          if (allQuestions[i].CSNcur_score[4] == "") {
            allQuestions[i].CSNcur_score[4] = 0;
          }
          if (allQuestions[i].ITcur_score[4] == "") {
            allQuestions[i].ITcur_score[4] = 0;
          }
          if (allQuestions[i].CSSEbed_score[4] == "") {
            allQuestions[i].CSSEbed_score[4] = 0;
          }
          if (allQuestions[i].CNbed_score[4] == "") {
            allQuestions[i].CNbed_score[4] = 0;
          }



          tot_IT = tot_IT + parseInt(allQuestions[i].IT_score[4]);
          tot_ISE = tot_ISE + parseInt(allQuestions[i].ISE_score[4]);
          tot_SE = tot_SE + parseInt(allQuestions[i].SE_score[4]);
          tot_CSN = tot_CSN + parseInt(allQuestions[i].CSN_score[4]);
          tot_CS = tot_CS + parseInt(allQuestions[i].CS_score[4]);
          tot_IM = tot_IM + parseInt(allQuestions[i].IM_score[4]);
          tot_DS = tot_DS + parseInt(allQuestions[i].DS_score[4]);
          tot_ITcur = tot_ITcur + parseInt(allQuestions[i].ITcur_score[4]);
          tot_SEcur = tot_SEcur + parseInt(allQuestions[i].SEcur_score[4]);
          tot_CSNcur = tot_CSNcur + parseInt(allQuestions[i].CSNcur_score[4]);
          tot_CSSEbed = tot_CSSEbed + parseInt(allQuestions[i].CSSEbed_score[4]);
          tot_CNbed = tot_CNbed + parseInt(allQuestions[i].CNbed_score[4]);

        }
        if (selectOptions[i] === 5) {
          if (allQuestions[i].IT_score[5] == "") {
            allQuestions[i].IT_score[5] = 0;
          }

          if (allQuestions[i].ISE_score[5] == "") {
            allQuestions[i].ISE_score[5] = 0;
          }

          if (allQuestions[i].SE_score[5] == "") {
            allQuestions[i].SE_score[5] = 0;
          }

          if (allQuestions[i].CSN_score[5] == "") {
            allQuestions[i].CSN_score[5] = 0;
          }
          if (allQuestions[i].DS_score[5] == "") {
            allQuestions[i].DS_score[5] = 0;
          }
          if (allQuestions[i].CS_score[5] == "") {
            allQuestions[i].CS_score[5] = 0;
          }

          if (allQuestions[i].IM_score[5] == "") {
            allQuestions[i].IM_score[5] = 0;
          }

          if (allQuestions[i].SEcur_score[5] == "") {
            allQuestions[i].SEcur_score[5] = 0;
          }

          if (allQuestions[i].CSNcur_score[5] == "") {
            allQuestions[i].CSNcur_score[5] = 0;
          }
          if (allQuestions[i].ITcur_score[5] == "") {
            allQuestions[i].ITcur_score[5] = 0;
          }
          if (allQuestions[i].CSSEbed_score[5] == "") {
            allQuestions[i].CSSEbed_score[5] = 0;
          }
          if (allQuestions[i].CNbed_score[5] == "") {
            allQuestions[i].CNbed_score[5] = 0;
          }



          tot_IT = tot_IT + parseInt(allQuestions[i].IT_score[5]);
          tot_ISE = tot_ISE + parseInt(allQuestions[i].ISE_score[5]);
          tot_SE = tot_SE + parseInt(allQuestions[i].SE_score[5]);
          tot_CSN = tot_CSN + parseInt(allQuestions[i].CSN_score[5]);
          tot_CS = tot_CS + parseInt(allQuestions[i].CS_score[5]);
          tot_IM = tot_IM + parseInt(allQuestions[i].IM_score[5]);
          tot_DS = tot_DS + parseInt(allQuestions[i].DS_score[5]);
          tot_ITcur = tot_ITcur + parseInt(allQuestions[i].ITcur_score[5]);
          tot_SEcur = tot_SEcur + parseInt(allQuestions[i].SEcur_score[5]);
          tot_CSNcur = tot_CSNcur + parseInt(allQuestions[i].CSNcur_score[5]);
          tot_CSSEbed = tot_CSSEbed + parseInt(allQuestions[i].CSSEbed_score[5]);
          tot_CNbed = tot_CNbed + parseInt(allQuestions[i].CNbed_score[5]);
        }
      }
      var array = [tot_IT, tot_ISE, tot_SE, tot_CSN, tot_CS, tot_IM, tot_DS, tot_ITcur, tot_SEcur, tot_CSNcur, tot_CSSEbed, tot_CNbed];
      var best = Math.max.apply(null, array);

      var degree_name = [];


      if (best == tot_IT) {
        degree_name.push("BSc (Hons) in IT sp.in Information Technology");
      }
      if (best == tot_ISE) {
        degree_name.push("BSc (Hons) in IT sp. in Informations Systems Engineering");
      }
      if (best == tot_SE) {
        degree_name.push("Bsc (Hons) in IT sp. in Software Engineering");
      }
      if (best == tot_CS) {
        degree_name.push("Bsc (Hons) in IT sp. In Cyber Security");
      }
      if (best == tot_IM) {
        degree_name.push("Bsc (Hons) in IT sp. In Interactive Media");
      }
      if (best == tot_DS) {
        degree_name.push("Bsc (Hons) in IT sp. In Data Science");
      }
      if (best == tot_ITcur) {
        degree_name.push("Bsc in Information Technology (Curtin)");
      }
      if (best == tot_SEcur) {
        degree_name.push("Bsc in Software Engineering (Curtin)");
      }
      if (best == tot_CSNcur) {
        degree_name.push("Bsc in Computer Systems & Networking (Curtin)");
      }
      if (best == tot_CSSEbed) {
        degree_name.push("BSc.(Hons) Computer Science and Software Engineering (Bedfordshire)");
      }
      if (best == tot_CNbed) {
        degree_name.push("BSc.(Hons) Computer Networking (Bedfordshire)");
      }
      if (best == tot_CSN) {
        degree_name.push("Bsc (Hons) in IT sp. In Computer Systems Networking");
      }
/*
      score.append("Your most suitable degree is: " + degree_name + " with " + (best) + "Points </br>");
      score.append("You scored for BSc (Hons) in IT sp.in Information Technology: " + (tot_IT) + "Points </br>");
      score.append("You scored for Bsc (Hons) in IT sp. in Informations Systems Engineering: " + (tot_ISE) + "Points </br>");
      score.append("You scored for Bsc (Hons) in IT sp. in Software Engineering: " + (tot_SE) + "Points </br>");
      score.append("You scored for Bsc (Hons) in IT sp. In Computer Systems Networking: " + (tot_CSN) + "Points </br>");
      score.append("You scored for Bsc (Hons) in IT sp. In Cyber Security: " + (tot_CS) + "Points </br> ");
      score.append("You scored for Bsc (Hons) in IT sp. In Interactive Media: " + (tot_IM) + "Points </br> ");
      score.append("You scored for Bsc (Hons) in IT sp. In Data Science: " + (tot_DS) + "Points </br> ");
      score.append("You scored for Bsc in Information Technology (Curtin): " + (tot_ITcur) + "Points </br> ");
      score.append("You scored for Bsc in Software Engineering (Curtin): " + (tot_SEcur) + "Points </br> ");
      score.append("You scored for Bsc in Computer Systems & Networking (Curtin): " + (tot_CSNcur) + "Points </br> ");
      score.append("You scored for BSc.(Hons) Computer Science and Software Engineering (Bedfordshire): " + (tot_CSSEbed) + "Points </br> ");
      score.append("You scored for BSc.(Hons) Computer Networking (Bedfordshire): " + (tot_CNbed) + "Points </br> ");
	  
	  */
	  var recommended = [];
		var notrecommended = [];
		
		if(tot_IT >= 15){
          recommended.push("BSc (Hons) in IT sp.in Information Technology: " + tot_IT.toString() + " Points");
        }else{
		  notrecommended.push("BSc (Hons) in IT sp.in Information Technology: " + tot_IT.toString() + " Points");
		}
		
        if(tot_ISE >= 15){
          recommended.push("BSc (Hons) in IT sp. in Informations Systems Engineering: " + tot_ISE.toString() + " Points");
        }else{
		  notrecommended.push("BSc (Hons) in IT sp. in Informations Systems Engineering: " + tot_ISE.toString() + " Points");
		}
		
        if(tot_SE >= 15){
          recommended.push("Bsc (Hons) in IT sp. in Software Engineering: " + tot_SE.toString() + " Points");
        }else{
		  notrecommended.push("Bsc (Hons) in IT sp. in Software Engineering: " + tot_SE.toString() + " Points");
		}
		
        if(tot_CS >= 15){
          recommended.push("Bsc (Hons) in IT sp. In Cyber Security: " + tot_CS.toString() + " Points");
        }else{
		  notrecommended.push("Bsc (Hons) in IT sp. In Cyber Security: " + tot_CS.toString() + " Points");
		}
		
        if(tot_IM >= 15){
          recommended.push("Bsc (Hons) in IT sp. In Interactive Media: " + tot_IM.toString() + " Points");
        }else{
		  notrecommended.push("Bsc (Hons) in IT sp. In Interactive Media: " + tot_IM.toString() + " Points");
		}
		
        if(tot_DS >= 15){
          recommended.push("Bsc (Hons) in IT sp. In Data Science: " + tot_DS.toString() + " Points");
        }else{
		  notrecommended.push("Bsc (Hons) in IT sp. In Data Science: " + tot_DS.toString() + " Points");
		}
		
        if(tot_ITcur >= 15){
          recommended.push("Bsc in Information Technology (Curtin): " + tot_ITcur.toString() + " Points");
        }else{
		  notrecommended.push("Bsc in Information Technology (Curtin): " + tot_ITcur.toString() + " Points");
		}
		
        if(tot_SEcur >= 15){
          recommended.push("Bsc in Software Engineering (Curtin): " + tot_SEcur.toString() + " Points");
        }else{
		  notrecommended.push("Bsc in Software Engineering (Curtin): " + tot_SEcur.toString() + " Points");
		}
		
        if(tot_CSNcur >= 15){
          recommended.push("Bsc in Computer Systems & Networking (Curtin): " + tot_CSNcur.toString() + " Points");
        }else{
		  notrecommended.push("Bsc in Computer Systems & Networking (Curtin): " + tot_CSNcur.toString() + " Points");
		}
		
        if(tot_CSSEbed >= 15){
          recommended.push("BSc.(Hons) Computer Science and Software Engineering (Bedfordshire): " + tot_CSSEbed.toString() + " Points");
        }else{
		  notrecommended.push("BSc.(Hons) Computer Science and Software Engineering (Bedfordshire): " + tot_CSSEbed.toString() + " Points");
		}
		
        if(tot_CNbed >= 15){
          recommended.push("BSc.(Hons) Computer Networking (Bedfordshire): " + tot_CNbed.toString() + " Points");
        }else{
		  notrecommended.push("BSc.(Hons) Computer Networking (Bedfordshire): " + tot_CNbed.toString() + " Points");
		}
		
        if(tot_CSN >= 15){
          recommended.push("Bsc (Hons) in IT sp. In Computer Systems Networking: " + tot_CSN.toString() + " Points");
        }else{
		  notrecommended.push("Bsc (Hons) in IT sp. In Computer Systems Networking: " + tot_CSN.toString() + " Points");
		}
		
        score.append("<b>Your most suitable degree is: " +  degree_name   + " with " + (best)   + " Points </b></br>");
		
       

		score.append("Recommended List </br>");
		for(var c=0; c < recommended.length; c++ ){
			score.append(recommended[c]+ " </br>");
		}
		score.append("Not Recommended List </br>");
		for(var c=0; c < notrecommended.length; c++ ){
			score.append(notrecommended[c]+ " </br>");
		}
      showResultBtn();

      return score;
    }
  });
})();
function onLoad() {
  var div2 = document.getElementById("btn_view_final");
  div2.style.display = "none";
}

function showResultBtn() {
  var json_str = JSON.stringify("Computing");
  createCookie('fac_type', json_str);
  console.log(json_str);
  var div2 = document.getElementById("btn_view_final");
  div2.style.display = "block";
}
function redirectToFinal(){
  window.location.href = './my_suggested_list.html';

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