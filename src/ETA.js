export function ETA(props) {
  let timer = props.time;
  let FMAPhase = props.phase;

  if (FMAPhase == "Red") {
    timer += 150;
  } else if (FMAPhase == "Pink") {
    timer += 125;
  } else {
    timer += 100;
  }

  if (timer <= 0) {
    timer = 0;
  }
  if (timer % 60 < 10) {
    return (
      <h1>
        {Math.floor(timer / 60)}:0{timer % 60}
      </h1>
    );
  } else {
    return (
      <h1>
        {Math.floor(timer / 60)}:{timer % 60}
      </h1>
    );
  }
}
