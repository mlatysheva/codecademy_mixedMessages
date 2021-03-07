const lifeArray = ['easy', 'simple', 'exiting', 'dissappointing'];
const studyingArray = ['effort', 'time', 'thought', 'dedication'];
const sayingsObjArray = [{author: 'Vincent Van Gogh', saying: 'If you hear a voice within you say ‘you cannot paint,’ then by all means paint, and that voice will be silenced.'},
    {author: 'Mark Twain', saying: 'Don’t go around saying the world owes you a living. The world owes you nothing. It was here first.'},
    {author: 'Winston Churchill', saying: 'Success consists of going from failure to failure without loss of enthusiasm.'},
    {author: 'Alexander Graham Bell', saying: 'When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.'},
    {author: 'Thomas A. Edison', saying: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.'},
    {author: 'Nora Roberts', saying: 'If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place.'},
    {author: 'C.S. Lewis', saying: 'There are far, far better things ahead than any we leave behind.'}];

const lenLife = lifeArray.length;
const lenStudying = studyingArray.length;
const lenSayings = sayingsObjArray.length;

function createMessage() {
    let lifeMessage = `Life is not always ${lifeArray[Math.floor(Math.random() * lenLife)]}.`;
    let studyingMessage = `Studying requires ${studyingArray[Math.floor(Math.random() * lenStudying)]}.`;
    let ind = Math.floor(Math.random() * lenSayings);
    let sayingMessage = `As ${sayingsObjArray[ind]['author']} said, "${sayingsObjArray[ind]['saying']}"`;
    // Math.min(lenLife, lenStudying, lenSayings);
    return sayingMessage;
}
console.log(createMessage());
