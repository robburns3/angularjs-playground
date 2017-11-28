/**
 * 
 */

angular.module("calculatorService", [])
	.factory("CalcService", function() {
		return {
			add: function(num1, num2) { return num1 + num2; },
			subtract: function(num1, num2) { return num1 - num2; }
		}
	});
