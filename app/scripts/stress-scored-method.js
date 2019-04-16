(function() {
    'use strict';

    const globalKey = 'stress-scored-method'
    const local = localStorage;
    local.removeItem(globalKey) // Initialize localStorage for stress-scored-method

    // 全ての質問項目にトリガーをつける
    $('.answer-value').on('change', (e) => {
        const key = e.target.name
        const value = e.target.value

        updateStorage(key, value)
    })

    function updateStorage(key, value) {
        // Get existing data
        let data = getData(globalKey) || '{}'
        data = JSON.parse(data) // { 'answer-stress1': 2, ... }

        // Push values to existing data
        data[key] = value

        // Update localStorage
        local.setItem(globalKey, JSON.stringify(data))

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
        for( const v in data ) {
            sum += Number.parseInt(data[v])
        }
        return sum
    }

    function getData(key) {
        const data = local.getItem(key)
        return data
    }




}())
