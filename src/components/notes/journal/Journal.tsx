import React from 'react'
import { useSelector } from 'react-redux';
import IRootState, { INotes } from '../../../interfaces/rootState';
import { NavBar } from '../../shared/NavBar'
import { SideBar } from '../../shared/SideBar'

export const Journal:React.FunctionComponent<{}> = props => {

    const data:any = useSelector((state:IRootState) => state.notes);
    const currentNote:INotes = data.active;
    // console.log(currentNote)

    

    return (
        <div className="h-full flex antialiased text-gray-900 bg-gray-100">
            <SideBar/>
            <div className="w-full">
                <NavBar />
                <div className="p-10 bg-base-200 mt-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Note Title</span>
                        </label>
                        <input type="text" placeholder="Write your title message" className="input" 
                        defaultValue={(currentNote !== null) ? currentNote.notes?.title : ''}/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Description</span>
                        </label>
                        <textarea className="textarea h-24 textarea-bordered" placeholder="Write your body message" 
                        defaultValue={(currentNote !== null) ? currentNote.notes?.body : ''}/>
                    </div>
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="random img" className="mx-auto mask mask-squircle" />
                </div>
            </div>
        </div>
    )
}
