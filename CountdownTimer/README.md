## Countdown Timer ⏱️

### 📝 Task: Countdown timer that allows the user to enter hours, minutes, and seconds.
![Task-Mockup](https://github.com/MikaZ21/frontendeval/assets/93892096/0c5bc90d-827f-4819-949c-5ff1c23a4727 width="48")
<img src="https://github.com/favicon.ico](https://github.com/MikaZ21/frontendeval/assets/93892096/0c5bc90d-827f-4819-949c-5ff1c23a4727" width="100" height="100">
### Once the timer has started, the input fields should be replaced with plain text that updates every second. The 'Start' button should be replaced with 'Pause' and 'Reset' buttons.
![Task-Mockup](https://github.com/MikaZ21/frontendeval/assets/93892096/169b64c4-85cf-41e9-97e9-abd4ad28b722)
### Once the timer completes, it should alert the user with a native notification (using the Notification API), or fallback to an alert.

#### Requirements
• The 'Hours', 'Minutes', and 'Seconds' fields should not have visible labels, but they should be accessible and clearly labelled to a screen reader.\
• The input fields should use placeholder text as shown in the screenshot above.\
• Pressing 'Start' should start the timer, replace the input fields with plain text for the hours/minutes/seconds, and replace 'Start' with 'Pause' and 'Reset' buttons.\
• Pressing 'Pause' should pause the timer, and replace the 'Pause' button with a 'Start' button.\
• Pressing 'Reset' should revert the app back to the initial state.\
• While the timer is counting down, the numbers should be zero-padded (e.g. 01 vs 1).\
• When the timer reaches zero, if the app has appropriate permissions, it should display a Notification that the timer is complete.\
• If the app doesn't have appropriate permissions, it should show an alert when the timer reaches zero.

### Completed task 🍵🌿
#### The initial load
![he initial load](https://github.com/MikaZ21/frontendeval/assets/93892096/ccd7359c-2df2-45f9-a92a-09d35cbb3027)
#### After clicked the start button
![After clicked the start button](https://github.com/MikaZ21/frontendeval/assets/93892096/d30858a5-060c-4c2a-abf6-1b81ba345c1c)
#### validation check to ensure that the user enters a valid time before starting the timer
![validation check](https://github.com/MikaZ21/frontendeval/assets/93892096/4f7317d1-e6f5-45c1-9aed-93f08a1bb48d)
#### Notification that the timer is complete
![Notification](https://github.com/MikaZ21/frontendeval/assets/93892096/4317b58f-4b44-49c0-b4d2-90633a099ee2)
