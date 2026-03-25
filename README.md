# Gramu Slack Bot 🤖

An AI-Powered Professional Communication Assistant for Slack

---

## 📋 Table of Contents

1. [What is Gramu?](#what-is-gramu)
2. [Why Use Gramu?](#why-use-gramu)
3. [Key Features](#key-features)
4. [Tech Stack](#tech-stack)
5. [Project Structure](#project-structure)
6. [Prerequisites](#prerequisites)
7. [Installation](#installation)
8. [Configuration](#configuration)
9. [Running the Bot](#running-the-bot)
10. [How to Use](#how-to-use)
11. [Troubleshooting](#troubleshooting)
12. [Future Roadmap](#future-roadmap)

---

## 🎯 What is Gramu?

Gramu is a Slack bot that helps developers communicate more effectively with international clients. It acts as a **real-time grammar and tone editor** that fixes grammar, spelling, and suggests professional variations of your messages directly inside Slack.

**Use Case Example:**

- You're working on an API project with a US-based client
- You need to send a technical update but want it to sound professional
- Simply type `/suggest` followed by your rough draft
- Gramu provides 3 professional options instantly

---

## 💡 Why Use Gramu?

| Problem                                                          | Solution                                                 |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| Switching between apps (ChatGPT, Grammarly) breaks your workflow | Gramu lives inside Slack - no tab switching needed       |
| Hard to sound professional in quick messages                     | AI suggests 3 tone options (Casual, Professional, Short) |
| Privacy concerns with shared drafts                              | Ephemeral messages - only you see the suggestions        |
| Technical terminology gets lost in translation                   | Context-aware for software development & API terms       |

---

## ✨ Key Features

### 1. Context-Aware AI

- Specially tuned for **software development** and **API terminology**
- Understands technical terms like endpoints, payloads, status codes, etc.

### 2. Three Tone Options

For every draft, Gramu provides:

- **🟢 Friendly/Casual** - Great for daily check-ins and informal updates
- **🔵 Professional/Technical** - Best for formal project updates and client communication
- **🟠 Short/Concise** - Perfect for quick "on-the-go" replies

### 3. Privacy First

- Uses Slack's **Ephemeral message** type
- Suggestions are **visible only to you**
- Your drafts remain private from the client

### 4. Socket Mode

- Runs securely via **WebSockets**
- No public server required
- No SSL certificate needed for local development

---

## 🛠️ Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| **Node.js**       | JavaScript runtime environment    |
| **Slack Bolt**    | Framework for building Slack apps |
| **OpenAI GPT-4o** | AI engine for text generation     |
| **Dotenv**        | Environment variable management   |

---

## 📂 Project Structure

```
Gramu_Slack_Bot/
├── script.js          # ⭐ Main application entry point
├── package.json       # Project dependencies and metadata
├── .env               # Private API keys (NOT tracked by Git)
├── .gitignore         # Files/folders to exclude from Git
├── README.md          # Project documentation
└── node_modules/      # Installed dependencies (auto-generated)
```

### 📄 File Descriptions

| File                             | Description                                                                                     |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`script.js`](script.js:1)       | **Main application logic** - Contains all bot commands, Slack integration, and OpenAI API calls |
| [`package.json`](package.json:1) | **Project configuration** - Lists all dependencies, scripts, and project metadata               |
| [`.env`](.env:1)                 | **Environment variables** - Stores sensitive API keys (Slack tokens, OpenAI key)                |
| [`.gitignore`](.gitignore:1)     | **Git exclusions** - Prevents private keys and node_modules from being committed                |
| [`README.md`](README.md:1)       | **Documentation** - Project overview, setup instructions, and usage guide                       |

---

## ✅ Prerequisites

Before running Gramu, you need:

1. **Node.js** - Download from [nodejs.org](https://nodejs.org)
2. **Slack Workspace** - You need permission to install apps
3. **Slack App** - Create at [api.slack.com/apps](https://api.slack.com/apps)
4. **OpenAI Account** - Get your API key at [platform.openai.com](https://platform.openai.com)

---

## 🔧 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/gramu-slack-bot.git
cd gramu-slack-bot
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:

- `@slack/bolt` - Slack app framework
- `dotenv` - Environment variable loader
- `openai` - OpenAI API client

---

## ⚙️ Configuration

### Step 1: Create a Slack App

1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Click **"Create New App"** → **"From scratch"**
3. Name your app (e.g., "Gramu") and select your workspace
4. Enable **Socket Mode** in the app settings
5. Create a **Slash Command** (`/suggest`)

### Step 2: Get Your Tokens

From your Slack App settings, get:

- **Bot Token** (`xoxb-...`) - From "OAuth & Permissions"
- **App Token** (`xapp-...`) - From "Basic Information" → "App-Level Tokens"
- **Signing Secret** - From "Basic Information"

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Slack Configuration
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=xapp-your-app-token
SLACK_SIGNING_SECRET=your-signing-secret

# OpenAI Configuration
OPENAI_API_KEY=your-openai-key
```

> ⚠️ **Important:** Never share your `.env` file or commit it to Git. It's already in `.gitignore` for your protection.

---

## 🚀 Running the Bot

### Start the Bot

```bash
node script.js
```

You should see:

```
⚡️ Gramu is online and ready to help with Darrin!
```

### Keep the Bot Running

For production, use a process manager like:

- **PM2**: `npm install -g pm2` then `pm2 start script.js`
- **Forever**: `npm install -g forever` then `forever start script.js`

---

## 💬 How to Use

1. **Open Slack** - Go to any channel or DM
2. **Type the command** - `/suggest` followed by your rough draft
3. **See the result** - Gramu will show 3 professional options

### Example

```
/suggest darrin i am fix the bug in api now
```

**Gramu's Response:**

```
🤖 Gramu Suggestions:

1. Casual/Friendly:
"Hey Darrin, I just fixed the bug in the API. Let me know if you need any details!"

2. Professional/Technical:
"Darrin, I've resolved the bug in the API endpoint. The fix has been deployed and tested."

3. Short/Concise:
"Fixed the API bug."
```

4. **Copy & Send** - Choose the option you like and send it!

---

## 🔍 Troubleshooting

| Issue                   | Solution                                                 |
| ----------------------- | -------------------------------------------------------- |
| Bot won't start         | Check your `.env` file has all required variables        |
| Slash command not found | Make sure the `/suggest` command is created in Slack API |
| OpenAI errors           | Verify your `OPENAI_API_KEY` is valid                    |
| Bot can't see messages  | Check your Slack app has the right permissions           |
| Connection issues       | Ensure Socket Mode is enabled in Slack app settings      |

### Enable Debugging

Add this to your `script.js` for more detailed logs:

```javascript
// At the top of script.js
const axios = require("axios");
// Add logging to see what's happening
console.log("Debug: Bot starting...");
```

---

## 📝 Future Roadmap

- [ ] Add support for multi-client context
- [ ] Deploy to Render/Railway for 24/7 uptime
- [ ] Integrate a project "Glossary" so the AI knows your specific API endpoint names
- [ ] Add support for multiple language translations
- [ ] Implement custom tone presets

---

## 📄 License

ISC License - Feel free to use and modify for your needs.

---

## 🙏 Acknowledgments

- [Slack Bolt Documentation](https://tools.slack.com/bolt-js)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Slack API](https://api.slack.com)

---

**Made with ❤️ for better developer communication**
