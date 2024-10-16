# DecibelDetect

## 1. Overview
This document outlines the software architecture, design, coding guidelines, and process description for the DecibelDetect application. DecibelDetect is a web and mobile application designed to map noise pollution in urban environments, allowing users to contribute and visualize real-time noise data.

## 2. Software Architecture

### Major Components

#### Frontend
- **Description**: Built using React for web and React Native for mobile, providing a unified user experience across platforms.
- **Functionality**:
  - User interfaces for submitting noise data, viewing heatmaps, setting noise alerts, and reporting noise sources.

#### Backend
- **Description**: A Node.js server using Express.js and a Python microservice for audio processing.
- **Functionality**:
  - RESTful API to interact with the database, manage user data, and serve noise data to the frontend.
  - Python service for audio analysis and processing.

#### Database
- **Description**: PostgreSQL for structured data storage, enhanced with PostGIS for geographical data handling.
- **Functionality**:
  - Store user profiles, noise recordings, and metadata.

### Interfaces Between Components
- **Frontend to Backend**: RESTful API calls to retrieve and submit data.
- **Backend to Python Microservice**: API calls for audio processing.
- **Backend to Database**: SQL queries for CRUD operations on noise data and user profiles.

### Data Storage
- **Data Stored**:
  - User profiles: ID, username, email.
  - Noise recordings: ID, user ID, decibel level, location (latitude, longitude), timestamp.

