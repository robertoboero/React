import { EXAMPLES } from "../../data"
import TabButton from "../TabButton/TabButton"
import TabContent from "../TabContent/TabContent"
import { useState } from "react"
import Section from "../Section"
import Tabs from "../TabButton/Tabs"

function Examples(){
    const [selectTopic, setSelectTopic] = useState()

    function handleClick(selectedButton){
      setSelectTopic(selectedButton);

    }
    function handleReset(){
      setSelectTopic(null)
    }
    return (
        <Section title="Examples" id="examples" className="Ciao">
        <Tabs buttonsContainer='menu'
        buttons={
            <>
                <TabButton isSelected={selectTopic === 'components'} onClick={( ) => handleClick('components')} >Components</TabButton>
                <TabButton isSelected={selectTopic === 'jsx'} onClick={( ) => handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectTopic === 'props'} onClick={( ) => handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectTopic === 'state'} onClick={( ) => handleClick('state')} >State</TabButton>
            </>
        }>
            {!selectTopic ?
            (<div id="tab-content"><p>Please select</p></div> ):
            (<TabContent content={EXAMPLES[selectTopic]} handleReset={handleReset}/>)}
        </Tabs>
      </Section>
    )

}
export default Examples