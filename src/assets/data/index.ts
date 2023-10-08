import {Team1, Team2, Team3, Team4, Team5, Team6} from '../img/teams_imgs';

interface ProcessData{
    title: string,
    description: string
}

export const processData: ProcessData[] = [
    {
        title: "Consultation",
        description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        title: "Research and Strategy Development",
        description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        title: "Implementation",
        description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        title: "Monitoring and Optimization",
        description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        title: "Reporting and Communication",
        description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        title: "Continual Improvement",
        description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },

]

export interface TeamsMember {
    fullName: string,
    linkedin: string,
    jobPost:string,
    description: string,
    img: string,
}

export const teamMember:TeamsMember[] = [
    {
        fullName: 'John Smith',
        linkedin: 'https://www.linkedin.com/in/max-motsyk-981181219/',
        jobPost: 'CEO and Founder',
        description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        img: Team1
    },
    {
        fullName: 'Jane Doe',
        linkedin: 'https://www.linkedin.com/in/max-motsyk-981181219/',
        jobPost: 'Director of Operations',
        description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        img: Team2
    },
    {
        fullName: 'Michael Brown',
        linkedin: 'https://www.linkedin.com/in/max-motsyk-981181219/',
        jobPost: 'Senior SEO Specialist',
        description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        img: Team3
    },
    {
        fullName: 'Emily Johnson',
        linkedin: 'https://www.linkedin.com/in/max-motsyk-981181219/',
        jobPost: 'PPC Manager',
        description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        img: Team4
    },
    {
        fullName: 'Brian Williams',
        linkedin: 'https://www.linkedin.com/in/max-motsyk-981181219/',
        jobPost: 'Social Media Specialist',
        description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        img: Team5
    },
    {
        fullName: 'Sarah Kim',
        linkedin: 'https://www.linkedin.com/in/max-motsyk-981181219/',
        jobPost: 'Content Creator',
        description: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
        img: Team6
    }
]

export interface ITestimonials{
    review:string,
    autor: string,
    jobPost: string
}

export const testiMonials: ITestimonials[] = [
    {
        review:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        autor:"John Smith",
        jobPost: "Marketing Director at XYZ Corp"
    },
    {
        review:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        autor:"John Smith",
        jobPost: "Marketing Director at XYZ Corp"
    },
    {
        review:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        autor:"John Smith",
        jobPost: "Marketing Director at XYZ Corp"
    },
    {
        review:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        autor:"John Smith",
        jobPost: "Marketing Director at XYZ Corp"
    },
    {
        review:'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        autor:"John Smith",
        jobPost: "Marketing Director at XYZ Corp"
    }
]

