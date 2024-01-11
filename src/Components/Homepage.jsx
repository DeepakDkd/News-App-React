import React, { useEffect, useState } from 'react'
import SearchPage from './SearchPage'

function Homepage({ news }) {
    const [bgTitle, setBgTitle] = useState('')
    const [bgUrl, setBgUrl] = useState('')
    
    const [titles, setTitles] = useState([])
    const [title, setTitle] = useState()
    //    console.log(news && news.articles)
    const intiSlide = "Welcome to Quick News, where we believe that staying informed shouldn't be a task but a delightful experience. Join us as we unfold the day's stories, painting a vivid picture with simple words and engaging narratives. Your journey with us promises not just news but a daily rendezvous with knowledge, made simple for you."

    const homebg = [
        {
            name: 'Politics',
            url: 'https://cdn.narendramodi.in/wp-content/uploads/downloads/Wallpaper/8.jpg'
        },
        {
            name: 'Science',
            url: 'https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309_1280.jpg'
        },
        {
            name: 'Health',
            url: 'https://st.depositphotos.com/1907633/2382/i/600/depositphotos_23829545-stock-photo-medicine-doctor-hand-working-with.jpg'
        },
        {
            name: 'Technology',
            url: 'https://media.istockphoto.com/id/1209116250/photo/rapid-growth-concept-with-downtown-san-francisco-skyline.jpg?s=2048x2048&w=is&k=20&c=wyTzhXmyeICjy6vaZWCCeLy56sWs9fy24YC96c4ahio='
        }, {
            name: 'Entertainment',
            url: 'https://media.istockphoto.com/id/104091659/photo/kuala-lumpur-malaysia.jpg?s=2048x2048&w=is&k=20&c=23LoG77yZKRaSvONxnzI83SDIf2zWmYzDgdSkZ7FRZ4='
        },
        {
            name: 'Sports',
            url: 'https://media.istockphoto.com/id/469569148/photo/soccer-fans-at-stadium.jpg?s=2048x2048&w=is&k=20&c=sewnfh2whhBzKN9eNxc3Qalz8DLXLUTGm-aJDPEot9s='
        }
    ]

    useEffect(() => {
        let i = 0

        const Changer = setInterval(() => {
            if (i < homebg.length) {
                i = 0
            }
            setBgTitle(homebg[i].name)
            setBgUrl(homebg[i].url)

            i = i + 1

        }, 4000)
        return () => clearInterval(Changer)
    }, [])



    const titleArr = news && news.articles
    console.log(titleArr)
    // let ArrIdx = 0

    useEffect(() => {

        setTitles(news.articles)

    }, [titleArr])

    let titleIdx = 0
    useEffect(() => {
        const TitleTimer = setInterval(() => {
            if (titleIdx < titles.length) {
                titleIdx = 0
            }
            // console.log(titles[0].title)
            setTitle(titles[titleIdx])
            titleIdx += 1
        }, 25000)

        return () => clearInterval(TitleTimer)
    }, [titles])




    return (
        <>


            <div className="home">
                <div className="pic" style={{ backgroundImage: `url(${bgUrl})` }}></div>
                <SearchPage />
                <div className="hometext">
                    {/* <h1>Quick News </h1> */}
                    {/* <h2>Stay Informed Anytime</h2> */}
                    <h2>{bgTitle}</h2>

                </div>

                <div className='slidingNews'>
                    <div>Headlines</div>
                    {
                        title ? <marquee behavior="sliding" direction="left" key={title.title}>{title.title}</marquee> : <marquee behavior="sliding" direction="left" key={intiSlide}>{intiSlide}</marquee>

                    }
                </div>
            </div>

        </>
    )
}

export default Homepage