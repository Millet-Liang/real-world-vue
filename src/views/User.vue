<template>
  <div class="user">
    <!-- $route代表现在的路径 -->
    <!-- <h1>This is {{ $route.params.username }}'s page</h1> -->

    <!-- 引用了props以后，就可以不用写前缀 “ $route.params. ” -->
    <h1>This is {{ username }}'s page</h1>
  </div>
</template>

<script>
export default {
  props: ['username'],
}
</script>
