import { Button } from '@/view/components/Button'
import { SliderMonths } from '@/view/components/SliderMonths'
import { PlusCircleIcon } from 'lucide-react'

export function Transactions() {
  return (
    <div className="flex min-h-screen flex-col gap-16">
      <header className="flex flex-col items-center justify-between gap-16">
        <div className="flex w-full items-center justify-end">
          <Button className="flex gap-2 px-6">
            Adicionar Transação <PlusCircleIcon />
          </Button>
        </div>

        <div className="w-full">
          <SliderMonths />
        </div>
      </header>

      <section className="flex flex-col gap-8">
        <header className="flex items-center justify-between gap-4">
          <h1 className="text-xl text-neutral-300">Transações</h1>
        </header>
        <main className="flex w-full flex-col items-start justify-start gap-4 rounded-md bg-darkBlue-700 p-4">
          <div className="flex w-full items-center justify-between rounded-md bg-darkBlue-600 p-3">
            <div className="flex flex-col items-center gap-1">
              <p className="flx-1 w-full text-start text-sm font-bold text-white">
                Almoço
              </p>
              <small className="w-full text-start text-[12px] text-neutral-300">
                04/06/2023
              </small>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-base text-red-500"> - R$ 20,00</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-between rounded-md bg-darkBlue-600 p-3">
            <div className="flex flex-col items-center gap-1">
              <p className="flx-1 w-full text-start text-sm font-bold text-white">
                Salário
              </p>
              <small className="w-full text-start text-[12px] text-neutral-300">
                04/06/2023
              </small>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-base text-green-500"> R$ 20,00</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between rounded-md bg-darkBlue-600 p-3">
            <div className="flex flex-col items-center gap-1">
              <p className="flx-1 w-full text-start text-sm font-bold text-white">
                Salário
              </p>
              <small className="w-full text-start text-[12px] text-neutral-300">
                04/06/2023
              </small>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-base text-green-500"> R$ 20,00</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-between rounded-md bg-darkBlue-600 p-3">
            <div className="flex flex-col items-center gap-1">
              <p className="flx-1 w-full text-start text-sm font-bold text-white">
                Almoço
              </p>
              <small className="w-full text-start text-[12px] text-neutral-300">
                04/06/2023
              </small>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-base text-red-500"> - R$ 20,00</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-between rounded-md bg-darkBlue-600 p-3">
            <div className="flex flex-col items-center gap-1">
              <p className="flx-1 w-full text-start text-sm font-bold text-white">
                Almoço
              </p>
              <small className="w-full text-start text-[12px] text-neutral-300">
                04/06/2023
              </small>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-base text-red-500"> - R$ 20,00</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-between rounded-md bg-darkBlue-600 p-3">
            <div className="flex flex-col items-center gap-1">
              <p className="flx-1 w-full text-start text-sm font-bold text-white">
                Almoço
              </p>
              <small className="w-full text-start text-[12px] text-neutral-300">
                04/06/2023
              </small>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-base text-red-500"> - R$ 20,00</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-between rounded-md bg-darkBlue-600 p-3">
            <div className="flex flex-col items-center gap-1">
              <p className="flx-1 w-full text-start text-sm font-bold text-white">
                Almoço
              </p>
              <small className="w-full text-start text-[12px] text-neutral-300">
                04/06/2023
              </small>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-base text-red-500"> - R$ 20,00</p>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}
