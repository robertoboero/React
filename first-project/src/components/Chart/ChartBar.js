import './ChartBar.css';

const ChartBar = props => {

let barFillHeight = '0%';
if (props.maxValue > 0){
    barFillHeight = Math.round((props.value / props.maxValue) * 100)+'%';
}


    return(
    <div className='chart-bar'>
        <div className='char-bar__inner'>
            <div className='chart-bar__fill' style={
                {height:barFillHeight} //per il css si usano gli oggetti {}
                }></div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    </div>
    )
};

export default ChartBar;