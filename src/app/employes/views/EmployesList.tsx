/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTableCustom } from '@/app/core/hooks/UseTable'
import { USERSLIST } from '../utils/DataFakeEmployes';
import { DataTableBody, DataTableFooter, TableBasicPropTypes, dataTable } from '@/app/core/types/TableCustom';
import { TableCustom } from '@/app/core/components/TableCustom';
import { Paginator } from '@/app/core/components/Paginador';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

export const EmployesList = () => {
  // const {
  //   data, dataPage, myFilter, setMyFilter,
  //   page, rowsPerPage, handleChangePage, handleChangeRowsPerPage,
  //   order, orderBy, shortData, setOrder, setOrderBy, stepList,
  //   getColumFilter, columsFilter, setColumsFilter, handleChangeColValue,
  // } = useTableCustom({ dataSource: USERSLIST });
  const {
    data, dataPage, 
    page, rowsPerPage, handleChangePage, handleChangeRowsPerPage,
    order, orderBy, shortData, stepList,
  } = useTableCustom({ dataSource: USERSLIST });
  const headersRows: Array<dataTable> = [
    // { data: "Id", keyPropertie: "Id" },
    { data: "Nombre", keyPropertie: "Nombre" },
    { data: "RFC", keyPropertie: "RFC" },
    { data: "Nómina", keyPropertie: "Nomina" },
    { data: "Correo", keyPropertie: "Correo" },
    { data: "Teléfono", keyPropertie: "Telefono" },
    { data: "Calle", keyPropertie: "Calle" },
    { data: "Municipio", keyPropertie: "Municipio" },
    { data: "Estado", keyPropertie: "Estado" },
    { data: "País", keyPropertie: "Pais" },
    { data: "Puesto", keyPropertie: "Puesto" },
    { data: "Comisión", keyPropertie: "Comision" },
  ];
  const bodyRows: Array<DataTableBody<typeof USERSLIST[0]>> = [
    // { data: (d) => d.Id, style:'whitespace-nowrap'},
    { data: (d) => d.Nombre },
    { data: (d) => d.RFC },
    { data: (d) => d.Nomina },
    { data: (d) => d.Correo },
    { data: (d) => d.Telefono, style: 'whitespace-nowrap' },
    { data: (d) => d.Calle, style: 'whitespace-nowrap' },
    { data: (d) => d.Municipio, style: 'whitespace-nowrap' },
    { data: (d) => d.Estado, style: 'whitespace-nowrap' },
    { data: (d) => d.Pais, style: 'whitespace-nowrap' },
    { data: (d) => d.Puesto },
    { data: (d) => d.Comision },
  ]
  const footerRows: Array<DataTableFooter<typeof USERSLIST[0]>> = [];
  const propsTableBasic: TableBasicPropTypes<typeof USERSLIST[0]> = {
    data: dataPage(), headersRows, bodyRows, footerRows, rowsPerPage,
    page, showColumId: false, orderBy, order, shortData, style: ""
  }
  return (
    <div className='flex-1 space-y-8 pt-8 pb-40'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold tracking-tight'>
          Empleados
        </h2>
        <Link to="/empleado">
          <Button variant="secondary">
            <PlusIcon className="mr-2 h-4 w-4" />Nuevo
          </Button>
        </Link>
      </div>
      <div className='border rounded dark:border-slate-700'>
        <TableCustom {...propsTableBasic} />
      </div>
      <Paginator
        data={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        stepList={stepList}
      />
    </div>
  )
}
