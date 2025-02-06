import { z } from 'zod'
import { newTransactionModalSchema } from './../../../../../app/schemas/newTransactionModalSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type FormData = z.infer<typeof newTransactionModalSchema>

export function useNewTransactionModalController() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newTransactionModalSchema),
  })

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return {
    register,
    errors,
    handleFormSubmit,
    control,
  }
}
