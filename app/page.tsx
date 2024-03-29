import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal"
import { MailIcon } from "@/components/mail-icon"
import { LockIcon } from "@/components/lock-icon"
import { Button } from "@nextui-org/button"
import LoginForm from "@/components/login-form"
import { GetMemberTypes } from "@/hooks/route"
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <LoginForm />
    </section>
  )
}
