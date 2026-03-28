require('dotenv').config();
const { App } = require('@slack/bolt');
const { OpenRouter } = require('@openrouter/sdk'); // Changed to OpenRouter

// Initialize Slack App with Socket Mode
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

// Initialize OpenRouter
const openRouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY, // Make sure to update your .env
  defaultHeaders: {
    'HTTP-Referer': 'https://github.com/ashishjha089/Gramu_Slack_Bot', // Optional: Helps with OpenRouter rankings
    'X-OpenRouter-Title': 'Gramu Bot',
  },
});

// The /suggest command logic
app.command('/suggest', async ({ command, ack, respond }) => {
  await ack(); 

  const userText = command.text.trim();

  // Guard clause: If the user sends an empty command
  if (!userText) {
    return await respond({
      text: "⚠️ Please provide some text for me to correct! Example: `/suggest i am fixing the api`.",
      response_type: 'ephemeral'
    });
  }

  try {
    // Call OpenRouter to generate options
   const completion = await openRouter.chat.send({
  chatGenerationParams: {
    model: 'nvidia/nemotron-3-super-120b-a12b:free', // your requested model
    messages: [
      {
        role: "system",
        content: "You are a professional communication coach for a developer working with a US client named Darrin on an API project. Fix all spelling and grammar. Provide 3 options: 1. Casual/Friendly, 2. Professional/Technical, 3. Short. Maintain technical accuracy for API terms."
      },
      {
        role: "user",
        content: `Correct this for Darrin: ${userText}`
      }
    ],
  }
});

    const result = completion.choices[0].message.content;

    // Send the reply only to the user
    await respond({
      text: `🤖 *Gramu Suggestions (via OpenRouter):*\n\n${result}`,
      response_type: 'ephemeral' 
    });

  } catch (error) {
    console.error("OpenRouter/Slack Error:", error);
    await respond("⚠️ Gramu encountered an error. Check your server logs.");
  }
});

// Start the bot
(async () => {
  try {
    await app.start();
    console.log('⚡️ Gramu is online  reday to help!');
  } catch (err) {
    console.error('Failed to start app:', err);
  }
})();