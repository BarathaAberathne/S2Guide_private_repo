
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

var rIndex;

function init()
{
    var rootRef = firebase.database().ref('notices/');
    rootRef.on('value', loadDataFromDB, errorLoading);
}

function goBack(){
    document.getElementById("table_group").style.display = "block";
    document.getElementById("tableGroup_n").style.display = "block";
    document.getElementById("div_notices").style.display = "none";
}

//Degrees
function loadDataFromDB(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        var k = keys[i];

        var title = childData[k].notice_topic;
        
      
            tbl1 = document.getElementById('table_notices');
            var row = tbl1.insertRow(rIndex);

            var cellTitle = row.insertCell(0);
            var cellIcon = row.insertCell(1);

            cellTitle.appendChild(document.createTextNode(title));
            cellIcon.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='view_data(this);'><i class='fa fa-envelope'></i></button></tr>"

        
        

    }
}

function view_data(obj) {
    document.getElementById('selectedId').value = obj.id;
    tempLocal_id = obj.id;

    document.getElementById("table_group").style.display = "none";
    document.getElementById("div_notices").style.display = "block";
    document.getElementById("tableGroup_n").style.display = "none";

    var ref = firebase.database().ref('notices/'+tempLocal_id);
    ref.once('value', captureData);

    function captureData(snapshot) {
        notice_topics = snapshot.val().notice_topic;
        
        notice_descriptions = snapshot.val().notice_description;
               
		}
    document.getElementById('topic_label').innerHTML = notice_topics;
    
    document.getElementById('description_label').innerHTML = notice_descriptions;
    
}

function errorLoading(err)
{
    console.log("error!");
    console.log(err);
}

function reload_page()
{
    window.location.reload();
}

