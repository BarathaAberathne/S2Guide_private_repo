
 var divs = ["DivAns1", "DivAns2", "DivAns3", "DivAns4","DivAns5","DivAns6"];
 var i, j;
 // i is to count divs, i is to count clicks
 var clicks = 0;
 var removeClicks = 0;
 var countAns = 0;
function save_n(){
    


    var q_topic = document.getElementById('q_topic').value;

    var ans1 =  document.getElementById('ans1').value;
    var comp_score1 = document.getElementById('comp_score1').value;
    var eng_score1 = document.getElementById('eng_score1').value;
    var bm_score1 = document.getElementById('bm_score1').value;
    var arch_score1 = document.getElementById('arch_score1').value;
    var hs_score1 = document.getElementById('hs_score1').value;
    var hc_score1 = document.getElementById('hc_score1').value;

    var ans2 =  document.getElementById('ans2').value;
    var comp_score2 = document.getElementById('comp_score2').value;
    var eng_score2 = document.getElementById('eng_score2').value;
    var bm_score2 = document.getElementById('bm_score2').value;
    var arch_score2 = document.getElementById('arch_score2').value;
    var hs_score2 = document.getElementById('hs_score2').value;
    var hc_score2 = document.getElementById('hc_score2').value;


    var ans3 =  document.getElementById('ans3').value;
    var comp_score3 = document.getElementById('comp_score3').value;
    var eng_score3 = document.getElementById('eng_score3').value;
    var bm_score3 = document.getElementById('bm_score3').value;
    var arch_score3 = document.getElementById('arch_score3').value;
    var hs_score3 = document.getElementById('hs_score3').value;
    var hc_score3 = document.getElementById('hc_score3').value;

    var ans4 =  document.getElementById('ans4').value;
    var comp_score4 = document.getElementById('comp_score4').value;
    var eng_score4 = document.getElementById('eng_score4').value;
    var bm_score4 = document.getElementById('bm_score4').value;
    var arch_score4 = document.getElementById('arch_score4').value;
    var hs_score4 = document.getElementById('hs_score4').value;
    var hc_score4 = document.getElementById('hc_score4').value;

    var ans5 =  document.getElementById('ans5').value;
    var comp_score5 = document.getElementById('comp_score5').value;
    var eng_score5 = document.getElementById('eng_score5').value;
    var bm_score5 = document.getElementById('bm_score5').value;
    var arch_score5 = document.getElementById('arch_score5').value;
    var hs_score5 = document.getElementById('hs_score5').value;
    var hc_score5 = document.getElementById('hc_score5').value;

    var ans6 =  document.getElementById('ans6').value;
    var comp_score6 = document.getElementById('comp_score6').value;
    var eng_score6 = document.getElementById('eng_score6').value;
    var bm_score6 = document.getElementById('bm_score6').value;
    var arch_score6 = document.getElementById('arch_score6').value;
    var hs_score6 = document.getElementById('hs_score6').value;
    var hc_score6 = document.getElementById('hc_score6').value;

    var count = countAnswers();
    var qid = firebase.database().ref().child('QuizPartOne').push().key;

    var data = {
        totAnswers: count,
        ans6: {"answer":ans6, "comp":comp_score6,"eng":eng_score6,"bm":bm_score6,"arch":arch_score6,"hs":hs_score6,"hc":hc_score6 },
        ans5: {"answer":ans5, "comp":comp_score5,"eng":eng_score5,"bm":bm_score5,"arch":arch_score5,"hs":hs_score5,"hc":hc_score5 },
        ans4: {"answer":ans4, "comp":comp_score4,"eng":eng_score4,"bm":bm_score4,"arch":arch_score4,"hs":hs_score4,"hc":hc_score4 },
        ans3: {"answer":ans3, "comp":comp_score3,"eng":eng_score3,"bm":bm_score3,"arch":arch_score3,"hs":hs_score3,"hc":hc_score3 },
        ans2: {"answer":ans2, "comp":comp_score2,"eng":eng_score2,"bm":bm_score2,"arch":arch_score2,"hs":hs_score2,"hc":hc_score2 },
        ans1: {"answer":ans1, "comp":comp_score1,"eng":eng_score1,"bm":bm_score1,"arch":arch_score1,"hs":hs_score1,"hc":hc_score1 },
        question:q_topic,
        qid: qid
      }
      var updates = {};
      updates['/QuizPartOne/' + qid] = data;
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
        case "comp1":
            if(checkBox.checked == true){
        
                document.getElementById("comp_score1").disabled = false;
            }else{
                document.getElementById("comp_score1").disabled = true;
        
            }
            break;
        case "eng1":
            if(checkBox.checked == true){
        
                document.getElementById("eng_score1").disabled = false;
            }else{
                document.getElementById("eng_score1").disabled = true;
        
            }
            break;   
        case "bm1":
            if(checkBox.checked == true){
                document.getElementById("bm_score1").disabled = false;
            }else{
                document.getElementById("bm_score1").disabled = true;
            }
            break;  
        case "arch1":
            if(checkBox.checked == true){
                document.getElementById("arch_score1").disabled = false;
            }else{
                document.getElementById("arch_score1").disabled = true;
            }
            break;
        case "hs1":
            if(checkBox.checked == true){
                document.getElementById("hs_score1").disabled = false;
            }else{
                document.getElementById("hs_score1").disabled = true;
            }
            break;
        case "hc1":
            if(checkBox.checked == true){
                document.getElementById("hc_score1").disabled = false;
            }else{
                document.getElementById("hc_score1").disabled = true;
            }
            break;    
    }

}
function enable2(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "comp2":
            if(checkBox.checked == true){
        
                document.getElementById("comp_score2").disabled = false;
            }else{
                document.getElementById("comp_score2").disabled = true;
        
            }
            break;
        case "eng2":
            if(checkBox.checked == true){
        
                document.getElementById("eng_score2").disabled = false;
            }else{
                document.getElementById("eng_score2").disabled = true;
        
            }
            break;   
        case "bm2":
            if(checkBox.checked == true){
                document.getElementById("bm_score2").disabled = false;
            }else{
                document.getElementById("bm_score2").disabled = true;
            }
            break;  
        case "arch2":
            if(checkBox.checked == true){
                document.getElementById("arch_score2").disabled = false;
            }else{
                document.getElementById("arch_score2").disabled = true;
            }
            break;
        case "hs2":
            if(checkBox.checked == true){
                document.getElementById("hs_score2").disabled = false;
            }else{
                document.getElementById("hs_score2").disabled = true;
            }
            break;
        case "hc2":
            if(checkBox.checked == true){
                document.getElementById("hc_score2").disabled = false;
            }else{
                document.getElementById("hc_score2").disabled = true;
            }
            break;    
    }

}
function enable3(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "comp3":
            if(checkBox.checked == true){
        
                document.getElementById("comp_score3").disabled = false;
            }else{
                document.getElementById("comp_score3").disabled = true;
        
            }
            break;
        case "eng3":
            if(checkBox.checked == true){
        
                document.getElementById("eng_score3").disabled = false;
            }else{
                document.getElementById("eng_score3").disabled = true;
        
            }
            break;   
        case "bm3":
            if(checkBox.checked == true){
                document.getElementById("bm_score3").disabled = false;
            }else{
                document.getElementById("bm_score3").disabled = true;
            }
            break;  
        case "arch3":
            if(checkBox.checked == true){
                document.getElementById("arch_score3").disabled = false;
            }else{
                document.getElementById("arch_score3").disabled = true;
            }
            break;
        case "hs3":
            if(checkBox.checked == true){
                document.getElementById("hs_score3").disabled = false;
            }else{
                document.getElementById("hs_score3").disabled = true;
            }
            break;
        case "hc3":
            if(checkBox.checked == true){
                document.getElementById("hc_score3").disabled = false;
            }else{
                document.getElementById("hc_score3").disabled = true;
            }
            break;    
    }

}
function enable4(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "comp4":
            if(checkBox.checked == true){
        
                document.getElementById("comp_score4").disabled = false;
            }else{
                document.getElementById("comp_score4").disabled = true;
        
            }
            break;
        case "eng4":
            if(checkBox.checked == true){
        
                document.getElementById("eng_score4").disabled = false;
            }else{
                document.getElementById("eng_score4").disabled = true;
        
            }
            break;   
        case "bm4":
            if(checkBox.checked == true){
                document.getElementById("bm_score4").disabled = false;
            }else{
                document.getElementById("bm_score4").disabled = true;
            }
            break;  
        case "arch4":
            if(checkBox.checked == true){
                document.getElementById("arch_score4").disabled = false;
            }else{
                document.getElementById("arch_score4").disabled = true;
            }
            break;
        case "hs4":
            if(checkBox.checked == true){
                document.getElementById("hs_score4").disabled = false;
            }else{
                document.getElementById("hs_score4").disabled = true;
            }
            break;
        case "hc4":
            if(checkBox.checked == true){
                document.getElementById("hc_score4").disabled = false;
            }else{
                document.getElementById("hc_score4").disabled = true;
            }
            break;    
    }

}
function enable5(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "comp5":
            if(checkBox.checked == true){
        
                document.getElementById("comp_score5").disabled = false;
            }else{
                document.getElementById("comp_score5").disabled = true;
        
            }
            break;
        case "eng5":
            if(checkBox.checked == true){
        
                document.getElementById("eng_score5").disabled = false;
            }else{
                document.getElementById("eng_score5").disabled = true;
        
            }
            break;   
        case "bm5":
            if(checkBox.checked == true){
                document.getElementById("bm_score5").disabled = false;
            }else{
                document.getElementById("bm_score5").disabled = true;
            }
            break;  
        case "arch5":
            if(checkBox.checked == true){
                document.getElementById("arch_score5").disabled = false;
            }else{
                document.getElementById("arch_score5").disabled = true;
            }
            break;
        case "hs5":
            if(checkBox.checked == true){
                document.getElementById("hs_score5").disabled = false;
            }else{
                document.getElementById("hs_score5").disabled = true;
            }
            break;
        case "hc5":
            if(checkBox.checked == true){
                document.getElementById("hc_score5").disabled = false;
            }else{
                document.getElementById("hc_score5").disabled = true;
            }
            break;    
    }

}
function enable6(id) {
    var checkBox = document.getElementById(id);
    switch (id) {
        case "comp6":
            if(checkBox.checked == true){
        
                document.getElementById("comp_score6").disabled = false;
            }else{
                document.getElementById("comp_score6").disabled = true;
        
            }
            break;
        case "eng6":
            if(checkBox.checked == true){
        
                document.getElementById("eng_score6").disabled = false;
            }else{
                document.getElementById("eng_score6").disabled = true;
        
            }
            break;   
        case "bm6":
            if(checkBox.checked == true){
                document.getElementById("bm_score6").disabled = false;
            }else{
                document.getElementById("bm_score6").disabled = true;
            }
            break;  
        case "arch6":
            if(checkBox.checked == true){
                document.getElementById("arch_score6").disabled = false;
            }else{
                document.getElementById("arch_score6").disabled = true;
            }
            break;
        case "hs6":
            if(checkBox.checked == true){
                document.getElementById("hs_score6").disabled = false;
            }else{
                document.getElementById("hs_score6").disabled = true;
            }
            break;
        case "hc6":
            if(checkBox.checked == true){
                document.getElementById("hc_score6").disabled = false;
            }else{
                document.getElementById("hc_score6").disabled = true;
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
function removeAnswer2() {

    removeClicks = removeClicks + 1;
    j = 0;

    for(i = divs.length; i >= 0; i--) {
        if(j<removeClicks) {
            var y = document.getElementById(divs[i-1]);
            if (y.style.display === "block") {
                y.style.display = "none";
           }
        j++;
        } 
    }
}
function removeAnswer() {

    removeClicks = removeClicks + 1;

    switch(removeClicks){
        case 1:
            var y = document.getElementById("DivAns6");
            if (y.style.display === "block") {
                 y.style.display = "none";
            } 
            break;
        case 2:
            var y = document.getElementById("DivAns5");
            if (y.style.display === "block") {
                 y.style.display = "none";
            } 
            break;
        case 3:
            var y = document.getElementById("DivAns4");
            if (y.style.display === "block") {
                 y.style.display = "none";
            } 
            break;  
        case 4:
            var y = document.getElementById("DivAns3");
            if (y.style.display === "block") {
                 y.style.display = "none";
            } 
            break; 
        case 5:
            var y = document.getElementById("DivAns2");
            if (y.style.display === "block") {
                 y.style.display = "none";
            } 
            break;    
        case 6:
            var y = document.getElementById("DivAns1");
            if (y.style.display === "block") {
                 y.style.display = "none";
            } 
            break;  
    }
            
    
}
