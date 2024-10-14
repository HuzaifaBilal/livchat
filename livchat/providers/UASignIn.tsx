import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import React from "react";

type Props = {};

const UASignIn = (props: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Button className="p-4">
        <SignInButton />
      </Button>
    </div>
  );
};

export default UASignIn;
