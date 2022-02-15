import './customers.css'
import Title from '../../components/Title'
import Header from '../../components/Header'
import { FiUser } from 'react-icons/fi'
import { useState } from 'react'
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify'
import CustomersInput from './CustomersInput'

export default function Customers() {
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [endereco, setEndereco] = useState('')

    async function handleAdd(e) {
        e.preventDefault()
        
        if(nomeFantasia !== '' && cnpj !== '' && endereco !== '')
        {
            await firebase.firestore().collection('customers')
            .add({
                nomeFantasia: nomeFantasia,
                cnpj: cnpj,
                endereco: endereco
            })
            .then(() => {
                setNomeFantasia('')
                setCnpj('')
                setEndereco('')
                toast.info('Empresa cadastrada com sucesso')
            })
            .catch((error) => {
                toast.error(error)
            })
        }
        else 
        {
            toast.error('Preencha todos os campos')
        }
    }

    return (
        <div>
            <Header />
            <div className='content'>
                <Title name='Clientes'>
                    <FiUser size={25} />
                </Title>
            
                <div className="container">
                    <form className='form-profile customers' onSubmit={handleAdd}>
                        <label>Nome fantasia</label>
                        <CustomersInput nome={nomeFantasia} setNome={setNomeFantasia} placeholder="Nome da sua empresa" />

                        <label>CNPJ</label>
                        <CustomersInput nome={cnpj} setNome={setCnpj} placeholder="CNPJ da sua empresa"/>

                        <label>Endereco</label>
                        <CustomersInput nome={endereco} setNome={setEndereco} placeholder="Endereço da sua empresa" />

                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}