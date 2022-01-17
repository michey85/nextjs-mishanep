import { createClient } from 'contentful';
import { useBlogPosts } from '../helpers';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const {items: posts} = await client.getEntries({
      content_type: 'blogPost'
    });

  return {
    props: {
      posts: useBlogPosts(posts),
    }
  };
}

// TODO: разметка со списком постов
const Blog = (props) => {
  console.log(props)
   return (
    <>
      <h1>Hello Blog</h1>
    </>
  );
}

export default Blog;
