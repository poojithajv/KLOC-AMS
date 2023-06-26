// import all required packages like react, react-icons, reactjs-popup, js-cookie, react-router-dom and css file StudentReports.css for styling
import React,{useState,useEffect} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Cookies from 'js-cookie'
import { useNavigate,useLocation } from 'react-router-dom'
import './StudentReports.css'

function StudentReports() {
  // location varaiable to get location of the testReports route and state
    const location=useLocation()
    const [search,setSearch]=useState('')
    // useState of data to store all tests data responses
    const [data,setData]=useState(location.state)
    let data1=data.allData.flat()
    // filterData useState used to store filtered data responses
    const [filterData, setFilterData] = useState(data1);
    // startDate useState to store start Date 
    const [startDate, setStartDate] = useState("");
    // endDate useState to store end Date
    const [endDate, setEndDate] = useState("");
    // navigate variable used to naviagating to different routes
    const navigate=useNavigate()

    // handleSearch function to set the search value to setSearch function
    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }

    // handleFilter function used to filter the all tests data responses using start date and end date
    const handleFilter = () => {
      const filtered = data1.filter((item) => {
        const itemDate = new Date(item.Timestamp);
        const start = new Date(startDate);
        const end = new Date(endDate);
        end.setDate(end.getDate() + 1); // Added one day to the end date
        return itemDate >= start && itemDate <= end;
      });
      // set filter data array to setFilterData function
      setFilterData(filtered);
    };
    // filteredData variable used to store all filtered tests data reponses by email id search
    const filteredData=filterData.filter(i=>i.Email_Address.toLowerCase().includes(search.toLowerCase()))

    // after component rendering, the below effect will run only once with empty dependency array
    useEffect(() => {
      // token varaible to get token value
      const token = Cookies.get("token");
      if (!token) {
        // if token is undefined, notFound Component will be navigated
        navigate("/notFound");
      }
    }, []);
  return (
    <div className='student-reports-container'>
      {/* header for desktop  with Logo and components Dashboard, Assessments, Test Reports, Student Reports and Admin */}
      <div className="admin-header-container">
        <div className="admin-header-logo-container">
          {/* logo */}
          <img src="https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png" alt="logo" style={{height:'50px', width:'100px', borderRadius:'10px'}} onClick={()=>navigate('/')}/>
        </div>
        <div className="admin-desktop-header-navbar-container">
          {/* when clicking this Dashboard text, it'll navigates to dashboard route */}
          <p onClick={()=>navigate('/dashboard',{state:data})} className="admin-desktop-header-navbar-link">Dashboard</p>
          {/* when clicking this Assessments text, it'll navigates to send assessments route */}
          <p onClick={()=>navigate('/sendAssessments',{state:data})} className="admin-desktop-header-navbar-link">Assessments</p>
          {/* when clicking this Test Reports text, it'll navigates to test reports route */}
          <p onClick={()=>navigate('/testReports',{state:data})} className="admin-desktop-header-navbar-link">Test Reports</p>
          {/* when clicking this student reports text, it'll navigates to student reports route */}
          <p onClick={()=>navigate('/studentReports',{state:data})} className="admin-desktop-header-navbar-link">Student Reports</p>
          {/* when clicking this Sign Out text, it'll navigates to admin login route and again admin can access all routes */}
          <p className="admin-desktop-header-navbar-link" onClick={()=> navigate('/adminLogin')}>Admin</p>
        </div>
        {/* nav header for mobile  with Logo and components Dashboard, Assessments, Test Reports, Student Reports and Admin */}
        <div className="admin-mobile-header-navbar-container">
          <Popup contentStyle={{ width: '50%',backgroundColor:"white" }} trigger={<button  className="admin-hamburger-btn"><GiHamburgerMenu /></button>} position="bottom right" >
            <ul className="admin-mobile-hamburger-menu">
              {/* when clicking this Dashboard text, it'll navigates to dashboard route */}
              <li onClick={()=>navigate('/dashboard',{state:data})} className='admin-header-navbar-link'>Dashboard</li>
              {/* when clicking this Assessments text, it'll navigates to send assessments route */}
              <li onClick={()=>navigate('/sendAssessments',{state:data})} className='admin-header-navbar-link'>Assessments</li>
              {/* when clicking this Test Reports text, it'll navigates to test reports route */}
              <li onClick={()=>navigate('/testReports',{state:data})} className='admin-header-navbar-link'>Test Reports</li>
              {/* when clicking this student reports text, it'll navigates to student reports route */}
              <li onClick={()=>navigate('/studentReports',{state:data})} className='admin-header-navbar-link'>Student Reports</li>
              {/* when clicking this Sign Out text, it'll navigates to admin login route and again admin can access all routes */}
              <li onClick={()=> navigate('/adminLogin')} className='admin-header-navbar-link'>Admin</li>
            </ul>
          </Popup>
        </div>
    </div>  
    {/* search input, filter by date and table containers */}
      <div className='table-reports-container'>
        <h1 style={{marginBottom:'15px'}}>Student Data</h1>
        {/* search input container */}
        <div className='input-label-container'>
          <label htmlFor="search">
                Search by Student Email : 
          </label>
          <input id="search" value={search} type="text" onChange={handleSearch} style={{marginBottom:'20px',marginLeft:'25px'}} className='input-search'/>
        </div>
        {/* filter with start date, end date and filter button */}
        <div className='date-filter'>
          <div className='display-between'>
            Start Date:{"   "}
            <input
              type='date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{marginLeft:'10px'}}
            />
          </div>
          <div className='display-between'>
            End Date:{" "}
            <input
              type='date'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={{marginLeft:'10px'}}
            />
          </div>
          <button style={{padding:'2px',width:'60px'}} onClick={handleFilter}>Filter</button>
        </div>
        {/* desktop table container with table with all tests data responses */}
        <div className='desktop-table-container'>
        {filteredData.length >0  ? <table border="2px">
            <thead >
                <tr>
                    <th>Id</th>
                    <th>Completed On</th>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>Total Score</th>
                    <th>Aptitude Score</th>
                    <th>Technical Score</th>
                    <th>Java Score</th> 
                    <th>React Score</th>
                    <th>Reasoning Score</th>
                    <th>Test Type</th>   
                    <th>View Score</th>       
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item,index)=>
                    <tr key={index}> 
                        <td>{index+1}</td>
                        <td>{item.Timestamp}</td>
                        <td>{item.Name}</td>
                        <td>{item.Email_Address}</td>
                        <td>{item.Phone_Number}</td>
                        <td>{item.Score}</td>
                        <td>{item.aptitude_score===undefined ? 'NA' : item.aptitude_score}</td>
                        <td>{item.technical_score===undefined ? 'NA':item.technical_score}</td>
                        <td>{item.fullstack_java_score===undefined ? 'NA' : item.fullstack_java_score}</td>
                        <td>{item.fullstack_react_score===undefined ? 'NA' :item.fullstack_react_score}</td>
                        <td>{item.reasoning_score===undefined ? 'NA' : item.reasoning_score}</td>
                        <td>{item.testType}</td>
                        <td>
                          {/* clicking view button it'll navigates to studentChart route */}
                            <button onClick={()=>navigate('/studentChart',{state:item})} style={{padding:'3px',width:'60px'}} >
                                View
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table> :'No Data Found'}
        </div>
        {/* mobile table container with all tests data responses cards */}
        <div className='mobile-table-container'>
        {filteredData.length >0  ? (
          filteredData.map((item,index)=>
            <div className='table-data-container'>
            <div className='table-data'>
              <p className='th'>Id</p>
              <p className='td'>{index+1}</p>
            </div>
            <div className='table-data'>
              <p>Completed On</p>
              <p className='td'>{item.Timestamp}</p>
            </div>
            <div className='table-data'>
              <p>Name</p>
              <p className='td'>{item.Name}</p>
            </div>
            <div className='table-data'>
              <p>Email Address</p>
              <p className='td'>{item.Email_Address}</p>
            </div>
            <div className='table-data'>
              <p>Phone Number</p>
              <p className='td'>{item.Phone_Number}</p>
            </div>
            <div className='table-data'>
              <p>Email Address</p>
              <p className='td'>{item.Email_Address}</p>
            </div>
            <div className='table-data'>
              <p>Total Score</p>
              <p className='td'>{item.Score}</p>
            </div>
            <div className='table-data'>
              <p>{item.aptitude_score !==undefined ? 'Aptitude Score' : 'Java Score'}</p>
              <p className='td'>{item.aptitude_score !==undefined ? item.aptitude_score : item.fullstack_java_score}</p>
            </div>
            <div className='table-data'>
              <p>{item.technical_score !==undefined ? "Technical Score" : "React Score"}</p>
              <p className='td'>{item.technical_score !==undefined ? item.technical_score : (item.reasoning_score!==undefined ? item.reasoning_score : item.fullstack_react_score )}</p>
            </div>
            <div className='table-data'>
              <p>Test Type</p>
              <p className='td'>{item.testType}</p>
            </div>
            {/* clicking view button it'll navigates to studentChart route */}
            <div className='view-button'>
              <button className='btn' onClick={()=>navigate('/studentChart',{state:item})}>View Score</button>
            </div>
          </div>
        ) ) : 'No Data Found'}
        </div>
      </div>
    </div>
  )
  
}

export default StudentReports