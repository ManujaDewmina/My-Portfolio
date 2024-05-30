
import classes from "./programmingSkills.module.css";
import { useSelector } from "react-redux";
import CplusplusPlain from 'devicons-react/lib/icons/CplusplusPlain';
import PythonOriginalWordmark from 'devicons-react/lib/icons/PythonOriginalWordmark';
import JavaOriginalWordmark from 'devicons-react/lib/icons/JavaOriginalWordmark';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import Ballerina from '../../asset/ballerina.png';
import DartOriginalWordmark from 'devicons-react/lib/icons/DartOriginalWordmark';
import TypescriptOriginal from 'devicons-react/lib/icons/TypescriptOriginal';
import CPlain from 'devicons-react/lib/icons/CPlain';
import GoOriginalWordmark from 'devicons-react/lib/icons/GoOriginalWordmark'
import CsharpPlain from 'devicons-react/lib/icons/CsharpPlain';
import Html5OriginalWordmark from 'devicons-react/lib/icons/Html5OriginalWordmark';
import Css3PlainWordmark from 'devicons-react/lib/icons/Css3PlainWordmark';

import MysqlOriginalWordmark from 'devicons-react/lib/icons/MysqlOriginalWordmark';
import GoogleOriginal from '../../asset/googlecloud.png';
import AzureOriginal from 'devicons-react/lib/icons/AzureOriginal';
import DockerPlainWordmark from 'devicons-react/lib/icons/DockerPlainWordmark';
import FlutterOriginal from 'devicons-react/lib/icons/FlutterOriginal';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import FirebasePlainWordmark from 'devicons-react/lib/icons/FirebasePlainWordmark';
import BootstrapOriginalWordmark from 'devicons-react/lib/icons/BootstrapOriginalWordmark';
import GithubOriginal from 'devicons-react/lib/icons/GithubOriginal';
import TailwindcssPlain from 'devicons-react/lib/icons/TailwindcssPlain';
import Choreo from '../../asset/choreo.webp';
import Asgardeo from '../../asset/asgardeo.png';
import ConsulOriginalWordmark from 'devicons-react/lib/icons/ConsulOriginalWordmark';
import DotnetcoreOriginal from 'devicons-react/lib/icons/DotnetcoreOriginal';
import TensorflowLine from 'devicons-react/lib/icons/TensorflowLine';
import MicrosoftsqlserverOriginalWordmark from 'devicons-react/lib/icons/MicrosoftsqlserverOriginalWordmark';
import PostgresqlOriginalWordmark from 'devicons-react/lib/icons/PostgresqlOriginalWordmark';
import NginxOriginal from 'devicons-react/lib/icons/NginxOriginal';

import VscodeOriginal from 'devicons-react/lib/icons/VscodeOriginal';
import VisualstudioPlain from '../../asset/visualstudio.png';
import PycharmPlainWordmark from '../../asset/pycharm.png';
import ClionPlainWordmark from '../../asset/clion.png';
import IntellijPlainWordmark from '../../asset/intelij.png';
import Googlecolab from '../../asset/colab.png';
import AndroidstudioOriginal from 'devicons-react/lib/icons/AndroidstudioOriginal';
import KaggleOriginalWordmark from 'devicons-react/lib/icons/KaggleOriginalWordmark';
import JupyterOriginalWordmark from 'devicons-react/lib/icons/JupyterOriginalWordmark';

const languages = ["C++", "Python", "Java", "JavaScript", "Ballerina", "Dart", "TypeScript", "C", "HTML", "CSS", "Go", "C#"];
const technologies = [
    "MySQL",
    "GCP",
    "Microsoft Azure",
    "Docker",
    "Flutter",
    "React",
    "Firebase",
    "Bootstrap",
    "GitHub",
    "Tailwind",
    "WSO2 Asgardeo",
    "WSO2 Choreo"
];
const developmentTools = [
    "VS Code",
    "Visual Studio",
    "PyCharm",
    "CLion",
    "IntelliJ IDEA",
    "Google Colab",
    "Android Studio",
    "Kaggle",
    "Jupyter Notebook",
  ];
  
