import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const CourseContainer = () => {

 const [courseData, setCourseData] = useState([])

 useEffect(() => {
   fetch('courseRegistration.json')
   .then(res => res.json())
   .then(data => setCourseData(data))
 },[])
// console.log(courseData);
  return (
    <div className="max-w-7xl mx-auto mt-10 flex">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {courseData.map((paramitarpass) => <Card habib={paramitarpass} key={paramitarpass.id}></Card>)}
        </div>


        <div className="w-[50%] ml-5 shadow bg-slate-50">
          <div>
            <h1 className="text-center mx-auto font-semibold text-xl text-cyan-300 mb-4">Credit Hour Remaining 20 hr</h1>
            <hr />
          </div>
        </div>
    </div>
  );
};

export default CourseContainer;
