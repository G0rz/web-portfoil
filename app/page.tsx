"use client"
import {Image} from "@heroui/react";
import NextImage from "next/image";
import {Chip} from "@heroui/chip";

export default function Home() {

    const skills = [
        {name: "Typescript"},
        {name: "Next.js"},
        {name: "React"},
        {name: "MUI"},
        {name: "Tailwind"},
        {name: "Vue.js"},
        {name: "Git"},
        {name: "Javascript"},
        {name: "Laravel/Blade"},
        {name: "PHP"},
        {name: "Bootstrap"},
        {name: "CSS"},
        {name: "HTML"},
        {name: "SQL"},
        {name: "UNIX/Linux"}
    ];
    const experiences = [
        {startDate: '', endDate: '', jobTitle: '', companyName: '', activities: ['']}
    ]

    const education = [
        {startDate: '', endDate: '', jobTitle: '', companyName: '', activities: ['']}
    ]

    return (<main className={"sm:mx-auto w-full sm:w-2/4 min-h-screen px-6"}>
            <div className={"flex flex-wrap  w-full text-center sm:text-start my-8 gap-4"}>
                <div className={"mx-auto sm:m-0"}>
                    <Image
                        alt="Profile Image"
                        as={NextImage}
                        className="rounded-full"
                        fallbackSrc="/images/profile.webp"
                        priority
                        src="/images/profile.webp"
                        width={250}
                        height={250}
                    />
                </div>
                <h1 className="text-4xl font-extrabold w-full">Leonardo Becerril</h1>
                <strong className="text-lg w-full">Ingeniero en Sistemas Computacionales</strong>
            </div>
            <div className={"flex flex-wrap w-full my-8 gap-4"}>
                <h2 className="text-3xl font-bold w-full">Tech Stack</h2>
                <div className={" flex flex-wrap gap-2"}>
                    {skills.map((skill) => {
                        return <Chip color="primary" variant="flat" key={skill.name}>
                            {skill.name}
                        </Chip>
                    })}
                </div>
            </div>
            <div className={"flex flex-wrap w-full my-8 gap-4"}>
                <h2 className="text-3xl font-bold w-full">Experience</h2>
                {experiences.length > 0 ? experiences.map((experience) => {
                    return <></>
                }) : "Sin experiencias"}
            </div>
        </main>
    );
}
