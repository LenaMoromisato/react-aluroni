import cardapio from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useState, useEffect } from "react";

interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string;
}

export default function Itens(props: Props) {
    const [lista, setLista] = useState(cardapio);
    const { busca, filtro } = props;

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i'); // Essa busca vai ser case sensitive, então se colocar “macarrão”, ele não vai entender, porque o macarrão que está no título, está maiúsculo, “Macarrão”. Então para resolvermos esse problema, colocamos a vírgula dentro do RegExp, e o segundo parâmetro dele vai ser um i, que é uma string i. Nós dizemos para o RegExp que ele vai ser case insensitive, isso significa que se colocarmos o m, não vai importar, porque ele sempre vai testar só pela string, não por ser minúsculo ou maiúsculo, que é o que queremos.

        return regex.test(title);
    }

    function testaFiltro(id: number) {
        if(filtro !== null) return filtro === id;
        return true;
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(novaLista);
    },[busca, filtro]);

    return (
        <div className={styles.itens}>
            {lista.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}