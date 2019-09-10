import React from 'react';
import { graphql } from 'gatsby';
import PostLayout from '../components/post-layout';

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      timeToRead
    }
  }
`;

const PostTemplate = ({ data }) => (
  <div>
    <PostLayout title={data.mdx.title} body={data.mdx.body}></PostLayout>
  </div>
);

export default PostTemplate;
