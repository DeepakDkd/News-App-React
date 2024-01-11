import React, { useEffect, useState } from 'react';
import useNews from '../Hooks/useNews';
import Homepage from './Homepage';
import { Link } from 'react-router-dom';
import Loader from './Loader';

function NewsField({ category, qry }) {
    // State variables for managing pagination
    const [postSize, setPostSize] = useState(10);
    const [page, setPage] = useState(1);

    // Default country for news API
    const country = "in";

    // If category is not provided, set it to "general"
    if (!category) {
        category = "general";
    }

    // Fetch news data using custom hook
    const news = useNews({ country, category, postSize, qry });

    // Calculate total number of pages based on the number of articles
    const totalPage = news ? Math.ceil(news.totalResults / 10) : 0;

    // Scroll to the top of the page when category or query changes
    useEffect(() => {
        setPage(1);
        setPostSize(10);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [category, qry]);

    // Function to load more news articles
    const getmore = () => {
        setPage((prev) => prev + 1);
        setPostSize(postSize + 10);
    };

    return news ? (
        <div className='field'>
            {/* Render Homepage component if the category is "general" */}
            {news && category === "general" ? <Homepage news={news} /> : null}

            {/* Check if there are news articles */}
            {!news.totalResults == 0 ? (
                <>
                    {/* Render news articles */}
                    <div className='PostField'>
                        {news &&
                            news.articles.map((data) => (
                                <div key={data.title} className='card'>
                                    <h5>{data.source.name}</h5>

                                    <img
                                        src={
                                            data.urlToImage
                                                ? data.urlToImage
                                                : 'https://media.istockphoto.com/id/1397043853/video/digital-spinning-globe-animation-for-use-in-playback-videos-news-reports-loading-screens-3d.jpg?s=640x640&k=20&c=81N3o45ZRxKDmp1VLL1C9GnUjTmDRga_86iGAoX4BLU='
                                        }
                                        alt=''
                                    />

                                    <h3>
                                        <Link to={data.url} target='_blank'>
                                            {data.title}
                                        </Link>
                                    </h3>
                                    <p className='description'>{data.description}</p>
                                    <p>{data.publishedAt.slice(0, 10)}</p>
                                    <button onClick={() => window.open(`${data.url}`, '_blank')}>Read more</button>
                                </div>
                            ))}
                    </div>

                    {/* Render pagination button or end message */}
                    <div>
                        {news && page === totalPage ? (
                            <span className='newsEnd'>You are up-to-date! Explore other categories for more news.</span>
                        ) : (
                            <button className='nextBtn' onClick={getmore}>
                                Get More
                            </button>
                        )}
                    </div>
                </>
            ) : (
                // Render no data message if no articles found
                <div className='noData'>
                    <h1>
                        Oops! No news found for <u>{qry}</u>
                    </h1>
                    <p>It seems like there are no news articles matching your search.</p>
                    <div className='noDataimg'>
                        <img src='https://2.bp.blogspot.com/-SXNnmaKWILg/XoNVoMTrxgI/AAAAAAAAxnM/7TFptA1OMC8uk67JsG5PcwO_8fAuQTzkQCLcBGAsYHQ/s1600/giphy.gif' alt='No data found' />
                    </div>
                </div>
            )}
        </div>
    ) : (
        // Render loader while fetching news data
        <Loader />
    );
}

export default NewsField;
