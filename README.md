# Password Generator Challenge

## Purpose 
A random password generator that will provide the user with a new and secure password with 8 - 128 characters of uppercase letters, lowercase letters, numbers and/or special characters. 

## Notes
* Please note that the final password is only written to the page and cannot be copied at this moment. 
* I created an array for each character category, and pushed it onto a main array with each truthy value of user input. Then, I generated random numbers based on main.length and looped the array times desired password length. The random numbers were used as an index in the main array, with each corresponding object being pushed onto an answer array. Lastly, the answer array was joined into a string that becomes into the password value. 

## Website
* Github https://github.com/ulemjin/password-generator 
* Live URL https://ulemjin.github.io/password-generator/ 

## Screenshots 
<img width="1440" alt="password-generator-screenshot" src="https://user-images.githubusercontent.com/76715495/111013726-84a55100-836e-11eb-8c55-923830e314b6.png">
**Pseudocode Diagram**
<img width="613" alt="password-generator-pseudocode" src="https://user-images.githubusercontent.com/76715495/111013733-8ff87c80-836e-11eb-8048-71116161c215.png">

## Credits & Contribution
Made by Ulemjin Badral, 2021. 
