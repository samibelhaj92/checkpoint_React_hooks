import React from 'react';
import {useState} from 'react';
import Navigation from './Components/Navbar';
import PosterOne from './Components/Posters/dr_no.jpg';
import PosterTwo from './Components/Posters/from_russia_with_love.jpg';
import PosterThree from './Components/Posters/goldfinger.jpg';
import PosterFour from './Components/Posters/thunderball.png';
import PosterFive from './Components/Posters/you_only_live_twice.jpg';
import PosterSix from './Components/Posters/on_her_majesty_s_secret_service.jpg';
import PosterSeven from './Components/Posters/diamonds_are_forever.jpg';
import MovieList from './Components/MovieList';
import Example from './Components/Add';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrendsList from './Components/TrendsList';

function App () {
  const [movies, setMovies] = useState( [ 
    { id: 0,
    posterURL: PosterOne , 
    title: "DR. NO", 
    description: "In the film that launched the James Bond saga, Agent 007 (Sean Connery) battles mysterious Dr. No, a scientific genius bent on destroying the U.S. space program. As the countdown to disaster begins, Bond must go to Jamaica, where he encounters beautiful Honey Ryder (Ursula Andress), to confront a megalomaniacal villain in his massive island headquarters.", 
    director:	"Terence Young",
    runtime: "1h 50m",
    rate: 5},

    {id: 1,
    posterURL: PosterTwo , 
    title: "FROM RUSSIA WITH LOVE", 
    description:"Agent 007 (Sean Connery) is back in the second installment of the James Bond series, this time battling a secret crime organization known as SPECTRE. Russians Rosa Klebb (Lotte Lenya) and Kronsteen are out to snatch a decoding device known as the Lektor, using the ravishing Tatiana (Daniela Bianchi) to lure Bond into helping them. Bond willingly travels to meet Tatiana in Istanbul, where he must rely on his wits to escape with his life in a series of deadly encounters with the enemy.", 
    director:	"Terence Young",
    runtime: "1h 58m",
    rate: 5},

    {id: 2,
    posterURL: PosterThree ,
    title: "GOLDFINGER", 
    description:"Special agent 007 (Sean Connery) comes face to face with one of the most notorious villains of all time, and now he must outwit and outgun the powerful tycoon to prevent him from cashing in on a devious scheme to raid Fort Knox -- and obliterate the world's economy.", 
    director:	"Terence Young",
    runtime: "1h 58m",
    rate: 5},
    
    {id: 3,
    posterURL: PosterFour ,
    title: "THUNDERBALL", 
    description:"Led by one-eyed evil mastermind Emilio Largo (Adolfo Celi), the terrorist group SPECTRE hijacks two warheads from a NATO plane and threatens widespread nuclear destruction to extort 100 million pounds. The dashing Agent 007, James Bond (Sean Connery), is sent to recover the warheads from the heart of Largo's lair in the Bahamas, facing underwater attacks from sharks and men alike. He must also convince the enchanting Domino (Claudine Auger), Largo's mistress, to become a key ally.", 
    director:	"Terence Young",
    runtime: "2h 10m",
    rate: 4},

    {id: 4,
    posterURL: PosterFive ,
    title: "YOU ONLY LIVE TWICE", 
    description:"During the Cold War, American and Russian spacecrafts go missing, leaving each superpower believing the other is to blame. As the world teeters on the brink of nuclear war, British intelligence learns that one of the crafts has landed in the Sea of Japan. After faking his own death, secret agent James Bond (Sean Connery) is sent to investigate. In Japan, he's aided by Tiger Tanaka (Tetsuro Tamba) and the beautiful Aki (Akiko Wakabayashi), who help him uncover a sinister global conspiracy.", 
    director:	"Lewis Gilbert",
    runtime: "1h 56m",
    rate: 3},

    {id: 5,
    posterURL: PosterSix ,
    title: "ON HER MAJESTY'S SECRET SERVICE", 
    description:"Agent 007 (George Lazenby) and the adventurous Tracy Di Vicenzo (Diana Rigg) join forces to battle the evil SPECTRE organization in the treacherous Swiss Alps. But the group's powerful leader, Ernst Stavro Blofeld (Telly Savalas), is launching his most calamitous scheme yet: a germ warfare plot that could kill millions!", 
    director:	"Peter Hunt",
    runtime: "2h 20m",
    rate: 4},
          
    {id: 6,
    posterURL: PosterSeven ,
    title: "DIAMONDS ARE FOREVER", 
    description:"While investigating mysterious activities in the world diamond market, 007 (Sean Connery) discovers that his evil nemesis Blofeld (Charles Gray) is stockpiling the gems to use in his deadly laser satellite. With the help of beautiful smuggler Tiffany Case (Jill St. John), Bond sets out to stop the madman -- as the fate of the world hangs in the balance!", 
    director:	"Guy Hamilton",
    runtime: "1h 59m",
    rate: 2},
  ]);

  const [trends, setTrends] = useState( [ 
    { id: 0,
    posterURL: PosterOne , 
    title: "DR. NO", 
    year: "1962",
    rate: 5},

    {id: 1,
    posterURL: PosterTwo , 
    title: "FROM RUSSIA WITH LOVE", 
    year: "1963m",
    rate: 5},

    {id: 2,
    posterURL: PosterThree ,
    title: "GOLDFINGER", 
    year:	"1964",
    rate: 5},
  ]);



  return (
    <div className="App">
      
    <div>
      <Navigation />
      </div> 
    <div>
      <TrendsList trends={trends} setTrends = {setTrends}/>
      </div> 
      <div>
      <MovieList movies ={movies} setMovies= {setMovies} />
      </div>
      <div>
    <Example/>
      </div> 
      
    </div>
  );
}
export default App;
