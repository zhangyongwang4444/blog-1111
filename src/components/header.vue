<template>
    <header>
      <h1>FCH联盟成员博客系统</h1>
      <p>项目案例汇总</p>
      <div class="btns">
       <el-button>立即登录</el-button>
       <el-button>注册账号</el-button>
      </div>
    </header>
</template>

<style lang="less">
@import "../assets/base.less";

header {
  padding: 0 12% 30px 12px;
  background: @bgColor;
  display: grid;
  justify-items: center;

  h1 {
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
    color: #fff;
    a {
      color: #fff;
    }
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns {
    margin-top: 20px;
  }

  button {
    margin: 20px 5px 0;
  }
}
</style>
