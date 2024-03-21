// import { Button } from '@/'
import { Input } from './../../../components/ui/input'
import { Label } from './../../../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './../../../components/ui/select'
import { Button } from '../../../components/ui/button'

export const EmployesForm = () => {
  return (
    <div className='flex-1 space-y-8 pt-8 pb-40'>
      <h2 className='text-3xl font-bold tracking-tight'>
        Empleado
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
            <Label htmlFor="nomina">Nómina</Label>
            <Input id="nomina" placeholder="Nómina" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="correo">Correo</Label>
            <Input id="Correo" placeholder="Correo" />
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
          <div className="grid gap-2">
            <Label htmlFor="puesto">Puesto</Label>
            <Select defaultValue="1">
              <SelectTrigger id="puesto">
                <SelectValue placeholder="Selecciona un puesto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Puesto 1</SelectItem>
                <SelectItem value="2">Puesto 2</SelectItem>
                <SelectItem value="3">Puesto 3</SelectItem>
                <SelectItem value="4">Puesto 4</SelectItem>
                <SelectItem value="5">Puesto 5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="comision">Comisión</Label>
            <Select defaultValue="1">
              <SelectTrigger id="comision">
                <SelectValue placeholder="Selecciona una comisión" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Comisión 1</SelectItem>
                <SelectItem value="2">Comisión 2</SelectItem>
                <SelectItem value="3">Comisión 3</SelectItem>
                <SelectItem value="4">Comisión 4</SelectItem>
                <SelectItem value="5">Comisión 5</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='mt-6 flex gap-6'>
          <Button className='px-8 py-6'>Guardar</Button>
        </div>
      </form>
    </div>
  )
}
