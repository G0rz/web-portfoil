'use client';

import React, {FC} from "react";
import {Tab, Tabs} from "@heroui/tabs";
import {Accordion, AccordionItem} from "@heroui/react";
import {JobProps} from "@/app/lib/definitions"

interface EducationProps {
    id: number;
}

interface ResponsabilitiesProps {
    id: number;
    created_at?: string;
    description?: string;
    id_job?: number;
}

interface TabProps {
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
    variant?: "solid" | "underlined" | "bordered" | "light" | undefined;
    jobs?: JobProps[] | undefined | null;
    responsibilities_goals?: ResponsabilitiesProps[] | undefined | null;
    education?: EducationProps[];
}

const TabsComponent: FC<TabProps> = ({color, size, variant, jobs, education, responsibilities_goals}) => {
    // if (jobs) {
    //     const date = new Date(jobs[0].end_date)
    // }

    return (<div className={" w-full"}>
        <Tabs aria-label="Tabs colors" color={color} size={size} variant={variant}>
            <Tab key="experience" title="Experience">
                <Accordion>
                    {jobs?.length ? jobs.map((job) => {
                        const startDate = job.start_date !== null ? new Date(job.start_date).toLocaleDateString('es-MX') : "";
                        const endDate = job.end_date !== null ? new Date(job.end_date).toLocaleDateString('es-MX') : "Present";

                        return <AccordionItem key={job.id} aria-label={job.job_title}
                                              title={<p className={'flex'}>
                                                  <span>{job.job_title}</span>
                                                  <span
                                                      className={'md:ml-auto'}>{startDate} to {endDate}</span>
                                              </p>}
                                              subtitle={<div>
                                                  <p>{job.company_name}</p>
                                                  <p className={''}>{job.location}</p>
                                              </div>}>
                            <ul className={'pl-8'}>
                                {responsibilities_goals?.length ? responsibilities_goals?.map((goal, key) => {
                                    return job.id === goal.id_job ?
                                        <li key={key} className={'list-disc'}>{goal.description}</li>
                                        : null
                                }) : null}
                            </ul>
                        </AccordionItem>
                    }) : <AccordionItem key={'Last Job'} aria-label={'Front-End Web Developer'}
                                        title={<p className={'md:flex'}>
                                            <span className={'md:w-1/2 sm:w-full'}>Front-End Web Developer</span>
                                            <span className={'sm:w-full sm:ml-0 md:ml-auto text-xs'}>Marzo 2024 - Diciembre 2025</span>
                                        </p>}
                                        subtitle={<div>
                                            <p>Inbound Marketing México</p>
                                            <p className={''}>Metepec, Estado de México</p>
                                        </div>}>
                        <ul>
                            <li className={'list-disc'}>asdadada</li>
                            <li className={'list-disc'}>asdadada</li>
                            <li className={'list-disc'}>asdadada</li>
                            <li className={'list-disc'}>asdadada</li>
                            <li className={'list-disc'}>asdadada</li>
                        </ul>
                    </AccordionItem>}
                </Accordion>
            </Tab>
            <Tab key="education" title="Education"></Tab>
        </Tabs>
    </div>);
};

export default TabsComponent;