const ProgrammingSkills = (props) => {

    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.mainCard} style={{marginTop:"4rem"}}>
            <h1 style={{ color: nonThemeColor }}>Tech <span style={{ color: uiColor}}>Skills</span></h1>
            <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
                <div className={classes.languages}>
                    <h2>Languages</h2>
                    <div className={classes.languageIcons}>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <CplusplusPlain size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem" }}>
                            <PythonOriginalWordmark size={50} style={{ color: uiColor}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block' , margin:"1.5rem"}}>
                            <JavaOriginalWordmark size={50} style={{ color: uiColor}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block' , margin:"1.5rem"}}>
                            <JavascriptOriginal size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem" }}>
                            <img src={Ballerina} alt="Ballerina" style={{ width: "50px", height: "50px"}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem" }}>
                            <DartOriginalWordmark size={50} style={{ color: uiColor}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem" }}>
                            <TypescriptOriginal size={50} style={{ color: uiColor}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem" }}>
                            <CPlain size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem" }}>
                            <GoOriginalWordmark size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem" }}>
                            <CsharpPlain size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem" }}>
                            <Html5OriginalWordmark size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem" }}>
                            <Css3PlainWordmark size={50} style={{ color: uiColor}} />
                        </div>
                    </div>
                </div>
                <div className={classes.technologies} style={{marginTop:"2rem"}}>
                    <h2>Technologies and Framework</h2>
                    <div className={classes.technologyIcons}>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <MysqlOriginalWordmark size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <img src={GoogleOriginal} alt="Google" style={{ width: "50px", height: "50px"}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <AzureOriginal size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <DockerPlainWordmark size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <FlutterOriginal size={50} style={{ color: uiColor }} />	
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <ReactOriginal size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <FirebasePlainWordmark size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <BootstrapOriginalWordmark size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <GithubOriginal size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <TailwindcssPlain size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <ConsulOriginalWordmark size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <DotnetcoreOriginal size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <TensorflowLine size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <MicrosoftsqlserverOriginalWordmark size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <PostgresqlOriginalWordmark size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <NginxOriginal size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <img src={Asgardeo} alt="Asgardeo" style={{ width: "50px", height: "50px"}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <img src={Choreo} alt="Choreo" style={{ width: "50px", height: "50px"}} />
                        </div>
                    </div> 
                </div>
                <div className={classes.developmentTools} style={{marginTop:"2rem"}}>
                    <h2>Development Tools</h2>
                    <div className={classes.developmentToolIcons}>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <VscodeOriginal size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <img src={VisualstudioPlain} alt="Visualstudio" style={{ width: "50px", height: "50px"}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <img src={PycharmPlainWordmark} alt="Pycharm" style={{ width: "50px", height: "50px"}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <img src={ClionPlainWordmark} alt="Clion" style={{ width: "50px", height: "50px"}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <img src={IntellijPlainWordmark} alt="Intellij" style={{ width: "50px", height: "50px"}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <img src={Googlecolab} alt="Googlecolab" style={{ width: "50px", height: "50px"}} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <AndroidstudioOriginal size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <KaggleOriginalWordmark size={50} style={{ color: uiColor }} />
                        </div>
                        <div style={{ border: '2px solid gray', padding: '1rem', display: 'inline-block', margin:"1.5rem"}}>
                            <JupyterOriginalWordmark size={50} style={{ color: uiColor }} />
                        </div>
                    </div>
                </div>
                {/* <div className={classes.interestedAreas} style={{marginTop:"2rem"}}>
                    <h2>Interested Areas</h2>
                    <div className={classes.interestedArea}>
                        <ul className={classes.ul}>
                            <li style={{marginTop:"2rem"}}>Cloud Computing</li>
                            <li>Database</li>
                            <li>Micro Services</li>
                            <li>NLP</li>
                            <li>Data Mining</li>
                            <li>Machine Learning</li>
                            <li>Deep Learning</li>
                            <li>Artificial Intelligence</li>
                            <li>Web Development</li>
                            <li>Mobile App Development</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>

    )
};

export default ProgrammingSkills;
