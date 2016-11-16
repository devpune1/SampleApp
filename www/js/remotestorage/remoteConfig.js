

function load(userDatabaseName) {

  console.log(userDatabaseName);

RemoteStorage.config.changeEvents.window = false;

// Claim read/write access for the /myfavoritedrinks category
remoteStorage.access.claim('bicService','rw');

// Display the RS connect widget
remoteStorage.displayWidget();

remoteStorage.bicService.init();

remoteStorage.bicService.getAllData().then(function(transactions){

//clearRemoteStorage();
for(var id in transactions){



     //clearRemoteStorage(transactions[id].date);
    removeDuplicate(transactions[id],userDatabaseName);




}



});

}


function removeDuplicate(object,userDatabaseName){


    var numberOfItem = null;
  var userDataObject = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userName = [];
  var dataItem = [];

  var dataSource = [];
   var userArray = getInputId();

console.log(userDatabaseName);

 var db =  getConnectionObject(userDatabaseName);

if(object !== true){


 db.executeSql('SELECT * FROM  userData').then (function(results) {

 if(results.length){

 userEncryptionKey =  sessionStorage.getItem("randomID") ;

        for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {


                console.log("value ="+object);

                console.log(object);



                  userDataObject  = results[numberOfItem];





if(generateHashKey(userDataObject.userinfo) !== generateHashKey(object.userinfo)){


                             count = count + 1;


}
else {


                        count = 0;

                        break;

                    }




             }

           if(count){



                  db.put('userData',userDataObject).done(function(){

                   });


           }




 }
 else{



  db.put('userData',object).done(function(){

    console.log("entered");

   });



}

}, function(e) {

  throw e;


});

}

 }




    function clearRemoteStorage(){

      remoteStorage.bicService.getAllData().then(function(transactions){

      for(var id in transactions){



        remoteStorage.bicService.removeUserData(transactions[id].date);



        }


      });

    }


    function clearRemoteStorage(timeStamp){

        remoteStorage.bicService.removeUserData(timeStamp);


    }



    
