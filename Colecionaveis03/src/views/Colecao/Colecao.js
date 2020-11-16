import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import ItemLista from '../../components/ItemLista/ItemLista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState( [
        {
            id: '1',
            titulo: 'Fallen',
            descricao: 'Na região antigamente coé o primeiro romance da série de livros de ficção sobre anjos da escritora norte-americana Lauren Kate. Foi lançado nos Estados Unidos em 8 de Dezembro de 2009, e tornou-se best-seller do The New York Times, entrando na lista dos mais vendidos. O livro conta a história de Lucinda Price, uma adolescente de 17 anos que se apaixona por Daniel Grigori, um anjo caído. O livro começa na Inglaterra, mais precisamente em Helston no ano de 1854.',
            autor: 'Suzanne Collins',
            anoPublicacao: '2010',                                                    
            foto: require('../../../assets/imagens/Fallen.jpg'),
        },
        {
            id: '2',
            titulo: 'A Guerra dos Tronos',
            descricao: 'A guerra dos tronos é o primeiro livro da série best-seller internacional As Crônicas de Gelo e Fogo, que deu origem à adaptação de sucesso da HBO, Game of Thrones.',
            autor: 'George R. R. Martin',
            anoPublicacao: '2011',
            foto: require('../../../assets/imagens/tronos.jpg'),
        },
        {
            id: '3',
            titulo: 'Tormenta',
            descricao: 'Tormenta – Inferno na Terra. É assim que Luce se sente ao ficar longe de seu namorado e anjo caído, Daniel. Levou uma eternidade para eles se encontrarem, mas agora ele diz a ela que deve partir. Apenas um tempo suficiente para caçar os Párias – imortais que querem matar Luce.',
            autor: 'Lauren Kate',
            anoPublicacao: '2014',                                                    
            foto: require('../../../assets/imagens/tormenta.jpg'),
        }           
        ] );


    const voltar = () => {
        navigation.navigate('Inicial')
    }

    const adicionar = () => {
        navigation.navigate('Item', {item: {}, operacao: 'adicionar'})
    }

    const editar = (item) => {
        navigation.navigate('Item', {item: item, operacao: 'editar'})
    }
    
    return (
        <View style={estiloColecao.container}>

            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white"/>
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>

                <TouchableOpacity onPress={adicionar}>
                    <MaterialIcons name="add" size={24} color="white" />
                </TouchableOpacity>

            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <ItemLista data={item} detalhe={() => editar(item)}/>}
            />

        </View>
    )
}

export default Colecao;