import React, { useState,useEffect,} from 'react';
import { Stethoscope, Home, ClipboardList,ConciergeBell,User, FileText, DollarSign, BarChart3, ArrowRight, Save, Microscope, Activity, LogOut, PieChart,UserPlus, Users, Printer,Zap, CreditCard } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
const ElmaHealthcare = () => {
  const navigate = useNavigate();
   const [activeSection, setActiveSection] = useState('dashboard');
  const [patientType, setPatientType] = useState('');
  const [isExistingPatient, setIsExistingPatient] = useState(false);
  const [showFamilyPlanning, setShowFamilyPlanning] = useState(false);
  const [showServiceMethods, setShowServiceMethods] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showVitals, setShowVitals] = useState(false);
  const [showInvestigation, setShowInvestigation] = useState(false);
  const [showMedicalCard, setShowMedicalCard] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [nameletters, setNameletters] = useState("");
   const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [selectedpatient, setSelectedpatient] = useState({});
    const [selected, setSelected] = useState(false);
    const [select, setSelect] = useState({});
     const [input, setInput] = useState({});
      const [selectone, setSelectone] = useState({});
     const [inputone, setInputone] = useState({});
        const [vitals, setVitals] = useState({});
          const [general, setGeneral] = useState({});
          const [diagnosis, setDiagnosis] = useState({});
          const [diagnosisd, setDiagnosisd] = useState({});
          const [investigate, setInvestigate] = useState({});
          const [treatment, setTreatment] = useState({});
          const [payment, setPayment] = useState({});
          const [todaypatients, setTodaypatients] = useState(0);
          const [todaypatientsnumber, setTodaypatientsnumber] = useState([]);
          const [totalpatients, setTotalpatients] = useState([]);
          const [pendingpatients, setPendingpatients] = useState([]);
           const [pendingpayment, setPendingpayment] = useState(0);
           const [vaccine, setVaccine] = useState({});
           const [servicestype, setServicestype] = useState({});
            const [carddata, setCarddata] = useState({});
            const [checkb,setCheckb]=useState(false);
             const [checkblood,setCheckblood]=useState({});
                const [follow,setFollow]=useState({});
                const [queue,setQueue]=useState([]);
            const [jan, setJan] = useState(0);
             const [feb, setFeb] = useState(0);
              const [mar, setMar] = useState(0);
                const [apr, setApr] = useState(0);
             const [may, setMay] = useState(0);
              const [jun, setJun] = useState(0);
               const [jul, setJul] = useState(0);
            const [aug, setAug] = useState(0);
             const [sep, setSep] = useState(0);
               const [oct, setOct] = useState(0);
               const [nov, setNov] = useState(0);
             const [dec, setDec] = useState(0);
        const [janm, setJanm] = useState(0);
             const [febm, setFebm] = useState(0);
          const [marm, setMarm] = useState(0);
        const [aprm, setAprm] = useState(0);
      const [maym, setMaym] = useState(0);
         const [junm, setJunm] = useState(0);
       const [julm, setJulm] = useState(0);
       const [augm, setAugm] = useState(0);
        const [sepm, setSepm] = useState(0);
      const [octm, setOctm] = useState(0);
     const [novm, setNovm] = useState(0);
      const [decm, setDecm] = useState(0);
      const [followlist, setFollowlist] = useState([]);
      const [followtotal, setFollowtotal] = useState(0);
      const [showchoices, setShowchoices] = useState(false);
      const [searchbutton, setSearchbutton] = useState(false);
      let selecteddetails={};
      let selecteddetailsone={};
  let email=localStorage.getItem("email");
  let name=localStorage.getItem("name");
  let role=localStorage.getItem("role");
  let secondname;
  let firstletters;
               const data = [
  { name: "Jan", patients:jan},
  { name: "Feb", patients:feb},
  { name: "Mar", patients:mar},
  { name: "Apr", patients:apr},
  { name: "May", patients:may},
  { name: "Jun", patients:jun},
  { name: "Jul", patients:jul},
  { name: "Aug", patients:aug},
  { name: "Sep", patients:sep},
  { name: "Oct", patients:oct},
  { name: "Nov", patients:nov},
  { name: "Dec", patients:dec},
               ];
             const datatwo = [
  { name: "Jan", amount:janm},
  { name: "Feb", amount:febm},
  { name: "Mar", amount:marm},
  { name: "Apr", amount:aprm},
  { name: "May", amount:maym},
  { name: "Jun", amount:junm},
  { name: "Jul", amount:julm},
  { name: "Aug", amount:augm},
  { name: "Sep", amount:sepm},
  { name: "Oct", amount:octm},
  { name: "Nov", amount:novm},
  { name: "Dec", amount:decm},
];
  if(email!=null)
  {
   secondname= name.trim().split(/\s+/);
    firstletters = secondname.map(word => word[0].toUpperCase()).join("");
  }
    const handleselectedpatient=(e)=>{
          setSelectedpatient(e);
          selecteddetails["patientnumber"]=selectedpatient.patientnumber;
           selecteddetails["name"]=selectedpatient.name;
           selecteddetails["residence"]=selectedpatient.residence;
           selecteddetails["phone"]=selectedpatient.phone;
           selecteddetails["date"]=selectedpatient.dateofbirth;
           selecteddetails["kinname"]=selectedpatient.namekin;
           selecteddetails["kincontact"]=selectedpatient.phonekin;
           selecteddetailsone["gender"]=selectedpatient.gender;
           selecteddetailsone["relationship"]=selectedpatient.relationshiptopatient;
           selecteddetailsone["blood"]=selectedpatient.bloodgroup;
          if(Object.keys(selectedpatient).length!=0)
          {
            setSelected(true);
          }
    }
    const styles={
      tablestyle:{
      borderCollapse: "collapse",
    margin: "20px auto",
    fontSize: "16px",
    textAlign: "center",
    border: "1px solid black",   
    width:'100%',   
  },
  datastyle:{
    border: "1px solid black",
    padding: "8px",
     textAlign: "center",
  },
    };
    const handlesearch=async(e)=>{
  setSearch(e.target.value);
  let object={Query:search};
  const res=await fetch("http://localhost:2000/details/search",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(object),
  });
  const data=await res.json();
  setResults(data.Data);
    };
      const handleselect = (e) => {
    setSelect({
      ...select,
      [e.target.id]: e.target.value,
    });
  };
     const handleinput = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };
    const handleservice = (e) => {
    setSelectedService(e);
    if(e=='New treatment')
    {
      setShowchoices(true);
    }
     if(e!='New treatment')
    {
      setShowchoices(false);
    }

  };
      const handleselectone = (e) => {
    setSelectone({
      ...selectone,
      [e.target.id]: e.target.value,
    });
  };
    const handleinputone = (e) => {
    setInputone({
      ...inputone,
      [e.target.id]: e.target.value,
    });
  };
      const handlevitals = (e) => {
    setVitals({
      ...vitals,
      [e.target.id]: e.target.value,
    });
  };
       const handlegeneral = (e) => {
    setGeneral({
      ...general,
      [e.target.id]: e.target.value,
    });
  };
      const handlediagnosis = (e) => {
    setDiagnosis({
      ...diagnosis,
      [e.target.id]: e.target.value,
    });
  };
        const handlediagnosisd = (e) => {
    setDiagnosisd({
      ...diagnosisd,
      [e.target.id]: e.target.value,
    });
  };
  const handlefollow=(e)=>{
           if(Object.keys(follow).includes(e.target.id))
    {
    delete follow[e.target.id];
     return;
    }
     setFollow({
      ...follow,
      [e.target.id]: e.target.value,
    });
  };
          const handleinvestigate = (e) => {
              if(Object.keys(investigate).includes(e.target.id))
    {
      if(e.target.id=="Blood Tests")
      {
      setCheckb(false);
    }
    delete investigate[e.target.id];
    return;
    }
    setInvestigate({
      ...investigate,
      [e.target.id]: e.target.value,
    });
    if(e.target.id=="Blood Tests")
      {
      setCheckb(true);
    }
  };
  const handleblood=(e)=>{
 setCheckblood({[e.target.id]:e.target.value});
  };
           const handletreatment= (e) => {
    setTreatment({
      ...treatment,
      [e.target.id]: e.target.value,
    });
  };
  
           const handlepayment= (e) => {
    setPayment({
      ...payment,
      [e.target.id]: e.target.value,
    });
  };
           const handlevaccine= (e) => {
    setVaccine({
      ...vaccine,
      [e.target.id]: e.target.value,
    });
  };
             const handleservicestype= (e) => {
    setServicestype({
      ...servicestype,
      [e.target.id]: e.target.value,
    });
  };
