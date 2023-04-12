export default function TableHeadCell({ children }){

    return(
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            { children }
        </th>
    )
}