'use strict'

function Voir () {
  this.start = function () {
    console.info('Voir', 'Starting..')
    this.source = new Source(this)
    this.source.new()
    window.addEventListener('dragover', function (e) { e.stopPropagation(); e.preventDefault(); e.dataTransfer.dropEffect = 'copy' })
    window.addEventListener('drop', this.drag)
  }
  this.drag = function (e) {
    console.info('Voir', 'Loading..')
  e.preventDefault()
  e.stopPropagation()

  const file = e.dataTransfer.files[0]
  const filename = file.path ? file.path : file.name ? file.name : ''

  if (filename.indexOf('.png') < 0) { console.warn('Voir', 'Not a .png file'); return }

  voir.source.load(filename)
}
}
