import React from 'react'

export const Entrie = () => {
    return (
        <article tabIndex={0} className="cursor-pointer overflow-x-hidden border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-500 focus:outline-none focus:border-green-500">
             <img className="h-20 w-full rounded-md" src="https://picsum.photos/seed/picsum/200/300" alt="img random"/>
            <div className="flex-1">
                <header className="mb-1">
                    Titulo 1
                </header>
                <p className="text-gray-600 truncate w-60 pl-1 pr-2">
                    Hi Mazhar, Please note this issue comes when user 
                </p>
                <footer className="text-gray-500 mt-2 text-sm">
                    Friday 22:16
                </footer>
            </div>
        </article>
    )
}
