import { Metadata } from "next";
export const metadata = {
  title: "Zoiko Sema Login | Secure Workspace Access",
  description:
    "Zoiko Sema login provides secure account access for users. Enter your credentials to access your workspace, meetings, and collaboration features anytime.",
}
import { Loginsection } from '@/components/login';
export default function LoginPage() {
  return (
    <main>
        <Loginsection />
    </main>
  )
}