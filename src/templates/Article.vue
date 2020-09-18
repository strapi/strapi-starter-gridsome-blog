<template>
<Layout>
  <div>
    <div id="banner" class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding" :data-src="getStrapiMedia($page.strapi.articles[0].image.url)" uk-img>
      <h1>{{ $page.strapi.articles[0].title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">

        <VueMarkdown :source="$page.strapi.articles[0].content" id="editor" />

        <hr class="uk-divider-small" />

        <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
          <div>
            <g-image class="avatar" :src="getStrapiMedia($page.strapi.articles[0].user.image.url)" style="position: static, border-radius: '50%'" alt="" />
          </div>
          <div class="uk-width-expand">
            <p class="uk-margin-remove-bottom">By {{ $page.strapi.articles[0].user.username }}</p>
            <p class="uk-text-meta uk-margin-remove-top">{{ moment($page.strapi.articles[0].published_at).format("MMM Do YY") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>
</template>

<page-query>
  query ($slug: String!) {
    strapi {
      articles(where: { slug: $slug }) {
        title
        content
        publishedAt
        image {
          url
        }
        Seo {
          metaTitle
          metaDescription
          shareImage {
            image {
              url
            }
          }
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
import VueMarkdown from "vue-markdown";
import {
  getStrapiMedia
} from '~/utils/medias'

var moment = require("moment");

export default {
  data() {
    return {
      moment: moment
    };
  },
  components: {
    VueMarkdown,
  },
  methods: {
    getStrapiMedia,
  },
  metaInfo() {
    return {
      title: this.$page.strapi.articles[0].Seo.metaTitle,
      meta: [{
          name: 'description',
          content: this.$page.strapi.articles[0].Seo.metaDescription
        },
        {
          property: 'og:title',
          content: this.$page.strapi.articles[0].Seo.metaTitle
        },
        {
          property: 'og:description',
          content: this.$page.strapi.articles[0].Seo.metaDescription
        },
        {
          property: 'og:image',
          content: getStrapiMedia(this.$page.strapi.articles[0].Seo.shareImage.image.url)
        }
      ]
    }
  }
}
</script>
