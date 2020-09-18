<template>
<Layout>

  <div class="uk-section">
    <div class="uk-container uk-container-large">
      <h1>{{ $page.strapi.homepage.Hero.HeroText }}</h1>
      <Articles :articles="$page.strapi.articles" />
    </div>
  </div>

</Layout>
</template>

<page-query>
  query {
    strapi {
      homepage {
        Hero {
          HeroText
        }
      }
      articles(where: {status: "published"}) {
        slug
        title
        category {
          name
        }
        image {
          url
        }
        user {
          username
          image {
            url
          }
        }
      }
    }
  }
</page-query>

<script>
import Articles from '~/components/Articles'

export default {
  components: {
    Articles
  },
  metaInfo() {
    return {
      title: this.$page.strapi.homepage.Hero.HeroText,
    }
  }
}
</script>
