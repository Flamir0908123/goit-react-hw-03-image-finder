                  
                import axios from 'axios';

                const fetchImages = ({ currentQuery, currentPage = '1' }) =>
                  axios
                    .get(
                      `https://pixabay.com/api/?q=${currentQuery}&page=${currentPage}&key=22915499-86e114c687af7a9df784d9137&image_type=photo&orientation=horizontal&per_page=12`,
                    )
                    .then(({ data }) => data.hits);
                
                const imagesApi = {
                  fetchImages,
                };
                
                export default imagesApi;