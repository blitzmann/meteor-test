//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Template = Package.templating.Template;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"dotansimha:accounts-ui-angular":{"accounts-ui-angular.js":["meteor/tmeasday:check-npm-versions","angular",function(require,exports,module){

////////////////////////////////////////////////////////////////////////
//                                                                    //
// packages/dotansimha_accounts-ui-angular/accounts-ui-angular.js     //
//                                                                    //
////////////////////////////////////////////////////////////////////////
                                                                      //
var checkNpmVersions;module.import('meteor/tmeasday:check-npm-versions',{"checkNpmVersions":function(v){checkNpmVersions=v}});
                                                                      //
if (!window.angular) {                                                // 3
  require("angular");                                                 // 4
}                                                                     // 5
                                                                      //
checkNpmVersions({                                                    // 7
  'angular': '^1.2.27'                                                // 8
});                                                                   // 7
                                                                      //
angular.module('accounts.ui', []);                                    // 11
////////////////////////////////////////////////////////////////////////

}],"login-buttons-directive.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////
//                                                                    //
// packages/dotansimha_accounts-ui-angular/login-buttons-directive.js //
//                                                                    //
////////////////////////////////////////////////////////////////////////
                                                                      //
angular.module('accounts.ui').directive('loginButtons', function () {
  return {                                                            // 2
    restrict: 'EA',                                                   // 3
    scope: true,                                                      // 4
    template: '<div></div>',                                          // 5
    link: function link(scope, element) {                             // 6
      Blaze.render(Template.loginButtons, element[0]);                // 7
    }                                                                 // 8
  };                                                                  // 2
});                                                                   // 10
////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/dotansimha:accounts-ui-angular/accounts-ui-angular.js");
require("./node_modules/meteor/dotansimha:accounts-ui-angular/login-buttons-directive.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['dotansimha:accounts-ui-angular'] = {};

})();
