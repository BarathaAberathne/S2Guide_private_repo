<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Eliigible Degrees</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
    <style type="text/css">
        .d_list {
            margin-bottom: 30px;
        }
    </style>

    <!--===============================================================================================-->
    <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="css/util.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <!--===============================================================================================-->

</head>

<body>
    <div>
        <div class="container-contact100">
            <div class="wrap-contact100">
                <form class="contact100-form validate-form">
                    <span class="contact100-form-title">
                        Here are the eliigible degrees for you <br>offered by SLIIT
                    </span>

                    <div class="wrap-input100 ">
                        <span class="input100">
                            <ol id="degree_list" class="d_list">

                            </ol>
                        </span>
                    </div>

                    <div class="container-contact100-form-btn">
                        <div class="wrap-contact100-form-btn">
                            <div class="contact100-form-bgbtn"></div>
                            <input type="button" onclick="emailList();" value="Email this list" class="contact100-form-btn">

                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script>

        var firebaseConfig = {
            apiKey: "AIzaSyDPkSmKr-2T6C0_1SFwjWeRFlCzzL5VXc0",
            authDomain: "s2guide.firebaseapp.com",
            databaseURL: "https://s2guide.firebaseio.com",
            projectId: "s2guide",
            storageBucket: "s2guide.appspot.com",
            messagingSenderId: "457852779269",
            appId: "1:457852779269:web:7e27f12f4d807544"
        };

        firebase.initializeApp(firebaseConfig);
        console.log('quiz algo' + firebase);
        database = firebase.database();
    </script>
    <script>
        var degrees;
        var fac_type;
        var eligible_degree_list_al = [];
        var finalList = [];
        var coockie3;
        loadRes();
        function loadRes() {
            var coockie = getCookie('eligible_degree_list_al');
            eligible_degree_list_al = JSON.parse(coockie);

            var coockie2 = getCookie('fac_type');
            fac_type = JSON.parse(coockie2);
            getDegreeList();
        }
        function getDegreeList() {
            var ref = database.ref('Degree_list/');
            ref.on('value', loadFromfirebase, errData);
        }
        function loadFromfirebase(data) {
            console.log("cockiess" + eligible_degree_list_al);
            console.log("Faculty is : " + fac_type);

            degrees = data.val();


            for (var i = 0; i < eligible_degree_list_al.length; i++) {
                var key = eligible_degree_list_al[i];

                var db_fac = degrees[key].faculty;
                var title = degrees[key].degree_title;
                if (matchFac(fac_type,db_fac)==true) {
                    console.log(degrees[key].degree_title);
                    finalList.push(title);
                    var node = document.createElement("LI");
                    var textnode = document.createTextNode(degrees[key].degree_title);
                    node.appendChild(textnode);
                    document.getElementById("degree_list").appendChild(node);
                }

                
            }
        }
        function emailList(){
            console.log(finalList);
            coockie3 = getCookie('student_details');
            details = JSON.parse(coockie3);
            console.log(details);
            console.log(details.name);
            var data = {
    name: $("#form_name").val(),
    email: $("#form_email").val(),
    message: $("#msg_text").val()
};
$.ajax({
    type: "POST",
    url: "email.php",
    data: data,
    success: function(){
        $('.success').fadeIn(1000);
    }
});

        }
        function errData(err) {
            console.log("error!");
            console.log(err);
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
        function matchFac(std_fac, dg_fac) {
            var std_str = std_fac;
            var dg_str = dg_fac;

            var rg = new RegExp(std_str);
            var res = dg_str.match(rg, 'g');
            var rtn;
            if (res == null) {
                rtn = false;
            } else {
                rtn = true;
            }
            return rtn;
        }
    </script>
</body>

</html>