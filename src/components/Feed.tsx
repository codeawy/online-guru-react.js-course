import { ReactNode } from "react";

interface FeedProps {
  children: ReactNode;
}

const Feed = ({ children }: FeedProps) => {
  return (
    <div>
      <h1>Feed</h1>
      {children}
    </div>
  );
};

export default Feed;
