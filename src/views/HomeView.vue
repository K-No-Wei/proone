<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />

      <el-container>
        <el-main>
          <Bread/>
          <div class="cont">
            <router-view />
          </div>
        </el-main>

        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/common/Footer.vue";
import Menu from "@/components/common/Menu.vue";
import Header from "@/components/common/Header.vue";
import Bread from "@/components/common/Breadcrumb.vue";

export default {
  name: "HomeView",
  components: {
    Footer,
    Menu,
    Header,
    Bread,
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont {
      margin: 20px;
    }
  }
}
</style>
