export const postDescription = "Learn React.js Description";

const styles = {
  wrapper: { border: "1px solid tomato", padding: "1.5rem", backgroundColor: "teal" },
  title: { backgroundColor: "white", color: "black", padding: 20, borderRadius: 10 },
  description: { fontSize: "1rem", fontWeight: "normal" },
};

const Post = () => {
  return (
    <div>
      <h1 style={{ ...styles.title }}>Mastering React.js Basics</h1>
    </div>
  );
};

export default Post;

/**
 * * - Inline Style
 * * - CSS Modules
 * * - Framework (CSS), Bootstrap, Tailwind CSS ✅
 * * - Styled Components
 * * - Emotion
 */
