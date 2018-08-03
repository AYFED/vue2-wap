/**
 * Module dependencies.
 */

import closest from './closest';
import event from './event';

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

function delegate () {
}

delegate.bind = function (el, selector, type, fn, capture) {
  return event.bind(el, type, function (e) {
    var target = e.target || e.srcElement
    e.delegateTarget = closest(target, selector, true, el)
    if (e.delegateTarget) fn.call(el, e)
  }, capture)
}

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

delegate.unbind = function (el, type, fn, capture) {
  event.unbind(el, type, fn, capture)
}

export default delegate
