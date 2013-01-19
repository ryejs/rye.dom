(function(name, deps, definition){
    if (typeof module !== 'undefined') module.exports = definition(require)
    else if (typeof define === 'function') define(name, deps, definition)
    else window[name] = definition(function(name){ return window[name] })
})('rye/dom', [], function(require){

    var _slice = Array.prototype.slice

    function getValue(element) {
        if (element.multiple) {
            return new Rye(element).find('option').filter(function(option) {
                return option.selected && !option.disabled
            }).pluck('value')
        }
        return element.value
    }

    function getAttribute(element, name) {
        if (name === 'value' && element.nodeName == 'INPUT') {
            return getValue(element)
        }
        return element.getAttribute(name)
    }

    function append (element, html) {
        if (typeof html === 'string') {
            element.insertAdjacentHTML('beforeend', html)
        } else {
            element.appendChild(html)
        }
    }

    function prepend (element, html) {
        var first
        if (typeof html === 'string') {
            element.insertAdjacentHTML('afterbegin', html)
        } else if (first = element.childNodes[0]){
            element.insertBefore(html, first)
        } else {
            element.appendChild(html)
        }
    }

    function after (element, html) {
        var next = element
        if (typeof html === 'string') {
            element.insertAdjacentHTML('afterend', html)
            return
        }
        do { next = next.nextSibling } while (next.nodeType !== 1)
        if (next) {
            element.parentNode.insertBefore(html, next)
        } else {
            element.parentNode.appendChild(html)
        }
    }

    function before (element, html) {
        if (typeof html === 'string') {
            element.insertAdjacentHTML('beforebegin', html)
        } else {
            element.parentNode.insertBefore(html, element)
        }
    }


    function text (element, text) {
        if (text == null) {
            return element.textContent
        }
        element.textContent = text
    }

    function html = function (element, html) {
        if (html == null) {
            return element.innerHTML
        }
        element.innerHTML = html
    }

    function empty = function (element) {
        while (element.firstChild) {
            elem.removeChild(elem.firstChild)
        }
    }

    function clone = function (deep) {
        return element.cloneNode(deep === false ? false : true)
    }

    function remove (element) {
        var parent
        if (parent = element.parentNode) {
            parent.removeChild(element)
        }
    }

    function val (element) {
        if (value == null) {
            return getValue(element)
        }
        return element.value = value
    }

    function attr (element, name, value) {
        if (typeof name === 'object') {
            var keys = Object.keys(name)
            while (key = keys.pop()) element.setAttribute(key, name[key])
        }
        if (typeof value !== 'undefined') {
            element.setAttribute(name, value)
        }
        return getAttribute(element, name)
    }

    function prop = function (element, name, value) {
        if (typeof name === 'object') {
            var keys = Object.keys(name)
            while (key = keys.pop()) element[key] = name[key]
        }
        if (typeof value !== 'undefined') {
            element[name] = value
        }
        return element[name]
    }

    return {
        getValue     : getValue
      , getAttribute : getAttribute
      , append       : append
      , prepend      : prepend
      , after        : after
      , before       : before
      , text         : text
      , html         : html
      , empty        : empty
      , clone        : clone
      , remove       : remove
      , val          : val
      , attr         : attr
      , prop         : prop
    }

})