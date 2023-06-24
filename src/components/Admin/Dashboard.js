import React, { useEffect,useState } from "react";
import Navbar from "./Navbar";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import { useNavigate ,useLocation} from "react-router-dom";
import { Chart } from "react-google-charts";
import Cookies from "js-cookie";
import {GiHamburgerMenu} from "react-icons/gi"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './index.css'
import { Legend } from "recharts";
const Dashboard = () => {
  const location=useLocation()
  const navigate = useNavigate();
  const [finalData,setFinalData]=useState(location.state)
  

  const data=finalData.datat
  const fresher=data.fresherData.length
  console.log(fresher)
  const freshersJunior=data.freshersJuniorData.length
  console.log(freshersJunior)
  const python=data.pythonData.length
  const frontendfresher=data.frontEndFresherData.length
  const qa=data.qaData.length
  const merndeveloperintermediate=data.mernDeveloperIntermediateData.length
  const merndeveloperjunior=data.mernDeveloperJuniorData.length
  const shopify=data.shopifyData.length
  const fullStack=data.fullStackData.length
  const java=data.javaData.length
  // const Colors = ["#b272f7","#f255f0","#6bd3ed","#7af0a1","#ed8d39","#b0f222","#f75475","#ed55ed","#d383f7","#67a697" ]
  // const pieData=[
  //     ["Language", "Speakers (in millions)"],
  //     ["FreshersJuniorTest",1]
  //     ["FreshersTest",2],
  //     // ['Python Test',Math.round(data.pythonData.length/TotalDataLength*100*100)/100],
  //     // ['Shopify Test',Math.round(data.shopifyData.length/TotalDataLength*100*100)/100],
  //     // ['Full Stack Test',Math.round(data.fullStackData.length/TotalDataLength*100*100)/100],
  //     // ['Front End Fresher Test',Math.round(data.frontEndFresherData.length/TotalDataLength*100*100)/100]
  //     // ['Java Test',Math.round(data.javaData.length/TotalDataLength*100*100)/100],
  //     // ['MERN Developer Junior Test',Math.round(data.mernDeveloperJuniorData.length/TotalDataLength*100*100)/100],
  //     // ['MERN Developer Intermediate Test',Math.round(data.mernDeveloperIntermediateData.length/TotalDataLength*100*100)/100],
  //     // ['QA Test',Math.round(data.qaData.length/TotalDataLength*100*100)/100]
  // ]

  const pieData=[
    ["Language", "Speakers (in millions)"],
    ['Fresher_Junior_Test',freshersJunior],
    ['Freshers_Test',fresher],
    ['Python_Test',python],
    ['Front_End_Fresher_Test',frontendfresher],
    ['QA_Test',qa],
    ['Full_Stack_Test',fullStack],
    ['Java_Test',java],
    ['Mern_Developer_Intermediate_Test',merndeveloperintermediate],
    ['Mern_Developer_Junior_Test',merndeveloperjunior],
    ['Shopify_Test',shopify]
  ]
      let freshers_aptitude_score  = 0 
      let freshers_technical_score = 0 
      let freshers_aptitude_percentage=0
      let freshers_technical_percentage=0

    data.fresherData.map((item,index)=>{
     freshers_aptitude_score+=item.aptitude_score
     freshers_technical_score+=item.technical_score
   })



   freshers_aptitude_percentage=freshers_aptitude_score/data.fresherData.length/ process.env.REACT_APP_FRESHER_TEST_APTITUDE_QUESTIONS*100
   freshers_technical_percentage=freshers_technical_score/(data.fresherData.length*process.env.REACT_APP_FRESHER_TEST_TECHNICAL_QUESTIONS)*100
  
   let python_aptitude_score=0
   let python_technical_score=0
   let python_aptitude_percentage=0
   let python_technical_percentage=0
    data.pythonData.map((item,index)=>{
        python_aptitude_score+=item.aptitude_score
        python_technical_score+=item.technical_score
    })
    python_aptitude_percentage=python_aptitude_score/data.pythonData.length/process.env.REACT_APP_PYTHON_TEST_APTITUDE_QUESTIONS*100
    python_technical_percentage=python_technical_score/data.pythonData.length/process.env.REACT_APP_PYTHON_TEST_TECHNICAL_QUESTIONS*100

    
    let shopify_aptitude_score=0
    let shopify_technical_score=0
    let shopify_aptitude_percentage=0
    let shopify_technical_percentage=0
    data.shopifyData.map((item,index)=>{
      shopify_aptitude_score+=item.aptitude_score
      shopify_technical_score+=item.technical_score
    })
    console.log(shopify_technical_score)
    shopify_aptitude_percentage=shopify_aptitude_score/data.shopifyData.length/process.env.REACT_APP_SHOPIFY_TEST_APTITUDE_QUESTIONS*100
    shopify_technical_percentage=shopify_technical_score/data.shopifyData.length/process.env.REACT_APP_SHOPIFY_TEST_TECHNICAL_QUESTIONS*100

    let fullStack_java_score=0
    let fullStack_react_score=0
    let fullStack_java_percentage=0
    let fullStack_react_percentage=0
    data.fullStackData.map((item,index)=>{
      fullStack_java_score+=item.fullstack_java_score
      fullStack_react_score+=item.fullstack_react_score
    })

    fullStack_java_percentage=fullStack_java_score/data.fullStackData.length/process.env.REACT_APP_FULL_STACK_TEST_JAVA_QUESTIONS*100
    fullStack_react_percentage=fullStack_react_score/data.fullStackData.length/process.env.REACT_APP_FULL_STACK_TEST_REACT_QUESTIONS*100
  
    let java_aptitude_score=0
    let java_technical_score=0
    let java_aptitude_percentage=0
    let java_technical_percentage=0
    data.javaData.map((item,index)=>{
      java_aptitude_score+=item.aptitude_score
      java_technical_score+=item.technical_score
    })

    java_aptitude_percentage=java_aptitude_score/data.javaData.length/process.env.REACT_APP_JAVA_TEST_APTITUDE_QUESTIONS*100
    java_technical_percentage=java_technical_score/data.javaData.length/process.env.REACT_APP_JAVA_TEST_TECHNICAL_QUESTIONS*100
    
    let Qa_aptitude_score=0
    let Qa_technical_score=0
    let Qa_aptitude_percentage=0
    let Qa_technical_percentage=0
    data.qaData.map((item,index)=>{
      Qa_aptitude_score+=item.aptitude_score
      Qa_technical_score+=item.technical_score
    })
    Qa_aptitude_percentage=Qa_aptitude_score/data.qaData.length/process.env.REACT_APP_QA_TEST_APTITUDE_QUESTIONS*100
    Qa_technical_percentage=Qa_technical_score/data.qaData.length/process.env.REACT_APP_QA_TEST_TECHNICAL_QUESTIONS*100

    let frontendfresher_aptitude_score=0
    let frontendfresher_technical_score=0
    let frontendfresher_aptitude_percentage=0
    let frontendfresher_technical_percentage=0
    data.frontEndFresherData.map((item,index)=>{
      frontendfresher_aptitude_score+=item.aptitude_score
      frontendfresher_technical_score+=item.technical_score
    })
    frontendfresher_aptitude_percentage=frontendfresher_aptitude_score/data.frontEndFresherData.length/process.env.REACT_APP_FRONTEND_FRESHER_TEST_APTITUDE_QUESTIONS*100
    frontendfresher_technical_percentage=frontendfresher_technical_score/data.frontEndFresherData.length/process.env.REACT_APP_FRONTEND_FRESHER_TEST_TECHNICAL_QUESTIONS*100


    let freshersJunior_aptitude_score=0
    let freshersJunior_reasoning_score=0
    let freshersJunior_aptitude_percentage=0
    let freshersJunior_reasoning_percentage=0
    data.freshersJuniorData.map((item,index)=>{
      freshersJunior_aptitude_score+=item.aptitude_score
      freshersJunior_reasoning_score+=item.reasoning_score
    })
    freshersJunior_aptitude_percentage=freshersJunior_aptitude_score/data.freshersJuniorData.length/process.env.REACT_APP_FRESHERS_JUNIOR_TEST_APTITUDE_QUESTIONS*100
    freshersJunior_reasoning_percentage=freshersJunior_reasoning_score/data.freshersJuniorData.length/process.env.REACT_APP_FRESHERS_JUNIOR_TEST_REASONING_QUESTIONS*100

    let merndeveloperintermediate_aptitude_score=0
    let merndeveloperintermediate_technical_score=0
    let merndeveloperintermediate_aptitude_percentage=0
    let merndeveloperintermediate_technical_percentage=0
    data.mernDeveloperIntermediateData.map((item,index)=>{
      merndeveloperintermediate_aptitude_score+=item.aptitude_score
      merndeveloperintermediate_technical_score+=item.technical_score
    })
    merndeveloperintermediate_aptitude_percentage=merndeveloperintermediate_aptitude_score/data.mernDeveloperIntermediateData.length/process.env.REACT_APP_MERN_DEVELOPER_INTERMEDIATE_TEST_APTITUDE_QUESTIONS*100
    merndeveloperintermediate_technical_percentage=merndeveloperintermediate_technical_score/data.mernDeveloperIntermediateData.length/process.env.REACT_APP_MERN_DEVELOPER_INTERMEDIATE_TEST_TECHNICAL_QUESTIONS*100

    let merndeveloperjunior_aptitude_score=0
    let merndeveloperjunior_technical_score=0
    let merndeveloperjunior_aptitude_percentage=0
    let merndeveloperjunior_technical_percentage=0
    data.mernDeveloperJuniorData.map((item,index)=>{
      merndeveloperjunior_aptitude_score+=item.aptitude_score
      merndeveloperjunior_technical_score+=item.technical_score
    })

    merndeveloperjunior_aptitude_percentage=merndeveloperjunior_aptitude_score/data.mernDeveloperJuniorData.length/process.env.REACT_APP_MERN_DEVELOPER_JUNIOR_TEST_APTITUDE_QUESTIONS*100
    merndeveloperjunior_technical_percentage=merndeveloperjunior_technical_score/data.mernDeveloperJuniorData.length/process.env.REACT_APP_MERN_DEVELOPER_JUNIOR_TEST_TECHNICAL_QUESTIONS*100

    const fresherPieData=[
    ["Language", "Speakers (in millions)"],
    ['FreshersAptitude',freshers_aptitude_percentage],
    ["FreshersTechnical",freshers_technical_percentage]
  ]

  const pythonPieData=[
    ["Language", "Speakers (in millions)"],
    ['PythonAptitude',python_aptitude_percentage],
    ['PythonTechnical',python_technical_percentage]
  ]

  const shopifyPieData=[
    ["Language", "Speakers (in millions)"],
    ['ShopifyAptitude',shopify_aptitude_percentage],
    ['ShopifyTechnical',shopify_technical_percentage]
  ]

  const fullStackPieData=[
    ["Language", "Speakers (in millions)"],
    ['FullStackJava',fullStack_java_percentage],
    ['FullStackReact',fullStack_react_percentage]
  ]

  const javaPieData=[
    ["Language", "Speakers (in millions)"],
    ['JavaAptitude',java_aptitude_percentage],
    ['JavaTechnical',java_technical_percentage]
  ]

  const qaPieData=[
    ["Language", "Speakers (in millions)"],
    ['QAAptitude',Qa_aptitude_percentage],
    ['QATechnical',Qa_technical_percentage]
  ]

  const frontendfresherPieData=[
    ["Language", "Speakers (in millions)"],
    ['FrontEndFresherAptitude',frontendfresher_aptitude_percentage],
    ['FrontEndFresherTechnical',frontendfresher_technical_percentage]
  ]

  const freshersJuniorPieData=[
    ["Language", "Speakers (in millions)"],
    ['FreshersJuniorAptitude',freshersJunior_aptitude_percentage],
    ['FreshersJuniorReasoning',freshersJunior_reasoning_percentage]
  ]

  const merndeveloperintermediatePieData=[
    ["Language", "Speakers (in millions)"],
    ['MERNDeveloperIntermediateAptitude',merndeveloperintermediate_aptitude_percentage],
    ['MERNDeveloperIntermediateTechnical',merndeveloperintermediate_technical_percentage]
  ]

  const merndeveloperJuniorPieData=[
    ["Language", "Speakers (in millions)"],
    ['MERNDeveloperJuniorAptitude',merndeveloperjunior_aptitude_percentage],
    ['MERNDeveloeprJuniorTechnical',merndeveloperjunior_technical_percentage]
  ]

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/notFound");
    }
  }, []);
  const options = {
   legend:"none",
    title:"All Tests Metrics",
    pieStartAngle: 100,
  };
  const fresheroptions = {
    legend:"none",
    title:"Freshers Test Metrics",
    pieStartAngle:100,
  }
  const pythontestoptions = {
    legend:"none",
    title:"Python Test Metrics",
    pieStartAngle:100,
  }
  const fullstactoptions ={
    legend:"none",
    title:"Fullstack Test Metrics",
    pieStartAngle:100,
  }
  const javaoptions= {
    legend:"none",
    title:"Java Test Metrics",
    pieStartAngle:100,
  }
  const qaoptions = {
    legend:"none",
    title:"QA Test Metrics",
    pieStartAngle:100,
  }
  const froentendFresheroprions= {
    legend:"none",
    title:"FroentEndFresher Test Metrics",
    pieStartAngle:100,
  }
  const fresherjunioroptions = {
    legend:"none",
    title:"FresherJunior Test Metrics",
    pieStartAngle:100,
  }
  const merndeveloperjunioroptions = {
    legend:"none",
    title:"Mern Developer junior Test Metrics",
    pieStartAngle:100,
  }
  const mernintermediateoprions = {
    legend:"none",
    title:"Mern Developer junior Test Metrics",
    pieStartAngle:100,
  }
  const shopifyoptions = {
    legend:"none",
    title:"Shopify_Test Metric",
    pieStartAngle:100,
  }
  return (
    <>
      <div className="admin-header-container">
      <div className="admin-header-logo-container">
              <img src="https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png" alt="logo" style={{height:'50px', width:'100px', borderRadius:'10px'}} onClick={()=>navigate('/')}/>
              </div>
              <div className="admin-desktop-header-navbar-container">
              <p onClick={()=>navigate('/dashboard',{state:finalData})} className="admin-desktop-header-navbar-link">Dashboard</p>
              <p onClick={()=>navigate('/sendAssessments',{state:finalData})} className="admin-desktop-header-navbar-link">Assessments</p>
              <p onClick={()=>navigate('/testReports',{state:finalData})} className="admin-desktop-header-navbar-link">Test Reports</p>
              <p onClick={()=>navigate('/studentReports',{state:finalData})} className="admin-desktop-header-navbar-link">Student Reports</p>
              <p className="admin-desktop-header-navbar-link" onClick={()=> navigate('/adminLogin')}>Admin</p>
                </div>
                <div className="admin-mobile-header-navbar-container">
                      <Popup contentStyle={{ width: '50%',backgroundColor:"white" }} trigger={<button  className="admin-hamburger-btn"><GiHamburgerMenu /></button>} position="bottom right" >
                    <ul className="admin-mobile-hamburger-menu">
                      <li onClick={()=>navigate('/dashboard',{state:finalData})} className='admin-header-navbar-link'>Dashboard</li>
                      <li onClick={()=>navigate('/sendAssessments',{state:finalData})} className='admin-header-navbar-link'>Assessments</li>
                      <li onClick={()=>navigate('/testReports',{state:finalData})} className='admin-header-navbar-link'>Test Resports</li>
                      <li onClick={()=>navigate('/studentReports',{state:finalData})} className='admin-header-navbar-link'>Student Resports</li>
                      <li onClick={()=> navigate('/adminLogin')} className='admin-header-navbar-link'>Admin</li>
                      </ul>
                    </Popup>
                      </div>
        </div>
      <div style={{display:"flex",flexDirection:"Column"}}>
        <h1 style={{textAlign:"center",marginBottom:'20px',"@media (max-width:820px)":{
          textAlign:"left",marginLeft:"20px"
        } }}>AMS METRICS</h1>
       <h2 className="allmetricsHeadining">This metrics all about number of Tests taken by candidate for each test </h2>
        <div>
        <button style={{height:"20px",width:"40px",backgroundColor:"#e89510",border:"0px"}}></button>
       <span>Python</span>
      <button style={{height:"20px",width:"40px",backgroundColor:"#e62e81",border:"0px"}}></button>
        <span>Java</span>
        <button style={{height:"20px",width:"40px",backgroundColor:"#5c9ed1",border:"0px"}}></button>
        <span>FullStack</span>
        <button style={{height:"20px",width:"40px",backgroundColor:"#963596",border:"0px"}}></button>
        <span>QA</span>
        <button style={{height:"20px",width:"40px",backgroundColor:"#2b8a3c ",border:"0px"}}></button>
        <span>Froentend fresher</span>
        <button style={{height:"20px",width:"40px",backgroundColor:"#0e3ab3",border:"0px"}}></button>
        <span>Fresher Junior</span>
        <button style={{height:"20px",width:"40px",backgroundColor:"#f05232 ",border:"0px"}}></button>
        <span>Fresher Test</span>
        <button style={{height:"20px",width:"40px",backgroundColor:"#62b027",border:"0px"}}></button> 
        <span>Mern Intermediate</span>
        <button style={{height:"20px",width:"40px",backgroundColor:"#b02709",border:"0px"}}></button>   
        <span>Mern Junior</span>
        <button style={{height:"20px",width:"40px",backgroundColor:"#102061",border:"0px"}}></button>
        <span>Shopify</span>
        <button  className="totaltestconductedbutton" style={{backgroundColor:"#5c93d1",color:"wheat", fontSize:"20px", fontFamily:"roboto", marginLeft:"100px" , border:"none",height:"50px"}}>TotalTestsConducted:{fresher+fullStack+python+freshersJunior+frontendfresher+qa+java+shopify+merndeveloperintermediate+merndeveloperjunior}</button>

            </div>
       
        <Chart
        className="allstremsPiechart"
        chartType="PieChart"
        data={pieData}
        options={{
          colors:["#0e3ab3","#f05232","#e89510","#2b8a3c","#963596","#5c9ed1","#e62e81","#62b027","#b02709","#102061"],
          title:"All Test Metrics",legend:"none"
        }}
      ></Chart>
      
        </div>
        <h3 className="allmetricsHeadining">This metrics  about percentage of every section which are correctly answered by candidate </h3>

       <div>
       <button style={{backgroundColor:"#aed25d" ,height:"20px",width:"40px",border:"none"}}></button>
       <span>Apptitude</span> 
       <button style={{backgroundColor:"#6f6fed" ,height:"20px",width:"40px",border:"none",marginLeft:"10px"}}></button>
        <span>Technical</span>
        <button style={{backgroundColor:"#9f93ed" ,height:"20px",width:"40px",border:"none",marginLeft:"10px"}}></button>
        <span>Reasoing</span>
        <button style={{backgroundColor:"#468f0a" ,height:"20px",width:"40px",border:"none",marginLeft:"10px"}}></button>
        <span>Java</span>
        <button style={{backgroundColor:"#4d71bd" ,height:"20px",width:"40px",border:"none",marginLeft:"10px"}}></button>
        <span>React</span>
       </div>
        <div className="dashboard_chart_container">
       

       <Chart 
       className="testwisePiechart"
        chartType="PieChart"
        data={fresherPieData}
        options={{
          title:"Fresher Test Metrics",
          colors:["#aed25d","#6f6fed"],
          legend:"none"
        }}
       
      />
      <Chart
        className="testwisePiechart"
        chartType="PieChart"
        data={pythonPieData}
        options={{
          title:"Python Test Metrics",
          colors:["#aed25d","#6f6fed"],
          legend:"none"
        }}
       
      />
      <Chart
        className="testwisePiechart"
        chartType="PieChart"
        data={fullStackPieData}
        options={{
          title:"FullStack Test Metrics",
          colors:["#468f0a","#4d71bd"],
          legend:"none"
        }}       
      /> 
      {/* </div> */}
      {/* <div className="dashboard_chart_container"> */}
      <Chart
        className="testwisePiechart"
        chartType="PieChart"
        data={javaPieData}
        options={{
          title:"Java Test Metrics",
          colors:["#aed25d","#6f6fed"],
          legend:"none"
        }}        
      
      />
      <Chart
        className="testwisePiechart"
        chartType="PieChart"
        data={qaPieData}
        options={{
          title:"QA Test Metrics",
          colors:["#aed25d","#6f6fed"],
          legend:"none"
        }}
      
      />
      <Chart 
        className="testwisePiechart"
        chartType="PieChart"
        data={frontendfresherPieData}
        options={{
          title:"FroentFresher Test Metrics",
          colors:["#aed25d","#6f6fed"],
          legend:"none"
        }}        
      />
   
      {/* </div>
    
      <div style={{display:'flex',alignItems:"center",flexWrap:"wrap"}}> */}

      <Chart
             className="testwisePiechart"
        chartType="PieChart"
        data={freshersJuniorPieData}
        options={{
          title:"FresherJunior Test Metrics",
          colors:["#aed25d","#9f93ed"],
          legend:"none"
        }}      
      />
      <Chart
             className="testwisePiechart"
        chartType="PieChart"
        data={merndeveloperJuniorPieData}
        options={{
          title:"MernDeveloper Junior Test Metrics",
          colors:["#aed25d","#6f6fed"],
          legend:"none"
        }}       
      />
      <Chart     
       className="testwisePiechart"
        chartType="PieChart"
        data={merndeveloperintermediatePieData}
        options={{
          title:"MernDeveloperIntermediate Test Metrics",
          colors:["#aed25d","#6f6fed"],
          legend:"none"
        }}        
      />
      {/* </div>
     <div> */}
     <Chart     
      className="testwisePiechart"
        chartType="PieChart"
        data={shopifyPieData}
        options={{
          title:"Shopify Test Metrics",
          colors:["#aed25d","#6f6fed"],
          legend:"none"
        }}
       
      />
     </div>
    </>
  );
};

  export default Dashboard;
