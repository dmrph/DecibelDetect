# Decibel Detect - Requirements

## 1. Team Info & Policies (10%)

### Team Members and Roles:
- **David Murphy** - Product Owner, Dev Team
- **Matthew Danese** - Scrum Master, Dev Team
- **Aaron Polite** - Dev Team
- **Rahul Reji** - Dev Team

### Github Repository:
- [Decibel Detect Repository](https://github.com/dmrph/DecibelDetect)

### Communication Channels/Tools:
- Github for version control
- Discord for communication & meetings

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

### Matt: Submitting Noise Data to DecibelDetect

#### Actors
- **Primary Actor:** User (City Dweller with a smartphone)
- **System Actor:** DecibelDetect Mobile/Web Application

#### Triggers
- User wants to contribute noise level data in their current location to the DecibelDetect platform.

#### Preconditions
- User has installed the DecibelDetect mobile app or has access to the web application.
- User's smartphone microphone is functioning.
- User has allowed microphone access for the DecibelDetect application.
- User has a stable internet connection to upload the data.

#### Postconditions (Success Scenario)
- The decibel level is successfully uploaded and visualized on the interactive noise pollution map.
- The community has an updated view of noise pollution in that area.
  
#### List of Steps (Success Scenario)
1. User opens the DecibelDetect mobile/web application.
2. The app requests microphone access, if not previously granted.
3. User navigates to the "Submit Noise Data" feature.
4. The app prompts the user to capture noise data by using their smartphone microphone.
5. User taps a button to start recording noise levels.
6. DecibelDetect measures the noise level for a predefined duration (e.g., 10 seconds).
7. The measured decibel level is displayed to the user for review.
8. User submits the captured data.
9. DecibelDetect uploads the data to the server and updates the map with the new noise level reading.
10. The interactive map refreshes, showing the updated noise pollution information for that location.

#### Extensions/Variations of the Success Scenario
- **Step 4 Variation:** If the user has previously recorded data, the app may show a history of prior submissions and allow the user to compare recent measurements.
- **Step 6 Variation:** If the user chooses, they can record for a longer period of time (e.g., 30 seconds or 1 minute) for more accurate measurements.
- **Step 8 Variation:** After submission, the app may prompt the user to provide additional context (e.g., time of day, type of noise) for improved data quality.

#### Exceptions (Failure Conditions and Scenarios)
- **Microphone Access Denied:** If the user denies microphone access, the app will display a message explaining that microphone access is required to capture noise levels, and direct the user to their device settings to enable it.
- **Poor Internet Connection:** If the user's internet connection is unstable or unavailable, the app will save the noise data locally and attempt to upload it once the connection is restored.
- **Low Device Storage:** If the user's device is low on storage, the app will notify the user and prevent data capture until space is freed.
- **Inaccurate Noise Reading:** If the app detects a potential issue with the microphone (e.g., hardware malfunction or obstruction), it will alert the user to reattempt the measurement after troubleshooting.

---

### David: Viewing Noise Pollution Heatmap

#### Actors
- **Primary Actor:** User (City Dweller with a smartphone or desktop device)
- **System Actor:** DecibelDetect Mobile/Web Application

#### Triggers
- User wants to view current noise pollution levels in a specific area or neighborhood using the DecibelDetect platform.

#### Preconditions
- User has access to the DecibelDetect mobile app or web application.
- The app has successfully collected and uploaded noise data from users in the area.
- User's device has access to the internet to load the map and data.

#### Postconditions (Success Scenario)
- The user successfully views a heatmap showing noise pollution levels in real-time for their selected location.
- The user is able to identify areas with high or low noise levels and make decisions accordingly (e.g., avoiding noisy areas).

#### List of Steps (Success Scenario)
1. User opens the DecibelDetect mobile/web application.
2. User navigates to the "View Heatmap" feature.
3. The app loads a map of the user's current location or a location specified by the user.
4. The app overlays noise pollution data as a heatmap on top of the map interface.
5. The user is able to zoom in and out, and pan across the map to explore different areas.
6. The app provides a key explaining the noise levels (e.g., color-coded ranges from quiet to noisy).
7. The user can tap on specific regions to view more detailed information about the noise levels (e.g., exact decibel readings, time of recordings).
8. User successfully identifies noisy or quiet areas and exits the heatmap when finished.

#### Extensions/Variations of the Success Scenario
- **Step 3 Variation:** The user may choose a location different from their current location (e.g., by entering a city name or postal code).
- **Step 6 Variation:** The app may allow the user to filter the noise data by time (e.g., showing noise levels at different times of day or during different events).
- **Step 7 Variation:** The app may show additional context such as the type of noise (e.g., traffic, construction) if available.

#### Exceptions (Failure Conditions and Scenarios)
- **No Data Available:** If there is no available noise data for the selected area, the app will display a message indicating that data is unavailable and suggest users to contribute data.
- **Poor Internet Connection:** If the user's internet connection is unstable, the app may fail to load the heatmap, and a message will be displayed prompting the user to retry once the connection is restored.
- **GPS Location Error:** If the user’s device has trouble retrieving GPS location, the app will prompt the user to manually enter a location or ensure that location services are enabled.



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
