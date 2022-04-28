
import { useState, useEffect } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import { fetchData, fetchPeopleData } from './actions';
import { Container, InputWrap, Input, Result, ListData, ListItem, Title } from './components/style';

function App() {
  const [searchVal, setSearchVal] = useState('');
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(`I can see you're not typing. I can use "${searchVal}" now!`);
      searchVal != "" ? dispatch(fetchPeopleData(searchVal)) : dispatch(fetchData(''));
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchVal]);

  const handleInput = (e) => {
    setTimeout(() => {
      setSearchVal(e.target.value);
    }, 1000);
  }

  const peoples = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log('peoples : ', peoples);
  
  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <b key={Math.random()+Math.random()}>{part}</b> : part);
  }
  
  return (
    <Container>
      <InputWrap theme={{ borderRadiusBottmLeft: peoples.peopleReducer.data ? "0" : "0.8rem", borderRadiusBottmRight: peoples.peopleReducer.data ? "0" : "0.8rem" }}>
        <Input 
          autoComplete='none'
          onChange={handleInput}
          type="text" 
          name="people-search" 
          id="people-search" 
          placeholder="Search Peoples"
        />
      </InputWrap>
      <Result>
      {peoples.peopleReducer.data && 
        <ListData>
          {
            peoples.peopleReducer.data.results.map((people) => {
              return (
                <ListItem key={Math.random()}>
                  <Title>{getHighlightedText(people.name, searchVal)}</Title>
                </ListItem>
              );
            })
          }
        </ListData>
      }
      </Result>
    </Container>
  );
}

export default App;
