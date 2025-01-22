import { Outlet } from 'react-router-dom'
import { Logo } from '../view/components/Logo'
import authenticationBackgroundImage from './../assets/images/authentication-background.png'

export function AuthLayout() {
  return (
    <div className="grid h-screen w-screen grid-cols-1 lg:grid-cols-2">
      <section className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-12 bg-darkBlue/90 p-3 text-white backdrop-blur-sm lg:relative lg:col-span-1 lg:flex lg:bg-darkBlue">
        <Logo className="h-10" />

        <Outlet />
      </section>

      <div className="bg-darkBlue-dark/90 h-screen w-full lg:relative">
        <img
          src={authenticationBackgroundImage}
          alt="Imagem de fundo"
          className="h-full w-full object-cover"
        />
        <div className="hidden backdrop-blur-[2px] lg:absolute lg:inset-0 lg:block lg:bg-darkBlue/70"></div>
      </div>
    </div>
  )
}
