"use client";
import {ClerkProvider, useAuth} from "@clerk/nextjs";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {ConvexReactClient} from "convex/react";

type Props = {
    children: React.ReactNode;
}


export default function ConvexClientProvider({children}: Props) {
    const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";
    const convex = new ConvexReactClient(CONVEX_URL);
    return <ClerkProvider>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            {children}
        </ConvexProviderWithClerk>
    </ClerkProvider>;


}
