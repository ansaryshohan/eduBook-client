import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCourse from '../../SingleCourse/SingleCourse';

const CourseSection = () => {
 const [userdata,setUserdata]=useState([])

 useEffect(()=>{
   fetch('https://e-learnign-server.vercel.app/courses/2')
   .then(res=>res.json())
   .then(data=>setUserdata(data))
 },[])

 const threeData= userdata.filter(user=> user.id<4);
//  console.log(threeData)

  return (
    <div className='relative pb-8 mb-10'>

      <h1 className='text-center mt-12  text-5xl font-bold'>Our Popular Courses</h1>
      <div className="divider mb-20 w-5/12 mx-auto"></div>
     <div className='lg:grid sm:flex  sm:justify-center sm:items-center lg:grid-cols-3 sm:gap-6 lg:gap-6 lg:w-10/12 mx-auto pb-36 '>
      {
        threeData.map(course=><SingleCourse
        key={course.id}
        course={course}></SingleCourse> )
      }
     </div>
     <Link to='/courses'>
     <button className="btn btn-accent w-3/5 text-2xl font-bold absolute lg:right-1/2 bottom-0 sm:left-1/4">View ALL COURSES</button>
     </Link>
    </div>
  );
};

export default CourseSection;