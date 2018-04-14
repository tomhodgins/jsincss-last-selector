export default (selector, rule) => {

  const tag = document.querySelectorAll(selector)

  if (tag) {

    const attr = selector.replace(/\W/g, '')

    tag[tag.length - 1].setAttribute(`data-last-${attr}`, '')

    return `${selector}[data-last-${attr}] { ${rule} }\n`

  } else {

    return ''

  }

}