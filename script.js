document.addEventListener("DOMContentLoaded", () => {
const merged = {
  name: "Hate Speech Taxonomy",
  definition: "A hierarchical taxonomy that organizes platform policies, country regulations, and hate speech datasets.",
  children: [
    {
      name: "Platform Policy Taxonomy",
      definition: "A multilayer taxonomy describing how platforms define, regulate, enforce, and report hate speech policies.",
      children: [
        {
          "name": "Conceptual",
          "definition": "Clarifies what counts as hate speech and which traits or groups are protected on each platform.",
          "children": [
            {
              "name": "Definition & Scope",
              "definition": "How platforms define hate speech: legalistic, behavior-based, or minimal.",
              "children": [
                { 
                  "name": "Legalistic Definitions",
                  "definition": "Definitions grounded in protected characteristics under international human rights frameworks.",
                  "children": [
                    { "name": "Facebook, TikTok, X/Twitter", "definition": "Platforms using legalistic, rights-based definitions of hate speech." }
                  ]
                },
                { 
                  "name": "Operational Definitions",
                  "definition": "Definitions focused on behaviors such as harassment, incitement, or dehumanization.",
                  "children": [
                    { "name": "Reddit, Bluesky", "definition": "Platforms using behavioral, operational definitions rather than legalistic ones." }
                  ]
                },
                { 
                  "name": "Minimalist Definitions",
                  "definition": "General or vague bans without detailed legal or behavioral criteria.",
                  "children": [
                    { "name": "Gab, Telegram", "definition": "Platforms providing limited or vague definitions focused mainly on illegal content." }
                  ]
                }
              ]
            },
            {
              "name": "Protected Attributes",
              "definition": "The traits that platforms explicitly protect from hate speech.",
              "children": [
                { 
                  "name": "Core Traits",
                  "definition": "Race, religion, gender, sexual orientation—covered by all major platforms.",
                  "children": [
                    { "name": "All platforms", "definition": "Every platform includes a baseline set of core protected attributes." }
                  ]
                },
                { 
                  "name": "Extended Traits",
                  "definition": "Additional traits such as disability, caste, disease, immigration status, or political affiliation.",
                  "children": [
                    { "name": "TikTok, Bluesky, X/Twitter", "definition": "Platforms with broader protections beyond core traits." }
                  ]
                }
              ]
            },
            {
              "name": "Severity Structure",
              "definition": "Whether platforms categorize hate speech by levels of harm.",
              "children": [
                { 
                  "name": "Tiered",
                  "definition": "Multiple severity levels (e.g., dehumanization, exclusion, insults).",
                  "children": [
                    { "name": "Facebook", "definition": "Uses Tier 1, Tier 2, and Tier 3 to classify hate speech severity." }
                  ]
                },
                { 
                  "name": "Flat",
                  "definition": "A single standard for all hate speech without tiering.",
                  "children": [
                    { "name": "Reddit, Telegram", "definition": "Platforms applying a flat enforcement standard." }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Normative Expression vs. Protection",
          "definition": "Shows how platforms balance free expression with user protection from harmful speech.",
          "children": [
            {
              "name": "Balancing Principle",
              "definition": "The platform’s guiding philosophy: safety-first, context-aware, or expression-focused.",
              "children": [
                { 
                  "name": "Safety-Oriented",
                  "definition": "Prioritizes user protection; proactively removes harmful content.",
                  "children": [
                    { "name": "Facebook, TikTok", "definition": "Platforms adopting strong safety-first moderation approaches." }
                  ]
                },
                { 
                  "name": "Contextual Balance",
                  "definition": "Moderation decisions consider satire, reporting, education, and intent.",
                  "children": [
                    { "name": "Reddit, Bluesky, X", "definition": "Platforms considering contextual cues before acting against content." }
                  ]
                },
                { 
                  "name": "Expression-Oriented",
                  "definition": "Prioritizes free speech; restricts mostly illegal content.",
                  "children": [
                    { "name": "Gab, Telegram", "definition": "Platforms leaning heavily toward maximum speech and minimal intervention." }
                  ]
                }
              ]
            },
            {
              "name": "Context Sensitivity",
              "definition": "How much platforms account for context, such as reclaimed slurs or satire.",
              "children": [
                { 
                  "name": "High",
                  "definition": "Allows exceptions based on context and intent.",
                  "children": [
                    { "name": "Facebook, Reddit", "definition": "Platforms formally applying contextual interpretation in their guidelines." }
                  ]
                },
                { 
                  "name": "Low",
                  "definition": "No formal consideration of context; speech judged at face value.",
                  "children": [
                    { "name": "Gab, Telegram", "definition": "Platforms using minimal contextual judgment." }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Governance",
          "definition": "How platforms enforce hate speech rules through human, automated, or decentralized systems.",
          "children": [
            {
              "name": "Moderation Architecture",
              "definition": "The systems and actors responsible for identifying and reviewing violations.",
              "children": [
                { 
                  "name": "Hybrid (AI + Human)",
                  "definition": "Automated detection combined with human review.",
                  "children": [
                    { "name": "Facebook, TikTok, Reddit", "definition": "Use significant automation plus human moderation." }
                  ]
                },
                { 
                  "name": "Human-Centric",
                  "definition": "Moderation mainly through manual review and user reports.",
                  "children": [
                    { "name": "Gab, Telegram", "definition": "Platforms relying on manual reporting and limited automation." }
                  ]
                },
                { 
                  "name": "User-Customizable",
                  "definition": "Users choose their own moderation filters or labeling services.",
                  "children": [
                    { "name": "Bluesky", "definition": "Offers decentralized, user-defined moderation services." }
                  ]
                }
              ]
            },
            {
              "name": "Enforcement Actions",
              "definition": "The punishment or corrective action applied to violating accounts or content.",
              "children": [
                { 
                  "name": "Graduated Sanctions",
                  "definition": "Tiered enforcement: warnings, strikes, demotion, suspension.",
                  "children": [
                    { "name": "Twitter/X, TikTok", "definition": "Platforms applying multiple sanction stages." }
                  ]
                },
                { 
                  "name": "Community Enforcement",
                  "definition": "Moderation handled by community moderators.",
                  "children": [
                    { "name": "Reddit", "definition": "Local subreddit moderators handle majority of enforcement." }
                  ]
                },
                { 
                  "name": "Centralized Removal",
                  "definition": "Platform administrators directly remove violating content.",
                  "children": [
                    { "name": "Telegram", "definition": "Primarily admin-led enforcement in public channels." }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Behavioral Proactivity & Counterspeech",
          "definition": "How actively platforms work to prevent, reduce, or respond to hate speech.",
          "children": [
            { 
              "name": "Proactive",
              "definition": "Platforms prevent harm via AI detection, education, and counterspeech.",
              "children": [
                { "name": "TikTok, Facebook", "definition": "Use proactive moderation, demotion, and safety campaigns." }
              ]
            },
            { 
              "name": "Reactive",
              "definition": "Platforms act only after violations are reported.",
              "children": [
                { "name": "Reddit, Gab", "definition": "Primarily respond to user reports or after-the-fact violations." }
              ]
            },
            { 
              "name": "User Empowerment",
              "definition": "Tools for muting, filtering, or customizing content to reduce exposure to hate.",
              "children": [
                { "name": "Bluesky, TikTok", "definition": "Offer strong customization and user-controlled filters." }
              ]
            }
          ]
        },
        {
          "name": "Transparency Accountability & Data Access",
          "definition": "How open platforms are about moderation activity and what data they provide to researchers.",
          "children": [
            { 
              "name": "High Transparency",
              "definition": "Regular enforcement reports, research APIs, and structured oversight.",
              "children": [
                { "name": "Meta, TikTok", "definition": "Platforms with strong reporting and oversight mechanisms." }
              ]
            },
            { 
              "name": "Moderate Transparency",
              "definition": "Some public reports and partial data access.",
              "children": [
                { "name": "Reddit, X", "definition": "Provide limited reports and restricted data access." }
              ]
            },
            { 
              "name": "Low Transparency",
              "definition": "Little or no structured reporting or external accountability.",
              "children": [
                { "name": "Gab, Telegram", "definition": "Platforms with minimal transparency or open data." }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Country Regulation Taxonomy",
      definition: "A collection of regulations that countries have proclaimed regarding hate speech",
      children: [
        {
          "name": "Exceptional Cases",
          "definition": "Certain exceptions exist under which expressions, though offensive or provocative, are not legally defined as hate speech",
          "children": [
            {
              "name": "Subject to Exception",
              "definition": "Regulations that include exception clauses allowing certain expressions not to be defined as hate speech",
              "children": [
                { "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia" }
              ]
            },
            {
              "name": "Not Subject to Exception",
              "definition": "Regulations without exception clauses allowing expression to escape hate-speech designation",
              "children": [
                { "name": "Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark" }
              ]
            }
          ]
        },
        {
          "name": "Punishment",
          "definition": "Legal consequences a country applies for hate-speech violations",
          "children": [
            {
              "name": "Corrective Measures",
              "definition": "Educational or rehabilitative actions such as awareness training, counseling, or mandated apology",
              "children": [
                { "name": "United States of America, Canada, South Africa, France, Germany, Australia, Victoria (Australia), Sudan, India, Brazil, Venezuela" }
              ]
            },
            {
              "name": "Fines",
              "definition": "Monetary penalties for hate-speech violations",
              "children": [
                { "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark" }
              ]
            },
            {
              "name": "Imprisonment",
              "definition": "Criminal punishment involving detention",
              "children": [
                { "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark" }
              ]
            },
            {
              "name": "Death",
              "definition": "Capital punishment applied in extreme hate-incitement or hate-crime cases",
              "children": [
                { "name": "Sudan, Uganda, Nigeria" }
              ]
            }
          ]
        },
        {
          "name": "Intent / Guilt",
          "definition": "Determines the mental state of the person responsible for hate speech",
          "children": [
            {
              "name": "Vicarious or Organizational",
              "definition": "Organizations are legally responsible for hate speech committed by their employees or agents",
              "children": [
                { "name": "United Arab Emirates, United Kingdom, Scotland, Wales, South Africa" }
              ]
            },
            {
              "name": "Negligent or Reckless",
              "definition": "The speaker did not intend harm but acted irresponsibly, causing foreseeable harm",
              "children": [
                { "name": "Sweden, Denmark" }
              ]
            },
            {
              "name": "Intentional",
              "definition": "Speech delivered with the purpose of causing hatred, discrimination, or violence",
              "children": [
                { "name": "Ethiopia, Kenya, Sudan, Uganda, Nigeria, Egypt, India, China, United States of America, Canada, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru" }
              ]
            }
          ]
        },
        {
          "name": "Severity / Harm Level",
          "definition": "The seriousness of the hate-speech act and its potential or actual harm",
          "children": [
            {
              "name": "Criminal / Aggravated",
              "definition": "Severe crimes including incitement to violence or repeated large-scale harm",
              "children": [
                { "name": "Sudan, Uganda, Nigeria, South Africa, United Arab Emirates, China, Russia, United Kingdom, Scotland, Wales, Brazil, Venezuela" }
              ]
            },
            {
              "name": "Criminal / Minor",
              "definition": "Lower-level crimes such as slurs, insults, or limited distribution",
              "children": [
                { "name": "Ethiopia, Kenya, Egypt, India, Italy, Germany, Canada, Victoria (Australia), Peru, Hungary" }
              ]
            },
            {
              "name": "Minor / Misdemeanor",
              "definition": "Low-level harm such as offensive or insulting expressions",
              "children": [
                { "name": "France, Belgium, Sweden, Denmark, Australia, United States of America" }
              ]
            }
          ]
        },
        {
          "name": "Expression Medium",
          "definition": "The channel used to deliver the hate speech",
          "children": [
            {
              "name": "Broadcast or Audiovisual Media",
              "definition": "Television, radio, film, news broadcasts",
              "children": [
                { "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark" }
              ]
            },
            {
              "name": "Symbolic Acts",
              "definition": "Non-verbal hateful acts such as extremist symbols, flag burning, or gestures",
              "children": [
                { "name": "Germany, South Africa, France, Belgium, United Kingdom, Victoria (Australia), Australia, Brazil, Venezuela" }
              ]
            },
            {
              "name": "Online or Digital Platforms",
              "definition": "Social media, websites, digital forums, messaging platforms",
              "children": [
                { "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark" }
              ]
            },
            {
              "name": "Spoken & Written",
              "definition": "Traditional communication including speech, books, magazines, or printed materials",
              "children": [
                { "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark" }
              ]
            }
          ]
        },
        {
          "name": "Protected Characteristics",
          "definition": "Groups or attributes protected from hateful expression",
          "children": [
            {
              "name": "Personal & Social Attributes",
              "definition": "Protection based on socioeconomic class, profession, age, political affiliation, or cultural traits",
              "children": [
                { "name": "United States of America, Egypt, South Africa, United Arab Emirates, Canada, Scotland, Russia, Germany, Sweden, Denmark, Venezuela, Peru" }
              ]
            },
            {
              "name": "Disability / Health Status",
              "definition": "Protection from hate speech targeting physical, sensory, or mental disabilities or health conditions",
              "children": [
                { "name": "Ethiopia, South Africa, United Arab Emirates, Canada, Scotland, France, Sweden, Belgium, Australia, Victoria (Australia), Peru" }
              ]
            },
            {
              "name": "Gender / Sexual Orientation",
              "definition": "Protection for gender identity, sexual orientation, and LGBTQ+ groups",
              "children": [
                { "name": "Ethiopia, South Africa, Canada, United Kingdom, Scotland, Wales, Uganda, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark" }
              ]
            },
            {
              "name": "Religion / Belief System",
              "definition": "Protection for religious groups, belief systems, non-belief identities",
              "children": [
                { "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, Canada, United Kingdom, Scotland, Wales, Russia, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark" }
              ]
            },
            {
              "name": "Race / Ethnicity / Nationality",
              "definition": "Protection for racial groups, ethnic identities, and national-origin categories",
              "children": [
                { "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark" }
              ]
            }
          ]
        },
        {
          "name": "Legal Basis",
          "definition": "The type of law used to regulate hate speech",
          "children": [
            {
              "name": "Specialized",
              "definition": "Standalone hate-speech acts or specific hate-crime legislation",
              "children": [
                { "name": "France, Kenya, India" }
              ]
            },
            {
              "name": "Administrative",
              "definition": "Regulated through administrative law, media authorities, or communication regulations",
              "children": [
                { "name": "Germany, Finland, Nigeria, Sudan, Egypt, China, United Arab Emirates, Australia, Venezuela, Peru, France, Russia" }
              ]
            },
            {
              "name": "Civil / Equality",
              "definition": "Regulated under civil rights, anti-discrimination, or equality laws",
              "children": [
                { "name": "United Kingdom, Finland, Sweden, Canada, South Africa, Uganda, Ethiopia, Kenya, Victoria (Australia), Russia, United States of America" }
              ]
            },
            {
              "name": "Criminal",
              "definition": "Regulated through criminal codes, including imprisonment and fines",
              "children": [
                { "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark, United States of America" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Hate Speech Dataset Taxonomy",
      definition: "A hierarchical taxonomy of hate speech datasets across 6 validated levels.",
      children: [
        {
          name: "Source",
          definition: "Where the dataset content was collected from.",
          children: [
            {
              name: "Social Media Platforms",
              children: [
                {
                  name: "Twitter / X",
                  children: [
                    {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                    {"id": 2, "name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
                    {"id": 6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
                    {"id": 7, "name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"},
                    {"id": 8, "name": "Exploring Amharic Hate Speech Data Collection and Classification Approaches"},
                    {"id": 12, "name": "Towards Explainable Hate Speech Detection"},
                    {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
                    {"id": 19, "name": "Target-Based Offensive Language Identification"},
                    {"id": 23, "name": "Large-Scale Hate Speech Detection with Cross-Domain Transfer"},
                    {"id": 24, "name": "Multilingual and Multitarget Hate Speech Detection in Tweets"},
                    {"id": 22, "name": "A Multi-Modal Dataset for Hate Speech Detection on Social Media: Case-study of Russia-Ukraine Conflict"}
                  ]
                },
                {
                  name: "Facebook",
                  children: [
                    {"id": 9, "name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"}
                  ]
                },
                {
                  name: "Instagram",
                  children: [
                    {"id": 11, "name": "HateBRXplain: A Benchmark Dataset with Human-Annotated Rationales for Explainable Hate Speech Detection in Brazilian Portuguese"},
                    {"id": 29, "name": "Hate Speech Classifiers are Culturally Insensitive"}
                  ]
                },
                {
                  name: "Telegram",
                  children: [
                    {"id": 9, "name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"}
                  ]
                },
                {
                  name: "Reddit",
                  children: [
                    {"id": 14, "name": "Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"},
                    {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"}
                  ]
                },
                {
                  name: "Gab",
                  children: [
                    {"id": 10, "name": "HateXplain: A Benchmark Dataset for Explainable Hate Speech Detection"},
                    {"id": 28, "name": "AbuseAnalyzer: Abuse Detection, Severity and Target Prediction for Gab Posts"}
                  ]
                }
              ]
            },
            {
              name: "Online Discussion Forums",
              children: [
                {
                  name: "General Online Forums",
                  children: [
                    {"id": 26, "name": "Hate Speech Classification in Bulgarian"}
                  ]
                },
                {
                  name: "Zhihu",
                  children: [
                    {"id": 30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
                  ]
                },
                {
                  name: "Tieba",
                  children: [
                    {"id": 30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
                  ]
                }
              ]
            },
            {
              name: "Video Sharing Platforms",
              children: [
                {
                  name: "YouTube",
                  children: [
                    {"id": 16, "name": "ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"},
                    {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"}
                  ]
                },
                {
                  name: "BitChute & Odysee",
                  children: [
                    {"id": 13, "name": "A Benchmark Dataset and Two-stage Contrastive Learning Framework for Implicit Hate Speech Detection in Videos"}
                  ]
                }
              ]
            },
            {
              name: "Synthetic / Artificial Data",
              children: [
                {"id": 15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"}
              ]
            },
            {
              name: "Web-Crawled Corpora",
              children: [
                {
                  name: "Websites",
                  children: [
                    {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"}
                  ]
                },
                {
                  name: "Common Crawl",
                  children: [
                    {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
                  ]
                },
                {
                  name: "Wikipedia",
                  children: [
                    {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
                  ]
                },
                {
                  name: "News Portals / Newspapers",
                  children: [
                    {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
                  ]
                },
                {
                  name: "Books",
                  children: [
                    {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
                  ]
                },
                {
                  name: "Government Publications",
                  children: [
                    {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "Linguistic",
          definition: "The language(s) used in the dataset.",
          children: [
            {
              name: "Amharic",
              definition: "Datasets that contain content written in Amharic, primarily used in Ethiopia.",
              children: [
                {"id":1,"name":"AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                {"id":6,"name":"Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
                {"id":7,"name":"The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"},
                {"id":8,"name":"Exploring Amharic Hate Speech Data Collection and Classification Approaches"},
                {"id":9,"name":"Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"}
              ]
            },
            {
              name: "English",
              definition: "Datasets that contain content written in English or English-based code-mixed variants.",
              children: [
                {"id":5,"name":"Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
                {"id":10,"name":"HateXplain: A Benchmark Dataset for Explainable Hate Speech Detection"},
                {"id":12,"name":"Towards Explainable Hate Speech Detection"},
                {"id":13,"name":"A Benchmark Dataset and Two-stage Contrastive Learning Framework for Implicit Hate Speech Detection in Videos"},
                {"id":14,"name":"Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"},
                {"id":15,"name":"Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
                {"id":16,"name":"ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"},
                {"id":18,"name":"Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
                {"id":19,"name":"Target-Based Offensive Language Identification"},
                {"id":22,"name":"A Multi-Modal Dataset for Hate Speech Detection on Social Media: Case-study of Russia-Ukraine Conflict"},
                {"id":23,"name":"Large-Scale Hate Speech Detection with Cross-Domain Transfer"},
                {"id":24,"name":"Multilingual and Multitarget Hate Speech Detection in Tweets"},
                {"id":28,"name":"AbuseAnalyzer: Abuse Detection, Severity and Target Prediction for Gab Posts"},
                {"id":29,"name":"Hate Speech Classifiers are Culturally Insensitive"}
              ]
            },
            {
              name: "Korean",
              definition: "Datasets that contain content written in Korean.",
              children: [
                {"id":20,"name":"K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
                {"id":29,"name":"Hate Speech Classifiers are Culturally Insensitive"}
              ]
            },
            {
              name: "Bengali / Roman Bengali",
              definition: "Datasets that contain content written in Bengali or Romanized Bengali.",
              children: [
                {"id":17,"name":"Towards Cross-Lingual Audio Abuse Detection in Low-Resource Settings with Few-Shot Learning"},
                {"id":21,"name":"Hate Speech and Offensive Language Detection in Bengali"}
              ]
            },
            {
              name: "Arabic Variants",
              definition: "Datasets that contain content in Arabic dialects, including Algerian Arabic/Darja and Moroccan Arabic/Darija.",
              children: [
                {"id":1,"name":"AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                {"id":29,"name":"Hate Speech Classifiers are Culturally Insensitive"}
              ]
            },
            {
              name: "African Languages",
              definition: "Datasets that contain content in African languages such as Hausa, Igbo, Kinyarwanda, Oromo, Somali, Swahili, Tigrinya, Twi, Xhosa, Yorùbá, Zulu.",
              children: [
                {"id":1,"name":"AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"}
              ]
            },
            {
              name: "Devanagari Script Languages",
              definition: "Datasets that contain content written in Devanagari script languages, including Nepali, Hindi, Sanskrit, Marathi, and Bhojpuri.",
              children: [
                {"id":2,"name":"Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
                {"id":4,"name":"Natural Language Understanding of Devanagari Script Languages: Language Identification, Hate Speech and its Target Detection"}
              ]
            },
            {
              name: "Chinese",
              definition: "Datasets that contain content written in Chinese, including Zhihu and Tieba platforms.",
              children: [
                {"id":30,"name":"STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
              ]
            },
            {
              name: "Other Code-Mixed / Multilingual",
              definition: "Datasets that contain code-mixed or multilingual content, including Hinglish, Hindi-English, Persian, Tamil, Malayalam, and German.",
              children: [
                {"id":14,"name":"Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"},
                {"id":15,"name":"Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
                {"id":16,"name":"ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"},
                {"id":27,"name":"Unpacking Faux-Hate: Addressing Faux-Hate Detection and Severity Prediction in Code-Mixed Hinglish Text with HingRoBERTa and Class Weighting Techniques"}
              ]
            },
            {
              name: "Other European / Low-Resource",
              definition: "Datasets containing content in European or low-resource languages, such as Bulgarian, Danish, Swedish, and Norwegian.",
              children: [
                {"id":25,"name":"Measuring Harmful Representations in Scandinavian Language Models"},
                {"id":26,"name":"Hate Speech Classification in Bulgarian"}
              ]
            } 
          ]
        },
        {
          "name": "Annotation Type",
          "definition": "The type of annotator who labeled the dataset, describing the expertise or source of annotation.",
          "children": [
             {
              "name": "Expert",
              "definition": "Datasets labeled by trained experts in linguistics, NLP, or domain-specific knowledge.",
              "children": [
                 {"id":1,"name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                 {"id":2,"name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
                 {"id":3,"name": "Decoding Hate: Exploring Language Models’ Reactions to Hate Speech"},
                 {"id":4,"name": "Natural Language Understanding of Devanagari Script Languages: Language Identification, Hate Speech and its Target Detection"},
                 {"id":5,"name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
                 {"id":6,"name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
                 {"id":8,"name": "Exploring Amharic Hate Speech Data Collection and Classification Approaches"},
                 {"id":9,"name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"},
                 {"id":11,"name": "HateBRXplain: A Benchmark Dataset with Human-Annotated Rationales for Explainable Hate Speech Detection in Brazilian Portuguese"},
                 {"id":12,"name": "Towards Explainable Hate Speech Detection"},
                 {"id":13,"name": "A Benchmark Dataset and Two-stage Contrastive Learning Framework for Implicit Hate Speech Detection in Videos"},
                 {"id":14,"name": "Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"},
                 {"id":15,"name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
                 {"id":16,"name": "ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"},
                 {"id":17,"name": "Towards Cross-Lingual Audio Abuse Detection in Low-Resource Settings with Few-Shot Learning"},
                 {"id":18,"name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
                 {"id":19,"name": "Target-Based Offensive Language Identification"},
                 {"id":20,"name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
                 {"id":26,"name": "Hate Speech Classification in Bulgarian"},
                 {"id":27,"name": "Unpacking Faux-Hate: Addressing Faux-Hate Detection and Severity Prediction in Code-Mixed Hinglish Text with HingRoBERTa and Class Weighting Techniques"}
              ]
            },
            {
              "name": "Crowd",
              "children": [
                 {"id":7,"name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"},
                 {"id":10,"name": "HateXplain: A Benchmark Dataset for Explainable Hate Speech Detection"},
                 {"id":23,"name": "Large-Scale Hate Speech Detection with Cross-Domain Transfer"},
                 {"id":24,"name": "Multilingual and Multitarget Hate Speech Detection in Tweets"}
              ]
            },
            {
              "name": "Not Specified",
              "definition": "Datasets where the annotation type is not explicitly mentioned or described.",
              "children": [
                 {"id":25,"name": "Measuring Harmful Representations in Scandinavian Language Models"}
              ]
            }
          ]
        },
        {
          "name": "Modality",
          "definition": "The format or type of data present in the dataset, such as text, audio, or multimodal combinations.",
          "children": [
             {
              "name": "Text",
              "definition": "Datasets that contain only textual data such as tweets, comments, or posts.",
              "children": [
                 {"id":1,"name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                 {"id":2,"name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
                 {"id":3,"name": "Decoding Hate: Exploring Language Models’ Reactions to Hate Speech"},
                 {"id":6,"name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
                 {"id":7,"name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"},
                 {"id":8,"name": "Exploring Amharic Hate Speech Data Collection and Classification Approaches"},
                 {"id":10,"name": "HateXplain: A Benchmark Dataset for Explainable Hate Speech Detection"},
                 {"id":11,"name": "HateBRXplain: A Benchmark Dataset with Human-Annotated Rationales for Explainable Hate Speech Detection in Brazilian Portuguese"},
                 {"id":12,"name": "Towards Explainable Hate Speech Detection"},
                 {"id":14,"name": "Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"},
                 {"id":15,"name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
                 {"id":18,"name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
                 {"id":19,"name": "Target-Based Offensive Language Identification"},
                 {"id":20,"name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
                 {"id":21,"name": "Hate Speech and Offensive Language Detection in Bengali"},
                 {"id":23,"name": "Large-Scale Hate Speech Detection with Cross-Domain Transfer"},
                 {"id":24,"name": "Multilingual and Multitarget Hate Speech Detection in Tweets"},
                 {"id":25,"name": "Measuring Harmful Representations in Scandinavian Language Models"},
                 {"id":26,"name": "Hate Speech Classification in Bulgarian"},
                 {"id":27,"name": "Unpacking Faux-Hate: Addressing Faux-Hate Detection and Severity Prediction in Code-Mixed Hinglish Text with HingRoBERTa and Class Weighting Techniques"},
                 {"id":28,"name": "AbuseAnalyzer: Abuse Detection, Severity and Target Prediction for Gab Posts"},
                 {"id":29,"name": "Hate Speech Classifiers are Culturally Insensitive"},
                 {"id":30,"name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
              ]
             },
             {
              "name": "Audio",
              "definition": "Datasets that contain only audio data, such as speech recordings, for detecting abusive or hateful content.",
              "children": [
                 {"id":17,"name": "Towards Cross-Lingual Audio Abuse Detection in Low-Resource Settings with Few-Shot Learning"}
              ]
             },
             {
              "name": "Multimodal",
              "definition": "Datasets that contain multiple types of data, such as text combined with images or videos.",
              "children": [
                 {
                   "name": "Text + Image",
                   "definition": "Datasets that contain both textual content and images.",
                   "children": [
                      {"id":5,"name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
                      {"id":9,"name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"},
                      {"id":22,"name": "A Multi-Modal Dataset for Hate Speech Detection on Social Media: Case-study of Russia-Ukraine Conflict"}
                   ]
                 },
                 {
                   "name": "Text + Video",
                   "definition": "Datasets that contain both textual content and video (with or without audio).",
                   "children": [
                      {"id":13,"name": "A Benchmark Dataset and Two-stage Contrastive Learning Framework for Implicit Hate Speech Detection in Videos"},
                      {"id":16,"name": "ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"}
                   ]
                 }
              ]
             }
          ]
        },
        {
          "name": "Classes",
          "definition": "Classification labels used across hate speech datasets.",
          "children": [
             {
              "name": "hate, abusive, neutral, indeterminate",
              "children": [
                 {"id":1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"}
              ]
             },
             {
              "name": "Hate, Non-Hate",
              "children": [
                 {"id":2, "name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
                 {"id":5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
                 {"id":9, "name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"},
                 {"id":11, "name": "HateBRXplain: A Benchmark Dataset with Human-Annotated Rationales for Explainable Hate Speech Detection in Brazilian Portuguese"},
                 {"id":12, "name": "Towards Explainable Hate Speech Detection"},
                 {"id":18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
                 {"id":26, "name": "Hate Speech Classification in Bulgarian"},
                 {"id":29, "name": "Hate Speech Classifiers are Culturally Insensitive"},
                 {"id":30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
              ]
             },
             {
              "name": "hate, offensive, normal, indeterminate",
              "children": [
                 {"id":6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"}
              ]
             },
             {
              "name": "hate, offensive, normal, unsure",
              "children": [
                 {"id":7, "name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"}
              ]
             },
             {
              "name": "hate, offensive, normal",
              "children": [
                 {"id":8, "name": "Exploring Amharic Hate Speech Data Collection and Classification Approaches"},
                 {"id":23, "name": "Large-Scale Hate Speech Detection with Cross-Domain Transfer"}
              ]
             },
             {
              "name": "hate, offensive, normal, undecided",
              "children": [
                 {"id":10, "name": "HateXplain: A Benchmark Dataset for Explainable Hate Speech Detection"}
              ]
             },
             {
              "name": "Explicit hate, implicit hate, non-hate",
              "children": [
                 {"id":13,"name":"A Benchmark Dataset and Two-stage Contrastive Learning Framework for Implicit Hate Speech Detection in Videos"},
                 {"id":15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"}
              ]
            },
             {
              "name": "Hateful Neutral B-B (a bad word) and B (Profane continuation)",
              "children": [
                 {"id":14, "name": "Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"}
              ]
             },
             {
              "name": "Explicit hate, Implicit hate, Non-hate",
              "children": [
                 {"id":15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"}
              ]
             },
             {
              "name": "Toxic (Yes), Toxic (No)",
              "children": [
                 {"id":16, "name": "ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"}
              ]
             },
             {
              "name": "Abusive, Non Abusive",
              "children": [
                 {"id":17, "name": "Towards Cross-Lingual Audio Abuse Detection in Low-Resource Settings with Few-Shot Learning"}
              ]
             },
             {
              "name": "Harmful, Not Harmful",
              "children": [
                 {"id":19, "name": "Target-Based Offensive Language Identification"}
               ]
             },
             {
              "name": "No offensiveness, Mildly offensive, Explicitly offensive",
              "children": [
                 {"id":20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"}
              ]
             },
             { 
              "name": "Hate, Offensive, Normal",
              "children": [
                 {"id":21, "name": "Hate Speech and Offensive Language Detection in Bengali"}
              ]
             },
             {
              "name": "hate, non Hate, sexist, nonSexist",
              "children": [
                 {"id":24, "name": "Multilingual and Multitarget Hate Speech Detection in Tweets"}
              ]
             },
             {
              "name": "Harmful, toxic, offensive",
              "children": [
                 {"id":25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
              ]
             },
             {
              "name": "Fake, Real, Hate, Non-hate",
              "children": [
                 {"id":27, "name": "Unpacking Faux-Hate: Addressing Faux-Hate Detection and Severity Prediction in Code-Mixed Hinglish Text with HingRoBERTa and Class Weighting Techniques"}
              ]
             },
             {
              "name": "abusive, non abusive",
              "children": [
                 {"id":28, "name": "AbuseAnalyzer: Abuse Detection, Severity and Target Prediction for Gab Posts"}
              ]
             }
          ]
        },
        {
          "name": "Targets",
          "children": [
             {
              "name": "Ethnicity / Race / Nationality",
              "description": "Discrimination based on ethnic, racial, or national identity.",
              "children": [
                 {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                 {"id": 3, "name": "Decoding Hate: Exploring Language Models’ Reactions to Hate Speech"},
                 {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
                 {"id": 15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
                 {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
                 {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
                 {"id": 30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
              ]
             },
             {
              "name": "Religion / Belief System",
              "description": "Anti-religious or belief-based hate.",
              "children": [
                 {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                 {"id": 3, "name": "Decoding Hate: Exploring Language Models’ Reactions to Hate Speech"},
                 {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
                 {"id": 6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
                 {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
                 {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"}
              ]
             },
             {
              "name": "Gender / LGBTQ+",
              "description": "Sexist, homophobic, or transphobic speech.",
              "children": [
                 {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                 {"id": 3, "name": "Decoding Hate: Exploring Language Models’ Reactions to Hate Speech"},
                 {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
                 {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
                 {"id": 24, "name": "Multilingual and Multitarget Hate Speech Detection in Tweets"},
                 {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
              ]
             },
             {
              "name": "Disability / Health",
              "description": "Mockery or hate based on disability or health condition.",
              "children": [
                 {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                 {"id": 7, "name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"},
                 {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"}
              ]
             },
             {
              "name": "Politics / Ideology",
              "description": "Hate targeting political affiliations or ideologies.",
              "children": [
                 {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                 {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
                 {"id": 6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
                 {"id": 15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
                 {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
                 {"id": 23, "name": "Large-Scale Hate Speech Detection with Cross-Domain Transfer"}
              ]
             },
             {
              "name": "Age / Job / Social Role",
              "description": "Bias based on age, occupation, or social role.",
              "children": [
                 {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"}
              ]
             },
             {
              "name": "Individual / Organization / Community",
              "description": "Hate directed at a person, institution, or community.",
              "children": [
                 {"id": 2, "name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
                 {"id": 4, "name": "Natural Language Understanding of Devanagari Script Languages: Language Identification, Hate Speech and its Target Detection"},
                 {"id": 27, "name": "Unpacking Faux-Hate: Addressing Faux-Hate Detection and Severity Prediction in Code-Mixed Hinglish Text with HingRoBERTa and Class Weighting Techniques"},
                 {"id": 28, "name": "AbuseAnalyzer: Abuse Detection, Severity and Target Prediction for Gab Posts"}
              ]
             },
             {
              "name": "Region / Language Group",
              "description": "Bias related to geographic region or language/dialect.",
              "children": [
                 {"id": 30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"},
                 {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"},
                 {"id": 26, "name": "Hate Speech Classification in Bulgarian"}
              ]
             },
             {
              "name": "Others / Minority / Social Issues",
              "description": "Stereotypes and prejudice toward other marginalized groups.",
              "children": [
                 {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                 {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
                 {"id": 6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
                 {"id": 24, "name": "Multilingual and Multitarget Hate Speech Detection in Tweets"},
                 {"id": 29, "name": "Hate Speech Classifiers are Culturally Insensitive"}
              ]
             }
          ]
        }
      ]
    }
  ]
};
const platformData = {
  "name": "Hate Speech Platform Policies",
  "definition": "A multilayer taxonomy describing how platforms define, regulate, enforce, and report hate speech policies.",
  "children": [
    {
      "name": "Conceptual",
      "definition": "Clarifies what counts as hate speech and which traits or groups are protected on each platform.",
      "children": [
        {
          "name": "Definition & Scope",
          "definition": "How platforms define hate speech: legalistic, behavior-based, or minimal.",
          "children": [
            { 
              "name": "Legalistic Definitions",
              "definition": "Definitions grounded in protected characteristics under international human rights frameworks.",
              "children": [
                { "name": "Facebook, TikTok, X/Twitter", "definition": "Platforms using legalistic, rights-based definitions of hate speech." }
              ]
            },
            { 
              "name": "Operational Definitions",
              "definition": "Definitions focused on behaviors such as harassment, incitement, or dehumanization.",
              "children": [
                { "name": "Reddit, Bluesky", "definition": "Platforms using behavioral, operational definitions rather than legalistic ones." }
              ]
            },
            { 
              "name": "Minimalist Definitions",
              "definition": "General or vague bans without detailed legal or behavioral criteria.",
              "children": [
                { "name": "Gab, Telegram", "definition": "Platforms providing limited or vague definitions focused mainly on illegal content." }
              ]
            }
          ]
        },
        {
          "name": "Protected Attributes",
          "definition": "The traits that platforms explicitly protect from hate speech.",
          "children": [
            { 
              "name": "Core Traits",
              "definition": "Race, religion, gender, sexual orientation—covered by all major platforms.",
              "children": [
                { "name": "All platforms", "definition": "Every platform includes a baseline set of core protected attributes." }
              ]
            },
            { 
              "name": "Extended Traits",
              "definition": "Additional traits such as disability, caste, disease, immigration status, or political affiliation.",
              "children": [
                { "name": "TikTok, Bluesky, X/Twitter", "definition": "Platforms with broader protections beyond core traits." }
              ]
            }
          ]
        },
        {
          "name": "Severity Structure",
          "definition": "Whether platforms categorize hate speech by levels of harm.",
          "children": [
            { 
              "name": "Tiered",
              "definition": "Multiple severity levels (e.g., dehumanization, exclusion, insults).",
              "children": [
                { "name": "Facebook", "definition": "Uses Tier 1, Tier 2, and Tier 3 to classify hate speech severity." }
              ]
            },
            { 
              "name": "Flat",
              "definition": "A single standard for all hate speech without tiering.",
              "children": [
                { "name": "Reddit, Telegram", "definition": "Platforms applying a flat enforcement standard." }
              ]
            }
          ]
        }
      ]
    },

    {
      "name": "Normative Expression vs. Protection",
      "definition": "Shows how platforms balance free expression with user protection from harmful speech.",
      "children": [
        {
          "name": "Balancing Principle",
          "definition": "The platform’s guiding philosophy: safety-first, context-aware, or expression-focused.",
          "children": [
            { 
              "name": "Safety-Oriented",
              "definition": "Prioritizes user protection; proactively removes harmful content.",
              "children": [
                { "name": "Facebook, TikTok", "definition": "Platforms adopting strong safety-first moderation approaches." }
              ]
            },
            { 
              "name": "Contextual Balance",
              "definition": "Moderation decisions consider satire, reporting, education, and intent.",
              "children": [
                { "name": "Reddit, Bluesky, X", "definition": "Platforms considering contextual cues before acting against content." }
              ]
            },
            { 
              "name": "Expression-Oriented",
              "definition": "Prioritizes free speech; restricts mostly illegal content.",
              "children": [
                { "name": "Gab, Telegram", "definition": "Platforms leaning heavily toward maximum speech and minimal intervention." }
              ]
            }
          ]
        },
        {
          "name": "Context Sensitivity",
          "definition": "How much platforms account for context, such as reclaimed slurs or satire.",
          "children": [
            { 
              "name": "High",
              "definition": "Allows exceptions based on context and intent.",
              "children": [
                { "name": "Facebook, Reddit", "definition": "Platforms formally applying contextual interpretation in their guidelines." }
              ]
            },
            { 
              "name": "Low",
              "definition": "No formal consideration of context; speech judged at face value.",
              "children": [
                { "name": "Gab, Telegram", "definition": "Platforms using minimal contextual judgment." }
              ]
            }
          ]
        }
      ]
    },

    {
      "name": "Governance",
      "definition": "How platforms enforce hate speech rules through human, automated, or decentralized systems.",
      "children": [
        {
          "name": "Moderation Architecture",
          "definition": "The systems and actors responsible for identifying and reviewing violations.",
          "children": [
            { 
              "name": "Hybrid (AI + Human)",
              "definition": "Automated detection combined with human review.",
              "children": [
                { "name": "Facebook, TikTok, Reddit", "definition": "Use significant automation plus human moderation." }
              ]
            },
            { 
              "name": "Human-Centric",
              "definition": "Moderation mainly through manual review and user reports.",
              "children": [
                { "name": "Gab, Telegram", "definition": "Platforms relying on manual reporting and limited automation." }
              ]
            },
            { 
              "name": "User-Customizable",
              "definition": "Users choose their own moderation filters or labeling services.",
              "children": [
                { "name": "Bluesky", "definition": "Offers decentralized, user-defined moderation services." }
              ]
            }
          ]
        },
        {
          "name": "Enforcement Actions",
          "definition": "The punishment or corrective action applied to violating accounts or content.",
          "children": [
            { 
              "name": "Graduated Sanctions",
              "definition": "Tiered enforcement: warnings, strikes, demotion, suspension.",
              "children": [
                { "name": "Twitter/X, TikTok", "definition": "Platforms applying multiple sanction stages." }
              ]
            },
            { 
              "name": "Community Enforcement",
              "definition": "Moderation handled by community moderators.",
              "children": [
                { "name": "Reddit", "definition": "Local subreddit moderators handle majority of enforcement." }
              ]
            },
            { 
              "name": "Centralized Removal",
              "definition": "Platform administrators directly remove violating content.",
              "children": [
                { "name": "Telegram", "definition": "Primarily admin-led enforcement in public channels." }
              ]
            }
          ]
        }
      ]
    },

    {
      "name": "Behavioral Proactivity & Counterspeech",
      "definition": "How actively platforms work to prevent, reduce, or respond to hate speech.",
      "children": [
        { 
          "name": "Proactive",
          "definition": "Platforms prevent harm via AI detection, education, and counterspeech.",
          "children": [
            { "name": "TikTok, Facebook", "definition": "Use proactive moderation, demotion, and safety campaigns." }
          ]
        },
        { 
          "name": "Reactive",
          "definition": "Platforms act only after violations are reported.",
          "children": [
            { "name": "Reddit, Gab", "definition": "Primarily respond to user reports or after-the-fact violations." }
          ]
        },
        { 
          "name": "User Empowerment",
          "definition": "Tools for muting, filtering, or customizing content to reduce exposure to hate.",
          "children": [
            { "name": "Bluesky, TikTok", "definition": "Offer strong customization and user-controlled filters." }
          ]
        }
      ]
    },

    {
      "name": "Transparency Accountability & Data Access",
      "definition": "How open platforms are about moderation activity and what data they provide to researchers.",
      "children": [
        { 
          "name": "High Transparency",
          "definition": "Regular enforcement reports, research APIs, and structured oversight.",
          "children": [
            { "name": "Meta, TikTok", "definition": "Platforms with strong reporting and oversight mechanisms." }
          ]
        },
        { 
          "name": "Moderate Transparency",
          "definition": "Some public reports and partial data access.",
          "children": [
            { "name": "Reddit, X", "definition": "Provide limited reports and restricted data access." }
          ]
        },
        { 
          "name": "Low Transparency",
          "definition": "Little or no structured reporting or external accountability.",
          "children": [
            { "name": "Gab, Telegram", "definition": "Platforms with minimal transparency or open data." }
          ]
        }
      ]
    }
  ]
};
const countryData = {
  "name": "Hate Speech Country Regulation",
  "definition": "A collection of regulations that countries have proclaimed regarding hate speech",
  "children": [
    {
      "name": "Exceptional Cases",
      "definition": "Certain exceptions exist under which expressions, though offensive or provocative, are not legally defined as hate speech",
      "children": [
        {
          "name": "Subject to Exception",
          "definition": "Regulations that include exception clauses allowing certain expressions not to be defined as hate speech",
          "children": [
            {
              "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia"
            }
          ]
        },
        {
          "name": "Not Subject to Exception",
          "definition": "Regulations without exception clauses allowing expression to escape hate-speech designation",
          "children": [
            {
              "name": "Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark"
            }
          ]
        }
      ]
    },

    {
      "name": "Punishment",
      "definition": "Legal consequences a country applies for hate-speech violations",
      "children": [
        {
          "name": "Corrective Measures",
          "definition": "Educational or rehabilitative actions such as awareness training, counseling, or mandated apology",
          "children": [
            {
              "name": "United States of America, Canada, South Africa, France, Germany, Australia, Victoria (Australia), Sudan, India, Brazil, Venezuela"
            }
          ]
        },
        {
          "name": "Fines",
          "definition": "Monetary penalties for hate-speech violations",
          "children": [
            {
              "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark"
            }
          ]
        },
        {
          "name": "Imprisonment",
          "definition": "Criminal punishment involving detention",
          "children": [
            {
              "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark"
            }
          ]
        },
        {
          "name": "Death",
          "definition": "Capital punishment applied in extreme hate-incitement or hate-crime cases",
          "children": [
            {
              "name": "Sudan, Uganda, Nigeria"
            }
          ]
        }
      ]
    },

    {
      "name": "Intent / Guilt",
      "definition": "Determines the mental state of the person responsible for hate speech",
      "children": [
        {
          "name": "Vicarious or Organizational",
          "definition": "Organizations are legally responsible for hate speech committed by their employees or agents",
          "children": [
            {
              "name": "United Arab Emirates, United Kingdom, Scotland, Wales, South Africa"
            }
          ]
        },
        {
          "name": "Negligent or Reckless",
          "definition": "The speaker did not intend harm but acted irresponsibly, causing foreseeable harm",
          "children": [
            {
              "name": "Sweden, Denmark"
            }
          ]
        },
        {
          "name": "Intentional",
          "definition": "Speech delivered with the purpose of causing hatred, discrimination, or violence",
          "children": [
            {
              "name": "Ethiopia, Kenya, Sudan, Uganda, Nigeria, Egypt, India, China, United States of America, Canada, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru"
            }
          ]
        }
      ]
    },

    {
      "name": "Severity / Harm Level",
      "definition": "The seriousness of the hate-speech act and its potential or actual harm",
      "children": [
        {
          "name": "Criminal / Aggravated",
          "definition": "Severe crimes including incitement to violence or repeated large-scale harm",
          "children": [
            {
              "name": "Sudan, Uganda, Nigeria, South Africa, United Arab Emirates, China, Russia, United Kingdom, Scotland, Wales, Brazil, Venezuela"
            }
          ]
        },
        {
          "name": "Criminal / Minor",
          "definition": "Lower-level crimes such as slurs, insults, or limited distribution",
          "children": [
            {
              "name": "Ethiopia, Kenya, Egypt, India, Italy, Germany, Canada, Victoria (Australia), Peru, Hungary"
            }
          ]
        },
        {
          "name": "Minor / Misdemeanor",
          "definition": "Low-level harm such as offensive or insulting expressions",
          "children": [
            {
              "name": "France, Belgium, Sweden, Denmark, Australia, United States of America"
            }
          ]
        }
      ]
    },

    {
      "name": "Expression Medium",
      "definition": "The channel used to deliver the hate speech",
      "children": [
        {
          "name": "Broadcast or Audiovisual Media",
          "definition": "Television, radio, film, news broadcasts",
          "children": [
            {
              "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark"
            }
          ]
        },
        {
          "name": "Symbolic Acts",
          "definition": "Non-verbal hateful acts such as extremist symbols, flag burning, or gestures",
          "children": [
            {
              "name": "Germany, South Africa, France, Belgium, United Kingdom, Victoria (Australia), Australia, Brazil, Venezuela"
            }
          ]
        },
        {
          "name": "Online or Digital Platforms",
          "definition": "Social media, websites, digital forums, messaging platforms",
          "children": [
            {
              "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark"
            }
          ]
        },
        {
          "name": "Spoken & Written",
          "definition": "Traditional communication including speech, books, magazines, or printed materials",
          "children": [
            {
              "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, United States of America, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark"
            }
          ]
        }
      ]
    },

    {
      "name": "Protected Characteristics",
      "definition": "Groups or attributes protected from hateful expression",
      "children": [
        {
          "name": "Personal & Social Attributes",
          "definition": "Protection based on socioeconomic class, profession, age, political affiliation, or cultural traits",
          "children": [
            {
              "name": "United States of America, Egypt, South Africa, United Arab Emirates, Canada, Scotland, Russia, Germany, Sweden, Denmark, Venezuela, Peru"
            }
          ]
        },
        {
          "name": "Disability / Health Status",
          "definition": "Protection from hate speech targeting physical, sensory, or mental disabilities or health conditions",
          "children": [
            {
              "name": "Ethiopia, South Africa, United Arab Emirates, Canada, Scotland, France, Sweden, Belgium, Australia, Victoria (Australia), Peru"
            }
          ]
        },
        {
          "name": "Gender / Sexual Orientation",
          "definition": "Protection for gender identity, sexual orientation, and LGBTQ+ groups",
          "children": [
            {
              "name": "Ethiopia, South Africa, Canada, United Kingdom, Scotland, Wales, Uganda, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark"
            }
          ]
        },
        {
          "name": "Religion / Belief System",
          "definition": "Protection for religious groups, belief systems, non-belief identities",
          "children": [
            {
              "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, Canada, United Kingdom, Scotland, Wales, Russia, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark"
            }
          ]
        },
        {
          "name": "Race / Ethnicity / Nationality",
          "definition": "Protection for racial groups, ethnic identities, and national-origin categories",
          "children": [
            {
              "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark"
            }
          ]
        }
      ]
    },

    {
      "name": "Legal Basis",
      "definition": "The type of law used to regulate hate speech",
      "children": [
        {
          "name": "Specialized",
          "definition": "Standalone hate-speech acts or specific hate-crime legislation",
          "children": [
            {
              "name": "France, Kenya, India"
            }
          ]
        },
        {
          "name": "Administrative",
          "definition": "Regulated through administrative law, media authorities, or communication regulations",
          "children": [
            {
              "name": "Germany, Finland, Nigeria, Sudan, Egypt, China, United Arab Emirates, Australia, Venezuela, Peru, France, Russia"
            }
          ]
        },
        {
          "name": "Civil / Equality",
          "definition": "Regulated under civil rights, anti-discrimination, or equality laws",
          "children": [
            {
              "name": "United Kingdom, Finland, Sweden, Canada, South Africa, Uganda, Ethiopia, Kenya, Victoria (Australia), Russia, United States of America"
            }
          ]
        },
        {
          "name": "Criminal",
          "definition": "Regulated through criminal codes, including imprisonment and fines",
          "children": [
            {
              "name": "Ethiopia, Sudan, South Africa, United Arab Emirates, Canada, United Kingdom, Scotland, Wales, Russia, Kenya, Uganda, Nigeria, Egypt, India, China, Italy, France, Belgium, Germany, Hungary, Australia, Victoria (Australia), Brazil, Venezuela, Peru, Sweden, Denmark, United States of America"
            }
          ]
        }
      ]
    }
  ]
};
const datasetData = {
  "name": "Hate Speech Dataset Taxonomy",
  "definition": "A hierarchical taxonomy of hate speech datasets across 6 validated levels.",
  "children": [
    {
      "name": "Source",
      "definition": "Where the dataset content was collected from.",
      "children": [
        {
          "name": "Social Media Platforms",
          "children": [
            {
              "name": "Twitter / X",
              "children": [
                {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
                {"id": 2, "name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
                {"id": 6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
                {"id": 7, "name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"},
                {"id": 8, "name": "Exploring Amharic Hate Speech Data Collection and Classification Approaches"},
                {"id": 12, "name": "Towards Explainable Hate Speech Detection"},
                {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
                {"id": 19, "name": "Target-Based Offensive Language Identification"},
                {"id": 23, "name": "Large-Scale Hate Speech Detection with Cross-Domain Transfer"},
                {"id": 24, "name": "Multilingual and Multitarget Hate Speech Detection in Tweets"},
                {"id": 22, "name": "A Multi-Modal Dataset for Hate Speech Detection on Social Media: Case-study of Russia-Ukraine Conflict"}
              ]
            },
            {
              "name": "Facebook",
              "children": [
                {"id": 9, "name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"}
              ]
            },
            {
              "name": "Instagram",
              "children": [
                {"id": 11, "name": "HateBRXplain: A Benchmark Dataset with Human-Annotated Rationales for Explainable Hate Speech Detection in Brazilian Portuguese"},
                {"id": 29, "name": "Hate Speech Classifiers are Culturally Insensitive"}
              ]
            },
            {
              "name": "Telegram",
              "children": [
                {"id": 9, "name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"}
              ]
            },
            {
              "name": "Reddit",
              "children": [
                {"id": 14, "name": "Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"},
                {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"}
              ]
            },
            {
              "name": "Gab",
              "children": [
                {"id": 10, "name": "HateXplain: A Benchmark Dataset for Explainable Hate Speech Detection"},
                {"id": 28, "name": "AbuseAnalyzer: Abuse Detection, Severity and Target Prediction for Gab Posts"}
              ]
            }
          ]
        },
        {
          "name": "Online Discussion Forums",
          "children": [
            {
              "name": "General Online Forums",
              "children": [
                {"id": 26, "name": "Hate Speech Classification in Bulgarian"}
              ]
            },
            {
              "name": "Zhihu",
              "children": [
                {"id": 30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
              ]
            },
            {
              "name": "Tieba",
              "children": [
                {"id": 30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
              ]
            }
          ]
        },
        {
          "name": "Video Sharing Platforms",
          "children": [
            {
              "name": "YouTube",
              "children": [
                {"id": 16, "name": "ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"},
                {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"}
              ]
            },
            {
              "name": "BitChute & Odysee",
              "children": [
                {"id": 13, "name": "A Benchmark Dataset and Two-stage Contrastive Learning Framework for Implicit Hate Speech Detection in Videos"}
              ]
            }
          ]
        },
        {
          "name": "Synthetic / Artificial Data",
          "children": [
            {"id": 15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"}
          ]
        },
        {
          "name": "Web-Crawled Corpora",
          "children": [
            {
              "name": "Websites",
              "children": [
                {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"}
              ]
            },
            {
              "name": "Common Crawl",
              "children": [
                {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
              ]
            },
            {
              "name": "Wikipedia",
              "children": [
                {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
              ]
            },
            {
              "name": "News Portals / Newspapers",
              "children": [
                {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
              ]
            },
            {
              "name": "Books",
              "children": [
                {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
              ]
            },
            {
              "name": "Government Publications",
              "children": [
                {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Linguistic",
      "definition": "The language(s) used in the dataset.",
      "children": [
        {
          "name": "Amharic",
          "definition": "Datasets that contain content written in Amharic, primarily used in Ethiopia.",
          "children": [
            {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
            {"id": 6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
            {"id": 7, "name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"},
            {"id": 8, "name": "Exploring Amharic Hate Speech Data Collection and Classification Approaches"},
            {"id": 9, "name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"}
          ]
        },
        {
          "name": "English",
          "definition": "Datasets that contain content written in English or English-based code-mixed variants.",
          "children": [
            {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
            {"id": 10, "name": "HateXplain: A Benchmark Dataset for Explainable Hate Speech Detection"},
            {"id": 12, "name": "Towards Explainable Hate Speech Detection"},
            {"id": 13, "name": "A Benchmark Dataset and Two-stage Contrastive Learning Framework for Implicit Hate Speech Detection in Videos"},
            {"id": 14, "name": "Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"},
            {"id": 15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
            {"id": 16, "name": "ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"},
            {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
            {"id": 19, "name": "Target-Based Offensive Language Identification"},
            {"id": 22, "name": "A Multi-Modal Dataset for Hate Speech Detection on Social Media: Case-study of Russia-Ukraine Conflict"},
            {"id": 23, "name": "Large-Scale Hate Speech Detection with Cross-Domain Transfer"},
            {"id": 24, "name": "Multilingual and Multitarget Hate Speech Detection in Tweets"},
            {"id": 28, "name": "AbuseAnalyzer: Abuse Detection, Severity and Target Prediction for Gab Posts"},
            {"id": 29, "name": "Hate Speech Classifiers are Culturally Insensitive"}
          ]
        },
        {
          "name": "Korean",
          "definition": "Datasets that contain content written in Korean.",
          "children": [
            {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
            {"id": 29, "name": "Hate Speech Classifiers are Culturally Insensitive"}
          ]
        },
        {
          "name": "Bengali / Roman Bengali",
          "definition": "Datasets that contain content written in Bengali or Romanized Bengali.",
          "children": [
            {"id": 17, "name": "Towards Cross-Lingual Audio Abuse Detection in Low-Resource Settings with Few-Shot Learning"},
            {"id": 21, "name": "Hate Speech and Offensive Language Detection in Bengali"}
          ]
        },
        {
          "name": "Arabic Variants",
          "definition": "Datasets that contain content in Arabic dialects, including Algerian Arabic/Darja and Moroccan Arabic/Darija.",
          "children": [
            {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
            {"id": 29, "name": "Hate Speech Classifiers are Culturally Insensitive"}
          ]
        },
        {
          "name": "African Languages",
          "definition": "Datasets that contain content in African languages such as Hausa, Igbo, Kinyarwanda, Oromo, Somali, Swahili, Tigrinya, Twi, Xhosa, Yorùbá, Zulu.",
          "children": [
            {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"}
          ]
        },
        {
          "name": "Devanagari Script Languages",
          "definition": "Datasets that contain content written in Devanagari script languages, including Nepali, Hindi, Sanskrit, Marathi, and Bhojpuri.",
          "children": [
            {"id": 2, "name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
            {"id": 4, "name": "Natural Language Understanding of Devanagari Script Languages: Language Identification, Hate Speech and its Target Detection"}
          ]
        },
        {
          "name": "Chinese",
          "definition": "Datasets that contain content written in Chinese, including Zhihu and Tieba platforms.",
          "children": [
            {"id": 30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
          ]
        },
        {
          "name": "Other Code-Mixed / Multilingual",
          "definition": "Datasets that contain code-mixed or multilingual content, including Hinglish, Hindi-English, Persian, Tamil, Malayalam, and German.",
          "children": [
            {"id": 14, "name": "Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"},
            {"id": 15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
            {"id": 16, "name": "ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"},
            {"id": 27, "name": "Unpacking Faux-Hate: Addressing Faux-Hate Detection and Severity Prediction in Code-Mixed Hinglish Text with HingRoBERTa and Class Weighting Techniques"}
          ]
        },
        {
          "name": "Other European / Low-Resource",
          "definition": "Datasets containing content in European or low-resource languages, such as Bulgarian, Danish, Swedish, and Norwegian.",
          "children": [
            {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"},
            {"id": 26, "name": "Hate Speech Classification in Bulgarian"}
          ]
        }
      ]
    },
    {
      "name": "Annotation Type",
      "definition": "The type of annotator who labeled the dataset, describing the expertise or source of annotation.",
      "children": [
        {
          "name": "Expert",
          "definition": "Datasets labeled by trained experts in linguistics, NLP, or domain-specific knowledge.",
          "children": [
            {"id":1,"name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
            {"id":2,"name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
            {"id":3,"name": "Decoding Hate: Exploring Language Models’ Reactions to Hate Speech"},
            {"id":4,"name": "Natural Language Understanding of Devanagari Script Languages: Language Identification, Hate Speech and its Target Detection"},
            {"id":5,"name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
            {"id":6,"name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
            {"id":8,"name": "Exploring Amharic Hate Speech Data Collection and Classification Approaches"},
            {"id":9,"name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"},
            {"id":11,"name": "HateBRXplain: A Benchmark Dataset with Human-Annotated Rationales for Explainable Hate Speech Detection in Brazilian Portuguese"},
            {"id":12,"name": "Towards Explainable Hate Speech Detection"},
            {"id":13,"name": "A Benchmark Dataset and Two-stage Contrastive Learning Framework for Implicit Hate Speech Detection in Videos"},
            {"id":14,"name": "Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"},
            {"id":15,"name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
            {"id":16,"name": "ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"},
            {"id":17,"name": "Towards Cross-Lingual Audio Abuse Detection in Low-Resource Settings with Few-Shot Learning"},
            {"id":18,"name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
            {"id":19,"name": "Target-Based Offensive Language Identification"},
            {"id":20,"name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
            {"id":26,"name": "Hate Speech Classification in Bulgarian"},
            {"id":27,"name": "Unpacking Faux-Hate: Addressing Faux-Hate Detection and Severity Prediction in Code-Mixed Hinglish Text with HingRoBERTa and Class Weighting Techniques"}
          ]
        },
        {
          "name": "Crowd",
          "children": [
            {"id":7,"name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"},
            {"id":10,"name": "HateXplain: A Benchmark Dataset for Explainable Hate Speech Detection"},
            {"id":23,"name": "Large-Scale Hate Speech Detection with Cross-Domain Transfer"},
            {"id":24,"name": "Multilingual and Multitarget Hate Speech Detection in Tweets"}
          ]
        },
        {
          "name": "Not Specified",
          "definition": "Datasets where the annotation type is not explicitly mentioned or described.",
          "children": [
            {"id":25,"name": "Measuring Harmful Representations in Scandinavian Language Models"}
          ]
        }
      ]
    },
    {
      "name": "Modality",
      "definition": "The format or type of data present in the dataset, such as text, audio, or multimodal combinations.",
      "children": [
         {
          "name": "Text",
          "definition": "Datasets that contain only textual data such as tweets, comments, or posts.",
          "children": [
             {"id":1,"name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
             {"id":2,"name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
             {"id":3,"name": "Decoding Hate: Exploring Language Models’ Reactions to Hate Speech"},
             {"id":6,"name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
             {"id":7,"name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"},
             {"id":8,"name": "Exploring Amharic Hate Speech Data Collection and Classification Approaches"},
             {"id":10,"name": "HateXplain: A Benchmark Dataset for Explainable Hate Speech Detection"},
             {"id":11,"name": "HateBRXplain: A Benchmark Dataset with Human-Annotated Rationales for Explainable Hate Speech Detection in Brazilian Portuguese"},
             {"id":12,"name": "Towards Explainable Hate Speech Detection"},
             {"id":14,"name": "Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"},
             {"id":15,"name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
             {"id":18,"name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
             {"id":19,"name": "Target-Based Offensive Language Identification"},
             {"id":20,"name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
             {"id":21,"name": "Hate Speech and Offensive Language Detection in Bengali"},
             {"id":23,"name": "Large-Scale Hate Speech Detection with Cross-Domain Transfer"},
             {"id":24,"name": "Multilingual and Multitarget Hate Speech Detection in Tweets"},
             {"id":25,"name": "Measuring Harmful Representations in Scandinavian Language Models"},
             {"id":26,"name": "Hate Speech Classification in Bulgarian"},
             {"id":27,"name": "Unpacking Faux-Hate: Addressing Faux-Hate Detection and Severity Prediction in Code-Mixed Hinglish Text with HingRoBERTa and Class Weighting Techniques"},
             {"id":28,"name": "AbuseAnalyzer: Abuse Detection, Severity and Target Prediction for Gab Posts"},
             {"id":29,"name": "Hate Speech Classifiers are Culturally Insensitive"},
             {"id":30,"name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
          ]
         },
         {
          "name": "Audio",
          "definition": "Datasets that contain only audio data, such as speech recordings, for detecting abusive or hateful content.",
          "children": [
             {"id":17,"name": "Towards Cross-Lingual Audio Abuse Detection in Low-Resource Settings with Few-Shot Learning"}
          ]
         },
         {
          "name": "Multimodal",
          "definition": "Datasets that contain multiple types of data, such as text combined with images or videos.",
          "children": [
             {
               "name": "Text + Image",
               "definition": "Datasets that contain both textual content and images.",
               "children": [
                  {"id":5,"name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
                  {"id":9,"name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"},
                  {"id":22,"name": "A Multi-Modal Dataset for Hate Speech Detection on Social Media: Case-study of Russia-Ukraine Conflict"}
               ]
             },
             {
               "name": "Text + Video",
               "definition": "Datasets that contain both textual content and video (with or without audio).",
               "children": [
                  {"id":13,"name": "A Benchmark Dataset and Two-stage Contrastive Learning Framework for Implicit Hate Speech Detection in Videos"},
                  {"id":16,"name": "ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"}
               ]
             }
          ]
         }
      ]
    },
    {
      "name": "Classes",
      "definition": "Classification labels used across hate speech datasets.",
      "children": [
         {
          "name": "hate, abusive, neutral, indeterminate",
          "children": [
             {"id":1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"}
          ]
         },
         {
          "name": "Hate, Non-Hate",
          "children": [
             {"id":2, "name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
             {"id":5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
             {"id":9, "name": "Detecting Hate Speech in Amharic Using Multimodal Analysis of Social Media Memes"},
             {"id":11, "name": "HateBRXplain: A Benchmark Dataset with Human-Annotated Rationales for Explainable Hate Speech Detection in Brazilian Portuguese"},
             {"id":12, "name": "Towards Explainable Hate Speech Detection"},
             {"id":18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
             {"id":26, "name": "Hate Speech Classification in Bulgarian"},
             {"id":29, "name": "Hate Speech Classifiers are Culturally Insensitive"},
             {"id":30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
          ]
         },
         {
          "name": "hate, offensive, normal, indeterminate",
          "children": [
             {"id":6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"}
          ]
         },
         {
          "name": "hate, offensive, normal, unsure",
          "children": [
             {"id":7, "name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"}
          ] 
         },
         {
          "name": "hate, offensive, normal",
          "children": [
             {"id":8, "name": "Exploring Amharic Hate Speech Data Collection and Classification Approaches"}
          ]
         },
         {
          "name": "hate, offensive, normal, undecided",
          "children": [
             {"id":10, "name": "HateXplain: A Benchmark Dataset for Explainable Hate Speech Detection"}
          ]
         },
         {
          "name": "Hateful Neutral B-B (a bad word) and B (Profane continuation)",
          "children": [
             {"id":14, "name": "Word-Level Detection of Code-Mixed Hate Speech with Multilingual Domain Transfer"}
          ]
         },
         {
          "name": "Explicit hate, Implicit hate, Non-hate",
          "children": [
             {"id":13, "name":"A Benchmark Dataset and Two-stage Contrastive Learning Framework for Implicit Hate Speech Detection in Videos"},  
             {"id":15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"}
          ]
         },
         {
          "name": "Toxic (Yes), Toxic (No)",
          "children": [
             {"id":16, "name": "ToxVidLM: A Multimodal Framework for Toxicity Detection in Code-Mixed Videos"}
          ]
         },
         {
          "name": "Abusive, Non Abusive",
          "children": [
             {"id":17, "name": "Towards Cross-Lingual Audio Abuse Detection in Low-Resource Settings with Few-Shot Learning"}
          ]
         },
         {
          "name": "Harmful, Not Harmful",
          "children": [
             {"id":19, "name": "Target-Based Offensive Language Identification"}
          ]
         },
         {
          "name": "No offensiveness, Mildly offensive, Explicitly offensive",
          "children": [
             {"id":20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"}
          ]
         },
         {
          "name": "Hate, Offensive, Normal",
          "children": [
             {"id":21, "name": "Hate Speech and Offensive Language Detection in Bengali"}
          ]
         },
         {
          "name": "hate, non Hate, sexist, nonSexist",
          "children": [
             {"id":24, "name": "Multilingual and Multitarget Hate Speech Detection in Tweets"}
          ]
         },
         {
          "name": "Harmful, toxic, offensive",
          "children": [
             {"id":25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
          ]
         },
         {
          "name": "Fake, Real, Hate, Non-hate",
          "children": [
             {"id":27, "name": "Unpacking Faux-Hate: Addressing Faux-Hate Detection and Severity Prediction in Code-Mixed Hinglish Text with HingRoBERTa and Class Weighting Techniques"}
          ]
         },
         {
          "name": "abusive, non abusive",
          "children": [
             {"id":28, "name": "AbuseAnalyzer: Abuse Detection, Severity and Target Prediction for Gab Posts"}
          ]
         }
      ]
    },
    {
      "name": "Targets",
      "children": [
        {
          "name": "Ethnicity / Race / Nationality",
          "description": "Discrimination based on ethnic, racial, or national identity.",
          "children": [
            {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
            {"id": 3, "name": "Decoding Hate: Exploring Language Models’ Reactions to Hate Speech"},
            {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
            {"id": 15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
            {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
            {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
            {"id": 30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"}
          ]
        },
        {
          "name": "Religion / Belief System",
          "description": "Anti-religious or belief-based hate.",
          "children": [
            {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
            {"id": 3, "name": "Decoding Hate: Exploring Language Models’ Reactions to Hate Speech"},
            {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
            {"id": 6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
            {"id": 18, "name": "Robust Hate Speech Detection in Social Media: A Cross-Dataset Empirical Evaluation"},
            {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"}
          ]
        },
        {
          "name": "Gender / LGBTQ+",
          "description": "Sexist, homophobic, or transphobic speech.",
          "children": [
            {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
            {"id": 3, "name": "Decoding Hate: Exploring Language Models’ Reactions to Hate Speech"},
            {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
            {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
            {"id": 24, "name": "Multilingual and Multitarget Hate Speech Detection in Tweets"},
            {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"}
          ]
        },
        {
          "name": "Disability / Health",
          "description": "Mockery or hate based on disability or health condition.",
          "children": [
            {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
            {"id": 7, "name": "The 5Js in Ethiopia: Amharic Hate Speech Data Annotation Using Toloka Crowdsourcing Platform"},
            {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"}
          ]
        },
        {
          "name": "Politics / Ideology",
          "description": "Hate targeting political affiliations or ideologies.",
          "children": [
            {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
            {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
            {"id": 6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
            {"id": 15, "name": "Model-Dependent Moderation: Inconsistencies in Hate Speech Detection Across LLM-based Systems"},
            {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"},
            {"id": 23, "name": "Large-Scale Hate Speech Detection with Cross-Domain Transfer"}
          ]
        },
        {
          "name": "Age / Job / Social Role",
          "description": "Bias based on age, occupation, or social role.",
          "children": [
            {"id": 20, "name": "K-HATERS: A Hate Speech Detection Corpus in Korean with Target-Specific Ratings"}
          ]
        },
        {
          "name": "Individual / Organization / Community",
          "description": "Hate directed at a person, institution, or community.",
          "children": [
            {"id": 2, "name": "Nepali Transformers@NLU of Devanagari Script Languages 2025: Detection of Language, Hate Speech and Targets"},
            {"id": 4, "name": "Natural Language Understanding of Devanagari Script Languages: Language Identification, Hate Speech and its Target Detection"},
            {"id": 27, "name": "Unpacking Faux-Hate: Addressing Faux-Hate Detection and Severity Prediction in Code-Mixed Hinglish Text with HingRoBERTa and Class Weighting Techniques"},
            {"id": 28, "name": "AbuseAnalyzer: Abuse Detection, Severity and Target Prediction for Gab Posts"}
          ]
        },
        {
          "name": "Region / Language Group",
          "description": "Bias related to geographic region or language/dialect.",
          "children": [
            {"id": 30, "name": "STATE ToxiCN: A Benchmark for Span-level Target-Aware Toxicity Extraction in Chinese Hate Speech Detection"},
            {"id": 25, "name": "Measuring Harmful Representations in Scandinavian Language Models"},
            {"id": 26, "name": "Hate Speech Classification in Bulgarian"}
          ]
        },
        {
          "name": "Others / Minority / Social Issues",
          "description": "Stereotypes and prejudice toward other marginalized groups.",
          "children": [
            {"id": 1, "name": "AFRIHATE: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages"},
            {"id": 5, "name": "Multi3Hate: Multimodal, Multilingual, and Multicultural Hate Speech Detection with Vision–Language Models"},
            {"id": 6, "name": "Exploring Boundaries and Intensities in Offensive and Hate Speech: Unveiling the Complex Spectrum of Social Media Discourse"},
            {"id": 24, "name": "Multilingual and Multitarget Hate Speech Detection in Tweets"},
            {"id": 29, "name": "Hate Speech Classifiers are Culturally Insensitive"}
          ]
        }
      ]
    }
  ]
};



let data = merged; // default
const svg = d3.select("#tree");
let g; // group for pan/zoom content
let zoom;
let treeLayout;
let root;
let nodeIdCounter = 0;
let selectedNode = null;
let radial = false;
// Tooltip
const tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
// ---------- Init tree ----------
function initTree() {
  svg.selectAll("*").remove();
  nodeIdCounter = 0;

  const container = svg.node().parentNode;
  const width = container.clientWidth || 1200;
  const height = container.clientHeight || 800;

  svg.attr("width", width).attr("height", height);

  g = svg.append("g").attr("transform", `translate(0,0)`);

  zoom = d3.zoom()
    .scaleExtent([0.2, 3])
    .on("zoom", (event) => { g.attr("transform", event.transform); });
  svg.call(zoom);

  treeLayout = d3.tree().size([height - 100, width - 40]);

  root = d3.hierarchy(data);
  root.x0 = height / 2;
  root.y0 = 0;
  root.children && root.children.forEach(collapse);
  update(root);

  svg.transition().duration(300)
    .call(zoom.transform, d3.zoomIdentity.translate(width / 6, 50).scale(1));
}

// ---------- Taxonomy Selection ----------
const taxonomies = {
  merged: merged,
  platform: platformData,
  country: countryData,
  dataset: datasetData
};

const taxonomySelect = document.getElementById("taxonomySelector");
taxonomySelect?.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  if (!selectedValue || !taxonomies[selectedValue]) return;

  // Replace global data
  data = JSON.parse(JSON.stringify(taxonomies[selectedValue]));

  // Reset tree state
  selectedNode = null;
  nodeIdCounter = 0;
  root = d3.hierarchy(data);
  root.x0 = 400;
  root.y0 = 0;
  root.children && root.children.forEach(collapse);

  // Re-render tree
  update(root);

  // Reset zoom/pan
  svg.transition().duration(300)
    .call(zoom.transform, d3.zoomIdentity.translate(200, 50).scale(1));
});
// ---------- Profile Popup Controls ----------
const profilePopup = document.getElementById("profilePopup");
const closeProfileBtn = document.getElementById("closeProfilePopup");
const minimizeProfileBtn = document.getElementById("minimizeProfilePopup");

closeProfileBtn?.addEventListener("click", () => {
  profilePopup.style.display = "none";
});

minimizeProfileBtn?.addEventListener("click", () => {
  profilePopup.classList.toggle("minimized");
});
// ---------- Collapse / Expand helpers ----------
function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

function expandAll(d) {
  if (d._children) {
    d.children = d._children;
    d._children = null;
  }
  if (d.children) d.children.forEach(expandAll);
}

function collapseAll(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapseAll);
    d.children = null;
  }
}

function expandLevel(level) {
  root.each(d => {
    if (d.depth === level && d._children) {
      d.children = d._children;
      d._children = null;
    }
  });
  update(root);
}

function collapseLevel(level) {
  root.each(d => {
    if (d.depth === level && d.children) {
      d._children = d.children;
      d.children = null;
    }
  });
  update(root);
}
// Flatten including collapsed branches
function flattenAllNodes(rootNode) {
  const nodes = [];
  function recurse(n) {
    nodes.push(n);
    if (n.children) n.children.forEach(recurse);
    if (n._children) n._children.forEach(recurse);
  }
  recurse(rootNode);
  return nodes;
}

// ---------- Rendering update ----------
function update(source) {
  const container = svg.node().parentNode;
  const height = container.clientHeight || 800;

  const maxDepth = d3.max(root.descendants(), d => d.depth) || 1;
  const horizSpacing = 260;
  const dynamicWidth = maxDepth * horizSpacing + 400;

  treeLayout.nodeSize([15, 300]);
  svg.attr("width", dynamicWidth + 500);

  const treeData = treeLayout(root);
  const nodes = treeData.descendants();
  const links = treeData.links();

  nodes.forEach(d => {
    if (radial) {
      const r = d.y;
      const a = d.x;
      d.x = r * Math.sin(a);
      d.y = r * Math.cos(a);
    }
  });

  // ---- NODES ----
  const node = g.selectAll("g.node")
    .data(nodes, d => d.id || (d.id = ++nodeIdCounter));

  const nodeEnter = node.enter().append("g")
  .attr("class", "node")
  .attr("transform", `translate(${source.y0 || 0},${source.x0 || 0})`)
  .on("click", function (event, d) {
    if (d.children) { d._children = d.children; d.children = null; }
    else if (d._children) { d.children = d._children; d._children = null; }
    loadPanel(d);
    update(d);
  })
  .on("mouseover", function (event, d) {
    tooltip.style("opacity", 1)
      .html(`<strong>${d.data.name}</strong><br>${(d.data.definition || d.data.defination || d.data.description) || 'No details.'}`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY + 10) + "px");
  })
  .on("mousemove", function (event) {
    tooltip.style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY + 10) + "px");
  })
  .on("mouseout", function () {
    tooltip.style("opacity", 0);
  });

nodeEnter.append("circle")
  .attr("r", 1e-6)
  .style("fill", d => d._children ? "#ffb74d" : "#4f6ef7")
  .style("stroke", "#fff")
  .style("stroke-width", 2);

nodeEnter.append("text")
  .attr("dy", 4)
  .attr("x", d => (d.children || d._children) ? -12 : 12)
  .attr("text-anchor", d => (d.children || d._children) ? "end" : "start")
  .text(d => d.data.name)
  .style("font-size", "12px");

// ---- UPDATE ----
const nodeUpdate = nodeEnter.merge(node);
nodeUpdate.transition().duration(350)
  .attr("transform", d => `translate(${d.y},${d.x})`);

nodeUpdate.select("circle")
  .attr("r", 7)
  .style("fill", d => d._children ? "#ffb74d" : "#4f6ef7")
  .style("stroke", "#fff")
  .style("stroke-width", 2);


  // ---- EXIT NODES ----
  const nodeExit = node.exit();
  nodeExit.transition().duration(350)
    .attr("transform", `translate(${source.y || 0},${source.x || 0})`)
    .remove();

  // ---- LINKS ----
  const link = g.selectAll("path.link")
  .data(links, d => d.target.id);

const linkEnter = link.enter().insert("path", "g")
  .attr("class", "link")
  .attr("stroke", "#ccc")
  .attr("stroke-width", 2)
  .attr("fill", "none")
  .attr("d", d => {
    const o = { x: source.x0 || 0, y: source.y0 || 0 };
    return diagonal(o, o);
  });

linkEnter.merge(link)
  .transition().duration(350)
  .attr("d", d => diagonal(d.source, d.target));

link.exit().transition().duration(350)
  .attr("d", d => {
    const o = { x: source.x || 0, y: source.y || 0 };
    return diagonal(o, o);
  })
  .remove();

  nodes.forEach(d => {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

function diagonal(s, d) {
    return `M ${s.y} ${s.x} C ${(s.y + d.y) / 2} ${s.x}, ${(s.y + d.y) / 2} ${d.x}, ${d.y} ${d.x}`;
  }
// ---------- Node panel ----------
function loadPanel(d) {
  selectedNode = d;
  document.getElementById('panelTitle').textContent = d.data.name;
  document.getElementById('panelMeta').textContent = `Depth: ${d.depth} • Children: ${(d.children || d._children || []).length}`;
  document.getElementById('panelDef').value = d.data.definition || d.data.defination || d.data.description || '';
  document.getElementById('newNodeName').value = d.data.name || '';
  document.getElementById('newNodeDesc').value = d.data.definition || d.data.defination || d.data.description || '';

  const rightPanel = document.querySelector('.panel');
  if (rightPanel.style.display === 'none') {
    rightPanel.style.display = 'block';
    document.getElementById('togglePanelBtn').textContent = 'Hide Panel';
  }
}

// ---------- Highlight helpers ----------
function highlightNodes(nodesToHighlight) {
  d3.selectAll("g.node circle")
    .style("stroke", "#fff")
    .style("stroke-width", 2);

  if (!nodesToHighlight || nodesToHighlight.length === 0) return;

  nodesToHighlight.forEach(d => {
    d3.selectAll("g.node").filter(n => n === d)
      .select("circle")
      .style("stroke", "red")
      .style("stroke-width", 4);
  });
}

function clearHighlights() {
  d3.selectAll("g.node circle")
    .style("stroke", "#fff")
    .style("stroke-width", 2);
}

// ---------- Utility: isLeaf ----------
function isLeafNode(n) {
  const hasChildren = (n.children && n.children.length > 0) || (n._children && n._children.length > 0);
  return !hasChildren;
}

// ---------- Search / Filter ----------
function filterTreeByQuery(query) {
  const q = query.trim().toLowerCase();
  if (!q) return d3.hierarchy(data);

  const filteredData = JSON.parse(JSON.stringify(data));
  const filteredRoot = d3.hierarchy(filteredData);

  function recurse(node) {
    if (!node.children && !node._children) {
      const nameMatch = node.data.name && node.data.name.toLowerCase().includes(q);
      const defMatch = (node.data.definition || node.data.defination || node.data.description || '').toLowerCase().includes(q);
      return nameMatch || defMatch;
    }

    if (node.children) node.children = node.children.filter(child => recurse(child));
    if (node._children) node._children = node._children.filter(child => recurse(child));

    return (node.children && node.children.length > 0) || (node._children && node._children.length > 0);
  }

  recurse(filteredRoot);
  return filteredRoot;
}

// ---------- Search rendering ----------
function searchAndBuildResults(query) {
  const q = query.trim().toLowerCase();
  if (!q) return { groups: {}, taxonomy: getCurrentTaxonomyName(), matchedLeaves: [] };

  const all = flattenAllNodes(root);

  const matchedLeaves = all.filter(n => isLeafNode(n) &&
    (
      (n.data.name && n.data.name.toLowerCase().includes(q)) ||
      ((n.data.definition || n.data.defination || n.data.description) &&
       (n.data.definition || n.data.defination || n.data.description).toLowerCase().includes(q))
    )
  );

  const groups = {};
  matchedLeaves.forEach(leaf => {
    const fullPath = [];
    let p = leaf;
    while (p) { fullPath.unshift(p); p = p.parent; }
    const pathExRoot = fullPath.slice(1);
    if (pathExRoot.length === 0) return;

    const childIndex = Math.max(0, pathExRoot.length - 2);
    const childCategoryNode = pathExRoot[childIndex];
    const childCategory = childCategoryNode && childCategoryNode.data.name ? childCategoryNode.data.name : "(No child)";

    let parentCategoryNode;
    if (pathExRoot.length >= 3) parentCategoryNode = pathExRoot[pathExRoot.length - 3];
    else parentCategoryNode = pathExRoot[0];
    const parentCategory = (parentCategoryNode && parentCategoryNode.data.name) ? parentCategoryNode.data.name : "(No parent)";

    const childDef = childCategoryNode.data.definition || childCategoryNode.data.defination || childCategoryNode.data.description || "No description";

    if (!groups[parentCategory]) groups[parentCategory] = {};
    if (!groups[parentCategory][childCategory]) groups[parentCategory][childCategory] = new Set();
    groups[parentCategory][childCategory].add(childDef);
  });

  const normalized = {};
  Object.keys(groups).forEach(parent => {
    normalized[parent] = {};
    Object.keys(groups[parent]).forEach(child => {
      normalized[parent][child] = Array.from(groups[parent][child]);
    });
  });

  return { groups: normalized, taxonomy: getCurrentTaxonomyName(), matchedLeaves };
}

function renderSearchPopup(query) {
  const result = searchAndBuildResults(query);
  const popup = document.getElementById("profilePopup");
  const titleEl = document.getElementById("profileTitle");
  const contentEl = document.getElementById("profileContent");
  const badgeEl = document.getElementById("profileTaxonomyBadge");

  contentEl.innerHTML = "";
  titleEl.textContent = `${query} Profile`;
  if (badgeEl) badgeEl.textContent = result.taxonomy || getCurrentTaxonomyName();

  if (!result.groups || Object.keys(result.groups).length === 0) {
    contentEl.innerHTML = `<div class="important"><strong>No matches found.</strong></div>`;
    popup.style.display = "block";
    clearHighlights();
    return;
  }

  Object.keys(result.groups).forEach(parentName => {
    const childMap = result.groups[parentName];
    Object.keys(childMap).forEach(childName => {
      const headerDiv = document.createElement("div");
      headerDiv.style.marginTop = "8px";
      headerDiv.style.marginBottom = "4px";
      headerDiv.innerHTML = `<strong>${escapeHtml(parentName)}: ${escapeHtml(childName)}</strong>`;
      contentEl.appendChild(headerDiv);

      childMap[childName].forEach(defText => {
        const defDiv = document.createElement("div");
        defDiv.style.marginLeft = "8px";
        defDiv.style.marginBottom = "6px";
        defDiv.textContent = defText;
        contentEl.appendChild(defDiv);
      });
    });
  });

  clearHighlights();
  if (result.matchedLeaves && result.matchedLeaves.length > 0) highlightNodes(result.matchedLeaves);

  popup.style.display = "block";
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"'`=\/]/g, s => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"}[s]));
}

// ---------- Node search / clear wiring ----------
document.getElementById("searchBtn")?.addEventListener("click", () => {
  const query = document.getElementById("platformSearch").value.trim();
  if (!query) return alert("Enter a search term.");

  root = filterTreeByQuery(query);
  update(root);

  renderSearchPopup(query);
});

document.getElementById("clearSearchBtn")?.addEventListener("click", () => {
  root = d3.hierarchy(data);
  update(root);
  document.getElementById("platformSearch").value = '';
  clearHighlights();
});

// ---------- Panel toggle ----------
const rightPanel = document.querySelector('.panel');
const togglePanelBtn = document.getElementById('togglePanelBtn');
if (rightPanel) {
  rightPanel.style.display = "none";
  if (togglePanelBtn) togglePanelBtn.textContent = "Show Panel";
  togglePanelBtn?.addEventListener("click", () => {
    if (rightPanel.style.display === 'none') { rightPanel.style.display = 'block'; togglePanelBtn.textContent = "Hide Panel"; }
    else { rightPanel.style.display = 'none'; togglePanelBtn.textContent = "Show Panel"; }
  });
}

// Collapsible panel sections
document.querySelectorAll(".panel-section").forEach(section => {
  const header = section.querySelector(".panel-header");
  if (!header) return;
  header.setAttribute("data-title", header.textContent.replace(/[►▼]/g,'').trim());
  section.classList.add("collapsed");
  header.textContent = header.getAttribute("data-title") + " ►";
  header.addEventListener("click", () => {
    section.classList.toggle("collapsed");
    const symbol = section.classList.contains("collapsed") ? "►" : "▼";
    header.textContent = header.getAttribute("data-title") + " " + symbol;
  });
});

// ---------- Node add/update/delete ----------
document.getElementById("addNodeBtn")?.addEventListener("click", () => {
  const name = document.getElementById("newNodeName").value.trim();
  const desc = document.getElementById("newNodeDesc").value.trim();
  if (!selectedNode || !name) return alert("Select a node and enter a name for the new node.");
  if (!selectedNode.data.children && !selectedNode.data._children) selectedNode.data.children = [];
  if (selectedNode.data._children) {
    selectedNode.data.children = selectedNode.data._children;
    selectedNode.data._children = null;
  }
  selectedNode.data.children.push({ name, definition: desc || 'No description' });
  root = d3.hierarchy(data);
  update(root);
});

document.getElementById("updateNodeBtn")?.addEventListener("click", () => {
  if (!selectedNode) return alert("Select a node first.");
  const name = document.getElementById("newNodeName").value.trim();
  const desc = document.getElementById("newNodeDesc").value.trim();
  selectedNode.data.name = name || selectedNode.data.name;
  selectedNode.data.definition = desc || selectedNode.data.definition;
  selectedNode.data.defination = desc || selectedNode.data.defination;
  loadPanel(selectedNode);
  update(selectedNode);
});

document.getElementById("deleteNodeBtn")?.addEventListener("click", () => {
  if (!selectedNode || selectedNode === root) return alert("Select a non-root node to delete.");
  if (confirm(`Are you sure you want to delete "${selectedNode.data.name}"?`)) {
    const parent = selectedNode.parent;
    const siblings = parent.data.children || parent.data._children;
    if (!siblings) return;
    const idx = siblings.findIndex(n => n.name === selectedNode.data.name);
    if (idx >= 0) siblings.splice(idx, 1);
    root = d3.hierarchy(data);
    selectedNode = null;
    update(root);
  }
});
// ---------- Button wiring ----------
document.getElementById("expandAllBtn")?.addEventListener("click", () => {
  expandAll(root);
  update(root);
});

document.getElementById("collapseAllBtn")?.addEventListener("click", () => {
  collapseAll(root);
  update(root);
});

document.getElementById("expandLevelBtn")?.addEventListener("click", () => {
  const level = parseInt(prompt("Enter level to expand (root = 0):"));
  if (!isNaN(level)) expandLevel(level);
});

document.getElementById("collapseLevelBtn")?.addEventListener("click", () => {
  const level = parseInt(prompt("Enter level to collapse (root = 0):"));
  if (!isNaN(level)) collapseLevel(level);
});

document.getElementById("toggleLayoutBtn")?.addEventListener("click", () => {
  radial = !radial;
  update(root);
});
// ---------- Export / Import ----------
document.getElementById("exportJsonBtn")?.addEventListener("click", () => {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "tree_export.json";
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById("importJsonBtn")?.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try { data = JSON.parse(ev.target.result); root = d3.hierarchy(data); update(root); }
    catch(err) { alert("Invalid JSON file."); }
  };
  reader.readAsText(file);
});
// taxonomy selector switches the base data and rebuilds tree
  const taxonomySelector = document.getElementById("taxonomySelector");
  if (taxonomySelector) taxonomySelector.addEventListener("change", (event) => {
    const selected = event.target.value;
    if (selected === "platform") data = platformData;
    if (selected === "country") data = countryData;
    if (selected === "dataset") data = datasetData;
    if (selected === "merged") data = merged;
    g && g.selectAll("*").remove();
    selectedNode = null;
    svg.transition().duration(300).call(zoom.transform, d3.zoomIdentity);
    initTree();
  });
// ---------- Radial toggle ----------
document.getElementById("toggleRadialBtn")?.addEventListener("click", () => { radial = !radial; update(root); });

// ---------- Initial build ----------
initTree();

// Utility: stub for taxonomy name
function getCurrentTaxonomyName() { return "Default Taxonomy"; }

});
