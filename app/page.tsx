"use client";

import { useMemo, useState } from "react";

type LegacyRow = {
  institution: string;
  legacy: string;
  generation: string;
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "generation", label: "Three Generations" },
  { id: "investment", label: "Investment Leadership" },
  { id: "governance", label: "Governance Philosophy" },
  { id: "lineage", label: "Barnett Lineage" },
  { id: "legacies", label: "Named Legacies" },
  { id: "civic", label: "Civic Engagement" },
  { id: "publix", label: "Publix Foundation" },
  { id: "personal", label: "Personal Context" },
  { id: "summary", label: "Summary" },
];

const honorsCarol = [
  "Florida Women's Hall of Fame inductee (2016)",
  "Chiles Advocacy Award (2017) — The state's most prestigious recognition for dedication to children's causes",
  "Barbara Bush Champion for Literacy Award",
  "Women in Philanthropy Award, United Way Women's Leadership Council (2015)",
  "National Alexis de Tocqueville Award, United Way of America (2002)",
  "Florida Arts Recognition Award, Secretary of State of Florida (2004)",
  "Women of Distinction, Girl Scouts West Central (2008)",
  "Helen Ayala Davis Award, Children's Home Society (2005)",
  "Polk County Schools Hall of Fame Award (2003)",
];

const honorsBarney = [
  "United Way Philanthropist of the Year (2016)",
  "Alexis de Tocqueville Society Award, United Way of America (2002)",
  "Tampa Bay Business Hall of Fame inductee (2002)",
  "Governor's Business Leader Award (2010)",
  "2025 Sarah D. McKay Advocate of the Year, Lakeland Regional Health",
  "In 2026, the Florida Southern College Barney Barnett School of Business and Free Enterprise established its inaugural Barnett Business Hall of Fame, inducting Dr. Barney Barnett '65 in the Class of 2026 for his family's transformational philanthropy.",
];

const legacyRows: LegacyRow[] = [
  {
    institution: "Publix Super Markets Charities",
    legacy: "George W. Jenkins Foundation (1966), renamed 1996",
    generation: "George W. Jenkins",
  },
  {
    institution: "George W. Jenkins High School, Lakeland",
    legacy: "Named 1993",
    generation: "George W. Jenkins",
  },
  {
    institution: "George Jenkins Arena, RP Funding Center",
    legacy: "Opened 1974",
    generation: "George W. Jenkins",
  },
  {
    institution: "Florida Southern College",
    legacy: "Honorary Chancellor; multiple campus buildings",
    generation: "George W. Jenkins",
  },
  {
    institution: "Barney Barnett School of Business & Free Enterprise, FSC",
    legacy: "Transformational naming gift",
    generation: "Carol & Barney Barnett",
  },
  {
    institution: "Barnett Residential Life Center, FSC",
    legacy: "~$10M gift, Robert A.M. Stern design",
    generation: "Carol & Barney Barnett",
  },
  {
    institution:
      "Carol Jenkins Barnett Center for Early Childhood Learning & Health, FSC",
    legacy: "Created 2020",
    generation: "Carol Jenkins Barnett",
  },
  {
    institution:
      "Carol Jenkins Barnett Pavilion for Women & Children, Lakeland Regional Health",
    legacy: "Largest gift in Foundation history at the time",
    generation: "Carol & Barney Barnett",
  },
  {
    institution:
      "Carol J. & Barney Barnett Learning Center, Florida Aquarium",
    legacy: "$1M gift, opened 2014",
    generation: "Carol & Barney Barnett",
  },
  {
    institution: "All Saints' Academy Learning Center",
    legacy: "Primary donors, $5.5M facility",
    generation: "Carol & Barney Barnett",
  },
  {
    institution: "Mote Marine Laboratory & Aquarium",
    legacy: "$3M gift (2015)",
    generation: "Carol & Barney Barnett",
  },
  {
    institution: "Bonnet Springs Park",
    legacy: "Founding gift; Carol's final philanthropic legacy",
    generation: "Carol & Barney Barnett",
  },
  {
    institution: "Carol Jenkins Barnett Endowment, Bonnet Springs Park",
    legacy: "Permanent endowment via GiveWell Community Foundation",
    generation: "Barnett Family",
  },
  {
    institution: "Barnett Applied Research Center (BARC), Florida Polytechnic University",
    legacy: "$10M+ in contributions; named 2023",
    generation: "Barnett Family",
  },
  {
    institution: "Moffitt Cancer Center — Central Florida Campus",
    legacy: "$10M gift (2026)",
    generation: "Wesley & Ashley Bell Barnett",
  },
  {
    institution:
      "Carol Jenkins Barnett Pavilion for Women & Children – South, Lakeland Regional Health",
    legacy: "Lead gift anchoring $50M campaign (2025)",
    generation: "Barnett Family",
  },
  {
    institution: "Barnett Business Hall of Fame, FSC",
    legacy: "Inaugural class 2026",
    generation: "Barney Barnett (honoree)",
  },
];

