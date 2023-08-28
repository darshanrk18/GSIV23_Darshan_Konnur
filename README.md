# Movie App

This is a React movie app that displays upcoming movies, allows searching, and provides movie details such as Movie Description, IMDB Rating, Casting details, Release date.

## Instructions

1. Clone or download this repository.

2. Navigate to the project directory:
'cd movie-app'

3. Install the required dependencies:
npm install


4. Start the development server:
npm start


5. Open your web browser and go to `http://localhost:3000` to view the app.

## Elements Done Well

1. **Search Functionality**: I implemented a search bar component that allows users to search for movies and see the results on the same page. The search bar component is developed into the header component which is designed to have the search bar for List Page but not for Movie Details Page.

2. **State Management with Context**: I used the Context API for state management, providing a centralized data store for search results and query. This is to reduce Prop drilling and keep clean code and more maintainable. This is built-in to the React and and much simpler to set up and use for manage states. Honestly, I have not worked on Redux state management yet. But I'm always open to learn new stuff out there.

3. **Responsive Design**: The app is designed to be responsive with a minimum width of 512 pixels, ensuring a seamless experience across different devices.

## Improvements with Extra Time

If I had an additional 4 hours, here's what I would do to improve the solution:

1. **Unit Testing**: I would write comprehensive unit tests using a testing framework like Jest and Enzyme to ensure the reliability of the codebase.

2. **Error Handling**: Implement better error handling and display appropriate messages to users when API calls fail or data is missing.

3. **Pagination**: Add a pagination component for navigating through search results when there are more than one page of results.

4. **UI Polish**: Spend more time refining the user interface, improving aesthetics, animations, and ensuring consistent styling across components.

These improvements would enhance the overall quality, reliability, and user experience of the app.

**Overall for this project I could spend an hour per day as I am handling a project at my current work location all by myself and it is at the completion stage. Had to focus on that as well. But yes, let me know if I can improve this anymore and if I have to learn more things so that I can upskill myself. ALways open to learn. Thank you for this opportunity!!**
