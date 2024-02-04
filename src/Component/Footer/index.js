
import './index.css'
//import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () =>{
    return(
        <div className="footer-container">
            <div className="social-menu-container">
                <div className="social-menu">
                <ul>
                <li><a href="https://github.com/Himanshu-git-account" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']} color={'#171515'} /></a></li>
                <li><a href="https://www.facebook.com/himanshualways4u" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} color={'#3b5999'} /></a></li>
                <li><a href="mailto:khimanshu0507@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'google']} color={'#dd4b39'}/></a></li>
                <li><a href="https://www.linkedin.com/in/kumar-himanshu-9b7a1212a" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} color={'#0077B5'}/></a></li>
                <li><a href="https://codewithhimanshu.medium.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'medium']} color={'#02b875'}/></a></li>
                </ul>
                </div>
            </div>
            <div className="wave">
            <svg className="mg-negative5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#7a2048" fill-opacity="1" d="M0,96L14.1,122.7C28.2,149,56,203,85,234.7C112.9,267,141,277,169,277.3C197.6,277,226,267,254,256C282.4,245,311,235,339,192C367.1,149,395,75,424,69.3C451.8,64,480,128,508,133.3C536.5,139,565,85,593,101.3C621.2,117,649,203,678,224C705.9,245,734,203,762,165.3C790.6,128,819,96,847,101.3C875.3,107,904,149,932,170.7C960,192,988,192,1016,181.3C1044.7,171,1073,149,1101,160C1129.4,171,1158,213,1186,229.3C1214.1,245,1242,235,1271,245.3C1298.8,256,1327,288,1355,272C1383.5,256,1412,192,1426,160L1440,128L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path>
            </svg>
                </div>
            <div className="bigwave">
            <svg  className="mg-negative5" height="100%" width="100%" id="svg" viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 C 0,700 0,350 0,350 C 66.20256410256411,400.7153846153846 132.40512820512822,451.4307692307692 202,408 C 271.5948717948718,364.5692307692308 344.5820512820512,226.99230769230772 436,238 C 527.4179487179488,249.00769230769228 637.2666666666668,408.6 733,427 C 828.7333333333332,445.4 910.3512820512819,322.60769230769233 992,281 C 1073.648717948718,239.39230769230767 1155.3282051282054,278.96923076923076 1230,304 C 1304.6717948717946,329.03076923076924 1372.3358974358973,339.5153846153846 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#7a2048" class="transition-all duration-300 ease-in-out delay-150"></path></svg>

            </div>
            

        </div>
    )
}
export default Footer