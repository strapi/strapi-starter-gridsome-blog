<template>
  <Layout>
    <div>
      <div
        id="banner"
        class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
        :data-src="getStrapiMedia($page.strapi.articles[0].image.url)"
        uk-img
      >
        <h1>{{ $page.strapi.articles[0].title }}</h1>
      </div>

      <div class="uk-section">
        <div class="uk-container uk-container-small">
          <VueMarkdown :source="$page.strapi.articles[0].content" id="editor" />

          <hr class="uk-divider-small" />

          <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              <g-image
                class="avatar"
                :src="
                  getStrapiMedia($page.strapi.articles[0].author.picture.url)
                "
                style="position: static, border-radius: '50%'"
                alt=""
              />
            </div>
            <div class="uk-width-expand">
              <p class="uk-margin-remove-bottom">
                By {{ $page.strapi.articles[0].author.name }}
              </p>
              <p class="uk-text-meta uk-margin-remove-top">
                {{
                  moment($page.strapi.articles[0].published_at).format(
                    "MMM Do YY"
                  )
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($slug: String!) {
  strapi {
    articles(where: { slug: $slug }) {
      title
      description
      content
      published_at
      image {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
    global {
      siteName
      favicon {
        url
      }
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import VueMarkdown from "vue-markdown";
import { getStrapiMedia } from "~/utils/medias";
import { getMetaTags } from "~/utils/seo";
import moment from "moment";

export default {
  data() {
    return {
      moment: moment,
    };
  },
  components: {
    VueMarkdown,
  },
  methods: {
    getStrapiMedia,
  },
  metaInfo() {
    const { title, description, image } = this.$page.strapi.articles[0];
    const { defaultSeo, favicon } = this.$page.strapi.global;

    // Merge default and article-specific SEO data
    const seo = {
      ...defaultSeo,
      metaTitle: title,
      metaDescription: description,
      shareImage: image,
    };

    return {
      title: this.$page.strapi.articles[0].title,
      meta: getMetaTags(seo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
};
</script>
