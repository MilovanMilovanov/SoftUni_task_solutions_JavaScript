let Calculator = require('../models/model');
module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        let { leftOperand, operator, rightOperand } = req.body['calculator'];
        let calculator = new Calculator(leftOperand, operator, rightOperand);
        if (isNaN(leftOperand) || isNaN(rightOperand)) {
            let result = 'insert numbers only!';
            res.render('home/index', { calculator, result });
        } else {
            calculator.leftOperand = Number(leftOperand);
            calculator.rightOperand = Number(rightOperand);
            let result = calculator.calculatorResult();
            res.render('home/index', { calculator, result });
        }
    }
};