<template>
  <ul v-if="totalPages > 1">
    <li
      v-for="({ label, page }, index) in pages"
      :key="index"
    >
      <router-link
        :class="{
          'active-page': page === currentPage && !['<<', '<', '>', '>>'].includes(label)
        }"
        :to="query(page)"
      >
        {{ label }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { createArrayRangeByNumber } from '../../helpers';

export default {
  name: 'ProductsPagination',
  props: {
    productsPerPage: {
      type: Number,
      default: 1,
    },
    totalProducts: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      pagesRange: 9,
    };
  },
  computed: {
    currentPage() {
      const { _page: currentPage = 1 } = this.$route.query;
      return +currentPage;
    },
    pages() {
      const { pagesRange, currentPage, totalPages } = this;

      const pages = createArrayRangeByNumber(pagesRange, currentPage, 0, totalPages)
        .map((page) => ({ label: page, page }));

      return [
        { label: '<<', page: 1 },
        { label: '<', page: Math.max(1, currentPage - 1) },
        ...pages,
        { label: '>', page: Math.min(totalPages, currentPage + 1) },
        { label: '>>', page: totalPages },
      ];
    },
    totalPages() {
      if (this.productsPerPage === 0) {
        return 0;
      }

      return Math.ceil(this.totalProducts / this.productsPerPage);
    },
  },
  methods: {
    query(page) {
      return {
        query: {
          ...this.$route.query,
          _page: page,
        },
      };
    },
  },
};
</script>

<style>
ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;
}

li a {
  display: block;
  text-align: center;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 2px;
  margin: 4px;
}

li a:hover {
  background: #87f;
  color: #fff;
}

.active-page {
  background: #87f;
  color: #fff;
}
</style>
