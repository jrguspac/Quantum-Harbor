// Import the built-in 'fs' module to work with the file system
import fs from 'fs';

// Import the built-in 'path' module to handle and transform file paths
import path from 'path';

// Import 'fileURLToPath' to convert ES module URLs to file paths
import { fileURLToPath } from 'url';

// Get the current file's full path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current module file
const __dirname = path.dirname(__filename);

// Get the section number and title from command line arguments
const sectionNumber = process.argv[2];
const sectionTitle = process.argv[3];

// Validate that both section number and title were provided
if (!sectionNumber || !sectionTitle) {
  console.error('❌ Please provide section number and section title.');
  process.exit(1); // Exit the script with an error code
}

// Build the path to the notes file located in the 'data' folder in project root
const filePath = path.join(__dirname, '..', 'data', 'notes-python.md');

// Define the section template to append to the markdown file
const template = `

\`\`\`  // Safely close any previously unclosed code blocks

### 📘 Section ${sectionNumber} - ${sectionTitle}

**Date:**  
**Summary:**  

**New Commands:**  

**New Vocabulary:**
|Term              |Meaning                     |Example                      |
|------------------|-----------------------------|-----------------------------|

**New Expressions:**
|Expression                 |Meaning                 |
|---------------------------|------------------------|
|You're off to a great start|You are starting well   |
`;

// Append the section template to the end of the notes file
fs.appendFile(filePath, template, (err) => {
  if (err) {
    // If there's an error while writing to the file, log it
    console.error('❌ Error appending to notes file:', err);
  } else {
    // Success message when the section is added
    console.log(`✅ Section ${sectionNumber} template added to notes-python.md`);
  }
});
