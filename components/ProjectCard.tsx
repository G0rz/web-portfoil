'use client'
import {FC} from 'react';
import {Button, Card, CardFooter, Image, Link} from "@heroui/react";
import {ProjectProps} from "@/app/lib/definitions";

const ProjectCard: FC<ProjectProps> = ({image_url, icon_url, name, url, description, tech_stack}) => {
    return (
        <Card isFooterBlurred className={"w-full h-75"}>
            <Image
                isZoomed
                removeWrapper
                alt={`Preview of the ${name} project`}
                className="object-cover"
                src={image_url}
            />
            <CardFooter
                className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex grow gap-2 items-center">
                    <Image
                        alt={`Icon of the ${name} project`}
                        className="rounded-full size-10 bg-black"
                        src={icon_url}
                    />
                    <div className="flex flex-col">
                        <p className="text-tiny text-white/60 font-bold">{name}</p>
                    </div>
                </div>
                <Button as={Link} href={url} isExternal radius="full" size="sm">
                    Visitar
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;