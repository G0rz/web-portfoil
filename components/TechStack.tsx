import {Chip} from "@heroui/chip";
import {SkillProps} from "@/app/lib/definitions";

export default function TechStack({skills}: { skills: SkillProps[] | null }) {
    return (
        <div className={"flex flex-wrap w-full my-8 gap-4"}>
            <h2 className="text-3xl font-bold w-full">Tech Stack</h2>
            <div className={" flex flex-wrap gap-2"}>
                {skills !== null ? skills.map((skill) => {
                    return <Chip size={"lg"} color={skill.color} variant={skill.variant} key={skill.name}>
                        {skill.name}
                    </Chip>
                }) : <>
                    <Chip size={"lg"} color="danger">Next.js</Chip>
                    <Chip size={"lg"} color="danger">Typescript</Chip>
                    <Chip size={"lg"} color="danger">TailwindCSS</Chip>
                </>}
            </div>
        </div>
    )
}