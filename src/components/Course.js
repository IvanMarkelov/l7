import React from 'react'
import { CourseMaterials } from './CourseMaterials'
import { CourseProjects } from './CourseProjects'
import { Feedback } from './Feedback'

export const Course = () => {
    return (
        <div>
            <CourseProjects />
            <CourseMaterials />
            <Feedback />
        </div>
    )
}
