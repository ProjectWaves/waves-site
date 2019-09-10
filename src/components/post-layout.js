import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Global } from '@emotion/core';

const PostLayout = ({ title, body }) => (
  <Layout>
    <h1>{title}</h1>
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
);

export default PostLayout;
