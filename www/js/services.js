angular.module('starter.services', [])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];
  var posts = [{
    id: 0,
    name: 'Hello World',
    content: 'Welcome to my application'
  }, {
    id: 1,
    name: 'Hi',
    content: 'How are you doing today'
  }, {
    id: 2,
    name: 'Ionic Application',
    content: 'This application deals with the Ionic and Angular JS'
    
  }, {
    id: 3,
    name: 'MEAN stack',
    content: 'Develop Web Apps using MongoDB,Express, AngularJS and NodeJS'
    
  }, {
    id: 4,
    name: 'Drupal',
    content: 'This a CMS based on PHP.'
  }];
  return {
    all: function() {
      //return chats;
      return posts;
    },
    remove: function(post) {
      //chats.splice(chats.indexOf(chat), 1);
      posts.splice(posts.indexOf(post),1);
    },
    get: function(chatId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(chatId)) {
          return posts[i];
        }
      }
      return null;
    },
    insertData: function(data){
      posts.push(data);
    }
  };
});
