# 9/18 Weekly Report

## Team Report

### Goals from Last Week:
- Review project structure and technologies.
- Set up basic repository and folders for the project.
- Begin planning for the core functionalities.

### Progress and Issues:
- The git repository was created, and the requirements and reports folders were set up.
- Researched tools for cross-platform development and database handling.
- No significant issues so far, but the main focus has shifted to geolocation and visualization.

### Plans and Goals:
- Start working on audio input functionality and geolocation integration.
- Set up the backend with Express.js and database handling. ? (Maybe Python)
- Begin work on the frontend interface using React Native.

---

## Contributions of Individual Team Members:

### David:
  - **Goals from Last Week:**
    - Get started on Git
    - Work on JS or Python program for audio input
  
  - **Progress and Issues:**
    - Created the git repository and set up the requirements and reports folder.
  
  - **Plans and Goals:**
    - Start working on a simple program that accepts audio input.

---

### Matt:
  - **Goals from Last Week:** 
    - Started research on PostgreSQL and MongoDB
  
  - **Progress and Issues:** 
    - Researched ways to store the data in the databases
  
  - **Plans and Goals:**
    - Start downloading the necessary databses needed to store the data (MongoDB or PostgreSQL)

---

### Aaron:
  - **Goals from Last Week:** 
    - Research React
  
  - **Progress and Issues:** 
    - Researched react and the library that comprises it.
  
  - **Plans and Goals:**
    - Become proficient in React.

---

### Rahul: 

#### Goals from Last Week:
- Research decibel detecting processes thoroughly

#### Progress and Issues:
- Identified key features for the reporting interface, including noise type selection and GPS integration.

#### Plans and Goals:
- Implement the "Report Noise Source" feature in the app, allowing users to submit noise reports with location and audio evidence.




---

## Technology Overview:

### Frontend:
- **Current Status:**  
  After further research, using React Native enables cross-platform compatibility across iOS and Android. Additionally, a web app can be built with React.js to ensure desktop usability.

### Backend:
- **Current Status:**  
  A Node.js server using the Express.js framework will handle API requests and data processing.

### Database:
- **Current Status:**  
  Considering databases such as MongoDB or PostgreSQL for storing user profiles and noise recording metadata. For geographical data handling, PostGIS can be paired with PostgreSQL.

### Collection/Visualization:
- **Current Status:**  
  Smartphones’ built-in microphones will collect noise data, which will then be geolocated using GPS. Integration with Google Maps API will render the noise data on a geographic map.
