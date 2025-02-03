import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useLoginController } from './useLoginController'
import { PasswordInput } from '../../components/PasswordInput'

export function Login() {
  const { handleFormSubmit, register, errors, isPendingSignIn } =
    useLoginController()

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">Entre em sua conta</h1>
        <span className="flex gap-2 text-sm">
          Novo por aqui?
          <button className="text-sm font-medium text-primaryBlue-500 hover:opacity-70 hover:transition-all hover:duration-300">
            <Link to="/register">Crie um conta</Link>
          </button>
        </span>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="flex w-full max-w-[37.5rem] flex-col gap-5 px-5"
      >
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
        <Button isLoading={isPendingSignIn}>Acessar</Button>
      </form>
    </div>
  )
}
