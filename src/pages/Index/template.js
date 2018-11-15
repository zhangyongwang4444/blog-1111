
import blog from '@/api/blog.js'

export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  created() {
    blog.getIndexBlogs().then(res => {
      console.log(res)
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
    })
  },
  methods: {
    onPageChange(newPage) {
      console.log(newPage)
      blog.getIndexBlogs({ page: newPage }).then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      })
    }
  }
};