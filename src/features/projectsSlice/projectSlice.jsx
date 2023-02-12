import { createSlice } from "@reduxjs/toolkit"


const data = [
    {
        id: '1',
        title: 'Reform Apartment',
        description: 'Reform my apartment in August 29, lets start deciding what to buy.',
        budget: 0,
    },
    {
        id: '2',
        title: 'Reform Deck',
        description: 'Reform my Deck in September 02, lets start deciding what to buy.',
        budget: 0,
    },
    {
        id: '3',
        title: 'Buy Material',
        description: 'Buy materials for school.',
        budget: 0,
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
            const {title, description} = payload
            const newProject = {
                id: new Date().getMilliseconds(),
                title,
                description,
            }
            const newData = [...state.projectsData, newProject]
            state.projectsData = newData
        },
        addTask: (state, {payload}) => {
            console.log(payload)
        }

    },
})

export const {deleteProject, addProject, addTask} = projectSlice.actions

export default projectSlice.reducer