import React, { useState } from 'react'
import { validacao } from '../utils/validacao';

const Form = () => {

    const [nome, setNome] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [email, setemail] = useState('');
    const [senha, setSenha] = useState('');
    const [erros, setErros] = useState<any | Object | null>(null);

    const renderizar = (e) => {
        e.preventDefault();

        setErros(null);

        const dados = {
            nome,
            nomeUsuario,
            email,
            senha,
        }

        const validacaoErros = validacao(dados);

        if (Object.keys(validacaoErros).length > 0) {            
            setErros(validacaoErros);
            return;
        }

        setNome('');
        setNomeUsuario('');
        setemail('');
        setSenha('');

        alert('Obrigado por se escrever.');
        
    }

  return (
    <form onSubmit={renderizar}>
        <div className='flex flex-col py-1 w-96 text-base'>
            <label className='flex flex-col' htmlFor='name'>
                <span>Nome completo</span>
                <input type="text" placeholder='Digite seu nome completo'className='rounded-lg py-1 px-1 text-sm placeholder:text-red-200' 
                value={nome} onChange={(e) => setNome(e.target.value)}/>
            </label>
            {erros?.nome && (
                <small className='text-xs text-red-500 mt-1'>{erros?.nome}</small>
            )}
        </div> 
        <div className='flex flex-col py-1 w-96 text-base'>
            <label className='flex flex-col' htmlFor='username'>
                <span>Nome de usuário</span>
                <input type="text" placeholder='Digite seu nome de acesso'className='rounded-lg py-1 px-1 text-sm placeholder:text-red-200'
                value={nomeUsuario} onChange={(e) => setNomeUsuario(e.target.value)}/>
            </label>
            {erros?.nomeUsuario && (
                <small className='text-xs text-red-500 mt-1'>{erros?.nomeUsuario}</small>
            )}
        </div>
        <div className='flex flex-col py-1 w-96 text-base'>
            <label className='flex flex-col' htmlFor='email'>
                <span>E-mail</span>
                <input  type="email" placeholder='Digite seu e-mail'className='rounded-lg py-1 px-1 text-sm placeholder:text-red-200'
                value={email} onChange={(e) => setemail(e.target.value)}/>
            </label>
            {erros?.email && (
                <small className='text-xs text-red-500 mt-1'>{erros?.email}</small>
            )}
        </div>
        <div className='flex flex-col py-1 w-96 text-base'>
            <label className='flex flex-col' htmlFor='password'>
                <span>Senha</span>
                <input type="password" placeholder='Digite sua senha' className='rounded-lg py-1 px-1 text-sm placeholder:text-red-200'
                value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </label>
            {erros?.senha && (
                <small className='text-xs text-red-500 mt-1'>{erros?.senha}</small>
            )}
        </div>
        <div className='flex flex-col items-center py-1 w-96 text-base mt-2'>
        <button 
            type='submit' 
            className='bg-orange-600 w-40 rounded-lg py-2 px-4 text-white font-medium hover:bg-white hover:text-orange-600 hover:underline'
            >Cadastrar</button>
        </div>
    </form>
  )
}

export default Form