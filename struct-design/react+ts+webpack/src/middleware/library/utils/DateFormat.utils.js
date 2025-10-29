

/**data */
export class _DateFormat {

    // 날짜포맷
    dateFormat(type, date) {
        if (!date || new Date(date) === 'Invalid Date') {
            return date;
        }
        if (typeof date !== Date) {
            date = new Date(date)
        }
        let text = '';
        let year = '';
        let month = '';
        let day = '';
        let dateString = '';
        let hour = '';
        let minute = '';
        let ma = ''; // 오전,오후

        const dateStringList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        switch (type) {
            case 'yyyy.mm.dd':
                year = `${date.getFullYear()}`;
                month = date.getMonth() + 1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;
                day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
                text = `${year}. ${month}. ${day}`
                break;
            case 'yyyy.mm.dd.hh:mm':
                year = `${date.getFullYear()}`;
                month = date.getMonth() + 1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;
                day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

                hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
                minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

                text = `${year}. ${month}. ${day}. ${hour}:${minute}`;
                break;

            case 'yyyy.MM.DD. dd hh:mm':
                year = `${date.getFullYear()}`;
                month = date.getMonth() + 1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;
                day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

                dateString = dateStringList[date.getDay()];

                hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
                minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

                text = `${year}. ${month}. ${day}. ${dateString} ${hour}:${minute}`;
                break;

            case 'dateString':
                dateString = dateStringList[date.getDay()];

                text = dateString;
                break;

            case 'MM.DD':
                month = date.getMonth() + 1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;
                day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

                text = `${month}. ${day}`
                break;

            case 'hh:mm ma':
                ma = date.getHours() < 12 ? '오전' : '오후';
                if (ma === '오전') {
                    hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
                } else {
                    // hour = date.getHours()-12 === 0 ? '12' : date.getHours()-12 < 10 ? `0${date.getHours()-12}` : date.getHours();
                    hour = date.getHours() - 12 === 0 ? '12' : date.getHours() - 12;
                }

                minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
                text = `${hour}:${minute} ${ma}`;
                break;

            case 'hh:mm':
                hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
                minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
                text = `${hour}:${minute}`;
                break;

            case 'yyyy-mm-dd':
                year = `${date.getFullYear()}`;
                month = date.getMonth() + 1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;
                day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
                text = `${year}-${month}-${day}`
                break;
        }
        return text;
    }


}

export const DateFormat = new _DateFormat();