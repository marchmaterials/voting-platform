"use client";

import { useState } from "react";
import { Button, Modal, Input, message } from "antd";
import { z } from "zod";
import { castVote } from "@/app/actions/vote";

type Props = {
  projectId: string;
  setVotes: (votes: number) => void;
};

export default function VoteButton({ projectId, setVotes }: Props) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    const emailSchema = z.email("Invalid email address");
    const parseResult = emailSchema.safeParse(email);
    if (!parseResult.success) {
      message.error(parseResult.error.issues[0].message);
      return;
    }

    setLoading(true);

    try {
      const { projectVotes } = await castVote(projectId, email);
      setVotes(projectVotes);
      message.success("Thanks for voting!");
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        message.error(err.message);
      }
    } finally {
      setLoading(false);
      setModalOpen(false);
      setEmail("");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Button onClick={() => setModalOpen(true)}>
          Vote for this project
        </Button>
      </div>
      <Modal
        title="Enter your email"
        open={modalOpen}
        onOk={handleSubmit}
        onCancel={() => setModalOpen(false)}
        okText="Submit Vote"
        confirmLoading={loading}
      >
        <Input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </Modal>
    </>
  );
}
