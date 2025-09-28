import {supabase} from "@/utils/supabase/browser-client";

export const getSkills = async () => {
    const {data: skills} = await supabase.from('skills').select('*');
    return skills;
}

export const getJobs = async () => {
    const {data: jobs} = await supabase.from('jobs').select('*').order('id');
    return jobs;
}

export const getResponsibilitiesGoals = async () => {
    const {data: responsibilities_goals} = await supabase
        .from('responsibilities_goals')
        .select('*')
    return responsibilities_goals;
}