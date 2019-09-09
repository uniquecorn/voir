'use strict'

function Source (voir) {
  this.path = null

  this.new = function () {
    this.path = null
  }

  this.open = function () {
    if (!dialog) { return }

    const paths = dialog.showOpenDialog({ properties: ['openFile'], filters: [{ name: 'Image', extensions: ['png'] }] })

    if (!paths) { console.warn('Nothing to load'); return }

    this.load(paths[0])
     return;
  }

  this.load = function (path) {
    const _img = fs.readFileSync(path).toString('base64')
    const _out = '<img src="data:image/png;base64,' + _img + '" />';
    var _target = document.getElementById('image_container');
     _target.insertAdjacentHTML('beforeend', _out);
  }
}
