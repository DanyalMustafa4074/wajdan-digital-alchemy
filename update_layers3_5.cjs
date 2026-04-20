const fs = require('fs');
let code = fs.readFileSync('src/pages/Services.tsx', 'utf-8');

// Replace Layer 03
const layer3Replacement = `          <SystemLayerDetail
            number="03"
            title="GHL Workspace Config."
            subtitle="The Net That Catches Everything."
            description="If you don't track it, you can't close it. And if you rely on staff to manually follow up with every lead, you are burning money. The human follow-up fails because humans have calendars. Software doesn't. Our GHL automation is the backbone of the system. Every lead captured. Every prospect nurtured. Every outcome tracked."
            features={[
              {
                icon: <Database className="w-6 h-6" />,
                title: "GHL Account Setup",
                description: "Full workspace configuration, custom pipelines, tagged stages. Built specifically for immigration."
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: "Automated Nurture Sequences",
                description: "SMS & Email flows triggered the second a form is submitted."
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Missed-Call Text Back",
                description: "Instantly messages anyone who calls your office while your staff is busy."
              },
              {
                icon: <Bell className="w-6 h-6" />,
                title: "Appointment Reminders",
                description: "24h, 2h, and 15m automated reminders. Drops no-shows to near zero."
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Review Management",
                description: "Automated request to satisfied clients to boost your Google My Business ranking."
              },
              {
                icon: <UserCheck className="w-6 h-6" />,
                title: "Staff Training & Handover",
                description: "We don't just build it. We teach your team how to use it."
              }
            ]}
            ctaText="Automate My Backend"
            color="green"
          />`;

// Replace Layer 04
const layer4Replacement = `          <SystemLayerDetail
            number="04"
            title="Meta Ads + Retargeting."
            subtitle="Fuel For The Engine."
            description="You don't need 'more followers' and you don't need 'brand awareness'. You need people sitting in front of you with their credit cards. We build direct-response Meta campaigns designed for one outcome: pushing qualified traffic into the funnel we just built. We run the traffic. The offer gets the click. The funnel books the call. The automation gets them to show up."
            features={[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Campaign Strategy",
                description: "Objective-driven ad strategy using CBOs and precise audience segmentation."
              },
              {
                icon: <Palette className="w-6 h-6" />,
                title: "Ad Creative & Copy",
                description: "Scrolling-stopping visuals combined with direct-response copywriting."
              },
              {
                icon: <RotateCw className="w-6 h-6" />,
                title: "Retargeting Architecture",
                description: "Specific ad sequences tailored for people who clicked but didn't book."
              },
              {
                icon: <Link2 className="w-6 h-6" />,
                title: "Meta Pixel & CAPI Implementation",
                description: "Server-side tracking to ensure no data is lost to iOS updates."
              },
              {
                icon: <FlaskConical className="w-6 h-6" />,
                title: "A/B Split Testing",
                description: "Continuous testing of hooks, headlines, and creatives to lower acquisition costs."
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Weekly Performance Alignment",
                description: "Transparent reporting. We show you the cost per booking, not vanity metrics."
              }
            ]}
            ctaText="Start Getting Leads"
            color="orange"
            reversed={true}
          />`;

// Replace Layer 05
const layer5Replacement = `          <SystemLayerDetail
            number="05"
            title="Data Loops + Analytics."
            subtitle="The Truth Dashboard."
            description="Agencies hide behind 'Impressions' and 'Reach' because they can't show you ROI. We don't care about impressions. We care about cost per closed deal. We build a custom reporting dashboard that tracks every single dollar. From the first ad click, to the VSL view, to the booked call, to the closed client. And more importantly, we feed that closed-won data back to Meta so the algorithm gets smarter every single day."
            features={[
              {
                icon: <Layout className="w-6 h-6" />,
                title: "Custom GHL Dashboard",
                description: "One screen that shows total spend, total leads, total bookings, and total pipeline value."
              },
              {
                icon: <RotateCw className="w-6 h-6" />,
                title: "CRM-to-Meta Data Loop",
                description: "Offline conversion tracking directly from your CRM back to Meta."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "UTM & Attribution Setup",
                description: "Knowing exactly which ad produced which booked appointment."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Drop-off Analysis",
                description: "Tracking exactly where people leave the funnel so we can patch the holes."
              },
              {
                icon: <PieChart className="w-6 h-6" />,
                title: "LTV Tracking",
                description: "Understanding the true lifetime value of a client, not just the initial consult fee."
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Blind-Spot Elimination",
                description: "Total financial transparency. You will always know if your marketing is profitable."
              }
            ]}
            ctaText="Track Every Dollar"
            color="purple"
          />`;

code = code.replace(/<SystemLayerDetail\s*number="03"[\s\S]*?(?=<SystemLayerDetail\s*number="04")/, layer3Replacement + '\n\n');
code = code.replace(/<SystemLayerDetail\s*number="04"[\s\S]*?(?=<SystemLayerDetail\s*number="05")/, layer4Replacement + '\n\n');
code = code.replace(/<SystemLayerDetail\s*number="05"[\s\S]*?(?=<\/div>\s*<\/div>\s*\{\/\* Scroll indicator)/, layer5Replacement + '\n        ');

fs.writeFileSync('src/pages/Services.tsx', code);
console.log("Updated Layers 03, 04, and 05");
