var myApp = angular.module('myApp',[]);

myApp.controller('mainCtrl', ['$scope', 
function($scope) {
  var greeting = 'Ciao! ';
  $scope.utente = '';
  $scope.utenti = [];
  $scope.utentiDefault = ['Davide', 'Bazzoli', 'Stefano', 'Marco', 'Gigi'];
  
  $scope.submit = function (utente){
    if ($scope.utente) {
          $scope.utenti.push(this.utente);
          $scope.utente = '';
    }
  }
  
  $scope.eliminaLista = function(utenti){
    $scope.utenti = [];
  }
  
  $scope.salutaUtenti = function(utenti){
    for(var element in $scope.utenti){
      $scope.utenti[element] = greeting + $scope.utenti[element];
    }
  }
  
  $scope.inserisciUtenti = function(){
    $scope.utenti = $scope.utentiDefault.slice();
  };
}]);