import './loader.css';

function Loader({title, description}) {
    return (
        <div id="fullscreenLoader">
            <div id="foregroundOverlay">
                <div className='sk-spinner'>
                    <h1 className="title">{title}</h1>
                    <div className='sk-spinner-pulse'></div>  
                    <h3 className="description">{description}</h3>  
                </div>
            </div>
        </div>
    );
}

export default Loader;