var require = meteorInstall({"imports":{"components":{"todosList":{"todosList.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// imports/components/todosList/todosList.html                                                                 //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
      if (Meteor.isServer) return;                                                                             // 2
                                                                                                               // 3
      var templateUrl = "/imports/components/todosList/todosList.html";                                        // 4
      var template = "<header> <h1>Todo List</h1> <form class=\"new-task\" ng-submit=\"$ctrl.addTask($ctrl.newTask)\"> <input ng-model=\"$ctrl.newTask\" type=\"text\" name=\"text\" placeholder=\"Type to add new tasks\"> </form> </header> <ul> <li ng-repeat=\"task in $ctrl.tasks\" ng-class=\"{'checked': task.checked}\"> <button class=\"delete\" ng-click=\"$ctrl.removeTask(task)\">&times;</button> <input type=\"checkbox\" ng-checked=\"task.checked\" ng-click=\"$ctrl.setChecked(task)\" class=\"toggle-checked\"> <span class=\"text\"> {{task.text}} </span> </li> </ul> ";
                                                                                                               // 6
      angular.module('angular-templates')                                                                      // 7
        .run(['$templateCache', function($templateCache) {                                                     // 8
          $templateCache.put(templateUrl, template);                                                           // 9
        }]);                                                                                                   // 10
                                                                                                               // 11
      module.exports = {};                                                                                     // 12
      module.exports.__esModule = true;                                                                        // 13
      module.exports.default = templateUrl;                                                                    // 14
                                                                                                               // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"todosList.js":["babel-runtime/helpers/classCallCheck","angular","angular-meteor","../../api/tasks.js","./todosList.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// imports/components/todosList/todosList.js                                                                   //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var angular;module.import('angular',{"default":function(v){angular=v}});var angularMeteor;module.import('angular-meteor',{"default":function(v){angularMeteor=v}});var Tasks;module.import('../../api/tasks.js',{"Tasks":function(v){Tasks=v}});var template;module.import('./todosList.html',{"default":function(v){template=v}});
                                                                                                               // 1
                                                                                                               // 2
                                                                                                               // 3
                                                                                                               //
                                                                                                               // 5
                                                                                                               //
var TodosListCtrl = function () {                                                                              //
  function TodosListCtrl($scope) {                                                                             // 8
    _classCallCheck(this, TodosListCtrl);                                                                      // 8
                                                                                                               //
    $scope.viewModel(this);                                                                                    // 9
                                                                                                               //
    this.helpers({                                                                                             // 11
      tasks: function tasks() {                                                                                // 12
        return Tasks.find({}, {                                                                                // 13
          sort: {                                                                                              // 14
            createdAt: -1                                                                                      // 15
          }                                                                                                    // 14
        });                                                                                                    // 13
      }                                                                                                        // 18
    });                                                                                                        // 11
  }                                                                                                            // 20
                                                                                                               //
  TodosListCtrl.prototype.addTask = function addTask(newTask) {                                                //
    // Insert a task into the collection                                                                       //
    Tasks.insert({                                                                                             // 24
      text: newTask,                                                                                           // 25
      createdAt: new Date()                                                                                    // 26
    });                                                                                                        // 24
                                                                                                               //
    // Clear form                                                                                              //
    this.newTask = '';                                                                                         // 30
  };                                                                                                           // 31
                                                                                                               //
  TodosListCtrl.prototype.setChecked = function setChecked(task) {                                             //
    // Set the checked property to the opposite of its current value                                           //
    Tasks.update(task._id, {                                                                                   // 35
      $set: {                                                                                                  // 36
        checked: !task.checked                                                                                 // 37
      }                                                                                                        // 36
    });                                                                                                        // 35
  };                                                                                                           // 40
                                                                                                               //
  TodosListCtrl.prototype.removeTask = function removeTask(task) {                                             //
    Tasks.remove(task._id);                                                                                    // 43
  };                                                                                                           // 44
                                                                                                               //
  return TodosListCtrl;                                                                                        //
}();                                                                                                           //
                                                                                                               //
module.export("default",exports.default=(angular.module('todosList', [angularMeteor]).component('todosList', {
  templateUrl: 'imports/components/todosList/todosList.html',                                                  // 52
  controller: ['$scope', TodosListCtrl]                                                                        // 53
})));                                                                                                          // 51
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"api":{"tasks.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// imports/api/tasks.js                                                                                        //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
module.export({Tasks:function(){return Tasks}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                               //
var Tasks = new Mongo.Collection('tasks');                                                                     // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"client":{"main.html.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// client/main.html.js                                                                                         //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
            Meteor.startup(function() {                                                                        // 2
              var attrs = {};                                                                                  // 3
              for (var prop in attrs) {                                                                        // 4
                document.body.setAttribute(prop, attrs[prop]);                                                 // 5
              }                                                                                                // 6
            });                                                                                                // 7
                                                                                                               // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["angular","angular-meteor","../imports/components/todosList/todosList",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// client/main.js                                                                                              //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var angular;module.import('angular',{"default":function(v){angular=v}});var angularMeteor;module.import('angular-meteor',{"default":function(v){angularMeteor=v}});var todosList;module.import('../imports/components/todosList/todosList',{"default":function(v){todosList=v}});
                                                                                                               // 2
                                                                                                               // 3
                                                                                                               //
angular.module('simple-todos', [angularMeteor, todosList.name]);                                               // 5
                                                                                                               //
function onReady() {                                                                                           // 10
  angular.bootstrap(document, ['simple-todos']);                                                               // 11
}                                                                                                              // 12
                                                                                                               //
if (Meteor.isCordova) {                                                                                        // 14
  angular.element(document).on('deviceready', onReady);                                                        // 15
} else {                                                                                                       // 16
  angular.element(document).ready(onReady);                                                                    // 17
}                                                                                                              // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/main.html.js");
require("./client/main.js");