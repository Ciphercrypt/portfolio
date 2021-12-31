import { Fragment } from 'react'
import {
    ProjectBackground,
    ProjectContainer,
  
    ProjectSection,
    ProjectSectionContent,
  
    
} from 'components/ProjectLayout'
import usesBackground from 'assets/uses-background_gf.gif'
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg'
import prerender from 'utils/prerender'
import { useScrollRestore } from 'hooks'
import { Icon } from '@iconify/react'

import './index.css'

const Uses = () => {
    useScrollRestore()

    return (
        <Fragment>
            
            <ProjectContainer className="uses">
                <ProjectBackground
                    src={usesBackground}
                    placeholder={usesBackgroundPlaceholder}
                    opacity={0.7}
                    entered={!prerender}
                />
             
                <ProjectSection first className="uses__section">
                    <ProjectSectionContent>
                       
                            
                               
                                    
                                <section>
        <div class="skills container">
            <h2>Skills</h2>
            <ul>
                
                <li class="skills-card">
                    <h4>C++</h4>
                    <span class="iconsize"><Icon icon="vscode-icons:file-type-cpp2" />  </span> <br></br>
                    <Icon icon="emojione:glowing-star " /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> 

                </li>
                <li class="skills-card">
                    <h4>PYTHON</h4>
                    <span class="iconsize">   <Icon icon="logos:python" />  </span> 
                    <br></br>
                    <Icon icon="icon-park:star" /> <Icon icon="icon-park:star" /> <Icon icon="icon-park:star" /> <Icon icon="icon-park:star" />

                </li>
                <li class="skills-card">
                    <h4>JAVA</h4>
                    <span class="iconsize">  <Icon icon="logos:java" />  </span> 
                    <br></br>
                    <Icon icon="ant-design:star-filled" /> <Icon icon="ant-design:star-filled" /> <Icon icon="ant-design:star-filled" /> 
                    
                </li>
                <li class="skills-card">
                    <h4>FLUTTER</h4>
                    <span class="iconsize">  <Icon icon="logos:flutter" />   </span> 
                    <br></br>
                    <Icon icon="ant-design:star-filled" /> <Icon icon="ant-design:star-filled" /> <Icon icon="ant-design:star-filled" /> 
                   

                </li>
                <li class="skills-card">
                    <h4>HTML</h4>
                   <span class="iconsize"><Icon icon="vscode-icons:file-type-html" /></span> 
                   <br></br>
                    <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> 
                </li>
                <li class="skills-card">
                    <h4>CSS</h4>
                  <span class="iconsize">  <Icon icon="logos:css-3" />   </span> 
                  <br></br>
                    <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> 

                </li>
                <li class="skills-card">
                    <h4>PHP</h4>
                    <span class="iconsize">  <Icon icon="logos:php" />    </span> 
                    <br></br>
                    <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> 
                   

                </li>
                <li class="skills-card">
                    <h4>AI</h4>
                    <span class="iconsize">     <Icon icon="eos-icons:ai" /> </span> 
                    <br></br>
                    <Icon icon="icon-park:star" /> <Icon icon="icon-park:star" /> <Icon icon="icon-park:star" /> <Icon icon="icon-park:star" />  
                  
                </li>



                <li class="skills-card">
                    <h4>SQL</h4>
                    <span class="iconsize">     <Icon icon="carbon:sql" />  </span> 
                    <br></br>
                    <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> 
                 
                </li>
                <li class="skills-card">
                    <h4>REACT</h4>
                    <span class="iconsize">   <Icon icon="logos:create-react-app" />    </span> 
                    <br></br>
                    <Icon icon="ant-design:star-filled" /> <Icon icon="ant-design:star-filled" /> <Icon icon="ant-design:star-filled" /> 
                 

                </li>
                <li class="skills-card">
                    <h4>DART</h4>
                    <span class="iconsize">     <Icon icon="logos:dart" />  </span> 
                    <br></br>
                    <Icon icon="ant-design:star-filled" /> <Icon icon="ant-design:star-filled" /> <Icon icon="ant-design:star-filled" />
                 

                </li>
                <li class="skills-card">
                    <h4>GIT</h4>
                    <span class="iconsize">    <Icon icon="icon-park:github" />  </span> 
                    <br></br>
                    <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> <Icon icon="emojione:glowing-star" /> 
                  

                </li>
            </ul>
        </div>
    </section>




                                   
                               
                           
                       
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            
        </Fragment>
    )
}

export default Uses
