angular.module('collegeControllers',[]).controller('StudentController', function($scope) {
	
	$scope.results = true;

	var student = {
		
		firstName: "Rich",
		
		lastName: "Richie",
		
		fees: 500,
		
		subjects: [
			{name: 'Physics', marks: 70},
			{name: 'Chemistry', marks: 80},
			{name: 'Maths', marks: 65},
			{name: 'English', marks: 75},
			{name: 'Hindi', marks: 67}
		],

		fullName: function () {
			return this.firstName + " " + this.lastName;
		}
	};

	$scope.student = student;
	$scope.greeting = function() {
		return "Greetings " + $scope.student.fullName();
	};

	$scope.showResults = function() {
		return ($scope.results ? $scope.results=false : $scope.results = true);
	};

	$scope.hideResults = function() {
		return ($scope.results ? $scope.results=false : $scope.results = false);
	};

	$scope.aGradeFilter = function (subject) {
		return (subject.marks > 74);
	}
});