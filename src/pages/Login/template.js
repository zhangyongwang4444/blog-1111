export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onLogin() {
      console.log(this.username + '' + this.password)
    }
  }
};