export default function Home() {
  const [legacyFilter, setLegacyFilter] = useState("All");
  const [legacySort, setLegacySort] = useState<"institution" | "generation">(
    "institution",
  );
  const [honorQuery, setHonorQuery] = useState("");

  const legacyGenerations = useMemo(
    () => ["All", ...new Set(legacyRows.map((r) => r.generation))],
    [],
  );

  const filteredLegacyRows = useMemo(() => {
    const rows =
      legacyFilter === "All"
        ? legacyRows
        : legacyRows.filter((r) => r.generation === legacyFilter);

    return [...rows].sort((a, b) =>
      a[legacySort].localeCompare(b[legacySort], "en", { sensitivity: "base" }),
    );
  }, [legacyFilter, legacySort]);

  const filteredCarolHonors = honorsCarol.filter((h) =>
    h.toLowerCase().includes(honorQuery.toLowerCase()),
  );
  const filteredBarneyHonors = honorsBarney.filter((h) =>
    h.toLowerCase().includes(honorQuery.toLowerCase()),
  );

  return (
    <div className="bg-stone-50 text-stone-800">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-3 text-sm">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap rounded-full border border-stone-300 px-3 py-1.5 hover:bg-stone-100"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl space-y-14 px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
            Wesley Barnett
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight sm:text-5xl">
            Investor & Multigenerational Philanthropic Leader
          </h1>
        </section>

        <section id="overview" className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>Wesley Barnett is a Central Florida–based investor and third-generation philanthropic leader whose family's legacy of institutional giving spans nearly a century. As the grandson of Publix Super Markets founder George W. Jenkins and son of philanthropist Carol Jenkins Barnett, Wesley operates at the intersection of family-office capital stewardship, institutional governance, and regional economic development.</p>
          <p>His work — alongside his wife, Ashley Bell Barnett — represents a strategic evolution of the Jenkins-Barnett philanthropic tradition: from the corporate giving culture George Jenkins embedded in Publix, through Carol's transformational leadership in early childhood education and community health, to Wesley and Ashley's current focus on catalytic, place-based investments in healthcare access, STEM education, and civic infrastructure.</p>
        </section>

        <section id="generation" className="space-y-8 rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">I. Three Generations of Philanthropic Leadership</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[{ t: "1907–1996", n: "George W. Jenkins", s: "Founder ethos, Publix creation, institutional philanthropy" }, { t: "1956–2021", n: "Carol Jenkins Barnett & Barney Barnett", s: "Early childhood advocacy and transformational regional giving" }, { t: "2004–Present", n: "Wesley Barnett & Ashley Bell Barnett", s: "Catalytic philanthropy, governance, and place-based investment" }].map((item) => (
              <div key={item.n} className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">{item.t}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.n}</h3>
                <p className="mt-2 text-sm text-stone-700">{item.s}</p>
              </div>
            ))}
          </div>

          <article className="space-y-3">
            <h3 className="text-xl font-semibold">Generation One: George W. Jenkins (1907–1996)</h3>
            <h4 className="font-semibold">The Founder's Ethos</h4>
            <p>George Washington Jenkins Jr. was born in Warm Springs, Georgia, in 1907. After working in his family's general store and rising to manage a Piggly Wiggly location in Winter Haven, Florida, he opened the first Publix Food Store on September 6, 1930 — in the depths of the Great Depression — with $1,300 in capital. A decade later, he built what his bankers called a "marble, glass, and stucco food palace": the first true Publix supermarket, featuring air conditioning, fluorescent lighting, and electric-eye doors.</p>
            <p>Jenkins moved Publix's headquarters to Lakeland in 1945 after acquiring the Lakeland Grocery Company and its 19 All American Food Stores. Lakeland would remain the company's home — and the family's center of gravity — for the next eight decades and counting.</p>
            <h4 className="font-semibold">Philanthropy as Business Philosophy</h4>
            <p>Jenkins's approach to giving was inseparable from his approach to business. He pioneered employee ownership and profit-sharing at a time when such structures were virtually unheard of in grocery retail, creating what would become the largest employee-owned company in the United States. When asked how much he might be worth had he not given so much away, Jenkins replied simply: "Probably nothing."</p>
            <p>His formal philanthropic infrastructure began in 1966 with the establishment of the <strong>George W. Jenkins Foundation</strong>, which he funded personally with his own Publix stock — ensuring the foundation's assets would grow alongside the company. He appointed family members to key board positions, including his daughter Carol, who joined the foundation board in 1983.</p>
            <h4 className="font-semibold">Institutional Legacy</h4>
            <ul className="list-disc space-y-1 pl-6">
              <li><strong>Publix Super Markets Charities</strong> — The successor to the Jenkins Foundation (renamed 1996), supporting five national campaigns: Special Olympics, March of Dimes, Children's Miracle Network, United Way, and Food for All</li>
              <li><strong>George W. Jenkins High School</strong> — Established in Lakeland in 1993</li>
              <li><strong>George Jenkins Arena</strong> — Opened in 1974 at the RP Funding Center as a multipurpose entertainment facility</li>
              <li><strong>Florida Southern College</strong> — Substantial support beginning in the 1950s and 1960s, including funding for campus buildings; named honorary chancellor</li>
              <li><strong>Honorary doctorates</strong> from Florida Southern College (1956), University of Tampa (1963), Stetson University (1977), and Florida Institute of Technology (1979)</li>
              <li><strong>Horatio Alger Award</strong> recipient, recognizing his rise from a stock clerk to the builder of a major American company</li>
              <li><strong>George W. Jenkins Charitable Trust</strong> — In his will, Jenkins distributed most of his Publix stock to family heirs and this trust, retaining less than 5% of company shares at the time of his death, ensuring ongoing support for both family and philanthropy</li>
            </ul>
            <p>Jenkins died on April 8, 1996, at the age of 88. Florida Governor Lawton Chiles called it "a great loss," praising him as a civic leader who rose from sweeping floors to build a major supermarket chain. His death received national attention, including a New York Times obituary.</p>
            <h4 className="font-semibold">The Cultural Foundation</h4>
            <p>Perhaps Jenkins's most enduring philanthropic contribution was not any single gift but the culture of giving he built into Publix itself. The company's highest internal honor — the <strong>Mr. George Community Service Award</strong> — recognizes associates who best demonstrate his passion for community service. This culture of corporate generosity became the platform from which the next generation would launch far more ambitious philanthropic initiatives.</p>
          </article>

          <article className="space-y-3">
            <h3 className="text-xl font-semibold">Generation Two: Carol Jenkins Barnett (1956–2021) & Barney Barnett</h3>
            <h4 className="font-semibold">Carol Jenkins Barnett: Champion for Children</h4>
            <p>Carol Jenkins Barnett was born on September 30, 1956 — the sixth of George Jenkins's seven children — and raised in Lakeland during Publix's period of rapid expansion. She attended Emory University before transferring to Florida Southern College, where she graduated with a bachelor's degree in Business and Marketing in 1979. She began her Publix career in 1972 as a cashier at the Grove Park Shopping Center in Lakeland.</p>
            <p>In 1983, Carol joined the Publix board of directors, where she served for 33 years. That same year, she joined the foundation board (later Publix Super Markets Charities), which she would describe as the experience that shaped her life's mission. Following her father's stroke in 1989, the board appointed her chair, and she served as president from 1991 to 2016 — a quarter-century of leadership during which the organization distributed approximately $25 million annually to nonprofit organizations across the Southeast.</p>
            <h4 className="font-semibold">Early Childhood Education: A Defining Cause</h4>
            <p>Carol's most transformational work centered on early childhood education. In 1995, she discovered the Success By 6 initiative in Minneapolis and brought the model to United Way of Central Florida, forming a "Blue Ribbon Committee" of local CEOs to drive the initiative. From this foundation, she built or championed a series of programs that became her defining legacy:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li><strong>Success By 6</strong> — Brought to Central Florida in 1995; built the organizational structure that endures today</li>
              <li><strong>Family Fundamentals</strong> — A Success By 6 outreach facility supporting young children and families</li>
              <li><strong>ReadingPals</strong> — A literacy volunteer program that spread throughout the state of Florida</li>
              <li><strong>Feed Me a Story</strong> — An early childhood literacy and nutrition initiative</li>
              <li><strong>Master Teachers Program</strong> — Intensive on-the-job training for childcare paraprofessionals, funded under the Success By 6 umbrella</li>
            </ul>
            <h4 className="font-semibold">Major Institutional Gifts (Carol & Barney Barnett)</h4>
            <ul className="list-disc space-y-1 pl-6">
              <li><strong>Carol Jenkins Barnett Pavilion for Women and Children</strong> at Lakeland Regional Health — The largest donation the Foundation had received at the time, creating a landmark facility including a Level III Neonatal Intensive Care Unit</li>
              <li><strong>Barney Barnett School of Business and Free Enterprise</strong> at Florida Southern College — An undisclosed contribution in honor of Barney, a 1965 FSC graduate; the school now holds AACSB accreditation (earned by less than 6% of business programs worldwide) and ranks among the top undergraduate business programs nationally</li>
              <li><strong>Barnett Residential Life Center</strong> at Florida Southern College — A reported $10 million gift for student housing designed by Robert A.M. Stern Architects</li>
              <li><strong>Carol Jenkins Barnett Center for Early Childhood Learning and Health</strong> at Florida Southern College — Created in 2020, bringing together the School of Education and School of Nursing for interdisciplinary early childhood programs</li>
              <li><strong>Carol J. and Barney Barnett Learning Center</strong> at the Florida Aquarium in Tampa — $1 million gift, opened 2014</li>
              <li><strong>All Saints' Academy Learning Center</strong> in Winter Haven — Primary donors in the $5.5 million, 18-classroom facility (opened 2014)</li>
              <li><strong>Mote Marine Laboratory and Aquarium</strong> in Sarasota — $3 million gift (2015) for environmental conservation</li>
              <li><strong>Bonnet Springs Park</strong> — Carol's final philanthropic gift: the founding and primary funding of a 168-acre privately developed public park on a former CSX railyard in Lakeland, which opened in October 2022 and was named USA Today's #1 City Park in 2025</li>
            </ul>
            <p>Additional organizational support included United Way, YMCA, Florida Partnership for School Readiness, Children's Movement of Florida, Habitat for Humanity, Polk Museum of Art, Lakeland Symphony Orchestra, and countless other local and regional nonprofits.</p>
            <h4 className="font-semibold">Barney Barnett: A Parallel Career of Service</h4>
            <p>Hoyt R. "Barney" Barnett began his Publix career in 1969 as an internal auditor in Lakeland. Over a 50-year career — one of only 20 associates to reach that milestone — he rose through the ranks: controller (1977), vice president of administration (1986), executive vice president (1988), and vice chairman (1998). He retired in April 2019 and was named Vice Chairman Emeritus, while remaining on the board of Publix Super Markets Charities.</p>
            <p>Barney's civic recognition reflects the couple's shared commitment:</p>
            <p>In 2026, the Florida Southern College Barney Barnett School of Business and Free Enterprise established its inaugural <strong>Barnett Business Hall of Fame</strong>, inducting Dr. Barney Barnett '65 in the Class of 2026 for his family's transformational philanthropy.</p>
            <h4 className="font-semibold">Honors and Recognition (Carol Jenkins Barnett)</h4>
            <div className="rounded-xl border border-stone-200 p-4">
              <label className="block text-sm font-medium">Filter honors/recognition</label>
              <input
                value={honorQuery}
                onChange={(e) => setHonorQuery(e.target.value)}
                placeholder="Search by keyword (e.g., 2016, literacy, award)"
                className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2"
              />
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h5 className="font-semibold">Carol Jenkins Barnett</h5>
                  <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
                    {filteredCarolHonors.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold">Barney Barnett</h5>
                  <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
                    {filteredBarneyHonors.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <p>Carol was diagnosed with early-onset Alzheimer's disease in 2016. She passed away on December 7, 2021, at the age of 65, in her home, surrounded by her family. Publix CEO Todd Jones said she "had a generous heart and compassionate soul" and that "her efforts will continue to improve the lives of others for generations."</p>
          </article>

          <article className="space-y-3">
            <h3 className="text-xl font-semibold">Generation Three: Wesley Barnett & Ashley Bell Barnett</h3>
            <h4 className="font-semibold">Formation</h4>
            <p>Wesley Barnett grew up in Lakeland, steeped in the values and institutions his grandfather built and his mother championed. He graduated from All Saints Academy in 2004 — the same school his parents helped expand — before earning a Bachelor of Science in Finance from Wake Forest University's Calloway School of Business (2008) and a Master of Business Administration from UCLA Anderson School of Management (2015).</p>
            <h4 className="font-semibold">Philanthropic Leadership: Continuity and Evolution</h4>
            <p>Wesley and Ashley's giving reflects both continuity with the family's historic commitments and a strategic evolution toward structured, catalytic philanthropy. Their approach emphasizes access expansion, institutional strengthening, and long-duration impact.</p>
            <h5 className="font-semibold">Healthcare</h5>
            <ul className="list-disc space-y-1 pl-6">
              <li><strong>Moffitt Cancer Center — $10 million gift</strong> (announced February 2026, with Ashley Bell Barnett): Anchoring the construction of Moffitt's new Central Florida Campus, a 34-acre outpatient center on Bartow Road in Lakeland that will bring cancer screenings, diagnostic imaging, infusion services, medical oncology, radiation therapy, and clinical trials to Polk County. The facility — coupled with a partial land donation from the Rogers family — is scheduled to open in 2029 with expansion plans already underway, including a surgery center and a wellness and research educational center. Ashley serves on the Moffitt Cancer Center Foundation Board.</li>
              <li><strong>Carol Jenkins Barnett Pavilion for Women and Children – South</strong> at Lakeland Regional Health: The Barnett family announced a transformational lead gift (April 2025) to support this new ambulatory pavilion extending access to specialized care for women and children along Highway 98 South in Lakeland. The facility anchors a $50 million campaign, with the Barnett and Pou families already reaching the halfway mark. Barney Barnett was named the 2025 Sarah D. McKay Advocate of the Year, and the entire Barnett Family was named Philanthropists of the Year at Lakeland Regional Health's annual celebration.</li>
            </ul>
            <h5 className="font-semibold">Higher Education and STEM</h5>
            <ul className="list-disc space-y-1 pl-6">
              <li><strong>Barnett Applied Research Center (BARC)</strong> at Florida Polytechnic University: The Barnett family's contributions exceeding $10 million led to the naming of the 85,000+ square-foot research facility (approved by the Board of Trustees, September 2023). The BARC houses research and teaching laboratories, student design spaces, and a dedicated section for commercialization of innovation. Wesley has described the family's vision for Florida Poly as "an epicenter of innovation, producing top talent and pioneering research that will create progress and attract strong companies."</li>
              <li><strong>Polk State College</strong>: Active engagement in institutional health and governance conversations, with a focus on enrollment growth, structural sustainability, and regional access. Ashley Bell Barnett serves on the Polk State College District Board of Trustees.</li>
              <li><strong>Florida Southern College</strong>: Continued family engagement with the institution that shaped both Carol and Barney's lives. Nick Barnett '18 (MBA) received the inaugural <strong>Southern Trailblazer Award</strong> from the Barney Barnett School of Business in 2026.</li>
            </ul>
            <h5 className="font-semibold">Civic Infrastructure</h5>
            <ul className="list-disc space-y-1 pl-6">
              <li><strong>Bonnet Springs Park</strong>: Wesley is a founding member and board member, carrying forward his mother's final philanthropic vision. The park's long-term sustainability is supported by the <strong>Carol Jenkins Barnett Endowment Fund</strong>, managed through GiveWell Community Foundation, with a two-to-one match on gifts from founding donors.</li>
              <li><strong>GiveWell Community Foundation</strong>: Board service, supporting structured, donor-advised and community-based philanthropy across Polk, Hardee, and Highlands counties.</li>
              <li><strong>Children's Movement of Florida</strong>: Board service, continuing Carol's advocacy legacy for early childhood education at the state level.</li>
            </ul>
            <h5 className="font-semibold">Ashley Bell Barnett: A Philanthropic Partner</h5>
            <p>Ashley Bell Barnett — daughter of Florida State Representative Melony Bell — brings her own leadership profile to the family's work. She holds a Master of Public Administration from the University of South Florida and a bachelor's degree from Florida Southern College. A former teacher, she serves on multiple boards, including:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li><strong>Florida Board of Governors</strong> (appointed November 2023) — Overseeing Florida's State University System</li>
              <li><strong>Moffitt Cancer Center Foundation Board</strong></li>
              <li><strong>Polk State College District Board of Trustees</strong></li>
              <li><strong>Southwest Florida Water Management District</strong></li>
              <li><strong>United Way of Central Florida Board of Directors</strong></li>
              <li><strong>Lakeland Regional Hospital Foundation Board</strong></li>
              <li><strong>Talbot House Ministries Board</strong></li>
              <li>Chairwoman, <strong>Polk Type One Diabetes Support Group</strong></li>
            </ul>
            <p>She is a graduate of Leadership Polk (Class XII), Leadership Florida Education (Class III), and Leadership Los Angeles (Class VI).</p>
          </article>
        </section>

        <section id="investment" className="space-y-3 rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">II. Investment Leadership</h2>
          <h3 className="text-lg font-semibold">TampaBay.Ventures</h3>
          <ul className="list-disc pl-6">
            <li>Founding Partner</li>
            <li>Focus: Early-stage seed capital and regional venture investment</li>
            <li>Emphasis on fostering economic growth within Florida</li>
            <li>Strategic interest in scalable companies with long-term regional impact</li>
          </ul>
          <h3 className="text-lg font-semibold">Barnett Family Partners</h3>
          <ul className="list-disc pl-6">
            <li>Founder and Executive Chairman</li>
            <li>A family office with three family owners and a paid CEO</li>
            <li>Key employees include David Ward (Executive Director/President) and Chad Corbitt (Chief Analyst and Venture Lead)</li>
            <li>Oversees capital allocation strategy across philanthropic and private investments</li>
          </ul>
          <h3 className="text-lg font-semibold">Lakeland Hospitality Group</h3>
          <ul className="list-disc pl-6">
            <li>President</li>
            <li>Operates SpringHill Suites in Lakeland</li>
            <li>Regional hospitality and real estate operations</li>
          </ul>
          <h3 className="text-lg font-semibold">Investment Philosophy</h3>
          <ul className="list-disc pl-6">
            <li>Long-duration thinking aligned with the family's multigenerational perspective</li>
            <li>Regional ecosystem building over transactional returns</li>
            <li>Institutional strengthening through governance-driven decision-making</li>
            <li>Blending financial returns with measurable community impact</li>
            <li>Place-based capital deployment concentrated in Polk County and Central Florida</li>
          </ul>
        </section>

        <section id="governance" className="space-y-3 rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">III. Governance & Strategic Philosophy</h2>
          <p>Wesley's philanthropic and investment approach reflects five defining themes, each rooted in the family's multigenerational experience:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>Institutional Strengthening</strong> — Preference for building durable organizations rather than episodic projects. From George Jenkins's decision to fund his foundation with Publix stock — ensuring it would grow with the company — to Wesley's vision for the Barnett Applied Research Center as a permanent innovation engine, the family consistently invests in institutions designed to outlast any individual donor.</li>
            <li><strong>Access Over Prestige</strong> — Expanding access to care, education, and opportunity at the regional level. The Moffitt Cancer Center expansion — bringing clinical trials and tertiary cancer care to Polk County — exemplifies this principle, as does the family's sustained investment in Polk State College and the new Lakeland Regional Health pavilion along Highway 98 South.</li>
            <li><strong>Long-Term Orientation</strong> — Focus on 10–30 year outcomes rather than annual cycles. Bonnet Springs Park, which took roughly seven years from land acquisition to opening, and which is now supported by a permanent endowment, represents the family's characteristic patience with large-scale projects.</li>
            <li><strong>Structured Philanthropy</strong> — Transitioning from reactive giving to defined priorities, governance frameworks, impact measurement, and strategic partnerships. The Carol Jenkins Barnett Endowment at Bonnet Springs Park — structured through GiveWell Community Foundation with a two-to-one match — illustrates this approach.</li>
            <li><strong>Family Integration</strong> — Engaging the next generation intentionally while balancing legacy with evolution. Wesley and Ashley's two children — Raleigh (b. 2015) and Birdie (b. 2019) — represent the fourth generation of the Jenkins-Barnett philanthropic tradition.</li>
          </ol>
        </section>

        <section id="lineage" className="space-y-3 rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">IV. Barnett Family Lineage: Paternal Side</h2>
          <p>The Barnett family's roots in the American South predate its connection to the Jenkins legacy by generations, with a tradition of academic distinction and faith-based service.</p>
          <h3 className="text-lg font-semibold">Ira Robinson Barnett</h3>
          <p>Ira Robinson Barnett received the <strong>Founders Medal from Vanderbilt University in 1904</strong> — the university's highest academic honor for an undergraduate student. This distinction places the Barnett family within the tradition of Southern academic and civic leadership well before the Publix era.</p>
          <h3 className="text-lg font-semibold">Rev. Robert Howren Barnett</h3>
          <p>Rev. Robert Howren Barnett was a Methodist minister whose ministry and family connections anchor the Barnett line's faith heritage. The family's Methodist roots run through circuit riders and denominational traditions that shaped both their identity and their commitment to community service.</p>
          <h3 className="text-lg font-semibold">The Line Forward</h3>
          <p>Hoyt R. "Barney" Barnett was born in 1944. He attended Florida Southern College, graduating in 1965, and served in the U.S. Coast Guard Reserve from 1965 to 1971 before joining Publix as an internal auditor in 1969. His 50-year career at Publix and his marriage to Carol Jenkins Barnett intertwined the Barnett family line with the Jenkins legacy, creating the multigenerational philanthropic partnership that defines the family's work today.</p>
          <p><em>Further genealogical research into the Barnett paternal lineage is ongoing.</em></p>
        </section>

        <section id="legacies" className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">V. Named Institutional Legacies: A Summary</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm">
              <span className="font-medium">Filter by family generation</span>
              <select className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" value={legacyFilter} onChange={(e) => setLegacyFilter(e.target.value)}>
                {legacyGenerations.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              <span className="font-medium">Sort by</span>
              <select className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" value={legacySort} onChange={(e) => setLegacySort(e.target.value as "institution" | "generation")}>
                <option value="institution">Institution (A–Z)</option>
                <option value="generation">Family Generation (A–Z)</option>
              </select>
            </label>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-100 text-left">
                  <th className="border border-stone-200 px-3 py-2">Institution</th>
                  <th className="border border-stone-200 px-3 py-2">Named Gift / Legacy</th>
                  <th className="border border-stone-200 px-3 py-2">Family Generation</th>
                </tr>
              </thead>
              <tbody>
                {filteredLegacyRows.map((row) => (
                  <tr key={`${row.institution}-${row.legacy}`}>
                    <td className="border border-stone-200 px-3 py-2">{row.institution}</td>
                    <td className="border border-stone-200 px-3 py-2">{row.legacy}</td>
                    <td className="border border-stone-200 px-3 py-2">{row.generation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="civic" className="space-y-3 rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">VI. Broader Civic & Community Engagement</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li><strong>United Way of Central Florida</strong> — Three generations of leadership, from George Jenkins's early support to Carol's transformation of the organization through Success By 6, to Ashley's current board service</li>
            <li><strong>Habitat for Humanity</strong> — Over $10 million directed through Publix Super Markets Charities under Carol's leadership</li>
            <li><strong>Children's Movement of Florida</strong> — Board service (Wesley and Ashley)</li>
            <li><strong>Regional economic development</strong> — Through TampaBay.Ventures, Lakeland Hospitality Group, and family office investments</li>
            <li><strong>Education reform</strong> — Active engagement in enrollment strategy and governance at Polk State College and the Florida Board of Governors</li>
          </ul>
        </section>

        <section id="publix" className="space-y-3 rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">VII. Publix Super Markets: The Family's Economic Foundation</h2>
          <p>Publix was founded in 1930 in Winter Haven, with headquarters relocated to Lakeland in 1945. Today, Publix is the largest employee-owned company in the United States, with approximately 1,432 stores, 260,000 employees, and $59.7 billion in revenue (2024). The Jenkins family retains approximately 20% ownership.</p>
          <p>The company's culture of giving — embedded by George Jenkins and institutionalized through Publix Super Markets Charities — continues to generate philanthropic impact at scale, supporting communities across seven southeastern states. Carol Jenkins Barnett's 25-year tenure as president of Publix Super Markets Charities (1991–2016) directed hundreds of millions of dollars to causes including housing, food security, education, and youth programs.</p>
        </section>

        <section id="personal" className="space-y-3 rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">VIII. Personal Context</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Husband to Ashley Bell Barnett</li>
            <li>Father of two: Raleigh (b. 2015) and Birdie (b. 2019)</li>
            <li>Brother to Nicholas Barnett (Ashley Gibson Barnett); their children include Zoey (b. 2021)</li>
            <li>Deeply rooted in Central Florida with an expanding presence in South Carolina</li>
            <li>Graduate of All Saints Academy (2004), Wake Forest University (BS Finance, 2008), and UCLA Anderson School of Management (MBA, 2015)</li>
            <li>Focused on aligning family, capital, and mission across generations</li>
          </ul>
        </section>

        <section id="summary" className="space-y-3 rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">IX. Summary</h2>
          <p>Wesley Barnett carries forward a philanthropic tradition that began when his grandfather George W. Jenkins funded a charitable foundation with his own Publix stock in 1966 — ensuring that the company's growth would permanently fuel community giving. His mother, Carol Jenkins Barnett, took that foundation and built upon it for 25 years, championing early childhood education and directing hundreds of millions of dollars to communities across the Southeast, before making Bonnet Springs Park her final gift to the city of Lakeland.</p>
          <p>Now, Wesley and Ashley Bell Barnett are writing the next chapter: a $10 million commitment to bring Moffitt Cancer Center to Polk County, a lead gift to expand women's and children's healthcare through a second Carol Jenkins Barnett Pavilion, over $10 million to Florida Polytechnic University to build STEM infrastructure, and sustained governance engagement across a dozen civic and educational institutions.</p>
          <p>The through-line across three generations is remarkably consistent: place-based commitment, institutional strengthening, access expansion, and the conviction — first articulated by George Jenkins — that an organization's success is inseparable from the well-being of the communities it serves.</p>
        </section>
      </main>
    </div>
  );
}
