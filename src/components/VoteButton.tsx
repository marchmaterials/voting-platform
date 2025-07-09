"use client";
import { useState, useEffect } from "react";
import { Button, Modal, Input, message } from "antd";

export default function VoteButton({ projectId }: { projectId: string }) {
  const [votes, setVotes] = useState(0);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("votes") || "{}");
    let voteCount = 0;

    for (const [, projectIds] of Object.entries(storedVotes)) {
      if ((projectIds as string[]).includes(projectId)) {
        voteCount += 1;
      }
    }
    setVotes(voteCount);
  }, [projectId]);

  const handleVoteClick = () => {
    setEmailModalOpen(true);
  };

  const handleEmailSubmit = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      message.error("Please enter a valid email.");
      return;
    }

    const storedVotes = JSON.parse(localStorage.getItem("votes") || "{}");

    if (storedVotes[email]?.includes(projectId)) {
      message.warning("You've already voted for this project.");
      setEmailModalOpen(false);
      setEmail("");
      return;
    }

    const updatedVotes = {
      ...storedVotes,
      [email]: [...(storedVotes[email] || []), projectId],
    };

    localStorage.setItem("votes", JSON.stringify(updatedVotes));

    const voteCount = Object.values(updatedVotes).filter((ids) =>
        (ids as string[]).includes(projectId)
    ).length;
    setVotes(voteCount);
    setEmailModalOpen(false);
    setEmail("");
    message.success("Your vote was recorded!");
  };

  return (
    <>
      <div className="flex flex-col items-start gap-1">
        <h3 className="text-lg font-semibold">{`Votes: ${votes}`}</h3>
        <Button type="primary" onClick={handleVoteClick}>
          Vote For This Project
        </Button>
      </div>

      <Modal
        title="Enter Your Email to Vote"
        open={emailModalOpen}
        onOk={handleEmailSubmit}
        onCancel={() => setEmailModalOpen(false)}
        okText="Submit Vote"
      >
        <Input
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Modal>
    </>
  );
}
