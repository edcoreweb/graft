export default {
  props: {
    config: {
      type: Object,
      required: true
    },
  },

  render (createElement) {
    const data = Object.assign({}, this.config)

    return createElement(
      data.name,
      data,
      this.$slots.default
    );
  },

  mounted () {
    // render the children grafts
    if (this.config.hasOwnProperty('grafts')) {
      this.$children[0].grafts = Object.assign({}, this.config.grafts)
    }
  }
}
