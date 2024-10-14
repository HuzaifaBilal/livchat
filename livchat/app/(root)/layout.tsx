import React from "react";
import SidebarWrapper from "@/components/shared/sidebar/SidebarWrapper";
import LoadingLogo from "@/components/shared/LoadingLogo";

type Props = React.PropsWithChildren<{}>;

const layout = ({ children }: Props) => {
  {
    children ? (
      <SidebarWrapper>{children}</SidebarWrapper>
    ) : (
      <LoadingLogo></LoadingLogo>
    );
  }
};

export default layout;
