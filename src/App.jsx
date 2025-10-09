import React, { useState } from 'react';
import { Stethoscope, Home, ClipboardList, User, FileText, DollarSign, BarChart3, ArrowRight, Save, Microscope, Activity, LogOut, UserPlus, Users, Printer, CreditCard } from 'lucide-react';

const ElmaHealthcare = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [patientType, setPatientType] = useState('');
  const [isExistingPatient, setIsExistingPatient] = useState(false);
  const [showFamilyPlanning, setShowFamilyPlanning] = useState(false);
  const [showServiceMethods, setShowServiceMethods] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showVitals, setShowVitals] = useState(false);
  const [showInvestigation, setShowInvestigation] = useState(false);
  const [showMedicalCard, setShowMedicalCard] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Moses');

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

  const MedicalCard = () => (
    <div style={{
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
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        maxWidth: '28rem',
        width: '100%'
      }}>
        <div style={{
          background: 'linear-gradient(to right, #0d9488, #0f766e)',
          color: 'white',
          padding: '24px',
          borderRadius: '12px 12px 0 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Stethoscope size={32} />
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>ELMA HEALTHCARE</h2>
              <p style={{ fontSize: '12px', margin: 0 }}>Mazeras - City side, Rabai</p>
            </div>
          </div>
          <p style={{ fontSize: '12px', marginTop: '8px', margin: 0 }}>Tel: 0768433926</p>
        </div>
        
        <div style={{ padding: '24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div style={{
              width: '96px',
              height: '96px',
              backgroundColor: '#e5e7eb',
              borderRadius: '50%',
              margin: '0 auto 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <User size={40} style={{ color: '#9ca3af' }} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 4px 0' }}>John Doe</h3>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Patient ID: PAT001</p>
          </div>
          
          <div>
            {[
              { label: 'Date of Birth', value: '15/03/1990' },
              { label: 'Blood Group', value: 'O+' },
              { label: 'Phone', value: '+254712345678' },
              { label: 'Address', value: 'Mombasa, Kenya' },
              { label: 'Emergency Contact', value: 'Jane Doe (Spouse)' },
              { label: 'Allergies', value: 'Penicillin', isAlert: true },
              { label: 'Registered', value: '06/10/2024' }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: idx < 6 ? '1px solid #e5e7eb' : 'none',
                paddingBottom: '8px',
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                <span style={{ color: '#6b7280' }}>{item.label}:</span>
                <span style={{ fontWeight: '500', color: item.isAlert ? '#ef4444' : 'inherit' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{
          padding: '16px',
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          gap: '12px',
          borderRadius: '0 0 12px 12px'
        }}>
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
            <Stethoscope size={32} />
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>ELMA HEALTHCARE</h1>
              <p style={{ fontSize: '12px', opacity: 0.9, margin: 0 }}>Mazeras - City side, Rabai</p>
            </div>
          </div>
          <p style={{ fontSize: '12px', opacity: 0.75, marginTop: '8px', margin: 0 }}>Affordable health to all people</p>
          <p style={{ fontSize: '12px', opacity: 0.75, margin: 0 }}>Tel: 0768433926</p>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <MenuItem icon={Home} label="Dashboard" section="dashboard" />
          <MenuItem icon={ClipboardList} label="Service Type" section="service" />
          <MenuItem icon={User} label="Bio-Data" section="biodata" />
          <MenuItem icon={FileText} label="Clinical Info" section="clinical" />
          <MenuItem icon={DollarSign} label="Billing" section="billing" />
          <MenuItem icon={BarChart3} label="Reports" section="reports" />
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
              {activeSection === 'service' && 'Service Type Selection'}
              {activeSection === 'biodata' && 'Patient Registration'}
              {activeSection === 'clinical' && 'Clinical Information'}
              {activeSection === 'billing' && 'Billing Section'}
              {activeSection === 'reports' && 'Reports Module'}
            </h2>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Tel: 0768433926</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <select 
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            >
              <option>Dr. Moses</option>
              <option>Dr. Elijah</option>
            </select>
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
              {selectedDoctor === 'Dr. Moses' ? 'DM' : 'DE'}
            </div>
            <button style={{
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
          {activeSection === 'dashboard' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
                {[
                  { label: "Today's Patients", value: '24', color: '#0d9488' },
                  { label: 'Pending Payments', value: '5', color: '#f97316' },
                  { label: 'Follow-ups', value: '8', color: '#3b82f6' }
                ].map((stat, idx) => (
                  <div key={idx} style={{
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
                    { icon: UserPlus, label: 'New Patient', color: '#0d9488', action: () => { setIsExistingPatient(false); setActiveSection('service'); } },
                    { icon: Users, label: 'Existing Patient', color: '#3b82f6', action: () => { setIsExistingPatient(true); setActiveSection('service'); } },
                    { icon: CreditCard, label: 'Medical Card', color: '#a855f7', action: () => setShowMedicalCard(true) },
                    { icon: BarChart3, label: 'Reports', color: '#10b981', action: () => setActiveSection('reports') }
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
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Search Patient</label>
                  <input 
                    type="text" 
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
                  
                  <h4 style={{ fontWeight: 'bold', color: '#3b82f6', marginBottom: '12px' }}>Select Service Type</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Follow-up Visit', 'Treatment Continuation', 'Lab Results Review', 'Prescription Refill', 'Medical Certificate', 'General Check-up'].map(service => (
                      <label key={service} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}>
                        <input type="radio" name="existing-service" value={service} />
                        <span>{service}</span>
                      </label>
                    ))}
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
                      <option value="">-- Select Patient Type --</option>
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
                      
                      {showServiceMethods && selectedService === 'Vaccination' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#166534', marginBottom: '8px' }}>
                            Select Vaccine Type
                          </label>
                          <select style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #86efac',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option>-- Select Vaccine --</option>
                            <option>COVID-19</option>
                            <option>Hepatitis B</option>
                            <option>Tetanus</option>
                            <option>BCG</option>
                            <option>Polio</option>
                            <option>Measles</option>
                            <option>Yellow Fever</option>
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
                            <option>-- Select Surgery --</option>
                            <option>Minor Surgery</option>
                            <option>Major Surgery</option>
                            <option>Emergency Surgery</option>
                            <option>Caesarean Section</option>
                            <option>Appendectomy</option>
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
                            <option>-- Select Service --</option>
                            <option>Antenatal Care (ANC)</option>
                            <option>Delivery (Normal)</option>
                            <option>Delivery (C-Section)</option>
                            <option>Postnatal Care (PNC)</option>
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
                          <select style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #86efac',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option value="">-- Select Method --</option>
                            <option>Birth Control Pills</option>
                            <option>Injectable (Depo-Provera)</option>
                            <option>Implants (Jadelle)</option>
                            <option>IUD (Copper-T)</option>
                            <option>Condoms</option>
                            <option>Tubal Ligation</option>
                            <option>Vasectomy</option>
                            <option>Natural Planning</option>
                            <option>Emergency Contraception</option>
                          </select>
                        </div>
                      )}
                      
                      {showServiceMethods && selectedService === 'Circumcision' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#fed7aa',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#9a3412', marginBottom: '8px' }}>
                            Circumcision Type
                          </label>
                          <select style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #fdba74',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option>-- Select Type --</option>
                            <option>Medical Circumcision (Adult)</option>
                            <option>Medical Circumcision (Child)</option>
                            <option>Traditional Method</option>
                            <option>PrePex Method</option>
                          </select>
                        </div>
                      )}
                      
                      {showServiceMethods && selectedService === 'Dental' && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          backgroundColor: '#dbeafe',
                          borderRadius: '8px'
                        }}>
                          <label style={{ display: 'block', fontWeight: '500', color: '#1e40af', marginBottom: '8px' }}>
                            Dental Service
                          </label>
                          <select style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #93c5fd',
                            borderRadius: '8px',
                            boxSizing: 'border-box'
                          }}>
                            <option>-- Select Service --</option>
                            <option>Tooth Extraction</option>
                            <option>Dental Filling</option>
                            <option>Root Canal</option>
                            <option>Teeth Cleaning</option>
                            <option>Tooth Whitening</option>
                            <option>Dentures</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}

              <button 
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
                onClick={() => setActiveSection('biodata')}
              >
                Next: Bio-Data <ArrowRight size={20} />
              </button>
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
                  { label: 'Patient Number', type: 'text', value: 'PAT20241006001', readOnly: true },
                  { label: 'Full Name *', type: 'text', placeholder: 'Enter full name' },
                  { label: 'Residence *', type: 'text', placeholder: 'Enter address' },
                  { label: 'Phone Number *', type: 'tel', placeholder: '+254...' },
                  { label: 'Date of Birth', type: 'date' },
                  { label: 'Gender', type: 'select', options: ['Select Gender', 'Male', 'Female', 'Other'] },
                  { label: 'Next of Kin (Full Name)', type: 'text', placeholder: 'Next of kin full name' },
                  { label: 'Next of Kin Contact', type: 'tel', placeholder: 'Next of kin phone' },
                  { label: 'Relationship to Patient', type: 'select', options: ['Select', 'Spouse', 'Parent', 'Sibling', 'Child', 'Friend', 'Guardian'] },
                  { label: 'Blood Group', type: 'select', options: ['Select', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] }
                ].map((field, idx) => (
                  <div key={idx} style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                      {field.label}
                    </label>
                    {field.type === 'select' ? (
                      <select style={{
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
                        type={field.type}
                        placeholder={field.placeholder}
                        defaultValue={field.value}
                        readOnly={field.readOnly}
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
                onClick={() => setActiveSection('clinical')}
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
                  { label: 'Chief Complaint *', type: 'select', options: ['-- Select or Type Below --', 'Fever', 'Headache', 'Cough', 'Abdominal Pain', 'Chest Pain', 'Dizziness', 'Others (Specify below)'], hasTextarea: true },
                  { label: 'History of Present Illness', type: 'textarea', placeholder: 'When did symptoms start? Duration? Progression?', rows: 3 },
                  { label: 'PMHx (Past Medical History)', type: 'select', options: ['-- Select --', 'Diabetes', 'Hypertension', 'Asthma', 'HIV/AIDS', 'Tuberculosis', 'Heart Disease', 'None', 'Others (Specify below)'], hasTextarea: true },
                  { label: 'Socio-Economic History', type: 'textarea', placeholder: 'Occupation, lifestyle, living conditions...', rows: 2 }
                ].map((field, idx) => (
                  <div key={idx}>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                      {field.label}
                    </label>
                    {field.type === 'select' && (
                      <select style={{
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
                      {['BP: 120/80', 'Temp: 37.5°C', 'Pulse: 72 bpm', 'RR: 18/min', 'SpO2: 98%', 'Weight: 70kg'].map((vital, i) => (
                        <input 
                          key={i}
                          type="text" 
                          placeholder={vital}
                          style={{
                            padding: '8px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                    General Examination
                  </label>
                  <textarea 
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
                  <select style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    marginBottom: '8px',
                    boxSizing: 'border-box'
                  }}>
                    {['-- Select --', 'Malaria', 'URTI', 'Gastroenteritis', 'UTI', 'Pneumonia', 'Hypertension', 'Diabetes', 'Others (Specify below)'].map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                  <textarea 
                    placeholder="Diagnosis details..."
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
                      {['MRDT', 'Stool', 'PDT', 'HIV Test', 'Urinalysis', 'Blood Tests', 'X-Ray', 'Ultrasound'].map(inv => (
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
                          <input type="checkbox" />
                          <span>{inv}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
                    Treatment / Prescription
                  </label>
                  <textarea 
                    placeholder="Medications and instructions..."
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
                onClick={() => setActiveSection('billing')}
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
                  <select style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}>
                    <option>Paid</option>
                    <option>Not Paid</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Amount (KES) *</label>
                  <input 
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
                      <input type="checkbox" />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Transaction Reference</label>
                <input 
                  type="text" 
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

              <button style={{
                padding: '12px 24px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px'
              }}>
                <Save size={20} /> Save & Generate Bill
              </button>
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
                  { label: 'Generate PDF', color: '#ef4444' },
                  { label: 'Export Excel', color: '#10b981' },
                  { label: 'View Chart', color: '#3b82f6' }
                ].map((btn, idx) => (
                  <button key={idx} style={{
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
      </main>

      {showMedicalCard && <MedicalCard />}
    </div>
  );
};

export default ElmaHealthcare;