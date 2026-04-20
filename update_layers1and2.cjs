const fs = require('fs');
let code = fs.readFileSync('src/pages/Services.tsx', 'utf-8');

// Replace layer 1 description
code = code.replace(/description="Most agencies start with the ad[\s\S]*?(?=\s+features=\{\[)/, 
`description="Most agencies start with the ad. We start with what the ad is selling. Because an ad for a bad offer is just expensive noise. Your leads are not bad because your targeting is wrong. They are not bad because your creative is weak. Your leads are bad because your offer is not compelling enough to attract serious people. An offer is not your service. An offer is what your ideal client is desperately searching for — phrased in their language, solving their exact pain — that nobody else in your market is giving them."`);

// Replace Layer 1 Features
code = code.replace(/features=\{\[\s*\{\s*icon: <Search[\s\S]*?(?=\s+\]\}\s+ctaText="Get Your Offer Built")/g, 
`features={[
              {
                icon: <Search className="w-6 h-6" />,
                title: "Market Research",
                description: "Forums, competitor reviews, client language, real pain points. We find the gap nobody is filling."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Competitor Audit",
                description: "We map what every other consultancy is saying. Then we figure out what they're all missing."
              },
              {
                icon: <PenTool className="w-6 h-6" />,
                title: "Offer Architecture",
                description: "The offer statement, the positioning, the framing — everything your prospect reads before they decide whether to trust you."
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Messaging Framework",
                description: "Every headline, hook, and pain point — in language your ideal client actually uses. Not agency language. Their language."
              },
              {
                icon: <TestTube className="w-6 h-6" />,
                title: "Offer Validation",
                description: "We stress-test the offer before it goes live. Does it survive contact with a real objection? We make sure it does."
              },
              {
                icon: <FileCheck className="w-6 h-6" />,
                title: "Foundation Brief",
                description: "Everything documented and handed to every other part of the system. The offer becomes the DNA of the funnel, the VSL, and the ads."
              }`);

// Layer 2 Description
code = code.replace(/description="By the time your prospect fills the form[\s\S]*?(?=\s+(stats|features)=\{\[)/, 
`description="By the time your prospect fills the form — they should already trust you, believe in your system, and be half-sold. If that's not happening, your funnel is a speed bump, not a conversion machine. Most landing pages in this industry are embarrassing. A headline. A stock photo. Three bullet points. A form. A Submit button. And everyone wonders why conversion rate is 8%. A real consultation funnel is an experience — not a page."`);

// Layer 2 Features
code = code.replace(/features=\{\[\s*\{\s*icon: <Clapperboard[\s\S]*?(?=\s+\]\}\s+ctaText="Build My Funnel")/g,
`features={[
              {
                icon: <Clapperboard className="w-6 h-6" />,
                title: "VSL Script",
                description: "Full word-for-word script. Hook, pain, reframe, system, guarantee, CTA. Written in your voice."
              },
              {
                icon: <Layout className="w-6 h-6" />,
                title: "Landing Page Design",
                description: "Custom designed for your offer and your market. Not a template. Built to convert your specific prospect."
              },
              {
                icon: <PenTool className="w-6 h-6" />,
                title: "Full Copywriting",
                description: "Every headline, subheading, pain point, proof point, and CTA. Written to persuade — not to describe."
              },
              {
                icon: <FormInput className="w-6 h-6" />,
                title: "Qualification Form",
                description: "Smart questions that qualify intent before the prospect reaches your calendar. Only serious people get through."
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Booking Integration",
                description: "Calendar connected, confirmation page built, full flow tested before a single lead hits it."
              },
              {
                icon: <MonitorPlay className="w-6 h-6" />,
                title: "Thank-You Page + Video",
                description: "Post-booking nurture video that reduces no-shows before the day arrives. Most agencies skip this entirely."
              }`);

fs.writeFileSync('src/pages/Services.tsx', code);
console.log("Updated Layers 1 and 2 Features");