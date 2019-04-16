(function () {
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
        let data = getData(globalKey)

        // Push values to existing data
        data[key] = value

        // Update localStorage
        local.setItem(globalKey, JSON.stringify(data))

        // 数値計算
        const score = calScore(data)

        // 数値表示
        if (score > 19) {
            $('#stress-scored-result-strength').text('かなり強い');
        } else if (score < 19 && score > 9) {
            $('#stress-scored-result-strength').text('やや強い');
        } else if (score < 10 && score > 4) {
            $('#stress-scored-result-strength').text('中くらい');

        } else if (score < 5 && score > -1) {
            $('#stress-scored-result-strength').text('弱い');
        } else {
            console.error('Error: calScore()')
        }
    }

    function calScore(data) {
        let sum = 0;
        for (const v in data) {
            sum += Number.parseInt(data[v])
        }
        return sum
    }

    function getData(key) {
        let data = local.getItem(key) || '{}'
        data = JSON.parse(data) // { 'answer-stress1': 2, ... }
        return data
    }

    function renderStressSource() {
        const stressSource = {
            'answer-stress1': '自分の将来のこと',
            'answer-stress2': '家族や親族の将来のこと',
            'answer-stress3': '自分の健康のこと(体力や眼、耳の衰え)',
            'answer-stress4': '家族の健康のこと',
            'answer-stress5': '出費がかさむこと。',
            'answer-stress6': '借金やローンを抱えていること',
            'answer-stress7': '家族に対する責任が重すぎること',
            'answer-stress8': '収入が少ないこと',
            'answer-stress9': '職場(学生の場合は学校)や取引先との人間関係のこと',
            'answer-stress10': '家族(同居以外を含む)との人間関係のこと',
            'answer-stress11': '親戚関係のこと',
            'answer-stress12': '近所関係のこと',
            'answer-stress13': '毎日の仕事(炊事、洗濯など)、育児について',
            'answer-stress14': '今の仕事(勉強などを含む)のこと。',
            'answer-stress15': '他人に妨害されたり、足を引っ張られること',
            'answer-stress16': '義理の付き合いをしなければいけないこと',
            'answer-stress17': '暇をもてあましがちなこと。',
            'answer-stress18': 'どうしてもやりとげなければならないことが控えていること。',
            'answer-stress19': '孤独なこと',
            'answer-stress20': '生きがいがもてないこと',
            'answer-stress21': '異性関係のこと',
            'answer-stress22': '友人関係のこと',
            'answer-stress23': 'いつ解雇(学生の場合は退学)させられるかということ',
            'answer-stress24': '退職後の生活のこと',
            'answer-stress25': '自分の外見や容姿に自信が持てないこと',
            'answer-stress26': '生活していく上での性差別(男性の場合も含む)について',
            'answer-stress27': '生活が不規則なこと',
            'answer-stress28': '周りからの期待が高すぎること',
            'answer-stress29': '陰口をたたかれたり、噂話をされること',
            'answer-stress30': '過去のことでこだわりがあること',
            'answer-stress31': '公害(大気汚染や近隣騒音など)について',
            'answer-stress32': 'コンピュータなどの新しい機械についていけないこと',
            'answer-stress33': '仕事の量が多すぎること',
            'answer-stress34': '朝夕のラッシュや遠距離通勤(通学を含む)のこと',
        }

        // 2ポイント以上のものを抽出する (filter)
        // hashがあるとバグるのでhashは入れない
        const stress = getData(globalKey).filter( (v) => v > 1);


    }


}())
