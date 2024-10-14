"use client";

import {
  ClerkProvider,
  SignedOut,
  SignIn,
  SignUp,
  useAuth,
} from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import LoadingLogo from "@/components/shared/LoadingLogo";
import UASignIn from "./UASignIn";

type Props = {
  children: React.ReactNode;
};

export default function ConvexClientProvider({ children }: Props) {
  const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";
  const convex = new ConvexReactClient(CONVEX_URL);
  return (
    <ClerkProvider
      signUpUrl="/conversations"
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated> {children}</Authenticated>
        <AuthLoading>
          <LoadingLogo />
        </AuthLoading>
        <SignedOut>
          <UASignIn></UASignIn>
        </SignedOut>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
