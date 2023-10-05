import { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function Practice1 () {

    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    const onValid = (data) => {
        console.log('onValid', data);

    };

    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input type='text' {...register('username', { required:'이름을 입력하세요', minLength:{message:'최소 2글자 입력하세요.', value:2} })
                } 
                placeholder='userName'
                />
                {errors.username && errors.username?.message && <span style={{color:'red'}}> {errors.username?.message}</span>}
                <br/>
                <input type='number' {...register('userage', { required:'나이를 입력하세요', 
                                                                min:{message:'0이상의 숫자만 가능합니다.', value:0},
                                                                max:{message:'100이하의 숫자만 가능합니다.', value:100},  
                                })} 
                                placeholder='age' 
                />
                {errors.userage && errors.userage?.message && <span style={{color:'red'}}> {errors.userage?.message}</span>}
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}