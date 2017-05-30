'use strict';

angular.module('backbaseApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}])

.controller('View1Ctrl', function($scope, transactionService) {
	$scope.preview = null;
	$scope.availableBalance = transactionService.getBalance();
	$scope.newTransaction = transactionService.initializeTransaction();
	$scope.transactionHistory = transactionService.getTransactions();

	$scope.validateTransaction = function($event) {
		if (transactionService.checkFields($scope.newTransaction.merchant, $scope.newTransaction.amount)) {
			transactionService.checkFunds($scope.newTransaction.amount) ? $scope.reviewTransaction() : alert('Insufficient Funds.');
		} else {
			alert('Please Complete All Fields.')
		}
	}

	$scope.reviewTransaction = function($event) {
		$scope.submittedTransaction = angular.copy($scope.newTransaction);
		$scope.preview = true;
	}

	$scope.cancelTransaction = function($event) {
		$scope.preview = null;
	}

	$scope.submitTransaction = function($event) {
		$scope.preview = null;
		$scope.transactionHistory.unshift($scope.submittedTransaction);
		$scope.newTransaction = transactionService.initializeTransaction();
		transactionService.updateBalance($scope.submittedTransaction.amount);
		$scope.availableBalance = transactionService.getBalance();
	}
});