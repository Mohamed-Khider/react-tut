import React,{useMemo} from 'react'
import {useTable} from "react-table"
import MOCK_DATA from "./MOCK_DATA.json"
import {COLUMNS} from "./columns"

export const BasicTable = () => {
    const columns= useMemo(()=> COLUMNS,[])
    const data = useMemo(()=> MOCK_DATA,[])
    const tableinstanse = useTable({
         columns,
         data,
    })

        const {
             getTableProps, 
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow
        } = tableinstanse

  return (
    <table>
        <thead>
                <tr>
                    <th>

                    </th>
                </tr>
        </thead>
        <tbody>
                <tr>
                    <td>

                    </td>
                </tr>
        </tbody>
    </table>
  )
}
