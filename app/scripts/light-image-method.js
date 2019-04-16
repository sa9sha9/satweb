(function() {
    'use strict';
    const local = localStorage;

    // 光イメージ法を実施した時の固有番号
    const hash = Date.now()
    local.setItem('id', hash)

    // ストレスの内容
    $('#lim-what-kind-of-stress').on('change', (e) => {
        console.log(`key: ${e.currentTarget.id}, value: ${e.target.value} `)

        const key = e.currentTarget.id
        const value = e.target.value

        updateStorage(key, value)

        $('#lim-selected-stress').val(value);
        $('#lim-selected-stress-2').val(value);
    })

    // ストレスの色
    $('#lim-what-color').on('change', (e) => {
        console.log(`key: ${e.currentTarget.id}, value: ${e.target.value} `)

        const key = e.currentTarget.id
        const value = e.target.value

        updateStorage(key, value)

        $('#lim-selected-color').text(value);
    })
    // ストレスの形
    $('#lim-what-shape').on('change', (e) => {
        console.log(`key: ${e.currentTarget.id}, value: ${e.target.value} `)

        const key = e.currentTarget.id
        const value = e.target.value

        updateStorage(key, value)

        $('#lim-selected-shape').text(value);
    })


    function updateStorage(key, value) {
        local.setItem(key, JSON.stringify(value))
    }

    function getData(key) {
        const data = local.getItem(key)
        console.log(data)
    }




}())
