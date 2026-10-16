/* =====================================================================
   ✏️  EDIT THIS FILE TO PERSONALISE THE WEBSITE
   ---------------------------------------------------------------------
   • {name} anywhere in a text is replaced by `name` below.
   • Replace pictures by dropping new files into  assets/images/
     (keep the same file names, or change the paths here).
   • Replace the music by overwriting  audio/music.mp3
   ===================================================================== */
window.SITE_CONFIG = {
  name: "Sukrita",

  /* Secret code on the first screen (digits only). 6 digits = 6 hearts. */
  passcode: "161026",

  music: {
    src: "audio/music.mp3",
    volume: 0.45            // 0 – 1
  },

  lock: {
    title: "Unlock Your Surprise",
    hint: "Enter the secret code to begin hint is today (16-10-26)",
    wrong: "Oops, that's not it 💔  Try again"
  },

  gift: {
    title: "Something special is waiting...",
    hint: "Tap the button to open it ✨",
    button: "Open It!"
  },

  welcome: {
    line1: "Happy Birthday,",
    text: "A tiny page full of smiles, silly moments, and birthday magic 🌸. ",
    button: "Let's explore"
  },

  memories: {
    title: "Sweet Memories",
    hint: "Swipe the photo to see next ✨",
    button: "Read My Letter",
    photos: [
      { src: "assets/images/memory-1.jpg", caption: "Your cute version" },
      { src: "assets/images/memory-2.jpg", caption: "Your Asthetic version " },
      { src: "assets/images/memory-3.jpg", caption: "Your Smile version " }
    ]
  },

  mail: {
    title: "You've Got Mail! 🎀",
    hint: "Tap to open your special letter"
  },

  letter: {
    from: "For Cuti Pie ",
    pages: [
      {
        title: "Happy Birthday, Sukrita 🎂",
        paragraphs: [
          "Today is all about celebrating a wonderful person and making her day a little more special. 🎀 ",
          "Your cute little quirks, cheerful vibes, and silly moments make you truly one of a kind.",
          "May all our fun conversations, random laughs, and unforgettable moments turn into beautiful memories. 🌸",
          "Wishing you endless smiles, sweet surprises, lots of cake, and a year filled with happiness and exciting adventures. Keep shining, birthday girl! 💗"
        ],
        button: "Read More"
      },
      {
        paragraphs: [
          " I hope your birthday is filled with laughter, little surprises, yummy cake, and all the things that make you happy. 🎂,Keep being your adorable self, spreading smiles wherever you go. May this year bring you exciting adventures, beautiful memories, and countless reasons to celebrate. 🌸"
        ],
        signature: { big: "Stay Cute, Sukrita! 🎀.", small: "Keep Smiling & Shining ✨." },
        back: "Back",
        button: "Continue"
      }
    ]
  },

  puzzle: {
    title: "Fix the Picture 🧩",
    image: "assets/images/puzzle-cake.jpg",
    grid: 3,                 // 3 x 3 pieces
    memorizeSeconds: 3,
    memorizeText: "Memorize the image! Shuffling in {s}s...",
    playText: "Tap two pieces to swap them!",
    swapsLabel: "Swaps",
    doneText: "Picture Fixed! 🎉",
    button: "Take the Quiz"
  },

  /* answer = index (starting at 0) of the correct option */
  quiz: [
    { q: "What's the best birthday treat?", options: ["Pizza 🍕", "Cake 🎂", "Ice cream 🍦", "All of them 😋"], answer: 3 },
    { q: "What's a perfect day off?", options: ["Sleeping 😴", "Watching movies 🎬", "Going out 🌸", "All sound good ✨"], answer: 2 },
    { q: "Choose your birthday superpower!", options: ["Unlimited wishes 🌟", "Instant happiness 😊", "Endless snacks 🍟", "All three 💖"], answer: 0 },
    { q: "What should this birthday bring? ", options: ["Good luck 🍀", "Big smiles 😁", "Lovely memories 📸", "Everything above 🎀"], answer: 3 },
    { q: "What's Sukrita's superpower? 🌸", options: ["Making everyone laugh 😂", "Being adorably dramatic 🎀", "Turning boring days fun ✨", "Keeping everyone guessing 🤭"], answer: 0 }
  ],

  result: {
    title: "Quiz Complete :)",
    text: "You got {score} out of {total} right! 💕",
    button: "One Last Thing"
  },

  finale: {
    photo: "assets/images/cat.webp",        // animated picture (any jpg/png/webp/gif works)
    kicker: "Once again,",
    title: "Happy Birthday, {name}",
    text: "I hope this little surprise made you smile! Keep collecting happy moments, laughing at silly things, and making ordinary days feel special. Wishing you a year full of happiness, success, sweet memories, and lots of cake! 🎀",
    button: "Relive it"
  }
};
