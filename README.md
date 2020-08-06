# 03 JavaScript: Password Generator

<h2>Description</h2>
Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.
<br>
<br>

<h2>Procedure</h2>

1. Pseudo coding: draw out user's journey with the website
2. Draw the control flow of javascript
3. Identify which variable will be needed
4. Idenify which kind of functin (if, while, for loop,) to be used and where to used
5. Utilize console.log and the inspector tool to test our theory
6. Code based on planned process
7. Run code at every step to ensure no bug
8. Test code with multiple condition to ensure no error
9. Refactor code
10. Go back and put comments

<br>
<br>

<h2>Details</h2>
<br>
The CSS for this project is very straightforward until the function. In order to create an random password. I first created 4 array containing all the characters the password can contain. Next, I created an empty password array. Then I combine the IF function and the FOR LOOP to copy and paste each item of the 4 stock arrays into the empty password array i created. Once the password array reached the desire length that user choose, the loop will stop, returning an array containing my password. Then I use a function to randomize the order of the just created password by swapping their index. To display the newly crafted password in a regular password format, I convert the password array into a string and add it to the password container's value. Everytime you click on the "generate password" button, it will re-run the function and give you a new passowrd.


My Github Repo: https://github.com/ethanlam93<br>
Deployment: https://ethanlam93.github.io/password-generator-project/
