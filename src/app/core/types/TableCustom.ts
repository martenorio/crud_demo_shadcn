import { ReactNode } from "react";

export type aling = "center" | "inherit" | "left" | "right" | "justify" | undefined;

export interface Table {
    align?: aling,
    colSpan?: number | undefined,
}
export interface dataTable extends Table{
    data: ReactNode | string;
    keyPropertie?: string;
    keyIsNumber?: boolean;
}
export interface DataTableBody<T> extends Table{
    data: ((value:T) => (string) | ReactNode | string),
    style?: string,
}
export interface DataTableFooter<T> extends Table{
    data: ((value:T[]) => string | ReactNode | string)
}

export interface CatalogStandardProps<T> {
    title: string | JSX.Element
    MainData: T[],
    loading: boolean,
    headersRows: Array<dataTable>,
    bodyRows: Array<DataTableBody<T>>,
    footerRows?: Array<DataTableFooter<T>>,
    showColumId:boolean,
    filter: {
        setModalFilterSate?: (state: boolean) => void,
        showFilter?: boolean
    }
    reload: {
        reloadData?: (force: boolean) => void,
        showReload?: boolean
    }
    initialValues?:{
        rowsPerPageDefault:number
    }
    tableSX?: string | undefined
}
export interface TableBasicPropTypes<T> {
  data:Array<T>
  headersRows:Array<dataTable>,
  bodyRows:Array<DataTableBody<T>>,
  footerRows?: Array<DataTableFooter<T>>,
  rowsPerPage: number,
  page: number,
  showColumId:boolean,
  orderBy: keyof T | undefined,
  order:"desc" | "asc",
  shortData:(column: dataTable) => void,
  style?:string | undefined
}