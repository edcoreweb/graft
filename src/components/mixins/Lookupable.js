export default {
  props: {
    lookup: {
      type: String,
      default: () => {
        return `graft-${Date.now() + Math.random()}`
      },
    },
  },

  methods: {
    find (lookup) {
      let queue = [this.$root]
      let node

      while (queue.length > 0) {
        node = queue.shift()

        if (node.lookup && node.lookup === lookup) {
          return node
        }

        if (! node.$children) {
          continue
        }

        for (let i = 0; i < node.$children.length; i++) {
          queue.push(node.$children[i])
        }
      }
    }
  }
}
