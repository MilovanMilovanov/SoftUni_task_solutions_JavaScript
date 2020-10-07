function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = rightOperand;
    this.calculatorResult = function (leftOperand, rightOperand) {
        switch (this.operator) {
            case '+': return this.leftOperand + this.rightOperand;
            case '-': return this.leftOperand - this.rightOperand;
            case '*': return this.leftOperand * this.rightOperand;
            case '/': return this.leftOperand / this.rightOperand;
            case '%': return this.leftOperand % this.rightOperand;
            case '^': return Math.pow(this.leftOperand, this.rightOperand);
        }
    }
}
module.exports = Calculator;
