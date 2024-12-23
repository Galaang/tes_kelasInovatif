"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function LoginDialog() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login submitted')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 