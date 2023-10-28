import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';


function App() {

    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <>
            <Header />
            <main>
                <section id='core-concepts'>
                    <h2>Core Concept</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}

                        {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={CORE_CONCEPTS[0].image} /> */}
                        {/* <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} img={CORE_CONCEPTS[1].image} /> */}
                        {/* <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} img={CORE_CONCEPTS[2].image} /> */}
                        {/* <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} img={CORE_CONCEPTS[3].image} /> */}

                        {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}
                        {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */}
                        {/* <CoreConcept {...CORE_CONCEPTS[2]} /> */}
                        {/* <CoreConcept {...CORE_CONCEPTS[3]} /> */}
                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {/* {!selectedTopic ? <p>Please select a topic.</p> : null} */}
                    {/* {!selectedTopic && <p>Please select a topic.</p>} */}
                    {tabContent}  
                </section>
            </main>
        </>
    );
}

export default App;