"use client";

import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import ItemList from "@/components/shared/item-list/ItemList";
import React from "react";
import AddFriendDialog from "./_components/AddFriendDialog";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import Request from "./_components/Request";
import LoadingLogo from "@/components/shared/LoadingLogo";

type Props = {};

const FriendsPageComponent = (props: Props) => {
  const requests = useQuery(api.requests.get);
  if (requests === undefined) return <LoadingLogo />;
  return (
    <>
      <ItemList action={<AddFriendDialog />} title="friends">
        {requests ? (
          requests.length === 0 ? (
            <p className="w-full h-full flex items-center justify-center">
              No Friend requests found
            </p>
          ) : (
            requests.map((request) => (
              <Request
                key={request.request._id}
                id={request.request._id}
                imageUrl={request.sender.imageUrl}
                username={request.sender.username}
                email={request.sender.email}
              />
            ))
          )
        ) : (
          <Loader2 className="h-8 w-8"></Loader2>
        )}
      </ItemList>
      <ConversationFallback></ConversationFallback>
    </>
  );
};

export default FriendsPageComponent;
