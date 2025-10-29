
// 정규식
export const emailPattern = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z]{2,50}$/; // 2~50 자 이메일 정규식
export const passwordPattern = /^(?=.*[a-z])(?=.*[!@#$%^&*()])(?=.*[0-9]).{9,16}$/; // 9~16자, 영문 소문자, 숫자, 특수문자 (비밀번호)
export const onlyNumberPattern = /^[0-9]*$/;
export const teamNamePattern = /^[a-z|A-Z|0-9|ㄱ-ㅎ|ㅏ-ㅣ|가-힣\(\)\-\_\s+]*$/; // 영문, 숫자, 한글, -, _, (, ) 만 허용
export const urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/; // www.xxx.xxx 주소 패턴

// 파일정규식 (파일업로드)
export const imageFileUploadRegex = /(.*?)\.(jpg|jpeg|png|bmp)$/i;
export const imageFileResizingLimitSize = 1024 * 1024;
export const imageFileLimitSize = 1024 * 1024 * 2;
export const imageFileLimitSizeText = '2MB';
export const fileUploadRegex = /(.*?)\.(txt|pdf|hwp|docx|pptx|xlsx|psd|ai|svg|aep|dwg|dws|dxf|dwt|dwf|skp|skb|zip|apk|rar|7z|tar|tgz|lzh|iso|gz|xz|zipx)$/i;
export const fileLimitSize = 1024 * 1024 * 10;
export const fileLimitSizeText = '10MB';
export const filejpggif = /([^\s]+(?=\.(jpg|gif|png))\.\2)/i;




