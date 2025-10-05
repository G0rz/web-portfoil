import React from "react";
import TabsComponent from "@/components/TabsComponent";
import {getEducation, getJobs, getResponsibilitiesGoals, getSkills} from "@/app/lib/data";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";

export default async function Home() {

    const skills = await getSkills();
    const jobs = await getJobs();
    const responsibilities_goals = await getResponsibilitiesGoals();
    const education = await getEducation();


    return (<main className={"sm:mx-auto w-full sm:w-2/4 min-h-screen pb-12 px-6"}>

            <Hero />
            <TechStack skills={skills} />
            <div className={"flex flex-wrap w-full my-8 gap-4"}>
                <TabsComponent variant={"underlined"} color={"primary"} size={"lg"} jobs={jobs?.reverse()}
                               responsibilities_goals={responsibilities_goals} education={education}/>
            </div>
        </main>
    );
}
