import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <h1>First post</h1>
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
    </div>
  );
}
