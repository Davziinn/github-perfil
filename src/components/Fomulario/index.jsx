import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('inciou')

        return () => {
            console.log('FINALIZOU')
        }
    }, [])


    useEffect(() => {
        console.log('estado mudou')
    }, [nome])

    const alteraNome = (evento) => {

        setNome(evento.target.value)
        return evento.target.value
    }

    const rederizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7){
            return (
                <p>Olá {nome}, APROVADO!!</p>
            )
        } else{
            return (
                <p>Olá {nome}, REPROVADO!!</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {rederizaResultado()};
        </form>
    )
}

export default Formulario