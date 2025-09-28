export interface JobProps {
    id: number;
    job_title?: string;
    company_name?: string;
    location?: string;
    start_date: string;
    end_date: string;
    current: boolean;
    job_url?: string;
    created_at: string;
}

export interface SkillProps {
    id: number;
    created_at: string;
    job_title?: string;
    name?: string;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
    variant?: "solid" | "bordered" | "light" | undefined;
    active?: boolean;
}