"use client";

import ConversationContainer from "@/components/shared/conversation/ConversationContainer";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import Header from "./_components/Header";
import Body from "./_components/body/Body";
import ChatInput from "./_components/input/ChatInput";
import RemoveFriendDialog from "./_components/dialog/RemoveFriendDialog";

type Props = {
  params: {
    conversationId: Id<"conversations">;
  };
};

const ConversationsPage = ({ params: { conversationId } }: Props) => {
  const conversation = useQuery(api.conversation.get, {
    id: conversationId,
  });
  const [removeFriendDialogOpen, setRemoveFriendDialogOpen] = useState(false);
  const [deleteGroupDialogOpen, setdeleteGroupDialogOpen] = useState(false);
  const [leaveGroupDialogOpen, setLeaveGroupDialogOpen] = useState(false);

  return conversation === undefined ? (
    <div className="w-full h-full flex items-center justify-content">
      <Loader2></Loader2>
    </div>
  ) : conversation === null ? (
    <p className="w-full h-full flex items-center justify-content">
      Conversation not found
    </p>
  ) : (
    <ConversationContainer>
      <RemoveFriendDialog
        conversationId={conversationId}
        open={removeFriendDialogOpen}
        setOpen={setRemoveFriendDialogOpen}
      ></RemoveFriendDialog>{" "}
      <Header
        imageUrl={
          conversation.isGroup
            ? undefined
            : conversation.otherMember?.imageUrl || ""
        }
        options={
          conversation.isGroup
            ? [
                {
                  label: "Leave group",
                  destructive: false,
                  onClick: () => setLeaveGroupDialogOpen(true),
                },
                {
                  label: "Delete group",
                  destructive: true,
                  onClick: () => setdeleteGroupDialogOpen(true),
                },
              ]
            : [
                {
                  label: "Remove friend",
                  destructive: true,
                  onClick: () => setRemoveFriendDialogOpen(true),
                },
              ]
        }
        name={
          (conversation.isGroup
            ? conversation.name
            : conversation.otherMember?.username) || ""
        }
      />
      <Body></Body>
      <ChatInput></ChatInput>
    </ConversationContainer>
  );
};

export default ConversationsPage;
