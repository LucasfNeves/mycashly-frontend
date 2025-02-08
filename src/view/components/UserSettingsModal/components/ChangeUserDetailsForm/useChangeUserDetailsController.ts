import { USER } from '@/app/config/constants'
import { changeUserDetailsSchema } from '@/app/schemas/updateUserSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FormData = z.infer<typeof changeUserDetailsSchema>

export function useChangeUserDetailsController() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(changeUserDetailsSchema),
    defaultValues: {
      name: USER.name,
      email: USER.email,
    },
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
