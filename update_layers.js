const fs = require('fs');
let code = fs.readFileSync('src/pages/Services.tsx', 'utf-8');

const replacement = `          <SystemLayerDetail
            number="01"
            title="The Offer."
            subtitle="The Sauce That Waters Every Client's Mouth."
            description="Most agencies start with the ad. We start with what the ad is selling. Because an ad for a bad offer is just expensive noise. Your leads are not bad because your targeting is wrong. They are not bad because your creative is weak. Your leads are bad because your offer is not compelling enough to attract serious people. An offer is not your service. An offer is what your ideal client is desperately searching for — phrased in their language, solving their exact pain — that nobody else in your market is giving them."
            features={[
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
              }
            ]}
            ctaText="Get Your Offer Built"
            color="red"
          />

          <SystemLayerDetail
            number="02"
            title="Landing Page + VSL."
            subtitle="Not a Template. The Ambush."
            description="By the time your prospect fills the form — they should already trust you, believe in your system, and be half-sold. If that's not happening, your funnel is a speed bump, not a conversion machine. Most landing pages in this industry are embarrassing. A headline. A stock photo. Three bullet points. A form. A Submit button. And everyone wonders why conversion rate is 8%. A real consultation funnel is an experience — not a page."
            stats={[
              { value: "3×", label: "higher booking rate vs generic pages" },
              { value: "84%", label: "show rate after VSL + pre-nurture" },
              { value: "40%", label: "drop in cost per qualified booking" }
            ]}
            features={[
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
              }
            ]}
            ctaText="Build My Funnel"
            color="blue"
            reversed={true}
          />
`;

code = code.replace(/<SystemLayerDetail\s*number="01"[\s\S]*?(?=<SystemLayerDetail\s*number="03")/, replacement);
fs.writeFileSync('src/pages/Services.tsx', code);
console.log("Successfully rebuilt layers 01 and 02.");
