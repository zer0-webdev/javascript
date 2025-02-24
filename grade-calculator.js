function gradeSelector(marks){
    if(marks > 90){
        console.log('Grade - A');
    }
    else if(marks > 80){
        console.log('Grade - B');
    }
    else if(marks > 70){
        console.log('Grade - C');
    }
    else if(marks > 60){
        console.log('Grade - D');
    }
    else if(marks > 50){
        console.log('Grade - E');
    }
    else if(marks <= 50 && marks >= 0){
        console.log('Grade - Fail');
    }
    else{
        console.log('Push Valid Number');
    }
}

gradeSelector(70); 