const MedicalCard = ({
  name,
  patientnumber,
  dateofbirth,
  phone,
  residence,
  registered,
}) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '16px',
      overflowY: 'auto',
      overflowX: 'auto'
    }}
  >
    <style>
      {`
        .logo {
          width: 90px;
        }

        .top {
          color: white;
          background-color: teal;
          padding: 24px;
          border-radius: 12px;
        }

        /* Hide buttons during printing */
        @media print {
          .logo {
            width: 90px;
          }
          .top {
            color: white;
            background-color: teal;
            padding: 24px;
            border-radius: 12px;
            margin-top: 30%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}
    </style>

    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        maxWidth: '28rem',
        width: '100%'
      }}
    >
      <div
        className="top"
        style={{
          background: 'linear-gradient(to right, #0d9488, #0f766e)',
          color: 'white',
          padding: '24px',
          borderRadius: '12px 12px 0 0',
          marginTop: '30%'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '8px'
          }}
        >
          <img src="/elma.jpg" className="logo" width="90" height="90" />
          <div>
            <h2
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                margin: 0
              }}
            >
              ELMA HEALTHCARE
            </h2>
            <p style={{ fontSize: '12px', margin: 0 }}>
              Mazeras - City side, Rabai
            </p>
          </div>
        </div>
        <p style={{ fontSize: '12px', marginTop: '8px', margin: 0 }}>
          Tel: 0768433926
        </p>
      </div>

      <div style={{ padding: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div
            style={{
              width: '96px',
              height: '96px',
              backgroundColor: '#e5e7eb',
              borderRadius: '50%',
              margin: '0 auto 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <User size={40} style={{ color: '#9ca3af' }} />
          </div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 4px 0'
            }}
          >
            {name}
          </h3>
          <p style={{ fontSize: '14px', color: 'black', margin: 0 }}>
            <b>Patient Number:</b> {patientnumber}
          </p>
        </div>

        <div>
          {[
            { label: 'Date of Birth', value: dateofbirth },
            { label: 'Phone', value: phone },
            { label: 'Residence', value: residence },
            { label: 'Registered date', value: registered }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: idx < 6 ? '1px solid #e5e7eb' : 'none',
                paddingBottom: '8px',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight:'bold',
              }}
            >
              <span style={{ color: 'black' }}><b>{item.label}:</b></span>
              <span
                style={{
                  fontWeight: '500',
                  color: item.isAlert ? '#ef4444' : 'inherit'
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="no-print"
        style={{
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          gap: '12px',
          borderRadius: '0 0 12px 12px'
        }}
      >
        <button
          onClick={() => window.print()}
          style={{
            flex: 1,
            padding: '8px 16px',
            backgroundColor: '#0d9488',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '14px'
          }}
        >
          <Printer size={16} /> Print Card
        </button>

        <button
          onClick={() => setShowMedicalCard(false)}
          style={{
            flex: 1,
            padding: '8px 16px',
            backgroundColor: '#9ca3af',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Close
        </button>
      </div>
    </div>
  </div>
);
 const handlereceptionist=async()=>{
          if(input["fullname"]==' '||input["fullname"]==null)
        { 
            toast.error("Ensure you have entered patient full name!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
           setActiveSection("receptionist");
          return; 
        }
              if(input["residence"]==' '||input["residence"]==null)
        { 
            toast.error("Ensure you have entered patient place of residence!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
           setActiveSection("receptionist");
          return; 
        }
                 if(input["tel"]==' '||input["tel"]==null)
        { 
            toast.error("Ensure you have entered patient mobile number!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("receptionist");
          return; 
        }
const res=await fetch("http://localhost:2000/details/receptionist",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(input),
  });
  const data=await res.json();
  if(data.Message==1)
  {
    setInput({});
     toast.success(name+', You have sent details of '+data.Name+" to doctor in charge", {
           position: "top-right",
           autoClose: 3000,
           style: { backgroundColor: 'blue', color: 'white' },
         });
  }
  if(data.Message==2)
  {
       toast.error("Patient, "+input["fullname"]+" exists already in today queue ,sent patient to the doctor", {
            position: "top-right",
            autoClose: 3000,
            style: { backgroundColor: 'red', color: 'white' },
          });
  }
    if(data.Message==3)
  {
       toast.error("System database failed, try again!!!", {
            position: "top-right",
            autoClose: 3000,
            style: { backgroundColor: 'red', color: 'white' },
          });
  }
 };
      const fetchqueue=async()=>{
const res = await fetch('http://localhost:2000/details/queue');
      const data = await res.json();
      if(data.Message==1)
      {
         setQueue(data.Queue);
      }
      if(data.Message==3)
      {
         toast.error("System database failed!!!", {
            position: "top-right",
            autoClose: 5000,
            style: { backgroundColor: 'red', color: 'white' },
          });
      }
  };
  const fetchdata=async()=>{
const res = await fetch('http://localhost:2000/details/fetchdata');
      const data = await res.json();
      if(data.Message==1)
      {
          setTodaypatients(data.Today);
          setPendingpayment(data.Pending);
          setTodaypatientsnumber(data.Todaypatients);
          setTotalpatients(data.Totalpatients);
          setPendingpatients(data.Pendingpatients);
          setFollowlist(data.Follow);
          setFollowtotal(data.Followtotal);
      }
      if(data.Message==2)
      {
         toast.error("System database failed!!!", {
            position: "top-right",
            autoClose: 5000,
            style: { backgroundColor: 'red', color: 'white' },
          });
      }
  };
    const fetchanalysis=async()=>{
const res = await fetch('http://localhost:2000/details/fetchanalysis');
      const data = await res.json();
      if(data.Message==1)
      {  setJan(data.Jan);
        setFeb(data.Feb);
        setMar(data.Mar);
        setApr(data.Apr);
        setMay(data.May);
        setJun(data.Jun);
        setJul(data.Jul);
        setAug(data.Aug);
        setSep(data.Sep);
        setOct(data.Oct);
        setNov(data.Nov);
        setDec(data.Dec);
        setJanm(data.Janm);
        setFebm(data.Febm);
        setMarm(data.Marm);
        setAprm(data.Aprm);
        setMaym(data.Maym);
        setJunm(data.Junm);
        setJulm(data.Julm);
        setAugm(data.Augm);
        setSepm(data.Sepm);
        setOctm(data.Octm);
        setNovm(data.Novm);
        setDecm(data.Decm);
      }
      if(data.Message==2)
      {
         toast.error("System database failed!!!", {
            position: "top-right",
            autoClose: 5000,
            style: { backgroundColor: 'red', color: 'white' },
          });
      }
  };
      const handlesubmit=async()=>{
        let objectdata={};
        let service={};
        service["patienttype"]=patientType;
        service["selectedservice"]=selectedService;
        if(selectedService=="Vaccination")
        {
            service["servicetype"]=vaccine["vaccine"];
        }
          if(selectedService=="Circumcision")
        {
            service["servicetype"]=servicestype["circumcision"];
        }
           if(showFamilyPlanning==true)
        {
            service["servicetype"]=servicestype["planning"];
        }
        objectdata["service"]=service;
        let biodata={};
        biodata["patientnumber"]=input["patientnumber"];
        biodata["fullname"]=input["name"];
        biodata["residence"]=input["residence"];
        biodata["tel"]=input["phone"];
        biodata["date"]=input["date"];
        biodata["gender"]=select["gender"];
        biodata["kinname"]=input["kinname"];
        biodata["kincontact"]=input["kincontact"];
        biodata["relationship"]=select["relationship"];
        biodata["blood"]=select["blood"];
        objectdata["biodata"]=biodata;
        let clinical={};
        let clinicalone={};
        clinicalone["complaint"]=selectone["complaint"];
        clinicalone["historypast"]=selectone["historypast"];
        clinical["clinicalone"]=clinicalone;
        let clinicaltwo={};
        clinicaltwo["complaint"]=inputone["complaint"];
        clinicaltwo["historypast"]=inputone["historypast"];
        clinicaltwo["historypresent"]=inputone["historypresent"];
        clinicaltwo["social"]=inputone["social"];
        clinical["clinicaltwo"]=clinicaltwo;
        if(showVitals===true)
       {
        let clinicalthree={};
           clinicalthree["BP"]=vitals["BP"];
           clinicalthree["Temp"]=vitals["Temp"];
           clinicalthree["Pulse"]=vitals["Pulse"];
            clinicalthree["RR"]=vitals["RR"];
             clinicalthree["SpO2"]=vitals["SpO2"];
              clinicalthree["Weight"]=vitals["Weight"];
              clinical["clinicalthree"]=clinicalthree;
       }
       if(checkb===true)
       {
        clinical["clinicalfive"]=checkblood["bloodtest"];
       }
       if(follow["follow"]=='YES')
       {
         clinical["clinicalsix"]=follow["follow"];
       }
       else
       {
        clinical["clinicalsix"]=follow["follow"];
       }
       let clinicalfour={};
       clinicalfour["general"]=general["general"];
       clinicalfour["diagnosis"]=diagnosis["diagnosis"];
       clinicalfour["diagnosisd"]=diagnosisd["diagnosisd"];
       let i=0;
       let keys=Object.keys(investigate);
       let length=keys.length;
       let check={};
       for(i;i<length;i++)
       {
         check[keys[i]]=investigate[keys[i]]; 
       }
       clinicalfour["investigate"]=check;
       clinicalfour["treatment"]=treatment["treatment"];
       clinical["clinicalfour"]=clinicalfour;
       objectdata["clinical"]=clinical;
       let billing={};
       billing["payment"]=payment["payment"];
       billing["amount"]=payment["amount"];
       billing["method"]=payment["method"];
       billing["code"]=payment["code"];
       objectdata["billing"]=billing;
  const res=await fetch("http://localhost:2000/details/submit",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(objectdata),
  });
  const data=await res.json();
  if(data.Message==1)
  {
    setSearchbutton(false);
    setInput({});
    setSelect({});
    setShowchoices(false);
    setInputone({});
    setSelectone({});
    setActiveSection("dashboard");
    fetchdata(); 
    fetchanalysis();
    fetchqueue();
    setCarddata(data);
     if(showVitals===true)
       {
        setVitals({});
       }
       if(checkb===true)
       {
          setCheckblood({});
       }
       setFollow({});
       setGeneral({});
       setDiagnosisd({});
       setDiagnosis({});
       setInvestigate({});
       setTreatment({});
       setPayment({});
     toast.success("Dr. "+name+', You have successfully added details of '+data.name, {
           position: "top-right",
           autoClose: 3000,
           style: { backgroundColor: 'blue', color: 'white' },
         });
         setTimeout(()=>{
          setShowMedicalCard(true);
         },3000);
  }
  if(data.Message==2)
  {
       setSearchbutton(false);
    setInput({});
    setSelect({});
    setShowchoices(false);
    setInputone({});
    setSelectone({});
    setActiveSection("dashboard");
    fetchdata(); 
    fetchanalysis();
    fetchqueue();
    setCarddata(data);
     if(showVitals===true)
       {
        setVitals({});
       }
       if(checkb===true)
       {
          setCheckblood({});
       }
       setFollow({});
       setGeneral({});
       setDiagnosisd({});
       setDiagnosis({});
       setInvestigate({});
       setTreatment({});
       setPayment({});
      setActiveSection("dashboard");
    fetchdata(); 
    fetchanalysis();
    fetchqueue();
    setCarddata(data);
     toast.success("Dr. "+name+', You have successfully added details of '+data.name+" for "+data.Times+" times", {
           position: "top-right",
           autoClose: 3000,
           style: { backgroundColor: 'blue', color: 'white' },
         });
         setTimeout(()=>{
          setShowMedicalCard(true);
         },3000);
  }
    if(data.Message==3)
  {
       toast.error("System database failed, try again!!!", {
            position: "top-right",
            autoClose: 5000,
            style: { backgroundColor: 'red', color: 'white' },
          });
  }
    };
    const handlenext=(parameter)=>{
         if(parameter==="service")
     {
        if(patientType==" "||patientType=='')
        { 
          
            toast.error("Ensure you have selected patient type!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("service");
          return; 
        }
        if(selectedService=="Vaccination")
        {
          if(vaccine["vaccine"]==" "||vaccine["vaccine"]==null)
          {
            toast.error("Ensure you have selected type of vaccination type!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("service");
         return;
              }
        }
            if(selectedService=="Circumcision")
        {
          if(servicestype["circumcision"]==" "||servicestype["circumcision"]==null)
          {
            toast.error("Ensure you have selected type of Circumcision services!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("service");
         return;
              }
        }
                if(selectedService=="Dental")
        {
          if(servicestype["dental"]==" "||servicestype["dental"]==null)
          {
            toast.error("Ensure you have selected type of Dental services!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("service");
         return;
              }
        }
                   if(showFamilyPlanning==true)
        {
          if(servicestype["planning"]==" "||servicestype["planning"]==null)
          {
            toast.error("Ensure you have selected type of fammily planning services!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("service");
         return;
              }
        }
        if(selectedService==''||selectedService==' ')
          {
            toast.error("Ensure you have selected type of service!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("service");
         return;
              }
        setActiveSection("biodata");
       }
     if(parameter==="biodata")
     {
        if(select["gender"]==' '||select["gender"]==null)
        { 
            toast.error("Ensure you have selected patient gender!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("biodata");
          return; 
        }
          if(select["relationship"]==' '||select["relationship"]==null)
        { 
            toast.error("Ensure you have selected patient relation to next of kin!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("biodata");
          return; 
        }
             if(select["blood"]==' '||select["blood"]==null)
        { 
            toast.error("Ensure you have selected patient blood group!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("biodata");
          return; 
        }
                    if(input["date"]==' '||input["date"]==null)
        { 
            toast.error("Ensure you have entered today date!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("biodata");
          return; 
        }
                     if(input["kinname"]==' '||input["kinname"]==null)
        { 
            toast.error("Ensure you have entered patient next of kin name!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("biodata");
          return; 
        }
                     if(input["kincontact"]==' '||input["kincontact"]==null)
        { 
            toast.error("Ensure you have entered patient next of kin contact!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("biodata");
          return; 
        }
        setActiveSection("clinical");
     }
       if(parameter==="clinical")
     {
        if(selectone["complaint"]==' '||selectone["complaint"]==null)
        { 
            toast.error("Ensure you have selected patient complaint !!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("clinical");
          return; 
            }
              if(selectone["historypast"]==' '||selectone["historypast"]==null)
        { 
            toast.error("Ensure you have selected patient past history !!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("clinical");
          return; 
            }
                   if(inputone["social"]==' '||inputone["social"]==null)
        { 
            toast.error("Ensure you have entered patient socio-economic history!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("clinical");
          return; 
            }
                          if(inputone["historypresent"]==' '||inputone["historypresent"]==null)
        { 
            toast.error("Ensure you have entered patient current history!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("clinical");
          return; 
            }
                               if(inputone["complaint"]==' '||inputone["complaint"]==null)
        { 
            toast.error("Ensure you have entered patient complaints!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("clinical");
          return; 
            }
                                    if(inputone["historypast"]==' '||inputone["historypast"]==null)
        { 
            toast.error("Ensure you have entered patient past history!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("clinical");
          return; 
            }
       if(showVitals===true)
       {
        if(vitals["BP"]==' '||vitals["BP"]==null)
        {
            toast.error("Ensure you have filled BP!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
        }
          if(vitals["Temp"]==' '||vitals["Temp"]==null)
        {
            toast.error("Ensure you have filled Temp!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
        }
           if(vitals["Pulse"]==' '||vitals["Pulse"]==null)
        {
            toast.error("Ensure you have filled Pulse!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
        }
             if(vitals["RR"]==' '||vitals["RR"]==null)
        {
            toast.error("Ensure you have filled RR!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
        }
             if(vitals["SpO2"]==' '||vitals["SpO2"]==null)
        {
            toast.error("Ensure you have filled SpO2!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
        }
              if(vitals["Weight"]==' '||vitals["Weight"]==null)
        {
            toast.error("Ensure you have filled Weight!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
        }
      }
      if(general["general"]==" "||general["general"]==""||Object.keys(general).length==0)
      {
   toast.error("Ensure you have filled General Examination!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
      }
          if(diagnosis["diagnosis"]==" "||diagnosis["diagnosis"]==""||Object.keys(diagnosis).length==0)
      {
   toast.error("Ensure you have filled Diagnosis!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
      }
          if(diagnosisd["diagnosisd"]==" "||diagnosisd["diagnosisd"]==""||Object.keys(diagnosisd).length==0)
      {
   toast.error("Ensure you have filled Diagnosis details!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
      }
       if(showInvestigation==true){
                 if(Object.keys(investigate).length==0)
      {
   toast.error("Ensure you have Selected what to be investigated!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
      }
      if(Object.keys(investigate).includes("Blood Tests"))
      {
        if(checkblood["bloodtest"]==" "||checkblood["bloodtest"]==""||Object.keys(checkblood).length==0)
        {
            toast.error("Ensure you have Selected blood test to be tested!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
        }
      }
    }
           if(treatment["treatment"]==" "||treatment["treatment"]==""||Object.keys(treatment).length==0)
      {
   toast.error("Ensure you have filled treatment!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
         setActiveSection("clinical");
         return;
      }
        setActiveSection("billing");
     }
      if(parameter==="billing")
     {
        if(payment["payment"]==' '||payment["payment"]==null)
        { 
            toast.error("Indicate whether patient have paid or not paid!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("billing");
          return; 
        }
         if(payment["amount"]==' '||payment["amount"]==null)
        { 
            toast.error("Indicate amount paid by patient!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("billing");
          return; 
        }
           if(payment["method"]==' '||payment["method"]==null)
        { 
            toast.error("Indicate method of payment!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("billing");
          return; 
        }
              if(payment["code"]==' '||payment["code"]==null)
        { 
            toast.error("Enter transaction code!!!.", {
                  position: "top-right",
                  autoClose: 5000,
                  style: { backgroundColor: 'red', color: 'white' },
                });
          setActiveSection("billing");
          return; 
        }
        handlesubmit();
     }
    }
  useEffect(()=>{
    if(email==null)
    {
      navigate('/auth');
    }
    else
    {
      setSelectedDoctor(name);
      if(role=="receptionist")
      {
        setActiveSection("receptionist");
      }
    }
      if(email!=null)
      {
    setNameletters(firstletters);
    fetchdata(); 
    fetchanalysis();
    fetchqueue();
    }
  },[])
 const logout=()=>{
        toast.success('You have logged out successfully', {
          position: "top-right",
          autoClose: 5000,
          style: { backgroundColor: 'teal', color: 'white' },
        });
localStorage.clear();
navigate(0);

 };
  const MenuItem = ({ icon: Icon, label, section }) => {
    const isActive = activeSection === section;
    return (
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          backgroundColor: isActive ? '#0d9488' : 'transparent',
          color: 'white'
        }}
        onClick={() => setActiveSection(section)}
        onMouseEnter={(e) => {
          if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
        }}
        onMouseLeave={(e) => {
          if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <Icon size={20} />
        <span>{label}</span>
      </div>
    );
  };
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9fafb', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        background: 'linear-gradient(to bottom, #0d9488, #0f766e)',
        color: 'white',
        padding: '24px',
        overflowY: 'auto'
      }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <img src='/elma.jpg' width="100" height="100"/>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>ELMA HEALTHCARE</h1>
              <p style={{ fontSize: '12px', opacity: 0.9, margin: 0 }}>Mazeras - City side, Rabai</p>
            </div>
          </div>
          <p style={{ fontSize: '12px', opacity: 0.75, marginTop: '8px', margin: 0 }}>Affordable health to all people</p>
          <p style={{ fontSize: '12px', opacity: 0.75, margin: 0 }}>Tel: 0768433926</p>
          <ToastContainer/>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {role=="doctor"&&(   <MenuItem icon={Home} label="Dashboard" section="dashboard" />
        )}
           {role=="receptionist"&&( 
            <MenuItem icon={ConciergeBell} label="Receptionist" section="receptionist" />
           )}
           {role=="doctor"&&( 
            <div>
              <MenuItem icon={User} label="Queue" section="Queue" />
          <MenuItem icon={ClipboardList} label="Service Type" section="service" />
          <MenuItem icon={User} label="Bio-Data" section="biodata" />
          <MenuItem icon={FileText} label="Clinical Info" section="clinical" />
          <MenuItem icon={DollarSign} label="Billing" section="billing" />
          <MenuItem icon={BarChart3} label="Reports" section="reports" />
          <MenuItem icon={FileText} label="Today patients" section="Today patients" />
           <MenuItem icon={FileText} label="Follow ups" section="Follow ups" />
          <MenuItem icon={FileText} label="Pending payments" section="Pending payments" />
          <MenuItem icon={FileText} label="Total patients" section="Total patients" />
          <MenuItem icon={PieChart} label="Charts" section="Charts" />
          </div>
           )}
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <header style={{
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0d9488', margin: '0 0 4px 0' }}>
              {activeSection === 'dashboard' && 'Doctor Dashboard'}
                {activeSection === 'receptionist' && 'Enter patient details'}
                 {activeSection === 'Queue' && 'Queue'}
              {activeSection === 'service' && 'Service Type Selection'}
              {activeSection === 'biodata' && 'Patient Registration'}
              {activeSection === 'clinical' && 'Clinical Information'}
              {activeSection === 'billing' && 'Billing Section'}
              {activeSection === 'reports' && 'Reports Module'}
              {activeSection === 'Today patients' && 'Today patients'}
               {activeSection === 'Follow ups' && 'Follow ups'}
              {activeSection === 'Pending payments' && 'Pending payments'}
              {activeSection === 'Total patients' && 'Total patients'}
              {activeSection === 'Charts' && 'Charts'}
            </h2>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Tel: {localStorage.getItem("phone")}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
             <b>{role=="doctor"&&(<div>Dr.</div>)} {selectedDoctor}</b>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#0d9488',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              {nameletters}
            </div>
            <button 
            onClick={logout}
            style={{
            padding: '8px 16px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <LogOut size={16} />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
      {role=="doctor"&&(
        <div>
         {activeSection === 'dashboard' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
                {[
                  { label: "Today's Patients", id:"Today patients", value:todaypatients, color: '#0d9488' },
                  { label: 'Pending Payments', id:"Pending payments", value:pendingpayment, color: '#f97316' },
                  { label: 'Follow-ups',id:"Follow ups", value:followtotal, color: '#3b82f6' }
                ].map((stat, idx) => (
                  <div key={idx}
                  onClick={()=>setActiveSection(stat.id)}
                   style={{
                      backgroundColor: 'white',
                    padding: '24px',
                    borderRadius: '12px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                  }}>
                    <h4 style={{ color: '#6b7280', fontSize: '14px', marginBottom: '8px' }}>{stat.label}</h4>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', color: stat.color, margin: 0 }}>{stat.value}</p>
                  </div>
                ))}
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#0d9488',
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid #0d9488'
                }}>Quick Actions</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {[
                    { icon: UserPlus, label: 'New Patient', color: 'teal', action: () => { setIsExistingPatient(false); setActiveSection('service'); } },
                    { icon: Users, label: 'Existing Patient', color: 'teal', action: () => { setIsExistingPatient(true); setActiveSection('service'); } },
                   { icon: BarChart3, label: 'Reports', color: 'teal', action: () => {setActiveSection('reports'); setActiveSection("Charts");} }
                  ].map((btn, idx) => {
                    const Icon = btn.icon;
                    return (
                      <button 
                        key={idx}
                        onClick={btn.action}
                        style={{
                          padding: '12px 24px',
                          backgroundColor: btn.color,
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '16px',
                          fontWeight: '500'
                        }}
                      >
                        <Icon size={20} /> {btn.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          </div>
          )}
 {role=="receptionist"&&(
  <div>
     {activeSection === 'receptionist' && (
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#0d9488',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '2px solid #0d9488'
              }}> Reception form</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
                {[
                  { label: 'Full Name *', type: 'text',name:"fullname",id:"fullname", placeholder: 'Enter full name' },
                  { label: 'Residence *', type: 'text',name:"residence",id:"residence", placeholder: 'Enter address' },
                  { label: 'Phone Number *', type: 'tel',name:"tel",id:"tel", placeholder: '+254...' },
                ].map((field, idx) => (
                  <div key={idx} style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                      {field.label}
                    </label>
                    {field.type === 'select' ? (
                      <select 
                      name={field.name}
                      id={field.id}
                      required
                      onChange={handleselect}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                      }}>
                        {field.options.map((opt, i) => <option key={i}>{opt}</option>)}
                      </select>
                    ) : (
                      <input 
                      required
                        type={field.type}
                        placeholder={field.placeholder}
                        id={field.id}
                        name={field.name}
                        onChange={handleinput}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '16px',
                          boxSizing: 'border-box',
                          backgroundColor: field.readOnly ? '#f9fafb' : 'white'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <button 
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#0d9488',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '16px'
                }}
                onClick={()=>handlereceptionist()}
              >
                Submit
              </button>
            </div>
          )}
          </div>
        )}
     {role=="doctor"&&( <div>    {activeSection === 'Queue' && (
<div
  style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    width: '700px',         
    overflowX: 'auto',       
    overflowY: 'auto',    
    whiteSpace: 'nowrap',   
    display: 'block'       
  }}
>
              <table style={styles.tablestyle}>
                <thead>
                  <tr>
                    <th style={styles.datastyle}>Name</th>
                      <th style={styles.datastyle}>Residence</th>
                      <th style={styles.datastyle}>Phone</th>
                          <th style={styles.datastyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                {queue.map((data,key)=>(
                   <tr key={key}>
                      <td style={styles.datastyle}>{data.name}</td>
                      <td style={styles.datastyle}>{data.residence}</td>
                      <td style={styles.datastyle}>{data.phone}</td>
                       <td style={styles.datastyle}>
                          {[
                       { icon: Zap, label: 'Attend to patient', color: 'teal', action: () => {setInput(data); setActiveSection("service");} },
                           ].map((btn, idx) => {
                    const Icon = btn.icon;
                    return (
                      <button 
                        key={idx}
                        onClick={btn.action}
                        style={{
                          padding: '12px 24px',
                          backgroundColor: btn.color,
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '16px',
                          fontWeight: '500'
                        }}
                      >
                        <Icon size={20} /> {btn.label}
                      </button>
                    );
                  })}
                      </td>
                   </tr>
                ))}
                </tbody>
                </table>
            </div>
          )}
          {activeSection === 'service' && (
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#0d9488',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '2px solid #0d9488'
              }}>
                {isExistingPatient ? 'Existing Patient - Select Service' : 'New Patient - Select Service Type'}
              </h3>
              
              {isExistingPatient && (
                <div style={{
                  marginBottom: '24px',
                  padding: '16px',
                  backgroundColor: '#eff6ff',
                  borderRadius: '8px'
                }}>
                  {selected===false&&(
                    <div>
  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Search Patient</label>
                  <input 
                    type="text" 
                    onChange={handlesearch}
                    placeholder="Enter Patient ID or Name" 
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      marginBottom: '12px',
                      boxSizing: 'border-box'
                    }} 
                  />
                  </div>
                  )}
                    {selected===true&&(
                      <div 
    style={{
      padding: "10px",
      margin: "5px 0",
      backgroundColor: "lightgray",
      borderRadius: "6px",
      cursor: "pointer"
    }}
  >
    <p style={{textAlign:"center"}}><b>Selected Patient</b></p>
    <b>Patient name:</b> {selectedpatient.name}<br/>
    <b>Patient number:</b> {selectedpatient.patientnumber}<br/>
    <b>Residence:</b> {selectedpatient.residence}<br/>
    <b>Phone number:</b> {selectedpatient.phone}<br/>
     <b>Date of birth:</b> {selectedpatient.dateofbirth}<br/>
      <b>Gender:</b> {selectedpatient.gender}<br/>
  </div>
                  )}
               {selected===false&&(
                <div>

            {results.map((value, key) => (
  <div 
    key={key}
     onClick={() =>{handleselectedpatient(value);setInput(selecteddetails);setSelect(selecteddetailsone);setSearchbutton(true);setActiveSection("service");  toast.success("Dr. "+name+', You have successfully saved biodata of '+selectedpatient.name, {
           position: "top-right",
           autoClose: 3000,
           style: { backgroundColor: 'blue', color: 'white' },
         });}}
    style={{
      padding: "10px",
      margin: "5px 0",
      backgroundColor: "lightgray",
      borderRadius: "6px",
      cursor: "pointer"
    }}
  >
    <b>Patient name:</b> {value.name}<br/>
    <b>Patient number:</b> {value.patientnumber}<br/>
    <b>Residence:</b> {value.residence}<br/>
    <b>Phone number:</b> {value.phone}<br/>
     <b>Date of birth:</b> {value.dateofbirth}<br/>
      <b>Gender:</b> {value.gender}<br/>
  </div>
))}
         </div>      )}

                  <h4 style={{ fontWeight: 'bold', color: '#3b82f6', marginBottom: '12px' }}>Select Service Type</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Follow-up Visit', 'Treatment Continuation', 'Lab Results Review', 'Prescription Refill', 'Medical Certificate', 'General Check-up','New treatment'].map(service => (
                      <label key={service} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}>
                        <input onChange={() => {
                                handleservice(service);}} type="radio" name="existing-service" value={service} />
                        <span>{service}</span>
                      </label>
                    ))}
                    {showchoices&& (
                <>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Patient Type *</label>
                    <select 
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                      }}
                      value={patientType}
                      onChange={(e) => {
                        setPatientType(e.target.value);
                        setShowFamilyPlanning(false);
                        setShowServiceMethods(false);
                      }}
                    >
                      <option value=" ">-- Select Patient Type --</option>
                      <option value="outpatient">Outpatient</option>
                      <option value="inpatient">In-Patient</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  {patientType === 'outpatient' && (
                    <div style={{
                      marginBottom: '24px',
                      padding: '16px',
                      backgroundColor: '#f0fdfa',
                      borderRadius: '8px',
                      borderLeft: '4px solid #0d9488'
                    }}>
                      <h4 style={{ fontWeight: 'bold', color: '#0d9488', marginBottom: '12px' }}>Outpatient Services</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['Consultation', 'Treatment Follow-up', 'Vaccination', 'Check-up', 'Wound Dressing', 'Injection Services'].map(service => (
                          <label key={service} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}>
                            <input 
                              type="radio" 
                              name="outpatient-service" 
                              value={service} 
                              onChange={() => {
                                setSelectedService(service);
                                setShowServiceMethods(service === 'Vaccination');
                              }} 
                            />
                            <span>{service}</span>
                          </label>
                        ))}
                      </div>
                      
                      {showServiceMethods && selectedService ==='Vaccination' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#166534', marginBottom: '8px' }}>
                            Select Vaccine Type
                          </label>
                          <select
                          name="vaccine"
                          id="vaccine"
                            onChange={handlevaccine}
                           style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #86efac',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Vaccine --</option>
                            <option value="COVID-19">COVID-19</option>
                            <option value="Hepatitis B">Hepatitis B</option>
                            <option value="Tetanus">Tetanus</option>
                            <option value="BCG">BCG</option>
                            <option value="polio">Polio</option>
                            <option value="Measles">Measles</option>
                            <option value="Yellow Fever">Yellow Fever</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}

                  {patientType === 'inpatient' && (
                    <div style={{
                      marginBottom: '24px',
                      padding: '16px',
                      backgroundColor: '#eff6ff',
                      borderRadius: '8px',
                      borderLeft: '4px solid #3b82f6'
                    }}>
                      <h4 style={{ fontWeight: 'bold', color: '#3b82f6', marginBottom: '12px' }}>In-Patient Services</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['Admission', 'Surgery', 'Observation', 'Post-operative Care', 'Maternity Services'].map(service => (
                          <label key={service} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}>
                            <input 
                              type="radio" 
                              name="inpatient-service" 
                              value={service} 
                              onChange={() => {
                                setSelectedService(service);
                                setShowServiceMethods(['Surgery', 'Maternity Services'].includes(service));
                              }} 
                            />
                            <span>{service}</span>
                          </label>
                        ))}
                      </div>
                      
                      {showServiceMethods && selectedService === 'Surgery' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dbeafe',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#1e40af', marginBottom: '8px' }}>
                            Surgery Type
                          </label>
                          <select style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #93c5fd',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Surgery --</option>
                            <option value="Minor Surgery">Minor Surgery</option>
                            <option value="Major Surgery">Major Surgery</option>
                            <option value="Emergency Surgery">Emergency Surgery</option>
                            <option value="Caesarean Section">Caesarean Section</option>
                            <option value="Appendectomy">Appendectomy</option>
                          </select>
                        </div>
                      )}
                      
                      {showServiceMethods && selectedService === 'Maternity Services' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#fce7f3',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#be185d', marginBottom: '8px' }}>
                            Maternity Service
                          </label>
                          <select style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #fbcfe8',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Service --</option>
                            <option value="Antenatal Care">Antenatal Care (ANC)</option>
                            <option value="Delivery (Normal)">Delivery (Normal)</option>
                            <option value="Delivery (C-Section)">Delivery (C-Section)</option>
                            <option value="Postnatal Care (PNC)">Postnatal Care (PNC)</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}

                  {patientType === 'others' && (
                    <div style={{
                      marginBottom: '24px',
                      padding: '16px',
                      backgroundColor: '#faf5ff',
                      borderRadius: '8px',
                      borderLeft: '4px solid #a855f7'
                    }}>
                      <h4 style={{ fontWeight: 'bold', color: '#7c3aed', marginBottom: '12px' }}>Other Services</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {[
                          { name: 'Buying Drugs', hasMethod: false },
                          { name: 'Circumcision', hasMethod: true },
                          { name: 'Family Planning', hasMethod: true, isFP: true },
                          { name: 'Lab Tests', hasMethod: false },
                          { name: 'Dental', hasMethod: true },
                          { name: 'Physiotherapy', hasMethod: false }
                        ].map(service => (
                          <label key={service.name} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}>
                            <input 
                              type="radio" 
                              name="other-service" 
                              value={service.name}
                              onChange={() => {
                                if (service.isFP) {
                                  setShowFamilyPlanning(true);
                                  setShowServiceMethods(false);
                                } else {
                                  setShowFamilyPlanning(false);
                                  setSelectedService(service.name);
                                  setShowServiceMethods(service.hasMethod);
                                }
                              }}
                            />
                            <span>{service.name}</span>
                          </label>
                        ))}
                      </div>

                      {showFamilyPlanning && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#166534', marginBottom: '8px' }}>
                            Select Family Planning Method
                          </label>
                          <select
                          onChange={handleservicestype}
                          name="planning"
                          id="planning"
                           style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #86efac',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Method --</option>
                            <option value="Birth Control Pills">Birth Control Pills</option>
                            <option value="Injectable (Depo-Provera)">Injectable (Depo-Provera)</option>
                            <option value="Implants (Jadelle)">Implants (Jadelle)</option>
                            <option value="IUD (Copper-T)">IUD (Copper-T)</option>
                            <option value="Condoms">Condoms</option>
                            <option value="Tubal Ligation">Tubal Ligation</option>
                            <option value="Vasectomy">Vasectomy</option>
                            <option value="Natural Planning">Natural Planning</option>
                            <option value="Emergency Contraception">Emergency Contraception</option>
                          </select>
                        </div>
                      )}
                      
                      {showServiceMethods && selectedService === 'Circumcision' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#166534', marginBottom: '8px' }}>
                            Circumcision Type
                          </label>
                          <select
                          onChange={handleservicestype}
                          name="circumcision"
                          id="circumcision"
                           style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #fdba74',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Type --</option>
                            <option value="Medical Circumcision (Adult)">Medical Circumcision (Adult)</option>
                            <option value="Medical Circumcision (Child)">Medical Circumcision (Child)</option>
                            <option value="Traditional Method">Traditional Method</option>
                            <option value="PrePex Method">PrePex Method</option>
                          </select>
                        </div>
                      )}
                      
                      {showServiceMethods && selectedService === 'Dental' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#166534', marginBottom: '8px' }}>
                            Dental Service
                          </label>
                          <select
                          onChange={handleservicestype}
                          name="dental"
                          id="dental"
                           style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #93c5fd',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Service --</option>
                            <option value="Tooth Extraction">Tooth Extraction</option>
                            <option value="Dental Filling">Dental Filling</option>
                            <option value="Root Canal">Root Canal</option>
                            <option value="Teeth Cleaning">Teeth Cleaning</option>
                            <option value="Tooth Whitening">Tooth Whitening</option>
                            <option value="Dentures">Dentures</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
                  </div>
                </div>
              )}

              {!isExistingPatient && (
                <>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Patient Type *</label>
                    <select 
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                      }}
                      value={patientType}
                      onChange={(e) => {
                        setPatientType(e.target.value);
                        setShowFamilyPlanning(false);
                        setShowServiceMethods(false);
                      }}
                    >
                      <option value=" ">-- Select Patient Type --</option>
                      <option value="outpatient">Outpatient</option>
                      <option value="inpatient">In-Patient</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  {patientType === 'outpatient' && (
                    <div style={{
                      marginBottom: '24px',
                      padding: '16px',
                      backgroundColor: '#f0fdfa',
                      borderRadius: '8px',
                      borderLeft: '4px solid #0d9488'
                    }}>
                      <h4 style={{ fontWeight: 'bold', color: '#0d9488', marginBottom: '12px' }}>Outpatient Services</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['Consultation', 'Treatment Follow-up', 'Vaccination', 'Check-up', 'Wound Dressing', 'Injection Services'].map(service => (
                          <label key={service} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}>
                            <input 
                              type="radio" 
                              name="outpatient-service" 
                              value={service} 
                              onChange={() => {
                                setSelectedService(service);
                                setShowServiceMethods(service === 'Vaccination');
                              }} 
                            />
                            <span>{service}</span>
                          </label>
                        ))}
                      </div>
                      
                      {showServiceMethods && selectedService ==='Vaccination' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#166534', marginBottom: '8px' }}>
                            Select Vaccine Type
                          </label>
                          <select
                          name="vaccine"
                          id="vaccine"
                            onChange={handlevaccine}
                           style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #86efac',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Vaccine --</option>
                            <option value="COVID-19">COVID-19</option>
                            <option value="Hepatitis B">Hepatitis B</option>
                            <option value="Tetanus">Tetanus</option>
                            <option value="BCG">BCG</option>
                            <option value="polio">Polio</option>
                            <option value="Measles">Measles</option>
                            <option value="Yellow Fever">Yellow Fever</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}

                  {patientType === 'inpatient' && (
                    <div style={{
                      marginBottom: '24px',
                      padding: '16px',
                      backgroundColor: '#eff6ff',
                      borderRadius: '8px',
                      borderLeft: '4px solid #3b82f6'
                    }}>
                      <h4 style={{ fontWeight: 'bold', color: '#3b82f6', marginBottom: '12px' }}>In-Patient Services</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['Admission', 'Surgery', 'Observation', 'Post-operative Care', 'Maternity Services'].map(service => (
                          <label key={service} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}>
                            <input 
                              type="radio" 
                              name="inpatient-service" 
                              value={service} 
                              onChange={() => {
                                setSelectedService(service);
                                setShowServiceMethods(['Surgery', 'Maternity Services'].includes(service));
                              }} 
                            />
                            <span>{service}</span>
                          </label>
                        ))}
                      </div>
                      
                      {showServiceMethods && selectedService === 'Surgery' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dbeafe',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#1e40af', marginBottom: '8px' }}>
                            Surgery Type
                          </label>
                          <select style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #93c5fd',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Surgery --</option>
                            <option value="Minor Surgery">Minor Surgery</option>
                            <option value="Major Surgery">Major Surgery</option>
                            <option value="Emergency Surgery">Emergency Surgery</option>
                            <option value="Caesarean Section">Caesarean Section</option>
                            <option value="Appendectomy">Appendectomy</option>
                          </select>
                        </div>
                      )}
                      
                      {showServiceMethods && selectedService === 'Maternity Services' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#fce7f3',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#be185d', marginBottom: '8px' }}>
                            Maternity Service
                          </label>
                          <select style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #fbcfe8',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Service --</option>
                            <option value="Antenatal Care">Antenatal Care (ANC)</option>
                            <option value="Delivery (Normal)">Delivery (Normal)</option>
                            <option value="Delivery (C-Section)">Delivery (C-Section)</option>
                            <option value="Postnatal Care (PNC)">Postnatal Care (PNC)</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}

                  {patientType === 'others' && (
                    <div style={{
                      marginBottom: '24px',
                      padding: '16px',
                      backgroundColor: '#faf5ff',
                      borderRadius: '8px',
                      borderLeft: '4px solid #a855f7'
                    }}>
                      <h4 style={{ fontWeight: 'bold', color: '#7c3aed', marginBottom: '12px' }}>Other Services</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {[
                          { name: 'Buying Drugs', hasMethod: false },
                          { name: 'Circumcision', hasMethod: true },
                          { name: 'Family Planning', hasMethod: true, isFP: true },
                          { name: 'Lab Tests', hasMethod: false },
                          { name: 'Dental', hasMethod: true },
                          { name: 'Physiotherapy', hasMethod: false }
                        ].map(service => (
                          <label key={service.name} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}>
                            <input 
                              type="radio" 
                              name="other-service" 
                              value={service.name}
                              onChange={() => {
                                if (service.isFP) {
                                  setShowFamilyPlanning(true);
                                  setShowServiceMethods(false);
                                } else {
                                  setShowFamilyPlanning(false);
                                  setSelectedService(service.name);
                                  setShowServiceMethods(service.hasMethod);
                                }
                              }}
                            />
                            <span>{service.name}</span>
                          </label>
                        ))}
                      </div>

                      {showFamilyPlanning && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#166534', marginBottom: '8px' }}>
                            Select Family Planning Method
                          </label>
                          <select
                          onChange={handleservicestype}
                          name="planning"
                          id="planning"
                           style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #86efac',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Method --</option>
                            <option value="Birth Control Pills">Birth Control Pills</option>
                            <option value="Injectable (Depo-Provera)">Injectable (Depo-Provera)</option>
                            <option value="Implants (Jadelle)">Implants (Jadelle)</option>
                            <option value="IUD (Copper-T)">IUD (Copper-T)</option>
                            <option value="Condoms">Condoms</option>
                            <option value="Tubal Ligation">Tubal Ligation</option>
                            <option value="Vasectomy">Vasectomy</option>
                            <option value="Natural Planning">Natural Planning</option>
                            <option value="Emergency Contraception">Emergency Contraception</option>
                          </select>
                        </div>
                      )}
                      
                      {showServiceMethods && selectedService === 'Circumcision' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#166534', marginBottom: '8px' }}>
                            Circumcision Type
                          </label>
                          <select
                          onChange={handleservicestype}
                          name="circumcision"
                          id="circumcision"
                           style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #fdba74',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Type --</option>
                            <option value="Medical Circumcision (Adult)">Medical Circumcision (Adult)</option>
                            <option value="Medical Circumcision (Child)">Medical Circumcision (Child)</option>
                            <option value="Traditional Method">Traditional Method</option>
                            <option value="PrePex Method">PrePex Method</option>
                          </select>
                        </div>
                      )}
                      
                      {showServiceMethods && selectedService === 'Dental' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#166534', marginBottom: '8px' }}>
                            Dental Service
                          </label>
                          <select
                          onChange={handleservicestype}
                          name="dental"
                          id="dental"
                           style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #93c5fd',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Service --</option>
                            <option value="Tooth Extraction">Tooth Extraction</option>
                            <option value="Dental Filling">Dental Filling</option>
                            <option value="Root Canal">Root Canal</option>
                            <option value="Teeth Cleaning">Teeth Cleaning</option>
                            <option value="Tooth Whitening">Tooth Whitening</option>
                            <option value="Dentures">Dentures</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
              
             {!searchbutton&&(<button 
                style={{
                  marginTop: '24px',
                  padding: '12px 24px',
                  backgroundColor: '#0d9488',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '16px'
                }}
                onClick={()=>handlenext(activeSection)}
              >
                Next: Bio-Data <ArrowRight size={20} />
              </button>
)}
        {searchbutton&&(<button 
                style={{
                  marginTop: '24px',
                  padding: '12px 24px',
                  backgroundColor: '#0d9488',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '16px'
                }}
                onClick={()=>setActiveSection("clinical")}
              >
                Next: Clinical info <ArrowRight size={20} />
              </button>
)}
            </div>
          )}
          {activeSection === 'biodata' && (
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#0d9488',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '2px solid #0d9488'
              }}>Patient Bio-Data / Registration Form</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
                {[
                  { label: 'Date of Birth', type: 'date',name:"date",id:"date" },
                  { label: 'Gender', type: 'select', name:"gender",id:"gender", options: [' ', 'Male', 'Female', 'Other'] },
                  { label: 'Next of Kin (Full Name)', type: 'text',name:"kinname",id:"kinname", placeholder: 'Next of kin full name' },
                  { label: 'Next of Kin Contact', type: 'tel',name:"kincontact",id:"kincontact", placeholder: 'Next of kin phone' },
                  { label: 'Relationship to Patient', type: 'select',name:"relationship",id:"relationship", options: [' ', 'Spouse', 'Parent', 'Sibling', 'Child', 'Friend', 'Guardian'] },
                  { label: 'Blood Group', type: 'select',name:"blood",id:"blood", options: [' ', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-','Unknown'] }
                ].map((field, idx) => (
                  <div key={idx} style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                      {field.label}
                    </label>
                    {field.type === 'select' ? (
                      <select 
                      name={field.name}
                      id={field.id}
                      required
                      onChange={handleselect}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        boxSizing: 'border-box'
                      }}>
                        {field.options.map((opt, i) => <option key={i}>{opt}</option>)}
                      </select>
                    ) : (
                      <input 
                      required
                        type={field.type}
                        placeholder={field.placeholder}
                        id={field.id}
                        name={field.name}
                        onChange={handleinput}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '16px',
                          boxSizing: 'border-box',
                          backgroundColor: field.readOnly ? '#f9fafb' : 'white'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <button 
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#0d9488',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '16px'
                }}
                onClick={()=>handlenext(activeSection)}
              >
                Next: Clinical Info <ArrowRight size={20} />
              </button>
            </div>
          )}

          {activeSection === 'clinical' && (
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#0d9488',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '2px solid #0d9488'
              }}>Patient Record / Consultation Form</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                {[
                  { label: 'Chief Complaint *', type: 'select',name:"complaint",id:"complaint", options: [' ', 'Fever', 'Headache', 'Cough', 'Abdominal Pain', 'Chest Pain', 'Dizziness', 'Others (Specify below)'], hasTextarea: true },
                  { label: 'History of Present Illness', type: 'textarea',name:"historypresent",id:"historypresent", placeholder: 'When did symptoms start? Duration? Progression?', rows: 3 },
                  { label: 'PMHx (Past Medical History)', type: 'select',name:"historypast",id:"historypast", options: [' ', 'Diabetes', 'Hypertension', 'Asthma', 'HIV/AIDS', 'Tuberculosis', 'Heart Disease', 'None', 'Others (Specify below)'], hasTextarea: true },
                  { label: 'Socio-Economic History', type: 'textarea',name:"social",id:"social", placeholder: 'Occupation, lifestyle, living conditions...', rows: 2 }
                ].map((field, idx) => (
                  <div key={idx}>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                      {field.label}
                    </label>
                    {field.type === 'select' && (
                      <select 
                      onChange={handleselectone}
                      name={field.name}
                      id={field.id}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        marginBottom: field.hasTextarea ? '8px' : 0,
                        boxSizing: 'border-box'
                      }}>
                        {field.options.map((opt, i) => <option key={i}>{opt}</option>)}
                      </select>
                    )}
                    {(field.type === 'textarea' || field.hasTextarea) && (
                      <textarea 
                      onChange={handleinputone}
                       name={field.name}
                      id={field.id}
                        placeholder={field.placeholder || 'Additional details...'}
                        rows={field.rows || 2}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '16px',
                          resize: 'vertical',
                          boxSizing: 'border-box'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <h4 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#0d9488',
                marginBottom: '16px',
                paddingTop: '16px',
                borderTop: '1px solid #e5e7eb'
              }}>Physical Examination</h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <button 
                    onClick={() => setShowVitals(!showVitals)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#0d9488',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px'
                    }}
                  >
                    <Activity size={20} /> Enter Vitals
                  </button>
                  {showVitals && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '12px',
                      padding: '16px',
                      backgroundColor: '#f0fdfa',
                      borderRadius: '8px'
                    }}>
                    {['BP: 120/80', 'Temp: 37.5°C', 'Pulse: 72 bpm', 'RR: 18/min', 'SpO2: 98%', 'Weight: 70kg'].map((vital, i) => {
  const [label, value] = vital.split(':');
  
  return (
    <div key={i} style={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
      <label style={{ marginBottom: '4px', fontWeight: '500', color: '#374151' }}>
        {label.trim()}
      </label>
      <input 
        type="text" 
        name={label.trim()}
        id={label.trim()}
        onChange={handlevitals}
        placeholder={value ? value.trim() : ''}
        style={{
          padding: '8px',
          border: '1px solid #d1d5db',
          borderRadius: '6px'
        }}
      />
    </div>
  );
})}

                    </div>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                    General Examination
                  </label>
                  <textarea 
                  onChange={handlegeneral}
                  name="general"
                  id="general"
                    placeholder="General appearance, consciousness..."
                    rows={2}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                    Impression / Diagnosis *
                  </label>
                  <select
                  onChange={handlediagnosis}
                  name="diagnosis"
                  id="diagnosis"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    marginBottom: '8px',
                    boxSizing: 'border-box'
                  }}>
                    {[' ', 'Malaria', 'URTI', 'Gastroenteritis', 'UTI', 'Pneumonia', 'Hypertension', 'Diabetes', 'Others (Specify below)'].map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                  <textarea 
                  onChange={handlediagnosisd}
                    placeholder="Diagnosis details..."
                    name="diagnosisd"
                    id="diagnosisd"
                    rows={2}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <button 
                    onClick={() => setShowInvestigation(!showInvestigation)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#0d9488',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px'
                    }}
                  >
                    <Microscope size={20} /> Select Investigations
                  </button>
                  {showInvestigation && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '12px',
                      padding: '16px',
                      backgroundColor: '#eff6ff',
                      borderRadius: '8px'
                    }}>
                      {['MRDT', 'Stool', 'PDT', 'HIV Test', 'Urinalysis', 'Blood Tests', 'X-Ray', 'Ultrasound','Others'].map(inv => (
                        <label key={inv} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          backgroundColor: 'white',
                          padding: '8px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}>
                          <input onChange={handleinvestigate} name={inv} id={inv} type="checkbox" />
                          <span>{inv}</span>
                        </label>
                      ))}
                    </div>
                  )}
                   {checkb&&(
                         <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#166534', marginBottom: '8px' }}>
                            Select Blood Test Type
                          </label>
                          <select
                          name="bloodtest"
                          id="bloodtest"
                            onChange={handleblood}
                           style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #86efac',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value=" ">-- Select Blood Test --</option>
                            <option value="haemogram/complete blood count">Haemogram / Complete Blood Count</option>
                            <option value="blood glucose">Blood Glucose</option>
                            <option value="liver function tests">Liver Function Tests</option>
                            <option value="renal function tests">Renal Function Tests</option>
                            <option value="lipid profile">Lipid Profile</option>
                          </select>
                        </div>
                    )}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                    Treatment / Prescription
                  </label>
                  <textarea 
                  onChange={handletreatment}
                    placeholder="Medications and instructions..."
                    name="treatment"
                    id="treatment"
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                    <label  style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          backgroundColor: 'white',
                          padding: '8px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}>
                          <input onChange={handlefollow} name="follow" id="follow" type="checkbox" />
                          <span style={{color:"black"}}><b>Follow up</b></span>
                        </label>
              </div>

              <button 
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#0d9488',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '16px'
                }}
                onClick={()=>handlenext(activeSection)}
              >
                Next: Billing <ArrowRight size={20} />
              </button>
            </div>
          )}

          {activeSection === 'billing' && (
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#0d9488',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '2px solid #0d9488'
              }}>Billing Section</h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Bill Status *</label>
                  <select 
                  name="payment"
                  id="payment"
                  onChange={handlepayment}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}>
                    <option value=' '></option>
                    <option value='Paid'>Paid</option>
                    <option value='Not Paid'>Not Paid</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Amount (KES) *</label>
                  <input 
                  onChange={handlepayment}
                  name="amount"
                  id="amount"
                    type="number" 
                    placeholder="0.00"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Payment Method</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                  {['M-PESA', 'Cash', 'Card', 'Insurance'].map(method => (
                    <label key={method} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}>
                      <input onChange={handlepayment} name="method" id="method" value={method} type="radio" />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Transaction Reference</label>
                <input 
                  type="text" 
                  onChange={handlepayment}
                  name="code"
                  id="code"
                  placeholder="e.g., M-PESA Code"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button 
              onClick={()=>handlenext(activeSection)}
              style={{
                padding: '12px 24px',
                backgroundColor: '#0d9488',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px'
              }}>
                <Save size={20} /> Submit 
              </button>
            </div>
          )}
            {activeSection === 'Today patients' && (
<div
  style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    width: '700px',         
    overflowX: 'auto',       
    overflowY: 'auto',    
    whiteSpace: 'nowrap',   
    display: 'block'       
  }}
>
              <table style={styles.tablestyle}>
                <thead>
                  <tr>
                    <th style={styles.datastyle}>Name</th>
                      <th style={styles.datastyle}>Patient number</th>
                      <th style={styles.datastyle}>Residence</th>
                      <th style={styles.datastyle}>Phone</th>
                      <th style={styles.datastyle}>Date of Birth</th>
                      <th style={styles.datastyle}>Gender</th>
                      <th style={styles.datastyle}>Next of Kin </th>
                      <th style={styles.datastyle}>Next of kin phone  </th>
                      <th style={styles.datastyle}>Relationship</th>
                      <th style={styles.datastyle}>Blood group</th>
                      <th style={styles.datastyle}>Patient type</th>
                       <th style={styles.datastyle}>Selected service</th>
                        <th style={styles.datastyle}>Method</th>
                        <th style={styles.datastyle}>Complaint</th>
                        <th style={styles.datastyle}>Complaint details</th>
                        <th style={styles.datastyle}>Past history</th>
                        <th style={styles.datastyle}>Past history details</th>
                         <th style={styles.datastyle}>Present history</th>
                          <th style={styles.datastyle}>Socio-economic</th>
                          <th style={styles.datastyle}>Vitals</th>
                          <th style={styles.datastyle}>Diagnosis</th>
                          <th style={styles.datastyle}>Diagnosis details</th>
                          <th style={styles.datastyle}>Investigations</th>
                          <th style={styles.datastyle}>Treatment</th>
                          <th style={styles.datastyle}>Payment status</th>
                          <th style={styles.datastyle}>Amount</th>
                          <th style={styles.datastyle}>Method of payment</th>
                          <th style={styles.datastyle}>Tansaction code</th>
                          <th style={styles.datastyle}>Medical card</th>
                          <th style={styles.datastyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                {todaypatientsnumber.map((data,key)=>(
                   <tr key={key}>
                      <td style={styles.datastyle}>{data.name}</td>
                      <td style={styles.datastyle}>{data.patientnumber}</td>
                      <td style={styles.datastyle}>{data.residence}</td>
                      <td style={styles.datastyle}>{data.phone}</td>
                      <td style={styles.datastyle}>{data.dateofbirth}</td>
                      <td style={styles.datastyle}>{data.gender}</td>
                      <td style={styles.datastyle}>{data.namekin}</td>
                      <td style={styles.datastyle}>{data.phonekin}</td>
                      <td style={styles.datastyle}>{data.relationshiptopatient}</td>
                      <td style={styles.datastyle}>{data.bloodgroup}</td>
                      <td style={styles.datastyle}>{data.patienttype}</td>
                      <td style={styles.datastyle}>{data.selectedservice}</td>
                      <td style={styles.datastyle}>{data.servicetype}</td>
                      <td style={styles.datastyle}>{data.complaint}</td>
                      <td style={styles.datastyle}>{data.complaintdetails}</td>
                      <td style={styles.datastyle}>{data.pasthistory}</td>
                      <td style={styles.datastyle}>{data.pasthistorydetails}</td>
                      <td style={styles.datastyle}>{data.presenthistory}</td>
                      <td style={styles.datastyle}>{data.socioeconomic}</td>
                      <td style={styles.datastyle}>{Object.keys(JSON.parse(data.vitals)).map((content,k)=>(
                        <div key={k}>
                          <li style={{listStylePosition:'inside'}}>{content} {JSON.parse(data.vitals)[content]}</li>
                          </div>
                      ))}</td>
                      <td style={styles.datastyle}>{data.diagnosis}</td>
                      <td style={styles.datastyle}>{data.diagnosisdetails}</td>
                      <td style={styles.datastyle}>{Object.keys(JSON.parse(data.investigations)).map((content,k)=>(
                        <div key={k}>
                          <li style={{listStylePosition:'inside'}}>{content}</li>
                          </div>
                      ))}</td>
                      <td style={styles.datastyle}>{data.treatment}</td>
                      <td style={styles.datastyle}>{data.paymentstatus}</td>
                      <td style={styles.datastyle}>{data.amount}</td>
                      <td style={styles.datastyle}>{data.method}</td>
                      <td style={styles.datastyle}>{data.code}</td>
                       <td style={styles.datastyle}>
                          {[
                       { icon: CreditCard, label: 'Medical Card', color: 'teal', action: () => {setShowMedicalCard(true);setCarddata(data)} },
                           ].map((btn, idx) => {
                    const Icon = btn.icon;
                    return (
                      <button 
                        key={idx}
                        onClick={btn.action}
                        style={{
                          padding: '12px 24px',
                          backgroundColor: btn.color,
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '16px',
                          fontWeight: '500'
                        }}
                      >
                        <Icon size={20} /> {btn.label}
                      </button>
                    );
                  })}
                      </td>
                   </tr>
                ))}
                </tbody>
                </table>
            </div>
          )}
            {activeSection === 'Follow ups' && (
<div
  style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    width: '700px',         
    overflowX: 'auto',       
    overflowY: 'auto',    
    whiteSpace: 'nowrap',   
    display: 'block'       
  }}
>
              <table style={styles.tablestyle}>
                <thead>
                  <tr>
                    <th style={styles.datastyle}>Name</th>
                      <th style={styles.datastyle}>Patient number</th>
                      <th style={styles.datastyle}>Residence</th>
                      <th style={styles.datastyle}>Phone</th>
                      <th style={styles.datastyle}>Date of Birth</th>
                      <th style={styles.datastyle}>Gender</th>
                      <th style={styles.datastyle}>Next of Kin </th>
                      <th style={styles.datastyle}>Next of kin phone  </th>
                      <th style={styles.datastyle}>Relationship</th>
                      <th style={styles.datastyle}>Blood group</th>
                      <th style={styles.datastyle}>Patient type</th>
                       <th style={styles.datastyle}>Selected service</th>
                        <th style={styles.datastyle}>Method</th>
                        <th style={styles.datastyle}>Complaint</th>
                        <th style={styles.datastyle}>Complaint details</th>
                        <th style={styles.datastyle}>Past history</th>
                        <th style={styles.datastyle}>Past history details</th>
                         <th style={styles.datastyle}>Present history</th>
                          <th style={styles.datastyle}>Socio-economic</th>
                          <th style={styles.datastyle}>Vitals</th>
                          <th style={styles.datastyle}>Diagnosis</th>
                          <th style={styles.datastyle}>Diagnosis details</th>
                          <th style={styles.datastyle}>Investigations</th>
                          <th style={styles.datastyle}>Treatment</th>
                          <th style={styles.datastyle}>Payment status</th>
                          <th style={styles.datastyle}>Amount</th>
                          <th style={styles.datastyle}>Method of payment</th>
                          <th style={styles.datastyle}>Tansaction code</th>
                          <th style={styles.datastyle}>Medical card</th>
                          <th style={styles.datastyle}>Follow up</th>
                           <th style={styles.datastyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                {followlist.map((data,key)=>(
                   <tr key={key}>
                      <td style={styles.datastyle}>{data.name}</td>
                      <td style={styles.datastyle}>{data.patientnumber}</td>
                      <td style={styles.datastyle}>{data.residence}</td>
                      <td style={styles.datastyle}>{data.phone}</td>
                      <td style={styles.datastyle}>{data.dateofbirth}</td>
                      <td style={styles.datastyle}>{data.gender}</td>
                      <td style={styles.datastyle}>{data.namekin}</td>
                      <td style={styles.datastyle}>{data.phonekin}</td>
                      <td style={styles.datastyle}>{data.relationshiptopatient}</td>
                      <td style={styles.datastyle}>{data.bloodgroup}</td>
                      <td style={styles.datastyle}>{data.patienttype}</td>
                      <td style={styles.datastyle}>{data.selectedservice}</td>
                      <td style={styles.datastyle}>{data.servicetype}</td>
                      <td style={styles.datastyle}>{data.complaint}</td>
                      <td style={styles.datastyle}>{data.complaintdetails}</td>
                      <td style={styles.datastyle}>{data.pasthistory}</td>
                      <td style={styles.datastyle}>{data.pasthistorydetails}</td>
                      <td style={styles.datastyle}>{data.presenthistory}</td>
                      <td style={styles.datastyle}>{data.socioeconomic}</td>
                      <td style={styles.datastyle}>{Object.keys(JSON.parse(data.vitals)).map((content,k)=>(
                        <div key={k}>
                          <li style={{listStylePosition:'inside'}}>{content} {JSON.parse(data.vitals)[content]}</li>
                          </div>
                      ))}</td>
                      <td style={styles.datastyle}>{data.diagnosis}</td>
                      <td style={styles.datastyle}>{data.diagnosisdetails}</td>
                      <td style={styles.datastyle}>{Object.keys(JSON.parse(data.investigations)).map((content,k)=>(
                        <div key={k}>
                          <li style={{listStylePosition:'inside'}}>{content}</li>
                          </div>
                      ))}</td>
                      <td style={styles.datastyle}>{data.treatment}</td>
                      <td style={styles.datastyle}>{data.paymentstatus}</td>
                      <td style={styles.datastyle}>{data.amount}</td>
                      <td style={styles.datastyle}>{data.method}</td>
                      <td style={styles.datastyle}>{data.code}</td>
                       <td style={styles.datastyle}>
                          {[
                       { icon: CreditCard, label: 'Medical Card', color: 'teal', action: () => {setShowMedicalCard(true);setCarddata(data)} },
                           ].map((btn, idx) => {
                    const Icon = btn.icon;
                    return (
                      <button 
                        key={idx}
                        onClick={btn.action}
                        style={{
                          padding: '12px 24px',
                          backgroundColor: btn.color,
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '16px',
                          fontWeight: '500'
                        }}
                      >
                        <Icon size={20} /> {btn.label}
                      </button>
                    );
                  })}
                      </td>
                       <td style={styles.datastyle}>{data.followup}</td>
                           <td style={styles.datastyle}>
                          {[
                       { icon: Zap, label: 'Attend to patient', color: 'teal', action: () => {
                          selecteddetails["patientnumber"]=data.patientnumber;
           selecteddetails["name"]=data.name;
           selecteddetails["residence"]=data.residence;
           selecteddetails["phone"]=data.phone;
           selecteddetails["date"]=data.dateofbirth;
           selecteddetails["kinname"]=data.namekin;
           selecteddetails["kincontact"]=data.phonekin;
           selecteddetailsone["gender"]=data.gender;
           selecteddetailsone["relationship"]=data.relationshiptopatient;
           selecteddetailsone["blood"]=data.bloodgroup;
                        setInput(selecteddetails);setSelect(selecteddetailsone);setSearchbutton(true);setActiveSection("service");} },
                           ].map((btn, idx) => {
                    const Icon = btn.icon;
                    return (
                      <button 
                        key={idx}
                        onClick={btn.action}
                        style={{
                          padding: '12px 24px',
                          backgroundColor: btn.color,
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '16px',
                          fontWeight: '500'
                        }}
                      >
                        <Icon size={20} /> {btn.label}
                      </button>
                    );
                  })}
                      </td>
                   </tr>
                ))}
                </tbody>
                </table>
            </div>
          )}
             {activeSection === 'Pending payments' && (
<div
  style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    width: '700px',         
    overflowX: 'auto',       
    overflowY: 'auto',    
    whiteSpace: 'nowrap',   
    display: 'block'       
  }}
>
              <table style={styles.tablestyle}>
                <thead>
                  <tr>
                    <th style={styles.datastyle}>Name</th>
                      <th style={styles.datastyle}>Patient number</th>
                      <th style={styles.datastyle}>Residence</th>
                      <th style={styles.datastyle}>Phone</th>
                      <th style={styles.datastyle}>Date of Birth</th>
                      <th style={styles.datastyle}>Gender</th>
                      <th style={styles.datastyle}>Next of Kin </th>
                      <th style={styles.datastyle}>Next of kin phone  </th>
                      <th style={styles.datastyle}>Relationship</th>
                      <th style={styles.datastyle}>Blood group</th>
                      <th style={styles.datastyle}>Patient type</th>
                       <th style={styles.datastyle}>Selected service</th>
                        <th style={styles.datastyle}>Method</th>
                        <th style={styles.datastyle}>Complaint</th>
                        <th style={styles.datastyle}>Complaint details</th>
                        <th style={styles.datastyle}>Past history</th>
                        <th style={styles.datastyle}>Past history details</th>
                         <th style={styles.datastyle}>Present history</th>
                          <th style={styles.datastyle}>Socio-economic</th>
                          <th style={styles.datastyle}>Vitals</th>
                          <th style={styles.datastyle}>Diagnosis</th>
                          <th style={styles.datastyle}>Diagnosis details</th>
                          <th style={styles.datastyle}>Investigations</th>
                          <th style={styles.datastyle}>Treatment</th>
                          <th style={styles.datastyle}>Payment status</th>
                          <th style={styles.datastyle}>Amount</th>
                          <th style={styles.datastyle}>Method of payment</th>
                          <th style={styles.datastyle}>Tansaction code</th>
                           <th style={styles.datastyle}>Medical card</th>
                  </tr>
                </thead>
                <tbody>
                {pendingpatients.map((data,key)=>(
                   <tr key={key}>
                      <td style={styles.datastyle}>{data.name}</td>
                      <td style={styles.datastyle}>{data.patientnumber}</td>
                      <td style={styles.datastyle}>{data.residence}</td>
                      <td style={styles.datastyle}>{data.phone}</td>
                      <td style={styles.datastyle}>{data.dateofbirth}</td>
                      <td style={styles.datastyle}>{data.gender}</td>
                      <td style={styles.datastyle}>{data.namekin}</td>
                      <td style={styles.datastyle}>{data.phonekin}</td>
                      <td style={styles.datastyle}>{data.relationshiptopatient}</td>
                      <td style={styles.datastyle}>{data.bloodgroup}</td>
                      <td style={styles.datastyle}>{data.patienttype}</td>
                      <td style={styles.datastyle}>{data.selectedservice}</td>
                      <td style={styles.datastyle}>{data.servicetype}</td>
                      <td style={styles.datastyle}>{data.complaint}</td>
                      <td style={styles.datastyle}>{data.complaintdetails}</td>
                      <td style={styles.datastyle}>{data.pasthistory}</td>
                      <td style={styles.datastyle}>{data.pasthistorydetails}</td>
                      <td style={styles.datastyle}>{data.presenthistory}</td>
                      <td style={styles.datastyle}>{data.socioeconomic}</td>
                      <td style={styles.datastyle}>{Object.keys(JSON.parse(data.vitals)).map((content,k)=>(
                        <div key={k}>
                          <li style={{listStylePosition:'inside'}}>{content} {JSON.parse(data.vitals)[content]}</li>
                          </div>
                      ))}</td>
                      <td style={styles.datastyle}>{data.diagnosis}</td>
                      <td style={styles.datastyle}>{data.diagnosisdetails}</td>
                      <td style={styles.datastyle}>{Object.keys(JSON.parse(data.investigations)).map((content,k)=>(
                        <div key={k}>
                          <li style={{listStylePosition:'inside'}}>{content}</li>
                          </div>
                      ))}</td>
                      <td style={styles.datastyle}>{data.treatment}</td>
                      <td style={styles.datastyle}>{data.paymentstatus}</td>
                      <td style={styles.datastyle}>{data.amount}</td>
                      <td style={styles.datastyle}>{data.method}</td>
                      <td style={styles.datastyle}>{data.code}</td>
                      <td style={styles.datastyle}>
                          {[
                       { icon: CreditCard, label: 'Medical Card', color: 'teal', action: () => {setShowMedicalCard(true);setCarddata(data)} },
                           ].map((btn, idx) => {
                    const Icon = btn.icon;
                    return (
                      <button 
                        key={idx}
                        onClick={btn.action}
                        style={{
                          padding: '12px 24px',
                          backgroundColor: btn.color,
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '16px',
                          fontWeight: '500'
                        }}
                      >
                        <Icon size={20} /> {btn.label}
                      </button>
                    );
                  })}
                      </td>
                   </tr>
                ))}
                </tbody>
                </table>
            </div>
          )}
              {activeSection === 'Total patients' && (
<div
  style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    width: '700px',         
    overflowX: 'auto',       
    overflowY: 'auto',    
    whiteSpace: 'nowrap',   
    display: 'block'       
  }}
>
              <table style={styles.tablestyle}>
                <thead>
                  <tr>
                    <th style={styles.datastyle}>Name</th>
                      <th style={styles.datastyle}>Patient number</th>
                      <th style={styles.datastyle}>Residence</th>
                      <th style={styles.datastyle}>Phone</th>
                      <th style={styles.datastyle}>Date of Birth</th>
                      <th style={styles.datastyle}>Gender</th>
                      <th style={styles.datastyle}>Next of Kin </th>
                      <th style={styles.datastyle}>Next of kin phone  </th>
                      <th style={styles.datastyle}>Relationship</th>
                      <th style={styles.datastyle}>Blood group</th>
                      <th style={styles.datastyle}>Patient type</th>
                       <th style={styles.datastyle}>Selected service</th>
                        <th style={styles.datastyle}>Method</th>
                        <th style={styles.datastyle}>Complaint</th>
                        <th style={styles.datastyle}>Complaint details</th>
                        <th style={styles.datastyle}>Past history</th>
                        <th style={styles.datastyle}>Past history details</th>
                         <th style={styles.datastyle}>Present history</th>
                          <th style={styles.datastyle}>Socio-economic</th>
                          <th style={styles.datastyle}>Vitals</th>
                          <th style={styles.datastyle}>Diagnosis</th>
                          <th style={styles.datastyle}>Diagnosis details</th>
                          <th style={styles.datastyle}>Investigations</th>
                          <th style={styles.datastyle}>Treatment</th>
                          <th style={styles.datastyle}>Payment status</th>
                          <th style={styles.datastyle}>Amount</th>
                          <th style={styles.datastyle}>Method of payment</th>
                          <th style={styles.datastyle}>Tansaction code</th>
                          <th style={styles.datastyle}>Medical card</th>
                  </tr>
                </thead>
                <tbody>
                {totalpatients.map((data,key)=>(
                   <tr key={key}>
                      <td style={styles.datastyle}>{data.name}</td>
                      <td style={styles.datastyle}>{data.patientnumber}</td>
                      <td style={styles.datastyle}>{data.residence}</td>
                      <td style={styles.datastyle}>{data.phone}</td>
                      <td style={styles.datastyle}>{data.dateofbirth}</td>
                      <td style={styles.datastyle}>{data.gender}</td>
                      <td style={styles.datastyle}>{data.namekin}</td>
                      <td style={styles.datastyle}>{data.phonekin}</td>
                      <td style={styles.datastyle}>{data.relationshiptopatient}</td>
                      <td style={styles.datastyle}>{data.bloodgroup}</td>
                      <td style={styles.datastyle}>{data.patienttype}</td>
                      <td style={styles.datastyle}>{data.selectedservice}</td>
                      <td style={styles.datastyle}>{data.servicetype}</td>
                      <td style={styles.datastyle}>{data.complaint}</td>
                      <td style={styles.datastyle}>{data.complaintdetails}</td>
                      <td style={styles.datastyle}>{data.pasthistory}</td>
                      <td style={styles.datastyle}>{data.pasthistorydetails}</td>
                      <td style={styles.datastyle}>{data.presenthistory}</td>
                      <td style={styles.datastyle}>{data.socioeconomic}</td>
                      <td style={styles.datastyle}>{Object.keys(JSON.parse(data.vitals)).map((content,k)=>(
                        <div key={k}>
                          <li style={{listStylePosition:'inside'}}>{content} {JSON.parse(data.vitals)[content]}</li>
                          </div>
                      ))}</td>
                      <td style={styles.datastyle}>{data.diagnosis}</td>
                      <td style={styles.datastyle}>{data.diagnosisdetails}</td>
                      <td style={styles.datastyle}>{Object.keys(JSON.parse(data.investigations)).map((content,k)=>(
                        <div key={k}>
                          <li style={{listStylePosition:'inside'}}>{content}</li>
                          </div>
                      ))}</td>
                      <td style={styles.datastyle}>{data.treatment}</td>
                      <td style={styles.datastyle}>{data.paymentstatus}</td>
                      <td style={styles.datastyle}>{data.amount}</td>
                      <td style={styles.datastyle}>{data.method}</td>
                      <td style={styles.datastyle}>{data.code}</td>
                       <td style={styles.datastyle}>
                          {[
                       { icon: CreditCard, label: 'Medical Card', color: 'teal', action: () => {setShowMedicalCard(true);setCarddata(data)} },
                           ].map((btn, idx) => {
                    const Icon = btn.icon;
                    return (
                      <button 
                        key={idx}
                        onClick={btn.action}
                        style={{
                          padding: '12px 24px',
                          backgroundColor: btn.color,
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '16px',
                          fontWeight: '500'
                        }}
                      >
                        <Icon size={20} /> {btn.label}
                      </button>
                    );
                  })}
                      </td>
                   </tr>
                ))}
                </tbody>
                </table>
            </div>
          )}
              {activeSection === 'Charts' && (
<div
  style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    width: '700px',         
    overflowX: 'auto',       
    overflowY: 'auto',    
    whiteSpace: 'nowrap',   
    display: 'block'       
  }}
>
  <p style={{textAlign:'center'}}><b>Revenue distribution in a year</b></p>
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={datatwo}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="teal" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <br/><br/><br/>
    <p style={{textAlign:'center'}}><b>Patients distribution in a year</b></p>
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="patients" fill="teal" />
        </BarChart>
      </ResponsiveContainer>
    </div>

            </div>
          )}
          {activeSection === 'reports' && (
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#0d9488',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '2px solid #0d9488'
              }}>Reports Module</h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Report Type</label>
                  <select style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}>
                    <option>Patient Medical History</option>
                    <option>Payment Balance Report</option>
                    <option>Treatment Follow-up Status</option>
                    <option>By Doctor</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Date Range</label>
                  <select style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}>
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Custom</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                {[
                  { label: 'Generate PDF',action: () => {}, color: 'teal' },
                  { label: 'Export Excel',action: () => {}, color: 'teal' },
                  { label: 'View Chart',action: () => { setActiveSection("Charts")}, color: 'teal' }
                ].map((btn, idx) => (
                  <button key={idx}
                  onClick={btn.action}
                   style={{
                    padding: '12px 24px',
                    backgroundColor: btn.color,
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}>
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          </div>
          )} 
        </div>
      </main>

         {showMedicalCard && (
        <MedicalCard
          name={carddata.name}
          patientnumber={carddata.patientnumber}
          dateofbirth={carddata.dateofbirth}
          phone={carddata.phone}
          residence={carddata.residence}
          registered={carddata.dateofregistration}
        />
      )}
    </div>
  );
};

export default ElmaHealthcare;