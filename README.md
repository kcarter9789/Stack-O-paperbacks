# Book Search Engine

## Description

The Book Search Engine is a web application that allows users to search for books using the Google Books API. Users can sign up, log in, and save their favorite books to their profile for easy access later.

## Table of Contents

- [Book Search Engine](#book-search-engine)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Setup and run](#setup-and-run)
  - [Usage](#usage)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Contributing](#contributing)
  - [Contact](#contact)

## User Story
```sh
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```
## Acceptance Criteria
```sh
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Installation

To run the Book Search Engine, you'll need to have Node.js and npm installed on your computer. Once you have them, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project's root directory in the terminal.
3. Run the following commands to install the packages and start the app

[x] Please use Node 14 to because of some other packages that does not work well with other latest Node versions

## Setup and run
```sh
# Install Node 14 using nvm
nvm i 14

# Use Node 14
nvm use 14

# Install packages 
npm install

# Start app in development mode
npm run develop

# Start app in production mode
npm start

# Delete packages
npm run clean
```

## Usage
- On the homepage, you can search for books using keywords or phrases.
- If you're a new user, click on the "Login/Sign Up" button to create an account.
- After logging in, you can save books to your profile by clicking the "Save" button on each book card.
- To view your saved books, click on the "See Your Books" link in the navigation menu.

## Features
- User authentication (sign up, log in, log out).
- Book search using the Google Books API.
- Saving and displaying user's favorite books.

## Technologies
The Book Search Engine is built using the following technologies and libraries:

- Node.js
- Express.js
- React
- Apollo Server
- MongoDB
- GraphQL

## Contributing
Contributions to the Book Search Engine project are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name for your feature.
3. Make your changes and commit them.
4. Push your changes to your branch on your forked repository.
5. Submit a pull request to the main repository.
For bug reports or feature requests, please open an issue on the GitHub repository.


## Contact
If you have any questions or suggestions, feel free to reach out:

- Name: Your Name
- GitHub: Your GitHub Username
- Email: your@email.com
