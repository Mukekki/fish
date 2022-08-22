import request from '~/mixins/request.js'

export default function(_, inject) {
    inject('request', request)
}
