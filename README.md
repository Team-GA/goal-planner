# Project Three

## Members
-Kiana
-Lynne
-Moty
-Herman

## Group Expectations
https://docs.google.com/document/d/1ID58Y4BBy5Mw5ht9akaBk46b4YlywzTQItbg_jawixs/edit

## Project Name and Description
Goal Planner - a planner designed to help you achieve your goals, reflect on your week, journal, and more!

## MVP Goals
***Frontend:*** 
Components 
- Navbar
- Landing page (screens) for login/registration
- Homepage (screens)
- Journal Page (screens)
- Todo list/ Form for todo list
- Planner entry
- Passion journal entries
- Weekly Reflection (5 things that went well this week/proud of)

***Backend:***
- Routes
- Controllers
- Seed files
- Models (userSchema, plannerEntrySchema, toDoSchema, journalSchema (these Schemas will reference the user model, rather than having to embed it))
- Database (passionPlannerDB)
- Server.js

## Post-MVP Goals
- Motivational quotes (component using API possibly)
- Dark mode
- Notification (email users and remind them)

## Database Schemas
_Please provide a sample of how you intend to build your models. A Schema object for each of your models is ideal._

```json
const userSchema = new Schema(
{
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
},
{timestamps: true}
);

const journalSchema = new Schema(
{
    journalDate: {type: Date, required: true},
    journalInput: {type: String, required: true},
    userID: {type: String, required: true}
},
{timestamps: true}
);

const toDoSchema = new Schema(
{
    toDoList: {type: String, required: true},
    userID: {type: String, required: true}
},
{timestamps: true}
);

const plannerEntrySchema = new Schema(
{
    plannerInput: {type: String, required: true},
    userID: {type: String, required: true}
},
{timestamps: true}
);

```

## Whimsical

![Project 001](https://user-images.githubusercontent.com/61396761/136839718-053c9fb7-46ba-4eed-b352-7ffc8c77fc4c.jpeg)



## Wireframes

![Screen Shot 2021-10-11 at 11 59 29 AM](https://user-images.githubusercontent.com/61396761/136842827-2b41abbf-cc0f-44d1-b987-74fb4d3122c6.png)
![Screen Shot 2021-10-11 at 12 00 03 PM](https://user-images.githubusercontent.com/61396761/136842900-e20d425a-4146-432a-a745-8412d1668b2c.png)


![Screen Shot 2021-10-11 at 12 11 57 PM](https://user-images.githubusercontent.com/61396761/136844220-934d655e-e7a5-4e3a-9f86-9aee0f9537a9.png)




## Timeframes
_Use the table below to create your team's timeframes. Given the project is about a week long, you can add between 40 hours * group members (i.e. 120 hours for 3 group members)._

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working on Components | H | 10hrs| 3.5hrs | 3.5hrs |
| Working on CSS | H | 5hrs| 3.5hrs | 3.5hrs |
| Adding Models and Schemas | H | 5hrs| 3.5hrs | 3.5hrs |
| Controllers in Express | H | 5hrs| 2.5hrs | 2.5hrs |
| Making Routes | H | 3hrs| 2.5hrs | 2.5hrs |
| Connectin to database and the Server | H | 4hrs| 2.5hrs | 2.5hrs |
| Working with API | H | 4hrs| 2.5hrs | 2.5hrs |
| Authentication | H | 4hrs| 2.5hrs | 2.5hrs |
| Total | H | 48hrs| 5hrs | 5hrs |


## SWOT Analysis
***Lynne:***
- Strengths: I believe my strongest strength is CSS. It’s something I do enjoy doing and it brings out the creative side in me. Although it still challenges me, it helps me become stronger at it.
- Weaknesses: React and back end in general are my weaknesses. I think it’s something I need to continue practicing and working on. I know I have to put in the extra work to get it but practicing and making mistakes will help me learn. This project will help me do that.
- Opportunities: I have the opportunity to work on a group project with my colleagues. It may not be my first time working in a group but working together on web developing will be a great learning experience and will help me grow to prepare me for the future.
- Threats: I wouldn’t necessarily say having to work in a group is a complete threat but it will definitely be a challenge. Not every one of us have the same methods and possibly won’t agree on everything but we get to learn from each other and that’s more of a benefit than a pain point. Also the back-end side will be the biggest threat to me.

***Kiana:*** 
- Strengths: React
- Weaknesses: mongoose, testing
- Opportunities: I can use this as an opportunity to get better at backend (mongoDB) and testing. I think this is  agood -opportunity to experience coding in a group environment.
- Threats: Working ina group presents new challenges!

***Herman:***
- Strengths: Backend mongoDB, color palettes
- Weaknesses:  testing, some part of frontend functionality
- Opportunities: learning about react calendar package and back-end functionality
- Threats: testing backend endpoints and connecting models and seeds

***Moty:***
- Strengths: React 
- Weaknesses: testing
- Opportunities: learning about react calendar package and trying to do testing in this project for the dark mode 
- Threats:  I am a bit behind in assignments


