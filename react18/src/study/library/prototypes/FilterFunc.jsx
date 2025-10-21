

const FilterFunc = () => {

    /**
     *  • filter()의 인자로 넘겨지는 callback 함수의 테스트(조건)를 통과하는 요소
          를 모아 새로운 배열을 생성. 
        • filter() 함수를 사용하여 배열에서 원하는 값을 삭제하는 코드 구현 가능
    */
    
    const animals = ['dog', 'cat', 'rabbit'];
    const newAnimals = animals.filter((value) => {
        return value.length > 3;
    })
    console.log(newAnimals);

    return (
        <>
            {newAnimals.map((idx, key) => {
                return <div key={key}>{idx}</div>

            })}
        </>
    )

}
export default FilterFunc