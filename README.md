# Private Chat

A secure, ephemeral, real-time chat application built with Next.js, Upstash Redis, and Upstash Realtime. Create private rooms that self-destruct after a set duration or manually at any time.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Redis](https://img.shields.io/badge/Upstash-Redis-red)

## ✨ Features

- **Ephemeral Rooms**: Chat rooms are temporary and self-destruct automatically after 24 hours (configurable).
- **Manual Self-Destruct**: Initiate an immediate room destruction sequence with a single click.
- **Real-time Messaging**: Instant message delivery powered by Upstash Realtime.
- **Anonymous Identity**: Users are assigned generated identities for privacy.
- **Customizable Capacity**: Set maximum participants for each room (2-50 users).
- **Secure Links**: Shareable, unique room IDs generated with `nanoid`.
- **Responsive UI**: A modern, hacker-themed interface built with Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [Upstash Redis](https://upstash.com/redis)
- **Realtime**: [Upstash Realtime](https://upstash.com/realtime)
- **Validation**: [Zod](https://zod.dev/)
- **API Client**: [Elysia Eden](https://elysiajs.com/eden/overview.html)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- An [Upstash](https://upstash.com/) account for Redis and Realtime services.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/private-chat.git
    cd private-chat
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Setup:**

    Create a `.env` file in the root directory and add your Upstash credentials:

    ```env
    UPSTASH_REDIS_REST_URL="your-redis-rest-url"
    UPSTASH_REDIS_REST_TOKEN="your-redis-rest-token"
    NEXT_PUBLIC_REALTIME_URL="your-realtime-url"
    NEXT_PUBLIC_REALTIME_TOKEN="your-realtime-token"
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📖 Usage

1.  **Create a Room**:
    - Adjust the slider to set the maximum number of participants.
    - Click **"CREATE SECURE ROOM"**.
2.  **Invite Others**:
    - Copy the room URL/ID from the top bar.
    - Share it with the person you want to chat with.
3.  **Chat**:
    - Messages appear in real-time.
    - Your messages are highlighted in green, others in blue.
4.  **Destroy**:
    - The room will automatically expire when the timer hits zero.
    - Click **"DESTROY NOW"** to instantly delete the room and all messages for everyone.

## 📂 Project Structure

```
├── app/
│   ├── api/            # API routes (Elysia Next)
│   ├── room/           # Room page logic
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Landing/Lobby page
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks (e.g., use-username)
├── lib/                # Utilities and client configurations
│   ├── client.ts       # API Client setup
│   ├── redis.ts        # Redis client setup
│   └── realtime.ts     # Realtime client setup
└── public/             # Static assets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
