/** utils */
import Moment from 'moment'
import { axios } from '../../utils/AxiosModule'



class __SearchMethod {

    async getSearchList(type, data) {

        let searchList = '';
        if (type === 'latest') { // 최신순
            const requestParam = {
                URL: `nPlatform/v1/common/search/platform/latest/?search_word=${data}`
            }

            const result = await axios.get(requestParam);
            searchList = result.data.data.searchLatestList;
        } else if (type === 'hits') { // 조회순
            const requestParam = {
                URL: `nPlatform/v1/common/search/platform/hits/?search_word=${data}`
            }

            const result = await axios.get(requestParam);
            searchList = result.data.data.searchHitsList;
        }



        return this.verifyInitialData(searchList);
        // return searchList;
    }



    verifyInitialData(data) {

        const initialData = [ ...data ];


        for (let array of initialData) {
            for (let item in array) {
                // undefined, 빈배열, null 일 때 => ''
                if (array[item] == undefined || array[item].length == 0 || array[item] == null) {
                    array[item] = '';
                }

             
            }
        }



        return initialData;
    }
}

export const SearchService = new __SearchMethod();