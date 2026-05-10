# DevilJO — The Obsidian Gallery

**DevilJO** is a brutalist digital anthology designed for publishing poetry and photography. It combines a high-contrast editorial frontend with a robust FastAPI backend and integrated AI assistance.

## 🖋️ Project Overview

The platform serves as a "living archive" where users can compose and view two primary types of creative content:
- **Verse:** Poetry with support for custom background templates and live previews.
- **Frames:** Photographic essays with metadata management and responsive galleries.

## 🚀 Features

- **Studio (Composer):** A sophisticated React-based editor with dual modes (Poem/Photo) and real-time previewing.
- **AI Assistant:** An integrated chatbot powered by Lyzr AI (`chatbot.js`) to assist with creative prompts and navigation.
- **Brutalist Design System:** Custom-built CSS focusing on typography (Cormorant Garamond), film grain effects, and high-contrast dark modes.
- **Advanced Health Monitoring:** Custom Webpack plugins providing detailed `/health`, `/health/ready`, and `/health/live` endpoints.

## 🛠️ Tech Stack

### Backend
- **Framework:** FastAPI
- **Database:** MongoDB (via Motor async driver)
- **Schema:** Pydantic v2
- **Infrastructure:** CORS Middleware and automated environment loading.

### Frontend
- **Library:** React 18
- **Styling:** Custom Brutalist CSS & Tailwind Utility classes.
- **AI Integration:** Lyzr Inference API.
- **State Management:** React Hooks with SessionStorage persistence for chat history.

## 📂 Project Structure

```text
DevilJO/
├── backend/                # FastAPI Application
│   └── server.py           # API routes, MongoDB connection, and Pydantic models
├── frontend/
│   ├── public/             # Static assets
│   │   ├── chatbot.js      # Lyzr AI Chatbot implementation
│   │   └── styles.css      # Core Brutalist design system
│   ├── src/                # React source code
│   └── plugins/            # Custom Webpack health-check tools
├── test_result.md          # Collaborative testing protocol
└── README.md               # Project documentation
```

## ⚙️ Getting Started

### Backend Setup
1. Navigate to the `backend/` directory.
2. Create a `.env` file:
   ```env
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=deviljo
   CORS_ORIGINS=http://localhost:3000
   ```
3. Install dependencies: `pip install fastapi uvicorn motor pydantic python-dotenv`
4. Run: `uvicorn server:app --reload`

### Frontend Setup
1. Navigate to the `frontend/` directory.
2. Install dependencies: `npm install`
3. Start development: `npm start`

## 🧪 Monitoring

The frontend includes a dedicated health plugin accessible via the development server:
- `GET /health` - Detailed JSON system status.
- `GET /health/ready` - Readiness check for deployment orchestration.
- `GET /health/errors` - Real-time Webpack compilation error tracking.

---
*“What stays after the moment leaves is the image, the line, and the nerve to share both.”*
