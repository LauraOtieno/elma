import React, { useState } from 'react';
import { Stethoscope, Mail, Lock, User, UserPlus, LogIn, Eye, EyeOff, Phone } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ElmaLogin = () => {
   const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [userType, setUserType] = useState('user'); // 'user' or 'admin'
  const [showPassword, setShowPassword] = useState(false);
 const [details, setDetails] = useState({});
    const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };
  const handleLogin = async(e) => {
    e.preventDefault();
        try {
      const res = await fetch('http://localhost:2000/users/signin', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      });

      const data = await res.json();
      // setLoading(false);

      if (!res.ok) {
        throw new Error(data.Message || 'Invalid credentials or server error');
      }
if(data.Message==2)
{
  // setLoading(false);
      toast.success('You have not signed up!, Kindly sign up', {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'blue', color: 'white' },
      });
      setIsSignup(true);
    }
    if(data.Message==1)
    {
       localStorage.setItem("email",data.Email);
      localStorage.setItem("name",data.Name);
      localStorage.setItem("phone",data.Phone);
      localStorage.setItem("role",data.Role);
      if(data.Role=="doctor")
      {
         toast.success('You have successfully signed in Dr.'+data.Name, {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'teal', color: 'white' },
      });
    }
    else
    {
          toast.success('You have successfully signed in '+data.Name, {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'teal', color: 'white' },
      });
    }
      setTimeout(() => {
  navigate('/');
}, 1000);
    }
       if(data.Message==0)
    {
            toast.success('Failed to sign in. Kindly try again!!!', {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'teal', color: 'white' },
      });
    }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'red', color: 'white' },
      });
    }

  };

  const handleSignup = async(e) => {
    e.preventDefault();
      try {
        details["usertype"]=userType;
        if(details["usertype"]==null||details["usertype"]==""||details["usertype"]==" "||details["usertype"]=="user")
        {
             toast.error("You have not selected your role!!!", {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'red', color: 'white' },
      });
      return;
        }
      const res = await fetch('http://localhost:2000/users/signup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Invalid credentials or server error');
      }
