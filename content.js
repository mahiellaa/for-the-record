/* ✦ EDIT THIS FILE TO MAKE THE SITE YOURS ✦
   Add as many songs and entries as you want. Copy an item, add a comma, change the words.
   URLs can be Spotify, YouTube, or anywhere else. */
const SITE = {
  title: 'For the record,',
  tagline: 'some things are easier to keep than to explain.',
  about: {
    name: 'the girl behind the curtain',
    intro: 'A small introduction, if you insist.',
    bio: 'A place for the things I write, the songs I collect, and the details I tend to remember. Replace this paragraph with your own story. You can be as mysterious or as open as you like.',
    portrait: '☾', // Replace with an emoji, or edit the portrait HTML to add your photo.
    favorites: ['midnight walks', 'old records', 'orange skies', 'strange little things'],
    links: [{label:'my instagram ↗',url:'https://instagram.com/'},{label:'my music ↗',url:'https://open.spotify.com/'}]
  }
};
const SONGS = [
  {title:'Know You',artist:'Kevin Atwater',memory:'the peculiar feeling of missing someone you were still getting to know.',url:'https://www.youtube.com/results?search_query=Kevin+Atwater+Know+You',symbol:'☾',card:'THE STRANGER'},
  {title:'Milk',artist:'The 1975',memory:'a night that seemed ordinary until it became something to remember.',url:'https://www.youtube.com/results?search_query=The+1975+Milk',symbol:'✷',card:'THE EMBER'},
  {title:'Merry Christmas, Please Don’t Call',artist:'Bleachers',memory:'some conversations keep going long after the other person leaves.',url:'https://www.youtube.com/results?search_query=Bleachers+Merry+Christmas+Please+Dont+Call',symbol:'♱',card:'THE AFTERWORD'},
  {title:'The Louvre',artist:'Lorde',memory:'a place, a sound, a moment that might have meant something different to each of us.',url:'https://www.youtube.com/results?search_query=Lorde+The+Louvre',symbol:'✦',card:'THE MIRROR'},
  {title:'About You',artist:'The 1975',memory:'some songs find their way back to the same person.',url:'https://www.youtube.com/results?search_query=The+1975+About+You',symbol:'✧',card:'THE STAR'},
  {title:'Moon Song',artist:'Phoebe Bridgers',memory:'an example memory — write something only you would remember here.',url:'https://www.youtube.com/results?search_query=Phoebe+Bridgers+Moon+Song',symbol:'☄',card:'THE MOON'},
  {title:'Dreams',artist:'The Cranberries',memory:'an example memory — replace this with a little scene, a conversation, or a feeling.',url:'https://www.youtube.com/results?search_query=The+Cranberries+Dreams',symbol:'❋',card:'THE ORACLE'},
  {title:'505',artist:'Arctic Monkeys',memory:'an example memory — you can add dozens more tracks using the same format.',url:'https://www.youtube.com/results?search_query=Arctic+Monkeys+505',symbol:'♢',card:'THE RETURN'}
];
const ENTRIES = [
  {title:'An Inventory of Almosts',date:'ENTRY 001 · OCTOBER',preview:'For the things that never happened, there is an astonishing amount to remember.',body:'For the things that never happened, there is an astonishing amount to remember.\n\nThis is sample text. Replace it with a complete essay, a confession, a poem, or an entry from your diary.\n\nSeparate paragraphs with a blank line, just like this.'},
  {title:'Secondhand',date:'ENTRY 002 · OCTOBER',preview:'Sometimes a person leaves behind a habit rather than a photograph.',body:'Sometimes a person leaves behind a habit rather than a photograph.\n\nWrite your longer entry here. There is no word limit.'},
  {title:'Unsent',date:'ENTRY 003 · OCTOBER',preview:'A place for sentences that did not make it into conversation.',body:'A place for sentences that did not make it into conversation.\n\nThis is where your actual writing goes.'},
  {title:'The Long Way Home',date:'ENTRY 004 · OCTOBER',preview:'There are streets that become important for no good reason.',body:'There are streets that become important for no good reason.\n\nKeep adding entries by copying this object.'}
];
