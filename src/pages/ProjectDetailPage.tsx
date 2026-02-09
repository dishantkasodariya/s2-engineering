import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, ArrowRight, FolderKanban } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "I-215 Realignment and Widening Project",
    category: "construction",
    location: "San Bernardino, CA",
    year: "SANBAG",
    role: "S2 provided construction management & IQA services on the RE, SR, inspection, and office engineering services on this $177 million project. S2 reviewed & processed CCOs, claims, CPM schedule, monthly reports, and prepared & participated in DRB hearings.",
    description:
      "Awarded 'Construction Project of the Year' by ASCE to S2 Engineering on this $177 million project. SANBAG, in cooperation with Caltrans, the City of San Bernardino, and the Federal Highway Administration improved 7.5 miles of I-215 through the City of San Bernardino. The project broke ground in late 2009 with construction completed in early 2014. This unique and complex project included 15 new bridges (including one temporary bridge), 20,815 linear feet of cast-in-place concrete retaining walls with a combination of spread footings and footings on piles, 2,368 linear feet of mechanically stabilized embankment walls, 3,208 linear feet of sheetpile shoring to support an existing railroad, 80,250 cubic yards of concrete pavement, 88,600 tons of AC pavement, a storm drain system with pipe sizes ranging from 8 to 96 inches in diameter, landscape and irrigation, and freeway and city street electrical systems. This section of highway was used by 83,000 vehicles per day on average in 2003, and is projected to carry 135,000 vehicles per day by 2030. The project's design increases traffic flow, eliminates fast-lane entrances and exits, widens freeway bridges, aids traffic merging by adding auxiliary lanes, improves air quality, reduces noise with sound walls, and enhances access to both east and west sides of the city. Construction activity required extensive coordination with Burlington Northern Santa Fe Railroad (BNSF), which has approximately 100 trains using the tracks each day in this area – an average of one train every 15 minutes. Additional and continuous focused coordination was required with SCE, The Gas Company, SB Water Company, City of San Bernardino, City Chamber of Commerce, CHP, Caltrans TMC, Caltrans Safety, Caltrans District and Structures Designs, Caltrans METS, RWQCB, AQMD, FHWA, and consultant designers, among others.",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["$177 Million Budget", "ASCE Construction Project of the Year", "7.5-Mile Corridor", "15 New Bridges", "20,815 LF Retaining Walls", "CM & IQA Services"],
  },
  {
    id: 2,
    title: "I-5 South Corridor CM Services",
    category: "construction",
    location: "Los Angeles and Ventura Counties",
    year: "Caltrans District 7",
    description:
      "The I-5 South Corridor Improvement Project consists of six segments to create one continuous High Occupancy Vehicle (HOV), or carpool lane and one general purpose lane in each direction, and reconstructing, reconfiguring and realigning bridges, ramps and frontage roads. This seven-mile-long corridor (14 miles total) construction project to widen I-5 totals over $1.6 billion in improvements. S2 Engineering provided construction management and quality assurance inspection services – including schedule review, claims analysis, office engineering, and specialty inspection – on a number of segments.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["$1.6 Billion Project", "7-Mile Corridor", "HOV & General Purpose Lanes", "Bridge Reconstruction"],
    segments: [
      {
        title: "I-5 HOV/Carmenita Road Interchange Project",
        location: "Cities of Santa Fe Springs and Norwalk",
        description: "The $380 million Carmenita Road project involved setting approximately 2,500 steel piles into the ground as part of the foundation structural support for the new Carmenita Road Bridge at the intersection of Firestone Boulevard and Carmenita Road. The existing two-lane steel structure was replaced with a 10-lane concrete structure.",
        budget: "$380 Million"
      },
      {
        title: "I-5 HOV/Alondra Boulevard Bridge Project",
        location: "City of Santa Fe Springs",
        description: "Alondra Boulevard Bridge was reconstructed as a wider and longer structure to accommodate a wider freeway. The new bridge was widened from four lanes to six lanes, with three lanes in each direction.",
        status: "Ongoing"
      },
      {
        title: "I-5 HOV/Rosecrans Widening Project",
        location: "City of Norwalk",
        description: "The freeway was widened to five lanes in each direction. Surface street bridges were also widened to accommodate the freeway's new width, new on- and off-ramps, etc. A sidewalk was built on Florence Avenue to accommodate pedestrians, including students walking to and from Santa Fe High School. Three bridges at Shoemaker, Rosecrans and Bloomfield avenues, and a pedestrian overcrossing at Silverbow Avenue were reconstructed to accommodate a wider freeway.",
        features: "5 Lanes Each Direction"
      }
    ]
  },
  {
    id: 3,
    title: "I-15 Cajon Pass Pavement Rehabilitation",
    category: "construction",
    location: "Post Mile 15-31, San Bernardino County",
    year: "Caltrans District 8",
    role: "S2 provided construction management & IQA services on the RE, SR, inspection, and office engineering services. S2 reviewed & processed CCOs, claims, CPM schedule, and monthly reports.",
    description:
      "The Cajon Pass Pavement Rehabilitation project is one of several Design-Build projects included in the pilot program under the new Design-Build Demonstration Program enacted by Senate Bill 4. The project limits extend approximately from Post Mile 15 to Post Mile 31 on Interstate 15 in San Bernardino County, with an estimated construction cost of $120 million. The purpose of this project is to restore the structural integrity and ride quality of the mainline and ramp pavements by rehabilitating or replacing existing PCCP and AC pavement on the mainline and exit/entrance ramps. The proposed pavement rehabilitation strategies improve ride quality, reduce maintenance frequency and costs, and increase the service life of the pavement. S2 Engineering provided construction management and IQA services including RE, SR, inspection, and office engineering services. S2 reviewed and processed CCOs, claims, CPM schedules, and monthly reports. The scope of work includes repair of the existing Portland Cement Concrete Pavement (PCCP) by replacing two outer lanes, asphalt concrete (AC) shoulders and AC patched areas to 40-year rigid pavement design, grinding and random slab replacement of inside lanes with rigid pavement. This project also milled and overlaid existing AC ramps, reconstructed AC ramp termini and upgraded recommended highway appurtenances and facilities, improved drainage system, and reconstructed concrete barriers. Inspection work was performed on clearing and grubbing, lane closures, coordination with materials testers, environmentally sensitive areas, coordination with TMC, night time work, construction area signs, roadway embankment, LCB, dowel and tie-bar installation, bond breaker, JPCP, and curing. S2 also prepared daily diaries, checked and verified quantities for monthly progress payment, and checked and verified field tests and lab tests for compliance with California Test Methods (CTMs).",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    ],
    specs: [
      "$120 Million Budget",
      "Post Mile 15-31 (16 Miles)",
      "Design-Build SB4 Pilot Program",
      "40-Year Rigid Pavement Design",
      "PCCP & AC Rehabilitation",
      "CM & IQA Services"
    ],
  },
  {
    id: 4,
    title: "Route 138 Widening and Realignment",
    category: "construction",
    location: "LA County Line to I-15, Wrightwood & Hesperia, CA",
    year: "Caltrans District 8",
    role: "S2 provided construction inspection and materials testing services for this Caltrans project.",
    description:
      "This $30 million construction project began at the LA county line and ended at I-15, spanning fifteen miles of Route 138. The project widened the highway to add truck climbing lanes (both eastbound and westbound), and realigned the vertical and horizontal curves for improved sight distance at various locations. S2 Engineering provided construction inspection and materials testing services for this Caltrans project. Roadway excavation of more than 600,000 m³ was required, with massive excavation and embankment sections, and twenty-nine drainage systems with depth of invert up to 20 meters. The widened section of the roadway and overlay work required 130,000 tonnes of asphalt concrete. A 14' x 18' box culvert bridge was installed, along with signal and lighting construction. The existing highway was a two-lane rural highway. Most of the work was performed with the closure of one lane and the use of a flagging operation. Work on one section of the highway was performed in three shifts with complete closure, requiring coordination with Caltrans' Traffic Management Center, local businesses and residents, traveling public, CHP, US Forest Service, and local emergency responders. S2 provided construction inspection and QA testing services on this project, with staffing levels varying as Caltrans' resource needs fluctuated greatly. S2 met Caltrans' resource needs even when requests were made on short notice. The fact that several S2 inspectors resided in the high desert area was very beneficial to the project.",
    image:
      "https://images.unsplash.com/photo-1572819541993-d9305ff41799?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572819541993-d9305ff41799?q=80&w=800&auto=format&fit=crop",
    ],
    specs: [
      "$30 Million Budget",
      "15-Mile Corridor",
      "600,000 m³ Excavation",
      "130,000 Tonnes AC",
      "29 Drainage Systems",
      "Truck Climbing Lanes (EB/WB)"
    ],
  },
  {
    id: 5,
    title: "I-10 Cherry Avenue Interchange Project",
    category: "construction",
    location: "Ontario, CA",
    year: "SANBAG",
    role: "S2 provided construction management, field documents, schedule review & analysis, preparing & negotiating CCOs, and coordination with the City of Ontario, CHP, UPRR, Caltrans Oversight Engineers, CT Traffic Operations, CT Safety Committee, utility companies, residents & businesses, among others.",
    description:
      "S2 Engineering provided CM services on the Cherry Avenue Interchange Project in the Inland Empire. The $76 million project includes replacing the existing five-lane Cherry Avenue bridge over I-10 with an eight-lane bridge, from Slover Avenue to Valley Boulevard. The project widened the bridge over the railroad tracks from four lanes to eight lanes and made improvements to on-and-off ramps. Loop ramps were added as auxiliary on ramps; utilities crossing through the bridges were relocated; ramps were realigned in the first stage; access to businesses was maintained at all times; well-coordinated lane closures of city streets and ramps, and the use of rapid strength concrete minimized with additional JPCP for stage construction. Intersection improvements were made at the Cherry and Slover intersection and Cherry and Valley intersection, and other local street improvements. The purpose of the project is to improve safety and operational efficiency of the I-10/Cherry Avenue interchange. This interchange is a modified diamond geometric layout with loop on-ramp and the ramps are controlled by traffic signals. High volumes of traffic including heavy trucks traveling on I-10, Cherry Avenue and local region and obsolete roadway and bridge features warranted total reconstruction of the interchange. The S2 staff is directly involved in reviewing field documents, schedule review & analysis, preparing & negotiating CCOs on an ongoing and proactive basis. The project completed ahead of schedule in June 2014.",
    image:
      "https://images.unsplash.com/photo-1587844626431-2b8e452b3ff8?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1587844626431-2b8e452b3ff8?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["$76 Million Budget", "5-Lane to 8-Lane Bridge", "Loop Ramp Addition", "Completed Ahead of Schedule (2014)"],
  },
  {
    id: 6,
    title: "I-10 Citrus Avenue Interchange Project",
    category: "construction",
    location: "Fontana, CA",
    year: "SANBAG",
    role: "S2 provided construction management, field documents, schedule review & analysis, preparing & negotiating CCOs, and coordination with the City of Fontana, CHP, UPRR, Caltrans Oversight Engineers, CT Traffic Operations, CT Safety Committee, utility companies, residents & businesses, among others.",
    description:
      "This project involves the reconstruction of I-10/Citrus Avenue interchange by realigning the on and off-ramps, replacing the existing Citrus Avenue Overcrossing (OC), widening of the Citrus Avenue Railroad Overhead (OH) and widening of Citrus Avenue from 5 lanes to 7 lanes with sidewalk on both sides of the street from Slover Avenue, southern terminus, to Valley Boulevard, northern terminus. Stage 1 construction of Citrus Avenue OC and Citrus Avenue OH occurs on the east side of the existing alignment, and Stage 2 construction occurs at the west side. Other major work includes the construction of a new westbound loop on-ramp, construction of earth retaining structures (MSE walls & cantilever concrete retaining walls), and utility relocation. The purpose of the project is to improve safety and operational efficiency of the I-10/Citrus Avenue interchange. This interchange is a modified diamond geometric layout with loop on-ramp and the ramps are controlled by traffic signals. High volumes of traffic including heavy trucks traveling on I-10, Citrus Avenue and local region and obsolete roadway and bridge features warrant total reconstruction of the interchange.",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["5-Lane to 7-Lane Widening", "Bridge Replacement", "Westbound Loop On-Ramp", "MSE & Retaining Walls"],
  },
  {
    id: 7,
    title: "North Milliken Avenue Grade Separation",    
    category: "construction",
    location: "Ontario, CA",
    year: "SANBAG",
    role: "S2 provided construction management & IQA services on the RE, SR, inspection, and office engineering services. S2 reviewed & processed CCOs, claims, CPM schedule, and monthly reports.",
    description:
      "Awarded 'Bridge Project of the Year' by ASCE to S2 Engineering, the North Milliken Grade Separation Project includes a roadway and railroad track grade separation at the Milliken Avenue and Union Pacific Railroad (UPRR) Alhambra Line crossing located in the City of Ontario. Currently there are more than 36 freight trains traversing Milliken Avenue averaging 5 minutes each, with estimates for more and longer trains in the future. This vital crossing was ranked 8 of 75 in priority on the California Public Utilities Commission (CPUC) Section 190 Grade Separation Priority Study list. The primary goal for this project was the ability to separate the train traffic from the vehicle traffic on Milliken Avenue with minimal disruption to existing traffic flow and without severing access to any of the surrounding businesses. As a result of a constructability review, the project was redesigned to use a proprietary type of MSE walls known as 'T-Walls'. With the use of a special double ended T-Wall, the south half of the bridge was constructed first. The north part of the double ended T-Wall acted as a shoring (retaining) wall allowing the tracks to be placed on the fully constructed ramps and over Milliken Avenue Bridge thus eliminating the 'at grade' crossing 14 months earlier than anticipated. The project scope of work included full construction management services; construction project advertising, bid analysis, and award; construction inspection; construction surveying, materials testing, contractor interface and contract administration; office engineering; public outreach assistance and other assorted construction management duties. Other improvements included widening and reconstruction of Milliken Avenue between Airport Drive and Guasti Road, construction of curb and gutter, sidewalks, raised median islands, street lighting, traffic signal modifications at the intersections with Airport Drive and Guasti Road, traffic signing and striping, and landscaping. Major utility relocations, including overhead electrical lines and an underground petroleum pipeline were performed separately by the City of Ontario prior to construction on the grade separation project.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["ASCE Bridge Project of the Year", "UPRR Grade Separation", "36 Daily Trains", "Innovative T-Wall Design", "14 Months Early Completion"],
  },
  {
    id: 8,
    title: "I-10 Truck Climbing Lane Addition",
    category: "construction",
    location: "Redlands / Yucaipa, CA",
    year: "SANBAG",
    role: "S2 provided resident engineering, office engineering, structure and roadway inspection, and specialty inspection services.",
    description:
      "S2 Engineering (S2) provided complete construction management service on this $20 million project to widen 6 km section of existing eastbound I-10 freeway in Redlands / Yucaipa in San Bernardino county. This project was funded by SANBAG with Caltrans oversight. Work included SWPPP implementation; roadway excavation; ADL soil excavation; subbase; drainage structures and systems; roadway embankment; Class II AB; LCB; AC bond breaker; dowels and tiebars in PCCP, PCCP, and lateral and longitudinal joint sealant; ramp widening and PCC ramp termini; retaining walls on CIDH and spread footing; tieback walls; CIDH pile, pile cap, and sound wall; concrete barrier on retaining wall; concrete median barrier; roadside, bridge-mounted, and overhead sign; ramp metering, CCTV, roadside lighting; ramp signalization; landscaping, including irrigation and remote control system; and striping and painting. Major PCCP slab replacement work was also completed as part of this project. Work required coordination with various agencies and departments within Caltrans. Weekly meetings were held with the Contractor and these meetings were open to all stakeholders, including the Cities of Redlands and Yucaipa; utility agencies; businesses; Caltrans oversight engineer, safety engineer, SWPPP coordinator, and maintenance superintendent. S2 managed or coordinated the work performed by the surveyors, materials tester, archeologist (Indian burial ground), SWPPP Task Force, Yucaipa Water District, Redlands Water District, Verizon and AT&T (fiber optics relocation), and CHP (COZEEP). This project consistently received high grades from Caltrans SWPPP Task Force and Caltrans Safety Review Team. Lane closures status were called in on time to Traffic Operations. CPM baseline and update schedules were closely monitored and analyzed. Construction management of this project was proactive and based on in-depth experience and teamwork such that work was completed below budget with no delay caused by the project owner.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["$20 Million Budget", "6 km EB I-10 Widening", "Complete CM Services", "Below Budget Completion", "High SWPPP & Safety Ratings"],
  },
  {
    id: 9,
    title: "Caltrans District 7 Materials Testing",
    category: "materials",
    location: "Los Angeles & Ventura Counties",
    year: "Caltrans District 7",
    role: "S2 Engineering (S2) provided materials testing services to Caltrans District 7 in Los Angeles and Ventura Counties. S2 provided all materials testing service in the district for three years.",
    description:
      "S2 provided soil, aggregate, asphalt, and concrete sampling and testing services. As part of the service, S2 provided asphalt and concrete batch plant inspection, and field soil and aggregate compaction testing, laboratory testing of soils and concrete. All sampling and testing results were provided to the resident engineer on time, any failed-test results were immediately conveyed by phone, immediately followed by documentation of the test results. Dispatching of technicians is closely coordinated with Caltrans Materials Testing and Batch Plant Inspection groups. To date, S2 has not missed a single testing requested by Caltrans. All work was performed per the requirements of California Test Methods and frequency of testing was per Caltrans Construction Manual. Laboratory testing of samples were handled from Pico Rivera, Rancho Cucamonga, and Ventura laboratories. Technicians were dispatched from the closest laboratory to the job site so that travel time is minimized, responsiveness is effective, and the best of services is provided to Caltrans. Services have been provided even when requested with extremely short notice, service requests have never been missed. Currently, service is being provided in projects worth more than $1 billion. Some of the major projects in which service have been provided are: I-5 / Carmenita Widening Project, I-5 / Rosecrans Widening Project, I-5 at Gorman Slab Replacement Project, I-5 / 710 Connector Project, SR 101 Widening Project, I-10 Widening at Baldwin Park, I-10 / 605 Connector Improvement Project.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["3-Year On-Call Contract", "$1+ Billion Projects", "100% On-Time Response", "3 Laboratory Locations"],
  },
  {
    id: 10,
    title: "Caltrans District 8 Materials Testing",
    category: "materials",
    location: "San Bernardino & Riverside Counties",
    year: "Caltrans District 8",
    role: "S2 Engineering (S2) provided materials testing services to Caltrans District 8 in San Bernardino and Riverside Counties. S2 provided all materials testing service in the district for three years.",
    description:
      "S2 worked on multiple projects covered by the Caltrans Barstow Lab. These projects include: Route 138 Widening and Realignment Project in Hesperia / Pinon Hill, Route 247 Resurface Existing Pavement, I-15 Median Widening Project north of Barstow, Big Pine Creek Bridge on SR 173 – Emergency Repair, I-40 Emergency Bridge Replacement Project – Marble Wash Bridge to Mountain Wash Bridge, Route 330 Slope Protection Project north of Highland, Route 95 Pavement Rehabilitation Project, I-40 Fennar Bridge Replacement Project, I-40 Emergency Bridge Replacement Project (Phase I), I-215 / 60 / 91 Connector Project in Riverside, I-215 Segment 3 Widening project in San Bernardino. S2's field staffs worked closely with multiple field inspectors for these projects. They communicate with the field inspectors regarding schedule, location, and construction activity for sampling and testing. They are thoroughly familiar with the projects, ongoing activities, and Caltrans inspection staff. Route 138 Widening Project required the complete closure of the roadway for three months during the summer. Caltrans made a request to S2 to provide a Caltrans-certified fully-equipped field laboratory to expedite the sampling and testing of soil and aggregate in this project. S2 got the proper approval, coordinated with the R.E to determine the field location, mobilized its resources, moved its trailer and laboratory equipment, coordinated with Caltrans Independent Assurance Testing group, and had the field laboratory certified and ready to use by Caltrans in less than a week of the initial request.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["3-Year On-Call Contract", "11+ Major Projects", "Mobile Field Laboratory", "Less Than 1 Week Mobilization"],
  },
  {
    id: 11,
    title: "City of Glendale Materials Testing",
    category: "materials",
    location: "Glendale, CA",
    year: "City of Glendale",
    role: "S2 Engineering provided materials testing services to the City of Glendale.",
    description:
      "S2 Engineering provided construction materials testing services to the City of Glendale's $45 million Fairmont Avenue Extension Project at the Route 134/San Fernando Valley Road Exit. The project connects Fairmont Avenue to San Fernando crossing the channel and railroad grade with grade separation structure. Fairmont Avenue will ultimately be connected directly to Route 134 just east of the Route 134 / I-5 Interchange. S2 provided soil, aggregate, asphalt, concrete and rebar sampling and testing services. As part of the service, S2 provided asphalt and concrete batch plant inspection, and field soil and aggregate compaction testing. All sampling and testing results were provided to the resident engineer on time, any failed-test results were immediately conveyed on the phone, immediately followed by documentation of the test results. All work was performed per the requirements of California Test Methods and Caltrans Construction Manual. As part of the service, S2 also provided Gamma-Gamma Logging (GGL) testing of the CIDH piles.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["$45 Million Project", "Fairmont Avenue Extension", "GGL Testing of CIDH Piles", "Grade Separation Structure"],
  },
  {
    id: 12,
    title: "Bear Valley Road Improvement",
    category: "materials",
    location: "Victorville / Apple Valley, CA",
    year: "City Projects",
    role: "S2 Engineering provided materials testing services on this $9 million project in the City of Victorville and Apple Valley.",
    description:
      "Bear Valley Road is aligned east-west in these two cities. Bear Valley Road was widened from 200 meters east of I-15 Freeway interchange to the Mohave River Bridge. Existing water main was replaced and relocated to the north of the roadway. All utility work was completed during the night shift. Compaction test and backfill aggregate sampling and testing for the trench work were performed in our laboratory in Rancho Cucamonga. This work was closely coordinated with the utility agency. The roadway improvement required roadway excavation, embankment, extension of existing drainage crossings, installation of new drainage systems, retaining wall and backfill, concrete curb and gutter, Class II Aggregate Base, cold planning AC, and AC paving. Because of the lane closure restrictions, construction was performed in two shifts. S2 Engineering reviewed all AC mix designs submitted by the Contractor and recommended the finding to the resident engineer. S2 provided field compaction tests using nuclear gage for subbase, aggregate, structural backfill, and AC. S2 also provided AC batch plant inspection. Additional laboratory testing was performed for AC oil content, resistivity, maximum density, sieve analysis, sand equivalent, and cleanliness value.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    ],
    specs: ["$9 Million Budget", "Road Widening & Water Main Relocation", "2-Shift Construction", "AC Mix Design Review"],
  },
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-foreground py-12 lg:py-16">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </button>
          
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-sm font-semibold capitalize text-primary">
              <FolderKanban className="h-4 w-4" />
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-background/70">
              <MapPin className="h-4 w-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-1 text-sm text-background/70">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-background sm:text-5xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Images */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          {project.role && (
            <>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                S2 Engineering Role
              </h2>
              <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
                {project.role}
              </p>
            </>
          )}

          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Project Overview
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <h3 className="mb-4 text-2xl font-bold text-foreground">
            Project Highlights
          </h3>
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.specs.map((spec, index) => (
              <div
                key={index}
                className="rounded-xl bg-background p-6 shadow-sm"
              >
                <p className="font-semibold text-foreground">{spec}</p>
              </div>
            ))}
          </div>

          {project.segments && (
            <>
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                Project Segments
              </h3>
              <div className="mb-12 space-y-6">
                {project.segments.map((segment, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                  >
                    <h4 className="mb-2 text-xl font-bold text-foreground">
                      {segment.title}
                    </h4>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {segment.location}
                    </p>
                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {segment.description}
                    </p>
                    {(segment.budget || segment.status || segment.features) && (
                      <div className="flex flex-wrap gap-2">
                        {segment.budget && (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                            {segment.budget}
                          </span>
                        )}
                        {segment.status && (
                          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-600">
                            {segment.status}
                          </span>
                        )}
                        {segment.features && (
                          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-600">
                            {segment.features}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="rounded-2xl bg-primary p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-primary-foreground">
              Interested in a Similar Project?
            </h3>
            <p className="mb-6 text-primary-foreground/80">
              Contact us to discuss how we can help with your construction needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:shadow-lg"
            >
              Get In Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
