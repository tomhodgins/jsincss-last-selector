mixin('last', ['selector', 'rule'],
  prelude('  const tag = document.querySelectorAll(selector)\n\n',
    ifElseReturn('tag', ['selector'], 'tag[tag.length - 1]', 'last')))
