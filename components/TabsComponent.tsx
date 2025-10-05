'use client';

import React, {FC} from "react";
import {Tab, Tabs} from "@heroui/tabs";
import {Accordion, AccordionItem} from "@heroui/react";
import {TabProps} from "@/app/lib/definitions"

const TabsComponent: FC<TabProps> = ({color, size, variant, jobs, education, responsibilities_goals}) => {

    return (<div className={" w-full"}>
        <Tabs aria-label="Tabs colors" color={color} size={size} variant={variant}>
            <Tab key="experience" title="Experiencia">
                <Accordion>
                    {jobs?.length ? jobs.map((job) => {
                        const startDate = job.start_date !== null ? new Date(job.start_date).toLocaleDateString('es-MX') : "";
                        const endDate = job.end_date !== null ? new Date(job.end_date).toLocaleDateString('es-MX') : "Presente ";

                        return <AccordionItem key={job.id} aria-label={job.job_title || ""}
                                              title={job.job_title}
                                              subtitle={<div className={'flex flex-wrap'}>
                                                  <p>{job.company_name}, {job.location}</p>
                                                  <p className={'md:ml-auto ml-0'}>{startDate} - {endDate}</p>
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
                                        title={'Front-End Web Developer'}
                                        subtitle={<div className={'flex flex-wrap'}>
                                            <p>Inbound Marketing México, Metepec, Estado de México</p>
                                            <p className={'md:ml-auto ml-0'}>Marzo 2024 - Diciembre 2025</p>
                                        </div>}>
                        <ul className={'pl-8'}>
                            <li className={'list-disc'}>Implementé y realicé mantenimiento de pasarelas de pago con
                                Stripe.
                            </li>
                            <li className={'list-disc'}>Apoyé en la investigación e implementación de una librería de
                                web scraping para el desarrollo de un sitio web que utiliza IA generativa para crear
                                artículos informativos automáticamente para diversos sitios de noticias.
                            </li>
                            <li className={'list-disc'}>Contribuí en el análisis, levantamiento de requerimientos,
                                diseño, desarrollo y optimización de código de aplicaciones tipo SaaS y CMS, lo que
                                redujo los tiempos de carga en un 15%.
                            </li>
                        </ul>
                    </AccordionItem>}
                </Accordion>
            </Tab>
            <Tab key="education" title="Educación">
                <Accordion disabledKeys={["1", "2", "3"]}>
                    {education?.length ? education.map((course) => {
                        const startDate2 = course.start_date !== null ? new Date(course.start_date).toLocaleDateString('es-MX') : "";
                        const endDate2 = course.end_date !== null ? new Date(course.end_date).toLocaleDateString('es-MX') : "Presente";
                        return <AccordionItem key={course.id} aria-label={course.course_title || ""}
                                              title={course.course_title}
                                              subtitle={<div className={'flex flex-wrap'}>
                                                  <p>{course.school_name}</p>
                                                  <p className={'md:w-auto md:ml-auto ml-0 w-full'}>{startDate2 !== '' ? `${startDate2} -` : null} {endDate2}</p>
                                              </div>}>
                        </AccordionItem>
                    }) : null}
                </Accordion>
            </Tab>
        </Tabs>
    </div>);
};

export default TabsComponent;