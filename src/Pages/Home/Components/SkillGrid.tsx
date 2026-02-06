import { Skill } from "../Schemas/Home.schema";

import "../Styles/Skills.css"

const SkillCard = (
    { skill }:
    { skill: Skill } ) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="skill-card">
                <div className="skill-icon-wrapper">
                    <i className={ `fa-solid ${ skill.icon }` }></i>
                </div>
                <h5 className="skill-title">{ skill.title }</h5>
                <p className="skill-description">
                    { skill.description }
                </p>
            </div>
        </div>
    );
};

const SkillGrid = (
    { skills, title }:
    { skills: Skill[], title: string } ) => {
    return (
        <section className="skills-section py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">
                        { title }
                    </h2>
                    <div
                        className="mx-auto"
                        style={ {
                            width: "60px",
                            height: "4px",
                            backgroundColor: "var(--main-color-hexa)",
                            marginTop: "10px",
                        } }
                    ></div>
                </div>
                
                <div className="row g-4 justify-content-center skills-row">
                    { skills.map( (
                                      skill: Skill,
                                      index: number,
                                  ) => (
                        <SkillCard key={ index } skill={ skill }/>
                    ) ) }
                </div>
            </div>
        </section>
    );
};

export default SkillGrid;
