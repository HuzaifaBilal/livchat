import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import ItemList from "@/components/shared/item-list/ItemList";
import React from "react";

type Props = {};

const FriendsPageComponent = (props: Props) => {
  return (
    <>
      <ItemList title="friends">FriendsPage</ItemList>
      <ConversationFallback></ConversationFallback>
    </>
  );
};

export default FriendsPageComponent;
