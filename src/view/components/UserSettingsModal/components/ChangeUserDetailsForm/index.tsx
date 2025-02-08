import { Button } from '@/view/components/Button'
import { Input } from '@/view/components/Input'
import { useChangeUserDetailsController } from './useChangeUserDetailsController'

export function ChangeUserDetailsForm() {
  const { errors, handleFormSubmit, register } =
    useChangeUserDetailsController()
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
