export default function CustomersInput(props) {


    return (
        <input type="text" 
            value={props.nome} 
            placeholder={props.placeholder}
            onChange={(e) => props.setNome(e.target.value)}
        />
    )
}