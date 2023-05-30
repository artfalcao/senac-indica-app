import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign } from '@expo/vector-icons'; 
import ItemCard from '../../components/ItemCard';
import styles from './styles';

const DATA = [
    {
        id: "0",
        url: "https://th.bing.com/th/id/R.817ce2bc8e5b1c9385bc876530aaae45?rik=ABePLPcMe1cXKw&pid=ImgRaw&r=0",
        categoria: "Natureza",
        local: "Nova Cruz, Igarassu - PE",
        descricao: "Praia exuberante localizada no coração histórico do Brasil."
      },
    {
      id: "4",
      url: "https://th.bing.com/th/id/R.817ce2bc8e5b1c9385bc876530aaae45?rik=ABePLPcMe1cXKw&pid=ImgRaw&r=0",
      categoria: "Natureza",
      local: "Nova Cruz, Igarassu - PE",
      descricao: "Praia exuberante localizada no coração histórico do Brasil."
    },
    {
      id: "1",
      url: "https://i.ytimg.com/vi/G9XsxKBzc2c/maxresdefault.jpg",
      categoria: "Alimentacao",
      local: "Recife - PE",
      descricao: "Bolinho de cenoura com uvas."
    },
    {
      id: "8",
      url: "https://images.unsplash.com/photo-1583214552082-dff0bb815203?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVybmFtYnVjb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      categoria: "Foto de rua",
      local: "Olinda - PE",
      descricao: "Olinda marcada por belas paisagens e rica história."
    },
    {
      id: "9",
      url: "https://images.unsplash.com/photo-1653340608563-2cc79e10f91d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      categoria: "Foto de rua",
      local: "Centro do Recife",
      descricao: "Recife e suas lindas paisagens com o mar."
    },
    {
      id: "20",
      url: "https://odis.homeaway.com/odis/listing/1ceb1540-16d8-4f0f-9afa-504b99a02dc9.f6.jpg",
      "categoria": "Espaços culturais e lazer",
      local: "Museu da Cidade do Recife - Forte das Cinco Pontas",
      descricao: "Foi instalado em 1982, Forte de São Tiago das Cinco Pontas, na zona sul da cidade e faz parte da Secretaria de Cultura da Prefeitura do Recife. Desde a sua criação, o museu opera em uma construção portuguesa de pedra e cal construída por cima do forte holandês, feito de madeira e terra."
    },
    {
      id: "2",
      url: "https://th.bing.com/th/id/OIP.SZHUOVhEok8dVRE-CvlmggHaE7?pid=ImgDet&rs=1",
      categoria: "Alimentacao",
      local: "Recife - PE",
      descricao: "Tapioca, iguaria nordestina"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        categoria: "Natureza",
      local: "Nova Cruz, Igarassu - PE",
      descricao: "Lindos coqueiros à luz do sol da tarde"
    },
    // {
    //   "id": 6,
    //   "url": "https://images.unsplash.com/photo-1621945956653-54642cf7b301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    //   "categoria": "Foto de rua",
    //   "local": "Ruas em Olinda - Pernambuco",
    //   "descricao": "A hitória da cidade de Olinda sendo registrada em foto no período vespertino."
    // },
    // {
    //   "id": 7,
    //   "url": "https://images.unsplash.com/photo-1588692043397-6c48a959b935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVybmFtYnVjb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //   "categoria": "Foto de rua",
    //   "local": "Marco Zero - Recife Antigo",
    //   "descricao": "Coração e centro da cidade do Recife."
    // },
    // {
    //   "id": 10,
    //   "url": "https://images.unsplash.com/photo-1658044552345-df3ea485f77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
    //   "categoria": "Foto de rua",
    //   "local": "Marco zero",
    //   "descricao": "Ponto turístico da cidade contemplado com monumentos artísticos"
    // },
    // {
    //   "id": 11,
    //   "url": "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/10025_173718519452574_1591565244_n.jpeg?quality=70&strip=info&w=925",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Fundação Gilberto Freyre",
    //   "descricao": "Casa onde viveu o escritor e pensador (1900-1987), de 1941 até sua morte. Entre setembro e março, às quartas, há passeio noturno (R$ 30) inspirado nas histórias sobrenaturais do livro Assombrações do Recife Velho (ligue para confirmar presença)."
    // },
    // {
    //   "id": 12,
    //   "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Oficina_Cer%C3%A2mica_Francisco_Brennand_08.jpg/800px-Oficina_Cer%C3%A2mica_Francisco_Brennand_08.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Oficina Cerâmica Francisco Brennand",
    //   "descricao": "Complexo monumental — museu e ateliê — com aproximadamente 2 mil obras, entre esculturas, murais, paineis, pinturas, desenhos e objetos cerâmicos. A principal temática da obra de Francisco Brennand é a origem da vida e a eternidade das coisas."
    // },
    // {
    //   "id": 13,
    //   "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Instituto_Ricardo_Brennand.jpg/600px-Instituto_Ricardo_Brennand.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Instituto Ricardo Brennand",
    //   "descricao": "Castelo de Brennand, é uma instituição cultural brasileira sem fins lucrativos localizada na cidade do Recife, capital do estado de Pernambuco. Foi eleito o melhor museu da América do Sul pelo site de viagens TripAdvisor."
    // },
    // {
    //   "id": 3,
    //   "url": "https://th.bing.com/th/id/R.5124ff36659ea960fb6577141174d43e?rik=wWoE0BRDgfL86A&riu=http%3a%2f%2fveganandcolors.com%2fwp-content%2fuploads%2f2019%2f08%2f22-1024x683.jpg&ehk=dwjwe2CdGrtqCyTSITV%2bJvZEYqT295hK24h%2b7z1q6BQ%3d&risl=&pid=ImgRaw&r=0",
    //   "categoria": "Alimentacao",
    //   "local": "Recife - PE",
    //   "descricao": "Almoço vegano."
    // },
    // {
    //   "id": 14,
    //   "url": "https://th.bing.com/th/id/OIP.z7aQQfRsv5G4CYvh6g1KxgHaEt?pid=ImgDet&rs=1",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Museu do Homem do Nordeste",
    //   "descricao": "O Museu do Homem do Nordeste – Muhne – é um órgão federal (vinculado à Fundação Joaquim Nabuco/Ministério da Educação), que reúne acervos que revelam a pluralidade das culturas negras, indígenas e brancas desde nossas origens até os diferentes desdobramentos e misturas que formam o que hoje é chamado genericamente de cultura brasileira."
    // },
    // {
    //   "id": 15,
    //   "url": "https://th.bing.com/th/id/R.f2749b183fe943294b3c6ededdf1637d?rik=DfAuRnAuVmmkmg&riu=http%3a%2f%2fguiaviajarmelhor.com.br%2fwp-content%2fuploads%2f2016%2f04%2f15643407385_2af4630335_k.jpg&ehk=edXScrJ0gpw3AXnZDNae4XAZdktY7RWKnX9sQi95K7A%3d&risl=&pid=ImgRaw&r=0",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Museu Cais do Sertão",
    //   "descricao": "O Museu Cais do Sertão é um museu interativo sobre o Sertão e Luiz Gonzaga localizado na cidade do Recife, capital de Pernambuco, Brasil. Foi eleito um dos vinte melhores museus da América do Sul em 2015 "
    // },
    // {
    //   "id": 16,
    //   "url": "https://i.pinimg.com/originals/9c/39/44/9c3944e75c6d2f8cb288bd3b4cd7b10a.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Paço do Frevo",
    //   "descricao": "O Paço do Frevo é um espaço cultural dedicado à difusão, pesquisa, lazer e formação nas áreas da dança e música do frevo localizado na cidade do Recife, capital de Pernambuco, Brasil. Surgiu através de uma parceria entre a Prefeitura do Recife, a Fundação Roberto Marinho, o IPHAN e o Governo Federal."
    // },
    // {
    //   "id": 17,
    //   "url": "https://th.bing.com/th/id/R.4f911c0ac7ef355c116dfa2adf9eeb38?rik=VuGtHCgwWqIirQ&riu=http%3a%2f%2fvisit.recife.br%2fwp-content%2fuploads%2f2017%2f10%2farte-destaque-gabinete-1.jpg&ehk=McBJkG37XqelydspUjaqRVFKC70zdIlHwCN8%2fzzxLl8%3d&risl=&pid=ImgRaw&r=0",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Gabinete Português de Leitura de Pernambuco",
    //   "descricao": "Biblioteca e centro cultural lusófono localizado na cidade do Recife, capital de Pernambuco, Brasil. Dentre os três gabinetes portugueses de leitura existentes no Brasil, é o segundo mais antigo e possui o segundo maior acervo, após o gabinete fluminense."
    // },
    // {
    //   "id": 18,
    //   "url": "https://th.bing.com/th/id/OIP.E2J1J45ADyu-zCoVhe1R-wHaEg?pid=ImgDet&rs=1",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Museu da Abolição",
    //   "descricao": "O Museu da Abolição — Centro de Referência da Cultura Afro-Brasileira é um museu localizado na cidade do Recife, capital de Pernambuco, Brasil. Vinculado ao Instituto Brasileiro de Museus (IBRAM) e ao Ministério da Cultura, é um dos raros museus no país a contemplar esta parte da história, e tem suas ações norteadas pelos princípios da nova museologia e da sociomuseologia."
    // },
    // {
    //   "id": 19,
    //   "url": "https://i.pinimg.com/originals/12/04/73/1204737d1cf8d8a3e80b8eed7bdef57f.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Estação Central Capiba/Museu do Trem",
    //   "descricao": "Museu do Trem ou Estação Central Capiba/Museu do Trem é um museu ferroviário da cidade do Recife, capital do estado brasileiro de Pernambuco. É considerado o primeiro do Brasil e o segundo do gênero da América Latina."
    // },
    // {
    //   "id": 21,
    //   "url": "https://th.bing.com/th/id/OIP.0pe5_FTN6BHjVR__6LIDxAHaE8?pid=ImgDet&rs=1",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Museu do Estado de Pernambuco",
    //   "descricao": "O Museu do Estado de Pernambuco (MEPE) é um museu localizado na cidade do Recife, capital de Pernambuco, no Brasil. Possui um grande e eclético acervo, com cerca de 12 mil itens abrangendo as áreas de história, arte, antropologia e etnografia."
    // },
    // {
    //   "id": 22,
    //   "url": "https://th.bing.com/th/id/R.3fd7f716a547088b251a8903ecf26672?rik=49kGxBqKzeexHg&pid=ImgRaw&r=0",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Museu de Arte Moderna Aloisio Magalhães",
    //   "descricao": "O Museu de Arte Moderna Aloisio Magalhães ou MAMAM é um museu localizado na cidade do Recife, capital do estado brasileiro de Pernambuco. É considerado um centro de referência da produção moderna e contemporânea das artes visuais. Através da divulgação, registro e reflexão sobre a arte do presente e suas referências históricas, o MAMAM tem contribuído para a formação cultural do público e para o adensamento do meio institucional e artístico do Recife."
    // },
    // {
    //   "id": 23,
    //   "url": "https://th.bing.com/th/id/R.188d23a7b5a8e83798bb5624846ab81c?rik=7E5T%2bzRVwHVmog&pid=ImgRaw&r=0",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Caixa Cultural",
    //   "descricao": "A Caixa Cultural Recife foi inaugurada em 2012 em um edifício anteriormente pertencente a instituições financeiras, como bancos e a Bolsa de Valores de Pernambuco e Paraíba, localizado defronte ao Marco Zero, no Recife Antigo. Com área de 2.650m², o edifício foi tombado pelo Patrimônio Nacional em 1998.[11][12] Possui dois pavimentos de galerias de arte, um teatro com 96 lugares, uma sala multimídia, duas salas para oficinas de arte-educação e amplo foyer."
    // },
    // {
    //   "id": 24,
    //   "url": "https://revista.algomais.com/wp-content/uploads/2019/04/econus.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Parque da Jaqueira",
    //   "descricao": "Localizado na Zona Norte do Recife, em uma área repleta de opções de serviços, o entorno do Parque da Jaqueira também tem muito a oferecer. Os freqüentadores têm a sua disposição, por exemplo, o Cais da Jaqueira, livrarias, academias de ginásticas, galerias, lanchonetes, restaurantes e hospitais. Área completa voltada para lazer e prática de esportes Banheiros públicos feminino, masculino, infantil e para pessoas com mobilidade reduzida Estacionamento público com capacidade para 140 veículos Segurança realizada por um efetivo da Guarda Municipal e com o apoio de seis câmeras de videomonitoramento."
    // },
    // {
    //   "id": 25,
    //   "url": "https://th.bing.com/th/id/R.c23010072c592ab391218d6618b612fd?rik=XByFworSyYg5QA&riu=http%3a%2f%2f1.bp.blogspot.com%2f_a2UppB54fFc%2fTKPSVJlH4AI%2fAAAAAAAAAiM%2fT1Y69Kxp5GM%2fs1600%2fTorre%2bde%2bCristal%2b-%2bBrennand%2b-%2bAxl%2bNascimento.jpg&ehk=unwNvjttzWmWDUPwZD29VlAm3%2fiRc%2f4G0tlFx1x2n1U%3d&risl=&pid=ImgRaw&r=0",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Parque das Esculturas",
    //   "descricao": "O Parque de Esculturas é composto por obras do artista plástico Francisco Brennand, e foi inaugurado como comemoração dos 500 anos de descobrimento do Brasil. Foi instalado sobre o molhe do porto. Tartarugas, pelicanos, ovos, maçarico, pássaros roca e sentinela guardam a principal obra do parque, a torre de cristal, inspirada em uma flor descoberta pelo paisagista Roberto Burle Marx. A travessia do Marco Zero até o parque funciona diariamente, das 7h às 17h."
    // },
    // {
    //   "id": 26,
    //   "url": "https://media-cdn.tripadvisor.com/media/photo-s/05/c9/91/39/parque-dois-irmaos.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Parque Estadual de Dois Irmãos - Zoológico de Recife",
    //   "descricao": "O Parque Estadual Dois Irmãos tem uma área de 384,42 hectares, sendo 14 hectares ocupados pelo Zoológico do Recife. A reserva do Parque, considerada uma das maiores áreas de Mata Atlântica de Pernambuco."
    // },
    // {
    //   "id": 27,
    //   "url": "https://i.pinimg.com/originals/17/b2/1f/17b21fb0b7a363749fecb4d5dcc6e6c6.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Praça de Casa Forte",
    //   "descricao": "Primeiro grande projeto de jardim urbano de Roberto Burle Marx."
    // },
    // {
    //   "id": 28,
    //   "url": "https://i.pinimg.com/736x/78/28/fb/7828fbed8e7dec5ea030d6675fa1a291--carne.jpg",
    //   "categoria": "Alimentacao",
    //   "local": "Ilha da Kosta",
    //   "descricao": "Carne de Sol com Queijo de Coalho - Hora do Almço."
    // },
    // {
    //   "id": 29,
    //   "url": "https://ibis.accor.com/editorial/imagerie/article/bolo-de-rolo-8660_660x440.jpg",
    //   "categoria": "Alimentacao",
    //   "local": "Tio Pepe",
    //   "descricao": "Recheado de delícias regionais com o famoso Bolo de Rolo."
    // },
    // {
    //   "id": 30,
    //   "url": "https://ibis.accor.com/editorial/imagerie/article/receita-com-camarao-33f7_660x440.jpg",
    //   "categoria": "Alimentacao",
    //   "local": "PARRAXAXÁ",
    //   "descricao": "No Parraxaxá você pode experimentar todas as gostosuras nordestinas em um buffet bem generoso que inclui muitas receitas típicas do Pernambuco. Buchada de bode com pirão, sarapatel, passando pelo famoso camarão na pitinga e finalizando com as tradicionais sobremesas pernambucanas, bolo souza leão, que é até patrimônio cultural e imaterial do estado."
    // },
    // {
    //   "id": 31,
    //   "url": "https://i.pinimg.com/originals/e5/d7/68/e5d7680517b5d24461e670574c6c77dc.jpg",
    //   "categoria": "Pores do sol",
    //   "local": "Rua da Aurora",
    //   "descricao": ""
    // },
    // {
    //   "id": 32,
    //   "url": "https://ibis.accor.com/editorial/imagerie/article/panela-de-pirao-1d76_660x440.jpg",
    //   "categoria": "Alimentacao",
    //   "local": "Bar do Luna",
    //   "descricao": " Restaurante com uma pegada bem familiar que serve uma comida pernambucana de comer rezando."
    // },
    // {
    //   "id": 33,
    //   "url": "https://ibis.accor.com/editorial/imagerie/article/doce-de-goiaba-12b2_660x440.jpg",
    //   "categoria": "Alimentacao",
    //   "local": "Restaurante da Mira",
    //   "descricao": "Para quem deseja uma experiência gastronômica singular. Com uma fachada bem discreta, logo que o público entra no local, se depara com uma parede recheada de prêmios e indicações."
    // },
    // {
    //   "id": 34,
    //   "url": "https://3.bp.blogspot.com/_MAjapp8oGJM/S61QbLkDdKI/AAAAAAAAACg/xveuiKP2bcU/s1600/Nascer+do+sol+24mar2010+5h09+c.jpg",
    //   "categoria": "Pores do sol",
    //   "local": "Rua do Sol",
    //   "descricao": "Nascer do sol no Recife, no dia 24 de março de 2023, entre 5h e 5h30."
    // },
    // {
    //   "id": 35,
    //   "url": "https://i.pinimg.com/564x/7a/7d/2c/7a7d2c3dd8e83086ad5c64c0d0279397.jpg",
    //   "categoria": "Pores do sol",
    //   "local": "Edifício Netuno",
    //   "descricao": "Por do Sol visto de cima, último andar do Edf Netuno na grande cidade."
    // },
    // {
    //   "id": 36,
    //   "url": "https://blog.maxmilhas.com.br/wp-content/uploads/2020/07/thinkstockphotos-474448950-1.jpeg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Catamarã pelas águas da cidade",
    //   "descricao": "Uma outra dica para aproveitar bem os últimos raios do sol é fazer um passeio de catamarã pelas águas de Recife. Com o tour você vai poder conhecer a cidade de um jeito diferente, além de descobrir um pouco mais da história da cidade com o guia turístico."
    // },
    // {
    //   "id": 37,
    //   "url": "https://blog.maxmilhas.com.br/wp-content/uploads/2020/07/rua_do_bom_jesus-1024x532.jpg",
    //   "categoria": "Foto de rua",
    //   "local": "Rua do Bom Jesus",
    //   "descricao": "A 3° rua mais bonita do mundo parece um bom passeio para você? A Architectural Digest, uma importante publicação dos Estados Unidos, fez um ranking elegendo as 31 ruas mais bonitas do globo e a Rua do Bom Jesus, em Recife, ficou no top 3, sendo a única representante do Brasil."
    // },
    // {
    //   "id": 38,
    //   "url": "https://blog.maxmilhas.com.br/wp-content/uploads/2020/07/lkl-1024x725.jpg",
    //   "categoria": "Pores do sol",
    //   "local": "Pôr do sol do Alto da Sé",
    //   "descricao": "Alto da Sé, que te dá uma das vistas mais incríveis e icônicas da cidade e um Por do Sol incrível."
    // },
    // {
    //   "id": 39,
    //   "url": "https://live.staticflickr.com/6020/6015801725_0765f6af30.jpg",
    //   "categoria": "Pores do sol",
    //   "local": "Paço Alfandega",
    //   "descricao": "Centro do Recife visto do Paço Alfândega. Ao fundo, zona Sul da cidade"
    // },
    // {
    //   "id": 40,
    //   "url": "https://farm8.staticflickr.com/7539/15298919743_457d56b2ec_h.jpg",
    //   "categoria": "Pores do sol",
    //   "local": "Rio Capibaribe",
    //   "descricao": "Rio Capibaribe e Cais da Alfândega, no Recife Antigo."
    // },
    // {
    //   "id": 41,
    //   "url": "https://farm8.staticflickr.com/7567/16002640459_bde795f9a8_h.jpg",
    //   "categoria": "",
    //   "local": "Centro do Recife",
    //   "descricao": "MargeaNdo pelas ruas do Sol e da Aurora"
    // },
    // {
    //   "id": 42,
    //   "url": "https://farm8.staticflickr.com/7553/16159224401_10aac0b84c_h.jpg",
    //   "categoria": "Pores do sol",
    //   "local": "Zona Norte",
    //   "descricao": " Por do Sol e zona Norte do Recife vistos desde Olinda, no Alto da Sé"
    // },
    // {
    //   "id": 43,
    //   "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Convento_de_S%C3%A3o_Francisco_-_Olinda_-_Pernambuco_-_Brasil.jpg/800px-Convento_de_S%C3%A3o_Francisco_-_Olinda_-_Pernambuco_-_Brasil.jpg",
    //   "categoria": "cidade",
    //   "local": "Olinda",
    //   "descricao": "Convento de São Francisco"
    // },
    // {
    //   "id": 44,
    //   "url": "https://www.maladeaventuras.com/wp-content/uploads/2020/09/olinda-no-por-do-sol-768x461.jpg",
    //   "categoria": "Pores do sol",
    //   "local": "Olinda - Pe",
    //   "descricao": "Vista de cima da rua mais alta de Olinda - Pe"
    // },
    // {
    //   "id": 45,
    //   "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/e7/17/57/view-on-coroa-do-aviao.jpg?w=600&h=-1&s=1",
    //   "categoria": "Natureza",
    //   "local": "Coroa do Avião Beach - Igarassu",
    //   "descricao": "Coroa do Avião é uma ilhota localizada no município de Igarassu no estado brasileiro de Pernambuco."
    // },
    // {
    //   "id": 46,
    //   "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/6f/dd/0b/refugio-das-bromelias.jpg?w=1100&h=-1&s=1",
    //   "categoria": "Natureza",
    //   "local": "Refugio das Bromelias",
    //   "descricao": "O refúgio das Bromélias, um espaço privado, onde espaço onde o paisagista e artesão Adnelson"
    // },
    // {
    //   "id": 47,
    //   "url": "https://media-cdn.tripadvisor.com/media/photo-s/11/83/23/7e/another-view-from-outside.jpg",
    //   "categoria": "Pores do sol",
    //   "local": "Igarassu - PE",
    //   "descricao": "Por do Sol no restaurante Porto Vasco em Igarassu."
    // },
    // {
    //   "id": 48,
    //   "url": "https://www.viajeleve.net/wp-content/uploads/2022/05/Centro-Historico-de-Igarassu-Pernambuco-1024x622.jpg",
    //   "categoria": "Foto de rua",
    //   "local": "Igarassu - PE",
    //   "descricao": "Igreja dos Santos Cosme e Damião"
    // },
    // {
    //   "id": 49,
    //   "url": "https://www.viajeleve.net/wp-content/uploads/2022/05/Casas-coloridas-de-Igarassu-1024x625.jpg",
    //   "categoria": "Foto de rua",
    //   "local": "Igarassu - PE",
    //   "descricao": "Centro Histórico."
    // },
    // {
    //   "id": 50,
    //   "url": "https://www.viajeleve.net/wp-content/uploads/2022/05/Camara-Municipal-de-Igarassu-1024x622.jpg",
    //   "categoria": "Foto de rua",
    //   "local": "Camara Municipal de Igarassu",
    //   "descricao": "O prédio tem o estilo colonial e está em ótimo estado, mas a visita é só na parte externa, porque atualmente funciona a Câmara dos vereadores de Igarassu."
    // },
    // {
    //   "id": 51,
    //   "url": "https://www.viajeleve.net/wp-content/uploads/2022/05/Casa-do-Artesao-Igarassu-1024x685.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Casa do Artesão e Centro de informações turísticas",
    //   "descricao": "Localizada numa casa histórica perto das principais atrações do centro velho de Igarassu, a casa do artesão é um local especial."
    // },
    // {
    //   "id": 52,
    //   "url": "https://www.viajeleve.net/wp-content/uploads/2022/05/Nova-Cruz-Igarassu-1024x617.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Canal de Santa Cruz e Nova Cruz",
    //   "descricao": "A região de Nova Cruz está localizada na saída do Rio Timbó e de frente a Maria Farinha que faz parte do município de Paulista."
    // },
    // {
    //   "id": 53,
    //   "url": "https://cdn2.civitatis.com/ecuador/isla-santa-cruz/tour-estacion-cientifica-charles-darwin-grid.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Refúgio Ecológico Charles Darwin",
    //   "descricao": "Reserva de floresta atlântica tem a função da preservação da mata a mais de 40 anos e o melhor de tudo é que você pode visitá-la. O local faz estudos ecológicos no território pernambucano e por isso tem dezenas de mamíferos e aves do qual é possível interagir."
    // },
    // {
    //   "id": 54,
    //   "url": "https://www.guiaviagensbrasil.com/imagens/foto-centro-historico-em-recife-pernambuco-8649.jpg",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Recife - Pe",
    //   "descricao": "Antiga cadeia que hoje abriga a Casa da Cultura."
    // },
    // {
    //   "id": 55,
    //   "url": "https://www.guiaviagensbrasil.com/imagens/foto-centro-historico-em-recife-pernambuco-8631.jpg",
    //   "categoria": "Foto de rua",
    //   "local": "Recife - Pe",
    //   "descricao": " Prédio do Palácio da Justiça no Recife Antigo"
    // },
    // {
    //   "id": 56,
    //   "url": "https://oxerecife.com.br/wp-content/uploads/2020/06/junho2020ltorredozepelin.jpg",
    //   "categoria": "Natureza",
    //   "local": "Recife",
    //   "descricao": " Unidades de Conservação da Natureza do Recife"
    // },
    // {
    //   "id": 57,
    //   "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/35/66/b4/parque-santana-ariano.jpg?w=1200&h=-1&s=1",
    //   "categoria": "Espaços culturais e lazer",
    //   "local": "Parque Santana Ariano Suassuna",
    //   "descricao": "Conta com campo de futebol, duas quadras poliesportivas, quadra de tênis, pistas de skate, bicicross e cooper, ciclovia e dois parques infantis."
    // },
    // {
    //   "id": 58,
    //   "url": "https://www.pe.senac.br/wp-content/uploads/2016/03/uht-01.jpg",
    //   "categoria": "Alimentacao",
    //   "local": "Senac - Pe",
    //   "descricao": "Restaurante Escola Senac - Av. Visc. de Suassuna, 500 - Santo Amaro, Recife - PE, 50050-540"
    // },
    // {
    //   "id": 59,
    //   "url": "https://viagemcombagagem.com/wp-content/uploads/2019/05/Lounge-Bar-do-Catamaran.jpg",
    //   "categoria": "Natureza",
    //   "local": "Catamaram em Recife",
    //   "descricao": "Restaurante Catamaran, localizado sobre o Cais de Santa Rita, em Recife – Pernambuco. O espaço – que se estende sobre um amplo deck de madeira – está bem ao lado da estação dos barcos da Catamaran Tours e tem certamente uma das melhores vistas panorâmicas da capital do Frevo."
    // },
    // {
    //   "id": 60,
    //   "url": "https://viagemcombagagem.com/wp-content/uploads/2019/05/IMG_9746-768x1024.jpg",
    //   "categoria": "Alimentacao",
    //   "local": "Catamaram em Recife",
    //   "descricao": "as caipifrutas, bastante populares em Pernambuco, saem com vodka nacional (nos sabores de limão, abacaxi, morango, kiwi, cajá, uva e maracujá) e com preços pra lá de convidativos"
    // },
    // {
    //   "id": 61,
    //   "url": "https://viagemcombagagem.com/wp-content/uploads/2021/10/LivrariadaPra%C3%A7a_FOTO_FilipeRamos.jpg",
    //   "categoria": "Alimentacao",
    //   "local": "Barista da Livraria da Praça",
    //   "descricao": "Circuito Xero Café (pela primeira vez), Olinda Café e Zoco Café"
    // },
    // {
    //   "id": 62,
    //   "url": "https://visit.recife.br/wp-content/uploads/2020/07/acude-de-apipucos-recife-creditos-flikr-max-levay.jpg",
    //   "categoria": "Natureza",
    //   "local": "Açude de Apipucos.",
    //   "descricao": "Uma parte integrante da sub-bacia do rio Capibaribe, localizado na região metropolitana do Recife em Pernambuco. Seu reservatório é composto por dois espelhos d'água, sendo o menor situado a leste com cerca de 62.500 metros quadrados de área e o maior a oeste."
    // },
    // {
    //   "id": 63,
    //   "url": "https://visit.recife.br/wp-content/uploads/2020/07/pontes-do-recife-credito-max-levay.jpg",
    //   "categoria": "Natureza",
    //   "local": "Recife - pe",
    //   "descricao": "Uma cidade conhecida como a Veneza Brasileira era de se esperar que a sua paisagem fosse dominada por inúmeros canais e rio"
    // },
    // {
    //   "id": 64,
    //   "url": "https://visit.recife.br/wp-content/uploads/2020/07/jardim-botanico-do-recife.jpg",
    //   "categoria": "Natureza",
    //   "local": "Rodovia BR-232, Recife, PE",
    //   "descricao": "Jardim Botânico do Recife"
    // }
]

