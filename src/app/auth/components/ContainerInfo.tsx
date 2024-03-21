
export const ContainerInfo = () => {
  return (
    <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div className="absolute inset-0 bg-zinc-900" />
      <div className="relative z-20 flex items-center text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-6 w-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        Empresa
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <p className="text-lg">
            &ldquo;Nuestra misión es proporcionar productos/servicios de alta calidad que satisfagan las necesidades y superen las expectativas de nuestros clientes. Nos comprometemos a operar con integridad, innovación y responsabilidad social, buscando constantemente mejorar y crecer de manera sostenible. Buscamos ser líderes en nuestra industria, creando valor para nuestros accionistas, empleados y comunidades en las que operamos.&rdquo;
          </p>
          <footer className="text-sm">Misión</footer>
        </blockquote>
      </div>
    </div>
  )
}
