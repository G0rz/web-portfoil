import {supabase} from "@/utils/supabase/browser-client";

export const getSkills = async () => {
    try {
        const {data: skills, error} = await supabase.from('skills').select('*');
        if (error) {
            console.error('Error fetching skills:', error);
            return null;
        }
        return skills;
    } catch (error) {
        console.error('An unexpected error occurred while fetching skills:', error);
        return null;
    }
}

export const getJobs = async () => {
    try {
        const {data: jobs, error} = await supabase.from('jobs').select('*').order('id');
        if (error) {
            console.error('Error fetching jobs:', error);
            return null;
        }
        return jobs;
    } catch (error) {
        console.error('An unexpected error occurred while fetching jobs:', error);
        return null;
    }
}

export const getResponsibilitiesGoals = async () => {
    try {
        const {data: responsibilities_goals, error} = await supabase
            .from('responsibilities_goals')
            .select('*');
        if (error) {
            console.error('Error fetching responsibilities and goals:', error);
            return null;
        }
        return responsibilities_goals;
    } catch (error) {
        console.error('An unexpected error occurred while fetching responsibilities and goals:', error);
        return null;
    }
}

export const getEducation = async () => {
    try {
        const {data: education, error} = await supabase.from('education').select('*');
        if (error) {
            console.error('Error fetching education:', error);
            return null;
        }
        return education;
    } catch (error) {
        console.error('An unexpected error occurred while fetching education:', error);
        return null;
    }
}

export const getProjects = async () => {
    try {
        const {data: projects, error} = await supabase.from('projects').select('*');
        if (error) {
            console.error('Error fetching projects:', error);
            return null;
        }
        return projects;
    } catch (error) {
        console.error('An unexpected error occurred while fetching projects:', error);
        return null;
    }
}