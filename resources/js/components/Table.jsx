export default function Table( {captionText, header, children} ){
    
    return(
    
   <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            {captionText}
        </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {header}
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
    
    )}
    