let weight = 80;
let height = 5;

const BMI = weight / (height)^2;

function bmiCalculator(){
    if(BMI < 18.5){
        console.log('You are under weight');
    }
    else if(BMI >= 18.5 || BMI <= 24.9 ){
        console.log('You are normal');
    }
    else if(BMI >= 25 || BMI <= 29.9){
        console.log('You are overweight');
    }
    else{
        console.log('You are obese');
    }
    return;
}

console.log(bmiCalculator());
