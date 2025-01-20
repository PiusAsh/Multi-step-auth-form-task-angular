# SbscMultiStepAuthFormTask

A multi-step authentication form built with Angular CLI. The project implements a user-friendly form with validation, responsive design, and smooth animations.

## Setup & Run Locally
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.
### Prerequisites
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Steps to setup locally
1. Clone the repo:
   ```bash
   git clone https://github.com/PiusAsh/SbscMultiStepAuthFormTask.git
   cd SbscMultiStepAuthFormTask
Install Node module using the following command: npm install

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Project Structure and Approach
Folder Structure
## src/app
core: Contains global services and essential functionality for the application.
modules: Houses feature modules, such as authentication.
services: Manages application-wide services like data and state management. In this case, form state service.

## src/app/modules
authentication: Contains the authentication workflow, including layout and step components.

## src/app/modules/authentication
Auth Layout: Manages the overall structure and navigation for the multi-step form.
Steps Folder: Contains individual steps of the authentication form.

## src/app/modules/authentication/steps
Key Components
Account Information: Handles account setup fields (username, email, and password).
Personal Information: Collects personal details like name, date of birth, and phone number.
Security Questions: Allows users to select and answer security questions.
Review: Displays a summary of all entered information for review before submission.
 
## Development Approach
Step-by-Step Navigation:
Each step is a separate route managed by Angular Router.
Navigation between steps is tracked using the AuthLayoutComponent, which listens to NavigationEnd events to update the current step dynamically.
Form Data Management:
Centralized State Management: The FormStateService is used to store and manage form data. It uses BehaviorSubject to ensure real-time updates.
Local Storage: Data is cached in local storage to persist user inputs across browser refreshes.
Validation:
Reactive Forms: Each step uses Angular's reactive forms to handle input and validation.
Dynamic Errors: Validation errors are displayed dynamically using Bootstrap-styled error messages.
Responsive Design:
Bootstrap Framework: Ensures the form is fully responsive across all devices.
Custom Animations: Smooth transitions and effects are implemented using CSS animations to enhance the user experience.

Success Feedback:
Upon successful form submission the form is reset, a success message is displayed with a "Register Again" button for a new form submission.