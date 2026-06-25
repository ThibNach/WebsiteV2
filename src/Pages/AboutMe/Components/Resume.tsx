import {
    AboutData,
    Education,
    WorkExperience,
} from "../Schemas/AboutMe.schema";
import "../Styles/AboutMe.css";
import {WithChildren} from "../../../_Shared/Schemas/Shared.schema";

const SideBarSection = (
    {title, children}:
    WithChildren<{ title: string }>) => {
    return (
        <section className="mb-4">
            <h3 className="cv-sidebar-title">{title}</h3>
            <div className="d-flex flex-wrap gap-2 mt-2">
                {children}
            </div>
        </section>

    );
};

const MainContentSection = (
    {title, children}:
    WithChildren<{ title: string }>) => {
    return (
        <section className="mb-5">
            <h3 className="cv-main-title mb-4 text-uppercase tracking-wider">{title}</h3>
            {children}
        </section>

    );
};

const DetailsList = (
    {details}:
    { details: string[] }) => {
    return (
        <ul className="cv-task-list ps-3 mb-0">
            {details.map((
                task: string,
                index: number,
            ) => (
                <li key={index} className="small text-muted mb-1">{task}</li>
            ))}
        </ul>
    );
};

// -- Sous-composant pour un item d'expérience pro
const ExperienceItem = (
    {company, role, period, tasks}:
    WorkExperience) => {
    return (
        <div className="cv-experience-item mb-4">
            <div className="d-flex justify-content-between align-items-start mb-0">
                <h4 className="h6 fw-bold text-dark mb-0">{role}</h4>
                <span className="cv-period badge bg-light text-muted fw-normal">{period}</span>
            </div>
            <div className="text-primary fw-medium mb-0">@{company}</div>
            <DetailsList details={tasks}/>
        </div>
    );
};

const EducationItem = (
    {period, title, institution, description}:
    Education) => {
    return (
        <div className="cv-education-item mb-4">
            <div className="d-flex justify-content-between align-items-baseline mb-0">
                <h6 className="h6 fw-bold mb-0">{title}</h6>
                <span className="cv-period badge bg-light text-muted fw-normal">{period}</span>
            </div>
            <div className="small text-primary fw-medium">{institution}</div>
            {description && <p className="cv-edu-desc text-muted mb-0">{description}</p>}
        </div>
    );
};

function ageFromDateOfBirthday(dateOfBirth: string): number {
    const [year, month, day] = dateOfBirth.split('-').map(Number);
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

const Sidebar = (
    {fullName, birthDate, children}:
    WithChildren<{ fullName: string, birthDate: string }>) => {
    return (
        <aside className="col-lg-4 cv-sidebar p-4 text-white">
            <div className="text-center mb-3 mt-3">
                <h4 className="h4 fw-bold mb-1">{fullName}</h4>
            </div>

            <div className="text-center mb-3">
                <img
                    src="Images/profile.png"
                    alt="Profile"
                    className="img-fluid rounded-circle profile-img-cv shadow-sm"
                />
            </div>
            <div className="text-center mb-2">
                <h4 className="h4 fw-bold mb-3">{ageFromDateOfBirthday(birthDate).toString() + " Years old"}</h4>
            </div>
            {children}
        </aside>
    );
};


const Resume = (
    {personalData, education, workExperience}:
    { personalData: AboutData, education: Education[], workExperience: WorkExperience[] }) => {
    return (

        <div className="cv-container py-5">
            <main className="cv-page shadow-lg mx-auto bg-white">
                <div className="row g-0 h-100">

                    <Sidebar
                        fullName={personalData.fullName}
                        birthDate={personalData.birthDate}
                    >
                        <SideBarSection title="Contact">
                            <ul className="list-unstyled cv-contact-list small">
                                <li className="mb-2"><i className="fa-solid fa-phone me-2"></i>
                                    <span>
                                        <a href={`tel:${personalData.phone}`}
                                           className="text-decoration-none text-reset cv-link">
                                            {personalData.phone}
                                        </a>
                                    </span>
                                </li>
                                <li className="mb-2">
                                    <i className="fa-solid fa-envelope me-2"></i>
                                    <span>
                                    <a href={`mailto:${personalData.email}`}
                                       className="text-decoration-none text-reset cv-link">
                                        {personalData.email}
                                    </a>    
                                    </span>
                                </li>
                                <li className="mb-2"><i className="fa-solid fa-location-dot me-2"></i>
                                    <span>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                                personalData.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-decoration-none text-reset cv-link"
                                        >
                                            {personalData.address}
                                        </a>
                                    </span>
                                </li>
                                <li className="mb-2"><i
                                    className="fa-brands fa-github me-2"></i>
                                    <span>
                                        <a
                                            href={`https://${personalData.github}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-decoration-none text-reset cv-link"
                                        >
                                            {personalData.github}
                                        </a>
                                    </span>
                                </li>
                                <li className="mb-2">
                                    <i className="fa-brands fa-linkedin"></i>
                                    <a
                                        href={personalData.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none text-reset cv-link ms-2"
                                    > {"linkedin.com/ThibautSpreux"}
                                    </a>
                                </li>
                                <li><i className="fa-solid fa-globe me-2"></i> {personalData.website}</li>
                            </ul>
                        </SideBarSection>
                        <SideBarSection title="Strengths">
                            <p className="small mb-0 opacity-75"> {personalData.strengths.join(" • ")}</p>
                        </SideBarSection>
                        <SideBarSection title="Tools">
                            <p className="small mb-0 opacity-75">{personalData.tools.join(" • ")}</p>
                        </SideBarSection>
                        <SideBarSection title="Languages">
                            <p className="small mb-0 opacity-75">{personalData.languages.join(" • ")}</p>
                        </SideBarSection>
                        <SideBarSection title="Hobbies">
                            <p className="small mb-0 opacity-75">{personalData.hobbies.join(" • ")}</p>
                        </SideBarSection>
                        <p className="text-white fst-italic mb-1 cv-quote">
                            "{personalData.quote}"
                        </p>
                    </Sidebar>

                    {/* --- MAIN CONTENT --- */}
                    <div className="col-lg-8 p-3">
                        <header className="mb-5 border-bottom pb-4">
                            <h1 className="display-6 fw-bold text-dark mb-2">{personalData.jobTitle}</h1>
                            <p className="text-dark  fst-italic cv-header-headline mb-4">
                                {personalData.headline}
                            </p>
                        </header>

                        <MainContentSection title="Work Experience">
                            {workExperience.map((
                                exp: WorkExperience,
                                i: number,
                            ) => (
                                <ExperienceItem key={i} {...exp} />
                            ))}
                        </MainContentSection>
                        <div className="display-6 border-bottom mb-2"></div>
                        <MainContentSection title="Education & Training">
                            {education.map((
                                edu: Education,
                                i: number,
                            ) => (
                                <EducationItem key={i} {...edu} />
                            ))}
                        </MainContentSection>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Resume;