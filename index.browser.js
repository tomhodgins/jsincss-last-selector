function last(selector, rule) {
  const attr = selector.replace(/\W/g, '')
  const tag = document.querySelectorAll(selector)
  if (tag) {
    tag[tag.length - 1].setAttribute(`data-last-${attr}`, '')
    return `${selector}[data-last-${attr}] { ${rule} }\n`
  } else {
    return ''
  }
}
