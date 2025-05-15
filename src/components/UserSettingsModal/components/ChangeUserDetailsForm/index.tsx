import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useChangeUserDetailsController } from './useChangeUserDetailsController'
import { User } from '@/app/entities/User'

interface ChangeUserDetailsFormProps {
  userDetails?: User
  onClose: () => void
}

export function ChangeUserDetailsForm({
  userDetails,
  onClose,
}: ChangeUserDetailsFormProps) {
  const { errors, handleFormSubmit, register, isPendingUpdateUser } =
    useChangeUserDetailsController({ userDetails, onClose })

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mt-0 flex w-full flex-col gap-4"
    >
      <Input
        placeholderColor="dark"
        type="text"
        placeholder={'Nome'}
        error={errors.name?.message}
        {...register('name')}
      />

      <Input
        placeholderColor="dark"
        type="email"
        placeholder={'Email'}
        error={errors.email?.message}
        {...register('email')}
      />

      <Button isLoading={isPendingUpdateUser} className="w-full">
        Salvar
      </Button>
    </form>
  )
}
