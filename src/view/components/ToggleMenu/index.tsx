import { Logo } from '../Logo'
import { ButtonNavigate } from '../ButtonNavigate'
import { cn } from '@/app/lib/utils'
import { ExitButton } from '../ExitButton'
import { ButtonMenu } from '../ButtonMenu'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import { UserSettingsButton } from '../UserSettingsButton'
import { useToggleMenuController } from './useToggleMenuController'
import { UserSettingsModal } from '../UserSettingsModal'
import { Link } from 'react-router-dom'

export function ToggleMenu() {
  const {
    getUserData,
    handleUserSettingsModalOpen,
    userSettingsModalOpen,
    handleUserSettingsModalClose,
    open,
    setOpen,
    toggleMenu,
  } = useToggleMenuController()

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="items-between fixed left-0 right-0 top-0 z-[50] flex h-16 w-full flex-col justify-center bg-darkBlue-800 p-4"
    >
      <header className="relative flex h-full w-full items-center justify-between">
        <Link to="/">
          <figure>
            <Logo className="w-36" />
          </figure>
        </Link>

        <div className="flex items-center justify-end gap-4">
          <UserSettingsButton
            getUserData={getUserData}
            onClick={handleUserSettingsModalOpen}
          />

          <ButtonMenu
            title={!open ? 'Abrir Menu' : 'Fechar Menu'}
            open={open}
            setOpen={setOpen}
          />
        </div>
      </header>

      <CollapsibleContent
        forceMount
        className={cn(
          'fixed inset-0 flex h-full w-full bg-darkBlue-600/90 backdrop-blur-lg transition-all duration-300 ease-in-out data-[state=closed]:hidden',
          !open ? 'animate-slideOutRight' : 'animate-slideInRightToLeft',
        )}
      >
        <div className="z-45 flex w-full flex-col items-center justify-between gap-4 rounded-md px-8 py-24">
          <nav className="flex w-full flex-col gap-6">
            <ButtonNavigate onClick={toggleMenu} to={'/'}>
              Dashboard
            </ButtonNavigate>
            <ButtonNavigate onClick={toggleMenu} to={'/transactions'}>
              Transações
            </ButtonNavigate>
          </nav>

          <div className="flex w-full items-center justify-start">
            <ExitButton />
          </div>
        </div>

        <UserSettingsModal
          getUserData={getUserData}
          open={userSettingsModalOpen}
          onClose={handleUserSettingsModalClose}
        />
      </CollapsibleContent>
    </Collapsible>
  )
}
