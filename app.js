(function(){

	var app = angular.module('app',[]);

	app.controller('appController', function(){
		 this.personne = object;
	})

	app.directive('header',function(){
		return {
			restrict : 'A',
			templateUrl : 'partials/common/header.html'
		}
	});

	app.directive('footer',function(){
		return {
			restrict : 'A',
			templateUrl : 'partials/common/footer.html'
		}
		});

	app.directive('home',function(){
		return {
			restrict : 'A',
			templateUrl : 'partials/home/home.html'
		}
		});

		var object = {
			name : "Tian Bao",
			age : 2,
			skills : ['Manger', 'Jouer'],
			image : 'img/panda.jpg'
		};
	})();
