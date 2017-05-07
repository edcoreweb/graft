import Base from './Base'
import Graftable from '../mixins/Graftable'

export default {
  extends: Base,
  mixins: [Graftable],
  template: `
    <div class="container">
    asd
      <slot name="grafts">
        <g-renderer v-for="graft in grafts" :key="graft.name" :config="graft"></g-renderer>
      </slot>
    </div>
  `
}
