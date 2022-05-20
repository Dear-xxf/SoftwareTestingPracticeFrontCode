<template>
  <div class="test">
    <el-container>

      <!-- 头部 -->
      <el-header>
        <a href="https://www.tongji.edu.cn/" class="tjimg">
          <img src="../assets/image/tjlogo.png" />
        </a>
        <span class="title">同济大学软件学院软件测试练习</span>
      </el-header>

      <el-container>

        <!-- 选择框 -->
        <el-aside>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            text-color="#fff"
            router
          >
            <br/><br/>
            <h style="font-size:20px;color:#ffd04b;">Test Problems</h>
            <br/><br/>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="/triangle">
              <el-icon><edit /></el-icon>
              <span>判断三角形</span>
            </el-menu-item>
            <el-menu-item index="/permanentCalendar">
              <el-icon><clock /></el-icon>
              <span>万年历问题</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'testpage',
  props: {
    msg: String
  }
}
</script>

<style>
@import '~@/assets/css/main.css';
.tjimg{
  width:auto;
  display:block;
  margin:10px;
}
.title {
  color: white;
  font-size: 25px;
  font-family: "Microsoft YaHei";
  margin:0 0 0 40px;
}
.el-menu {
  height:100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
</style>
