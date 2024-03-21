import { Button } from './../../../components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './../../../components/ui/select'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
// import { Select } from '@radix-ui/react-select'
import { FC } from 'react'
interface PaginatorTableProps {
  data: number,
  page: number,
  rowsPerPage: number,
  stepList: Array<number>,
  handleChangePage: (event: unknown, newPage: number) => void,
  handleChangeRowsPerPage: (value: number) => void,
}

export const Paginator: FC<PaginatorTableProps> = ({ data, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, stepList }) => {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground uppercase">
        Total de registros: {data}
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm uppercase">Resultados por página</p>
          <Select
            value={rowsPerPage.toString()}
            onValueChange={(value) => handleChangeRowsPerPage(Number(value))}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={rowsPerPage} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20, 30, 40, 50, 100].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm uppercase">
          Página {page}  de {stepList[stepList.length - 1]}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => handleChangePage(
              undefined,
              (stepList.length > 0 && (page - 1) >= 1 ) ? (page - 1) : page
            )
            }
            disabled={(stepList.length === 0 && page === 1 )}
          // disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          {
            stepList.map((value, i) => (
              <Button
              key={i}
                variant={(page === value) ? "default" : "outline"}
                className={"h-8 w-8 p-0"}
                onClick={() => handleChangePage(undefined, value)}
                disabled={value === -1}
              >
                <span className="sr-only">List of pages</span>
                {value === -1 && ("...")}
                {value !== -1 && value}
              </Button>
            ))
          }
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={
              () => handleChangePage(
                undefined,
                (stepList.length > 0 && page < stepList[stepList.length - 1])
                  ? (page + 1) : (page)
              )
            }
            disabled={
              (stepList.length === 0 || page === stepList[stepList.length - 1])
            }
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}