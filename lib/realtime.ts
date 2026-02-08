import { redis } from "@/lib/redis"
import { Realtime } from "@upstash/realtime"
import { realtimeSchema } from "./realtime-config"

export const realtime = new Realtime({ schema: realtimeSchema, redis })