/*document.addEventListener("onread", function(event) {
  document.getElementById("save").addEventListener("click",function(){
    saveRecords();
  });



  document.getElementById("close").addEventListener("click",function(){
    closeApp();
  });
});
*/
function setTop(){
var value = 0;
sessionStorage.top = value;

}

function incrementTop(){

sessionStorage.top = sessionStorage.top++ ;

}
function loadEvents(){

document.getElementById('login').onclick = function() {

    verifyDetails();

 };



}


function log(clickID){
var count =0;
var topOfStack =0;

if(clickID == "login"){


//console.log(  document.querySelector('#myNavigator').getPages())

 verifyDetails();

}

if(clickID == "register"){
  incrementTop()
    sessionStorage.setItem("CurrentPage","registration.html");
    sessionStorage.clickcount++;
    document.querySelector('#myNavigator').pushPage('registration.html', {data: {title: 'Register'}});
    //console.log(app.navi.getPages().length);

}


}

/*
document.addEventListener('init', function(event) {



  var page = event.target;

  if (page.id === 'login') {

    page.querySelector('#register').onclick = function() {

      sessionStorage.setItem("CurrentPage","registration.html");
      sessionStorage.clickcount = ( (sessionStorage.clickcount) + 1 );
      document.querySelector('#myNavigator').pushPage('registration.html', {data: {title: 'Register'}});





    };

     page.querySelector('#login').onclick = function() {

    //   verifyDetails();

    };

  }

  else{


    if (page.id === 'register') {

  //  page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }

}




});

*/
function checkRefresh(){



  if (sessionStorage.clickcount ) {

var currentPage = sessionStorage.getItem("CurrentPage");

if(currentPage == 'registration.html'){
  incrementTop()
 //document.getElementById('remotestorage-widget').style.display ='none';
  document.getElementById("myNavigator").pushPage("registration.html",{data :{ title : "Login"}});

}
if(currentPage == 'login.html'){
  incrementTop()
 //document.getElementById('remotestorage-widget').style.display ='none';
  document.getElementById("myNavigator").pushPage("login.html",{data :{ title : "Login"}});

}

if(currentPage == 'mainmodule.html'){
  incrementTop()
 //document.getElementById('remotestorage-widget').style.display ='none';
  document.getElementById("myNavigator").pushPage("mainmodule.html",{data :{ title : "Login"}});

}



 }
 else
 {
   if(currentPage == 'login.html'){
     setTop();
     incrementTop();
    // document.getElementById('remotestorage-widget').style.display ='none';
     document.getElementById("myNavigator").pushPage("login.html",{data :{ title : "Login"}});
     sessionStorage.clickcount = 0;
     sessionStorage.setItem("CurrentPage","login.html")


   }
else{

  setTop();
  incrementTop();
      document.getElementById("myNavigator").pushPage("login.html",{data :{ title : "Login"}});
      sessionStorage.clickcount = 0;
      sessionStorage.setItem("CurrentPage","login.html")
}


 }


}

/*

$(window).bind('load',function(){


if(window.performance){

var count = sessionStorage.getItem("count");


    if(performance.navigation.type  == 1 ){


              if(count == 1){



                     document.getElementById("myNavigator").pushPage("login.html",{data :{ title : "Login"}});


                }
                else{

                      var object = document.getElementById("myNavigator").topPage.data;

                      document.getElementById("myNavigator").pushPage(object,{data :{ title : "Login"}});

            }




          }
         else {

                  document.getElementById("myNavigator").pushPage("login.html",{data :{ title : "Login"}});

            }




}

});




$(window).bind('unload',function(){

console.log("asdasd");

var object = document.getElementById("myNavigator").topPage.data;


if(object ){

//document.getElementById("myNavigator").setMainPage(object, {data :{ title : "Register"}});

}
else{

document.getElementById("myNavigator").pushPage("logint.html", {data :{ title : "Login"}});

}

});

*/







function loadPage(){


   document.getElementById("myNavigator").pushPage("login.html",{data: {title: 'Login'}});



}

function reloadPage(){


   document.getElementById("myNavigator").pushPage('registration.html',{data: {title: 'Register'}});



}













function verifyDetails(){

incrementTop()

 var userData = [] ;
 var userKey = "" ;

var db = {};
var numberOfRecords = 0;

var items = 0 ;

var userName = "";

var userPassword = "";

var count = 0;

var decryptedName = "";

var    userData = "";

var name ="";

  var text= ["User ID ","User Password"];





 var db = getConnectionObject("records");




try {

if( checkTextBox("logininput",text) ){


   userData = getData("logininput");

     userName = userData[0];
     userPassword = userData[1];


db.executeSql('Select * from record').then(function(records){







  for(items = 0 ; items < records.length ; items++){






   name = records[items].key;
   userKey = generateHashKey(userName + userPassword);

 console.log(name);
 console.log(userKey);

if(name.length){


       if(validateCredential( userKey ,name)){

  //document.querySelector('#modal').show();
     sessionStorage.setItem("CurrentPage","mainmodule.html");
   sessionStorage.setItem("randomID",generateHashKey(userPassword));

   sessionStorage.setItem("userDatabaseName",generateHashKey(userName));

   defineUserModule();

   load(generateHashKey(userName));


       document.querySelector('#myNavigator').pushPage('mainmodule.html', {data: {title: 'Main Application'}});


              count = count + 1;



          }

      }




  }


  if(count == 0){


ons.notification.alert({title :"Login Error" ,message: 'UserName or Password Invalid', modifier:'cta'});
  }



});

}


}

catch(err) {

   alert(err.message);
}







}





   function validateCredential(userTexBoxName,userName){

    if(userName === userTexBoxName){


        return true;

    }
    else{

        return false;
    }









}



   function checkTextBox(textBoxID,text){


    var flag=0;
    var object = document.getElementsByClassName(textBoxID);



    for(var items =0 ;items<object.length;items++){



        if( object[items].value == "" ){

            ons.createPopover('popover.html').then(function(popover) {

                  document.getElementById('errorpage').style.color ='red'
                 document.getElementById('errorpage').innerHTML = text[items]+" "+"Cannot Be Empty" ;
                console.log(popover)
              document.getElementById('popover').show(document.getElementsByClassName(textBoxID)[items]);


            });
          //document.getElementById('errorpage').innerHTML = text[items]+" "+"Cannot Be Empty" ;
          // document.getElementById('popover').show(document.getElementsByClassName(textBoxID)[items]);


            flag = 0;
           break


        }
        else{

            flag++;



        }



    }

  if(flag){


      return true;


  }
  else{


      return false;
  }







}


function closeApp(){

//  var object = document.getElementById('myNavigator').topPage.data;

//document.getElementById('myNavigator').popPage(object);

sessionStorage.setItem('CurrentPage','login.html');
sessionStorage.clickcount = 0;
document.getElementById('myNavigator').pushPage('login.html',{data : {title : 'Login Page'} });



}
