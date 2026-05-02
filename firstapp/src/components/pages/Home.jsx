import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main landing page of our application.</p>
      <section className="cardmid">
        <h2>our cards</h2>
        <section className="card">
         <card />
         <card />
         <card />
         <card />
         <card />
        </section>
      </section>
    </div>
  );
}
export default Home;
function card() {
  return (
    <>
   <div>card</div> 
    
    </>
    
  )}