import React from 'react';
import Helmet from 'react-helmet';

// import '../css/blog-post.css';

export default function Template({
  data
}) {
  const { markdownRemark: post } = data;
  return (
    <div className="blog-post-container">
      <Helmet title={`Morgan Stone - ${post.frontmatter.title}`} />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;