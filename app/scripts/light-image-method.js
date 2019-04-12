(function() {
    'use strict';

    const local = localStorage;
    const history = []
    local.setItem('hoge', JSON.stringify(value))
    const hoge = local.getItem('hoge')
    console.log(hoge)



}())
