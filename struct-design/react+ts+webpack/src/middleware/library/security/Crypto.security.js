import crypto from 'crypto-js'

// library : https://www.npmjs.com/package/crypto-js
// DOCS : https://cryptojs.gitbook.io/docs/

class _Crypto {

    /**
      @param {obejct} keyData : 암호화 할 회원data
      
     */

    getEncription(keyData) {
        const encriptionData = {
            plainText: process.env.SignUpTransfer_PlainText,
            saltData: keyData.first_name + keyData.year
        }
        const keyEncrypted = crypto.PBKDF2(encriptionData.plainText, encriptionData.saltData, {
            keySize: 256 / 32
        }).toString(crypto.enc.Hex)

        return keyEncrypted
    }

}


export const Crypto = new _Crypto();