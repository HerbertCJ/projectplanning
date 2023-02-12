import { createSlice } from "@reduxjs/toolkit"
import { useEffect } from "react"


const data = [
    {
        id: '1',
        title: 'Reform Apartment',
        budget: 0,
        description: 'Reform my apartment in August 29, lets start deciding what to buy.',
        tasks: [],
    },
    {
        id: '2',
        title: 'Reform Deck',
        budget: 0,
        description: 'Reform my Deck in September 02, lets start deciding what to buy.',
        tasks: [],
    },
    {
        id: '3',
        title: 'Buy Material',
        budget: 0,
        description: 'Buy materials for school.',
        tasks: [],
    },
]


const initialState = {
    projectsData: data,
    isLoading: false,
}

export const projectSlice = createSlice({
    name:'project',
    initialState,
    reducers: {
        deleteProject: (state, {payload: id}) => {     
            const newData = [...state.projectsData].filter((project) => project.id !== id)            
            state.projectsData = newData
        },
        addProject: (state, {payload}) => { 
            const newData = [...state.projectsData, payload]
            state.projectsData = newData            
        },
        addTask: (state, {payload}) => { 
            const {id, taskTitle, taskPrice} = payload
            let newTask = {
                taskTitle,
                taskPrice,
            }
            const newData = state.projectsData.map((project) => {
                if(project.id === id) {
                    project.tasks = [...project.tasks, newTask ]
                }
                return project
            })
            state.projectsData = newData            
        },
    },
})

export const {deleteProject, addProject, addTask} = projectSlice.actions

export default projectSlice.reducer