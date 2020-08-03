function addToTop(number){
    let summation= 0;
    for (let index = 0; index < number; index++) {
        summation += index;
    }
    console.log(summation);
}

function addToTopEnhanced(number){
    console.log(number * (number+1)/2);

}
/*  to run this just specify in the console "Node whoCare.js" and you will see the different between tow types of algorithms and why we are care about Big O
  in small numbers you will not feel the different but whenever using big data you can tell that addToTop are not even a solution for this small problem .*/
addToTopEnhanced(150000000000000000000000000000000000000000000000000000000000000000000000000000);
addToTop(150000000000000000000000000000000000000000000000000000000000000000000000000000);