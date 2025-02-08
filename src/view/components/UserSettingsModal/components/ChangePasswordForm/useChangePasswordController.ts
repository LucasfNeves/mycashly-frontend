import { changePasswordSchema } from '@/app/schemas/updateUserSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FormData = z.infer<typeof changePasswordSchema>

export function useChangePasswordController() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(changePasswordSchema),
  })

  const handleFormSubmit = handleSubmit((data: FormData) => {
    console.log(data)
  })

  return {
    register,
    handleFormSubmit,
    errors,
  }
}
