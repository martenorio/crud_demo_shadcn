import { Button } from "@/components/ui/button"
import { FormLogin } from './FormLogin'

export const ContainerLogin = () => {
  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Iniciar sesión
          </h1>
          <p className="text-sm text-muted-foreground">
            Ingresa tus credenciales para acceder al portal
          </p>
        </div>
        <FormLogin />
        <div className="px-8 text-center text-sm">
          <Button
            variant="link"
            className="underline underline-offset-4 hover:text-primary"
          >
            Ólvide mis credenciales
          </Button>
        </div>
      </div>
    </div>
  )
}
