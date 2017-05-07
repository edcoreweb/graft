export default {
  methods: {
    fireEvent (e) {
      this.$emit(e.type, e, this)
    }
  }
}
