import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const FormLogin = () => {
  return (
    <div className={cn("grid gap-6")} >
      <form>
        <div className="grid gap-3">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Correo
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Correo
            </Label>
            <Input
              id="password"
              placeholder="contraseña"
              type="password"
              autoComplete="password"
            />
          </div>
          <Link to="/empleados" className="w-full">
            <Button className="w-full">
              {/* {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )} */}
              Iniciar sesión
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
