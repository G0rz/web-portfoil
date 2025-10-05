export interface JobProps {
    id: number;
    job_title: string | null;
    company_name: string | null;
    location: string | null;
    start_date: string;
    end_date: string | null;
    current: boolean;
    job_url: string | null;
    created_at: string;
}

export interface SkillProps {
    id: number;
    created_at: string;
    name: string | null;
    color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
    variant: "flat" | "solid" | "bordered" | "light" | "faded" | "shadow" | "dot" | undefined;
    active: boolean | null;
}

export interface EducationProps {
    id: number;
    created_at: string | null;
    start_date: string;
    end_date: string | null;
    current: boolean;
    school_name: string | null;
    active: boolean | null;
    course_title: string | null;
}

export interface ResponsibilitiesProps {
    id: number;
    created_at: string | null;
    description: string | null;
    id_job: number | null;
}

export interface TabProps {
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "underlined" | "bordered" | "light";
    jobs: JobProps[] | undefined;
    responsibilities_goals: ResponsibilitiesProps[] | null;
    education: EducationProps[] | null;
}

export interface ProjectProps {
    name: string | null;
    image_url: string | Blob |  undefined;
    description: string | null;
    tech_stack: string | null;
    icon_url: string | Blob |  undefined;
    url: string | undefined;
}

export interface IconProps {
    fill: string;
    size?: number;
    height?: number;
    width?: number;
}