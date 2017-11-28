/**
 * Simple Controller
 */

// Creates module object with additional module dependencies listed
angular.module("calculator", ["calculatorService"])
	// Creates/associates controller object as a function: ("CalcController, function ...)
	// Or, an array with injected dependencies: ("CalcController, ["Service1, ..., function (s1, ...) )
	.controller("CalcController", ["CalcService", function calc(calcService) {
		// Initialize controller elements used in template within this scope
		this.num1 = 0;
		this.num2 = 0;
		this.add = function() { return calcService.add(this.num1, this.num2); };
		this.subtract = function() { return calcService.subtract(this.num1, this.num2); };
	}]
);
