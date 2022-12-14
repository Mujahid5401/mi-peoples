
import Signup from './components/Signup';
import Login from './components/Login';
import PaymentSetup from './components/PaymentSetup';
import Activated from './components/Activated';
import ChoosePlan from './components/ChoosePlan';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import PropertyBar from './components/PropertyBar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Statistics from './components/Statistics';
import DashTable from './components/DashTable'
import ReferenceVerification from './pages/ReferenceVerification';
import RefVerify from './components/RefVerify';
import DocVerify from './components/DocVerify';
import CustomApplication from './pages/CustomApplication';
import FormBuilder from './pages/FormBuilder';
import BuilderMenu from './components/BuilderMenu';



function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/paymentsetup" element={<PaymentSetup />}></Route>
      <Route path="/activated" element={<Activated />}></Route>
      <Route path="/chooseplan" element={<ChoosePlan />}></Route>
      <Route path="/sidebar" element={<Sidebar />}></Route>
      <Route path="/rightbar" element={<Rightbar />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/statistics" element={<Statistics />}></Route>
      <Route path="/dashtable" element={<DashTable />}></Route>
      <Route path="/rfverification" element={<ReferenceVerification />}></Route>
      <Route path="/refverify" element={<RefVerify />}></Route>
      <Route path="/docverify" element={<DocVerify />}></Route>
      <Route path="/customapplication" element={<CustomApplication />}></Route>
      <Route path="/formbuilder" element={<FormBuilder />}></Route>
      <Route path="/buildermenu" element={<BuilderMenu />}></Route>
      <Route path="/propertybar" element={<PropertyBar />}></Route>

    </Routes>

    </>
  );
}

export default App;
 
