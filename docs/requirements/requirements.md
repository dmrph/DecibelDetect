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
