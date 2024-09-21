# Decibel Detect - Requirements

## 1. Team Info & Policies

### Team Members and Roles:
- **David Murphy** - Product Owner, Dev Team
- **Matthew Danese** - Scrum Master, Database Designer
- **Aaron Polite** - UI Design
- **Rahul Reji** - Dev Team

### Github Repository:
- [Decibel Detect Repository](https://github.com/dmrph/DecibelDetect)

### Communication Channels/Tools:
- Github for version control
- Discord for communication & meetings

## 2. Product Description

**DecibelDetect** is a web and mobile application designed to map noise pollution in urban environments. By allowing users to upload the decibel level of their current area (using the smartphone mic), DecibelDetect captures real-time noise data and visualizes it on an interactive map. Users are then able to identify and navigate away from the noisy areas, promoting quieter and healthier urban living spaces.

DecibelDetect aims to empower people from cities/suburbs with the ability to understand and navigate the sounds of their environment. While other noise mapping tools exist, they often rely on non-real-time data or are limited in geographic scope. DecibelDetect differentiates itself by providing real-time noise level readings contributed by a community of users, offering a comprehensive, up-to-date map of urban noise pollution. This community-driven approach enhances data accuracy, coverage, and user engagement.

### Major Features:
- Heatmap to display areas with greater noise pollution.
- Data/decibel upload using smartphones.
- Live map updates.
- Abillity to see history of sound pollution in different areas

### Goals:
- Scale the application to fill more use cases.
- Integration of social media elements to allow audio sharing.

## 3. Use Cases (Functional Requirements)

Each team member must come up with and describe at least one use case of the product, following this template:

### Matt: Submitting Noise Data to DecibelDetect

#### Actors
- **Primary Actor:** User (Person with a smartphone)
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
- **Primary Actor:** User
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

---

### Aaron: Noise Alerts

#### Actors
- **Primary Actor:** User
- **System Actor:** DecibelDetect Mobile/Web Application

#### Triggers
- User wants to receive notifications when noise levels in their current area exceed a certain threshold, indicating a noisy environment.
#### Preconditions
- User has access to the DecibelDetect mobile app or web application.
- The app has collected real-time noise data from users in the area.
- User’s device has access to the internet.
- User has enabled location services and notifications in the app.

#### Postconditions (Success Scenario)
- The user receives a notification when noise levels in their current location exceed the set threshold.
- The user is informed about the noise pollution and can decide to stay or move to a quieter location.

#### List of Steps (Success Scenario)
1. User opens the DecibelDetect mobile/web application.
2. User navigates to the "Noise Alerts" settings.
3. The app prompts the user to select a noise threshold (e.g., 70 decibels) for receiving notifications.
4. User selects a threshold and confirms their preferences.
5. The app continuously monitors noise levels in the background, using GPS to track the user’s location and real-time noise data from the platform.
6. When noise levels in the user’s vicinity exceed the threshold, the app sends a push notification to the user’s device.
7. The notification includes details such as the current noise level, location, and potential sources of noise (if available).
8. User can tap the notification to view the noise heatmap and decide whether to stay or navigate to a quieter area.

#### Extensions/Variations of the Success Scenario
- Step 3 Variation: The user may choose different thresholds for different times of day (e.g., a lower threshold at night).
- Step 7 Variation: The app may provide additional context such as specific times when noise levels tend to spike, or recommendations for quieter areas nearby.
- Step 8 Variation: The user can customize the frequency of alerts (e.g., only receive notifications every 30 minutes or when moving to a new area).
#### Exceptions (Failure Conditions and Scenarios)
- No Data Available: If there is insufficient real-time data in the user’s location, the app will notify the user that noise data is unavailable and encourage them to contribute data.
- Poor Internet Connection: If the user’s internet connection is unstable, the app may fail to send timely notifications, and a message will appear when the connection is restored.
- Battery Saving Mode: If the user’s device is in battery-saving mode, the app may limit background activity and delay notifications, prompting the user to adjust their settings.
- GPS Location Error: If the app cannot retrieve the user’s GPS location, it will display a message suggesting the user manually input their location for noise monitoring.
---

### Rahul: Reporting Noise Sources

#### Actors
- **Primary Actor:** User
- **System Actor:** DecibelDetect Mobile/Web Application

#### Triggers
- User wants to report a specific noise source (e.g., construction, traffic, or loud music) in their vicinity to raise awareness and contribute to community insights.

#### Preconditions
- User has access to the DecibelDetect mobile app or web application.
- User's device has access to the internet.
- User is logged into their account (if applicable).

#### Postconditions (Success Scenario)
- The noise source report is successfully submitted and stored in the system.
- The community and local authorities are informed about the noise issue, allowing for targeted responses and improvements.

#### List of Steps (Success Scenario)
1. User opens the DecibelDetect mobile/web application.
2. User navigates to the "Report Noise Source" feature.
3. The app displays a prompt asking the user to specify the type of noise (e.g., construction, traffic, loud music).
4. User selects the type of noise from a predefined list or types in a custom description.
5. The app automatically captures the user's current location (using GPS) and displays it for confirmation.
6. User can optionally record a short audio clip to provide evidence of the noise source.
7. User submits the report.
8. The app confirms successful submission and displays a message thanking the user for their contribution.
9. The report is stored in the backend for analysis, and community members are notified about the noise issue.

#### Extensions/Variations of the Success Scenario
- **Step 3 Variation:** Users may be able to select multiple noise types or provide additional context (e.g., duration of noise).
- **Step 6 Variation:** Users may attach photos or videos of the noise source to strengthen their report.
- **Step 8 Variation:** After submission, the app may provide users with a link to view ongoing reports in their area or related community discussions.

#### Exceptions (Failure Conditions and Scenarios)
- **No Location Access:** If the app cannot access the user's GPS location, it will prompt the user to manually enter their location or ensure location services are enabled.
- **Poor Internet Connection:** If the internet connection is unstable, the app will save the report locally and attempt to upload it once the connection is restored.
- **Incomplete Report:** If the user attempts to submit a report without providing necessary information (e.g., noise type), the app will display an error message prompting the user to complete all required fields.

  

## 4. Non-Functional Requirements

### Security:
- User data must be securely stored with appropriate security measures to prevent data misuse.

### Scalability:
- The application must handle a large number of users uploading noise data. A low number of users would make the map inaccurate due to limited data.

### Usability:
- The app should provide a clean, intuitive user interface, enabling easy data uploads and detection of noisy areas. The focus should be on simplicity, avoiding clutter.

## 5. External Requirements

- The product must be robust against errors that can reasonably be expected to occur, such as invalid
user input.
- The product must be installable by a user, or if the product is a web-based service, the server must
have a public URL that others can use to access it. If the product is a stand-alone application, you
are expected to provide a reasonable means for others to easily download, install, and run it.
- The software (all parts, including clients and servers) should be buildable from source by others. If
your project is a web-based server, you will need to provide instructions for someone else setting up a
new server. Your system should be well documented to enable new developers to make enhancements.
- The scope of the project must match the resources (number of team members) assigned.

## 6. Team Process Description

### Software Toolset:
- Define and justify the software toolset used, including programming languages, data sources, project trackers, and other tools.
- PostgreSQL: Used to store the data

### Roles:
- Aaron (UI Design) : With my role as the Ui Designer, my job is to create a homepage that is orginized and easy for users to navigate. This
  role is crucial to ensure that the final project looks clean.
- Matt (Database Designer) : This role is crucial for the success of this project. My job as the Database Designer is to set up the database, PostgreSQL, which will be used to store the audio data that the app with gather and then will show the noise level of that area.
- David (Product Owner, Full Stack Engineer) : My role as product owner will primarily be making sure everybody understands their role and can progress in the project. It is important for me to properly relay the end goal of the project to the team members. I will also be working on building the app for IOS and Android in react using expo, as well as working on the audio detection. 

### Milestones:
#### For David (Product Owner, Full Stack Engineer):
1. **Milestone 1: Core App Structure Development**
   - **Description**: Build the initial app skeleton using React and Expo. Set up routing, screens (e.g., Home, Map, Upload).
   - **Deadline**: Week 2 of the semester.
   
2. **Milestone 2: Implement Audio Detection**
   - **Description**: Develop and integrate the audio detection feature. Ensure the app can accurately capture decibel data from the device's microphone.
   - **Deadline**: Week 4 of the semester.
   
3. **Milestone 3: Map Integration and Live Updates**
   - **Description**: Integrate the live map to display noise levels in real-time and ensure the heatmap visualizations work as expected.
   - **Deadline**: Week 7 of the semester.
   
4. **Milestone 4: Testing and Bug Fixing**
   - **Description**: Conduct testing of the audio detection and map features, fix bugs, and improve performance for smooth user experience.
   - **Deadline**: Week 10 of the semester.

  

  #### For Matt (Database Design):
1. **Milestone 1: API Design and Data Structure**
   - **Description**: Design the API for storing and retrieving noise data, including data structure definitions.
   - **Deadline**: Week 3 of the semester.
   
2. **Milestone 2: Server and Database Setup**
   - **Description**: Set up the server and database for collecting and storing noise pollution data uploaded by users.
   - **Deadline**: Week 5 of the semester.
   
3. **Milestone 3: Data Upload and Retrieval**
   - **Description**: Implement functionality to upload decibel data and retrieve it for the map heatmap feature.
   - **Deadline**: Week 7 of the semester.
   
4. **Milestone 4: API Testing and Optimization**
   - **Description**: Conduct API testing to ensure data is uploaded correctly, and optimize it for scalability.
   - **Deadline**: Week 9 of the semester.



#### For Aaron (UI Design):
1. **Milestone 1: User Flow and Wireframes**
   - **Description**: Design basic user flows and create wireframes for the app's main screens (Home, Map, Upload).
   - **Deadline**: Week 2 of the semester.
   
2. **Milestone 2: UI Mockups**
   - **Description**: Develop full UI mockups and visual design elements for the app. Collaborate with the development team for feedback.
   - **Deadline**: Week 4 of the semester.
   
3. **Milestone 3: Usability Testing**
   - **Description**: Conduct usability tests to ensure the design is intuitive and user-friendly, then refine the design based on user feedback.
   - **Deadline**: Week 8 of the semester.
   
4. **Milestone 4: Final Design Integration**
   - **Description**: Finalize and deliver the polished design assets for integration into the React app.
   - **Deadline**: Week 9 of the semester.

#### For Rahul (Mobile Developer):
1. **Milestone 1: Mobile Interface Setup**
   - **Description**: Set up the mobile interface with Expo, ensuring cross-platform compatibility for iOS and Android.
   - **Deadline**: Week 3 of the semester.
   
2. **Milestone 2: Implement Decibel Data Upload**
   - **Description**: Integrate functionality for uploading decibel readings from the mobile device to the server.
   - **Deadline**: Week 5 of the semester.
   
3. **Milestone 3: Integrate Heatmap Visualization**
   - **Description**: Implement the heatmap feature on the mobile app to visualize noise pollution data on a live map.
   - **Deadline**: Week 7 of the semester.
   
4. **Milestone 4: Mobile Testing and Performance Optimization**
   - **Description**: Conduct extensive testing of the mobile app, focusing on performance and responsiveness.
   - **Deadline**: Week 10 of the semester.

---

### Risks:
- **Risk**: **Incorrect data when audio is being recorded**.
   - **Mitigation**: Ensure the app is calibrated to detect accurate decibel levels across a wide range of devices. Conduct testing on different smartphone models and environments to validate accuracy. Implement audio filtering to discard irrelevant noise or calibrate based on background levels. Include user feedback mechanisms to flag potential incorrect recordings.

---

### External Feedback:
- **Timing for Feedback**:  
   External feedback will be most useful during **Milestone 3**, when the app has integrated audio detection and map functionality (around Week 7 or 8). At this stage, external users can test the key features and provide valuable insights regarding usability, accuracy of decibel detection, and map clarity.

---

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
