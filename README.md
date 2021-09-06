# Team Profile Generator

## Desription
Team Profile Generator is a Node.js command-line application that takes in information about employees on a basic software development team and generates an HTML page that displays summaries for each member. Before you can run this application the User must perform a npm install, so that the User is able to require all of the applications required dependencies.

Because this application is not deployed, a link to a walkthrough video that demonstrates its functionality and all of the tests passing is posted below as Demo Video.

## Instructional

Screen shot of qeustions asked:

### Engineer
<img src="./img/Engineer question snip.PNG" alt="snip of Eng"/>

### Intern
<img src="./img/Intern question snip.PNG" alt="snip of Int"/>

### Manager
<img src="./img/Manager question snip.PNG" alt="snip of Man"/>

### Step by Step Video
[Demo Video](https://drive.google.com/file/d/14VNFkLdApppw3qnvKvJPlKBjLfaJ9kRh/view)


## Technology Used

    - HTML
    - JavaScript
    - Bootstrap 5
    - Jquery
    - Node.js
    - Inquirer npm
    - Jest npm

## Contact Info
please contact me at [brandonjavillo@gmail.com](brandonjavillo@gmail.com)

## Process of Operations
As a User you will first need to open your intergrated terminal for the this application, make sure if you are using git bash that you are in the correct file of Main.js. 
Once the intergrated terminal is up and the User is in the correct file, the User will need to npm install to get the requried dependencies for the application.
When the npm install is complete, the User will test the application for functionality with individual tests
    - Employee
    - Engineer
    - Intern
    - Manager.
Four total test suites with 15 total test will run when the User runs 'npm run test' function.
When the tests are complete, the User can initiate the application by inputting node Main.js in the intergrated terminal.
A basic HTML will be created for inidividual team members that are added to the team.
A User will be presented with instructions to fill information for each team member:
    - Enter a Team member's name
    - Select a role for Team member
    - Enter employee ID
    - Enter Team member's email information.
When a User makes a selection for the team member's role, specific information will be asked for that role:
    - Engineer "will ask for the team member's GitHub username"
    - Intern "will ask for the team member's school or institution name"
    - Manager "will ask for the team member's office number".
When the User is done with the list of instructions, the User will then be asked if another team member would like to be added.
    - If the answer is yes, the User will go through another list of instructions
    - If the answer is no, the User will exit the program and the information from the list of instructions will be added to the displayed HTML
When the User answers no, an HTML with the User input is created inside the displayed-info directory
    - open devTeam.html in Live Server or Open in Default Browser to show User input
### Displayed Browser After HTML is Written
<img src="./img/display snip.PNG" alt="snip of html"/>


 