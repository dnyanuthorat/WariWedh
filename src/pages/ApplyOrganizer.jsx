function ApplyOrganizer() {
  return (
    <div>
      <h1>Apply as Organizer</h1>

      <p>
        Organizer application page.

        ApplyOrganizer.jsx
       │
       ├── Form state
       │
        └── Submitted state
        


        Apply as Organizer
│
├── Personal Information
│   ├── Full Name
│   ├── Mobile Number
│   └── Email
│
├── Dindi Information
│   ├── Dindi Name
│   ├── Dindi Type
│   └── Expected Warkaris
│
├── Route Information
│   ├── Starting Location
│   └── Destination
│
├── Organization & Safety
│   ├── Organization Name
│   └── Emergency Contact
│
├── Previous Experience
│
└── Submit Application

        ┌─────────────────────────────────────────────────────┐
│                     WariVedh                        │
│                                                     │
│              Apply as an Organizer                  │
│                                                     │
│   Help us understand your Dindi and Wari journey.   │
│   Your application will be reviewed by the           │
│   WariVedh Committee.                                │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  1. PERSONAL INFORMATION                            │
│                                                     │
│  Full Name *                                        │
│  ┌───────────────────────────────────────────────┐  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  Mobile Number *           Email *                  │
│  ┌────────────────────┐   ┌──────────────────────┐ │
│  │                    │   │                      │ │
│  └────────────────────┘   └──────────────────────┘ │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  2. DINDI INFORMATION                               │
│                                                     │
│  Dindi Name *                                       │
│  ┌───────────────────────────────────────────────┐  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  Dindi Type *              Expected Warkaris *      │
│  ┌────────────────────┐   ┌──────────────────────┐ │
│  │ Select Type ▼      │   │                      │ │
│  └────────────────────┘   └──────────────────────┘ │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  3. ROUTE INFORMATION                               │
│                                                     │
│  Starting Location *                                │
│  ┌───────────────────────────────────────────────┐  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  Destination *                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  4. ORGANIZATION & SAFETY                           │
│                                                     │
│  Organization Name                                 │
│  ┌───────────────────────────────────────────────┐  │
│  │ Optional                                      │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  Emergency Contact Number *                         │
│  ┌───────────────────────────────────────────────┐  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  5. PREVIOUS EXPERIENCE                             │
│                                                     │
│  Previous Wari / Dindi organizing experience       │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │                                               │  │
│  │                                               │  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│                         Optional                    │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│              Review your information                │
│                                                     │
│  [ ] I confirm that the information provided is     │
│      correct.                                      │
│                                                     │
│              [ Submit Application ]                  │
│                                                     │
└─────────────────────────────────────────────────────┘
      </p>
    </div>
  );
}
 
export default ApplyOrganizer;