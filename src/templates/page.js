import React from 'react';
import Helmet from 'react-helmet';


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
  query PagesByPath($path: String!) {
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