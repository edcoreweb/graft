import Base from './Base'
import Graftable from '../mixins/Graftable'

export default {
  extends: Base,
  mixins: [Graftable],
  template: `
    <div class="container">
      <slot name="grafts">
        <g-renderer :grafts="grafts"></g-renderer>
      </slot>
    </div>
  `
}
