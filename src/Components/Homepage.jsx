import React, { useEffect, useState } from 'react';
import SearchPage from './SearchPage';

function Homepage({ news }) {
    // State variables for background title and URL
    const [bgTitle, setBgTitle] = useState('');
    const [bgUrl, setBgUrl] = useState('');

    // State variables for managing titles and current title
    const [titles, setTitles] = useState([]);
    const [title, setTitle] = useState();
    const [headlineIndex , setHeadlineIndex] = useState(0)

    // Initial slide text for the marquee
    const intiSlide = "Welcome to Quick News, where we believe that staying informed shouldn't be a task but a delightful experience. Join us as we unfold the day's stories, painting a vivid picture with simple words and engaging narratives. Your journey with us promises not just news but a daily rendezvous with knowledge, made simple for you.";

    // Background images for different categories
    const homebg = [
        { name: 'Politics', url: 'https://cdn.narendramodi.in/wp-content/uploads/downloads/Wallpaper/8.jpg' },
        { name: 'Science', url: 'https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309_1280.jpg' },
        { name: 'Health', url: 'https://st.depositphotos.com/1907633/2382/i/600/depositphotos_23829545-stock-photo-medicine-doctor-hand-working-with.jpg' },
        { name: 'Technology', url: 'https://media.istockphoto.com/id/1209116250/photo/rapid-growth-concept-with-downtown-san-francisco-skyline.jpg?s=2048x2048&w=is&k=20&c=wyTzhXmyeICjy6vaZWCCeLy56sWs9fy24YC96c4ahio=' },
        { name: 'Entertainment', url: 'https://media.istockphoto.com/id/104091659/photo/kuala-lumpur-malaysia.jpg?s=2048x2048&w=is&k=20&c=23LoG77yZKRaSvONxnzI83SDIf2zWmYzDgdSkZ7FRZ4=' },
        { name: 'Sports', url: 'https://media.istockphoto.com/id/469569148/photo/soccer-fans-at-stadium.jpg?s=2048x2048&w=is&k=20&c=sewnfh2whhBzKN9eNxc3Qalz8DLXLUTGm-aJDPEot9s=' }
    ];

    // Change background image in intervals
    useEffect(() => {
        let i = 0;

        const changerInterval = setInterval(() => {
            if (i === homebg.length - 1) {
                i = 0;
            }
            setBgTitle(homebg[i].name);
            setBgUrl(homebg[i].url);

            i += 1;
        }, 4000);

        // Cleanup interval on component unmount
        return () => clearInterval(changerInterval);
    }, []);

    // Set titles when news.articles change
    useEffect(() => {
        setTitles(news.articles);
    }, [news.articles]);

    // Change current title in intervals
    
    useEffect(() => {
        const titleTimer = setInterval(() => {
            if (headlineIndex == titles.length - 1) {
                setHeadlineIndex(0)
            }
            setTitle(titles[headlineIndex]);
            setHeadlineIndex(headlineIndex + 1);
        }, 25000);

        // Cleanup interval on component unmount
        return () => clearInterval(titleTimer);
    }, [headlineIndex]);

    return (
        <>
            <div className="home">
                {/* Background image */}
                <div className="pic" style={{ backgroundImage: `url(${bgUrl})` }}></div>
                {/* Search bar */}
                <SearchPage />
                {/* Display current category */}
                <div className="hometext">
                    <h2>{bgTitle}</h2>
                </div>
                {/* Display sliding news headlines */}
                <div className='slidingNews'>
                    <div>Headlines</div>
                    {/* Use marquee for sliding headlines */}
                    {title ? <marquee behavior="sliding" direction="left" key={title.title}>{title.title}</marquee> : <marquee behavior="sliding" direction="left" key={intiSlide}>{intiSlide}</marquee>}
                </div>
            </div>
        </>
    );
}

export default Homepage;
