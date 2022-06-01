# Vacay N Stays

Inspired by Airbnb, VacayNStays is an online marketplace single page app where users can book vacations at luxurious and unique vacation spots. Users can search for spots and either book stays at these spots, create their own spot or leave reviews for spots.

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

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## APIs, Image Storage & Hosting

![Google Maps API](https://img.shields.io/badge/Google%20Maps-4285F4.svg?style=for-the-badge&logo=Google-Maps&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# Getting Started
1. Clone this repository

   ```bash
   git clone git@github.com:Kxvin1/vacay-n-stays.git
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

# Project Pages & Features


## Home Page (logged out) & User Authentication

- A User that isn't logged in can browse the catalog of spots and use the search feature.

![Splash Page](https://i.imgur.com/nkBAlt4.jpeg)

- A User that isn't logged is not able to click and view the details of the spot. 
  - The User will be redirected to a 403 FORBIDDEN page if they attempt to access a page they are not allowed to until they log in.

![Forbidden 403](https://i.imgur.com/NgLCUMj.png)


## Log In and Sign Up

- Users can log into an existing account or sign up. Alternatively, users can test the site with the Demo Login feature.

![Login Modal](https://i.imgur.com/P476t95.jpeg)
![Signup Modal](https://i.imgur.com/yj8nfGL.jpeg)


## Home Page (logged in)

- A User that is logged in will gain additional links to their navigation bar: My Spots, Trips, Post A Spot. The footer will also disappear.

![Home Page Authenticated](https://i.imgur.com/NPVBOq4.jpeg)


## Spot Details Section Here

- Stuff
- Stuff 2


## Your Spots

- When clicking on 'My Spots' the user is redirected to a page that contains a list of all the logged in User's created spots.

![Your Spots Blank](https://i.imgur.com/u2E88ya.jpeg)

- When a User hovers over a marker on the map and clicks it an image modal pops up with details of that specific spot.

![Image Modal Spot](https://i.imgur.com/W4b0smC.jpeg)

- When a user hovers over a spot, 3 buttons appear: Click to view on map, an Edit button, and a Delete button.

![Your Spots Hovered](https://i.imgur.com/vSb5dkX.jpeg)

- Clicking on the red Click to view on map will pan the map to that specific spot

![Click To View Spot](https://i.imgur.com/j8kuMVD.png)


## Adding and Editing a Spot Section Here

- Stuff
- Stuff 2


## Bookings

- When clicking on 'Trips' the user is redirected to a page that contains a list of all their upcoming and previous bookings.

![Bookings Blank](https://i.imgur.com/73t5r76.png)

- When hovered over a specific trip and the trip is under Upcoming Trips, 2 buttons appear: A Delete button (trash icon) and a Get Directions button

![Bookings Hover Upcoming](https://i.imgur.com/2CRYLe7.png)

- When hovered over a specific trip and the trip is under Where You've Been, no buttons appear. These past trips can't be deleted.

![Bookings Hover Past](https://i.imgur.com/Ppjk4eS.png)

## Directions

- When in 'Trips' page and the User clicks on Get Directions, the User is taken to a page that lets them input a location to show how far away the Booking Spot is from that origin.

![Directions](https://i.imgur.com/qLbULvH.jpeg)

## Search

- This is the page that displays when a user accesses the search bar.
  - On the left, they are shown a list of all the results of the search that met their criteria.
  - On the right is a Google Map of all the spots with their respective locations marked on the map that display as that spot's price per night.
![Search Page](https://i.imgur.com/eexkSjI.jpeg)

- When a User hovers over a marker on the map and clicks it an image modal pops up with details of that specific spot.

![Image Modal Spot](https://i.imgur.com/W4b0smC.jpeg)

-  When hovering over a specific spot, a clickable button appears "Click to view on map" that will zoom into the map to that specific spot.

![Click To View](https://i.imgur.com/em1wDR1.jpeg)

- The map zooms and pans to that spot to show the surroundings and any nearby shops that might interest the user.

![Zoomed In](https://i.imgur.com/NmfD1jt.png)


## Page Not Found

- If a User navigates to a page that doesn't exist, they are met with a Page Not Found and are given links to redirect them to different pages of the site.

![Page Not Found 404](https://i.imgur.com/oGK39MC.png)
