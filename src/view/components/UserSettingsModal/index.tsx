import { Modal } from '../Modal'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Trash2 } from 'lucide-react'
import { ChangePasswordForm } from './components/ChangePasswordForm'
import { ChangeUserDetailsForm } from './components/ChangeUserDetailsForm'
import { User } from '@/app/entities/User'
import { useUserSettingsModalController } from './useUserSettingsModalController'

interface UserSettingsModalProps {
  open: boolean
  onClose: () => void
  getUserData: User | undefined
}

export function UserSettingsModal({
  open,
  onClose,
  getUserData,
}: UserSettingsModalProps) {
  const { handleDeleteUser } = useUserSettingsModalController({ onClose })

  return (
    <Modal
      rigthAction={{
        actionText: 'Deletar conta',
        description:
          'Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.',

        title: 'Tem certeza que deseja deletar sua conta?',
        triggerIcon: <Trash2 className="h-6 w-6" />,
        handleAction: handleDeleteUser,
      }}
      open={open}
      onClose={onClose}
      className="space-y-4"
    >
      <Tabs defaultValue="account" className="flex w-full flex-col">
        <TabsList className="mb-6 flex w-full gap-4 rounded-md bg-darkBlue-500 p-1">
          <TabsTrigger
            className="w-full rounded-md text-neutral-400 data-[state=active]:bg-primaryBlue-500 data-[state=active]:text-white"
            value="account"
          >
            Conta
          </TabsTrigger>
          <TabsTrigger
            className="w-full rounded-md text-neutral-400 data-[state=active]:bg-primaryBlue-500 data-[state=active]:text-white"
            value="password"
          >
            Senha
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <ChangeUserDetailsForm onClose={onClose} userDetails={getUserData} />
        </TabsContent>

        <TabsContent value="password">
          <ChangePasswordForm onClose={onClose} />
        </TabsContent>
      </Tabs>
    </Modal>
  )
}
