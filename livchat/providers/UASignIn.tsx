import { SignIn } from "@clerk/nextjs";
import React from "react";

type Props = {};

const UASignIn = (props: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SignIn></SignIn>
    </div>
  );
};

export default UASignIn;
