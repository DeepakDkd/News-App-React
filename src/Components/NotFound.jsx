import React from 'react'

function NotFound({qry}) {
  return (
    <div className='noData'>
                    <h1>
                        Oops! No news found for <u>{qry}</u>
                    </h1>
                    <p>It seems like there are no news articles matching your search.</p>
                    <div className='noDataimg'>
                        <img src='https://2.bp.blogspot.com/-SXNnmaKWILg/XoNVoMTrxgI/AAAAAAAAxnM/7TFptA1OMC8uk67JsG5PcwO_8fAuQTzkQCLcBGAsYHQ/s1600/giphy.gif' alt='No data found' />
                    </div>
                </div>
  )
}

export default NotFound