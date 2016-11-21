


cordova.getAppVersion.getVersionNumber().then(function (version) {
 if (!window.localStorage['version'] || window.localStorage['version'] <    version) {
     window.localStorage['version'] = version;

     console.log(window.localStorage['version'])
 }
});
