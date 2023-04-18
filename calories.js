fetch('input.txt')
  .then(response => response.text())
  .then(data => {
    
    // console.log(data)

    let dataArray = data.split('\r\n').slice();

    // console.log(dataArray);

    let calories = []; // create an empty array to store the smaller arrays
    let smallerArray = []; // create an empty array to store the current smaller array
    
    for (let i = 0; i < dataArray.length; i++) { // loop through each element of the data array
      if (dataArray[i] === '') { // if the element is an empty string, the current smaller array has ended
        if (smallerArray.length > 0) { // if there are elements in the current smaller array
          calories.push(smallerArray); // push the current smaller array to the array of smaller arrays
        }
        smallerArray = []; // reset the current smaller array to an empty array
      } else {
        smallerArray.push(dataArray[i]); // add the non-empty string element to the current smaller array
      }
    }
    
    if (smallerArray.length > 0) { // if there are any elements remaining in the current smaller array
      calories.push(smallerArray); // push the current smaller array to the array of smaller arrays
    }
        
    // changing strings to numbers by using parseInt
    for (let i = 0; i < calories.length; i++) {
      for (let j = 0; j < calories[i].length; j++) {
        calories[i][j] = parseInt(calories[i][j]);
      }
    }
    
    // console.log(calories);

    // function to calculate sum of smaller arrays and push them to sumCalories array
    function countCalories(caloriesArray) {
      let sumCalories = [];
    
      for (let i = 0; i < caloriesArray.length; i++) {
        let sum = 0;
        for (let j = 0; j < caloriesArray[i].length; j++) {
          sum += caloriesArray[i][j];
        }
        sumCalories.push(sum);
      }
      return sumCalories;
    }
    
    let allSums = countCalories(calories);

    // console.log(allSums);

    // finding biggest sum by math.max
    console.log(Math.max(...allSums));

  })
  .catch(error => {
    console.error(error);
  });