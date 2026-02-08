"use client"

import { createRealtime } from "@upstash/realtime/client"
import type { RealtimeEvents } from "./realtime-config"

export const { useRealtime } = createRealtime<RealtimeEvents>()