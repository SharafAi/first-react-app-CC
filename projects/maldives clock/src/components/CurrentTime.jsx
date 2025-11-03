
let time = new Date();


let ClockTime = () => {
  return <p className="lead">this is the CurrentTime:{time.toLocaleDateString()}-{time.toLocaleTimeString() }</p>
}

export default ClockTime;