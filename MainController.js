app.controller('MainController', ['$scope', function($scope) {
  $scope.apps =
  [
    {
      icon: 'https://sheholdsthepromise.files.wordpress.com/2015/02/o-jumping-jacks-facebook.jpg',
      title: 'MOVE',
      developer: 'MOVE, Inc.',
      price: 0.99
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Uckers_gameboard_graphic.png',
      title: 'Gameboard',
      developer: 'Armando P.',
      price: 1.99
    },
    {
      icon: 'http://defiantly.net/wp-content/uploads/2015/12/uber-logo.png',
      title: 'Uber',
      developer: 'Uber Tech Inc.',
      price: 1.99
    },
    {
      icon: 'http://pngimg.com/upload/bicycle_PNG5378.png',
      title: 'Shutterbugg',
      developer: 'Chico Dusty',
      price: 2.99
    }
  ]
}]);  
