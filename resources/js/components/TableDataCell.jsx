export default function TableDataCell({ children }){

    return(
        <td className="px-6 py-4 space-x-3 text-gray-900 dark:text-white">
            { children }
        </td>
    )
}