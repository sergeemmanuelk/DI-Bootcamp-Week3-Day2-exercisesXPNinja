console.log("*****Exercise 1 : Calculate The Tip*****")

// Create a function called calculateTip() that takes no parameter
function calculateTip() {
    /* Create a variable called billAmount that fetches the value of the input, which id is billAmt 
    (check the HTML file) –> It’s the amount of the bill.*/
    var billAmount = document.getElementById('billAmt').value

    /* Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual
    (check the HTML file) –> It’s the quality of the service.*/
    var serviceQuality = document.getElementById('serviceQual').value

    /* Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople
    (check the HTML file) –> It’s the number of people sitting at the table.*/
    var numberOfPeople = document.getElementById('numOfPeople').value
  
    // Create a condition :
    // If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values
    if (serviceQuality == 0 || billAmount == '') {
        alert('Please enter valid values')
    }
  
    // Create another condition after the first one :
    /*If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople
    and make sure that the tag which id is each, is not displayed (check the end of the HTML file)*/
    if (numberOfPeople == '' || numberOfPeople <= 1) {
        numberOfPeople = 1
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'
    }
  
    /* Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople 
    (the outcome is the average tip each person should pay)*/
    var total = (billAmount * serviceQuality) / numberOfPeople

    // Use the toFixed method to round total to two decimal points
    total = total.toFixed(2)
  
    // Add the CSS property “display:block” to the tag which id is totalTip
    document.getElementById('totalTip').style.display = 'block'

    // Display the variable total in the tag which id is tip
    document.getElementById('tip').innerHTML = total
}

/* To avoid displaying the total if the function calculateTip() is not called, add the CSS property
 “display:none” to the tag which id is totalTip.*/
document.getElementById('totalTip').style.display = 'none'

// Call the function calculateTip() when the tag which id is calculate is clicked.
// Hint : use the method onclick.
document.getElementById('calculate').onclick = function() {
    calculateTip()
}

console.log("*****Exercise 2 : Validate The Email*****")

console.log("*****Exercise 3 : Get The User’s Geolocation Coordinates*****")

document.querySelector('#getGeolocation').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('Latitude: ' + position.coords.latitude)
            console.log('Longitude: ' + position.coords.longitude)
        })
    } else {
        console.log('Nothing')
    }
})
  
