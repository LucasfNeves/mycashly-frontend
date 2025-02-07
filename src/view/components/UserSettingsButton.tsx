import { Settings2, X } from 'lucide-react'
import * as RdxDialog from '@radix-ui/react-dialog'
import { cn } from '@/app/utils/cn'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from './Input'
import { Button } from './Button'
import { PasswordInput } from './PasswordInput'
import { PopupAlert } from './PopupAlert'

export function UserSettingsButton() {
  return (
    <RdxDialog.Root>
      <RdxDialog.Trigger className="flex min-w-32 max-w-52 items-center gap-3 rounded-full bg-darkBlue-700 p-2 text-white transition-all hover:cursor-pointer hover:bg-darkBlue-600 hover:duration-300">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primaryBlue-500">
          LF
        </div>

        <div className="flex flex-1 flex-col overflow-hidden">
          <span className="w-full truncate text-start text-sm font-medium">
            Lucas
          </span>
          <small className="w-full truncate text-start text-xs text-gray-400">
            lucasfarias.ln@gmail.com
          </small>
        </div>

        <Settings2 className="h-6 flex-shrink-0 text-primaryBlue-500" />
      </RdxDialog.Trigger>
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn(
            'fixed inset-0 z-50 overflow-y-auto bg-darkBlue-800/80 backdrop-blur-sm transition-all duration-300',
            'data-[state=open]:animate-overlay-show',
          )}
        >
          <RdxDialog.Content className="absolute left-1/2 top-1/2 w-[90%] max-w-[400px] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-darkBlue-600 p-6 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] lg:w-full">
            <header className="mb-4 flex w-full items-center justify-between">
              <RdxDialog.Close asChild>
                <button className="flex appearance-none items-center justify-center text-neutral-200 transition-all hover:text-neutral-400 hover:duration-300">
                  <X className="h-6" />
                </button>
              </RdxDialog.Close>
              <PopupAlert
                actionText={'Deletar conta'}
                description={
                  'Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.'
                }
                title={'Tem certeza que deseja deletar sua conta?'}
                triggerText={'Deletar conta'}
              />
            </header>
            <Tabs defaultValue="account" className="flex w-full flex-col">
              <TabsList className="mb-6 flex w-full bg-darkBlue-500">
                <TabsTrigger
                  className="w-full text-neutral-400 data-[state=active]:bg-primaryBlue-500 data-[state=active]:text-white"
                  value="account"
                >
                  Conta
                </TabsTrigger>
                <TabsTrigger
                  className="w-full text-neutral-400 data-[state=active]:bg-primaryBlue-500 data-[state=active]:text-white"
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
          </RdxDialog.Content>
        </RdxDialog.Overlay>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  )
}
