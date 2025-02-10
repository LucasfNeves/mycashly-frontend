import { changeUserDetailsSchema } from '@/app/schemas/updateUserSchemas'
import { User } from '@/app/entities/User'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface UseChangeUserDetailsController {
  userDetails?: User
}

type FormData = z.infer<typeof changeUserDetailsSchema>

export function useChangeUserDetailsController({
  userDetails,
}: UseChangeUserDetailsController) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(changeUserDetailsSchema),
    defaultValues: {
      name: userDetails?.name,
      email: userDetails?.email,
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
