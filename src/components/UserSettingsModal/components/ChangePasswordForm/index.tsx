import { PasswordInput } from '@/components/PasswordInput'
import { useChangePasswordController } from './useChangePasswordController'
import { Button } from '@/components/Button'

interface ChangePasswordFormProps {
  onClose: () => void
}

export function ChangePasswordForm({ onClose }: ChangePasswordFormProps) {
  const { errors, handleFormSubmit, register, isPendingUpdatePassword } =
    useChangePasswordController({ onClose })
  return (
    <form
      onSubmit={handleFormSubmit}
      className="mt-0 flex w-full flex-col gap-4"
    >
      <PasswordInput
        placeholderColor="dark"
        placeholder={'Senha atual'}
        error={errors.currentPassword?.message}
        {...register('currentPassword')}
      />

      <PasswordInput
        placeholderColor="dark"
        placeholder={'Nova senha'}
        error={errors.newPassword?.message}
        {...register('newPassword')}
      />

      <Button isLoading={isPendingUpdatePassword} className="w-full">
        Salvar
      </Button>
    </form>
  )
}
