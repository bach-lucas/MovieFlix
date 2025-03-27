//Rastrear as pesquisas feitas pelo usuário

import {Client, Databases, Query} from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const databases = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
    const result = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal('searchTerm', query)
    ])

    console.log(result)
    // Checar se a pesquisa feita pelo usuário já foi alocada
    // Se o documento já foi alocada incrementa o campo searchCount
    // Caso não tenha sido alocado
        // Cria um novo documento na base de dados do Appwrite -> 1

}