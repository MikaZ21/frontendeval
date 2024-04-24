let timerInterval; 
let targetTime; 
let isRunning = false; 
let initialTime; 
let elapsedTime = 0; 

// Request notification permission
// Ensure that the 'permissionGranted' variable is correctly set to 'true' after 
// the user grants permission for notifications.
let permissionGranted = false;
if ('Notification' in window) {
    Notification.requestPermission().then(function(permission) {
      if (permission === 'granted') {
        permissionGranted = true;
      }
    });
  }

function startTimer() {
  if (!isRunning) {
    // Retrieve input elements
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    
    // Parse input values to integers
    const hours = parseInt(hoursInput.value, 10) || 0;
    const minutes = parseInt(minutesInput.value, 10) || 0;
    const seconds = parseInt(secondsInput.value, 10) || 0;
    
    // Calculate the initial time
    initialTime = (hours * 3600) + (minutes * 60) + seconds;
    
    // Ensure that the user enters a valid time before starting the timer.
    // This validation ensures that the timer is started only when the user provides a valid input time.
    if (initialTime <= 0) {
        alert('Please enter a valid time.');
        return;
    }

    // Calculate the target time every time the timer starts
    targetTime = new Date().getTime() + (initialTime * 1000) - elapsedTime;
    
    // Start the timer
    timerInterval = setInterval(function() {
    updateTimer(hoursInput, minutesInput, secondsInput);
    }, 1000);
    
    
    // Disable input fields to prevent user interaction.
    document.getElementById('hours').disabled = true;
    document.getElementById('minutes').disabled = true;
    document.getElementById('seconds').disabled = true;
    // Update the UI
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'inline-block';
    document.getElementById('resetBtn').style.display = 'inline-block';

     // Set background color to transparent
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
    input.style.backgroundColor = 'transparent';
    });
    
    isRunning = true; 
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  // Calculate elapsed time only when the timer is running
  if (isRunning) {
    elapsedTime += new Date().getTime() - targetTime;
    targetTime = new Date().getTime(); // Update target time to current time
  
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    isRunning = false;
   }
}

function resetTimer() {
  clearInterval(timerInterval);

    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('hours').disabled = false;
    document.getElementById('minutes').disabled = false;
    document.getElementById('seconds').disabled = false;

    // Update the UI
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
    
    // Set background color back to white
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
    input.style.backgroundColor = '#ffffff';
    });

    // Reset running state and elapsed time
    isRunning = false;
    elapsedTime = 0;
}

function updateTimer(hoursInput, minutesInput, secondsInput) {
  const now = new Date().getTime();
  const remainingTime = targetTime - now + elapsedTime;

  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    
    // Set input values to '00' when the timer reaches zero
    hoursInput.value = '00'
    minutesInput.value = '00';
    secondsInput.value = '00';

    // document.getElementById('hours').value = '00';
    // document.getElementById('minutes').value = '00';
    // document.getElementById('seconds').value = '00';

    // Show notification or alert
    if (permissionGranted) {
        new Notification('Timer Complete');
    } else {
        alert('Timer Complete');
    }

    return;
    }
  
    // Calculate the remaining time in hours, minutes, and seconds
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    // Display the formatted time values in the input fields
    document.getElementById('hours').value = formatTime(hours);
    document.getElementById('minutes').value = formatTime(minutes);
    document.getElementById('seconds').value = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}