// Clark County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-27

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Clark County Auditor Property Search";

export const LINKS = [
  // ---------- Government ----------
  { name: "Clark County, Ohio", category: "Government", subcategory: "County", url: "https://www.clarkcountyohio.gov/", description: "Official Clark County government site: commissioners, courts, permits and services in Springfield." },
  { name: "Clark County Auditor", category: "Government", subcategory: "Auditor", url: "https://clarkcountyauditor.org/", description: "Property record, real estate tax and parcel search for every property in Clark County." },
  { name: "Clark County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/clark/", description: "Voter registration, polling locations and election results for Springfield and Clark County." },
  { name: "Clark County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://www.clarkcountyohio.gov/SHERIFF", description: "Sheriff's patrol, jail and records division at 120 N. Fountain Ave. in Springfield." },
  { name: "City of Springfield", category: "Government", subcategory: "City", url: "https://springfieldohio.gov/", description: "Official site of Springfield, the Clark County seat: utility billing, commission news and services." },
  { name: "City of New Carlisle", category: "Government", subcategory: "City", url: "https://newcarlisle.net/", description: "Municipal site for New Carlisle in western Clark County, a county economic development partner." },
  { name: "Village of Enon", category: "Government", subcategory: "Village", url: "https://www.enon-oh.gov/", description: "Village of Enon, incorporated in 1850, in Mad River Township southwest of Springfield." },
  // ---------- Education ----------
  { name: "Clark County Public Library", category: "Education", subcategory: "Library", url: "https://www.ccplohio.org/", description: "Main library at 201 S. Fountain Ave. plus branches, bookmobile and local-history archives." },
  { name: "Springfield City School District", category: "Education", subcategory: "K-12", url: "https://www.scsdoh.org/", description: "Clark County's largest district, serving Springfield High School and the city's K-12 schools." },
  { name: "Northeastern Local Schools", category: "Education", subcategory: "K-12", url: "http://www.nelsd.org/", description: "District at 4435 Bosart Road serving northeastern Clark County, home of the Kenton Ridge Cougars." },
  { name: "Tecumseh Local Schools", category: "Education", subcategory: "K-12", url: "http://www.tecumseh.k12.oh.us/", description: "New Carlisle-based district in western Clark County, home of Tecumseh High School." },
  { name: "Greenon Local Schools", category: "Education", subcategory: "K-12", url: "http://www.greenon.k12.oh.us/", description: "Greenon Knights district in Enon, with a K-12 campus on Enon-Xenia Road." },
  { name: "Springfield-Clark Career Technology Center", category: "Education", subcategory: "Career-Tech", url: "https://www.scctc.org/", description: "Career-technical programs serving high school students from across Clark County districts." },
  { name: "Clark State College", category: "Education", subcategory: "Higher Ed", url: "https://www.clarkstate.edu/", description: "Public two-year college at 570 E. Leffel Lane in Springfield, founded in 1962." },
  { name: "Wittenberg University", category: "Education", subcategory: "Higher Ed", url: "https://www.wittenberg.edu/", description: "Private liberal arts university on Springfield's north side, founded in 1845." },
  // ---------- Health ----------
  { name: "Clark County Combined Health District", category: "Health", subcategory: "Public Health", url: "https://ccchd.com/", description: "County health department at 529 E. Home Road: immunizations, WIC, food and septic inspections." },
  { name: "Mercy Health – Springfield Regional Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.mercy.com/locations/hospitals/springfield/springfield-medical-center", description: "Full-service hospital at 100 Medical Center Dr., Springfield, open 24 hours." },
  { name: "Rocking Horse Community Health Center", category: "Health", subcategory: "Community Health", url: "https://rockinghorsecenter.org/", description: "Springfield community health center offering medical, dental and behavioral care on a sliding scale." },
  // ---------- Business & Economy ----------
  { name: "Greater Springfield Partnership", category: "Business & Economy", subcategory: "Chamber", url: "https://www.greaterspringfield.com/", description: "Clark County's chamber of commerce and economic development group, based on S. Limestone St." },
  { name: "EXPAND Greater Springfield (Community Improvement Corp.)", category: "Business & Economy", subcategory: "Economic Development", url: "http://www.expandgreaterspringfield.com/", description: "Community Improvement Corp. site marketing Clark County sites, buildings and the EXPAND campaign." },
  { name: "Clark County Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.clarkcountyohio.gov/679/Economic-Development", description: "County development office handling enterprise zones, site selection and the Retail Development Fund." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Clark County", category: "Community & Social", subcategory: "Workforce", url: "http://clarkdjfs.org/ohiomeansjobs", description: "County-run job center offering job search, training and employer hiring help in Springfield." },
  { name: "Clark County Department of Job & Family Services", category: "Community & Social", subcategory: "Social Services", url: "https://www.clarkdjfs.org/", description: "County agency for food and cash assistance, Medicaid, child support and children's services." },
  { name: "OSU Extension – Clark County", category: "Community & Social", subcategory: "Extension", url: "https://clark.osu.edu/", description: "Ohio State Extension's Clark County office: 4-H, agriculture and Master Gardener programs." },
  { name: "Clark County Historical Society / Heritage Center", category: "Community & Social", subcategory: "History", url: "http://www.heritage.center/", description: "Free local-history museum, research library and archives in Springfield's restored City Building." },
  // ---------- Recreation & Tourism ----------
  { name: "Clark County Fair (Clark County Agricultural Society)", category: "Recreation & Tourism", subcategory: "Fair", url: "https://clarkcoag.com/", description: "Runs the Clark County Fair each July at the Springfield fairgrounds, plus year-round events." },
  { name: "National Trail Parks & Recreation District", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ntprd.org/", description: "NTPRD operates Springfield-area parks, pools, trails and hundreds of recreation programs." },
  { name: "George Rogers Clark Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ntprd.org/george-rogers-clark-park/", description: "NTPRD park on the Mad River west of Springfield with trails and Revolutionary War history." },
  { name: "Springfield Museum of Art", category: "Recreation & Tourism", subcategory: "Arts", url: "http://www.springfieldart.net/", description: "Museum at 107 Cliff Park Road, Ohio's only Smithsonian-affiliated art museum." },
  { name: "Hartman Rock Garden", category: "Recreation & Tourism", subcategory: "Arts", url: "https://hartmanrocks.org/", description: "Depression-era folk-art garden on Springfield's Russell Ave., drawing over 13,000 visitors a year." },
  // ---------- News & Media ----------
  { name: "Springfield News-Sun", category: "News & Media", subcategory: "Newspaper", url: "https://www.springfieldnewssun.com/", description: "Daily newspaper covering Springfield and Clark County government, schools and business." },
  { name: "WYSO 91.3 FM", category: "News & Media", subcategory: "Radio", url: "https://www.wyso.org/", description: "NPR member station in nearby Yellow Springs with a dedicated Clark County news beat." },
];
