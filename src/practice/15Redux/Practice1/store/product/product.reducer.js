import { product } from './fakedata/fakeData';

const initState = {
    productList : [...product],
}

// 리듀서
const productRducer = (state = initState, action) => {

    switch(action.type) {

        default :
            return state;
    }
}

export default productRducer