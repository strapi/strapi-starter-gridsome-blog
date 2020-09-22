<template>
  <g-link
    :to="{ path: '/article/' + article.slug }"
    class="uk-link-reset"
    :key="article.id"
  >
    <div class="uk-card uk-card-muted">
      <div class="uk-card-media-top">
        <g-image :src="getStrapiMedia(article.image.url)" height="100" />
      </div>
      <div class="uk-card-body">
        <p id="category" v-if="article.category" class="uk-text-uppercase">
          {{ article.category.name }}
        </p>
        <p id="title" class="uk-text-large">{{ article.title }}</p>
        <hr class="uk-divider-small" />
        <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
          <div>
            <g-image
              class="avatar"
              :src="getStrapiMedia(article.author.picture.url)"
              style="position: static; border-radius: '50%'"
              :alt="article.title"
            />
          </div>
          <div class="uk-width-expand">
            <p class="uk-margin-remove-bottom">{{ article.author.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </g-link>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";

export default {
  props: {
    article: Object,
  },
  methods: {
    getStrapiMedia,
  },
};
</script>
