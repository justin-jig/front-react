
const Practice2 = () => {

    const name = '삥삥';
    const animal = '강아지';
    const practice2Span = {
        textDecoration: 'underline',
        fontWeight : 'bold'
    }
    
    return (
        <>
            <h2>실습2</h2>
            <div>
                <h5>제 반려 동물의 이름은 <span style={practice2Span}>{name}</span>입니다.</h5>
                <h5><span style={practice2Span}>{name}</span>는  <span style={practice2Span}>{animal}</span>입니다.</h5>
            </div>
        </>
    )
}
export default Practice2;