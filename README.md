# Recipe Search

A simple web application that allows users to search for recipes by entering a search query. The app fetches recipes from the Edamam API and displays them with images, source information, and links to the full recipe.

## Features
- Search for recipes using a keyword
- Display recipe results with images, titles, and sources
- Links to full recipes on external websites
- Responsive grid layout for recipes

## Technologies Used
- HTML
- CSS
- JavaScript (ES6)
- Fetch API to make requests to the Edamam API

## Setup and Usage

### Prerequisites
To run this project, you'll need:
- A web browser
- An API key and ID from the [Edamam Recipe Search API](https://developer.edamam.com/)

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/recipe-search.git
Navigate to the project folder:

bash
Copy code
cd recipe-search
Update the API keys in script.js:

Replace the placeholders your-app-id and your-app-key with your Edamam Recipe Search API credentials.
Open the index.html file in your web browser to start using the Recipe Search app.

API Keys Setup
Replace the following part in script.js with your own API credentials:

js
Copy code
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=your-app-id&app_key=your-app-key`);
Project Structure
graphql
Copy code
.
├── index.html          # Main HTML file for the webpage
├── styles.css          # CSS file for styling
├── script.js           # JavaScript file for functionality
└── README.md           # Project documentation
License
This project is licensed under the MIT License.

markdown
Copy code

### Steps to Upload Your Project to GitHub:

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and log in.
   - Click on the `+` icon in the top-right corner and select "New repository."
   - Name your repository (e.g., `recipe-search`), add a description, and select whether you want the repository to be public or private.
   - Click "Create repository."

2. **Initialize Git in Your Local Project**:
   - In your project folder, open a terminal (or command prompt) and run:
     ```bash
     git init
     ```

3. **Add Files to Git**:
   - Add your project files to Git with the following command:
     ```bash
     git add .
     ```

4. **Commit Your Changes**:
   - Commit your files to the local repository with a message:
     ```bash
     git commit -m "Initial commit"
     ```

5. **Link to the GitHub Repository**:
   - Copy the repository URL from GitHub and run the following command to add the remote repository:
     ```bash
     git remote add origin https://github.com/yourusername/recipe-search.git
     ```

6. **Push Your Code to GitHub**:
   - Push the committed files to the GitHub repository:
     ```bash
     git push -u origin master
     ```

After these steps, your project will be available on GitHub for others to view and collaborate 
