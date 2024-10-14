"use client";

import { ClerkProvider, RedirectToSignUp, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import LoadingLogo from "@/components/shared/LoadingLogo";

type Props = {
  children: React.ReactNode;
};

export default function ConvexClientProvider({ children }: Props) {
  const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";
  const convex = new ConvexReactClient(CONVEX_URL);
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated> {children}</Authenticated>
        <Unauthenticated>
          <RedirectToSignUp></RedirectToSignUp>
        </Unauthenticated>
        <AuthLoading>
          <LoadingLogo />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
