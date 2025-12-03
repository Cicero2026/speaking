const questions = [
  // Chapter 6: Organizing and outlining your speech
  {
    question: "Why is clear organization especially important in public speaking?",
    options: [
      "Because it makes the speaker sound more casual and relaxed",
      "Because it helps the audience follow, understand, and remember the message",
      "Because it allows the speaker to include as many points as possible",
      "Because it replaces the need for good delivery"
    ],
    answer: "B"
  },
  {
    question: "What should ultimately guide your choice of an organizational pattern for a speech?",
    options: [
      "Your personal speaking style",
      "The specific purpose of the speech",
      "The length of the assignment sheet",
      "The order of chapters in the textbook"
    ],
    answer: "B"
  },
  {
    question: "Which organizational pattern arranges main points according to time or sequence of events?",
    options: [
      "Topical pattern",
      "Spatial pattern",
      "Chronological pattern",
      "Problem–solution pattern"
    ],
    answer: "C"
  },
  {
    question: "Which organizational pattern is most appropriate for describing the layout of a theme park?",
    options: [
      "Spatial pattern",
      "Cause–effect pattern",
      "Refutation pattern",
      "Motivated sequence pattern"
    ],
    answer: "A"
  },
  {
    question: "Which organizational pattern is especially useful for gaining support for a policy change?",
    options: [
      "Problem–solution pattern",
      "Spatial pattern",
      "Topical pattern",
      "Chronological pattern"
    ],
    answer: "A"
  },
  {
    question: "In public speaking, what is the main function of connective statements?",
    options: [
      "To add humor",
      "To provide visual aids",
      "To link parts of the speech and show relationships",
      "To repeat the thesis statement"
    ],
    answer: "C"
  },
  {
    question: "Which sentence functions as an internal summary?",
    options: [
      "First, I will talk about the history of the Internet.",
      "So far, we have seen that the Internet has transformed education, business, and entertainment.",
      "Next, let’s consider possible future developments.",
      "In my speech today, I will cover three main points."
    ],
    answer: "B"
  },
  {
    question: "Which brief phrase is a good example of a signpost?",
    options: [
      "I will discuss this later.",
      "The first major reason is cost.",
      "There are many interesting ideas.",
      "Let me show you some statistics."
    ],
    answer: "B"
  },
  {
    question: "Main difference between preparation outline and speaking outline?",
    options: [
      "Prep outline is shorter",
      "Prep outline uses full sentences; speaking outline uses brief notes",
      "Prep outline is visual only",
      "Prep outline is for group work"
    ],
    answer: "B"
  },
  {
    question: "In outlining, what does the principle of subordination mean?",
    options: [
      "Main points must be equal in length",
      "Important ideas supported by more specific, less important ideas",
      "Introduction must be longer",
      "Visual aids listed first"
    ],
    answer: "B"
  },

  // Chapter 7: Supporting Your Speech Ideas
  {
    question: "What is the main reason speakers use supporting materials?",
    options: [
      "To make the speech longer",
      "To distract the audience with extra content",
      "To clarify ideas, add credibility, and strengthen arguments",
      "To replace the need for main points"
    ],
    answer: "C"
  },
  {
    question: "A short MRT scene used to introduce food insecurity is what type of supporting material?",
    options: [
      "Extended narrative",
      "Brief example",
      "Expert testimony",
      "Statistical evidence"
    ],
    answer: "B"
  },
  {
    question: "A long detailed story about an 8-year marathon training journey is what type of supporting material?",
    options: [
      "Lay testimony",
      "Extended narrative",
      "Definition",
      "Analogy"
    ],
    answer: "B"
  },
  {
    question: "“A survey of 10,000 users found that people check their phones an average of 96 times a day.” This is an example of:",
    options: [
      "Narrative",
      "Statistic",
      "Peer testimony",
      "Example"
    ],
    answer: "B"
  },
  {
    question: "During a mental health speech, quoting a licensed therapist with 20 years of experience is an example of:",
    options: [
      "Peer testimony",
      "Expert testimony",
      "Hypothetical example",
      "Definition"
    ],
    answer: "B"
  },
  {
    question: "A student surveys 25 classmates about their sleeping habits. Which statement is the most accurate and ethical?",
    options: [
      "All university students in the country sleep this way",
      "Scientific research proves everyone sleeps less than they should",
      "In my informal survey of 25 classmates, most said they sleep fewer than 6 hours",
      "This result applies to all young adults"
    ],
    answer: "C"
  },
  {
    question: "A student tries to take notes during a lecture while also watching videos. Her attention keeps shifting. This illustrates:",
    options: [
      "People can fully focus on many tasks at once",
      "Attention is limited, and switching tasks reduces processing quality",
      "Multitasking increases understanding",
      "Perception becomes stronger during distractions"
    ],
    answer: "B"
  },
  {
    question: "To regain attention, a lecturer suddenly displays an unexpected meme. This uses:",
    options: [
      "Familiarity",
      "Novelty",
      "Contrast",
      "Definition"
    ],
    answer: "B"
  },
  {
    question: "To explain a complex concept, a speaker uses an analogy: “Inflation is like a balloon filling with air.” This relies on:",
    options: [
      "Suspense",
      "Familiar objects and experiences",
      "Statistical comparison",
      "Expert testimony"
    ],
    answer: "B"
  },
  {
    question: "During a key moment, the speaker slows down, raises volume slightly, and emphasizes key words. This uses:",
    options: [
      "Movement",
      "Concreteness",
      "Intensity",
      "Novelty"
    ],
    answer: "C"
  },

  // Chapter 8: Introduction and Conclusion
  {
    question: "Which of the following is the primary purpose of an introduction in a speech?",
    options: [
      "To present all detailed evidence",
      "To get the audience's attention and preview the speech",
      "To tell a long personal story",
      "To summarize the entire speech"
    ],
    answer: "B"
  },
  {
    question: "A speaker begins with the question: “Have you ever felt overwhelmed by digital notifications?” What type of attention-getter is this?",
    options: [
      "A quotation",
      "A rhetorical question",
      "A startling statement",
      "A definition"
    ],
    answer: "B"
  },
  {
    question: "A student starts her speech by telling a short, emotional story about a friend who struggled with depression. Which introduction strategy is she using?",
    options: [
      "Humor",
      "Statistic",
      "Narrative",
      "Definition"
    ],
    answer: "C"
  },
  {
    question: "Which element should ALWAYS appear in the introduction of an academic speech?",
    options: [
      "A joke",
      "A detailed example",
      "A thesis statement",
      "A long quotation"
    ],
    answer: "C"
  },
  {
    question: "What is the purpose of a preview statement in an introduction?",
    options: [
      "To summarize the conclusion",
      "To list the main points that will be covered",
      "To give background on the speaker",
      "To transition to audience questions"
    ],
    answer: "B"
  },
  {
    question: "Which of the following is NOT a recommended way to begin a speech introduction?",
    options: [
      "Using surprising statistics",
      "Telling an engaging story",
      "Reading your entire speech word for word",
      "Asking a question"
    ],
    answer: "C"
  },
  {
    question: "A conclusion should primarily do which of the following?",
    options: [
      "Introduce new major arguments",
      "Reinforce the thesis and provide closure",
      "Repeat the entire introduction verbatim",
      "Tell unrelated personal stories"
    ],
    answer: "B"
  },
  {
    question: "What is a “clincher” in a speech conclusion?",
    options: [
      "The preview of main points",
      "The attention-getter in the middle of the speech",
      "A strong final line that leaves the audience thinking",
      "A detailed citation of sources"
    ],
    answer: "C"
  },
  {
    question: "“If each of us reduced our plastic use by just one item a day, imagine the impact on our oceans.” This is an example of:",
    options: [
      "A call to action",
      "A preview statement",
      "A definition",
      "A statistic"
    ],
    answer: "A"
  },
  {
    question: "Why is it important to avoid introducing new major ideas in the conclusion?",
    options: [
      "Because conclusions are too short",
      "Because audiences stop listening",
      "Because new information confuses the structure and weakens closure",
      "Because teachers do not allow it"
    ],
    answer: "C"
  },

  // Chapter 11: Delivery
  {
    question: "Which situation is the BEST example of impromptu speaking?",
    options: [
      "You read a written statement word-for-word at a company press conference.",
      "Your boss suddenly asks, “What did you think of the new project?” and you answer on the spot.",
      "You memorize a seven-minute speech and recite it exactly.",
      "You give a classroom speech using a detailed preparation outline."
    ],
    answer: "B"
  },
  {
    question: "Which of the following is the MOST appropriate situation for manuscript speaking?",
    options: [
      "Telling a funny story to friends.",
      "Reading a legal statement requiring perfect wording.",
      "Introducing yourself to a new class.",
      "Answering a short question from your teacher."
    ],
    answer: "B"
  },
  {
    question: "In your public speaking class, your teacher asks you to prepare an outline, practice many times, and then speak conversationally using brief notes. What method of delivery are you using?",
    options: [
      "Impromptu speaking",
      "Manuscript speaking",
      "Extemporaneous speaking",
      "Memorized speaking"
    ],
    answer: "C"
  },
  {
    question: "Which speaker is using memorized speaking?",
    options: [
      "An actor performs all his lines from memory without a script.",
      "A manager reads a full report word-for-word.",
      "A student answers a surprise question.",
      "A teacher speaks freely with no plan."
    ],
    answer: "A"
  },
  {
    question: "How does public speaking compare to everyday talking and reading a text?",
    options: [
      "Speaking is less formal than talking and more formal than reading.",
      "Speaking, talking, and reading all have the same formality.",
      "Speaking has more formality than talking, but less than reading.",
      "Speaking is always more formal than both."
    ],
    answer: "C"
  },
  {
    question: "Which behavior shows GOOD eye contact during a speech?",
    options: [
      "Staring only at the teacher the whole time.",
      "Looking up for one second, then back to the notes (“swimming”).",
      "Looking only at the back wall to avoid the audience.",
      "Looking at individual audience members for about five seconds each."
    ],
    answer: "D"
  },
  {
    question: "In terms of hands and feet during delivery, which posture is recommended?",
    options: [
      "Feet locked together, hands in pockets.",
      "Constant pacing.",
      "Feet shoulder-width apart, knees slightly bent, hands lightly on lectern when not gesturing.",
      "Standing on one leg."
    ],
    answer: "C"
  },
  {
    question: "A student is preparing to give a speech. What items should she bring to the lectern?",
    options: [
      "Only speaking notes and necessary visual aids.",
      "Notes, phone, pencil case, lucky toy.",
      "Laptop, water bottle, backpack, full textbook.",
      "Several pens to play with."
    ],
    answer: "A"
  },
  {
    question: "The chapter uses the “Goldilocks paradigm” to talk about delivery. What does a “just right” delivery look like?",
    options: [
      "Exaggerated shouting and movement.",
      "No movement, no gestures, flat voice.",
      "Natural delivery with controlled energy, balanced gestures, not too much or too little.",
      "Reading in a monotone voice."
    ],
    answer: "C"
  },
  {
    question: "A speaker tells a sad story in an excited tone, then tells an exciting story in a flat voice. What delivery problem is this?",
    options: [
      "Too much eye contact",
      "Poor vocal variety",
      "Too many gestures",
      "Too little movement"
    ],
    answer: "B"
  },

  // Chapter 12: Informative Speaking
  {
    question: "Which statement best describes an informative speech?",
    options: [
      "It aims to change the audience's beliefs or actions.",
      "It provides knowledge and understanding without trying to persuade.",
      "It asks the audience to vote or make a decision.",
      "It focuses on entertaining the audience only."
    ],
    answer: "B"
  },
  {
    question: "A speech explaining how coffee beans are processed from farm to cup is what type of informative speech?",
    options: [
      "Speech about an object",
      "Speech about a process",
      "Speech about an event",
      "Speech about a concept"
    ],
    answer: "B"
  },
  {
    question: "A student explains the life story of Frida Kahlo. What type is this?",
    options: [
      "Object",
      "Process",
      "Event",
      "Person/Place"
    ],
    answer: "D"
  },
  {
    question: "A speaker describes the 9/21 Earthquake in Taiwan. What type of informative speech is this?",
    options: [
      "Object",
      "Event",
      "Concept",
      "Process"
    ],
    answer: "B"
  },
  {
    question: "Which is an example of a speech about a concept?",
    options: [
      "How to bake a cake",
      "The history of the Eiffel Tower",
      "The meaning of democracy",
      "How the heart pumps blood"
    ],
    answer: "C"
  },
  {
    question: "What is a major guideline for selecting an informative speech topic?",
    options: [
      "Choose a topic trendy on social media.",
      "Choose a topic you find interesting and can explain clearly.",
      "Choose the topic your teacher likes.",
      "Choose the most complex topic possible."
    ],
    answer: "B"
  },
  {
    question: "Which method helps increase listener understanding?",
    options: [
      "Use jargon without explanation.",
      "Use clear organization and examples.",
      "Speak as fast as possible.",
      "Avoid visuals at all times."
    ],
    answer: "B"
  },
  {
    question: "Why should an informative speaker avoid information overload?",
    options: [
      "Because audiences like to memorize everything.",
      "Too much information reduces understanding.",
      "Teachers require fewer details.",
      "Slides must remain empty."
    ],
    answer: "B"
  },
  {
    question: "What is the risk of using too many statistics?",
    options: [
      "Audiences will become persuaded.",
      "Audiences stop listening due to overload.",
      "Audiences will memorize all numbers.",
      "Statistics are not allowed."
    ],
    answer: "B"
  },
  {
    question: "What makes a visual aid effective in an informative speech?",
    options: [
      "It is complex and full of text.",
      "It distracts the audience.",
      "It is simple, clear, and directly supports the message.",
      "It contains many colors and animations."
    ],
    answer: "C"
  },

  // Chapter 13: Persuasive Speaking
  {
    question: "In this textbook, persuasion is summarized as INFORMATION + ______ = PERSUASION.",
    options: [
      "Emotion",
      "Change",
      "Audience",
      "Evidence"
    ],
    answer: "B"
  },
  {
    question: "A speaker knows most audience members are at –2 on the persuasion continuum about climate change. What is a realistic goal for one speech?",
    options: [
      "Move them from –2 to +3",
      "Move them from –2 to +2",
      "Move them from –2 to –1 or 0",
      "Keep them at –2 to avoid anger"
    ],
    answer: "C"
  },
  {
    question: "A student says, \"The main cause of climate change is human activity.\" In persuasive speaking, this sentence is the:",
    options: [
      "Preview",
      "Transition",
      "Proposition",
      "Attention-getter"
    ],
    answer: "C"
  },
  {
    question: "Which situation is the BEST example of everyday persuasion?",
    options: [
      "Arguing by shouting insults",
      "Convincing a friend to see a movie rather than staying home",
      "Reading a novel silently",
      "Listening to background music"
    ],
    answer: "B"
  },
  {
    question: "According to the chapter, why is persuasion often difficult?",
    options: [
      "People love change",
      "Most audiences never listen",
      "People have a bias against change",
      "Speakers lack supporting material"
    ],
    answer: "C"
  },
  {
    question: "In a persuasive speech, the audience has a silent \"mental dialogue\" with the speaker. What does this mean?",
    options: [
      "The speaker talks to themselves",
      "The audience imagines random stories",
      "The audience questions and mentally responds to ideas",
      "A conversation occurs only on social media"
    ],
    answer: "C"
  },
  {
    question: "What does the “atmosphere of free choice” mean in ethical persuasion?",
    options: [
      "The speaker can say anything without proof",
      "The audience is forced to agree",
      "The audience is free to accept or reject the message",
      "The speech must be funny"
    ],
    answer: "C"
  },
  {
    question: "A student says: “Some people think social media is harmless. Let me explain why that idea is mistaken,” then refutes that view. This is an example of:",
    options: [
      "One-sided argument",
      "Two-sided argument",
      "Preview statement",
      "Transition"
    ],
    answer: "B"
  },
  {
    question: "Which behavior BEST builds a speaker’s ethos?",
    options: [
      "Using unrelated jokes",
      "Speaking very loudly",
      "Citing reliable and expert sources",
      "Avoiding eye contact"
    ],
    answer: "C"
  },
  {
    question: "A speaker uses statistics and logical reasoning to support a policy proposal to reduce traffic accidents. Which classical appeal is she using?",
    options: [
      "Ethos",
      "Pathos",
      "Logos",
      "Mythos"
    ],
    answer: "C"
  }
];
