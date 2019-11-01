
 var divs = ["DivAns1", "DivAns2", "DivAns3", "DivAns4","DivAns5","DivAns6"];
 var i, j;
 // i is to count divs, i is to count clicks
 var clicks = 0;
 var removeClicks = 0;
function save_n(){
    

    var faculties = document.getElementsByClassName('fac');
    var selectedFaculties="";
				for(var j=0; j<faculties.length; j++){
					if(faculties[j].type=='checkbox' && faculties[j].checked==true)
                    selectedFaculties+=faculties[j].value;
				}
				
    var q_topic = document.getElementById('q_topic').value;
    var ans1 =  document.getElementByName('a').value;

    var qid = firebase.database().ref().child('testingQuizPartOne').push().key;

    var data = {
        question:q_topic,
        ans: ans1

        
      }
      var updates = {};
      updates['/testingQuizPartOne/' + qid] = data;
      firebase.database().ref().update(updates);
      

         // var updates = {};
    //      var ref = firebase.database().ref('testingQuizPartOne');
         // ref.update(data);
    
   
    
     


    alert('The question is created successfully!');
    reload_page();

}
   
function reload_page(){
    window.location.reload();   
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

    for(i = 0; i < divs.length; i++) {
        for(j = 0; i < clicks; i++) {
            var x = document.getElementById(divs[i]);
            if (x.style.display === "none") {
                x.style.display = "block";
            }
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
