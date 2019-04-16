(function() {
    'use strict';

    const globalKey = 'light-image-method'
    const local = localStorage;
    local.removeItem(globalKey) // Initialize localStorage for light-image-method

    // 光イメージ法を実施した時の固有番号
    const hash = Date.now()
    updateStorage('id', hash)


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
        // Get existing data
        let data = getData(globalKey)

        // Push values to existing data
        data[key] = value

        // Update localStorage
        local.setItem(globalKey, JSON.stringify(data))
    }


    function getData(key) {
        let data = local.getItem(key) || '{}'
        data = JSON.parse(data) // { 'answer-stress1': 2, ... }
        return data
    }



}())
