const Tweet = ({ email }: { email: string }) => {
  return (
    <div>
      <h1>Tweet</h1>
      <span>User email: {email}</span>
    </div>
  );
};

export default Tweet;
