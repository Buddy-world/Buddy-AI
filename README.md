# 🤖 Buddy AI — Your Smart Companion

> A sharp, friendly AI that gives you answers sized to your question. No fluff, no padding.

![Buddy AI](https://img.shields.io/badge/Buddy%20AI-Live-00d4ff?style=for-the-badge)
![Built with Claude](https://img.shields.io/badge/Powered%20by-Claude%20AI-8b5cf6?style=for-the-badge)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge)

---

## ✨ What is Buddy AI?

Buddy AI is a conversational AI companion built on top of Anthropic's Claude API. It's designed to give you **concise, accurate answers** — the response length matches your question. Ask something simple, get a quick answer. Ask something deep, get a thorough one.

**Three core areas:**
- ⚡ **Tech Tips** — Phones, apps, AI, internet safety, coding basics
- 🌐 **Explore** — World facts, travel, science, nature, history
- 🧩 **Logic** — Decision-making, mental models, problem solving

---

## 🚀 Features

- 🎯 **Smart answer sizing** — Short questions get short answers
- 🔒 **Secure API** — Key stored server-side, never exposed
- 💬 **Context memory** — Remembers your conversation
- 🎨 **Unique animated logo** — Orbital ring design
- 📱 **Mobile friendly** — Works great on any screen
- ⚡ **Instant responses** — Optimized for speed

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, Vanilla JS |
| Backend | Vercel Serverless Functions (Node.js) |
| AI Model | Anthropic Claude Sonnet |
| Hosting | Vercel (free tier) |
| Fonts | Plus Jakarta Sans, Syne (Google Fonts) |

---

## 📁 Project Structure

```
buddy-ai/
├── index.html        # Main app UI
├── api/
│   └── chat.js       # Secure serverless API handler
├── vercel.json       # Deployment config
└── README.md
```

---

## 🔧 Setup & Deploy

### 1. Clone this repo
```bash
git clone https://github.com/YOUR_USERNAME/buddy-ai.git
cd buddy-ai
```

### 2. Get your Anthropic API key
- Go to [console.anthropic.com](https://console.anthropic.com)
- Create an API key

### 3. Deploy to Vercel
```bash
npm install -g vercel
vercel
```

When prompted, add your environment variable:
```
ANTHROPIC_API_KEY = your_key_here
```

### 4. Done! 🎉
Your app is live at `your-project.vercel.app`

---

## 🌱 Roadmap

- [ ] User accounts & chat history
- [ ] Voice input support
- [ ] Dark/light theme toggle
- [ ] Share conversation feature
- [ ] Mobile app (React Native)

---

## 👤 Author

Built by **[Your Name]**

- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter/X: [@yourhandle](https://twitter.com/yourhandle)

---

## 📄 License

MIT License — feel free to fork and build on this!

---

*Built with ❤️ and the Anthropic Claude API*
