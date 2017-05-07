import Base from './Base'
import Graftable from '../mixins/Graftable'

export default {
  extends: Base,
  mixins: [Graftable],
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">
          <slot name="title">Panel title</slot>
        </h3>
      </div>
      <div class="panel-body">
        <slot></slot>
      </div>
    </div>
  `
}
