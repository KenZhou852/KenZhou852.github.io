export function Time(props) {
  let timer = props.time;
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
