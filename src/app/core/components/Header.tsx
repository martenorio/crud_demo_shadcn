import { Button } from './../../../components/ui/button'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./../../../components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./../../../components/ui/dropdown-menu"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className='container flex h-14 items-center'>
        <div className='mr-4 md:flex'>
          <Link
            to="/login"
            className="mr-6 flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
              <rect width="256" height="256" fill="none"></rect>
              <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
              <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
            </svg>
            <span className="hidden font-bold sm:inline-block">
              Admin
            </span>

          </Link>
          <nav
            className={"hidden md:flex items-center space-x-4 lg:space-x-6"}
          >
            <Link
              to="/empleados"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Empleados
            </Link>
            <Link
              to="/clientes"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Clientes
            </Link>
          </nav>
        </div>
        <div className='flex flex-1 items-center space-x-2 justify-end'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">ADMIN</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admin@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Mi cuenta </DropdownMenuItem>
                <DropdownMenuItem>Configuraciónes </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
