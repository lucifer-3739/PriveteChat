"use client"

import { createRealtime } from "@upstash/realtime/client"
import { realtimeSchema } from "./realtime-config"

export const { useRealtime } = createRealtime<typeof realtimeSchema>()