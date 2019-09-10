const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const kebabCase = require('lodash.kebabcase');

// Pre-run checks
exports.onPreBootstrap = ({ store }, options) => {
  // const { program } = store.getState();
  // const contentPath = options.contentPath || 'blog';
  // const dir = path.join(program.directory, contentPath);
  // // if the specified path doesn't exist, let's create it
  // if (!fs.existsSync(dir)) {
  //   mkdirp.sync(dir);
  // }
};

exports.onCreateNode = ({ node, actions }, options) => {
  const contentPath = options.contentPath || 'blog';
  let slug;

  if (node.internal.type !== 'Mdx') {
    return;
  }

  if (node.internal.type === 'Mdx') {
    // this was taken from LekoArt's process for checking frontmatter for slug
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      // if slug exists in frontmatter, use it
      slug = `/${contentPath}/${kebabCase(node.frontmatter.slug)}`;
    } else if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${contentPath}/${kebabCase(node.frontmatter.title)}`;
    }
    // TODO: Handle errors if frontmatter doesn't have slug OR title

    // in the future, if this isn't creating nodes, run gatsby clean to clear cache
    actions.createNodeField({
      node,
      name: 'slug',
      value: `${slug}`,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('There was an error loading the MDX files.', result.errors);
  }

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: require.resolve('./src/templates/post-template.js'),
      context: { slug: node.fields.slug },
    });
  });
};
