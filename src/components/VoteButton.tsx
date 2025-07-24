"use client";

import { useState } from "react";
import { Button, Modal, Input, message } from "antd";
import { castVote as CastVoteFn } from "@/app/actions/vote";

type Props = {
  projectId: string;
  onVote: typeof CastVoteFn;
  votes: number;
}

export default function VoteButton({ projectId, onVote }: Props) {
  const [votes, setVotes] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const { projectVotes } = await onVote(projectId, email);
      setVotes(projectVotes);
      message.success("Thanks for voting!");
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        message.error(err.message);
      } else {
        message.error("Vote failed");
      }
    } finally {
      setModalOpen(false);
      setEmail("");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <strong>Votes: {votes}</strong>
        <Button onClick={() => setModalOpen(true)}>Vote</Button>
      </div>
      <Modal
        title="Enter your email"
        open={modalOpen}
        onOk={handleSubmit}
        onCancel={() => setModalOpen(false)}
        okText="Submit Vote"
      >
          <Input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="w-full p-2 border rounded"
          />
      </Modal>
    </>
  );
}
