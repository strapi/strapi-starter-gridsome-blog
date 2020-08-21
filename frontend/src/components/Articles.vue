<template>
<div>
  <div class="uk-child-width-1-2" uk-grid>
    <div>
      <Card v-for="article in leftArticles" :article="article" :key="article.id" />
    </div>
    <div>
      <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
        <Card v-for="article in rightArticles" :article="article" :key="article.id" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Card from "~/components/Card"
export default {
  props: {
    articles: Array
  },
  components: {
    Card
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },
    leftArticles() {
      return this.articles.slice(0, this.leftArticlesCount);
    },
    rightArticles() {
      return this.articles.slice(this.leftArticlesCount, this.articles.length);
    }
  }
};
</script>
