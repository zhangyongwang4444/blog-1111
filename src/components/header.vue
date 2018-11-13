<template>
    <header :class="{login:isLogin,'no-login':!isLogin}">
      <template v-if="!isLogin">
          <h1>FCH博客系统</h1>
          <p>项目案例汇总</p>
          <div class="btns">
            <el-button>立即登录</el-button>
            <el-button>注册账号</el-button>
          </div>
      </template>

      <template v-if="isLogin">
          <h1>FCH</h1>
          <i class="edit el-icon-edit"></i>
          <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
      </template>
      
    </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true
    };
  }
};
</script>

<style lang="less">
@import "../assets/base.less";

header.no-login {
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

header.login {
  display: flex;
  align-items: center;
  background: @bgColor;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
    color: #fff;
    a {
      color: #fff;
    }
  }

  .edit {
    color: #fff;
    font-size: 30px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
  .user {
    position: relative;

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin: 0;
      padding: 0;
      background-color: #fff;

      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;

        &:hover {
          background-color: #eaeaea;
        }
      }
    }

    &:hover ul {
      display: block;
    }
  }
}
</style>
