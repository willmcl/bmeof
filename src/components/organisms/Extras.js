import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Post from "./Post";

function Extras() {

  const data = useStaticQuery(graphql`
      query ExtrasQuery {
          prismicExtras {
              data {
                  posts {
                      post {
                          document {
                              ... on PrismicPost {
                                  id
                                  uid
                                  data {
                                      title {
                                          text
                                      }
                                      external_link {
                                          url
                                      }
                                      text {
                                          richText
                                      }
                                      gallery {
                                          image {
                                              dimensions {
                                                  width
                                                  height
                                              }
                                              alt
                                              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
                                          }
                                          video {
                                              url
                                          }
                                          embed {
                                              html
                                              height
                                              width
                                              thumbnail_url
                                              title
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  `)

  if (data.prismicExtras.data.posts.length < 1) return null;

  return data.prismicExtras.data.posts.map((node, i) => <Post key={i} post={node.post.document}/>);
}

export default Extras;