"use client"

import { useUsername } from "@/hooks/use-username"
import { client } from "@/lib/client"
import { useMutation } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export function Lobby() {
  const { username } = useUsername()
  const router = useRouter()

  const [maxParticipants, setMaxParticipants] = useState(2)

  const searchParams = useSearchParams()
  const wasDestroyed = searchParams.get("destroyed") === "true"
  const error = searchParams.get("error")

  const { mutate: createRoom, isPending } = useMutation({
    mutationFn: async () => {
      const res = await client.room.create.post({ maxParticipants })

      if (res.status === 200) {
        router.push(`/room/${res.data?.roomId}`)
      }
    },
  })

  return (
    <>
      {wasDestroyed && (
        <div className="bg-red-950/50 border border-red-900 p-4 text-center">
          <p className="text-red-500 text-sm font-bold">ROOM DESTROYED</p>
          <p className="text-zinc-500 text-xs mt-1">
            All messages were permanently deleted.
          </p>
        </div>
      )}
      {error === "room-not-found" && (
        <div className="bg-red-950/50 border border-red-900 p-4 text-center">
          <p className="text-red-500 text-sm font-bold">ROOM NOT FOUND</p>
          <p className="text-zinc-500 text-xs mt-1">
            This room may have expired or never existed.
          </p>
        </div>
      )}
      {error === "room-full" && (
        <div className="bg-red-950/50 border border-red-900 p-4 text-center">
          <p className="text-red-500 text-sm font-bold">ROOM FULL</p>
          <p className="text-zinc-500 text-xs mt-1">
            This room is at maximum capacity.
          </p>
        </div>
      )}

      <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="flex items-center text-zinc-500">Your Identity</label>

            <div className="flex items-center gap-3">
              <div className="flex-1 bg-zinc-950 border border-zinc-800 p-3 text-sm text-zinc-400 font-mono">
                {username}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center justify-between text-zinc-500 text-sm">
              <span>Max Participants</span>
              <span className="text-zinc-300 font-mono">{maxParticipants}</span>
            </label>
            <input
              type="range"
              min="2"
              max="50"
              value={maxParticipants}
              onChange={(e) => setMaxParticipants(parseInt(e.target.value))}
              className="w-full accent-green-500 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <button
            onClick={() => createRoom()}
            disabled={isPending}
            className="w-full bg-zinc-100 text-black p-3 text-sm font-bold hover:bg-zinc-50 hover:text-black transition-colors mt-2 cursor-pointer disabled:opacity-50"
          >
            {isPending ? "CREATING..." : "CREATE SECURE ROOM"}
          </button>
        </div>
      </div>
    </>
  )
}
