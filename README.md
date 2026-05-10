# DevilJO — The Obsidian Gallery

**DevilJO** is a brutalist digital anthology designed for publishing poetry and photography. It combines a high-contrast editorial frontend with a robust FastAPI backend and integrated AI assistance.

## 🖋️ Project Overview (Local Edition)

The platform serves as a "living archive" where users can compose and view two primary types of creative content:
- **Verse:** Poetry with support for custom background templates and live previews.
- **Frames:** Photographic essays with metadata management and responsive galleries.

## 🚀 Features

- **Studio (Composer):** A sophisticated React-based editor with dual modes (Poem/Photo) and real-time previewing.
- **AI Assistant:** An integrated chatbot powered by Lyzr AI (`chatbot.js`) to assist with creative prompts and navigation.
- **Brutalist Design System:** Custom-built CSS focusing on typography (Cormorant Garamond), film grain effects, and high-contrast dark modes.
- **Advanced Health Monitoring:** Custom Webpack plugins providing detailed `/health`, `/health/ready`, and `/health/live` endpoints.

## 🛠️ Tech Stack

### Frontend
- **Library:** React 18
- **Styling:** Custom Brutalist CSS & Tailwind Utility classes.
- **AI Integration:** Lyzr Inference API.
- **State Management:** React Hooks with LocalStorage for content and SessionStorage for chat.

## 📂 Project Structure

```text
DevilJO/
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

### Setup & Execution
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
