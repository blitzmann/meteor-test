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
      var template = "<header> <h1>Todo List ( {{$ctrl.incompleteCount}} )</h1> <label class=\"hide-completed\"> <input type=\"checkbox\" ng-model=\"$ctrl.hideCompleted\"> Hide Completed Tasks </label> <login-buttons></login-buttons> <form class=\"new-task\" ng-submit=\"$ctrl.addTask($ctrl.newTask)\" ng-show=\"$ctrl.currentUser\"> <input ng-model=\"$ctrl.newTask\" type=\"text\" name=\"text\" placeholder=\"Type to add new tasks\"> </form> </header> <ul> <li ng-repeat=\"task in $ctrl.tasks\" ng-class=\"{'checked': task.checked, 'private': task.private}\"> <button class=\"delete\" ng-click=\"$ctrl.removeTask(task)\">&times;</button> <input type=\"checkbox\" ng-checked=\"task.checked\" ng-click=\"$ctrl.setChecked(task)\" class=\"toggle-checked\"> <span class=\"text\"> <strong>{{task.username}}</strong> - {{task.text}} </span> <button class=\"toggle-private\" ng-click=\"$ctrl.setPrivate(task)\" ng-show=\"task.owner === $ctrl.currentUser._id\"> {{task.private == true ? \"Private\" : \"Public\"}} </button> </li> </ul> ";
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

},"todosList.js":["babel-runtime/helpers/classCallCheck","angular","angular-meteor","../../api/tasks.js","meteor/meteor","./todosList.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// imports/components/todosList/todosList.js                                                                   //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var angular;module.import('angular',{"default":function(v){angular=v}});var angularMeteor;module.import('angular-meteor',{"default":function(v){angularMeteor=v}});var Tasks;module.import('../../api/tasks.js',{"Tasks":function(v){Tasks=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var template;module.import('./todosList.html',{"default":function(v){template=v}});
                                                                                                               // 1
                                                                                                               // 2
                                                                                                               // 3
                                                                                                               // 4
                                                                                                               // 5
                                                                                                               //
var TodosListCtrl = function () {                                                                              //
  function TodosListCtrl($scope) {                                                                             // 8
    _classCallCheck(this, TodosListCtrl);                                                                      // 8
                                                                                                               //
    $scope.viewModel(this);                                                                                    // 9
                                                                                                               //
    this.subscribe('tasks');                                                                                   // 11
    this.hideCompleted = false;                                                                                // 12
                                                                                                               //
    this.helpers({                                                                                             // 14
      tasks: function tasks() {                                                                                // 15
        var selector = {};                                                                                     // 16
                                                                                                               //
        // If hide completed is checked, filter tasks                                                          //
        if (this.getReactively('hideCompleted')) {                                                             // 19
          selector.checked = {                                                                                 // 20
            $ne: true                                                                                          // 21
          };                                                                                                   // 20
        }                                                                                                      // 23
                                                                                                               //
        // Show newest tasks at the top                                                                        //
        return Tasks.find(selector, {                                                                          // 26
          sort: {                                                                                              // 27
            createdAt: -1                                                                                      // 28
          }                                                                                                    // 27
        });                                                                                                    // 26
      },                                                                                                       // 31
      incompleteCount: function incompleteCount() {                                                            // 32
        return Tasks.find({                                                                                    // 33
          checked: {                                                                                           // 34
            $ne: true                                                                                          // 35
          }                                                                                                    // 34
        }).count();                                                                                            // 33
      },                                                                                                       // 38
      currentUser: function currentUser() {                                                                    // 39
        return Meteor.user();                                                                                  // 40
      }                                                                                                        // 41
    });                                                                                                        // 14
  }                                                                                                            // 43
                                                                                                               //
  TodosListCtrl.prototype.addTask = function addTask(newTask) {                                                //
    // Insert a task into the collection                                                                       //
    Meteor.call('tasks.insert', newTask);                                                                      // 47
                                                                                                               //
    // Clear form                                                                                              //
    this.newTask = '';                                                                                         // 50
  };                                                                                                           // 51
                                                                                                               //
  TodosListCtrl.prototype.setPrivate = function setPrivate(task) {                                             //
    Meteor.call('tasks.setPrivate', task._id, !task['private']);                                               // 54
  };                                                                                                           // 55
                                                                                                               //
  TodosListCtrl.prototype.setChecked = function setChecked(task) {                                             //
    // Set the checked property to the opposite of its current value                                           //
    Meteor.call('tasks.setChecked', task._id, !task.checked);                                                  // 59
  };                                                                                                           // 60
                                                                                                               //
  TodosListCtrl.prototype.removeTask = function removeTask(task) {                                             //
    Meteor.call('tasks.remove', task._id);                                                                     // 63
  };                                                                                                           // 64
                                                                                                               //
  return TodosListCtrl;                                                                                        //
}();                                                                                                           //
                                                                                                               //
module.export("default",exports.default=(angular.module('todosList', [angularMeteor]).component('todosList', {
  templateUrl: 'imports/components/todosList/todosList.html',                                                  // 72
  controller: ['$scope', TodosListCtrl]                                                                        // 73
})));                                                                                                          // 71
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"api":{"tasks.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// imports/api/tasks.js                                                                                        //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
module.export({Tasks:function(){return Tasks}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                               // 2
                                                                                                               // 3
                                                                                                               //
var Tasks = new Mongo.Collection('tasks');                                                                     // 5
                                                                                                               //
if (Meteor.isServer) {                                                                                         // 7
  // This code only runs on the server                                                                         //
  // Only publish tasks that are public or belong to the current user                                          //
  Meteor.publish('tasks', function tasksPublication() {                                                        // 10
    return Tasks.find({                                                                                        // 11
      $or: [{                                                                                                  // 12
        'private': {                                                                                           // 13
          $ne: true                                                                                            // 14
        }                                                                                                      // 13
      }, {                                                                                                     // 12
        owner: this.userId                                                                                     // 17
      }]                                                                                                       // 16
    });                                                                                                        // 11
  });                                                                                                          // 20
}                                                                                                              // 21
                                                                                                               //
Meteor.methods({                                                                                               // 23
  'tasks.insert': function tasksInsert(text) {                                                                 // 24
    check(text, String);                                                                                       // 25
                                                                                                               //
    // Make sure the user is logged in before inserting a task                                                 //
    if (!Meteor.userId()) {                                                                                    // 28
      throw new Meteor.Error('not-authorized');                                                                // 29
    }                                                                                                          // 30
                                                                                                               //
    Tasks.insert({                                                                                             // 32
      text: text,                                                                                              // 33
      createdAt: new Date(),                                                                                   // 34
      owner: Meteor.userId(),                                                                                  // 35
      username: Meteor.user().username                                                                         // 36
    });                                                                                                        // 32
  },                                                                                                           // 38
  'tasks.remove': function tasksRemove(taskId) {                                                               // 39
    check(taskId, String);                                                                                     // 40
                                                                                                               //
    var task = Tasks.findOne(taskId);                                                                          // 42
    if (task['private'] && task.owner !== Meteor.userId()) {                                                   // 43
      // If the task is private, make sure only the owner can delete it                                        //
      throw new Meteor.Error('not-authorized');                                                                // 45
    }                                                                                                          // 46
                                                                                                               //
    Tasks.remove(taskId);                                                                                      // 48
  },                                                                                                           // 49
  'tasks.setPrivate': function tasksSetPrivate(taskId, setToPrivate) {                                         // 50
    check(taskId, String);                                                                                     // 51
    check(setToPrivate, Boolean);                                                                              // 52
                                                                                                               //
    var task = Tasks.findOne(taskId);                                                                          // 54
                                                                                                               //
    // Make sure only the task owner can make a task private                                                   //
    if (task.owner !== Meteor.userId()) {                                                                      // 57
      throw new Meteor.Error('not-authorized');                                                                // 58
    }                                                                                                          // 59
                                                                                                               //
    Tasks.update(taskId, {                                                                                     // 61
      $set: {                                                                                                  // 62
        'private': setToPrivate                                                                                // 63
      }                                                                                                        // 62
    });                                                                                                        // 61
  },                                                                                                           // 66
  'tasks.setChecked': function tasksSetChecked(taskId, setChecked) {                                           // 67
    check(taskId, String);                                                                                     // 68
    check(setChecked, Boolean);                                                                                // 69
                                                                                                               //
    var task = Tasks.findOne(taskId);                                                                          // 71
    if (task['private'] && task.owner !== Meteor.userId()) {                                                   // 72
      // If the task is private, make sure only the owner can check it off                                     //
      throw new Meteor.Error('not-authorized');                                                                // 74
    }                                                                                                          // 75
                                                                                                               //
    Tasks.update(taskId, {                                                                                     // 77
      $set: {                                                                                                  // 78
        checked: setChecked                                                                                    // 79
      }                                                                                                        // 78
    });                                                                                                        // 77
  }                                                                                                            // 82
});                                                                                                            // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"startup":{"accounts-config.js":["meteor/accounts-base",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// imports/startup/accounts-config.js                                                                          //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});                       // 1
                                                                                                               //
Accounts.ui.config({                                                                                           // 3
  passwordSignupFields: 'USERNAME_ONLY'                                                                        // 4
});                                                                                                            // 3
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

},"main.js":["angular","angular-meteor","../imports/components/todosList/todosList","../imports/startup/accounts-config.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// client/main.js                                                                                              //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var angular;module.import('angular',{"default":function(v){angular=v}});var angularMeteor;module.import('angular-meteor',{"default":function(v){angularMeteor=v}});var todosList;module.import('../imports/components/todosList/todosList',{"default":function(v){todosList=v}});module.import('../imports/startup/accounts-config.js');
                                                                                                               // 2
                                                                                                               // 3
                                                                                                               // 4
                                                                                                               //
angular.module('simple-todos', [angularMeteor, todosList.name, 'accounts.ui']);                                // 6
                                                                                                               //
function onReady() {                                                                                           // 12
  angular.bootstrap(document, ['simple-todos']);                                                               // 13
}                                                                                                              // 14
                                                                                                               //
if (Meteor.isCordova) {                                                                                        // 16
  angular.element(document).on('deviceready', onReady);                                                        // 17
} else {                                                                                                       // 18
  angular.element(document).ready(onReady);                                                                    // 19
}                                                                                                              // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/main.html.js");
require("./client/main.js");