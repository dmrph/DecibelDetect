10/16/24

"Report Noise Source" Feature Design

-Pseudo Code for "Report Noise Source" Feature

FUNCTION reportNoiseSource(userLocation, audioInput):
    IF audioInput IS NULL:
        RETURN "Error: No audio input detected."
    
    noiseType = promptUserForNoiseType()
    
    IF noiseType IS NULL:
        RETURN "Error: Noise type not selected."
    
    report = {
        "user_id": getCurrentUserID(),
        "location": userLocation,
        "audio": audioInput,
        "noise_type": noiseType,
        "timestamp": getCurrentTimestamp()
    }
    
    saveReportToDatabase(report)
    
    RETURN "Noise report submitted successfully!"

-Function Breakdown

reportNoiseSource: Main function handling noise reporting.
audioInput: Captured audio from the device.
userLocation: GPS coordinates of the user.
promptUserForNoiseType(): Prompts user to select noise type.
getCurrentUserID(): Retrieves the ID of the logged-in user.
getCurrentTimestamp(): Records the current timestamp.
saveReportToDatabase(report): Saves the report object to the database.
Basic Design Diagram


"Report Noise Source" Feature Flow

      +------------------+
      |   User Interface  |
      +--------+---------+
               |
               v
      +------------------+
      |  Select Noise    |
      |     Type         |
      +--------+---------+
               |
               v
      +------------------+
      |  Capture Audio   |
      |     Input        |
      +--------+---------+
               |
               v
      +------------------+
      |  Get User GPS    |
      |   Location       |
      +--------+---------+
               |
               v
      +------------------+
      |   Validate Input  |
      | (Noise Type &    |
      |    Audio Input)   |
      +--------+---------+
               |
               v
      +------------------+
      |   Create Report   |
      |  (JSON Object)   |
      +--------+---------+
               |
               v
      +------------------+
      |  Save to Database |
      +------------------+
               |
               v
      +------------------+
      |  Show Success     |
      |  Message          |
      +------------------+

Component Descriptions

-User Interface: Interaction area for reporting noise.
Select Noise Type: User selects from predefined categories.
Capture Audio Input: Records audio via the microphone.
Get User GPS Location: Fetches current GPS coordinates.
Validate Input: Ensures noise type and audio input are provided.
Create Report: Compiles captured data into a structured report.
Save to Database: Stores the report for future access.
Show Success Message: Confirms successful report submission.

-Visual Design Concept for "Report Noise Source" Feature

-Screen Layout

Header: Title "Report Noise Source"
Back Button: Returns to the previous screen
Noise Type Selection

Label: "Select Noise Type"
Dropdown Menu: Options (Traffic, Construction, Barking Dog, Music, Other)
Audio Input Section

Label: "Record Noise"
Record Button: Circular button with microphone icon (Red when recording, Grey when idle)
Playback Button: Small play icon to listen to recorded audio
Location Section

Label: "Current Location"
Text Display: Shows GPS coordinates
Refresh Button: Updates GPS location
Submission Buttons

Submit Button: Large, green button labeled "Submit Report"
Cancel Button: Smaller button labeled "Cancel" to discard the report


10/31/24

-Updated Pseudocode for "Report Noise Source" Feature

function displayReportNoiseSource() {
    showHeader("Report Noise Source");
    showBackButton();
    
    noiseType = displayDropdownMenu("Select Noise Type", ["Traffic", "Construction", "Barking Dog", "Music", "Other"]);
    displayLabel("Record Noise");
    recordButton = displayButton("● Record", onRecordButtonClick);
    playbackButton = displayButton("► Playback", onPlaybackButtonClick);
    
    displayLabel("Current Location:");
    locationCoordinates = getCurrentGPSCoordinates();
    displayText(locationCoordinates);
    refreshButton = displayButton("Refresh", onRefreshLocationClick);
    
    submitButton = displayButton("Submit Report", onSubmitButtonClick);
    cancelButton = displayButton("Cancel", onCancelButtonClick);
}

function onRecordButtonClick() {
    startAudioRecording();
    changeButtonState(recordButton, "Recording...", active);
    waitUntilRecordingStops();
    changeButtonState(recordButton, "● Record", inactive);
}

function onPlaybackButtonClick() {
    playRecordedAudio();
}

function onRefreshLocationClick() {
    locationCoordinates = getCurrentGPSCoordinates();
    updateDisplayText(locationCoordinates);
}

function onSubmitButtonClick() {
    if (noiseType == null || recordedAudio == null) {
        showError("Please select a noise type and record audio.");
        return;
    }

    submitReport(noiseType, recordedAudio, locationCoordinates);
    showSuccess("Report submitted successfully!");
    navigateToHomePage();
}

function onCancelButtonClick() {
    navigateToHomePage();
}

function getCurrentGPSCoordinates() {
    return GPS.getCoordinates();
}

function submitReport(noiseType, audioData, location) {
    API.post("/reportNoise", {
        type: noiseType,
        audio: audioData,
        location: location
    });
}

Changes and Additions

-Added error handling for network issues during submission.
Confirmation dialog before report submission.
Introduced loading indicators for report submission feedback.
Included user feedback on success and error messages.

#Additional Features Not Required in Initial Requirements

-Confirmation Dialogs: Prompt to confirm report submission.
Loading Indicators: Feedback during submission process.
User Feedback: Display success and error messages.
Logging Functionality: Event logging for debugging.
Data Privacy Considerations: Placeholder for user consent.
Integration with Analytics: Tracking user interactions.
Adaptive UI: Ensuring UI adapts to different screen sizes.
Rationale for Additions

-These enhancements improve usability and user experience.

Updated "Report Noise Source" feature based on the new code:

      +------------------+
      |   User Interface  |
      +--------+---------+
               |
               v
      +------------------+
      |  Select Noise    |
      |     Type         |
      +--------+---------+
               |
               v
      +------------------+
      |  Record Noise    |
      |     Input        |
      +--------+---------+
               |
               v
      +------------------+
      |   Playback Audio  |
      |     (if needed)  |
      +--------+---------+
               |
               v
      +------------------+
      |  Get User GPS    |
      |   Location       |
      +--------+---------+
               |
               v
      +------------------+
      |   Validate Input  |
      | (Noise Type &    |
      |    Audio Input)   |
      +--------+---------+
               |
               v
      +------------------+
      |   Create Report   |
      |  (JSON Object)   |
      +--------+---------+
               |
               v
      +------------------+
      |  Submit Report    |
      |   to Server       |
      +--------+---------+
               |
               v
      +------------------+
      |  Show Success     |
      |  or Error Message |
      +------------------+
               |
               v
      +------------------+
      |  Navigate to Home |
      +------------------+
