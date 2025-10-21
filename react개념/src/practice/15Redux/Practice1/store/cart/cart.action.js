
export const CART_ACTION_TYPE = {
    ADD : 'CART/ADDCART',
    DELETE: 'CART/DELETECART'
}

export const CART_ACTION_TYPE_MID = {
    ADD_MID : 'CART/ADDCART_MID',
    DELETE_MID : 'CART/DELETECART_MID'
}

export const cartAction = () => {
  
    const addCart_AC = (datas) => ({
        type: CART_ACTION_TYPE.ADD,
        payload: datas,
    });
    const deleteCart_AC = (datas) => ({
        type: CART_ACTION_TYPE.DELETE,
        payload: datas,
    });

    return {
        addCart_AC,
        deleteCart_AC
    }
}


export const cartAction_Mid = () => {

    const addCart_ACMid = (datas) => ({
        type: CART_ACTION_TYPE_MID.ADD_MID,
        payload: datas,
    });
    const deleteCart_ACMid = (datas) => ({
        type: CART_ACTION_TYPE_MID.DELETE_MID,
        payload: datas,
    });

    return {
        addCart_ACMid,
        deleteCart_ACMid
    }
}