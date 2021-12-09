const categories = [
    {id:'1',description:'a'},
    {id:'2',description:'b'},
    {id:'3',description:'c'},
    {id:'4',description:'d'},
    {id:'5',description:'e'}
]

export const getCategories = () => {
    return new promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })
)