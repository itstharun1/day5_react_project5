import './index.css'

const TodoItem=(props)=>{

    const {item,onDelete}=props
    const {name,id}=item;

    const deleteThis=()=>{
        onDelete(id)
    }

    return(
        <div className='div1'>
            <input  className='btn2' type="checkbox" />
            <h1 className='completed1'>{name}</h1>
            <button onClick={deleteThis} className='btn1'>Delete</button>
        </div>
    )
}
export default TodoItem