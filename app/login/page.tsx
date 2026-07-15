import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema Login | Secure Account Access",
  description:
    "Access your Zoiko Sema account securely. Log in to manage meetings, collaboration tools, and AI-powered communication features from one platform.",
}
import { Loginsection } from '@/components/login';
export default function LoginPage() {
  return (
    <main>
        <Loginsection />
    </main>
  )
}