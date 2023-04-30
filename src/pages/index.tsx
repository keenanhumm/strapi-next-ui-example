import { ContentType } from "@/constants";
import { findAllForContentType } from "@/utils";
import { Roboto as FontFamily } from "next/font/google";

const fontFamily = FontFamily({ subsets: ["latin"], weight: "400" });

export async function getStaticProps() {
  const posts = await findAllForContentType<PostAttributes>(ContentType.posts);

  return {
    props: {
      posts,
    },
  };
}

type Props = {
  posts: StrapiAPIFindAllResponse<PostAttributes>;
};

export default function Home({ posts }: Props) {
  return (
    <main className={fontFamily.className}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <li key={post.id}>
          {post.attributes.title} by{" "}
          {post.attributes.author.data.attributes.email}
        </li>
      ))}
    </main>
  );
}
