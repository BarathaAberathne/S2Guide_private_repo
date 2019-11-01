//alert("helloo");
var database;
var firebaseConfig = {
    apiKey: "AIzaSyAwrsDvmof984rMnalGbZZwMILihrLtPm0",
    authDomain: "s2-guide.firebaseapp.com",
    databaseURL: "https://s2-guide.firebaseio.com",
    projectId: "s2-guide",
    storageBucket: "",
    messagingSenderId: "971496001385",
    appId: "1:971496001385:web:5cbc8a5550fe0dfd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  database = firebase.database();
  var tempInqId = "";
  var rIndex, tblInq;
  function submitIquiry(){
    var ref = database.ref('inquiry_list/');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var reply = "";
    //get system date
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth+1)+'-'+ today.getDate();
    var data = {
        name : name,
        email : email,
        subject : subject,
        message : message,
        readBit : 1,
        reply : reply,
        date : date
    }
    ref.push(data);
    alert('Inquiry submitted successfully!')
  }

  function onLoad(){

      var ref = database.ref('inquiry_list/');
      ref.on('value',loadData,errData);
  }
  function loadData(data){
    var inquiries = data.val();
    var keys = Object.keys(inquiries);
    for(var i=0;i<keys.length;i++){
      var k = keys[i];
      var uName = inquiries[k].name;
      var subject = inquiries[k].subject;
      var msg = inquiries[k].message;
      var date = inquiries[k].date;
      var readbit = inquiries[k].readBit;
      console.log(k,uName,subject,msg,date,readbit);

      tblInq = document.getElementById('inq_list');
      var row = tblInq.insertRow(rIndex);

      var userNamecel = row.insertCell(0);
      var subjectcell = row.insertCell(1);
      var msgcell = row.insertCell(2);
      var datecell = row.insertCell(3);
      var actionscell = row.insertCell(4);
      var inqID = row.insertCell(5);
      //add if else function to change row color according to readbit
      if(readbit == 1){
        row.className = 'table-primary';
      }
      userNamecel.appendChild(document.createTextNode(uName));
      subjectcell.appendChild(document.createTextNode(subject));
      msgcell.appendChild(document.createTextNode(msg));
      actionscell.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='readInq(this);'><i class='fas fa-edit'></i></button><button type='button' id = "+k+" class='btn btn-outline-primary' onClick='deleteInquiry(this);'><i class='far fa-trash-alt'></i></button></tr>"
      datecell.appendChild(document.createTextNode(date));
      //inqID.appendChild(document.createTextNode(k));
    }
  }

  function readInq(obj){
    var name = "Baratha";
    var email = "baratha@gmail.com";
    var date = "2019/05/11";
    var subject = "System Error";
    var message = "I got sytem error";

    document.getElementById('selectedId').value = obj.id;
    tempInqId = obj.id;
    console.log(tempInqId);
    document.getElementById('div_inq_list').style.display = "none";
    document.getElementById('div_inq_single').style.display = "block";
    var ref = database.ref('inquiry_list/'+tempInqId);
    ref.once('value',function(snapshot){
      console.log(snapshot.val().name);
      name = snapshot.val().name;
      email = snapshot.val().email;
      date = snapshot.val().date;
      subject = snapshot.val().subject;
      message = snapshot.val().message;
    });
    
    document.getElementById('inq_id').innerHTML = tempInqId;
    document.getElementById('lbl_name').innerHTML = name;
    document.getElementById('lbl_email').innerHTML = " *" + email+"*";
    document.getElementById('lbl_date').innerHTML = date;
    document.getElementById('lbl_subject').innerHTML = subject;
    document.getElementById('lbl_msg').innerHTML = message;

  }
  function replyInq(){
    alert(tempInqId);
    var key = tempInqId;
    var reply;
    reply = document.getElementById("txt_reply").value;
    var data = {
      reply : reply,
      readBit : 0
    }
    database.ref().child('inquiry_list/'+key).update(data);

    alert(reply);
    alert('send successfully');
  }
  function editInq(tempInqId){
  
  }
  function deleteInquiry(obj){
    alert(obj.id);
    var key = obj.id;
    database.ref().child('inquiry_list/'+key).remove();
    reloadPage();
  }
  function errData(err){
    console.log("error!");
    console.log(err);
  }
  function reloadPage(){
    window.location.reload();
  }