<template>
  <Layout>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ $page.strapi.categories[0].name }}</h1>

        <Articles :articles="$page.strapi.categories[0].articles" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($slug: String!) {
  strapi {
    categories(where: { slug: $slug }) {
      name
      articles(where: { status: "published" }) {
        id
        title
        content
        slug
        image {
          url
        }
        category {
          name
        }
        author {
          name
          picture {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Articles from "~/components/Articles";

export default {
  components: {
    Articles,
  },
  metaInfo() {
    return {
      title: this.$page.strapi.categories[0].name.toUpperCase(),
    };
  },
};
</script>
