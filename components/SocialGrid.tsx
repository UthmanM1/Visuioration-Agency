type Post = {
  num: string;
  label: string;
};

export default function SocialGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="social-grid">
      {posts.map((post) => (
        <div className="social-tile" key={post.num}>
          <span className="stile-num">{post.num}</span>
          <span className="stile-label">{post.label}</span>
        </div>
      ))}
    </div>
  );
}
