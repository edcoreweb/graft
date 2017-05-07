import Observable from './Observable'

export default {
  mixins: [Observable],
  data () {
    return {
      booted: false
    }
  },
  created: function () {
    // this is called after the component if fully mounted
    this.$on('hook:mounted', function () {
      if (! this.booted) {
        this.fireEvent(new Event('boot'))
        this.booted = true;
      }
    })
  }
}
