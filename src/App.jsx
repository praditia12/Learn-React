import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useRef } from 'react';

function App() {
    const inputRef = useRef();

    function handleClick() {
        inputRef.current.focus();

        // console.log(inputRef.current);
    }
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>UseRef</Card.Title>
                <Card.Body>
                    <Input ref={inputRef} />
                    <Button onClick={handleClick}>Test</Button>
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
