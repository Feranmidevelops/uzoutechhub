// Every photo on the site lives here, so swapping in Uzou's own pictures is
// a one-file change. Current photos are free-licence images from Unsplash
// (https://unsplash.com/license) and stand in until real cohort photos exist.

const unsplash = (id) => ({
  id,
  src: (width = 1200) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`,
});

export const images = {
  heroLaptop: {
    ...unsplash('1716654718430-c7f54c3125c8'),
    alt: 'A young woman smiling as she works on her laptop',
  },
  heroFocus: {
    ...unsplash('1620829813573-7c9e1877706f'),
    alt: 'A young man concentrating on code on his laptop',
  },
  teensGroup: {
    ...unsplash('1683174411274-2adb89891739'),
    alt: 'A group of teenage girls sitting together and smiling',
  },
  pairLaptop: {
    ...unsplash('1645620766046-b129a9c5f658'),
    alt: 'Two young learners laughing while looking at a laptop',
  },
  communityOutdoors: {
    ...unsplash('1655720348590-c739c860beed'),
    alt: 'Young people sitting together outdoors with their laptops',
  },
  studyGroup: {
    ...unsplash('1655720357872-ce227e4164ba'),
    alt: 'Friends gathered on a sofa looking at a laptop together',
  },
  mentor: {
    ...unsplash('1655720352328-87e021d2a84e'),
    alt: 'A mentor guiding a learner through work on a laptop',
  },
  classroom: {
    ...unsplash('1758270705290-62b6294dd044'),
    alt: 'Students gathered around a laptop in a classroom',
  },
  liveSession: {
    ...unsplash('1694175271713-a6e2cc378980'),
    alt: 'A young man holding his laptop, ready for a live session',
  },

  // Course cards
  graphicDesign: { ...unsplash('1652376939752-29c9924afd8e'), alt: 'A designer at a desk with a large monitor and headphones' },
  uiux: { ...unsplash('1604933762021-54a5858c9832'), alt: 'A woman with braids designing on her laptop' },
  photography: { ...unsplash('1754233597288-4fb399b854fb'), alt: 'A photographer looking through a camera lens' },
  contentCreation: { ...unsplash('1771402899941-155687f230be'), alt: 'A young creator filming with a camera and gimbal' },
  frontend: { ...unsplash('1592234511588-15f20b429473'), alt: 'A young man building a website on his laptop' },
  backend: { ...unsplash('1541178735493-479c1a27ed24'), alt: 'A student focused on writing code' },
  fullstack: { ...unsplash('1726690330713-18c0c0efbdc0'), alt: 'A developer working on a laptop in a bright room' },
  python: { ...unsplash('1588674845784-9d0c32777b3a'), alt: 'A learner practising code at a wooden table' },
  dataAnalysis: { ...unsplash('1573164574397-dd250bc8a598'), alt: 'Three women reviewing data together at a table' },
  aiTools: { ...unsplash('1675250719891-37d4747c9e3d'), alt: 'A woman working with AI tools on her laptop' },
  digitalMarketing: { ...unsplash('1573164713712-03790a178651'), alt: 'A woman planning a campaign on her laptop' },
  productManagement: { ...unsplash('1739300293504-234817eead52'), alt: 'A woman presenting a product plan from her laptop' },
};
