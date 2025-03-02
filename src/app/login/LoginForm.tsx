"use client"
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { login } from './actions'

const LoginForm = () => {
    const [state, loginAction] = useActionState(login, undefined)

    return (
        <form action={loginAction} className='flex max-w-[300px] flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-sm font-medium'>Email</label>
                <input 
                    name="email" 
                    id="email" 
                    placeholder='Email' 
                    className='p-2 border border-gray-300 rounded-md'
                />
                {state?.errors?.email && <p className='text-red-500 text-sm'>{state.errors.email}</p>}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="password" className='text-sm font-medium'>Password</label>
                <input
                    id='password'
                    name='password'
                    placeholder='Password'
                    type='password'
                    className='p-2 border border-gray-300 rounded-md'
                />
                {state?.errors?.password && <p className='text-red-500 text-sm'>{state.errors.password}</p>}
            </div>
            <SubmitButton />
        </form>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button 
            disabled={pending} 
            type="submit" 
            className={`p-2 bg-blue-600 text-white rounded-md ${pending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        >
            {pending ? 'Logging in...' : 'Login'}
        </button>
    )
}

export default LoginForm