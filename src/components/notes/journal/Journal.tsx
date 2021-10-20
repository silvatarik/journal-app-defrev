import React from 'react'
import { NavBar } from '../../shared/NavBar'
import { SideBar } from '../../shared/SideBar'

export const Journal:React.FunctionComponent<{}> = props => {
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
                        <input type="text" placeholder="Write your title message" className="input" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl">Description</span>
                        </label>
                        <textarea className="textarea h-24 textarea-bordered" placeholder="Write your body message" />
                    </div>
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="random img" className="mx-auto mask mask-squircle" />
                </div>
            </div>
        </div>
    )
}
