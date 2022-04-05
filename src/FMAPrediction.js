export function FMAPrediction(props) {
  let timeInPhase = 0;
  if (props.FMAPhase == "Red") {
    timeInPhase = 150;
  } else if (props.FMAPhase == "Pink") {
    timeInPhase = 125;
  } else if (props.FMAPhase == "Yellow") {
    timeInPhase = 100;
  }

  let FMATimer = props.FMA - timeInPhase;
  if (FMATimer % 60 < 10) {
    return (
      <h1>
        {Math.floor(FMATimer / 60)}:0{FMATimer % 60}
      </h1>
    );
  } else {
    return (
      <h1>
        {Math.floor(FMATimer / 60)}:{FMATimer % 60}
      </h1>
    );
  }
}
