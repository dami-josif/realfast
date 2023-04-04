import React from 'react'

export default function JobCard({title,description}) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Apply Now</button>
    </div>
  )
}
