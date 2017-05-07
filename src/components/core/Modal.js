import $ from 'jquery'
import Base from './Base'
import Graftable from '../mixins/Graftable'

export default {
  extends: Base,
  mixins: [Graftable],
  template: `
    <div class="modal fade">
    <div class="modal-dialog" role="document" :class="{
        'modal-sm': size === 'small' || small,
        'modal-lg': size === 'large' || large
      }">
      <div class="modal-content">
        <slot name="content">
          <div class="modal-header">
            <slot name="header">
              <div class="modal-title">
                <slot name="title"></slot>
              </div>
              <button v-if="close" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </slot>
      </div>
    </div>
  </div>
  `,
  props: {
    backdrop: {
      type: [Boolean, String],
      default: true
    },
    close: {
      type: Boolean,
      default: true
    },
    focus: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      required: false,
      validator: val => ['sm', 'lg'].includes(val)
    },
    small: Boolean,
    large: Boolean,
    form: Object,
    submit: Function
  },

  mounted () {
    console.log($(this.$el))
    this.$modal = $(this.$el)
    this.initializeModal()
  },

  beforeDestroy () {
    this.removeBackdrop()
  },

  methods: {
    /**
     * Show the modal.
     *
     * @return {this}
     */
    show () {
      this.updateOptions()
      this.$modal.modal('show')
      return this
    },
    /**
     * Hide the modal.
     *
     * @return {this}
     */
    hide () {
      this.$modal.modal('hide')
      return this
    },
    /**
     * Toggle the modal.
     *
     * @return {this}
     */
    toggle () {
      this.$modal.modal('toggle')
      return this
    },
    /**
     * Remove the modal backdrop.
     */
    removeBackdrop () {
      $('.modal-backdrop').remove()
    },
    /**
     * Initialize the Boostrap modal.
     */
    initializeModal () {
      if (!$.fn.modal) {
        throw new Error('[vmodal] Bootstrap is required.')
      }

      this.$modal.modal({
        show: false,
        focus: this.focus,
        backdrop: this.backdrop,
        keyboard: this.keyboard
      })

      this.$modal.on({
        'show.bs.modal': e => this.$emit('show', e),
        'shown.bs.modal': e => this.$emit('shown', e),
        'hide.bs.modal': e => this.$emit('hide', e),
        'hidden.bs.modal': e => this.$emit('hidden', e)
      })
    },
    updateOptions () {
      const options = {
        focus: this.focus,
        backdrop: this.backdrop,
        keyboard: this.keyboard
      }
      Object.keys(options).forEach(key => {
        this.$modal.data('bs.modal').options[key] = options[key]
      })
    },
  }
}
