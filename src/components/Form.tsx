import React from 'react'

const Form = () => {
  return (
    <form>
        <div className='flex flex-col py-1 w-96 text-base'>
            <label className='flex flex-col' htmlFor='name'>
                <span>Nome completo</span>
                <input type="text" placeholder='Digite seu nome completo'className='rounded-lg py-1 px-1 text-sm placeholder:text-red-200'/>
            </label>
        </div> 
        <div className='flex flex-col py-1 w-96 text-base'>
            <label className='flex flex-col' htmlFor='username'>
                <span>Nome de usuário</span>
                <input type="text" placeholder='Digite seu nome de acesso'className='rounded-lg py-1 px-1 text-sm placeholder:text-red-200'/>
            </label>
        </div>
        <div className='flex flex-col py-1 w-96 text-base'>
            <label className='flex flex-col' htmlFor='email'>
                <span>E-mail</span>
                <input  type="email" placeholder='Digite seu e-mail'className='rounded-lg py-1 px-1 text-sm placeholder:text-red-200'/>
            </label>
        </div>
        <div className='flex flex-col py-1 w-96 text-base'>
            <label className='flex flex-col' htmlFor='password'>
                <span>Senha</span>
                <input type="password" placeholder='Digite sua senha' className='rounded-lg py-1 px-1 text-sm placeholder:text-red-200'/>
            </label>
        </div>
        <div className='flex flex-col items-center py-1 w-96 text-base mt-2'>
        <button type='submit' className='bg-orange-600 w-40 rounded-lg py-2 px-4 text-white font-medium hover:bg-white hover:text-orange-600 hover:underline'>Cadastrar</button>
        </div>
    </form>
  )
}

export default Form