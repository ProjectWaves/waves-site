import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import { Container } from '../components/layoutComponents';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO
        title="Waves Community Mesh"
        keywords={[`gatsby`, `application`, `react`]}
      />
    </Container>
  </Layout>
);

export default IndexPage;
