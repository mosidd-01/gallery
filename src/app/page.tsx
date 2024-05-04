import Link from "next/link";
import { db } from "~/server/db";
import "~/styles/globals.css";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/962e1ac5-44a8-401c-8eca-50c05b21309a-2364.png",
  "https://utfs.io/f/02d7e445-74d2-4d71-bda4-c435db9b6789-pjh68u.png",
  "https://utfs.io/f/a4e1732a-8792-4523-a742-59c8c78c8d30-2365.png",
  "https://utfs.io/f/06a81ea2-d12a-42bd-9863-0bbcf233cfbd-1zbfv.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
