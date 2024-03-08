import { CORE_CONCEPTS } from "../../data";
import Section from "../Section";
import CoreConcept from "./CoreConcept/CoreConcept";

function CoreConcepts (){
    return (
        <Section id="core-concepts" title="Core Concepts">
        <ul>
        {CORE_CONCEPTS.map((conceptItem) =>
            <CoreConcept key={conceptItem.title} {...conceptItem}/>
          )}
          {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept image={CORE_CONCEPTS[3].image} title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}/>
   */}        </ul>
        </Section>
    )
}

export default CoreConcepts;