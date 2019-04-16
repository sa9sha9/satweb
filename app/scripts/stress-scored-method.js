(function() {
    'use strict';
    const local = localStorage;

    // 光イメージ法を実施した時の固有番号
    const hash = Date.now()
    local.setItem('id', hash)

    // 全ての質問項目にトリガーをつける
    $('.answer-value').on('change', (e) => {
        const key = e.target.name
        const value = e.target.value

        updateStorage(key, value)
    })

    // ストレスの内容
    $('#lim-what-kind-of-stress').on('change', (e) => {
        console.log(`key: ${e.currentTarget.id}, value: ${e.target.value} `)

        const key = e.currentTarget.id
        const value = e.target.value

        updateStorage(key, value)

        $('#lim-selected-stress').val(value);
        $('#lim-selected-stress-2').val(value);
    })


    function updateStorage(key, value) {
        const globalKey = 'stress-scored-method'
        // Get existing data
        let data = getData(globalKey) || '{}'
        data = JSON.parse(data) // { 'answer-stress1': 2, ... }

        // Push values in existing data
        data[key] = value


        // Update localStorage
        local.setItem('stress-scored-method', JSON.stringify(data))

        return

        // 数値計算
        const score = calScore(data)

        // 数値表示
        if(score > 19) {
            $('#stress-scored-result-strength').text('かなり強い');
        } else if(score < 19 && score > 9 ) {
            $('#stress-scored-result-strength').text('やや強い');
        } else if(score < 10 && score > 4 ) {
            $('#stress-scored-result-strength').text('中くらい');

        } else if(score < 5 && score > -1) {
            $('#stress-scored-result-strength').text('弱い');
        } else {
            console.error('Error: calScore()')
        }

    }


    function calScore(data) {
        let sum = 0;
        for( const v of data ) {
            sum += v
        }
        return sum
    }

    function getData(key) {
        const data = local.getItem(key)
        console.log(data)
        return data
    }




}())
