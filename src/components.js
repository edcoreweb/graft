import Vue from 'vue'
import Alert from './components/core/Alert'
import Button from './components/core/Button'
import Renderer from './components/core/Renderer'
import Panel from './components/core/Panel'
import Modal from './components/core/Modal'

Vue.component('g-renderer', Renderer)
Vue.component('g-panel', Panel)
Vue.component('g-button', Button)
Vue.component('g-alert', Alert)
Vue.component('g-modal', Modal)
