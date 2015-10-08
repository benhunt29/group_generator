# Prime - Node / Express / jQuery / Ajax Group Challenge

Welcome to this week's Big Group challenge!

For this challenge, you are going to be creating a tool for Project Management to use. The tool will create random employees with a name, specific skill sets, and how many 'Scrum Points' that employee is capable of completing in a 'Sprint'. You need not know all the parts of 'Scrum Points' and 'Sprints' to complete this project, down below will explain what role they plan in this application. The logic will be split between both the Client and the Server.

When the application loads, it will need to have a 'Generate Project' button appear on the screen. A project should be represented on the screen with a random company name, how many points of Front End, Clientside Logic, and Serverside logic is needed to complete the project. Each of these values should have a random number assigned to it, 10 - 60. 

Only one project can be on the DOM at any given time. The logic for project creation should be done clientside. Once a project is generated, a button should appear that reads "Assign Staff". Clicking that button should make a 'GET' call to the server.

The GET call to the server should initiate a Node Module to create an employee. That Node Module should then use 3 other Node Modules to generate a random name for an employee, assign 1 skill set, and how many Scrum points that employee can complete in a Sprint. How many points they can complete in a Sprite should be between 1 - 9. Once that employee is created, the Server should send it back to the Client. When the data from the employee is successfully received, the Clientside logic should check to see if additional Employees should be created. This should be based on the available skill sets. Meaning that if a project has 12 points of Front End, 24 points of Clientside Logic, and 14 Points of Serverside logic, and the server sends back an Employee that complete Front End, the clientside logic your team creates should make additional calls to the server for new employees until each of the three skill sets are fulfilled. 

Once all three skillsets are fulfilled from the Server, the clientside logic that you write, should figure out, based on the team available, how many sprints worth of work are needed to complete the project. This information should be added to the Project information that is already present. A button should now appear below the available employees to add an additional employee. Once that additional employee is added to the team, the clientside logic should re-evaluate how long the project will take. 

Generating a new project should clear out all the employees and the process should start over again. Anything NOT covered in this project's description is open for interpretation within your team. The application your team creates should be styled with Bootstrap. 

There will be some team member swapping throughout the challenge, but there will be no other 'gotchas' within this challenge. 

Good Luck, Have Fun!

##Hard Mode
Look back through the Walking Skeleton build and implement a router into your serverside logic.

##Pro Mode
When generating employees, if a skill set is already filled in the team generation, let the server know this information so that it does not generate an employee of the same skill set. Note: This will require the 'POST' method and will need to be researched.
