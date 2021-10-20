import React from 'react'
import { Link } from 'react-router-dom'
import { Entries } from '../notes/entries/Entries'


export const SideBar:React.FunctionComponent<{}> = props => {
    return (
        <div className="flex flex-col h-screen w-500 items-center text-center bg-teal-900 text-gray-400 border-r">
            <span className="my-3 text-3xl"> Journal App </span>
            <ul className="menu px-3 shadow-lg bg-base-100 rounded-box horizontal">
                <li>
                    <Link to="/auth/login">
                        <i className="fas fa-plus"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/auth/login">
                        <i className="fas fa-trash-alt"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/auth/login">
                        <i className="fas fa-sign-out-alt"></i>
                    </Link>
                </li>
            </ul>
            <Entries />
        </div>
    )
}
