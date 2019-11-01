//alert("helloo");
var database;
var firebaseConfig = {
  apiKey: "AIzaSyDPkSmKr-2T6C0_1SFwjWeRFlCzzL5VXc0",
  authDomain: "s2guide.firebaseapp.com",
  databaseURL: "https://s2guide.firebaseio.com",
  projectId: "s2guide",
  storageBucket: "s2guide.appspot.com",
  messagingSenderId: "457852779269",
  appId: "1:457852779269:web:7e27f12f4d807544"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

database = firebase.database();
var tempInqId = "";
var rIndex, tblInq;
function submitIquiry(){
  var ref = database.ref('inquiry_lists/');
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  //alert(name);
  var data = {
    name : name,
    email : email,
    subject : subject,
    message : message,
    readBit : 1
  }
  ref.push(data);
}

function onLoad(){
  var ref = database.ref('inquiry_list/');
  //displayPage();
  ref.on('value',loadData,errData);
  //var list = document.getElementById("div_inq_list");
  // list.style.display == "hidden";

}
function loadData(data){
  //console.log(data.val());
  inquiries = data.val();
  var keys = Object.keys(inquiries);
  //console.log(keys);
  for(var i=0;i<keys.length;i++){
    var k = keys[i];
    var uName = inquiries[k].name;
    var subject = inquiries[k].subject;
    var msg = inquiries[k].message;
    var date = inquiries[k].date;

    console.log(k,uName,subject,msg,date);

    tblInq = document.getElementById('inq_list');
    var row = tblInq.insertRow(rIndex);

    var userNamecel = row.insertCell(0);
    var subjectcell = row.insertCell(1);
    var msgcell = row.insertCell(2);
    var datecell = row.insertCell(3);
    var actionscell = row.insertCell(4);
    var inqID = row.insertCell(5);
//add if else function to change row color according to readbit
    userNamecel.appendChild(document.createTextNode(uName));
    subjectcell.appendChild(document.createTextNode(subject));
    msgcell.appendChild(document.createTextNode(msg));
    actionscell.outerHTML = "<tr id="+k+"><button type='button' id='"+k+"' class='btn btn-outline-primary' onClick='readInq(this);'><i class='fa fa-reply'></i></button><button type='button' class='btn btn-outline-primary' onClick='deleteInquiry();'><i class='far fa-trash-alt'></i></button></tr>"
    datecell.appendChild(document.createTextNode(date));
    //inqID.appendChild(document.createTextNode(k));

  }
}

function readInq(obj){
  //alert(obj.id);
  document.getElementById('selectedId').value = obj.id;
  tempInqId = obj.id;
  //alert(tempInqId);
  console.log(tempInqId);
  document.getElementById('div_inq_list').style.display = "none";
  document.getElementById('div_inq_single').style.display = "block";
  var temp_name = inquiries[tempInqId].name;
  var temp_email = inquiries[tempInqId].email;
  var temp_date = inquiries[tempInqId].date;
  var temp_subject = inquiries[tempInqId].subject;
  var temp_message = inquiries[tempInqId].message;
  //display this in <p>
  document.getElementById('lbl_name').innerHTML=temp_name;
  document.getElementById('lbl_email').innerHTML=temp_email;
  document.getElementById('lbl_date').innerHTML=temp_date;
  document.getElementById('lbl_subject').innerHTML=temp_subject;
  document.getElementById('lbl_msg').innerHTML=temp_message;

  console.log("Name :"+temp_name);

}
function replyInq(){
  alert("Replied inquery successfully to email");
}
function editInq(tempInqId){

}
function deleteInquiry(){

}
function errData(err){
  console.log("error!");
  console.log(err);
}












