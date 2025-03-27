export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,

    }
} // Acima, configuração da API do site TMDB onde eles passam uma API gratuita com vários filmes e mostram seu resumo e detalhes

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query // Se existir procura, mostre o que foi passado, se não, mostre os filmes populares.
       ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
       : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.descr`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })

    if(!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to fetch movies.')
    }

    const data = await response.json()
    return data.results || []
}

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        })

        if(!response.ok) throw new Error('Failed to fetch movie details.')

        const data = await response.json()// Extração da informação da API

        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}