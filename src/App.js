import './App.css';
import image from './imageInSrc.jpg'
function App() {
return (
<div style={{border:'solid 1px black', maxWidth:'100vw'}}>
<h1 className="title red">Your name here</h1>
<br/>
<img src={image} />
<br/>
 <video  controls width="320" height="240" >
<source src="myVideo.mp4" type="video/mp4" />
</video>
</div>
  );
}
export default App;