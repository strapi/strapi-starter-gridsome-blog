<template>
<div>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <g-link to="/">{{ $static.strapi.homepage.Nav.navText }}</g-link>
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <button class="uk-button uk-button-default uk-margin-right" type="button">Categories</button>
        <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
          <ul class="uk-nav uk-dropdown-nav">
            <li v-for="category in $static.strapi.categories" :key="category.id">
              <g-link :to="'/category/' + category.slug">{{ category.name }}</g-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
</template>

<static-query>
  query {
    strapi {
      categories {
        id
        name
        slug
      }
      homepage {
        Nav {
          navText
        }
      }
    }
  }
</static-query>
