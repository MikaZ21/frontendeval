## Countdown Timer

### 📝 Task: Countdown timer that allows the user to enter hours, minutes, and seconds.
![Task-Mockup]()
### Once the timer has started, the input fields should be replaced with plain text that updates every second. The 'Start' button should be replaced with 'Pause' and 'Reset' buttons.
![Task-Mockup]()
### Once the timer completes, it should alert the user with a native notification (using the Notification API), or fallback to an alert.

#### Requirements
• The 'Hours', 'Minutes', and 'Seconds' fields should not have visible labels, but they should be accessible and clearly labelled to a screen reader.
• The input fields should use placeholder text as shown in the screenshot above.
• Pressing 'Start' should start the timer, replace the input fields with plain text for the hours/minutes/seconds, and replace 'Start' with 'Pause' and 'Reset' buttons.
• Pressing 'Pause' should pause the timer, and replace the 'Pause' button with a 'Start' button.
• Pressing 'Reset' should revert the app back to the initial state.
• While the timer is counting down, the numbers should be zero-padded (e.g. 01 vs 1).
• When the timer reaches zero, if the app has appropriate permissions, it should display a Notification that the timer is complete.
• If the app doesn't have appropriate permissions, it should show an alert when the timer reaches zero.



### Completed task 🍵🌿
#### The initial load
![he initial load]()
#### After clicked the start button
![After clicked the start button]()
