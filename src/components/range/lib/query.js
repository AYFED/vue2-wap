let query = {
  all: function (selector, el) {
    el = el || document
    return el.querySelectorAll(selector)
  }
}

export default query
