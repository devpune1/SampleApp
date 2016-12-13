




/* Creating remote storage module where we define data type,descriptio,type which tell s type of data added and also define  fucntion */


RemoteStorage.defineModule('bicnSystCorp', function(privateClient) {

  privateClient.declareType('Data', {

    type: 'object',
    description : 'User Data',
    properties: {



      userinfo : { type : 'string'},

      website: { type:'string' },

      hint: { type: 'string' },

     date : {type : 'number'}


    },

    required: ['userinfo']

  });

  return {


    exports: {

         profile : null,

      init: function(profile) {


       privateClient.cache('');

        this.profile = profile;

    console.log(profile)

      },

      on: privateClient.on,

      addUserData: function(type,Id,userData) {

        var Id = Id.toString().replace(/\s|\//g, '-');



        return privateClient.storeObject('Data',this.profile + '/'+Id,userData);


      },


      editUserData: function(userId,userData) {

       userId = userId.toString().replace(/\s|\//g, '-');

         return privateClient.storeObject('Data',this.profile+"/"+userId,userData);

      },

      removeUserData: function(userId) {

      userId = userId.toString().replace(/\s|\//g, '-');



          return  privateClient.remove(this.profile+"/"+userId);
      },

      getUserData: function() {

        return privateClient.getAll(this.profile + '/' );

      },


     getById: function(obj) {


             obj = obj.toString().replace(/\s|\//g, '-');

              return privateClient.getObject(this.profile+"/"+obj);

                }




    }
  };

});
