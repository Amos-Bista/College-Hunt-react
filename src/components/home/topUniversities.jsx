import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TopUniversity = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API}/course/allCourses`,
                // 'http://103.243.100.22:8080/course/allCourses',
                {
                    method: 'GET'
                }
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setCourses(data);
            // console.log('courses',  `${import.meta.env.VITE_API_BASE_URL}/course/allCourses`)
            console.log('courses', courses)

            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

   

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        gap: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // lg
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // md
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // sm
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-[1.875rem] px-[5rem]">
            <div className="text-3xl font-medium underline underline-offset-2 pb-[3%] pl-4">
                Top Colleges
            </div>
            <Slider {...settings}>
                {courses.map((course) => (
                    <div key={course.courseId} className="h-auto rounded-[0.5rem] opacity-100 shadow-lg bg-blue-50 overflow-hidden ">
                        <div className="relative">
                            { console.log('image', course.courseDocument) }
                            <img
                            // src={`${import.meta.env.VITE_API_BASE_URL}/course/${course.courseDocument}`}
                            src="./isgli.png"
                            alt="College Cmapus"
                            className="w-[100%] h-[10rem]"
                            />
                            <img src="./logois.png" alt="College Logo" className="absolute top-[0.325rem] left-[0.335rem] w-[2.5rem] h-[2.5rem] rounded-full" />
                        </div>
                        <div className="p-1">
                            <h3 className="pl-2 text-base">Courses</h3>
                            <ul className="pl-1 pl-6 mb-1 text-base list-disc list-inside">
                                <li >{course.courseName}</li>
                            </ul>
                            <a href="#details" className="pl-[55%]">View Details..</a>
                        </div>
                    </div>
                ))}
            </Slider>
            <style jsx>{`
                .slick-slide {
                    margin: 0 1.2rem; /* Adjust the gap between the slides */
                }
                .slick-track {
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </div>
    );
};

export default TopUniversity;
