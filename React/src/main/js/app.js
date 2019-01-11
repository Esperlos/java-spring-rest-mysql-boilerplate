import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cars: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/all'}).done(response => {
            this.setState({cars: response.entity});
        });
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Blossom
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Card style={{margin:16,alignItems:'center',justifyContent:'center'}}>
                    <CardContent>
                <List component="nav">
                    {this.state.cars.map((car,index) =>
                        <ListItem style={{alignItems:'center',justifyContent:'center'}}>
                            <ListItemText key={index} primary={car.name} />
                        </ListItem>
                    )}
                </List>
                    </CardContent>
                </Card>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('react')
);