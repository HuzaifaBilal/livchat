import { SignUp } from "@clerk/nextjs";
import React from "react";

type Props = {};

const UASignIn = (props: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SignUp></SignUp>
    </div>
  );
};

export default UASignIn;
