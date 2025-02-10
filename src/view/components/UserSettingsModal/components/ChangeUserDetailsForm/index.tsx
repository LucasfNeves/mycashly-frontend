import { Button } from '@/view/components/Button'
import { Input } from '@/view/components/Input'
import { useChangeUserDetailsController } from './useChangeUserDetailsController'
import { User } from '@/app/types/user'

interface ChangeUserDetailsFormProps {
  userDetails?: User
}

export function ChangeUserDetailsForm({
  userDetails,
}: ChangeUserDetailsFormProps) {
  const { errors, handleFormSubmit, register } = useChangeUserDetailsController(
    { userDetails },
  )

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

      <Button className="w-full">Salvar</Button>
    </form>
  )
}
