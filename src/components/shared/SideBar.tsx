import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { startLogout } from '../../modules/auth'
import { startNewNotes } from '../../modules/notes'
import { Entries } from '../notes/entries/Entries'


export const SideBar:React.FunctionComponent<{}> = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () =>{
        dispatch(startLogout());
        history.push('/auth/login');
    }
    const handleAddNote = () =>{
        dispatch(startNewNotes());
    }
    return (
        <div className="flex flex-col h-screen w-500 items-center text-center bg-teal-900 text-gray-400 border-r">
            <span className="my-3 text-3xl"> Journal App </span>
            <ul className="menu px-3 shadow-lg bg-base-100 rounded-box horizontal">
                <li>
                    <button type="button" onClick={handleAddNote} className="p-4 bg-gray-100 hover:bg-gray-300 hover:bg-opacity-75">
                        <i className="fas fa-plus"></i>
                    </button>
                </li>
                <li>
                    <button type="button" className="p-4 bg-gray-100 hover:bg-gray-300 hover:bg-opacity-75">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </li>
                <li>
                    <button type="button" className="p-4 bg-gray-100 hover:bg-gray-300 hover:bg-opacity-75" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </button>
                </li>
            </ul>
            <Entries />
        </div>
    )
}
