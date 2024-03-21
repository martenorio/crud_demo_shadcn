import { Button } from './../../../components/ui/button'
import { Input } from './../../../components/ui/input'
import { Label } from './../../../components/ui/label'

export const CustomerForm = () => {
  return (
    <div className='flex-1 space-y-8 pt-8 pb-40'>
    <h2 className='text-3xl font-bold tracking-tight'>
      Cliente
    </h2>
    <form>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className="grid gap-2">
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" placeholder="Nombre" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="rfc">RFC</Label>
          <Input id="rfc" placeholder="RFC" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="correo">Correo</Label>
          <Input id="Correo" placeholder="Correo" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="razon">Razón social</Label>
          <Input id="razon" placeholder="Razón social" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="telefono">Teléfono</Label>
          <Input id="telefono" placeholder="Teléfono" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="calle">Calle</Label>
          <Input id="calle" placeholder="Calle" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="municipio">Municipio</Label>
          <Input id="municipio" placeholder="Municipio" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="estado">Estado</Label>
          <Input id="estado" placeholder="Estado" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pais">País</Label>
          <Input id="pais" placeholder="País" />
        </div>
      </div>
      <div className='mt-6 flex gap-6'>
        <Button className='px-8 py-6'>Guardar</Button>
      </div>
    </form>
  </div>
  )
}
