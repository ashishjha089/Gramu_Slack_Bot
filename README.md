Gramu Slack Bot 🤖
An AI-Powered Professional Communication Assistant

Gramu is a specialized Slack integration built to help developers communicate more effectively with international clients. It acts as a real-time editor that fixes grammar, spelling, and tone directly inside the Slack interface.

🚀 The Problem & Solution
The Problem: Communicating technical updates (like API status) to US-based clients can be difficult when English isn't your first language. Switching tabs to use ChatGPT or Grammarly breaks your deep-work flow.

The Solution: Gramu lives inside Slack. By using a simple /suggest command, you get instant, professional variations of your message without ever leaving the chat box.

🛠️ Features
Context-Aware: Specially tuned for software development and API terminology.

Tone Selection: Provides 3 options for every draft:

Friendly/Casual: Great for daily check-ins.

Professional/Technical: Best for formal project updates.

Short/Concise: Perfect for quick "on-the-go" replies.

Privacy First: Uses Slack's Ephemeral message type—suggestions are visible only to you, keeping your drafts private from the client.

Socket Mode: Runs securely via WebSockets; no public server or SSL required for local development.

🏗️ Tech Stack
Runtime: Node.js

Framework: Slack Bolt for JavaScript

AI Engine: OpenAI GPT-4o

Security: Dotenv for Environment Variable management

⚙️ Setup & Installation
1. Prerequisites
Node.js installed on your machine.

A Slack Workspace where you have permission to install apps.

An OpenAI API Key.

2. Clone and Install
Bash
# Clone the repository
git clone https://github.com/yourusername/gramu-slack-bot.git
cd gramu-slack-bot

# Install dependencies
npm install
3. Environment Variables
Create a .env file in the root directory and add your credentials:

Plaintext
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=xapp-your-app-token
SLACK_SIGNING_SECRET=your-signing-secret
OPENAI_API_KEY=your-openai-key
4. Run the Bot
Bash
# Start the bot locally
node app.js
💬 How to Use
Go to any Slack channel or DM.

Type /suggest followed by your rough draft.

Example: /suggest darrin i am fix the bug in api now

Hit Enter.

Review the 3 options provided by Gramu, copy the one you like, and send it!

📂 Project Structure
Plaintext
.
├── app.js            # Main application logic
├── .env              # Private API keys (not tracked by Git)
├── .gitignore        # Prevents private keys from being uploaded
├── package.json      # Project dependencies
└── README.md         # Project documentation
📝 Future Roadmap
[ ] Add support for multi-client context.

[ ] Deploy to Render/Railway for 24/7 uptime.

[ ] Integrate a project "Glossary" so the AI knows your specific API endpoint names.