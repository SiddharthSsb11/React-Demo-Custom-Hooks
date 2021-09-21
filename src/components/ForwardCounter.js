//import { useState} from 'react';
import useCounter from '../hooks/use-counter'
import Card from './Card';

const ForwardCounter = () => {

  const counter = useCounter();
  
  //const [counter, setCounter] = useState(0);
  
/*   useEffect(() => {
    console.log('effect')
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    
    return () => {
      console.log('cleanup')
      clearInterval(interval);
    }
  }, []);  */

  return (
    <Card>
      {counter}
    </Card>
  )
  
};

export default ForwardCounter;