require('dotenv').config();
const { App } = require('@slack/bolt');
const OpenAI = require('openai');

// Initialize Slack App with Socket Mode
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// The /suggest command logic
app.command('/suggest', async ({ command, ack, respond }) => {
  await ack(); // Acknowledge Slack within 3 seconds

  try {
    const userText = command.text;

    // Call OpenAI to generate professional options
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: "You are a professional communication coach for a developer working with a US client named Darrin on an API project. Fix all spelling and grammar. Provide 3 options: 1. Casual/Friendly, 2. Professional/Technical, 3. Short. Maintain technical accuracy for API terms." 
        },
        { role: "user", content: `Correct this for Darrin: ${userText}` }
      ],
      model: "gpt-4o", // Or "gpt-3.5-turbo" for lower cost
    });

    const result = chatCompletion.choices[0].message.content;

    // Send the reply only to the user who typed the command
    await respond({
      text: `🤖 *Gramu Suggestions:*\n\n${result}`,
      response_type: 'ephemeral' 
    });

  } catch (error) {
    console.error("Error with OpenAI or Slack:", error);
    await respond("⚠️ Gramu encountered an error. Check your server logs.");
  }
});

// Start the bot
(async () => {
  await app.start();
  console.log('⚡️ Gramu is online and ready to help with Darrin!');
})();