# Communication_ltd
a school project for the course Computers security

clone the repo : git clone https://github.com/darkolol9/Communication_ltd

to run the client project: 


- step 1: cd into /client
- step 2: run "npm i" to install
- step 3: run "npm run dev" to run the client


to run the server project:

- step 1: cd into /server
- step 2: run "npm i" to install
- step 3: run "npm run dev" to run the server

-- migration for tables
-- SQLite
CREATE TABLE membership_plans (id INTEGER PRIMARY KEY AUTOINCREMENT, price_in_usd FLOAT, duration_in_years INTEGER);
CREATE TABLE sectors (id INTEGER PRIMARY KEY AUTOINCREMENT, area_code TEXT);
