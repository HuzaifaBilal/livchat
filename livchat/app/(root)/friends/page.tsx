"use client";
import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import ItemList from "@/components/shared/item-list/ItemList";
import React from "react";
import AddFriendDialog from "./_components/AddFriendDialog";

type Props = {};

const FriendsPageComponent = (props: Props) => {
  return (
    <>
      <ItemList action={<AddFriendDialog />} title="friends">
        FriendsPage
      </ItemList>
      <ConversationFallback></ConversationFallback>
    </>
  );
};

export default FriendsPageComponent;
