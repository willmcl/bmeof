import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import PropTypes from 'prop-types';

function Image({imgName, height}) {

  const data = useStaticQuery(graphql`
      query ImageQuery {
          allImageSharp {
              nodes {
                  fluid {
                      originalName
                      originalImg
                  }
                  gatsbyImageData(
                      width: 1200
                      placeholder: BLURRED
                      formats: [AUTO, WEBP]
                  )
                  original {
                      width
                      height
                  }
              }
          }
      }
  `)

  const image = data.allImageSharp.nodes.find(
    node => node.fluid.originalName === imgName.replace(/^.*[\\/]/, ""),
  );


  if (!image) {
    return null;
  }

  if(height) {
    return <GatsbyImage
      alt="gatsby"
      layout="constrained"
      style={{
        width: `calc(${image.original.width / image.original.height} * (${height}))`,
        height: `calc(${height})`,
      }}
      image={image.gatsbyImageData} />;
  }

  return <GatsbyImage
    alt="gatsby"
    layout="constrained"
    image={image.gatsbyImageData} />;
}

Image.propTypes = {
  imgName: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default Image;
