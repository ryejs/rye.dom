var test = require('tape')
  , shim = require('es5-shim')
  , DOM  = require('../rye.dom')

test('get text', function(t){
    var div = document.createElement('div')
    div.textContent = 'hello'
    t.equal(DOM.text(div), 'hello')
    t.end()
})

test('set text', function(t){
    var div = document.createElement('div')
    DOM.text(div, 'hello')
    t.equal(div.textContent, 'hello')
    t.end()
})

test('get html', function(t){
    var div = document.createElement('div')
    div.innerHTML = '<p>hello</p>'
    t.equal(DOM.html(div), div.innerHTML)
    t.end()
})

test('set html', function(t){
    var div = document.createElement('div')
      , html = '<p>a</p><p>b</p>'
    DOM.html(div, html)
    t.equal(div.getElementsByTagName('p').length, 2)
    t.equal(div.getElementsByTagName('p')[1].textContent, 'b')
    t.end()
})