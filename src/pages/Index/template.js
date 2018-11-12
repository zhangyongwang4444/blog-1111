import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

window.request = request
window.auth = auth
window.blog = blog

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    onClick1() {
      this.$alert('FCH前途无量', '暖通吧', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: 'fch'
          });
        }
      });
    },
    onClick2() {
      this.$alert('牛的一批', '德国索热', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: 'sorel'
          });
        }
      });
    }
  }
};