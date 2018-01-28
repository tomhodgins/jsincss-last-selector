export default (selector, rule) => {

  let styles = ''

  const tag = document.querySelectorAll(selector)

  if (tag) {

    const attr = selector.replace(/\W/g, '')

    tag[tag.length - 1].setAttribute(`data-last-${attr}`, '')
    styles += `${selector}[data-last-${attr}] { ${rule} }\n`

  }

  return tag ? styles : ''

}