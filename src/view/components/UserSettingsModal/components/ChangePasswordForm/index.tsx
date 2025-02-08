import { PasswordInput } from '@/view/components/PasswordInput'
import { useChangePasswordController } from './useChangePasswordController'
import { Button } from '@/view/components/Button'

export function ChangePasswordForm() {
  const { errors, handleFormSubmit, register } = useChangePasswordController()
  return (
    <form
      onSubmit={handleFormSubmit}
      className="mt-0 flex w-full flex-col gap-4"
    >
      <PasswordInput
        placeholderColor="dark"
        placeholder={'Senha atual'}
        error={errors.password?.message}
        {...register('password')}
      />

      <PasswordInput
        placeholderColor="dark"
        placeholder={'Nova senha'}
        error={errors.newPassword?.message}
        {...register('newPassword')}
      />

      <Button className="w-full">Salvar</Button>
    </form>
  )
}
