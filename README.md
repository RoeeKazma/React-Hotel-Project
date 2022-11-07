# Roee Kazma - React Booking clone project - 

## How to view the project - 

-- 1 -- clone this repository

-- 2 -- write "npm i" in both "api" and "Client" terminal folder

-- 2 -- login with username:password - test123:123456

-- 3 -- search for "TLV"/"Berlin" in the search bar and choose how many nights you are staying

-- 4 -- choose a hotel of your liking

-- 5 -- reserve a room for yourself, now one else can now reserve for the time that you reserved the room, try it :)


## Things to know about the project - 

- This project is was made using ReactJs, pure CSS, NodeJs and MongoDB.
- all of the data for the hotels are "handmade" by using http requests that can be turned into an admin panel in a later time.

## Features - 

- In the home page there is a section that shows how many properties there are for each place (new york for example) which is true to the database I've created, same for the next section (Hotels/Apartments/Resorts/Vilas)
- Lower in the home page there is a "Homes guests love" section that only shows the admins chosen featured properties.
- After you search a hotel for your destination, you can filter the results for your Minimum and Maximum Prices
- If you'll try to reserve a room without being logged in you will be transfered to the login page (username:password - test123:123456)
- There is a price calculation for each hotel x nights staying
- You can click the hotel images to view them in gallery form
- When you reserve a room it can't be reserved anymore for the time that you reserved it
- Only admin users can send http requests to created hotels and rooms, it goes through the proper authentication to authorize the user (JWT, cookies)