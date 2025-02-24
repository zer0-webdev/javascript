function sadness(friendHasGot){
    if(friendHasGot >= 80){
        console.log('Lets go for lunch');
    }
    else if(friendHasGot >= 60){
        console.log('Good Luck Next time');
    }
    else if(friendHasGot >= 40){
        console.log('Friends Message unseen');
    }
    else{
        console.log('Block Your Friend');
    }
}

sadness(50);  // Expected Output: 'Friends Message unseen'
