export default {
  props: {
    grafts: {
      type: Array,
      required: true
    },
  },

  render (createElement) {
    // console.log(this.renderGraftTree(this.grafts, createElement));
    return createElement(
      'div',
      this.renderGraftTree(this.grafts, createElement)
    )
  },

  methods: {
    renderGraftTree (grafts, createElement) {

      return grafts.map(graft => {
          return this.renderGraftNode(graft, createElement);
        })
    },

    renderGraftNode (graft, createElement) {
      if (graft.lookup) {
        graft['props'] = graft['props'] || {}
        graft['props']['lookup'] = graft.lookup
      }

      const _graft = {
        ...graft,
        ...this.getScopedSlots(graft.scopedSlots || {}, graft.grafts, createElement)
      }

      return createElement(
        graft.name,
        _graft,
      )
    },

    getScopedSlots (slots, grafts, createElement) {
      let ret = {
        scopedSlots: {...slots}
      }

      if (grafts) {
        const slots = this.groupBy(grafts, 'slot');
        // console.log(slots)
        Object.keys(slots).forEach(slot => {
          ret.scopedSlots[slot && slot !== 'undefined' ? slot : 'default'] = () => this.renderGraftTree(slots[slot], createElement)
          // ret.scopedSlots[el.slot ? el.slot : 'default'] = () => 'asd'
        })
      }

      return ret;
    },

    groupBy (array, key) {
      return array.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    }
  }
}
