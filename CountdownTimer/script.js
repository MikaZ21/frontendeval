let timerInterval; 
let targetTime; 
let isRunning = false; 
let initialTime; 
let elapsedTime = 0; 

function startTimer() {

  if (!isRunning) {
    // Retriev input elements
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    
    // Parse input values to integers
    const hours = parseInt(hoursInput.value, 10) || 0;
    const minutes = parseInt(minutesInput.value, 10) || 0;
    const seconds = parseInt(secondsInput.value, 10) || 0;
    
    // Calculate the initial time
    initialTime = (hours * 3600) + (minutes * 60) + seconds;
    
    // Calculate the target time every time the timer starts
    targetTime = new Date().getTime() + (initialTime * 1000) - elapsedTime;

//    // Clear the placeholder
//     hoursInput.placeholder = '';
//     minutesInput.placeholder = '';
//     secondsInput.placeholder = '';
    
    console.log("Hours input value:", hoursInput.value);
    console.log("Minutes input value:", minutesInput.value);
    console.log("Seconds input value:", secondsInput.value);

     // Call updateTimer to display initial countdown values
    // updateTimer(hoursInput, minutesInput, secondsInput);


    console.log("Hours input value:", hoursInput.value);
    console.log("Minutes input value:", minutesInput.value);
    console.log("Seconds input value:", secondsInput.value);

    // Start the timer
    timerInterval = setInterval(function() {
    updateTimer(hoursInput, minutesInput, secondsInput);
    }, 1000);
    
    
    // Update the UI
    document.getElementById('hours').disabled = true;
    document.getElementById('minutes').disabled = true;
    document.getElementById('seconds').disabled = true;

    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'inline-block';
    document.getElementById('resetBtn').style.display = 'inline-block';
    
    isRunning = true; 
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  // Calculate elapsed time only when the timer is running
  if (isRunning) {
    elapsedTime += new Date().getTime() - targetTime;
  
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    isRunning = false;
   }
}

function resetTimer() {
  clearInterval(timerInterval);

    // Reset input value to '0'  
    // document.getElementById('hours').value = setPlaceholderToHH();
    // document.getElementById('minutes').value = '0';
    // document.getElementById('seconds').value = '0';


    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('hours').disabled = false;
    document.getElementById('minutes').disabled = false;
    document.getElementById('seconds').disabled = false;
    // // Reset placeholders
    // setPlaceholderToHH();
    // setPlaceholderToMM();
    // setPlaceholderToSS();

    // Update the UI
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
    
    // Reset running state and elapsed time
    isRunning = false;
    elapsedTime = 0;
}

function updateTimer(hoursInput, minutesInput, secondsInput) {
  const now = new Date().getTime();
  const remainingTime = targetTime - now + elapsedTime;

  console.log("Hours input value:", hoursInput.value);
  console.log("Minutes input value:", minutesInput.value);
  console.log("Seconds input value:", secondsInput.value);


  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    
    // Set input values to '0' when the timer reaches zero
    hoursInput.value = '00'
    minutesInput.value = '00';
    secondsInput.value = '00';

    return;
  }
  
  // Calculate the remaining time in hours, minutes, and seconds
  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
  // Display the formatted time values in the input fields
//   hoursInput.value = formatTime(hours);
//   minutesInput.value = formatTime(minutes);
//   secondsInput.value = formatTime(seconds);
document.getElementById('hours').value = formatTime(hours);
document.getElementById('minutes').value = formatTime(minutes);
document.getElementById('seconds').value = formatTime(seconds);

  console.log("Hours input value:", hoursInput.value);
  console.log("Minutes input value:", minutesInput.value);
  console.log("Seconds input value:", secondsInput.value);

// //    // Format the time values with leading zeros
//   const formattedHours = formatTime(hours);
//   const formattedMinutes = formatTime(minutes);
//   const formattedSeconds = formatTime(seconds);

//   console.log("Hours input element:", hoursInput);
//   console.log("Hours input value:", hoursInput.value);

//   // Display the formatted time values in the input fields
//   hoursInput.value = formattedHours;
//   minutesInput.value = formattedMinutes;
//   secondsInput.value = formattedSeconds;

console.log("Hours input value:", hoursInput.value);
console.log("Minutes input value:", minutesInput.value);
console.log("Seconds input value:", secondsInput.value);

}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}


// // Function to set placeholder value to 'HH'
// function setPlaceholderToHH() {
//   document.getElementById('hours').placeholder = 'HH';
// }
// function setPlaceholderToMM() {
//   document.getElementById('minutes').placeholder = 'MM';
// }
// function setPlaceholderToSS() {
//   document.getElementById('seconds').placeholder = 'SS';
// }

// // Call setPlaceholderToHH function when the reset button is clicked
// document.getElementById('resetBtn').addEventListener('click', function() {
//   setPlaceholderToHH();
// });
// document.getElementById('resetBtn').addEventListener('click', function() {
//   setPlaceholderToMM();
// });
// document.getElementById('resetBtn').addEventListener('click', function() {
//   setPlaceholderToSS();
// });

// // Set placeholder value to 'HH' when the page loads initially
// window.addEventListener('load', function() {
//   setPlaceholderToHH();
// });

// window.addEventListener('load', function() {
//   setPlaceholderToMM();
// });
// window.addEventListener('load', function() {
//   setPlaceholderToSS();
// });
