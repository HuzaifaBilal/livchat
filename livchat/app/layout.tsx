import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/providers/ConvexClientProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import LoadingLogo from "@/components/shared/LoadingLogo";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "livchat",
  description: "Realtime chat app ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <ConvexClientProvider>
            <Suspense fallback={<LoadingLogo />}>
              <TooltipProvider> {children}</TooltipProvider>
            </Suspense>
            <Toaster richColors></Toaster>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