// const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//   ];

export default function HomeScreen({ navigation }) {
    const [ search, setSearch ] = useState("");
    const [ data, setData ] = useState([]);

    const renderItem = ({item}) => {
      return (
        <ItemCard item={item} />
      )
    }

    const handleOpenFilter = () => {
      navigation.navigate('FilterPage')
    }

    const handleSubmit = () => {
      console.log(search)
    }

    useEffect(() => {
        const getData = () => {
            setData(DATA);
        }

        getData();
    }, []);

    return (
        <>
        <View style={styles.header}>
            <KeyboardAwareScrollView>
                <View style={styles.row1}>
                    <Image 
                        style={styles.logo}
                        source={require('../../../assets/indicai-row.png')}
                    />

                    <Text style={styles.local}>Recife, PE</Text>
                </View>

                <View style={styles.searchBox}>
                  <TextInput
                      style={styles.input}
                      placeholder='Insira sua busca aqui'
                      placeholderTextColor="#aaaaaa"
                      onChangeText={(text) => setSearch(text)}
                      value={search}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      onSubmitEditing={handleSubmit}
                  />
                </View>
            </KeyboardAwareScrollView>
        </View>

         <View style={styles.row2}>
            <TouchableOpacity 
              style={styles.filterTag} 
              onPress={handleOpenFilter}
            >
                <AntDesign name="filter" size={24} color="#B66E6F" />
                <Text style={styles.filterTagText}>Filtrar por...</Text>
            </TouchableOpacity>
        </View>

          <FlatList
            //ListHeaderComponent={}
            //ItemSeparatorComponent={}
            style={styles.cardList}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </>
    )
}