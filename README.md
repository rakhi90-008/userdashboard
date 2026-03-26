A simple and responsive User Directory Dashboard built using React.
This application fetches user data from a public API and provides features like search, sorting, and detailed user view.

🚀 Features
📊 Dashboard View
Displays users in a table format
Shows Name, Email, Phone, and Company
🔍 Search Functionality
Filter users by name or email
Instant client-side filtering
🔃 Sorting
Sort by:
Name (Ascending / Descending)
Company (Ascending / Descending)
👤 User Detail Page
Click on any user row to view full details
Includes:
Username
Address
Website
Company info
🛠️ Tech Stack
⚛️ React (Functional Components + Hooks)
🌐 React Router DOM
🎨 Basic CSS
📡 API Used
https://jsonplaceholder.typicode.com/users
📁 Project Structure
src/
 ├── components/
 │    ├── UserTable.js
 │    ├── SearchBar.js
 │    └── UserDetail.js
 ├── App.js
 └── index.js
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/rakesh90-008/userdashboard.git
cd userdashboard
2. Install dependencies
npm install
3. Run the application
npm start
🌍 Usage
Open browser and go to:
http://localhost:3000
Use search bar to filter users
Click column headers to sort
Click on a user row to view details
