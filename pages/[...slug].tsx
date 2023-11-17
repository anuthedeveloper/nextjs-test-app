import { useRouter } from "next/router";
import Nav from "./components/Nav";
import styles from "../styles/Home.module.css";

function Post() {
  const router = useRouter();

  const slugPage = router.query.slug;

  const isBlogIndex = slugPage === "the-goat-files";
  const isArticle = slugPage === "article";

  return (
    <main className={styles.main}>
      <Nav />
      <br />
      {/* Current Page */}
      <h3 className={styles.center}>{slugPage} Page</h3>
      <div>{isBlogIndex && <h4>{isBlogIndex} page</h4>}</div>
      <div>{isArticle && <h5>Blog {isBlogIndex} page</h5>}</div>
      <p>Welcome to {slugPage} Page</p>
    </main>
  );
}

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post: { id: any }) => ({
//     params: { id: post.id },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()

//   // Pass post data to the page via props
//   return { props: { post } }
// }

export default Post;
