import Base from './Base'

export default {
  extends: Base,
  template: `
    <button class="btn btn-default" @click="fireEvent">Some button</button>
  `
}
