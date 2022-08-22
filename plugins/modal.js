import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.nocss'

import 'vue-js-modal/dist/styles.css'

Vue.use(VModal, {
  dynamicDefaults: {
    adaptive: true,
    draggable: false,
    resizable: false,
    height: '100%',
    transition: 'modal'
  }
})

export default function(_, inject) {
  inject('modal', VModal)
}
