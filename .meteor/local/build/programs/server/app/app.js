var require = meteorInstall({"imports":{"api":{"tasks.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/tasks.js                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({Tasks:function(){return Tasks}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     //
var Tasks = new Mongo.Collection('tasks');                                                                           // 5
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 7
  // This code only runs on the server                                                                               //
  // Only publish tasks that are public or belong to the current user                                                //
  Meteor.publish('tasks', function tasksPublication() {                                                              // 10
    return Tasks.find({                                                                                              // 11
      $or: [{                                                                                                        // 12
        'private': {                                                                                                 // 13
          $ne: true                                                                                                  // 14
        }                                                                                                            // 13
      }, {                                                                                                           // 12
        owner: this.userId                                                                                           // 17
      }]                                                                                                             // 16
    });                                                                                                              // 11
  });                                                                                                                // 20
}                                                                                                                    // 21
                                                                                                                     //
Meteor.methods({                                                                                                     // 23
  'tasks.insert': function tasksInsert(text) {                                                                       // 24
    check(text, String);                                                                                             // 25
    debugger;                                                                                                        // 26
    // Make sure the user is logged in before inserting a task                                                       //
    if (!Meteor.userId()) {                                                                                          // 28
      throw new Meteor.Error('not-authorized');                                                                      // 29
    }                                                                                                                // 30
                                                                                                                     //
    Tasks.insert({                                                                                                   // 32
      text: text,                                                                                                    // 33
      createdAt: new Date(),                                                                                         // 34
      owner: Meteor.userId(),                                                                                        // 35
      username: Meteor.user().username                                                                               // 36
    });                                                                                                              // 32
  },                                                                                                                 // 38
  'tasks.remove': function tasksRemove(taskId) {                                                                     // 39
    check(taskId, String);                                                                                           // 40
                                                                                                                     //
    var task = Tasks.findOne(taskId);                                                                                // 42
    if (task['private'] && task.owner !== Meteor.userId()) {                                                         // 43
      // If the task is private, make sure only the owner can delete it                                              //
      throw new Meteor.Error('not-authorized');                                                                      // 45
    }                                                                                                                // 46
                                                                                                                     //
    Tasks.remove(taskId);                                                                                            // 48
  },                                                                                                                 // 49
  'tasks.setPrivate': function tasksSetPrivate(taskId, setToPrivate) {                                               // 50
    check(taskId, String);                                                                                           // 51
    check(setToPrivate, Boolean);                                                                                    // 52
                                                                                                                     //
    var task = Tasks.findOne(taskId);                                                                                // 54
                                                                                                                     //
    // Make sure only the task owner can make a task private                                                         //
    if (task.owner !== Meteor.userId()) {                                                                            // 57
      throw new Meteor.Error('not-authorized');                                                                      // 58
    }                                                                                                                // 59
                                                                                                                     //
    Tasks.update(taskId, {                                                                                           // 61
      $set: {                                                                                                        // 62
        'private': setToPrivate                                                                                      // 63
      }                                                                                                              // 62
    });                                                                                                              // 61
  },                                                                                                                 // 66
  'tasks.setChecked': function tasksSetChecked(taskId, setChecked) {                                                 // 67
    check(taskId, String);                                                                                           // 68
    check(setChecked, Boolean);                                                                                      // 69
                                                                                                                     //
    var task = Tasks.findOne(taskId);                                                                                // 71
    if (task['private'] && task.owner !== Meteor.userId()) {                                                         // 72
      // If the task is private, make sure only the owner can check it off                                           //
      throw new Meteor.Error('not-authorized');                                                                      // 74
    }                                                                                                                // 75
                                                                                                                     //
    Tasks.update(taskId, {                                                                                           // 77
      $set: {                                                                                                        // 78
        checked: setChecked                                                                                          // 79
      }                                                                                                              // 78
    });                                                                                                              // 77
  }                                                                                                                  // 82
});                                                                                                                  // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","../imports/api/tasks.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// server/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/tasks.js');
                                                                                                                     // 2
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 4
  // code to run on server at startup                                                                                //
});                                                                                                                  // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
