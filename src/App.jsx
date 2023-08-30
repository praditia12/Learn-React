import Button from './components/Button';
import Card from './components/Card';

function App() {
    return (
        <div className={'bg-slate-100 grid text-slate-800 tracking-thight antialiased flex items-center justify-center min-h-screen'}>
            <div className='max-w-xl w-full'>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde sit dolores ratione, sunt, consectetur quaerat totam
                        pariatur, animi fugit consequuntur possimus ipsum repellat corrupti explicabo ea deleniti nostrum soluta.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

// eslint-disable-next-line no-unused-vars
const Title = () => <h1>Hello Mylife</h1>; // use style es6

export default App;
