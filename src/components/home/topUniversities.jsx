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
                `${process.env.REACT_APP_API_URL}/course/allCourses`,
                {
                    method: 'GET'
                }
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setCourses(data);
            console.log('Fetched courses:', data); // Logging fetched data
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
                            <img
                                src="https://islington.edu.np/images/infrastructure/kumari-block/kumari-four.jpg" // Placeholder image URL
                                alt="College Campus"
                                className="w-[100%] h-[8rem]"
                            />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojoPFipxWiMDGCJuuizZ1d8CrvJGImn64sWaBcadHpbgtetenSL-EA6eSs4EM2Y2v0RY&usqp=CAU" 
                            alt="image" 
                            className="absolute top-[0.325rem] left-[0.335rem] h-[2.5rem] rounded-full bg-white" />
                        </div>
                        <div className="p-1">
                            <h3 className="pl-2 text-base">Courses</h3>
                            <ul className="pl-6 text-base list-disc list-inside">
                                <li>{course.courseName}</li>
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
