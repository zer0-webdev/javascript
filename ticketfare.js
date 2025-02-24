/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


function fareCalculator(age, student){
    if(age < 10){
        console.log('Ticket is Free');
    }
    else if(student){
        console.log('You get a 50% discount, so ticket is ' + (800 * 0.5) + ' tk');
    }
    else if(age >= 60){
        console.log('You get a 15% discount, so ticket is ' + (800 - (800 * 0.15)) + ' tk');
    }
    else{
        console.log('Ticket is 800 tk');
    }
}

fareCalculator(60, false);
