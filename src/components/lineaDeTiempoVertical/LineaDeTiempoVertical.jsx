import "./lineaDeTiempoVertical.css";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaBriefcase, FaStar } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";

const LineaDeTiempoVertical = () => {
    return (
        <>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2023 - 2024"
                    iconStyle={{ background: '#fff', color: '#5c7dd2' }}
                    icon={<IoSchoolOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Curso Oracle/Alura</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p className="vertical-timeline-element-text">
                        Curso de Desarrollo Frontend (HTML, CSS, JS y React)
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#c9d2ee', color: '#5c7dd2' }}
                    contentArrowStyle={{ borderRight: '7px solid #c9d2ee' }}
                    date="2022 - 2023"
                    iconStyle={{ background: '#c9d2ee', color: '#fff' }}
                    icon={<IoSchoolOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Testing QA Manual</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p className="vertical-timeline-element-text">
                        Certificacion de Testing QA dado por MindHub LA
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021 - 2022"
                    iconStyle={{ background: '#fff', color: '#5c7dd2' }}
                    icon={<IoSchoolOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Responsive Web Design</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certificacion</h4>
                    <p className="vertical-timeline-element-text">
                        Certificacion de Diseño Web Responsive
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#c9d2ee', color: '#5c7dd2' }}
                    contentArrowStyle={{ borderRight: '7px solid #c9d2ee' }}
                    date="2019 - 2022"
                    iconStyle={{ background: '#c9d2ee', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Crexel SRL.</h3>
                    <h4 className="vertical-timeline-element-subtitle">Buenos Aires, Arg</h4>
                    <p className="vertical-timeline-element-text">
                        Instalación, puesta en marcha y reparacion de sistemas de energia ininterrumpida
                        (UPS).
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015 - 2019"
                    iconStyle={{ background: '#fff', color: '#5c7dd2' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Diginex</h3>
                    <h4 className="vertical-timeline-element-subtitle">Buenos Aires, Arg</h4>
                    <p className="vertical-timeline-element-text">Instalación, puesta en marcha y reparacion de sistemas de energia ininterrumpida
                        (UPS).</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#c9d2ee', color: '#5c7dd2' }}
                    contentArrowStyle={{ borderRight: '7px solid #c9d2ee' }}
                    date="2010 - 2014"
                    iconStyle={{ background: '#c9d2ee', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">APC by Schneider Electric</h3>
                    <h4 className="vertical-timeline-element-subtitle">Buenos Aires, Arg</h4>
                    <p className="vertical-timeline-element-text">
                        Soporte telefónico a clientes, pedido de garantías y atención a centros autorizados
                        de servicios de cono sur
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    iconStyle={{ background: '#fff', color: '#5c7dd2' }}
                    icon={<FaStar />}
                />
            </VerticalTimeline>
        </>
    )
}


export default LineaDeTiempoVertical;