function TabContent ({content, handleReset}){
        return(
            <div id="tab-content">


                    <h3>{content.title}</h3>
                        <p>{content.description}</p>
                        <pre>
                            <code>
                            {content.code}
                            </code>
                        </pre>
                        <button onClick={handleReset}>Reset</button>


          </div>

        )

}

export default TabContent;