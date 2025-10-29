export class _NumberFormat {
    // 콤마추가
    addComma(num) {
        if (!num || isNaN(num)) return num;

        const regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }
    // 팔로워, 조회수 등등에서 숫자가 커질때 k 혹은 m 으로 치환해주는 함수
    replaceWith_k(num) {
        let text = num;
        if (!num || isNaN(num)) return text;
        text = num.toString();
        if (num >= 1000 && num <= 999999) text = `${text.substring(0,text.length-3)}k`;
        if (num >= 1000000) text = `${text.substring(0,text.length-6)}M`;
        return text;
    }
    // 평균값을 5.0, 4.0 , 3.2 , ... 치환해주는 함수
    getGrade(num) {
        let text = '';

        if (!num) return '';

        num = Number(num);

        if (isNaN(num)) return '';

        num = num * 0.1;
        text = num.toString().substring(0, 3);

        return text;
    }
    millisToMinutesAndSeconds(millis) {
        if (!millis) return '';

        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        // return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        return `${minutes}:${(seconds < 10 ? `0${seconds}` : seconds)}`
    }
    textByte(value) {
        let len = 0;
        for (let i = 0; i < value.length; i++) {
            if (escape(value.charAt(i)).length == 6) {
                len++;
            }
            len++;
        }
        return len
    }
}

export const NumberFormat = new _NumberFormat();