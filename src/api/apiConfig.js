const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '298a2633eca86d62bc2b06645d832e06',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;