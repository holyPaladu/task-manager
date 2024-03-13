<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import HeaderComp from "./components/HeaderComp.vue";
</script>

<template>
  <Navigation />
  <div class="main">
    <HeaderComp />
    <RouterView />
  </div>
</template>
