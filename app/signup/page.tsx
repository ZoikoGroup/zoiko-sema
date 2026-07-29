import type { Metadata } from "next";
import { Signupform, SignupSupportSection,} from '@/components/signup';

export const metadata: Metadata = {
  title: "Sign Up for Zoiko Sema | Create Your Account",
  description:
    "Create your Zoiko Sema account today and get started with smart tools, secure workflows, and powerful solutions designed to improve your digital experience.",
};

export default function Signup() {
  return (
    <>
      <Signupform />
      <SignupSupportSection />
    </>
  );
}
