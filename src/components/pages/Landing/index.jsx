import pieChart from '../../../assets/pie-chart.png';
 import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

const imgObj = [
  { src: barGraph, caption: "Search Grant Rates By Office", id: 1},
  { src: pieChart, caption: "Search Grant Rates By Nationality", id:2 },
  { src: lineGraph, caption: "Search Grant Rates Over Time", id: 3}
]

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>

      <div className="flex flex-row justify-center" > 
       {
        imgObj.map(img => {
          return (
            <div key={img.id} >
            <img src={img.src} className='m-5 w-70 h-60 m' /> 
        <p>{img.caption}</p>
            </div>
          )
        })
       }

        
      </div>
      <br></br>
      <div className='flex flex-row justify-around'>
       <img src={paperStack} className='w-[45em] h-[27em] justify-self-center p-10 rounded-[50px] '/> 
       <p className='content-center pr-[200px]'  >Hello</p>
      </div>
    </div>
  );
};
