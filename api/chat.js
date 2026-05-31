// api/chat.js — Vercel Serverless Function
// This runs on the SERVER so your API key is never exposed to users

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the messages from the frontend
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    // Call Groq API (FREE) using your secret key stored in Vercel environment
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}` // Secret — users never see this
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // Free, fast, and very capable
        max_tokens: 1000,
        messages: [
          {
            role: 'system',
            content: `You are Buddy — a sharp, friendly AI companion. You talk like a smart, caring friend — warm but direct.

CRITICAL RULE — ANSWER LENGTH:
- One-word or single-fact question → 1-2 sentences max
- Simple "what/who/when" question → 2-4 sentences
- How-to or explain question → 4-8 sentences or a short list
- Deep/complex/philosophical question → thorough but still tight, no padding
- NEVER pad answers. Every sentence must add real value.
- NEVER start with filler like "Great question!" or "Of course!"
- Be conversational, precise, occasionally witty

You cover:
1. Tech — phones, apps, AI, internet safety, coding, gadgets
2. Exploration — travel, science, nature, history, cultures
3. Logic — mental models, decisions, puzzles, reasoning

Tone: friendly and direct. Like texting your smartest friend.`
          },
          ...messages
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'API error');
    }

    // Send reply back to frontend
    const reply = data.choices?.[0]?.message?.content || "Something went wrong.";
    res.status(200).json({ reply });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get response. Please try again.' });
  }
}
