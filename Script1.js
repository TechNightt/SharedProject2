// JavaScript source code
import { Button, ThemeProvider } from 'react-native-elements';

const MyApp = () => {
    return (
        <ThemeProvider>
            <Button title="Hey!" />
        </ThemeProvider>
    );
};

constructor() {
    super()
    this.state = {
        selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
}

updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
}

render() {
    const buttons = ['Hello', 'World', 'Buttons']
    const { selectedIndex } = this.state

    return (
        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 100 }}
        />
    )
}

constructor() {
    super()
    this.state = {
        selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
}
updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
}

const component1 = () => <Text>Hello</Text>
const component2 = () => <Text>World</Text>
const component3 = () => <Text>ButtonGroup</Text>

render() {
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    const { selectedIndex } = this.state
    return (
        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 100 }} />
    )
}