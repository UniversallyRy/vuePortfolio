<page-query>
 query Vid ($categoryName: String!){
 videos: allBlogPost (filter: {Category: {eq: $categoryName}}) {
    edges {
      node {
        Category
      }
    }
  }
}
 </page-query>
