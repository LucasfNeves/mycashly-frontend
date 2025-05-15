import { Outlet } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import authenticationBackgroundImage from './../assets/images/authentication-background.png'

export function AuthLayout() {
  return (
    <div className="grid h-screen w-screen grid-cols-1 lg:grid-cols-2">
      <section className="absolute inset-0 z-50 flex h-full w-full flex-col items-center justify-center gap-12 p-3 text-white lg:relative lg:col-span-1 lg:bg-darkBlue">
        <Logo className="h-10" />

        <Outlet />
      </section>

      <div className="relative h-full w-full">
        <img
          src={authenticationBackgroundImage}
          alt="Imagem de fundo"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-darkBlue/90 backdrop-blur-[2px] lg:bg-darkBlue/70"></div>
      </div>
    </div>
  )
}
