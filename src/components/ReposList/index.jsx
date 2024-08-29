import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregado, setEstaCarregado] = useState(true); // Correção aqui

    useEffect(() => {
        setEstaCarregado(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`) // Certifique-se de que o nome de usuário está correto
            .then(response => response.json())
            .then(responseJson => {
                setTimeout(() => {
                    setEstaCarregado(false);
                    setRepos(responseJson);
                }, 3000);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregado ? (
                <h1>Carregando...</h1>
            ): (
                <ul className={styles.list}>
                    {repos.map(repositorio => ( // Adicionando parênteses para retornar diretamente o elemento
                        <li className= {styles.listItem} key={repositorio.id}>
                            
                            <div className={styles.itemName}>
                                <b>Nome:</b> {repositorio.name}
                            </div>

                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {repositorio.language} 
                            </div>

                            <a className={styles.itemLink} target="_blank" rel="noopener noreferrer" href={repositorio.html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </ div>
    );
}

export default ReposList;
