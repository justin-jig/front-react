import { useForm } from 'react-hook-form';


const ReactHookForm = () => {

    const { register, formState: { errors }, handleSubmit, watch } = useForm();


    /**
     * register: 입력 요소에 연결하기 위한 함수. 이 함수를 통해 입력 요소에 유효성 검사 규칙을 설정
     * watch: 특정 폼 필드의 값을 실시간으로 관찰하는 함수
     * formState: 폼의 상태를 나타내는 객체 (예: errors, isValid, isDirty, isSubmitted 등의 상태를 포함)
     * handleSubmit : 두개의 함수를 받는데 하나는 유효할때 실행디는 함수(필수),
                        하나는 유효하지  않을때 실행되는 함수(선택)
     */

    const onValid = (data) => {
        console.log('onValid', data);

    };
    // const onInVaild = (err) => {
    //     console.log('onInVaild', err);

    // };

    console.log('errors', errors);
    console.log('watch', watch('username'));

    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input type='text' {...register('username', { required:'이름을 입력하세요', minLength:{message:'최소 2글자 입력하세요.', value:2} })} />
                {errors.username?.message}
                <br/>
                <input type='text' {...register('email', {
                                        required:'이메일을 입력하세요',
                                        validate:{useGmail: (v) => v.includes('gmail.com') || 'gmail로만 가입가능합니다.'}
                                    }
                                )} 
                                placeholder='email'

                />
                <br/>
                <input type='text' {...register('password')}/>
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default ReactHookForm