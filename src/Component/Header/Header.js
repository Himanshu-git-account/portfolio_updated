import './index.css'
import selfImage from '../../assets/filename.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resume from '../../assets/Himanshu_Resume.pdf'
const Header = () =>{
  
    const downloadPdf = () => {
        // Path to the PDF file in the public folder
        const pdfPath =  '/assets/Himanshu_Resume.pdf';
    
        // Create a link element
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'Himanshu_Resume.pdf';
    
        // Append the link to the document body
        document.body.appendChild(link);
    
        // Trigger a click event on the link to start the download
        link.click();
    
        // Remove the link from the document body
        document.body.removeChild(link);
      };
    return (
        <div className="header-container" >
            <div className="button-container">
            {/* <button className="btn">Light Mode<FontAwesomeIcon icon="fa-solid fa-sun" /></button> */}
            <button className="btn">Blogs</button>
            <button className="btn"><a href={resume} download={"Himanshu Resume"}>Download Resume </a></button>
            </div>
            <div className="text-container">
                <div className="introduction">
                    <div>
                    <span style={{color:'#9DAAF2'}}>Hi,  </span> My name is <span style={{color:'#FF6A3D'}}>Himanshu</span><br/>
                    </div>
                    <div>
                    I'm a Front-end <span className="changeFont" style={{color:'#FF6A3D'}}>Web Developer</span><br/>
                    </div>
                </div>
                <div className="image-container">
                <div className="circle">
                
                    <img src={selfImage} alt="selfimage" />
                </div>
              
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1617891093">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default Header