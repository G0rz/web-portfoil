import ProjectCard from "@/components/ProjectCard";
import {getProjects} from "@/app/lib/data";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Proyectos',
    description: 'Explora los proyectos creados por Leonardo Becerril. Una colección de aplicaciones web y software.',
    alternates: {
        canonical: '/projects',
    },
};

export default async function ProjectsPage() {
    const projects = await getProjects();

    if (!projects || projects.length === 0) {
        return (
            <main className={"sm:mx-auto w-full sm:w-2/4 min-h-screen pb-12 px-6"}>
                <h1 className={"text-4xl font-extrabold w-full my-8"}>Proyectos</h1>
                <h2 className={'text-3xl font-extrabold w-full my-8 text-center'}>No hay proyectos disponibles.</h2>
            </main>
        );
    }

    const latestProject = projects[projects.length - 1];
    const otherProjects = projects.slice(0, projects.length - 1);

    return (
        <main className={"sm:mx-auto w-full sm:w-2/4 min-h-screen pb-12 px-6"}>
            <h1 className={"text-4xl font-extrabold w-full my-8"}>Proyectos</h1>

            <h2 className={'text-3xl font-bold w-full mb-4'}>Último Proyecto</h2>
            <div className={"flex flex-wrap w-full items-center justify-center md:gap-4 gap-2 mb-8"}>
                <ProjectCard
                    key={latestProject.id}
                    url={latestProject.url}
                    icon_url={latestProject.icon_url}
                    image_url={latestProject.image_url}
                    name={latestProject.name} description={null} tech_stack={null}                />
            </div>

            {otherProjects.length > 0 && (
                <>
                    <h2 className={'text-3xl font-bold w-full my-4'}>Otros Proyectos</h2>
                    <div className={"flex flex-wrap w-full items-center justify-center md:gap-4 gap-2"}>
                        {otherProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                url={project.url}
                                icon_url={project.icon_url}
                                image_url={project.image_url}
                                name={project.name} description={null} tech_stack={null}                            />
                        ))}
                    </div>
                </>
            )}
        </main>
    );
}
