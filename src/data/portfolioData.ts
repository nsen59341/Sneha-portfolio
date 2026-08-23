import snehaOfficialDpImg from '../assets/images/snehadp.png';
import snehaHeadshotImg from '../assets/images/snehadp.png';
import snehaMeditateImg from '../assets/images/meditation.png';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
  features: string[];
  ctaText: string;
}

export type SupportedLanguage = 'en' | 'mr' | 'hi';

export interface TestimonialItem {
  id: string;
  author: {
    en: string;
    mr: string;
    hi: string;
  };
  context: {
    en: string;
    mr: string;
    hi: string;
  };
  quote: {
    en: string;
    mr: string;
    hi: string;
  };
  highlight: {
    en: string;
    mr: string;
    hi: string;
  };
  type: 'handwritten' | 'chat' | 'reflection';
  originalLanguage: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  reelUrl: string;
  embedId: string;
  thumbnail: string;
  audioTrack?: string;
  views?: string;
  duration?: string;
  tag: string;
}

export const PORTFOLIO_CONFIG = {
  name: "Sneha Bhingare",
  credentials: "Certified Meditation Coach | Corporate Meditation Coach | Reiki Healer",
  tagline: "Find Your Calm. Reconnect With Yourself.",
  heroSupportingText: "I help people create greater calm, clarity, emotional balance, and mindfulness through practical meditation and wellness practices.",
  credibilityLine: "Certified Meditation Coach • Corporate Wellness • Reiki Healing",
  
  contact: {
    phone: "+91 8177875923",
    phoneTel: "tel:+918177875923",
    email: "snehabhingare90@gmail.com",
    emailMailto: "mailto:snehabhingare90@gmail.com?subject=Inquiry%20for%20Meditation%20%26%20Wellness%20Sessions",
    instagramHandle: "the_path_to_peace_with_sneha",
    instagramUrl: "https://www.instagram.com/the_path_to_peace_with_sneha/",
    linkedinHandle: "linkedin.com/in/sneha-bhingare",
    linkedinUrl: "https://www.linkedin.com/in/sneha-bhingare/",
    whatsappUrl: "https://wa.me/918177875923?text=Hello%20Sneha%2C%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20know%20more%20about%20your%20meditation%20and%20wellness%20sessions."
  },

  images: {
    heroPortrait: snehaOfficialDpImg,
    snehaHeadshot: snehaHeadshotImg,
    snehaMeditate: snehaMeditateImg,
    natureGarden: snehaOfficialDpImg,
  },

  aboutMe: {
    headline: "I guide you to slow down, build gentle awareness, and return home to yourself.",
    paragraphs: [
      "In our fast-paced lives, it is easy to look active on the outside while feeling mentally tired, emotionally heavy, or internally disconnected on the inside.",
      "As a Certified Meditation Coach, Corporate Wellness Coach, and Reiki Healer, I use practical mindfulness and breath-centered practices to help you pause, reconnect with your inner stillness, and build everyday emotional resilience.",
      "My work is grounded in a simple truth: when the mind heals, the body responds faster. I provide a calm, supportive space where you can let go of chronic overthinking, release emotional tension, and cultivate genuine peace."
    ],
    highlightQuote: "When the mind heals, the body responds faster.",
    coreValues: [
      {
        title: "Practical & Grounded",
        desc: "Techniques designed for real daily life, work schedules, and modern challenges."
      },
      {
        title: "Gentle & Non-Judgmental",
        desc: "A warm, safe environment where you are guided at your own natural pace."
      },
      {
        title: "Holistic Mind-Body Sync",
        desc: "Aligning mental clarity, breath, and inner energy with physical health."
      }
    ]
  },

  whoISupport: [
    {
      id: "professionals",
      title: "Working Professionals & Women",
      subtitle: "Navigating Emotional Fatigue",
      description: "Those managing demanding careers, household responsibilities, and emotional exhaustion who need a restorative space to recharge and regain clarity.",
      icon: "Briefcase"
    },
    {
      id: "stress-anxiety",
      title: "Stress, Anxiety & Overthinking",
      subtitle: "Lifestyle-Related Challenges",
      description: "Individuals feeling overwhelmed by racing thoughts, restless worry, or tension that impacts digestion, immunity, and daily peace.",
      icon: "HeartHandshake"
    },
    {
      id: "sleep-burnout",
      title: "Sleep, Focus & Burnout",
      subtitle: "Restoring Mental Stamina",
      description: "People struggling to fall asleep peacefully, experiencing brain fog, or feeling drained from prolonged mental strain.",
      icon: "Moon"
    },
    {
      id: "fitness-balance",
      title: "Inner Balance & Physical Fitness",
      subtitle: "Harmonizing Body and Mind",
      description: "Fitness enthusiasts, athletes, and transformation seekers who want emotional stability, workout consistency, and deeper recovery.",
      icon: "Activity"
    }
  ],

  howIHelp: [
    {
      title: "Calm the Nervous System",
      description: "Gentle breathwork and mindfulness techniques that shift your body out of chronic fight-or-flight into restorative relaxation.",
      tag: "Deep Relaxation"
    },
    {
      title: "Build Inner Discipline & Focus",
      description: "Strengthen your ability to concentrate with clarity, sustain healthy habits, and overcome procrastination without harsh pressure.",
      tag: "Clarity & Direction"
    },
    {
      title: "Release Mental & Emotional Blocks",
      description: "Create space to process lingering stress, silent doubts, and emotional fatigue so you can feel lighter and freer.",
      tag: "Emotional Freedom"
    },
    {
      title: "Improve Sleep & Foster Peace",
      description: "Calm evening restlessness, quiet late-night mental chatter, and transition into deeper, more restorative rest.",
      tag: "Restful Nights"
    },
    {
      title: "Feel Balanced, Grounded & Motivated",
      description: "Cultivate self-compassion, rediscover natural motivation, and stay anchored through life's everyday transitions.",
      tag: "Sustainable Energy"
    }
  ],

  myApproach: [
    {
      id: "guided",
      title: "Guided Meditation",
      description: "I guide step-by-step meditation practices structured to quiet the racing mind, nurture self-awareness, and induce deep mental peace.",
      essence: "Creates awareness and stillness"
    },
    {
      id: "breath",
      title: "Breath-Based Meditation",
      description: "I use intentional, rhythmic breath-focused practices to anchor you into the present moment and soothe physiological stress.",
      essence: "Supports mindfulness and presence"
    },
    {
      id: "mindfulness",
      title: "Mindfulness Practices",
      description: "I help you build simple, practical mindfulness habits that seamlessly weave into your work routine, meals, and daily conversations.",
      essence: "Practical habits for everyday life"
    },
    {
      id: "reiki",
      title: "Reiki Healing",
      description: "I incorporate gentle Reiki healing as part of my holistic approach to support energetic alignment, emotional release, and inner balance.",
      essence: "Energy balance and restoration"
    }
  ],

  services: [
    {
      id: "1-on-1",
      title: "1-on-1 Wellness Sessions",
      subtitle: "Personalized Emotional Clarity & Healing",
      description: "Deep, individualized sessions tailored to your specific emotional blocks, stress triggers, and personal wellness goals.",
      idealFor: "Individuals seeking private, focused guidance and personalized healing support.",
      features: [
        "In-depth personal emotional check-in",
        "Tailored breathwork & guided meditation",
        "Targeted emotional release & Reiki energy balancing",
        "Practical micro-practices to practice at home"
      ],
      ctaText: "Inquire About 1-on-1 Sessions"
    },
    {
      id: "guided-group",
      title: "Guided Meditation Sessions",
      subtitle: "Weekly or Monthly Practices",
      description: "Structured live meditation sessions designed to help you maintain consistency, quiet the mind, and recharge on a regular schedule.",
      idealFor: "Anyone wanting structured group accountability and recurring weekly/monthly calm.",
      features: [
        "Live interactive guided meditation",
        "Breath regulation & stillness practices",
        "Mindful journaling prompts and reflections",
        "A supportive, calm community atmosphere"
      ],
      ctaText: "Join Meditation Sessions"
    },
    {
      id: "custom-programs",
      title: "Customized Wellness Programs",
      subtitle: "Targeted Stress, Sleep & Mindset Journeys",
      description: "Comprehensive multi-week journeys built around your primary needs—whether mastering better sleep, overcoming burnout, or building mental focus.",
      idealFor: "Those looking for a systematic transformation with measurable progress over time.",
      features: [
        "Customized step-by-step roadmap",
        "Weekly progress check-ins & guided audio practices",
        "Sleep & stress management toolkits",
        "Ongoing support and lifestyle habit integration"
      ],
      ctaText: "Explore Custom Programs"
    },
    {
      id: "corporate-partnerships",
      title: "Corporate, Fitness & Healthcare Wellness",
      subtitle: "Integrated Add-On Wellness Programs",
      description: "Specialized corporate wellness workshops and complementary mental wellness modules designed to integrate with fitness centres, clinics, and teams.",
      idealFor: "Corporate organizations, gym/yoga studios, and healthcare providers enhancing client value.",
      features: [
        "Corporate stress-relief & desk-mindfulness workshops",
        "Add-on recovery & emotional wellness for fitness clients",
        "Enhanced client satisfaction & retention",
        "Positioning your brand as a holistic wellness leader"
      ],
      ctaText: "Collaborate With Me"
    }
  ],

  fitnessIntegration: {
    headline: "Mind & Body Work Better Together",
    subheadline: "I believe physical transformation becomes more sustainable when we also support the mind.",
    pillars: [
      {
        step: "1",
        title: "Emotional Stability During Transformation",
        desc: "Lifestyle changes bring emotional friction. Mindfulness helps you stay centered through highs and lows."
      },
      {
        step: "2",
        title: "Motivation Becomes Natural & Focused",
        desc: "Move away from forced willpower. Clear, calm mental focus fosters natural enthusiasm for your goals."
      },
      {
        step: "3",
        title: "Faster Recovery & Restorative Sleep",
        desc: "Lowering physiological stress hormones supports muscle recovery, nervous system repair, and deeper sleep."
      },
      {
        step: "4",
        title: "Reduced Emotional Eating & Burnout",
        desc: "Developing self-awareness helps recognize emotional triggers and break stress-eating loops gently."
      },
      {
        step: "5",
        title: "Greater Consistency With Workouts",
        desc: "When workouts feel grounded rather than punishing, consistency turns into a sustainable daily joy."
      }
    ],
    collaborationBenefits: [
      "Enhances your core fitness & healthcare service value",
      "Improves client satisfaction, adherence, and retention",
      "Supports faster, more sustainable transformation results",
      "Positions your practice as an authentic holistic health provider"
    ]
  },

  videos: [
    {
      id: "reel-1",
      title: "Finding Stillness in Everyday Moments",
      description: "A gentle guided reflection and breath technique for releasing mental tension and restoring inner peace during a busy day.",
      reelUrl: "https://www.instagram.com/the_path_to_peace_with_sneha/reel/DZZ_ezhssZt/",
      embedId: "DZZ_ezhssZt",
      thumbnail: snehaMeditateImg,
      audioTrack: "Original Audio • Mindful Stillness",
      views: "1.2k views",
      duration: "0:45",
      tag: "Guided Breathwork"
    },
    {
      id: "reel-2",
      title: "Mindfulness & Emotional Balance Practice",
      description: "How tuning into your breath creates space between stress and your response, fostering deep grounding and self-love.",
      reelUrl: "https://www.instagram.com/the_path_to_peace_with_sneha/reel/DYCfViAMCQ3/",
      embedId: "DYCfViAMCQ3",
      thumbnail: snehaOfficialDpImg,
      audioTrack: "Calm Healing Ambience • Sneha Bhingare",
      views: "2.4k views",
      duration: "0:58",
      tag: "Mindful Living"
    },
    {
      id: "reel-3",
      title: "Releasing Overthinking & Mental Fatigue",
      description: "Simple micro-meditation practice to break the cycle of racing thoughts and bring your awareness back to the present.",
      reelUrl: "https://www.instagram.com/the_path_to_peace_with_sneha/",
      embedId: "C8Z1jZ-S_1y",
      thumbnail: snehaHeadshotImg,
      audioTrack: "Gentle Breath Sounds • The Path to Peace",
      views: "1.8k views",
      duration: "1:15",
      tag: "Stress Relief"
    }
  ],

  testimonials: [
    {
      id: "prachi-15",
      author: {
        en: "Prachi (Age 15)",
        mr: "प्राची (वय १५)",
        hi: "प्राची (उम्र १५)"
      },
      context: {
        en: "First-time Guided Meditation Journey",
        mr: "पहिला मार्गदर्शित ध्यान अनुभव",
        hi: "पहला गाइडेड ध्यान अनुभव"
      },
      quote: {
        en: "Meditation is the source to which you unlock yourself. When one closes their eyes it seems to be like connecting with their soul... Concentrating on your breath with 0% thoughts in your mind. All this I have done under the guidance of Sneha didi. She guided me so clearly so that I was comfortable. My first experience made me calm and quiet.",
        mr: "ध्यान हा स्वतःला जाणून घेण्याचा एक सुंदर मार्ग आहे. जेव्हा आपण डोळे मिटतो, तेव्हा जणू आपल्या आत्म्याशी संवाद साधतो... मनात कोणतेही विचार न ठेवता फक्त श्वासावर लक्ष केंद्रित करणे. हे सर्व मी स्नेहा दीदींच्या मार्गदर्शनाखाली केले. त्यांनी इतके स्पष्ट आणि सोप्या पद्धतीने मार्गदर्शन केले की मला खूप शांत आणि हलके वाटले.",
        hi: "ध्यान स्वयं को जानने और समझने का एक सुंदर माध्यम है। जब हम आँखें बंद करते हैं तो ऐसा लगता है जैसे अपनी आत्मा से जुड़ रहे हों... मन में शून्य विचार रखकर केवल अपनी साँसों पर ध्यान केंद्रित करना। यह सब मैंने स्नेहा दीदी के मार्गदर्शन में सीखा। उनके शांत और स्पष्ट मार्गदर्शन ने मुझे अद्भुत शांति और सहजता दी।"
      },
      highlight: {
        en: "Focusing on my breath was like going to heaven and coming back.",
        mr: "फक्त श्वासावर लक्ष केंद्रित केल्याने मन पूर्णपणे शांत आणि प्रसन्न झाले.",
        hi: "साँसों पर ध्यान लगाने से मन पूरी तरह शांत और चिंतामुक्त हो गया।"
      },
      type: "handwritten",
      originalLanguage: "English"
    },
    {
      id: "working-prof-german",
      author: {
        en: "Corporate Professional",
        mr: "कॉर्पोरेट प्रोफेशनल",
        hi: "कॉर्पोरेट प्रोफेशनल"
      },
      context: {
        en: "Workplace Focus & Positive Energy",
        mr: "कामातील एकाग्रता आणि सकारात्मक ऊर्जा",
        hi: "कार्यस्थल पर एकाग्रता और सकारात्मक ऊर्जा"
      },
      quote: {
        en: "Even with demanding office work and learning German, I am able to concentrate and stay calm throughout the day. These positive shifts in my thinking and energy are because of you!",
        mr: "ऑफिसचे काम आणि जर्मन क्लास सांभाळतानाही मी दिवसभर शांत आणि एकाग्र राहू शकते. पण माझे हे बदल तुमच्यामुळेच आहेत. पॉझिटिव्ह विचारसरणी आणि ताजी ऊर्जा - हे सर्व तुमच्या मार्गदर्शनामुळे!",
        hi: "ऑफिस के व्यस्त काम और जर्मन क्लास के साथ भी मैं पूरे दिन शांत और एकाग्र रह पा रही हूँ। मेरी सोच और ऊर्जा में यह सकारात्मक बदलाव आपकी वजह से ही आया है!"
      },
      highlight: {
        en: "Positive thinking & focused energy in daily work",
        mr: "दैनंदिन कामात सकारात्मक विचार आणि ताजी ऊर्जा",
        hi: "दैनिक कार्य में सकारात्मक सोच और नई ऊर्जा"
      },
      type: "chat",
      originalLanguage: "Marathi"
    },
    {
      id: "fear-release-client",
      author: {
        en: "1-on-1 Healing Client",
        mr: "१-ऑन-१ हीलिंग क्लायंट",
        hi: "१-ऑन-१ हीलिंग क्लाइंट"
      },
      context: {
        en: "Emotional Release & Inner Confidence",
        mr: "भावनिक तणावातून मुक्ती आणि आत्मविश्वास",
        hi: "भावनात्मक तनाव से मुक्ति और आत्मविश्वास"
      },
      quote: {
        en: "Since you came into my life, I feel so much better and peaceful. The persistent fear I used to carry is no longer there like before. I understand and appreciate myself with so much more positivity.",
        mr: "तुम्ही माझ्या आयुष्यात आल्यापासून खूप छान वाटतंय. माझी भीती पहिल्यासारखी राहिलेली नाही. स्वतःला जास्त पॉझिटिव्ह समजते मी आणि मनातून खूप शांत वाटते.",
        hi: "जब से आप मेरे जीवन में आई हैं, मुझे बहुत अच्छा और सुकून महसूस हो रहा है। जो डर और घबराहट पहले रहती थी, अब बिल्कुल नहीं है। मैं खुद को बहुत सकारात्मक रूप से समझने लगी हूँ।"
      },
      highlight: {
        en: "My fear is gone. I feel much more positive about myself.",
        mr: "माझी भीती दूर झाली असून मनातून सकारात्मकता जाणवते.",
        hi: "मेरा डर दूर हो गया और मुझे खुद पर गहरा विश्वास हुआ।"
      },
      type: "chat",
      originalLanguage: "Marathi"
    },
    {
      id: "clarity-client",
      author: {
        en: "Mindfulness & Clarity Seeker",
        mr: "माइंडफुलनेस आणि स्पष्टता साधक",
        hi: "माइंडफुलनेस और स्पष्टता साधक"
      },
      context: {
        en: "Inner Alignment & Guidance",
        mr: "अंतर्मनातील स्पष्टता आणि योग्य दिशा",
        hi: "अंतर्मन की स्पष्टता और सही मार्गदर्शन"
      },
      quote: {
        en: "Today so many of my deep questions and dilemmas were resolved with clarity. Now I clearly understand which paths are right for me, and I feel confident that I am on the right way.",
        mr: "आज माझ्या मनातले अनेक प्रश्न आणि शंका दूर झाल्या. आता मला स्पष्टपणे समजते की कोणते मार्ग योग्य आहेत, आणि मला खात्री आहे की मी योग्य दिशेने जात आहे.",
        hi: "आज मेरे मन के कई गहरे सवाल और उलझनें पूरी तरह सुलझ गईं। अब मुझे साफ समझ आ रहा है कि कौन से रास्ते सही हैं और मुझे विश्वास है कि मैं सही राह पर हूँ।"
      },
      highlight: {
        en: "Clarity itself is a big step forward.",
        mr: "मनाची स्पष्टता मिळणे हीच प्रगतीची मोठी पायरी आहे.",
        hi: "मन की स्पष्टता मिलना ही आगे बढ़ने का सबसे बड़ा कदम है।"
      },
      type: "chat",
      originalLanguage: "Hindi"
    },
    {
      id: "pooja-wellness",
      author: {
        en: "Pooja M. (Working Mother)",
        mr: "पूजा एम. (वर्किंग मदर)",
        hi: "पूजा एम. (वर्किंग मदर)"
      },
      context: {
        en: "Stress Relief & Restorative Sleep",
        mr: "तणावमुक्ती आणि शांत झोप",
        hi: "तनावमुक्ति और गहरी नींद"
      },
      quote: {
        en: "Sneha's breath-based mindfulness techniques helped me manage daily emotional exhaustion and evening restlessness. I now sleep deeply and wake up with clarity.",
        mr: "स्नेहा यांच्या प्राणायाम आणि ध्यान तंत्राने मला दैनंदिन मानसिक थकवा दूर करण्यास खूप मदत केली. आता रात्री शांत झोप लागते आणि सकाळी मन ताजेतवाने असते.",
        hi: "स्नेहा के ध्यान और श्वास अभ्यास ने मुझे मानसिक थकान और तनाव से राहत दिलाई। अब मुझे रात में गहरी नींद आती है और दिन भर मन शांत रहता है।"
      },
      highlight: {
        en: "I now sleep deeply and wake up refreshed.",
        mr: "आता रात्री शांत झोप लागते आणि मन ताजेतवाने राहते.",
        hi: "अब रात में गहरी नींद आती है और मन हल्का रहता है।"
      },
      type: "reflection",
      originalLanguage: "English"
    }
  ]
};
