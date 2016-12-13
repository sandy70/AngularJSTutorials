var calculatorApp = angular.module("CalculatorApp", []);
calculatorApp.controller("CalculatorCtrl", CalculatorCtrl);


function CalculatorCtrl(){
    this.myList = [1,2,3,4];
    this.operation = function(button)
    {
        this.selectedOperation = button;
    }

    this.computeResult = function()
    {
        var selectedOperation = this.selectedOperation;
        var input1 = parseFloat(this.input1);
        var input2 = parseFloat(this.input2);
        if(this.selectedOperation == '+'){
            this.resultValue = input1 + input2;
        }
        else if(this.selectedOperation == '-'){
            this.resultValue = input1 - input2;
        }
        else if(this.selectedOperation == '*'){
            this.resultValue = input1 * input2;
        }
        else{
            this.resultValue = input1 / input2;
        }
    }
}