### High-Level Database Schema
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE noise_records (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    decibel_level FLOAT NOT NULL,
    location GEOGRAPHY(POINT, 4326),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### Assumptions
- Users have smartphones with functioning microphones and internet access.
- The community will actively participate in data submission to enhance data accuracy.

### Architectural Decisions and Alternatives
- **Choice**: Using PostgreSQL with PostGIS.
  - **Alternative**: MongoDB for a more flexible schema.
    - **Pros**: Easier to scale, flexible document structure.
    - **Cons**: Less optimal for geospatial queries compared to PostGIS.
  
- **Choice**: Node.js for the backend with a Python microservice.
  - **Alternative**: Django (Python) for the entire backend.
    - **Pros**: Built-in admin panel, ORM.
    - **Cons**: More overhead, learning curve for team.

## 3. Software Design 

### Frontend (React and React Native)
- **Packages Used**:
  - **React Router**: For handling navigation between different views in the application.
  - **Axios**: For making API requests to the backend server.

- **Components and Responsibilities**:
  - **App**:
    - **Responsibility**: Serves as the root component, managing overall application state and routing.
  - **Heatmap**:
    - **Responsibility**: Renders the visual representation of noise pollution data on a map, allowing users to see noise levels in different areas.
  - **NoiseSubmission**:
    - **Responsibility**: Provides a form for users to input and submit noise data, including decibel level and location.
  - **UserProfile**:
    - **Responsibility**: Displays user information and submission history, allowing users to view their contributions and settings.

### Backend (Node.js with Express)
- **Modules and Responsibilities**:
  - **api.js**:
    - **Responsibility**: Defines API routes for handling user registration, authentication, and noise data submissions.
  - **db.js**:
    - **Responsibility**: Manages database connections and SQL queries for data retrieval and manipulation.
  - **noiseController.js**:
    - **Responsibility**: Contains business logic for processing noise data submissions, including validation and data formatting before storage.

### Python Microservice
- **Module and Responsibilities**:
  - **audio_processor.py**:
    - **Responsibility**: Processes audio data uploaded by users, analyzes decibel levels, and performs any necessary transformations before sending data back to the backend.

### Database (PostgreSQL)
- **Tables and Responsibilities**:
  - **users**:
    - **Responsibility**: Stores user profiles, including unique identifiers, usernames, and email addresses.
  - **noise_records**:
    - **Responsibility**: Stores individual noise recordings, including user ID, decibel level, geographic location, and timestamp.

## 4. Coding Guidelines 
### Programming Languages
- **JavaScript (React/Node.js)**: Follow the Airbnb JavaScript Style Guide.
  - **Reason**: Industry-standard practices that enhance readability and consistency.
  - **Enforcement**: Use ESLint for code linting and Prettier for formatting.
  
- **Python**: Follow PEP 8.
  - **Reason**: Ensures consistency and readability in Python code.
  - **Enforcement**: Use flake8 for linting and black for formatting.

## 5. Process Description 
### Risk Assessments
- **Risk**: Incorrect audio data
  - **Likelihood**: Medium
  - **Impact**: High
  - **Evidence**: Preliminary tests showed variability.
  - **Mitigation Steps**: Calibration of devices, extensive testing.
  - **Detection Plan**: Automated tests for accuracy.
  - **Mitigation Plan**: User feedback for calibration.

- **Risk**: Poor user engagement
  - **Likelihood**: Medium
  - **Impact**: Medium
  - **Evidence**: Limited user feedback during initial trials.
  - **Mitigation Steps**: Marketing strategies to encourage usage.
  - **Detection Plan**: Monitor submission rates.
  - **Mitigation Plan**: Adjust engagement strategies.

- **Risk**: Database performance issues
  - **Likelihood**: Medium
  - **Impact**: High
  - **Evidence**: Scaling tests revealed slow queries.
  - **Mitigation Steps**: Optimize queries, consider caching mechanisms.
  - **Detection Plan**: Performance monitoring tools.
  - **Mitigation Plan**: Refactor slow queries.

- **Risk**: API security vulnerabilities
  - **Likelihood**: Low
  - **Impact**: High
  - **Evidence**: Security audits highlighted potential risks.
  - **Mitigation Steps**: Implement robust authentication and validation.
  - **Detection Plan**: Regular security testing.
  - **Mitigation Plan**: Apply patches promptly.

- **Risk**: Inaccurate GPS data
  - **Likelihood**: Medium
  - **Impact**: Medium
  - **Evidence**: User reports of location inaccuracies.
  - **Mitigation Steps**: Test across various devices, enhance geolocation.
  - **Detection Plan**: User reporting system.
  - **Mitigation Plan**: Improve geolocation handling.

### Project Schedule
- **Milestone**: Core App Structure
  - **Task**: Build initial app skeleton
  - **Effort Estimate**: 1 person-week
  - **Dependencies**: None

- **Milestone**: Audio Detection
  - **Task**: Develop audio detection feature
  - **Effort Estimate**: 2 person-weeks
  - **Dependencies**: Core App Structure

- **Milestone**: Python Microservice
  - **Task**: Implement audio processing service
  - **Effort Estimate**: 2 person-weeks
  - **Dependencies**: Audio Detection

- **Milestone**: Map Integration
  - **Task**: Integrate live map
  - **Effort Estimate**: 2 person-weeks
  - **Dependencies**: Audio Detection

- **Milestone**: User Interface Mockups
  - **Task**: Create UI mockups
  - **Effort Estimate**: 1 person-week
  - **Dependencies**: Core App Structure

- **Milestone**: API Design
  - **Task**: Define API endpoints
  - **Effort Estimate**: 1 person-week
  - **Dependencies**: Core App Structure

- **Milestone**: Database Setup
  - **Task**: Set up PostgreSQL
  - **Effort Estimate**: 1 person-week
  - **Dependencies**: API Design

- **Milestone**: Testing and Bug Fixing
  - **Task**: Conduct testing and fix issues
  - **Effort Estimate**: 2 person-weeks
  - **Dependencies**: Map Integration

### Team Structure
- **David Murphy**: Product Owner, overseeing development and team coordination.
- **Matthew Danese**: Scrum Master, managing timelines and agile processes.
- **Aaron Polite**: UI Designer, focusing on user experience and interface design.
- **Rahul Reji**: Mobile Developer, implementing features on the mobile platform.

### Documentation Plan
- **User Guides**: Instructions for using the app, available within the app and as a PDF.
- **Developer Guides**: Setup instructions, codebase overview, and contribution guidelines on GitHub.
- **Admin Guides**: Managing user data and noise reports for administrators.
