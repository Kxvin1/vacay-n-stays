# Vacay N Stays

Inspired by Airbnb, Vacay N Stays is an online marketplace single page app for luxurious and unique vacation spots. Users can book stays at these spots, as well as create their own spot and leave reviews for spots.

### Here are some key features:
  - Leveraged Redux to create a single page app to dynamically render React components without a refresh
  - Implemented CRUD features for Spots, Bookings, and Reviews
  - Implemented Google Maps API to dynamically display the location of all spots and add markers on the map for each spot
  - Utilized Werkzeug to hash user passwords and store them in the database to implement access control lists
  - Integrated AWS S3 for all image uploads

### Links
- [Live Site](https://vacay-n-stays.herokuapp.com/)
- [MVP Feature List](https://github.com/Kxvin1/vacay-n-stays/wiki/Feature-List)
- [Database Schema](https://github.com/Kxvin1/vacay-n-stays/wiki/Database-Schema)
- [API Routes](https://github.com/Kxvin1/vacay-n-stays/wiki/API-Routes)
- [Frontend Routes](https://github.com/Kxvin1/vacay-n-stays/wiki/Frontend-Routes)
- [User Stories](https://github.com/Kxvin1/vacay-n-stays/wiki/User-Stories)
- [Wireframes](https://github.com/Kxvin1/vacay-n-stays/wiki/Wireframes)

#### **_Recommended resolution size for viewing: 1366 x 768 or higher_**

# Technologies Used

## Backend

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## APIs, Image Storage & Hosting

![Google Maps API](https://img.shields.io/badge/Google%20Maps-4285F4.svg?style=for-the-badge&logo=Google-Maps&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# Flask React Project

This is the starter for the Flask React project.

## Getting started
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on alpine-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

# About the Project & Features

