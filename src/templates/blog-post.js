import React from 'react';
import Helmet from 'react-helmet';

// import '../css/blog-post.css';

export default function Template({
  data
}) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet title={`${post.frontmatter.title}`} />
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