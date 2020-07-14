$(document).ready(function(){
$("#calculate").click(function(){
    let bill = parseInt($('#bill').val());
    let tip =  parseInt($('#tip').val());
    let person =  parseInt($('#person').val());
    
    if (bill.length == "" || isNaN(bill) || bill < 0) {
        alert('please enter a valid bill amount')
    }else if (tip.length == "" || isNaN(tip) || tip < 0 ) {
        alert('please enter a valid tip percent')
    } else if (person.length == "" || isNaN(person) || person < 0) {
        alert('please enter the number of people sharing the bill')
    } else {
        let calculateTip= (tip / 100) * bill
        let calculateBill = bill + calculateTip
        let TipPerPerson = calculateTip/person
        let totalPerPerson = calculateBill/ person
        $('#tip-total').text(`${calculateTip.toFixed(2)}`);
        $('#tip-person').text(`${TipPerPerson.toFixed(2)}`);
        $('#total').text(`${calculateBill.toFixed(2)}`);
        $('#total-person').text(`${totalPerPerson.toFixed(2)}`);
        $('#result').css('display', 'block')
    }
});
});