import { useDeleteUser } from '@/app/hooks/services/users/useDeleteUser'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

interface UserSettingsModalController {
  onClose: () => void
}

export function useUserSettingsModalController({
  onClose,
}: UserSettingsModalController) {
  const queryClient = useQueryClient()

  const { deleteUserMutation } = useDeleteUser()

  const handleDeleteUser = async () => {
    try {
      await deleteUserMutation()

      toast.success('Usuário deletado com sucesso')
      localStorage.clear()
      onClose()
      queryClient.invalidateQueries({ queryKey: ['users', 'me'] })
    } catch {
      toast.error('Erro ao deletar usuário')
    }
  }

  return {
    handleDeleteUser,
  }
}
