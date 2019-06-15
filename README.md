![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# IronProfile

## Introduction

Having a profile is one of the most common features you will need to add on your projects, so today we are going to practice creating one.

We will create a backend REST API using NodeJS and a frontend using React where users will be able to **signup, login, upload a profile picture, check their profiles and edit it.**

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 1 - The REST API


#### User model

You will start building the app creating the REST API. Create the `app` using the `express-generator`. Then, create the **user model** so the `User.js` have the following fields:

- **email**, type String. Must be a valid email!!
- **password**, type String. Password must contain at least six characters including uppercase, lowercase letters and numbers (`P4ssw0Rd`).
- **campus**, type String. Possible values: `Madrid`, `Barcelona`, `Miami`, `Paris`, `Berlin`, `Amsterdam`, `México`, `Sao Paulo`,
- **course**, type String. Possible values: `WebDev`, `UX/UI`, `Data Analytics`.
- **avatarURL**, type String.

> Remember, we need validate fields properly, clean model (`toJSON`) and encrypt the password!

:::info
Remember to test the REST API using Postman, to make sure everything is working! :wink:
:::

#### Routes

The app will need the following routes: 

| Method  |  Endpoint         |  Parameters                              | Return Value |
|---------|-------------------|------------------------------------------|--------------|
| POST    | `/authenticate`   | email, password                          | User logged  |
| POST    | `/register`       | email, password, campus, course          | User created |  
| GET     | `/profile`        |                                          | User logged  | 
| PUT     | `/profile   `     | email, password, campus, course, avatar  | User updated |
| GET     | `/logout`         |                                          | NO CONTENT   |


#### Configs

- cors: validate if the origin is allowed & allow credentials
- passport: passport-local authentication strategy
- storage: multer + cloudinary storage


### Iteration 2 - The React App

You should create a React App using the `create-react-app`. On the `HomePage` you only need to display two buttons: `Sign up` and `Login`. Each of them should redirect to the routes `/register` and `/login`.

![image](https://user-images.githubusercontent.com/23629340/43786924-1c5d3d5a-9a6a-11e8-90c4-7ff2f92ef983.png)

:::
All the assets you need for the design are stored inside the `assets` folder, but for now, don't worry about that, focus on the functionality!
:::

### Iteration 3 - Auth Service

You should create an `authService` file, where you will have all the methods to call your REST API. You have to create the following methods:

- **register** that makes a POST request to the `/register` route passing (user) *email*, *password*, *campus* and *course* info
- **authenticate** that makes a POST request to the `/authenticate` route passing *email* and *password*
- **logout** that makes a GET request to the `/logout` route to destroy user session
- **getProfile** that makes a GET request to the `/profile` route getting the logged user information
- **editProfile** that makes a PUT request to the `/profile` route passing (user) *email*, *campus*, *course*, *password*, *avatar* info.


### Iteration 4 - Register/Login Components

You should create the `<Register />` and `<Login />` components, where the user will be able to fill the form with the specified fields.

If the `register` is successful, the user must be redirected to the `login` route.
If the `login` is successful, the user must be redirected to the `profile` route.

![image](https://user-images.githubusercontent.com/23629340/43787810-2c9dc94e-9a6c-11e8-8854-0993c5de16a3.png)

![image](https://user-images.githubusercontent.com/23629340/43787823-37a22ed4-9a6c-11e8-9c8e-70cd622f4d96.png)

### Iteration 5 - Upload the Profile

On the profile route, the user should be able to modify his profile or upload a photo to the profile. In this iteration, you should create all that is necessary to upload a new profile picture and store it in the database.

![image](https://user-images.githubusercontent.com/23629340/43787903-6a370928-9a6c-11e8-89b1-15e86e0397e4.png)

### Iteration 5 - Styling your App

Feel free to style it how ever you want. :art:
Or you can use `.png` inside of the `assets` folder that you can use as a background image. Don't forget to copy the image inside public folder of your React app. Here you can check the colors:

- Gradient background color: #C1DFC4 to #DEECDD
- Green: #638165
- Red: #D0021B


Happy coding! :heart:

