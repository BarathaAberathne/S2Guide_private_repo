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
  var tot_eng = 0;
  var tot_bm = 0;
  var tot_arch = 0;
  var tot_hs = 0;
  var tot_hc = 0;
  var databaseRef = firebase
    .database()
    .ref("QuizPartOne/")
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
        score_comp: [
          childData.ans1.comp,
          childData.ans2.comp,
          childData.ans3.comp,
          childData.ans4.comp,
          childData.ans5.comp,
          childData.ans6.comp,
        ],
        score_eng: [
          childData.ans1.eng,
          childData.ans2.eng,
          childData.ans3.eng,
          childData.ans4.eng,
          childData.ans5.eng,
          childData.ans6.eng,
        ],
        score_bm: [
          childData.ans1.bm,
          childData.ans2.bm,
          childData.ans3.bm,
          childData.ans4.bm,
          childData.ans5.bm,
          childData.ans6.bm,
        ],
        score_arch: [
          childData.ans1.arch,
          childData.ans2.arch,
          childData.ans3.arch,
          childData.ans4.arch,
          childData.ans5.arch,
          childData.ans6.arch,
        ],
        score_hc: [
          childData.ans1.hc,
          childData.ans2.hc,
          childData.ans3.hc,
          childData.ans4.hc,
          childData.ans5.hc,
          childData.ans6.hc,
        ],
        score_hs: [
          childData.ans1.hs,
          childData.ans2.hs,
          childData.ans3.hs,
          childData.ans4.hs,
          childData.ans5.hs,
          childData.ans6.hs,
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

      var tot_comp = 0;
      var correct = 0;
      for (var i = 0; i < selectOptions.length; i++) {
        if (selectOptions[i] === 0) {
          if (allQuestions[i].score_comp[0] == "") {
            allQuestions[i].score_comp[0] = 0;
          }

          if (allQuestions[i].score_eng[0] == "") {
            allQuestions[i].score_eng[0] = 0;
          }

          if (allQuestions[i].score_bm[0] == "") {
            allQuestions[i].score_bm[0] = 0;
          }

          if (allQuestions[i].score_arch[0] == "") {
            allQuestions[i].score_arch[0] = 0;
          }
          if (allQuestions[i].score_hc[0] == "") {
            allQuestions[i].score_hc[0] = 0;
          }
          if (allQuestions[i].score_hs[0] == "") {
            allQuestions[i].score_hs[0] = 0;
          }
          tot_comp = tot_comp + parseInt(allQuestions[i].score_comp[0]);
          tot_eng = tot_eng + parseInt(allQuestions[i].score_eng[0]);
          tot_bm = tot_bm + parseInt(allQuestions[i].score_bm[0]);
          tot_arch = tot_arch + parseInt(allQuestions[i].score_arch[0]);
          tot_hc = tot_hc + parseInt(allQuestions[i].score_hc[0]);
          tot_hs = tot_hs + parseInt(allQuestions[i].score_hs[0]);

        }
        if (selectOptions[i] === 1) {
          if (allQuestions[i].score_comp[1] == "") {
            allQuestions[i].score_comp[1] = 0;
          }

          if (allQuestions[i].score_eng[1] == "") {
            allQuestions[i].score_eng[1] = 0;
          }

          if (allQuestions[i].score_bm[1] == "") {
            allQuestions[i].score_bm[1] = 0;
          }

          if (allQuestions[i].score_arch[1] == "") {
            allQuestions[i].score_arch[1] = 0;
          }
          if (allQuestions[i].score_hc[1] == "") {
            allQuestions[i].score_hc[1] = 0;
          }
          if (allQuestions[i].score_hs[1] == "") {
            allQuestions[i].score_hs[1] = 0;
          }
          tot_comp = tot_comp + parseInt(allQuestions[i].score_comp[1]);
          tot_eng = tot_eng + parseInt(allQuestions[i].score_eng[1]);
          tot_bm = tot_bm + parseInt(allQuestions[i].score_bm[1]);
          tot_arch = tot_arch + parseInt(allQuestions[i].score_arch[1]);
          tot_hc = tot_hc + parseInt(allQuestions[i].score_hc[1]);
          tot_hs = tot_hs + parseInt(allQuestions[i].score_hs[1]);

        }
        if (selectOptions[i] === 2) {
          if (allQuestions[i].score_comp[2] == "") {
            allQuestions[i].score_comp[2] = 0;
          }

          if (allQuestions[i].score_eng[2] == "") {
            allQuestions[i].score_eng[2] = 0;
          }

          if (allQuestions[i].score_bm[2] == "") {
            allQuestions[i].score_bm[2] = 0;
          }

          if (allQuestions[i].score_arch[2] == "") {
            allQuestions[i].score_arch[2] = 0;
          }
          if (allQuestions[i].score_hc[2] == "") {
            allQuestions[i].score_hc[2] = 0;
          }
          if (allQuestions[i].score_hs[2] == "") {
            allQuestions[i].score_hs[2] = 0;
          }
          tot_comp = tot_comp + parseInt(allQuestions[i].score_comp[2]);
          tot_eng = tot_eng + parseInt(allQuestions[i].score_eng[2]);
          tot_bm = tot_bm + parseInt(allQuestions[i].score_bm[2]);
          tot_arch = tot_arch + parseInt(allQuestions[i].score_arch[2]);
          tot_hc = tot_hc + parseInt(allQuestions[i].score_hc[2]);
          tot_hs = tot_hs + parseInt(allQuestions[i].score_hs[2]);

        }
        if (selectOptions[i] === 3) {
          if (allQuestions[i].score_comp[3] == "") {
            allQuestions[i].score_comp[3] = 0;
          }

          if (allQuestions[i].score_eng[3] == "") {
            allQuestions[i].score_eng[3] = 0;
          }

          if (allQuestions[i].score_bm[3] == "") {
            allQuestions[i].score_bm[3] = 0;
          }

          if (allQuestions[i].score_arch[3] == "") {
            allQuestions[i].score_arch[3] = 0;
          }
          if (allQuestions[i].score_hc[3] == "") {
            allQuestions[i].score_hc[3] = 0;
          }
          if (allQuestions[i].score_hs[3] == "") {
            allQuestions[i].score_hs[3] = 0;
          }
          tot_comp = tot_comp + parseInt(allQuestions[i].score_comp[3]);
          tot_eng = tot_eng + parseInt(allQuestions[i].score_eng[3]);
          tot_bm = tot_bm + parseInt(allQuestions[i].score_bm[3]);
          tot_arch = tot_arch + parseInt(allQuestions[i].score_arch[3]);
          tot_hc = tot_hc + parseInt(allQuestions[i].score_hc[3]);
          tot_hs = tot_hs + parseInt(allQuestions[i].score_hs[3]);

        }
        if (selectOptions[i] === 4) {
          if (allQuestions[i].score_comp[4] == "") {
            allQuestions[i].score_comp[4] = 0;
          }

          if (allQuestions[i].score_eng[4] == "") {
            allQuestions[i].score_eng[4] = 0;
          }

          if (allQuestions[i].score_bm[4] == "") {
            allQuestions[i].score_bm[4] = 0;
          }

          if (allQuestions[i].score_arch[4] == "") {
            allQuestions[i].score_arch[4] = 0;
          }
          if (allQuestions[i].score_hc[4] == "") {
            allQuestions[i].score_hc[4] = 0;
          }
          if (allQuestions[i].score_hs[4] == "") {
            allQuestions[i].score_hs[4] = 0;
          }
          tot_comp = tot_comp + parseInt(allQuestions[i].score_comp[4]);
          tot_eng = tot_eng + parseInt(allQuestions[i].score_eng[4]);
          tot_bm = tot_bm + parseInt(allQuestions[i].score_bm[4]);
          tot_arch = tot_arch + parseInt(allQuestions[i].score_arch[4]);
          tot_hc = tot_hc + parseInt(allQuestions[i].score_hc[4]);
          tot_hs = tot_hs + parseInt(allQuestions[i].score_hs[4]);

        }
        if (selectOptions[i] === 5) {
          if (allQuestions[i].score_comp[5] == "") {
            allQuestions[i].score_comp[5] = 0;
          }

          if (allQuestions[i].score_eng[5] == "") {
            allQuestions[i].score_eng[5] = 0;
          }

          if (allQuestions[i].score_bm[5] == "") {
            allQuestions[i].score_bm[5] = 0;
          }

          if (allQuestions[i].score_arch[5] == "") {
            allQuestions[i].score_arch[5] = 0;
          }
          if (allQuestions[i].score_hc[5] == "") {
            allQuestions[i].score_hc[5] = 0;
          }
          if (allQuestions[i].score_hs[5] == "") {
            allQuestions[i].score_hs[5] = 0;
          }
          tot_comp = tot_comp + parseInt(allQuestions[i].score_comp[5]);
          tot_eng = tot_eng + parseInt(allQuestions[i].score_eng[5]);
          tot_bm = tot_bm + parseInt(allQuestions[i].score_bm[5]);
          tot_arch = tot_arch + parseInt(allQuestions[i].score_arch[5]);
          tot_hc = tot_hc + parseInt(allQuestions[i].score_hc[5]);
          tot_hs = tot_hs + parseInt(allQuestions[i].score_hs[5]);

        }
      }



      score.append("<div class='one' style='color: #0c18ff'>You scored for Computing faculty: " + (tot_comp) + " Points <br><a href='quizTwo_Computing.html' style='color: #0c18ff'><u>Take the Computing Quiz</u></div></a></br>");
      score.append("<div class='two' style='color: #00b26f'>You scored for Engineering faculty: " + (tot_eng) + " Points <br><a href='quizTwo_Engineering.html' style='color: #00b26f'><u>Take the Engineering Quiz</u></div></a></br>");
      score.append("<div class='three' style='color: #c80000'>You scored for Business faculty: " + (tot_bm) + " Points <br><a href='quizTwo_Business.html' style='color: #c80000'><u>Take the Business Quiz</u></div></a></br>");
      score.append("<div class='four' style='color: lightblue'>You scored for Architecture faculty: " + (tot_arch) + " Points<br><a href='quizTwo_Archi.html' style='color: lightblue'><u>View Degrees</u></div></a> </br>");
      score.append("<div class='five' style='color: #ff8e40'>You scored for Hospitality and Cookery faculty: " + (tot_hc) + " Points<br> <a href='quizTwo_Hospitality.html' style='color: #ff8e40'><u>View Degrees</u></div></a></br> ");
      score.append("<div class='five' style='color: #a367e7'>You scored for Humanities and Sciences faculty: " + (tot_hs) + " Points  <br><a href='quizTwo_Humanities.html' style='color: #a367e7'><u>Take the Humanities & Sciences Quiz</u></div></a></br>");
      var fac_score = [tot_comp,tot_eng,tot_bm,tot_arch,tot_hc,tot_hs];
      console.log(sortNumbers(fac_score));
      return score;
    }
  });
})();
loadRes();
function loadRes() {
  var coockie1 = getCookie('eligible_degree_list_al');
  var eligible_degree_list_al = JSON.parse(coockie1);
  console.log("cockiess" + eligible_degree_list_al);
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}
function sortNumbers(points) {
  points.sort(function (a, b) { return b - a });
  return points;
}