<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [AI Classroom Companion] 🎯

## Basic Details

### Team Name: [SheCodes]

### Team Members
- Member 1: [Muskan] - [Jain University Kochi]
- Member 2: [Neeraja N R] - [Jain University Kochi]

### Hosted Project Link
[https://tink-her-hack-temp-f3fj.onrender.com]

### Project Description
[AI Classroom Companion is a real-time intelligent learning assistant designed for deaf students.
It transforms classroom speech into structured learning intelligence by detecting exam-relevant statements, interaction moments, generating summaries, and enabling doubt submission.

Unlike basic transcription tools, it adds contextual understanding to lectures.]

### The Problem statement
[Deaf students in classrooms face multiple challenges:
They miss tone and emphasis in lectures
They don’t know which parts are important for exams
Transcripts are unstructured and hard to revise
Asking doubts in real-time is difficult
Existing tools only provide speech-to-text — not learning intelligence.]

### The Solution
[We built an AI-powered classroom companion that:
Converts speech to text in real-time
Detects important academic cues (exam, definition, remember)
Identifies interaction moments ("any doubts?")
Generates structured summaries
Allows students to submit doubts digitally to teachers
Stores lecture sessions for revision
Our system transforms transcription into structured academic insight.]

---

## Technical Details
### Technologies/Components Used

**For Software:**
Languages Used:
JavaScript
HTML
CSS
Frameworks Used:
Node.js
Express.js
Libraries Used:
mysql2
cors
body-parser
APIs Used:
Web Speech API (for speech recognition)
Database:
MySQL
Tools Used:
VS Code
Git
GitHub
MySQL Workbench
**For Hardware:**
- Main components: [List main components]
- Specifications: [Technical specifications]
- Tools required: [List tools needed]

---

## Features
List the key features of your project:
Feature 1: Real-Time Speech-to-Text
Captures teacher’s voice and converts it to live transcript.
Feature 2: Smart Highlight Engine
Automatically highlights:
“important”
“exam”
“definition”
“remember”
Feature 3: Interaction Moment Detection
Detects phrases like:
“Any doubts?”
“Is that clear?”
Highlights them in green.
Feature 4: AI Summary Generator
Generates short lecture summary for quick revision.
Feature 5: Doubt Submission System
Students can type and submit doubts digitally.
Feature 6: Session Storage
Saves transcript and summary into MySQL database.
Feature 7: Download Notes
Download lecture transcript and summary as text file.

## Implementation

### For Software:

#### Installation
```bash
[npm install]
```

#### Run
```bash
[node server.js]
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![<img width="1886" height="906" alt="image" src="https://github.com/user-attachments/assets/6e29e6ea-31b4-43db-b7c9-9a815a79a9ad" />
]
*Student view page*

![<img width="1898" height="912" alt="image" src="https://github.com/user-attachments/assets/404ef2be-0c72-4b2c-a2cb-6c6289b132fc" />
]
*student learning part , running part*

![<img width="979" height="617" alt="image" src="https://github.com/user-attachments/assets/f85306a2-47e5-48aa-a5b4-cbb5b5d959db" />
 , <img width="644" height="192" alt="image" src="https://github.com/user-attachments/assets/972051fa-8b4a-49cd-8710-f6f3dad711d7" />
](Add screenshot 3 here with proper name)
*Teacher getting students doubt*

#### Diagrams

**System Architecture:**

![Architecture Flow

Microphone
↓
Web Speech API (Speech Recognition ML Model)
↓
Frontend NLP Layer (Highlight + Interaction Detection)
↓
Backend (Node.js + Express)
↓
MySQL Database
↓
Teacher Dashboard](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Teacher speaks

Speech converted to text

Important phrases highlighted

Interaction moments detected

Student views structured transcript

Summary generated

Doubts submitted

Data stored in database](docs/workflow.png)
*Add caption explaining your workflow*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `http://localhost:5000/`

##### Endpoints

**GET /api/endpoint**
**GET/get-doubts
- **Description:** [Retrieves all submitted doubts]
- **Parameters:**
  
- **Response:**
```json
[
{
  "id":1,
  "doubt":"Example doubt",
  "created_at":"timestamp" 
}
]
```

**POST /api/endpoint**
**POST/generate-summary
- **Description:** [Generates summary from transcript]
- **Request Body:**
```json
{
  
  "text":"lecture transcript"
}

```
- **Response:**

{
  "summary":"Generated summary text"
}
```

**POST/save-session
- **Description:** [Saves lecture session]
- **Request Body:**
```json
{
  
  "title": "Lecture Title",
  "transcript": "Full transcript",
  "summary": "Summary text"
}

```
- **Response:**

Session Saved Successfully
```

**POST/submit-doubt
- **Description:** [Submits student doubt]
- **Request Body:**
```json
{
  
  "doubt":"Student doubt text"
}

```
- **Response:**

```

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[https://drive.google.com/file/d/1xQOn3i-S7Hb6vIagJq0sTFaI784ya4lD/view?usp=drive_link]


### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