if(data.Message==1)
{
      toast.success('You have not signed up!.Kindly try again', {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'teal', color: 'white' },
      });
    }
    if(data.Message==2)
{
      toast.success('You have initially signed up. Kindly login', {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'teal', color: 'white' },
      });
      setIsSignup(false);
    }
    if(data.Message==0)
    {
      if(details["usertype"]=="doctor")
      {
            toast.success('You have successfully signed up Dr.'+data.Name, {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'teal', color: 'white' },
      });
    }
    else
    {
         toast.success('You have successfully signed up '+data.Name, {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'teal', color: 'white' },
      });
    }
      setIsSignup(false);
    }
    } catch (error) {
      alert(error);
      console.error(error.message);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        style: { backgroundColor: 'red', color: 'white' },
      });
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      width:'120%'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      maxWidth: '1100px',
      width: '100%',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    },
    leftSide: {
      background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
      color: 'white',
      padding: '48px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    logoSection: {
      marginBottom: '48px'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px'
    },
    logoCircle: {
      width: '80px',
      height: '80px',
      background: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
    },
    logoImage: {
      width: '60px',
      height: '60px',
      color: '#0d9488'
    },
    logoText: {
      fontSize: '25px',
      fontWeight: 'bold',
      margin: 0
    },
    logoSubtext: {
      fontSize: '14px',
      opacity: 0.9,
      margin: 0
    },
    tagline: {
      fontSize: '18px',
      fontWeight: '500',
      marginTop: '8px'
    },
    featuresSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    featureIcon: {
      width: '48px',
      height: '48px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    featureText: {
      margin: 0
    },
    featureTitle: {
      fontWeight: '600',
      fontSize: '16px',
      margin: 0
    },
    featureDesc: {
      fontSize: '14px',
      opacity: 0.9,
      margin: 0
    },
    rightSide: {
      padding: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    formBox: {
      width: '100%',
      maxWidth: '400px'
    },
    formTitle: {
      textAlign:'center',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '8px'
    },
    formSubtitle: {
      color: '#6b7280',
      marginBottom: '32px',
      textAlign:'center'
    },
    userTypeToggle: {
      display: 'flex',
      gap: '12px',
      marginBottom: '24px'
    },
    toggleBtn: {
      flex: 1,
      padding: '12px 16px',
      border: 'none',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    toggleBtnActive: {
      backgroundColor: '#0d9488',
      color: 'white'
    },
    toggleBtnInactive: {
      backgroundColor: '#f3f4f6',
      color: '#6b7280'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    inputContainer: {
      position: 'relative'
    },
    inputIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af'
    },
    input: {
      width: '100%',
      padding: '12px 12px 12px 44px',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '16px',
      transition: 'all 0.3s',
      outline: 'none',
      boxSizing: 'border-box'
    },
    inputSimple: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '16px',
      transition: 'all 0.3s',
      outline: 'none',
      boxSizing: 'border-box'
    },
    eyeIcon: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: '#9ca3af'
    },
    formOptions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    rememberLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      color: '#6b7280',
      fontSize: '14px'
    },
    forgotLink: {
      color: '#0d9488',
      textDecoration: 'none',
      fontSize: '14px'
    },
    submitBtn: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #0d9488, #0f766e)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    demoBox: {
      marginTop: '24px',
      padding: '16px',
      backgroundColor: '#f9fafb',
      borderRadius: '10px',
      border: '1px solid #e5e7eb'
    },
    demoText: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '4px'
    },
    demoStrong: {
      color: '#111827',
      fontWeight: '600'
    },
    switchText: {
      marginTop: '24px',
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '14px'
    },
    switchLink: {
      color: '#0d9488',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      marginLeft: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Left Side - Branding */}
        <div style={styles.leftSide}>
          <div style={styles.logoSection}>
            <div style={styles.logoContainer}>
              <div style={styles.logoCircle}>
                 <img src='/elma.jpg' width="100" height="100"/>
              </div>
              <div>
                <h1 style={styles.logoText}>ELMA HEALTHCARE</h1>
                <p style={styles.logoSubtext}>Mazeras - City side, Rabai</p>
              </div>
            </div>
            <p style={{ fontSize: '14px', opacity: 0.75, margin: 0 }}>Tel: 0768433926</p>
            <p style={styles.tagline}>Affordable health to all people</p>
            <ToastContainer/>
          </div>

          <div style={styles.featuresSection}>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>
                <Stethoscope size={24} />
              </div>
              <div style={styles.featureText}>
                <h3 style={styles.featureTitle}>Quality Healthcare</h3>
                <p style={styles.featureDesc}>Expert medical care</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div style={styles.rightSide}>
          <div style={styles.formBox}>
            <h2 style={styles.formTitle}>
              {isSignup ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p style={styles.formSubtitle}>
              {isSignup ? 'Sign up to access patient services' : 'Please login to continue'}
            </p>

            {/* User Type Toggle */}
            <div style={styles.userTypeToggle}>
              <button
                onClick={() => setUserType('receptionist')}
                style={{
                  ...styles.toggleBtn,
                  ...(userType === 'receptionist' ? styles.toggleBtnActive : styles.toggleBtnInactive)
                }}
              >
                <User size={16} />
                Receptionist
              </button>
              <button
                onClick={() => setUserType('doctor')}
                style={{
                  ...styles.toggleBtn,
                  ...(userType === 'doctor' ? styles.toggleBtnActive : styles.toggleBtnInactive)
                }}
              >
                <Stethoscope size={16} />
                Doctor
              </button>
            </div>

            {isSignup ? (
              /* Signup Form */
              <form onSubmit={handleSignup} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Full Name</label>
                  <div style={styles.inputContainer}>
                    <User style={styles.inputIcon} size={20} />
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email</label>
                  <div style={styles.inputContainer}>
                    <Mail style={styles.inputIcon} size={20} />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone Number</label>
                  <div style={styles.inputContainer}>
                    <Phone style={styles.inputIcon} size={20} />
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder="+254..."
                    />
                  </div>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Password</label>
                  <div style={styles.inputContainer}>
                    <Lock style={styles.inputIcon} size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder="Create a password"
                    />
                    <div style={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                  </div>
                </div>

                <button type="submit" style={styles.submitBtn}>
                  <UserPlus size={20} />
                  Sign Up
                </button>
              </form>
            ) : (
              /* Login Form */
              <form onSubmit={handleLogin} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email</label>
                  <div style={styles.inputContainer}>
                    <User style={styles.inputIcon} size={20} />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      onChange={handleChange}
                      style={styles.input}
                      placeholder={userType === 'admin' ? 'admin' : 'user'}
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Password</label>
                  <div style={styles.inputContainer}>
                    <Lock style={styles.inputIcon} size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder="1234"
                    />
                    <div style={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                  </div>
                </div>

                <div style={styles.formOptions}>
                  <label style={styles.rememberLabel}>
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" style={styles.forgotLink}>
                    Forgot password?
                  </a>
                </div>

                <button type="submit" style={styles.submitBtn}>
                  <LogIn size={20} />
                  Login
                </button>
              </form>
            )}

            <div style={styles.switchText}>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <span
                onClick={() => setIsSignup(!isSignup)}
                style={styles.switchLink}
              >
                {isSignup ? 'Login' : 'Sign Up'}
              </span>
            </div>

            {!isSignup && (
              <div style={styles.demoBox}>
                <p style={{ ...styles.demoText, marginBottom: '8px' }}>
                  <span style={styles.demoStrong}>Demo Credentials:</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElmaLogin;