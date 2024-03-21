import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./../../../components/ui/table"
import { TableBasicPropTypes } from '../types/TableCustom'
import { ArrowUpIcon, ArrowDownIcon } from '@radix-ui/react-icons'
import React from "react"
// import { NotFound } from "./NotFound"

export const TableCustom = <T extends Partial<T>>({ data, headersRows, bodyRows, footerRows, showColumId, rowsPerPage, page, order, orderBy, shortData }: TableBasicPropTypes<T>) => {
  const myDirection = (keyPropertie: string | undefined) => {
    return (orderBy === keyPropertie) ? order : undefined;
  }

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
          {
            showColumId && <TableHead></TableHead>
          }
          {
            headersRows.map((v, i) => (
              <TableHead key={i} onClick={() => shortData(v)} className="whitespace-nowrap">
                {
                  (typeof v.data === "string" && !React.isValidElement(v.data) && !(v.keyPropertie)) && v.data
                }
                {
                  (React.isValidElement(v.data)) && v.data
                }
                {
                  (!React.isValidElement(v.data) && v.keyPropertie) &&
                  <div className="flex items-center gap-1">
                    {(typeof v.data === "string") && v.data}
                    {
                      ((orderBy === v.keyPropertie && myDirection(v.keyPropertie) === "asc") && <ArrowUpIcon />)
                    }
                    {
                      ((orderBy === v.keyPropertie && myDirection(v.keyPropertie) === "desc") && <ArrowDownIcon />)
                    }
                  </div>
                }
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          data.
            map((r, i) => (
              <TableRow key={i}>
                {
                  showColumId && <TableCell>{(rowsPerPage * (page)) - (rowsPerPage) + i + 1}</TableCell>
                }
                {
                  bodyRows.map((body, i) =>
                    <TableCell key={i} className={body.style} >
                      {(typeof body.data === "function") && body.data(r)}
                      {(typeof body.data !== "function") && body.data}
                    </TableCell>
                  )
                }
              </TableRow>
            ))
        }
        {
          data.length === 0 && (
            <TableRow>
              <TableCell colSpan={headersRows.length  + ((showColumId) ? 1 : 0)}>
                {/* <NotFound /> */}
              </TableCell>
            </TableRow>
          )
        }
      </TableBody>
      {
        (footerRows && footerRows.length > 0) &&
        <TableFooter>
          <TableRow>
            {
              showColumId && <TableCell></TableCell>
            }
            {
              footerRows.map((v, i) => (
                <TableCell colSpan={v.colSpan || undefined} key={i} >
                  {(typeof v.data === "function") && v.data(data)}
                  {(typeof v.data !== "function") && v.data}
                </TableCell>
              ))
            }
          </TableRow>
        </TableFooter>
      }
    </Table>
  )
}