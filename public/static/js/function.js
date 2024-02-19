function converteindex(index) {
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var array = Array.from(alfabeto);
    return array[parseInt(index)];
}

var serialize = function (form) {
    var field,
        l,
        s = [];

    if (typeof form == 'object' && form.nodeName == "FORM") {
        var len = form.elements.length;

        for (var i = 0; i < len; i++) {
            field = form.elements[i];
            if (field.name && !field.disabled && field.type != 'button' && field.type != 'file' && field.type != 'hidden' && field.type != 'reset' && field.type != 'submit') {
                if (field.type == 'select-multiple') {
                    l = form.elements[i].options.length;

                    for (var j = 0; j < l; j++) {
                        if (field.options[j].selected) {
                            s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
                        }
                    }
                }
                else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                    s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
                }
            }
        }
    }
    return s.join('&').replace(/%20/g, '+');
};


function findObjectTranslator(o) {

    var objectTranslator = translator.find(item => item.operacao.toUpperCase() == o.toUpperCase());
    if (objectTranslator) {
        return objectTranslator
    } 
    throw "Objeto não encontrado no translator.js:" + o;
}



function failureCallback(err) {
    alert(err)
  }

