import { Suspense } from "react"
import { Lobby } from "@/components/lobby"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-green-500">
            {">"}private_chat
          </h1>
          <p className="text-zinc-500 text-sm">A private, self-destructing chat room.</p>
        </div>

        <Suspense fallback={
          <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md animate-pulse">
            <div className="space-y-5">
              <div className="h-4 bg-zinc-800 rounded w-1/3"></div>
              <div className="h-10 bg-zinc-800 rounded w-full"></div>
              <div className="h-4 bg-zinc-800 rounded w-1/4"></div>
              <div className="h-2 bg-zinc-800 rounded w-full"></div>
              <div className="h-10 bg-zinc-800 rounded w-full mt-2"></div>
            </div>
          </div>
        }>
          <Lobby />
        </Suspense>
      </div>
    </main>
  )
}