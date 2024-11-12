import React, { useState } from 'react';
import Navigation from './Navigation';
import { useLocation } from 'react-router-dom';

function Home() {
  let loc = useLocation();

  console.log(loc);

  let [total, setTotal] = useState(0);
  let [wickets, setWickets] = useState(0);
  let [overs, setOvers] = useState(0);
  let [dotballs, setDotballs] = useState(0);
  let [singles, setSingles] = useState(0);
  let [doubles, setDoubles] = useState(0);
  let [fours, setFours] = useState(0);
  let [sixes, setSixes] = useState(0);
  let [noballs, setNoballs] = useState(0);

  let maxWickets = 10;
  let maxOvers = 120;

  return (
    <div>
      <Navigation />
      <h1>Home</h1>

      <h2>{loc.state && loc.state.msg}</h2>

      <div className="scoreContainer">
        <div className="scoreLabels">
          <h2>TotalScore: {total}/{wickets}</h2>
          <h2>Overs: {parseInt(overs / 6)}.{overs % 6}</h2>
          <h2>Dot: {dotballs}</h2>
          <h2>Singles: {singles}</h2>
          <h2>Doubles: {doubles}</h2>
          <h2>Fours: {fours}</h2>
          <h2>Sixes: {sixes}</h2>
          <h2>Noballs: {noballs}</h2>
        </div>

        <div className="scoreBtn">
          <button className="wktBtn" type="button" onClick={() => {
            if (wickets < maxWickets && overs < maxOvers) {
              setOvers(overs + 1);
              setWickets(wickets + 1);
            }
          }}>Wickets</button>

          <button className="dotBtn" type="button" onClick={() => {
            if (wickets < maxWickets && overs < maxOvers) {
              setOvers(overs + 1);
              setDotballs(dotballs + 1);
            }
          }}>🔴Dot balls</button>

          <button className="singleBtn" type="button" onClick={() => {
            if (wickets < maxWickets && overs < maxOvers) {
              setTotal(total + 1);
              setSingles(singles + 1);
              setOvers(overs + 1);
            }
          }}>#1 Singles</button>

          <button className="doubleBtn" type="button" onClick={() => {
            if (wickets < maxWickets && overs < maxOvers) {
              setTotal(total + 2);
              setDoubles(doubles + 1);
              setOvers(overs + 1);
            }
          }}>#2 Doubles</button>

          <button className="fourBtn" type="button" onClick={() => {
            if (wickets < maxWickets && overs < maxOvers) {
              setTotal(total + 4);
              setFours(fours + 1);
              setOvers(overs + 1);
            }
          }}>#4 Fours</button>

          <button className="sixBtn" type="button" onClick={() => {
            if (wickets < maxWickets && overs < maxOvers) {
              setTotal(total + 6);
              setSixes(sixes + 1);
              setOvers(overs + 1);
            }
          }}>#6 Sixes</button>

          <button className="nobBtn" type="button" onClick={() => {
            if (wickets < maxWickets && overs < maxOvers) {
              setTotal(total + 1);
              setNoballs(noballs + 1);
            }
          }}>Nob</button>
        </div>
      </div>

      <div className="gameOverDiv">
        <span className="gameOverSpan">
          {wickets >= maxWickets || overs >= maxOvers
            ? `Game Over  Score:${total}  Wickets: ${wickets}  Overs: ${parseInt(overs / 6)}.${overs % 6}`
            : `Wickets: ${wickets}  Overs: ${parseInt(overs / 6)}.${overs % 6}`}
        </span>
      </div>
    </div>
  );
}

export default Home;