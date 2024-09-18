# Decibel Detect - Requirements

## 1. Team Info & Policies (10%)

### Team Members and Roles:
- **David Murphy** - 
- **Matthew Danese** - 
- **Aaron Polite** - 
- **Rahul Reji** - 

### Github Repository:
- [Decibel Detect Repository](https://github.com/dmrph/DecibelDetect)

### Communication Channels/Tools:
- Github for version control
- Discord for communication abut meetings and discuss outside of the class

## 2. Product Description (20%)

**DecibelDetect** is a web and mobile application designed to map noise pollution in urban environments. By allowing users to upload the decibel level of their current area (using the smartphone mic), DecibelDetect captures real-time noise data and visualizes it on an interactive map. Users are then able to identify and navigate away from the noisy areas, promoting quieter and healthier urban living spaces.

DecibelDetect aims to empower city dwellers with the ability to understand and navigate the sounds of their environment. While other noise mapping tools exist, they often rely on non-real-time data or are limited in geographic scope. DecibelDetect differentiates itself by providing real-time noise level readings contributed by a community of users, offering a comprehensive, up-to-date map of urban noise pollution. This community-driven approach enhances data accuracy, coverage, and user engagement.

### Major Features:
- Heatmap to display areas with greater noise pollution.
- Data/decibel upload using smartphones.
- Live map updates.

### Goals:
- Scale the application to fill more use cases.

## 3. Use Cases (Functional Requirements) (30%)

Each team member must come up with and describe at least one use case of the product, following this template:
Use Case: Noise Reporting
Actors

User
System (DecibelDetect application)
Triggers

The user wants to report the noise level in their current environment.
Preconditions

The user has the DecibelDetect app installed on their smartphone.
The user has granted microphone access to the app.
The user is connected to the internet.
Postconditions (Success Scenario)

The noise level is successfully recorded and uploaded to the DecibelDetect database.
The interactive map is updated to reflect the new noise data.
The user receives feedback confirming their report and can see their contribution on the map.
List of Steps (Success Scenario)

Open App: The user launches the DecibelDetect app on their smartphone.
Access Location: The app automatically detects the user's current location using GPS.
Initiate Noise Measurement: The user taps the "Record Noise" button to start capturing the ambient noise level.
Capture Noise Level: The app utilizes the smartphone microphone to measure the decibel level for a specified duration.
Review Measurement: Once the recording is complete, the app displays the measured decibel level to the user.
Submit Report: The user confirms the submission of the noise level by tapping the "Submit" button.
Update Map: The app updates the interactive map with the new noise level data and displays a confirmation message.
Provide Feedback: The user receives a notification indicating that their report has been successfully submitted.
Extensions/Variations of the Success Scenario

User Updates Location: If the user moves to a different location while measuring noise, they can choose to update the location before submission.
User Adds Comments: The user can provide additional comments or context regarding the noise source (e.g., construction, traffic) before submission.
Exceptions (Failure Conditions and Scenarios)

Microphone Access Denied: If the user has not granted microphone access, the app displays an error message and prompts the user to enable microphone permissions.
No Internet Connection: If there is no internet connection, the app informs the user that the submission cannot be completed and offers to save the data for later.
Recording Error: If the app encounters an error while capturing the noise level (e.g., hardware issue), it notifies the user and suggests trying again.

1. **Actors**
2. **Triggers**
3. **Preconditions**
4. **Postconditions (Success Scenario)**
5. **List of Steps (Success Scenario)**
6. **Extensions/Variations of the Success Scenario**
7. **Exceptions (Failure Conditions and Scenarios)**

(At the end of this step, there will be at least one use case per team member.)

## 4. Non-Functional Requirements (10%)

### Security:
- User data must be securely stored with appropriate security measures to prevent data misuse.

### Scalability:
- The application must handle a large number of users uploading noise data. A low number of users would make the map inaccurate due to limited data.

### Usability:
- The app should provide a clean, intuitive user interface, enabling easy data uploads and detection of noisy areas. The focus should be on simplicity, avoiding clutter.

## 5. External Requirements (10%)

- The product must be robust against expected errors, such as invalid user input.
- The product must be easily installable by users, with a public URL for web services or a straightforward installation method for stand-alone applications.
- All software components should be buildable from source by others, with detailed instructions for setup.
- The system must be well-documented for future developers to make enhancements.
- The project’s scope should match the available team resources.

## 6. Team Process Description (20%)

### Software Toolset:
- Define and justify the software toolset used, including programming languages, data sources, project trackers, and other tools.

### Roles:
- Define and justify each team member's role, explaining why each role is necessary for the project and why the team member is suited for it.

### Milestones:
- Provide a schedule for each member (or sub-group) with at least four concrete milestones and deadlines for the semester.

### Risks:
- Identify and explain at least three major risks that could prevent the project’s completion.

### External Feedback:
- Describe at what point external feedback will be most useful, and how this feedback will be obtained.

## Technology Overview:

### Frontend:
- React Native enables cross-platform compatibility across iOS and Android, and React.js will cater to desktop usability.

### Backend:
- A Node.js server using the Express.js framework will handle API requests and process data.

### Database:
- Databases such as MongoDB or PostgreSQL will store user profiles and noise recording metadata. Pairing PostgreSQL with PostGIS will enhance geographical data handling.

### Collection/Visualization:
- Smartphones’ built-in microphones will collect noise data, which will be geolocated using GPS. Integration with Google Maps API will render the noise data on a geographic map.

---

**Export a PDF snapshot of your document named ProjectName-m2.pdf and submit it to Canvas by the due date (Check Calendar).**

### Clarifications and FAQs:

1. **Software Toolset:**
   - Specify programming languages, data sources, project trackers, and other tools. Determine whether you will use "off the shelf" components or build from scratch, and explain why each tool was chosen.

2. **Team Member Roles:**
   - A role describes a team member's responsibility within the project. These can be refined and changed as the project progresses.

3. **Writing Advice:**
   - Focus on plausibility, thoughtfulness, and detail. Ensure the document is clear, professional, and avoids redundancy.
