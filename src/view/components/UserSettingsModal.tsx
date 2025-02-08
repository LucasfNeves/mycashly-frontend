import { Input } from './Input'
import { Button } from './Button'
import { PasswordInput } from './PasswordInput'
import { Modal } from './Modal'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Trash2 } from 'lucide-react'

interface UserSettingsModalProps {
  open: boolean
  onClose: () => void
}

export function UserSettingsModal({ open, onClose }: UserSettingsModalProps) {
  return (
    <Modal
      rigthAction={{
        actionText: 'Deletar conta',
        description:
          'Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.',

        title: 'Tem certeza que deseja deletar sua conta?',
        triggerIcon: <Trash2 className="h-6 w-6" />,
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

        <TabsContent
          className="mt-0 flex w-full flex-col gap-4"
          value="account"
        >
          <Input
            placeholderColor="dark"
            name={''}
            type={''}
            placeholder={'Nome'}
          />

          <Input
            placeholderColor="dark"
            name={''}
            type={''}
            placeholder={'Email'}
          />

          <Button className="w-full">Salvar</Button>
        </TabsContent>

        <TabsContent
          className="mt-0 flex w-full flex-col gap-4"
          value="password"
        >
          <PasswordInput
            placeholderColor="dark"
            name={''}
            placeholder={'Senha atual'}
          />

          <PasswordInput
            placeholderColor="dark"
            name={''}
            placeholder={'Nova senha'}
          />

          <Button className="w-full">Salvar</Button>
        </TabsContent>
      </Tabs>
    </Modal>
  )
}
