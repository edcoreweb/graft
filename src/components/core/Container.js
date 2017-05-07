import Base from './Base'

export default {
  extends: Base,
  template: `
    <div class="container">
      <slot></slot>
    </div>
  `
}
