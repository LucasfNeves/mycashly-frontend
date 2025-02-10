import { z } from 'zod'
import { newTransactionModalSchema } from './../../../../../app/schemas/newTransactionModalSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

type FormData = z.infer<typeof newTransactionModalSchema>

export function useNewTransactionModalController() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newTransactionModalSchema),
    defaultValues: {
      date: new Date(),
    },
  })

  const handleFormSubmit = handleSubmit((data) => {
    toast.success('Transação criada com sucesso!')
    console.log(data)
  })

  return {
    register,
    errors,
    handleFormSubmit,
    control,
  }
}
