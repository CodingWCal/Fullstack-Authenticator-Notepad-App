# Fullstack App 2: Notepad

An authenticated note-taking app where you can add, view, and delete personal notes, protected behind a signup/login flow.

**Link to project:** https://github.com/CodingWCal/fullstack-auth-app-2-notepad  
 

*Screenshot of the home page, login, as well as notes list and “Add Note” form.*

## How It’s Made

**Tech used:**  
- **Backend:** Node.js, Express.js  
- **Auth:** Passport.js (local), express-session, connect-flash  
- **Database:** MongoDB (Atlas), Mongoose  
- **Templating:** EJS  
- **Frontend:** Bootstrap, HTML, CSS  

Forked the Workout Tracker codebase from my first fullstack authentication app as a boilerplate, replaced the `Workout` model with a `Note` model (fields: `title`, `content`, `created`, `userId`). Updated routes to `/notes` and views to render note titles and content. The delete button posts to `/notes/delete` with method-override.

## Optimizations

- Added a default `created` timestamp in the schema for easy sorting.  
- Moved common layout (header/nav) into an EJS partial.

## Lessons Learned

- How small model/schema tweaks let you potentially spin up a brand-new CRUD app in minutes.  
- Keeping authentication and route middleware reusable across multiple projects.  
- Quick prototyping by copying & adapting an existing codebase while respecting DRY principles.

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Inspiration & Credit

Modified from Scotch.io's auth tutorial
