import { createSlice } from "@reduxjs/toolkit"

const data = [
    {
        id: '1',
        title: 'Reform Apartment',
        budget: 50,
        description: 'Reform my apartment in August 29, lets start deciding what to buy.',
        tasks: [],
        total: 50,
    },
    {
        id: '2',
        title: 'Reform Deck',
        budget: 50,
        description: 'Reform my Deck in September 02, lets start deciding what to buy.',
        tasks: [],
        total: 50,
    },
    {
        id: '3',
        title: 'Buy Material',
        budget: 50,
        description: 'Buy materials for school.',
        tasks: [],
        total: 50,
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
            let {budget} = payload
            const newbudget = Number(parseFloat(budget).toFixed(2))
            const newtotal = Number(newbudget)
            const newData = [...state.projectsData, {...payload, total: newtotal, budget: newbudget}]
            state.projectsData = newData            
        },
        addTask: (state, {payload}) => { 
            const {id, taskTitle, taskPrice} = payload  
            const newPrice = Number(parseFloat(taskPrice).toFixed(2))             
            let newTask = {                
                taskTitle,
                taskPrice: newPrice,
            }
            const newData = state.projectsData.map((project) => {
                if(project.id === id) {
                    project.tasks = [...project.tasks, newTask ]                  
                    project.total -= taskPrice
                    let total = Number(parseFloat(project.total).toFixed(2))
                    project.total = total
                }
                return project
            })
            state.projectsData = newData            
        },
        deleteTask: (state, {payload}) => {            
            const {projectId, index, taskPrice} = payload
            const newPrice = Number(parseFloat(taskPrice).toFixed(2))
            const newData = state.projectsData.map((project) => {
                if(project.id === projectId) {                                        
                    project.tasks.splice(index, 1)                                  
                    project.total += taskPrice
                    let total = Number(parseFloat(project.total).toFixed(2))
                    project.total = total               
                }
                return project
            })
            state.projectsData = newData
        },        
    },
})

export const {deleteProject, addProject, addTask, deleteTask} = projectSlice.actions

export default projectSlice.reducer