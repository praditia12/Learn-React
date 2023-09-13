import PlaceContentCenter from './components/PlaceContentCenter';
import Timers from './components/Timers';
import Card from './components/Card';

function App() {
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>useEffect</Card.Title>
                <Card.Body>
                    <Timers />
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
