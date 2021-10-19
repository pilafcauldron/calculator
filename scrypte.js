$(document).ready(function () {

var calc = $('.flex-container');
var calcDisplay = calc.find('.display');
var calcBtn = calc.find('.btn-clear, .btn-operator, .btn-result, .btn-number');
var calcButton = calc.find('.numb');
var calcClear = calc.find('.c');
var calcEqual = calc.find('.equal');
var calcPower = calc.find('.st');
var calcPersent = calc.find('.pr');
var calcKoren = calc.find('.kor');

calcBtn.each(function () {
var current = $(this).attr('value');
$(this).text(current);
});

calcButton.on('click', function () {
calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
});

calcClear.on('click', function () {
calcDisplay.val('');
});

calcEqual.on('click', function () {
calcDisplay.val(eval(calcDisplay.val()));
});

calcPower.on('click', function () {
calcDisplay.val(Math.pow(calcDisplay.val(), calcDisplay.val()));
});

calcPersent.on('click', function () {
calcDisplay.val(calcDisplay.val()/ 100);
});

calcKoren.on('click', function () {
calcDisplay.val(Math.sqrt(calcDisplay.val()));
});