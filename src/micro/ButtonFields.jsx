export default function ButtonInputField(props){
    
    return (
        <div>
            <button 

            onClick={props.onClick}
            onKeyDown={props.onKeyDown}
            type={props.type} 
            id = {props.id} 
            name = {props.name} 
            className={props.className}>

                {props.name}

            </button>
        </div>
    )
}