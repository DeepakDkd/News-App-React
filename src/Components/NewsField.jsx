import React, { useEffect, useState } from 'react'
import useNews from '../Hooks/useNews';
import Homepage from './Homepage';
import { Link } from 'react-router-dom';
import Loader from './Loader';
function NewsField({ category, qry }) {
    const [postSize, setPostSize] = useState(10)
    const [page, setPage] = useState(1)

    const country = "in";
    if (!category) {
        category = "general"
    }

    const news = useNews({ country, category, postSize, qry });

    console.log(news)

    const totalPage = news ? (Math.ceil(news.totalResults / 10)) : 0;

    useEffect(() => {
        setPage(1);
        setPostSize(10);
        window.scrollTo({ top: 0, behavior: 'smooth' })

    }, [category, qry])

    const getmore = () => {
        setPage((prev) => prev + 1)

        setPostSize(postSize + 10)

    }
    return news ? (
        <div className='field'>
            {news && category == "general" ? <Homepage /> : null}

            {!news.totalResults == 0 ? (<>
            <div className='PostField'>
                {

                    news && news.articles.map((data) => (

                        <div key={data.title} className="card">
                            <h5>{data.source.name}</h5>

                            <img src={data.urlToImage ? data.urlToImage : "https://media.istockphoto.com/id/1397043853/video/digital-spinning-globe-animation-for-use-in-playback-videos-news-reports-loading-screens-3d.jpg?s=640x640&k=20&c=81N3o45ZRxKDmp1VLL1C9GnUjTmDRga_86iGAoX4BLU="} alt="" />

                            <h3>
                                <Link to={news && data.url } target='_blank'>{data.title} 
                                  </Link></h3>
                            <p className='description'>{data.description}</p>
                            <p>{data.publishedAt.slice(0, 10)}</p>
                            <button onClick={() => window.open(`${data.url}`, '_blank')}>Read more</button>
                        </div>
                    ))
                }
                {/* {news && totalPage == 0 ? <div className='noData'>jjkn</div>:''} */}
            </div >
            <div>
                {news && page === totalPage ? (<span className='newsEnd'>You are up-to-date! Explore other categories for more news.</span>) : (<button className='nextBtn' onClick={getmore}>Get More</button>)}
            </div> </>) :(<div className='noData'>
  <h1>Oops! No news found for <u>{qry}</u></h1>
  <p>It seems like there are no news articles matching your search.</p>
  <img src="https://your-image-url.com/no-data-image.png" alt="No data found" />
</div>
)
            }

        </div>
    ) : (<Loader />)
}

export default NewsField
