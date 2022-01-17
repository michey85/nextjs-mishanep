import { createClient } from 'contentful';
import { MARKS, BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Code } from '@chakra-ui/react';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blogPost',
  });

  const paths = res.items.map(item => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(ctx) {
  const {items} = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': ctx.params.slug,
  });

  // TODO: дата-процессинг для поста

  return {
    props: {
      ...items[0],
    },
  };
}

const richTextOptions = {
  renderMark: {
    [MARKS.CODE]: (children) => (<Code>{children}</Code>)
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content[0]?.marks[0]?.type === 'code') {
        return <pre>{children}</pre>
      }

      return <p>{children}</p>
    },
  },
}

// Разметка для поста
export default function PostDetails(props) {
  console.log(props);
  return (
    <div>
      Blog post
      <div>
        {documentToReactComponents(props.fields.body, richTextOptions)}
      </div>
    </div>
  );
}
