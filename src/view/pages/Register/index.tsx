import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useRegisterController } from './useRegister'
import { PasswordInput } from '../../components/PasswordInput'

export function Register() {
  const { handleFormSubmit, register, errors } = useRegisterController()

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">Crie uma conta</h1>
        <span className="flex gap-2 text-sm">
          Já tem login?
          <button className="text-sm font-medium text-primaryBlue-500 hover:opacity-70 hover:transition-all hover:duration-300">
            <Link to="/login">Faça Login</Link>
          </button>
        </span>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="flex w-full flex-col gap-5 px-5"
      >
        <Input
          placeholder={'Nome'}
          id={'name'}
          type={'text'}
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          placeholder={'E-mail'}
          id={'email'}
          type={'text'}
          error={errors.email?.message}
          {...register('email')}
        />
        <PasswordInput
          placeholder={'Senha'}
          id={'password'}
          type={'password'}
          error={errors.password?.message}
          {...register('password')}
        />
        <Button disabled={false}>Cadastrar</Button>
      </form>
    </div>
  )
}
