import { useState } from "react";
import { dataTable } from "../types/TableCustom";
interface columsFilterType<T> {
    column: keyof T,
    filter: string,
    label?: string
}

export const useTableCustom = <T extends Partial<T>>({ dataSource }: PropsPaginator<T>) => {
    const [myFilter, setMyFilter] = useState('');
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(20);
    const [order, setOrder] = useState<'asc' | 'desc'>("asc");
    const [orderBy, setOrderBy] = useState<keyof T>();
    const [isNumberKey, setIsNumberKey] = useState(false);

    const [columsFilter, setColumsFilter] = useState<Array<columsFilterType<T>>>([])

    // console.log(dataSource)
    // useEffect(() => {
    //     console.log("Update step list");
    //     const dataPag = paginatorData(getData());
    //     console.log(dataPag);
    //     setStepList(dataPag)
    // }, [dataSource])

    const handleChangeColValue = (col: keyof T, value: string) => {
        setColumsFilter((prev) => {
            const register = prev.find(v => v.column === col)
            if (register) {
                const record = { ...register, filter: value };
                return prev.map((_pr) => {
                    if (_pr.column !== register.column) return { ..._pr, "filter": "" };
                    return record
                })
            }
            return [...prev]
        });
    }
    const handleChangePage = (_event: unknown, _newPage: number) => {
        setPage(_newPage);
    };

    const handleChangeRowsPerPage = (rows: number) => {
        setRowsPerPage(rows);
        setPage(1);
    };
    const getColumFilter = (column: keyof T) => {
        const arrayColumn = dataSource.map(d => d[column])
        return Array.from(new Set(arrayColumn));
    }
    const filterColumns = (data: Array<T>) => {
        return data.filter((d: { [s: string]: unknown; } | ArrayLike<unknown>) => {
            if (typeof d === "object") {
                if (columsFilter.length === 0) return true;
                return Object.entries(d).
                    some(v =>
                        columsFilter.some(column => {
                            return v[0] === column.column && column.filter === v[1]
                                ||
                                (column.filter === "-1")
                        }
                        )
                    );
            }
        })
    }
    const filter = (term: string): Array<T> => {
        const filter = term.trim().toLowerCase();
        return dataSource.filter((d: { [s: string]: unknown; } | ArrayLike<unknown>) => {
            if (typeof d === "object") {
                const arrayValues = Object.entries(d).map(v => v[1]);
                const result = arrayValues.find(v => ("" + v).toString().toLowerCase().includes(filter));
                return Boolean(result);
            }
            // d.LINEA.toLowerCase().includes(filter)||d.MODELO.toLowerCase().includes(filter)||d.CICLO.toLowerCase().includes(filter)
        });
    }
    const shortData = (column: dataTable) => {
        const newOrder = order === "asc" ? "desc" : "asc";
        setOrder(newOrder);
        const key = column.keyPropertie as keyof T;
        const isNumerkeyCol = column.keyIsNumber ? column.keyIsNumber : false;
        setOrderBy(key);
        setIsNumberKey(isNumerkeyCol)
    }
    const tableSort = (data: Array<T>) => {
        return data.sort((a, b) => {
            if (!orderBy) return 0;
            const valueB = isNumberKey ? Number(b[orderBy]) : b[orderBy];
            const valueA = isNumberKey ? Number(a[orderBy]) : a[orderBy];
            if (order === "desc") {
                return (valueB > valueA) ? -1 : ((valueB < valueA) ? 1 : 0);
            } else if (order === "asc") {
                return (valueB < valueA) ? -1 : ((valueB > valueA) ? 1 : 0);
            }
            return 0;
        })
    }
    const getPaginateData = (data: Array<T>) => {
        return data.filter((_v, i) => (
            (i + 1) >= (rowsPerPage * page) - (rowsPerPage - 1) && (i + 1) <= (rowsPerPage * page))
        )
    }
    const getData = (): Array<T> => {
        const dataFilter = filter(myFilter);
        const shortedData = tableSort(dataFilter);
        const filterColums = filterColumns(shortedData);
        // return shortedData;
        return filterColums;
    }
    const getDataPage = () => {
        const shortedData = getData();
        return getPaginateData(shortedData)
    }
    //Method to generate pagination
    const paginatorData = (data: Array<T>): number[] => {
        let arrayPaginator: number[] = [];
        if (data.length === 0) return arrayPaginator;
        const totalPaginator: number[] = data.filter((_d, i) => ((i) % rowsPerPage === 0)).map((_v, i) => i + 1);
        const countP = totalPaginator.length;
        if (countP === 0 || countP === 1 && data.length > 0) return [1]
        if (countP < 7) return totalPaginator
        if (page < 5) {
            arrayPaginator = [...totalPaginator.slice(0, 5), -1, totalPaginator[totalPaginator.length - 1]];

        }
        if (page > totalPaginator.length - 5) {
            arrayPaginator = [totalPaginator[0], -1, ...totalPaginator.slice(-5)];
        }
        if (page >= 4 && page <= totalPaginator.length - 4) {
            arrayPaginator = [
                totalPaginator[0],
                -1,
                ...totalPaginator.slice(page - 2, page + 1),
                -1,
                totalPaginator[totalPaginator.length - 1]
            ];
        }
        arrayPaginator = [...arrayPaginator];
        return arrayPaginator;
    }
    return {
        data: getData(),
        dataPage: getDataPage,
        myFilter,
        setMyFilter,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,
        order, orderBy,
        shortData,
        setOrder,
        setOrderBy,
        stepList: paginatorData(getData()),
        getColumFilter,
        columsFilter,
        setColumsFilter,
        handleChangeColValue
    }
}

interface PropsPaginator<T> {
    dataSource: T[]
}