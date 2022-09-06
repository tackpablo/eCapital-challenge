# Take-home Assignment (Full Stack)

### Goal:

-   Create an Employee Table like the one in the image below.
-   Use any front-end framework (Angular, React, Vue, ect...) or CSS library to accomplish this.
-   Implement the back-end API with a Node.js framework, and a SQL database

![Example](example.png)

### Functional Requirements:

-   Initially, list all employees that are in data.json
    -   First name, last name, and salary in currency format (ie. $42,000)
-   The ability to edit an employee
-   The ability to delete an employee
-   The ability to create a new employee

### Technical Guidelines:

-   Structure your application and components in a modular/reusable way
-   Commit code with useful and informative comments
-   Your application doesn't have to use the data.json file directly, but have a SQL script to initialize your database with data found in that file
-   Implement API code to read and write to a SQL database
-   Styling: CSS or SCSS or SASS can be used, whichever you prefer (can use popular UI frameworks like Bootstrap as well)

### Questions?

Please reach out to me with any questions

### Resources

-   Employees

### Routes

-   / (Home Page)

Employees

-   BREAD - REQUEST-TYPE ENDPOINT - SQL
-   BROWSE - GET /api/employees/ - SELECT
-   READ - GET /api/employees/:id - SELECT
-   EDIT - PUT/PATCH /api/employees/:id - UPDATE
-   ADD - POST /api/employees/ - INSERT
-   DELETE - DELETE /api/employees/:id - DELETE
