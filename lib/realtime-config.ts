import { z } from "zod"

export const messageSchema = z.object({
  id: z.string(),
  sender: z.string(),
  text: z.string(),
  timestamp: z.number(),
  roomId: z.string(),
  token: z.string().optional(),
})

export type Message = z.infer<typeof messageSchema>

export const realtimeSchema = {
  chat: {
    message: messageSchema,
    destroy: z.object({
      isDestroyed: z.literal(true),
    }),
  },
}


