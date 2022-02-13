import './App.css';
import 'tachyons'
import SearchBox from './SearchBox';
import CardList from './CardList';
import { useEffect, useState } from 'react';

function App() {
  const robots = [
    {
      key: 'robot1',
      name: 'qweqwe eqeqeqeqe',
      email: 'qweqwe@gmail.com',
      imgSource: 'https://robohash.org/test?200x200'
    },
    {
      key: 'robot2',
      name: 'sdand s,dasd;am',
      email: 'asdasd@gmail.com',
      imgSource: 'https://robohash.org/test?200x200'
    },
    {
      key: 'robot3',
      name: 'zxczxc czczcz',
      email: 'zxczxc@gmail.com',
      imgSource: ''
    },
    {
      key: 'robot4',
      name: 'rtyrty ryryry',
      email: 'rtyrty@gmail.com',
      imgSource: 'https://robohash.org/test?200x200'
    },
    {
      key: 'robot5',
      name: 'uiouio uououuo',
      email: 'uiouio@gmail.com',
      imgSource: ''
    },
  ]
  const [searchTerm, updateSearchTerm] = useState({
    robots: [],
    searchTerm: ''
  })  

  useEffect(()=>{
    const fetchRobots = async () =>{
      const robots = await (await fetch('https://jsonplaceholder.typicode.com/users').catch(err => {console.log('ERROR REPORT ', err)})).json()
      
      updateSearchTerm({ robots: robots.map(robot=>({...robot, imgSource: 'https://robohash.org/test?200x200'})), searchTerm: searchTerm.searchTerm })
    }
    // Getting the robo data
      fetchRobots(updateSearchTerm, searchTerm.searchTerm);
  },[])

  const searchChange = (searchString) =>{
    updateSearchTerm({...searchTerm, searchTerm: searchString})
  }

  const filteredRobots = searchTerm.robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchTerm.searchTerm.toLowerCase())
  })

  console.log('FITLERED ROBOTS', filteredRobots)

  return (
    <main className='tc'>
      <h1>roboFriends</h1>
      <SearchBox searchChange={searchChange} />
      <CardList robots={filteredRobots} />
    </main>
  );
}

export default App;
