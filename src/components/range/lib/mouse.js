
/**
 * dependencies.
 */

import emitter from './emitter';
import events from './event';

/**
 * initialize new `Mouse`.
 *
 * @param {Element} el
 * @param {Object} obj
 */

function Mouse (el, obj) {
  this.obj = obj || {}
  this.el = el
}

/**
 * mixin emitter.
 */

emitter(Mouse.prototype)

/**
 * bind mouse.
 *
 * @return {Mouse}
 */

Mouse.prototype.bind = function () {
  var obj = this.obj
  var self = this

  // up
  function up (e) {
    obj.onmouseup && obj.onmouseup(e)
    events.unbind(document, 'mousemove', move)
    events.unbind(document, 'mouseup', up)
    self.emit('up', e)
  }

  // move
  function move (e) {
    obj.onmousemove && obj.onmousemove(e)
    self.emit('move', e)
  }

  // down
  self.down = function (e) {
    obj.onmousedown && obj.onmousedown(e)
    events.bind(document, 'mouseup', up)
    events.bind(document, 'mousemove', move)
    self.emit('down', e)
  }

  // bind all.
  events.bind(this.el, 'mousedown', self.down)

  return this
}

/**
 * unbind mouse.
 *
 * @return {Mouse}
 */

Mouse.prototype.unbind = function () {
  events.unbind(this.el, 'mousedown', this.down)
  this.down = null
}

/**
 * export `Mouse`
 */

export default function (el, obj) {
  return new Mouse(el, obj)
}
