import JobCard from "./components/jobCard";
import { jobsData } from "@/data/job-data";


export default function AboutUs() {
  return (
    <div>
        {/* <JobCard title="Remote React NextJS Developer" description="New Role"/>
        <JobCard title="Remote Python Developer" description="Senior Role"/> */}


        {
          jobsData.map((job) => {
            return <JobCard key={job.id} title={job.title} description={job.description}/>
          })  
        }
    </div>
  )
}
