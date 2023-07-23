"use client"
import { Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react"
import { MailIcon } from "./mail-icon"

import { LockIcon } from "./lock-icon"
import { useState } from "react"
import { LoginCredential } from "@/types/types"
const LoginForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const LoginHandler = ({ email, password }: LoginCredential) => {
    if (email === "rit@gmail.com") {
      if (password === "rit123") {
      } else {
        console.log("wrong password")
      }
    } else {
      console.log("user credential not matched")
    }
  }

  return (
    <>
      <div className="m-2 p-2">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          endContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
        />
        <br />

        <Input
          onChange={(e) => setPassword(e.target.value)}
          endContent={
            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="bordered"
        />
      </div>
      <div className="flex py-2 px-1 justify-between gap-4">
        <Checkbox
          classNames={{
            label: "text-small",
          }}
        >
          Remember me
        </Checkbox>
        <Link color="primary" href="#" size="sm">
          Forgot password?
        </Link>
      </div>

      <div className="lg:flex gap-3 justify-center">
        <Button
          color="primary"
          onPress={() => LoginHandler({ email, password })}
        >
          Sign in
        </Button>
      </div>
    </>
  )
}
export default LoginForm
