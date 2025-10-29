/** util import */
import { axios } from '../../../utils/AxiosModule'
import { DateFormat } from '../../../utils/DateFormat'
import { NumberFormat } from '../../../utils/NumberFormat'
import SplitString from '../../../utils/SplitString'

class __HomeService {

    async getHomeList() {
        const requestParam = {
            URL: ``
        }

        let homeList;
        await axios.get(requestParam)
            .then(res => {
           
            })
            .catch(err => {
                return;
            })

        return this.verifyInitialData(homeList);
    }



    verifyInitialData(data) {

        const initialData = [...data];

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

export const HomeService = new __HomeService();