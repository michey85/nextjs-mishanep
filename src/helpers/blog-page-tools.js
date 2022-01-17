import * as R from 'ramda';

export function useBlogPosts(posts) {
  return R.map(
    R.applySpec({
      id: R.path(['sys', 'id']),
      title: R.path(['fields', 'title']),
      body: R.path(['fields', 'body']),
      featuredImage: R.path(['fields', 'featuredImage']),
      category: R.path(['fields', 'category']),
      created: R.path(['sys', 'createdAt']),
    }),
  );
}
