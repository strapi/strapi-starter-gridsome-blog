// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');
const http = require('http');
const path = require('path');

module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        strapi {
          articles {
            slug
          }
          categories {
            slug
          }
        }
      }
    `);

    // Create blog articles pages.
    const articles = data.strapi.articles
    const categories = data.strapi.categories

    articles.forEach((article) => {
      createPage({
        path: `/article/${article.slug}`,
        component: './src/templates/Article.vue',
        context: {
          slug: article.slug
        }
      })
    })

    categories.forEach((category) => {
      createPage({
        path: `/category/${category.slug}`,
        component: './src/templates/Category.vue',
        context: {
          slug: category.slug
        }
      })
    })

  })
}
