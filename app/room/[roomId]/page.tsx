import { redis } from "@/lib/redis"
import { cookies } from "next/headers"
import RoomClient from "./room-client"
import { Message } from "@/lib/realtime-config"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ roomId: string }> }): Promise<Metadata> {
  const { roomId } = await params
  return {
    title: `Room ${roomId.slice(0, 5)}... | >private_chat`,
    description: "Secure, ephemeral chat room",
  }
}

export default async function Page({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = await params

  // Fetch data in parallel
  const [messagesRaw, ttl, meta] = await Promise.all([
    redis.lrange<Message>(`messages:${roomId}`, 0, -1),
    redis.ttl(`meta:${roomId}`),
    redis.exists(`meta:${roomId}`),
  ])

  // If room doesn't exist, we can potentially redirect or let the client handle the error.
  // The client component handles "destroyed=true" if TTL is 0. 
  // But strictly, if meta doesn't exist, it's 404.
  // For now, we pass the data and let client decide (or layout handles it).

  const cookieStore = await cookies()
  const token = cookieStore.get("x-auth-token")?.value

  // Sanitize messages just like the API does
  const messages = messagesRaw.map((m) => ({
    ...m,
    token: m.token === token ? token : undefined,
  }))

  return (
    <RoomClient 
      roomId={roomId} 
      initialMessages={{ messages }} 
      initialTTL={ttl > 0 ? ttl : 0} 
    />
  )
}